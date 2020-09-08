using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ConnectionPoint.Data;
using ConnectionPoint.Models;
using ConnectionPoint.Repositories;

namespace ConnectionPoint.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        // Initializing user profile repository
        private readonly UserProfileRepository _userProfileRepository;

        // Value is assigned to user profile repository
        public UserProfileController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
        }

        // Method to retrieve user profile by firebase user Id
        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        // Method to add user profile through the Register page
        [HttpPost]
        public IActionResult Register(UserProfile userProfile)
        {
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = userProfile.FirebaseUserId }, userProfile);
        }
    }
}
