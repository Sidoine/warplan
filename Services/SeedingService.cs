using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Warplan.Data;

namespace Warplan.Services
{
    public class SeedingService
    {
        private readonly ApplicationDbContext applicationDbContext;

        public SeedingService(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task Seed()
        {
            await this.applicationDbContext.Database.MigrateAsync();
        }
    }
}
