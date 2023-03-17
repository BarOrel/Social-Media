namespace SocialMedia_API.Data.Models.DTO.User
{
    public class ProfileDTO
    {
        public string FullName { get; set; }
        public string ?ImageUrl { get; set; }
        public int FollowCounter { get; set; }
        public int FollowingCounter { get; set; }
        public List<PostDTO> ?Posts { get; set; } = new List<PostDTO>();

    }
}
