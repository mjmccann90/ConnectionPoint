using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Models
{
    public class Compatibility
    {
        public int Id { get; set; }

        [Required]
        public int ApplicantPersonalityTypeId { get; set; }
        public PersonalityType ApplicantPersonalityType { get; set; }

        [Required]
        public int ManagerPersonalityTypeId { get; set; }
        public PersonalityType ManagerPersonalityType { get; set; }


        [Required]
        [MaxLength(20)]
        public string CompatibilityScore { get; set; }

        [MaxLength(4000)]
        public string ScoreExplanation { get; set; }
    }
}
