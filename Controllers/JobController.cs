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
        private readonly UserProfileRepository _userProfileRepository;
        private readonly JobRepository _jobRepository;


        public JobController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
            _jobRepository = new JobRepository(context);

        }

        [HttpGet]
        public IActionResult Get()
        {
            UserProfile currentUserProfile = GetCurrentUserProfile();
            if (_userProfileRepository.IsCurrentUserManager(currentUserProfile))
            {
                return Ok(_jobRepository.GetAll());
            }
            else
            {
                return Ok(_jobRepository.GetOpenJobs(currentUserProfile.Id));
            }
        }

        private UserProfile GetCurrentUserProfile()
        {
            //var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            //var firebaseUserId = "574dojd22x"; //manager
            //var firebaseUserId = "ku60n3epn6"; //applicant with no job applications
            var firebaseUserId = "5kst523k5t";
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
