using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SocialMedia_API.Data.Models;
using SocialMedia_API.Data.Models.DTO;
using SocialMedia_API.Data.Models.DTO.User;
using SocialMedia_API.Data.Repository.Generic;
using SocialMedia_API.Services.PostService;
using System.Net;
using ToDoListPractice.Data.Services.JWT;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SocialMedia_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
   
        private readonly SignInManager<User> signInManager;
        private readonly IJWTTokenService tokenService;
        private readonly IGenericRepository<Post> postRepository;
        private readonly UserManager<User> userManger;
        private readonly IGenericRepository<Follow> followRepository;
        private readonly IPostService postService;

        public UserController(SignInManager<User> signInManager
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

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDTO model)
        {
            User user = new()
            {
                UserName = model.UserName,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Gender = model.Gender,
                Images = model.ImageUrl,
               

            };
            var result = await userManger.CreateAsync(user, model.Password);
            if(result.Succeeded) 
                return Ok(result);

            return BadRequest(result);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var userFromDB = await userManger.FindByNameAsync(model.Username);

            if (userFromDB == null)
                return BadRequest();

            var result = await signInManager.CheckPasswordSignInAsync(userFromDB, model.Password, false);

            if (!result.Succeeded)
                return BadRequest();

            return Ok(new
            {
                result = result,
                username = userFromDB.UserName,
                email = userFromDB.Email,
                userid = userFromDB.Id,
                token = tokenService.GenerateToken(userFromDB),

            });

        }


        [HttpGet]
        public async Task<IActionResult> NavbarView(string UserId)
        {
            var user = await userManger.FindByIdAsync(UserId);
            if (user != null)
            {
            NavbarDTO view = new()
            {
                UserId = UserId,
                ImgUrl = user.Images,
                FullName = $"{user.FirstName} {user.LastName}"

            };
                return Ok(view);
            }
            return BadRequest();
        }

        [HttpGet("GetProfile/{UserId}")]
        public async Task<IActionResult> GetProfile(string UserId)
        {
       
            var user = await userManger.FindByIdAsync(UserId);
            if (user != null)
            {
                ProfileDTO profile = new()
                {
                    FullName = user.FirstName + " " + user.LastName,
                    ImageUrl = user.Images,
                };

                var posts = await postRepository.GetAll();
                foreach (var item in posts.Where(n => n.UserId == user.Id).OrderByDescending(n => n.CreatedTime))
                {
                    var post = await postService.GetPostDtoById(item.Id);
                    profile.Posts.Add(post);
                };
                
                var res = await followRepository.GetAll();
                profile.FollowCounter = res.Where(n => n.FollowingId == user.Id).Count();
                profile.FollowingCounter = res.Where(n => n.FollowerId == user.Id).Count();

                return Ok(profile);
            }
            return BadRequest();
        }

       
        [HttpGet("Following/{UserId}")]
        public async Task<IActionResult> GetFollowing(string UserId)
        {
            List<UserDTO> userDTOs = new();
            var res = await followRepository.GetAll();
            res = res.Where(n => n.FollowerId ==  UserId);
            foreach (var item in res)
            {
                var User = await userManger.FindByIdAsync(item.FollowingId);
                if (User != null)
                {
                    UserDTO userdto = new()
                    {
                        Fullname = User.FirstName + " " + User.LastName,
                        UserName = User.UserName,
                        ImgUrl = User.Images,
                        UserId = User.Id,

                    };
                    userDTOs.Add(userdto);
                }
            }

            return Ok(userDTOs);
        }



    }
}
