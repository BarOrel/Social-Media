namespace SocialMedia_API.Data.Models
{
    public class Like
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int PostId { get; set; }
        public DateTime CreatedTime { get; set; } = DateTime.Now;

    }
}
