using SocialMedia_API.Data.Models.DTO;

namespace SocialMedia_API.Services.PostService
{
    public interface IPostService
    {
        Task<List<PostDTO>> GetExplore();
        Task<PostDTO> GetPostDtoById(int Id);
    }
}
