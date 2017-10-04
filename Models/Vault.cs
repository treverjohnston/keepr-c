using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Vault : IThing
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        
        public List<Keep> Keeps {get; set;}
        public List<Owner> Owners {get; set;}
        [Required]
        public string UserId { get; set; }
    }
}