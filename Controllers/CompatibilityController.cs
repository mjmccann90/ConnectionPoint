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
    public class CompatibilityController : ControllerBase
    {
        // Initializing user profile and compatibility repositories
        private readonly UserProfileRepository _userProfileRepository;
        private readonly CompatibilityRepository _compatibilityRepository;

        // Value is assigned to user profile and compatibility repositories
        public CompatibilityController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
            _compatibilityRepository = new CompatibilityRepository(context);

        }

        // Get method to retrieve compatibilities
        [HttpGet]
        public IActionResult Get()
        {
            UserProfile currentUserProfile = GetCurrentUserProfile();
            return Ok(_compatibilityRepository.GetAll(currentUserProfile));
        }

        // Method to retrieve user profile using the current user's firebase user id
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
