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
    public class VaultsController : Controller
    {
        public KeeprContext _db {get; private set;}
        public VaultsController(KeeprContext db)
        {
            _db = db;
        }


        // GET api/vaults
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return _db.Vaults;
        }

        // GET api/Vaults/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return _db.Vaults.Find(id);
        }

        // POST api/Vaults
        [Authorize]
        [HttpPost]
        public IEnumerable<Vault> Post([FromBody]Vault value)
        {
            // add owners
            value.Owners.Add(value.UserId);
            _db.Vaults.Add(value);
            var user =_db.Users.Find(value.UserId);
            // _db.user.MyVaults.Add(value);

            user.MyVaults.Add(value);
            // user.MyVaults.Add(value);
            _db.SaveChanges();
            return _db.Vaults;
        }

        // PUT api/Vaults/5
        [HttpPut("{id}")]
        public IEnumerable<Vault> Put(int id, [FromBody]Vault value)
        {
            var ToPut = _db.Vaults.Find(id);
            ToPut.Title = value.Title;
            ToPut.Description = value.Description;
            ToPut.ImgUrl = value.ImgUrl;
            ToPut.Keeps = value.Keeps;

            _db.Vaults.Update(ToPut);
            _db.SaveChanges();
            return _db.Vaults;
        }

        // DELETE api/Vaults/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            _db.Remove(_db.Vaults.Find(id));
            _db.SaveChanges();
            return "Deleted";
        }
    }
}