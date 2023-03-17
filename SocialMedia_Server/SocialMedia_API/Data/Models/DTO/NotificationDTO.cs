namespace SocialMedia_API.Data.Models.DTO
{
    public class NotificationDTO
    {
        public Notification Notification { get; set; }
        public string Username { get; set; }
        public string UserImg { get; set; }
        public PostDTO Post { get; set; }
    }
}
