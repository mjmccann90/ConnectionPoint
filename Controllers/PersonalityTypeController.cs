﻿using System;
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
        private readonly PersonalityTypeRepository _personalityTypeRepository;


        public PersonalityTypeController(ApplicationDbContext context)
        {
            _personalityTypeRepository = new PersonalityTypeRepository(context);

        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_personalityTypeRepository.GetAll());
        }
    }
}