using System.ComponentModel.DataAnnotations;

namespace EventApi.Models
{
    public class User
    {
        
        [Key]
        public long U_Id { get; set; }
        [Required]
        public string? UserName { get; set; }
        [Required]
        public string? Password { get; set; }
        public string? UserEmail { get; set; }
        public string? ContactNumber { get; set; }
        public bool? IsOrganiser { get; set; }

        
    }
}
