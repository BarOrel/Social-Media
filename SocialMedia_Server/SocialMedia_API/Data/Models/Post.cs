namespace SocialMedia_API.Data.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? ImgUrl { get; set; }
        public DateTime CreatedTime { get; set; } = DateTime.Now;
        public DateTime UpdatedTime { get; set;}
    }
}
