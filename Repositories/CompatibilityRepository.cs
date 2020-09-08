using ConnectionPoint.Data;
using ConnectionPoint.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ConnectionPoint.Repositories
{
    public class CompatibilityRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly JobRepository _jobRepository;
        private readonly UserProfileRepository _userProfileRepository;

        public CompatibilityRepository(ApplicationDbContext context)
        {
            _context = context;
            _jobRepository = new JobRepository(context);
            _userProfileRepository = new UserProfileRepository(context);

        }

        // Get Compatibility Score and Explanation for Applicant Personality Type and Manager Personality Type
        public Compatibility GetCompatibilityScore(int applicantPersonalityTypeId, 
            int managerPersonalityTypeId)
        {
            return _context.Compatibility
                            .Include(c => c.ApplicantPersonalityType)
                            .Include(c => c.ManagerPersonalityType)
                            .Where(c => c.ApplicantPersonalityTypeId 
                                == applicantPersonalityTypeId)
                            .Where(c => c.ManagerPersonalityTypeId 
                                == managerPersonalityTypeId)
                            .FirstOrDefault();
        }

        // Retrieve all Compatibilities
        public List<PersonalityConnectionPoint> GetAll(UserProfile currentUser)
        {
            // Initialize ConnectionPoints list
            List<PersonalityConnectionPoint> connectionPoints = new List<PersonalityConnectionPoint>();
            List<Job> jobs = new List<Job>();

            // If Current User is a Manager, only retrieve Jobs posted by them.
            if (currentUser.UserTypeId == UserType.MANAGER_USER_TYPE_ID)
            {
                jobs = _jobRepository.GetByManagerId(currentUser.Id);
            }
            // If Current User is an Applicant, retrieve all Jobs available
            else
            {
                jobs = _jobRepository.GetAll();
            }

            // Loop through each Job retrieved
            foreach (Job job in jobs)
            {
                // Retrieve PersonalityTypeId of the Current Job's Manager
                int managerPersonalityTypeId = job.Manager.PersonalityTypeId;

                // If Current User is a Manager
                if (currentUser.UserTypeId == UserType.MANAGER_USER_TYPE_ID)
                {
                    // Retrieve all Users that are Applicants
                    List<UserProfile> applicantUsers = _userProfileRepository.GetUserProfileByUserType(UserType.APPLICANT_USER_TYPE_ID);

                    // Loop through each Applicant retrieved
                    foreach (UserProfile applicant in applicantUsers)
                    {
                        // Retrieve PersonalityType from Applicant's User Profile
                        int applicantPersonalityTypeId = applicant.PersonalityTypeId;

                        // Determine Compatibility Score for Applicant and Manager's Personality Type
                        Compatibility compatibility = GetCompatibilityScore(applicantPersonalityTypeId, managerPersonalityTypeId);

                        // Add Record to the personalityConnectionPoint List
                        PersonalityConnectionPoint personalityConnectionPoint = new PersonalityConnectionPoint
                        {
                            Job = job,
                            Applicant = applicant,
                            Compatibility = compatibility
                        };
                        connectionPoints.Add(personalityConnectionPoint);
                    }
                }
                // If Current User is an Applicant
                else
                {
                    // Retrieve PersonalityType from Applicant's User Profile
                    int applicantPersonalityTypeId = currentUser.PersonalityTypeId;

                    // Determine Compatibility Score for Applicant and Manager's Personality Type
                    Compatibility compatibility = GetCompatibilityScore(applicantPersonalityTypeId, managerPersonalityTypeId);

                    // Add Record to the personalityConnectionPoint List
                    PersonalityConnectionPoint personalityConnectionPoint = new PersonalityConnectionPoint
                    {
                        Job = job,
                        Applicant = currentUser,
                        Compatibility = compatibility
                    };
                    connectionPoints.Add(personalityConnectionPoint);
                }
            }
            connectionPoints = connectionPoints.OrderBy(cp => cp.Job.Id).ToList();
                return connectionPoints;
        }
    }
}
