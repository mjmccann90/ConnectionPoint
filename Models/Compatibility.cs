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

        public int ApplicantPersonalityTypeId { get; set; }

        public int ManagerPersonalityTypeId { get; set; }

        [Required]
        [MaxLength(20)]
        public string CompatibilityScore { get; set; }

        [Required]
        [MaxLength(4000)]
        public string ScoreExplanation { get; set; }
    }
}
