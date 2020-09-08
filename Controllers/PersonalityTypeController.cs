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
    public class PersonalityTypeController : ControllerBase
    {
        // Initializing personality type repository
        private readonly PersonalityTypeRepository _personalityTypeRepository;

        // Value is assigned to personality type repository
        public PersonalityTypeController(ApplicationDbContext context)
        {
            _personalityTypeRepository = new PersonalityTypeRepository(context);

        }

        // Method to retrieve all personality types for Register page dropdown
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_personalityTypeRepository.GetAll());
        }
    }
}
