namespace SocialMedia_API.Data.Models.DTO
{
    public class PostDTO
    {
        public string UserId { get; set; }
        public string FullName { get; set; }
        public string UserImg { get; set; }
        public int LikesCounter { get; set; }
        public int CommentsCounter { get; set; }
        public List<CommentDTO> Comments { get; set; }
        public Post Post { get; set; }
    }
}
