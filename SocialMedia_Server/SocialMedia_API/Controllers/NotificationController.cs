﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SocialMedia_API.Data.Models;
using SocialMedia_API.Data.Models.DTO;
using SocialMedia_API.Data.Repository.Generic;
using SocialMedia_API.Services.PostService;

namespace SocialMedia_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IGenericRepository<Notification> notificationRepository;
        private readonly UserManager<User> userManger;
        private readonly IPostService postService;

        public NotificationController(IGenericRepository<Notification> notificationRepository,UserManager<User> userManger,IPostService postService)
        {
            this.notificationRepository = notificationRepository;
            this.userManger = userManger;
            this.postService = postService;
        }


        [HttpGet("{UserId}")]
        public async Task<IActionResult> GetNotifications(string UserId)
        {
            List<NotificationDTO> notificationDTOs = new();
            var notifications = await notificationRepository.GetAll();
            foreach (var item in notifications.Where(n => n.UserId == UserId))
            {
                NotificationDTO notificationDTO = new();
                notificationDTO.Notification = item;
                notificationDTO.Notification.IsRead = true;
                await notificationRepository.Update(notificationDTO.Notification);
                var user = await userManger.FindByIdAsync(notificationDTO.Notification.NotifierId);
                
                if (item.PostId != 0)
                    notificationDTO.Post = await postService.GetPostDtoById(item.PostId);
                

                notificationDTO.Username = user.FirstName +" " + user.LastName;
                notificationDTO.UserImg = user.Images;
                notificationDTOs.Add(notificationDTO);
                
         
                 
            }
           
            return Ok(notificationDTOs.OrderByDescending(n=>n.Notification.CreatedTime));
        }

        [HttpPost]
        public async Task<IActionResult> AddNotifications(Notification notification)
        {
            await notificationRepository.Insert(notification);
            return Ok(notification);
        }

        [HttpGet("GetCounter/{UserId}")]
        public async Task<IActionResult> GetNotificationsCounter(string UserId)
        {
            var unreadNotifications = await notificationRepository.GetAll();
            unreadNotifications = unreadNotifications.Where(n => n.UserId == UserId && n.IsRead == false);
            return Ok(unreadNotifications.Count());
        }
    }
}
