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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let UsersService = class UsersService {
    constructor(prisma, mailerService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
    }
    async updateUser(userId, updateUserDto) {
        return await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                firstname: updateUserDto.firstname,
                lastname: updateUserDto.lastname,
                job: updateUserDto.job,
                email: updateUserDto.email,
                number: updateUserDto.number,
                address: updateUserDto.address,
                birthday: updateUserDto.birthday,
                degree: updateUserDto.degree,
                roleId: updateUserDto.roleId,
            },
        });
    }
    async getUserById(id) {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }
    async getUserByEmail(email) {
        return await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                firstname: true,
                lastname: true,
                email: true,
                address: true,
                birthday: true,
                degree: true,
                number: true,
                job: true,
            },
        });
    }
    deteteUser(id) {
        return this.prisma.user.deleteMany({
            where: {
                id: id,
            },
        });
    }
    async addUser(registerRequest) {
        const password = this.generatePassword();
        const hash = await this.hashData(password);
        this.sendMail(registerRequest.email, password);
        const newUser = await this.prisma.user.create({
            data: {
                firstname: registerRequest.firstname,
                lastname: registerRequest.lastname,
                email: registerRequest.email,
                address: registerRequest.address,
                birthday: registerRequest.birthday,
                degree: registerRequest.degree,
                number: registerRequest.number,
                job: registerRequest.job,
                hash: hash,
                roles: {
                    connect: registerRequest.roles.map((role) => ({ id: role.id })),
                },
            },
        });
        return newUser;
    }
    getUsers() {
        return this.prisma.user.findMany();
    }
    async getUserAndPrivileges(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                roles: {
                    include: {
                        privileges: true,
                    },
                },
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const privileges = user.roles.reduce((acc, role) => {
            acc.push(...role.privileges);
            return acc;
        }, []);
        const names = [];
        for (const item of privileges) {
            if (item.name) {
                names.push(item.name);
            }
        }
        return {
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            authorities: names,
        };
    }
    getUserPrivilegesByEmail(email) {
        return this.prisma.user
            .findUnique({
            where: {
                email: email,
            },
            include: {
                roles: {
                    include: {
                        privileges: true,
                    },
                },
            },
        })
            .then((user) => {
            if (!user) {
                throw new Error('User not found');
            }
            const privileges = user.roles.reduce((acc, role) => {
                acc.push(...role.privileges);
                return acc;
            }, []);
            return privileges;
        });
    }
    async assignRoleToUser(userId, roleId) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
                include: {
                    roles: true,
                },
            });
            if (!user) {
                throw new Error('User not found');
            }
            const hasRole = user.roles.some((role) => role.id === roleId);
            if (hasRole) {
                throw new Error('User already has this role');
            }
            await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    roles: {
                        connect: {
                            id: roleId,
                        },
                    },
                },
            });
            return { success: true, message: 'Role assigned to user successfully' };
        }
        catch (error) {
            console.error('Error assigning role to user:', error);
            throw error;
        }
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    generatePassword() {
        const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        const passwordSize = 8;
        let password = '';
        const charSetLength = characterSet.length;
        for (let i = 0; i < passwordSize; i++) {
            const randomIndex = Math.floor(Math.random() * charSetLength);
            password += characterSet[randomIndex];
        }
        return password;
    }
    sendMail(email, password) {
        this.mailerService.sendMail({
            to: email,
            from: 'No-reply@hrms.com',
            subject: 'HRMS PASSWORD',
            html: '<html>' +
                '\n' +
                '<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">\n' +
                '    <!--100% body table-->\n' +
                '    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"\n' +
                '        style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: \'Open Sans\', sans-serif;">\n' +
                '        <tr>\n' +
                '            <td>\n' +
                '                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"\n' +
                '                    align="center" cellpadding="0" cellspacing="0">\n' +
                '                    <tr>\n' +
                '                        <td style="height:80px;">&nbsp;</td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td style="text-align:center;">\n' +
                '                          <a href="' +
                '" title="logo" target="_blank">\n' +
                '                            <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo" alt="logo">\n' +
                '                          </a>\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td style="height:20px;">&nbsp;</td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td>\n' +
                '                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"\n' +
                '                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">\n' +
                '                                <tr>\n' +
                '                                    <td style="height:40px;">&nbsp;</td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td style="padding:0 35px;">\n' +
                '                                        <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:\'Rubik\',sans-serif;">\n' +
                '                                            Welcome to HRMS</h1>\n' +
                '                                        <span\n' +
                '                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>\n' +
                '                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">\n' +
                ' Hello,\n' +
                '\n' +
                ' \n' +
                '\n' +
                'this is your password : ' +
                password +
                '.\n' +
                '\n' +
                ' \n' +
                '\n' +
                '                                        </p>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                                <tr>\n' +
                '                                    <td style="height:40px;">&nbsp;</td>\n' +
                '                                </tr>\n' +
                '                            </table>\n' +
                '                        </td>\n' +
                '                    <tr>\n' +
                '                        <td style="height:20px;">&nbsp;</td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td style="text-align:center;">\n' +
                '                            <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>HRMS</strong></p>\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td style="height:80px;">&nbsp;</td>\n' +
                '                    </tr>\n' +
                '                </table>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '    </table>\n' +
                '    <!--/100% body table-->\n' +
                '</body>\n' +
                '\n' +
                '</html>',
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_1.MailerService])
], UsersService);
//# sourceMappingURL=users.service.js.map