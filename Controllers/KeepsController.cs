using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class KeepsController : Controller
    {
        public KeeprContext _db {get; private set;}
        public KeepsController(KeeprContext db)
        {
            _db = db;
        }
        // GET api/keeps
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _db.Keeps;
        }

        // GET api/keeps/5
        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            return _db.Keeps.Find(id);
        }

        // POST api/keeps
        [Authorize]
        [HttpPost]
        public IEnumerable<Keep> Post([FromBody]Keep keep)
        {
            _db.Keeps.Add(keep);
            _db.SaveChanges();
            return _db.Keeps;
        }

        // PUT api/keeps/5
        [HttpPut("{id}")]
        public IEnumerable<Keep> Put(int id, [FromBody]Keep value)
        {
            var ToPut = _db.Keeps.Find(id);
            ToPut.Title = value.Title;
            ToPut.Description = value.Description;
            ToPut.ImgUrl = value.ImgUrl;

            _db.Keeps.Update(ToPut);
            _db.SaveChanges();
            return _db.Keeps;
        }

        // DELETE api/Vaults/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            _db.Remove(_db.Keeps.Find(id));
            _db.SaveChanges();
            return "Deleted";
        }
    }
}