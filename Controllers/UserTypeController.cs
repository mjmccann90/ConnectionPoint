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
        private readonly UserTypeRepository _userTypeRepository;


        public UserTypeController(ApplicationDbContext context)
        {
            _userTypeRepository = new UserTypeRepository(context);

        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userTypeRepository.GetAll());
        }
    }
}
