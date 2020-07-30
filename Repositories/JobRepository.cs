using ConnectionPoint.Data;
using ConnectionPoint.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace ConnectionPoint.Repositories
{
    public class JobRepository
    {
        private readonly ApplicationDbContext _context;

        public JobRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Gets all the jobs 
        public List<Job> GetAll()
        {
            return _context.Job
                .Include(j => j.Manager)
                .ToList();
        }

        // Gets all the open jobs that haven't been applied for by a user
        public List<Job> GetOpenJobs(int applicantId)
        {
            return _context.Job
                .Include(j => j.Manager)
                .Where(j => !(_context.JobApplication
                    .Where(ja => (j.Id == ja.JobId)
                        && (ja.ApplicantId == applicantId)).Any()))
                .ToList();
        }
    }
}
