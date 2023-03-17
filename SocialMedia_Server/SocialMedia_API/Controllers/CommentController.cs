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
    public class CommentController : ControllerBase
    {

        private readonly IGenericRepository<Post> postRepository;
        private readonly UserManager<User> userManger;
        private readonly IGenericRepository<Like> likeRepository;
        private readonly IGenericRepository<Comment> commentRepository;
        private readonly IPostService postService;
        private readonly IGenericRepository<Follow> followRepository;
        private readonly IGenericRepository<Notification> notificationRepository;

        public CommentController(IGenericRepository<Post> postRepository
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
        public async Task<IActionResult> AddComment(Comment comment)
        {
            comment.CreatedTime = DateTime.Now;

            Notification notification = new()
            {
                CreatedTime = DateTime.Now,
                NotifierId = comment.UserId,
                PostId = comment.PostId,
                Type = NotificationType.Comment
            };
            notification.UserId = postRepository.GetById(comment.PostId).Result.UserId;

            if (notification.UserId != notification.NotifierId)
                await notificationRepository.Insert(notification);

            await commentRepository.Insert(comment);
            return Ok(comment);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            var comment = await commentRepository.GetById(id);
            await commentRepository.Delete(comment);
            return Ok(comment);

        }


    }
}
