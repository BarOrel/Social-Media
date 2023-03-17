using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SocialMedia_API.Data.Models.Enums;
using SocialMedia_API.Data.Models;
using Microsoft.AspNetCore.Identity;
using SocialMedia_API.Data.Repository.Generic;
using SocialMedia_API.Services.PostService;

namespace SocialMedia_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikeController : ControllerBase
    {
        private readonly IGenericRepository<Post> postRepository;
        private readonly UserManager<User> userManger;
        private readonly IGenericRepository<Like> likeRepository;
        private readonly IGenericRepository<Comment> commentRepository;
        private readonly IPostService postService;
        private readonly IGenericRepository<Follow> followRepository;
        private readonly IGenericRepository<Notification> notificationRepository;

        public LikeController(IGenericRepository<Post> postRepository
            , UserManager<User> userManger, IGenericRepository<Like> LikeRepository
            , IGenericRepository<Comment> commentRepository, IPostService postService
            , IGenericRepository<Follow> followRepository
            , IGenericRepository<Notification> notificationRepository)
        {
            this.postRepository = postRepository;
            this.userManger = userManger;
            likeRepository = LikeRepository;
            this.commentRepository = commentRepository;
            this.postService = postService;
            this.followRepository = followRepository;
            this.notificationRepository = notificationRepository;
        }

        [HttpPost]
        public async Task<IActionResult> AddLike(Like like)
        {
            var allLikes = await likeRepository.GetAll();
            var les = allLikes.Any(n => n.UserId == like.UserId && n.PostId == like.PostId);
            if (les == false)
            {
                Notification notification = new()
                {
                    NotifierId = like.UserId,
                    PostId = like.PostId,
                    Type = NotificationType.Like
                };
                notification.UserId = postRepository.GetById(like.PostId).Result.UserId;

                if (notification.UserId != notification.NotifierId)
                    await notificationRepository.Insert(notification);

                await likeRepository.Insert(like);
                return Ok(true);

            }
            var Liked = allLikes.Where(n => n.UserId == like.UserId && n.PostId == like.PostId).FirstOrDefault();
            await likeRepository.Delete(Liked);

            return Ok(false);
        }

        [HttpPost("isLiked")]
        public async Task<IActionResult> IsLiked(Like like)
        {
            var allLikes = await likeRepository.GetAll();
            var Liked = allLikes.Where(n => n.UserId == like.UserId && n.PostId == like.PostId).FirstOrDefault();
            if (Liked != null)
            {
                return Ok(true);

            }
            return Ok(false);
        }
    }
}
