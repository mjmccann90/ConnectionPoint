using Microsoft.EntityFrameworkCore;
using System.Linq;
using ConnectionPoint.Data;
using ConnectionPoint.Models;

namespace ConnectionPoint.Repositories
{
    public class UserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                .Include(up => up.UserType)
                .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }

        public bool IsCurrentUserManager(UserProfile userProfile)
        {
            if (userProfile.UserTypeId == UserType.ADMIN_TYPE_ID)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
