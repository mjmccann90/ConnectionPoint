using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Models
{
    public class PersonalityConnectionPoint
    {
        [Required]
        public Job Job { get; set; }

        [Required]
        public UserProfile Applicant { get; set; }

        public Compatibility Compatibility { get; set; }
    }
}
