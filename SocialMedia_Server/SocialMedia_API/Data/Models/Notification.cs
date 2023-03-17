using SocialMedia_API.Data.Models.Enums;

namespace SocialMedia_API.Data.Models
{
    public class Notification
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public NotificationType Type { get; set; }
        public string? NotifierId { get; set; }
        public int PostId { get; set; }
        public bool IsRead { get; set; }
        public DateTime CreatedTime { get; set; }

    }
}
