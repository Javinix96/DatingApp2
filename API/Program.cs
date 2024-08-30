using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.xs

builder.Services.AddControllers();
builder.Services.AddAplicationServices(builder.Configuration);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddIdentityservice(builder.Configuration);
// builder.Services.AddCors();

var app = builder.Build();


app.UseCors((builder) => builder.AllowAnyHeader().AllowAnyHeader().WithOrigins("http://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
