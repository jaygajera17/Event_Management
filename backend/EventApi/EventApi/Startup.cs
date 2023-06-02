using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace EventApi
{
    public class Startup
    {
        public IConfiguration ConfigRoot
        {
            get;
        }

        public Startup(IConfiguration configuration)
        {
            ConfigRoot = configuration;
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment environment)
        {
            app.UseCors("AllowLocalhost3000");
            

            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        }
       
        public void ConfigureServices(IServiceCollection services)
        {

           

            services.AddCors(options =>
            {
                
                    options.AddPolicy("AllowLocalhost3000",
                        builder =>
                        {
                            builder.WithOrigins("http://localhost:3000")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                                

               
                });
            });
           


            // Other service configurations
        }
    }
}
