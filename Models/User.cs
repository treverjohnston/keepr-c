using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace keepr.Models
{
    public class User : IdentityUser
    {
        public string ProfileImgUrl { get; set; }
        public List<Vault> MyVaults { get; set; }
    }
}