namespace SocialMedia_API.Data.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int PostId { get; set; }
        public string? ImgUrl { get; set; }
        public string? Content { get; set; }
        public DateTime CreatedTime { get; set; } = DateTime.Now;
        public DateTime UpdatedTime { get; set;}
    }
}
