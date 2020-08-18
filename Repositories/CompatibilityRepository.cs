using ConnectionPoint.Data;
using ConnectionPoint.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Repositories
{
    public class CompatibilityRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly JobApplicationRepository _jobApplicationRepository;

        public CompatibilityRepository(ApplicationDbContext context)
        {
            _context = context;
            _jobApplicationRepository = new JobApplicationRepository(context);

        }

        public Compatibility GetCompatibilityScore(int applicantPersonalityTypeId, int managerPersonalityTypeId)
        {
            return _context.Compatibility
                            .Include(c => c.ApplicantPersonalityType)
                            .Include(c => c.ManagerPersonalityType)
                            .Where(c => c.ApplicantPersonalityTypeId == applicantPersonalityTypeId)
                            .Where(c => c.ManagerPersonalityTypeId == managerPersonalityTypeId)
                            .FirstOrDefault();
        }

        public List<PersonalityConnectionPoint> GetAll()
        {
            List<PersonalityConnectionPoint> connectionPoints = new List<PersonalityConnectionPoint>();
            List<JobApplication> jobApplications = _jobApplicationRepository.GetAll();

            foreach (JobApplication jobApplication in jobApplications)
            {
                int applicantPersonalityTypeId = jobApplication.Applicant.PersonalityTypeId;
                int managerPersonalityTypeId = jobApplication.Job.Manager.PersonalityTypeId;
                Compatibility compatibility = GetCompatibilityScore(applicantPersonalityTypeId, managerPersonalityTypeId);
                PersonalityConnectionPoint personalityConnectionPoint = new PersonalityConnectionPoint
                {
                    JobApplication = jobApplication,
                    Compatibility = compatibility
                };
                connectionPoints.Add(personalityConnectionPoint);
            }
            connectionPoints = connectionPoints.OrderBy(cp => cp.JobApplication.JobId).ToList();
                return connectionPoints;
        }

        public List<PersonalityConnectionPoint> GetConnectionPointsForApplicantId(int id)
        {
            List<PersonalityConnectionPoint> connectionPoints = new List<PersonalityConnectionPoint>();
            List<JobApplication> jobApplications = _jobApplicationRepository.GetAllByApplicantId(id);

            foreach (JobApplication jobApplication in jobApplications)
            {
                int applicantPersonalityTypeId = jobApplication.Applicant.PersonalityTypeId;
                int managerPersonalityTypeId = jobApplication.Job.Manager.PersonalityTypeId;
                Compatibility compatibility = GetCompatibilityScore(applicantPersonalityTypeId, managerPersonalityTypeId);
                PersonalityConnectionPoint personalityConnectionPoint = new PersonalityConnectionPoint
                {
                    JobApplication = jobApplication,
                    Compatibility = compatibility
                };
                connectionPoints.Add(personalityConnectionPoint);
            }
            connectionPoints = connectionPoints.OrderBy(cp => cp.JobApplication.JobId).ToList();
                return connectionPoints;
        }
    }
}
