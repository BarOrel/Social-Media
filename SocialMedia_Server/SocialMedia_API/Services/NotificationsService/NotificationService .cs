using SocialMedia_API.Data.Models;
using SocialMedia_API.Data.Repository.Generic;

namespace SocialMedia_API.Services.NotificationsService
{
    public class NotificationService : INotificationService
    {
        private readonly IGenericRepository<Notification> notificationRepository;

        public NotificationService(IGenericRepository<Notification> notificationRepository)
        {
            this.notificationRepository = notificationRepository;
        }

        
    }
}
