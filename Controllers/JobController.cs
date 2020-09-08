using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ConnectionPoint.Data;
using ConnectionPoint.Models;
using ConnectionPoint.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConnectionPoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        // Initializing user profile and job repositories
        private readonly UserProfileRepository _userProfileRepository;
        private readonly JobRepository _jobRepository;


        // Value is assigned to user profile and job repositories
        public JobController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
            _jobRepository = new JobRepository(context);

        }

        // Method to retrieve all jobs
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_jobRepository.GetAll());
        }

        // Method to retrieve jobs posted by a manager
        [HttpGet("{managerId}")]
        public IActionResult GetByManagerId(int managerId)
        {
            var listOfJobs = _jobRepository.GetByManagerId(managerId);
            if (listOfJobs == null)
            {
                return NotFound();
            }
            return Ok(listOfJobs);
        }

        // Method to retrieve user profile using the current user's firebase user id
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        // Method to add a Job
        [HttpPost]
        public IActionResult Post(Job job)
        {
            var currentUser = GetCurrentUserProfile();
            job.ManagerId = currentUser.Id;
            _jobRepository.Add(job);
            return CreatedAtAction("Get", new { id = job.Id }, job);
        }

        // Method to update a Job
        [HttpPut("{id}")]
        public IActionResult Put(int id, Job job)
        {
            if (id != job.Id)
            {
                return BadRequest();
            }

            _jobRepository.Update(job);
            return NoContent();
        }

        // Method to delete a Job
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _jobRepository.Delete(id);
            return NoContent();
        }
    }
}
