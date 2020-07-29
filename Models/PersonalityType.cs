using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectionPoint.Models
{
    public class PersonalityType
    {
        
        public int Id { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string Description { get; set; }

        public string PersonalityPoints { get; set; }
    }

}
