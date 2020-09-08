using System.ComponentModel.DataAnnotations;

namespace ConnectionPoint.Models
{
    public class UserType
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        // These read-only static properties correspond to the ID values in the database
        //  for the "Manager" and "Applicant" user types.
        public static int MANAGER_USER_TYPE_ID => 1;
        public static int APPLICANT_USER_TYPE_ID => 2;
    }
}
