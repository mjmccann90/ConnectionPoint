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

        // Gets all the User Types 
        public List<UserType> GetAll()
        {
            return _context.UserType
                .ToList();
        }
    }
}
