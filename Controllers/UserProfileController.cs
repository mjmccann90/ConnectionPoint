﻿using Microsoft.AspNetCore.Authorization;
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
        private readonly UserProfileRepository _userProfileRepository;
        public UserProfileController(ApplicationDbContext context)
        {
            _userProfileRepository = new UserProfileRepository(context);
        }

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

        [HttpPost]
        public IActionResult Register(UserProfile userProfile)
        {
            // All newly registered users start out as a "user" user type (i.e. they are not admins)
            //userProfile.UserTypeId = UserType.USER_TYPE_ID;
            //userProfile.PersonalityTypeId = 4; // Default to 4 (ENFJ)
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId), new { firebaseUserId = userProfile.FirebaseUserId }, userProfile);
        }
    }
}
