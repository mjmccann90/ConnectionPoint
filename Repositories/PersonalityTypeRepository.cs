using ConnectionPoint.Data;
using ConnectionPoint.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Repositories
{
    public class PersonalityTypeRepository
    {
        private readonly ApplicationDbContext _context;

        public PersonalityTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Gets all the PersonalityTypes 
        public List<PersonalityType> GetAll()
        {
            return _context.PersonalityType
                .ToList();
        }

        public PersonalityType GetById(int id)
        {
            return _context.PersonalityType
                .First(pT => pT.Id == id);
        }
    }
}
