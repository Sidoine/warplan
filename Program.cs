namespace Warplan
{
    using Folke.CsTsService;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc.ApplicationParts;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.Extensions.Logging;
    using Microsoft.Extensions.Options;
    using System;
    using System.Threading.Tasks;
    using Warplan.Services;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var webHost = CreateHostBuilder(args).Build();

            using (var scope = webHost.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                try
                {
                    var seedingService = services.GetRequiredService<SeedingService>();
                    await seedingService.Seed();
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }

                var env = services.GetRequiredService<IOptions<WarplanOptions>>();
                if (env.Value.GenerateTypeScriptServices)
                {
                    try
                    {
                        services.GetRequiredService<ApplicationPartManager>().CreateTypeScriptServices("warplan/packages/web/services", 0);
                    }
                    catch (Exception ex)
                    {
                        var logger = services.GetRequiredService<ILogger<Program>>();
                        logger.LogError(ex, "An error occurred while generating the services.");
                    }
                }
            }
            webHost.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    string? port = Environment.GetEnvironmentVariable("PORT");
                    if (port != null)
                    {
                        webBuilder.UseUrls($"http://*:{port}");
                    }
                    webBuilder.UseStartup<Startup>();
                });
    }
}
