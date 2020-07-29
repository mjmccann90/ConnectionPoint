using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Models
{
    public class JobApplication
    {
        public int Id { get; set; }

        [Required]
        public int ApplicantId { get; set; }
        public UserProfile Applicant { get; set; }


        [Required]
        public int JobId { get; set; }
        public Job Job { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }
    }
}
