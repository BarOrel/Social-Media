using Microsoft.AspNetCore.Identity;
using SocialMedia_API.Data.Models;
using SocialMedia_API.Data.Models.DTO;
using SocialMedia_API.Data.Repository.Generic;

namespace SocialMedia_API.Services.PostService
{
    public class PostService : IPostService
    {
        private readonly IGenericRepository<Post> postRepository;
        private readonly UserManager<User> userManger;
        private readonly IGenericRepository<Like> likeRepository;
        private readonly IGenericRepository<Comment> commentRepository;

        public PostService(IGenericRepository<Post> postRepository, UserManager<User> userManger, IGenericRepository<Like> LikeRepository, IGenericRepository<Comment> commentRepository)
        {
            this.postRepository = postRepository;
            this.userManger = userManger;
            likeRepository = LikeRepository;
            this.commentRepository = commentRepository;
        }

        public async Task<PostDTO> GetPostDtoById(int Id)
        {
            PostDTO post = new();
            List<CommentDTO> Comments = new();
            var res = await postRepository.GetById(Id);
            var user = await  userManger.FindByIdAsync(res.UserId);

            post.Post = res;
            var comments = commentRepository.GetAll().Result.Where(n => n.PostId == res.Id).ToList();
            foreach (var item in comments)
            {
                var commentUser = await userManger.FindByIdAsync(item.UserId);
                CommentDTO dtocomment = new();
                dtocomment.Comment = item;
                if (commentUser != null)
                {
                    dtocomment.UserFullName = $"{commentUser.FirstName} {commentUser.LastName}";
                    dtocomment.UserImg = commentUser.Images;
                }

                Comments.Add(dtocomment);
            }

            post.Comments = Comments.OrderByDescending(n => n.Comment.CreatedTime).ToList();
            post.CommentsCounter = commentRepository.GetAll().Result.Where(n => n.PostId == res.Id).Count();
            post.LikesCounter = likeRepository.GetAll().Result.Where(n => n.PostId == res.Id).Count();

            if (user != null)
            {
                post.FullName = $"{user.FirstName} {user.LastName}";
                post.UserId = user.Id;
                post.UserImg = user.Images;
            }
            return post;
        }

        public async Task<List<PostDTO>> GetExplore() 
        {
            List<PostDTO> Posts = new();
            var res = await postRepository.GetAll();
            foreach (var item in res)
            {
                List<CommentDTO> Comments = new();
                var user = await userManger.FindByIdAsync(item.UserId);
                PostDTO post = new()
                {
                    Post = item,
                    CommentsCounter = commentRepository.GetAll().Result.Where(n => n.PostId == item.Id).Count(),
                    LikesCounter = likeRepository.GetAll().Result.Where(n => n.PostId == item.Id).Count(),
                };

                var comments = commentRepository.GetAll().Result.Where(n => n.PostId == item.Id).ToList();
                foreach (var comment in comments)
                {
                    var commentUser = await userManger.FindByIdAsync(comment.UserId);
                    CommentDTO dtocomment = new();
                    dtocomment.Comment = comment;
                    if (commentUser != null)
                    {
                        dtocomment.UserFullName = $"{commentUser.FirstName} {commentUser.LastName}";
                        dtocomment.UserImg = commentUser.Images;
                    }

                    Comments.Add(dtocomment);
                }

                post.Comments = Comments.OrderByDescending(n => n.Comment.CreatedTime).ToList();

                if (user != null)
                {
                    post.UserImg = user.Images;
                    post.UserId = item.UserId;
                    post.FullName = $"{user.FirstName} {user.LastName}";
                }

                Posts.Add(post);
            }

            return Posts;

        }




















    }
}
