using Microsoft.EntityFrameworkCore;
namespace EventApi.Models
{
    public class EventContext :DbContext
    {
        public EventContext(DbContextOptions<EventContext> options) : base(options) { }
        public DbSet<Event> Events { get;set; }
        public DbSet<User> Users { get;set; }
        public DbSet<Join> Join { get; set; } 
    }
}
