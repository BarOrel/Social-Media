using Microsoft.AspNetCore.Identity;
using SocialMedia_API.Data.Models.Enums;

namespace SocialMedia_API.Data.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public string? About { get; set; }
        public string? Images { get; set; }
        public City ?Location { get; set; }


    }
}
