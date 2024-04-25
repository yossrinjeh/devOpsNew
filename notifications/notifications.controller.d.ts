import { NotificationsService } from './notifications.service';
import { Notification } from '@prisma/client';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    createNotification(createNotificationDto: CreateNotificationDto): Promise<Notification>;
    readNotification(id: string): Promise<Notification>;
    unreadNotification(id: string): Promise<Notification>;
    cancelNotification(id: string): Promise<Notification>;
    getNotificationsByRecipientId(recipientId: string): Promise<Notification[]>;
    getReadNotifications(): Promise<Notification[]>;
    readAllNotifications(): Promise<Notification[]>;
    cancelAllNotifications(): Promise<Notification[]>;
}
