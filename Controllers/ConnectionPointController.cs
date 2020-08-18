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
    public class ConnectionPointController : ControllerBase
    {
        private readonly UserProfileRepository _userProfileRepository;
        private readonly CompatibilityRepository _compatibilityRepository;

        public ConnectionPointController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
            _compatibilityRepository = new CompatibilityRepository(context);

        }

        [HttpGet]
        public IActionResult Get()
        {
            UserProfile currentUserProfile = GetCurrentUserProfile();
            if (_userProfileRepository.IsCurrentUserManager(currentUserProfile))
            {
                return Ok(_compatibilityRepository.GetAll());
            }
            else
            {
                return Ok(_compatibilityRepository.GetConnectionPointsForApplicantId(currentUserProfile.Id));
            }
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            //var firebaseUserId = "574dojd22x"; //manager
            //var firebaseUserId = "ku60n3epn6"; //applicant with no job applications
            //var firebaseUserId = "5kst523k5t";
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
