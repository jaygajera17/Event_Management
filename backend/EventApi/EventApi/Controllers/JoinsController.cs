using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EventApi.Models;

namespace EventApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JoinsController : ControllerBase
    {
        private readonly EventContext _context;

        public JoinsController(EventContext context)
        {
            _context = context;
        }

        // GET: api/Joins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Join>>> GetJoin()
        {
          if (_context.Join == null)
          {
              return NotFound();
          }
            return await _context.Join.ToListAsync();
        }

        // GET: api/Joins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Join>> GetJoin(long id)
        {
          if (_context.Join == null)
          {
              return NotFound();
          }
            var @join = await _context.Join.FindAsync(id);

            if (@join == null)
            {
                return NotFound();
            }

            return @join;
        }

        // PUT: api/Joins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJoin(long id, Join @join)
        {
            if (id != @join.U_Id)
            {
                return BadRequest();
            }

            _context.Entry(@join).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JoinExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Joins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Join>> PostJoin(Join @join)
        {
          if (_context.Join == null)
          {
              return Problem("Entity set 'EventContext.Join'  is null.");
          }
            _context.Join.Add(@join);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJoin", new { id = @join.U_Id }, @join);
        }

        // DELETE: api/Joins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJoin(long id)
        {
            if (_context.Join == null)
            {
                return NotFound();
            }
            var @join = await _context.Join.FindAsync(id);
            if (@join == null)
            {
                return NotFound();
            }

            _context.Join.Remove(@join);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JoinExists(long id)
        {
            return (_context.Join?.Any(e => e.U_Id == id)).GetValueOrDefault();
        }
    }
}
