"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let NotificationsService = class NotificationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createNotification(createNotificationDto) {
        const { recipientId, content, category, action } = createNotificationDto;
        return this.prisma.notification.create({
            data: {
                recipientId,
                content,
                category,
                action,
            },
        });
    }
    async readNotification(id) {
        return this.updateNotification(id, { readAt: new Date() });
    }
    async unreadNotification(id) {
        return this.updateNotification(id, { readAt: null });
    }
    async cancelNotification(id) {
        return this.updateNotification(id, { canceledAt: new Date() });
    }
    async readAllNotifications() {
        return this.updateAllNotifications({ readAt: new Date() });
    }
    async cancelAllNotifications() {
        return this.updateAllNotifications({ canceledAt: new Date() });
    }
    async getNotificationsByRecipientId(recipientId) {
        return this.prisma.notification.findMany({
            where: {
                recipientId: recipientId,
            },
        });
    }
    async getReadNotifications() {
        return this.prisma.notification.findMany({
            where: {
                readAt: { not: null },
            },
        });
    }
    async updateNotification(id, data) {
        return this.prisma.notification.update({
            where: { id },
            data,
        });
    }
    async updateAllNotifications(data) {
        const notifications = await this.prisma.notification.findMany();
        const updatePromises = notifications.map((notification) => this.prisma.notification.update({
            where: { id: notification.id },
            data,
        }));
        return Promise.all(updatePromises);
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map