using ConnectionPoint.Data;
using ConnectionPoint.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Repositories
{
    public class JobApplicationRepository
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<JobApplication> GetAll()
        {
            return _context.JobApplication
                .Include(ja => ja.Applicant)
                .Include(ja => ja.Job)
                    .ThenInclude(j => j.Manager)
                .OrderByDescending(ja => ja.DateCreated)
                .ToList();
        }

        public List<JobApplication> GetAllByApplicantId(int id)
        {
            return _context.JobApplication
                .Include(ja => ja.Applicant)
                .Include(ja => ja.Job)
                    .ThenInclude(j => j.Manager)
                .Where(ja => ja.ApplicantId == id)
                .OrderByDescending(ja => ja.DateCreated)
                .ToList();
        }

        public void Add(JobApplication jobApplication)
        {
            jobApplication.DateCreated = DateTime.Now;
            _context.Add(jobApplication);
            _context.SaveChanges();
        }

    }
}
