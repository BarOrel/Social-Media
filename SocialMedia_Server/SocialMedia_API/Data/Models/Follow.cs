namespace SocialMedia_API.Data.Models
{
    public class Follow
    {
        public int Id { get; set; }
        public string FollowerId { get; set; }
        public string FollowingId { get; set; }
        public DateTime CreatedTime { get; set; }
    }
}
