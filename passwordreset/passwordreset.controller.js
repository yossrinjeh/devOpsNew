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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordresetController = void 0;
const common_1 = require("@nestjs/common");
const passwordreset_service_1 = require("./passwordreset.service");
const public_decorator_1 = require("../auth/common/decorators/public.decorator");
let PasswordresetController = class PasswordresetController {
    constructor(passwordResetService) {
        this.passwordResetService = passwordResetService;
    }
    async requestPasswordReset(email) {
        return this.passwordResetService.requestPasswordReset(email);
    }
    async resetPassword(token, newPassword) {
        return this.passwordResetService.resetPassword(token, newPassword);
    }
};
exports.PasswordresetController = PasswordresetController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('request'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PasswordresetController.prototype, "requestPasswordReset", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('reset'),
    __param(0, (0, common_1.Query)('token')),
    __param(1, (0, common_1.Query)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PasswordresetController.prototype, "resetPassword", null);
exports.PasswordresetController = PasswordresetController = __decorate([
    (0, common_1.Controller)('passwordreset'),
    __metadata("design:paramtypes", [passwordreset_service_1.PasswordresetService])
], PasswordresetController);
//# sourceMappingURL=passwordreset.controller.js.map