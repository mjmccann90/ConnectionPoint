using ConnectionPoint.Data;
using ConnectionPoint.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Repositories
{
    public class UserTypeRepository
    {
        private readonly ApplicationDbContext _context;

        public UserTypeRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Gets all the PersonalityTypes 
        public List<UserType> GetAll()
        {
            return _context.UserType
                .ToList();
        }

        public UserType GetById(int id)
        {
            return _context.UserType
                .First(uT => uT.Id == id);
        }
    }
}
