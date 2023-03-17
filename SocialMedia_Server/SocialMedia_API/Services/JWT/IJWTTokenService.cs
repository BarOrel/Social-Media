
using Microsoft.IdentityModel.Tokens;
using SocialMedia_API.Data.Models;

namespace ToDoListPractice.Data.Services.JWT
{
    public interface IJWTTokenService
    {
        string GenerateToken(User user);
      
    }
}
