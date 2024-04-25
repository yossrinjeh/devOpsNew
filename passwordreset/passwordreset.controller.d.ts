import { PasswordresetService } from './passwordreset.service';
export declare class PasswordresetController {
    private passwordResetService;
    constructor(passwordResetService: PasswordresetService);
    requestPasswordReset(email: string): Promise<string>;
    resetPassword(token: string, newPassword: string): Promise<void>;
}
