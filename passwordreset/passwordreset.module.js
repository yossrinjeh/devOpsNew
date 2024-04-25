"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordresetModule = void 0;
const common_1 = require("@nestjs/common");
const passwordreset_controller_1 = require("./passwordreset.controller");
const passwordreset_service_1 = require("./passwordreset.service");
const mailer_1 = require("@nestjs-modules/mailer");
let PasswordresetModule = class PasswordresetModule {
};
exports.PasswordresetModule = PasswordresetModule;
exports.PasswordresetModule = PasswordresetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'sandbox.smtp.mailtrap.io',
                    port: 2525,
                    auth: {
                        user: "7fce47a3e71e8a",
                        pass: "652faca00143cc"
                    }
                }
            })
        ],
        controllers: [passwordreset_controller_1.PasswordresetController],
        providers: [passwordreset_service_1.PasswordresetService]
    })
], PasswordresetModule);
//# sourceMappingURL=passwordreset.module.js.map