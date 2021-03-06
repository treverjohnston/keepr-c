using keepr.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace keepr
{
    public class KeeprContext : IdentityDbContext<User>
    {
        // DONT FORGET TO REGISTER YOUR MODELS TO THE DATABASE
        new DbSet<User> Users { get; set; }

        // FOR EACH NEW MODEL INPUT A DBSET LIKE BELOW
        public DbSet<Keep> Keeps { get; set; }
        public DbSet<Vault> Vaults { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=studentprojects.database.windows.net;Database=treversKeeps;User ID=codeworks@studentprojects;Password=Applejuic3;Trusted_Connection=False;Encrypt=True");
        }
        public KeeprContext(DbContextOptions<KeeprContext> options) : base(options)
        {
            // Database.EnsureCreated();
            // Database.Migrate();
        }
    }
}