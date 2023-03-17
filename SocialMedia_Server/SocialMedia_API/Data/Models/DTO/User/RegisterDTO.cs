using SocialMedia_API.Data.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace SocialMedia_API.Data.Models.DTO.User
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public Gender Gender { get; set; }
        public string ImageUrl { get; set; }
    }
}
