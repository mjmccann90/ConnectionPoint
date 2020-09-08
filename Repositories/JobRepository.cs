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

        // Get jobs by Manager Id
        public List<Job> GetByManagerId( int managerId)
        {
            return _context.Job
                .Include(j => j.Manager)
                .Where(j => j.ManagerId == managerId)
                .ToList();
        }

        // Gets job by Id
        public Job GetById(int id)
        {
            return _context.Job
                .Include(j => j.Manager)
                .First(j => j.Id == id);
        }

        // Adds job
        public void Add(Job job)
        {
            _context.Add(job);
            _context.SaveChanges();
        }

        // Updates job
        public void Update(Job job)
        {
            _context.Entry(job).State = EntityState.Modified;
            _context.SaveChanges();
        }

        // Deletes job
        public void Delete(int id)
        {
            var job = GetById(id);
            if (job != null)
            { 
                _context.Job.Remove(job);
                _context.SaveChanges();
            }
        }
    }
}
