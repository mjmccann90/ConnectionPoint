using Microsoft.EntityFrameworkCore;
using System.Linq;
using ConnectionPoint.Data;
using ConnectionPoint.Models;
using System.Collections.Generic;

namespace ConnectionPoint.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Gets user profile by firebase user Id
        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .Include(up => up.UserType)
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        // Adds a user profile
        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        // Returns true if the user profile has a user type = manager
        public bool IsCurrentUserManager(UserProfile userProfile)
        {
            if (userProfile.UserTypeId == UserType.MANAGER_USER_TYPE_ID)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // Gets User Profiles of a certain user type
        public List<UserProfile> GetUserProfileByUserType(int userType)
        {
            return _context.UserProfile
                .Where(u => u.UserTypeId == userType)
                .OrderByDescending(u => u.Id)
                .ToList();
        }
    }
}
