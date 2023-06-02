using System.ComponentModel.DataAnnotations.Schema;

namespace EventApi.Models
{
    public class Event
    {
        public long EventId { get; set; }    
        public string? EventName { get; set; }
        public string? EventDescription { get; set; }
        public string? Type { get; set; } = null;
        public string? Eventlocation { get; set; }         
        public DateTime EventDate { get; set; }
        public string?  EventDuration { get; set; }
        
       
             
    }
}
