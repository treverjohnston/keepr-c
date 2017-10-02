using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep : IThing
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        [Required]
        public string UserId { get; set; }
    }
}