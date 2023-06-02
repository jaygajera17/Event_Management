using System.ComponentModel.DataAnnotations;

namespace EventApi.Models
{
    public class Join
    {
        [Key]
        public long U_Id { get; set; }
        public string? UserName { get; set; }
        public string? EventName { get; set; }
        public string? ContactNumber { get; set; }
    }
}
