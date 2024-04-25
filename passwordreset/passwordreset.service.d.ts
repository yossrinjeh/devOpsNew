import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PasswordresetService {
    private prisma;
    private mailerService;
    constructor(prisma: PrismaService, mailerService: MailerService);
    resetPassword(token: string, newPassword: string): Promise<void>;
    requestPasswordReset(email: string): Promise<"User not found" | "Password reset email sent successfully">;
    createPasswordResetTokenForUser(email: string, token: string): Promise<void>;
    generateUUID(): string;
    sendPasswordResetEmail(email: string, token: string): Promise<void>;
}
