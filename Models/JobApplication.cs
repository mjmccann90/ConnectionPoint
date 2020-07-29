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

        public int ApplicationId { get; set; }

        public int JobId { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }
    }
}
