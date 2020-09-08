using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConnectionPoint.Data;
using ConnectionPoint.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ConnectionPoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTypeController : ControllerBase
    {
        // Initializing user type repository
        private readonly UserTypeRepository _userTypeRepository;

        // Value is assigned to user type repository
        public UserTypeController(ApplicationDbContext context)
        {
            _userTypeRepository = new UserTypeRepository(context);

        }

        // Method to retrieve all user types for Register page dropdown
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userTypeRepository.GetAll());
        }
    }
}
