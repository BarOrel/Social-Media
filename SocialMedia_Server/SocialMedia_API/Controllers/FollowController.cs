using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SocialMedia_API.Data.Models.DTO.User;
using SocialMedia_API.Data.Models;
using Microsoft.AspNetCore.Identity;
using SocialMedia_API.Data.Repository.Generic;
using SocialMedia_API.Services.PostService;
using ToDoListPractice.Data.Services.JWT;

namespace SocialMedia_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FollowController : ControllerBase
    {

        private readonly SignInManager<User> signInManager;
        private readonly IJWTTokenService tokenService;
        private readonly IGenericRepository<Post> postRepository;
        private readonly UserManager<User> userManger;
        private readonly IGenericRepository<Follow> followRepository;
        private readonly IPostService postService;

        public FollowController(SignInManager<User> signInManager
            , IJWTTokenService tokenService
            , IGenericRepository<Post> postRepository
            , UserManager<User> userManger
            , IGenericRepository<Like> LikeRepository
            , IGenericRepository<Comment> commentRepository
            , IGenericRepository<Follow> followRepository
            , IPostService postService)
        {

            this.signInManager = signInManager;
            this.tokenService = tokenService;
            this.postRepository = postRepository;
            this.userManger = userManger;
            this.followRepository = followRepository;
            this.postService = postService;
        }

        [HttpPost("Follow")]
        public async Task<IActionResult> Follow(FollowDTO followDto)
        {
            var res = await followRepository.GetAll();
            var isFollowed = res.Where(n => n.FollowerId == followDto.UserId && n.FollowingId == followDto.Following).FirstOrDefault();
            if (isFollowed == null)
            {
                Follow follow = new()
                {
                    FollowerId = followDto.UserId,
                    FollowingId = followDto.Following
                };
                await followRepository.Insert(follow);
                return Ok(follow);

            }

            await followRepository.Delete(isFollowed);
            return Ok();



        }

        [HttpPost("IsFollow")]
        public async Task<IActionResult> IsFollowed(FollowDTO followDto)
        {
            var res = await followRepository.GetAll();
            var isFollowed = res.Where(n => n.FollowerId == followDto.UserId && n.FollowingId == followDto.Following).FirstOrDefault();
            if (isFollowed != null)
                return Ok(true);

            return Ok(false);

        }
    }
}
