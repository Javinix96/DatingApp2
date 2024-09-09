using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationService
    {
       public static IServiceCollection AddAplicationServices(this IServiceCollection services,
            IConfiguration config)
       {
            services.AddDbContext<DataContext>(opt => 
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConection"));
            });
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();  

            return services;
       } 
    }
}