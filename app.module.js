"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const roles_module_1 = require("./roles/roles.module");
const users_module_1 = require("./users/users.module");
const passwordreset_module_1 = require("./passwordreset/passwordreset.module");
const attendance_tracking_module_1 = require("./attendance-tracking/attendance-tracking.module");
const holiday_management_module_1 = require("./holiday-management/holiday-management.module");
const tasks_module_1 = require("./tasks/tasks.module");
const project_management_module_1 = require("./project-management/project-management.module");
const payroll_module_1 = require("./payroll/payroll.module");
const allowances_module_1 = require("./allowances/allowances.module");
const deductions_module_1 = require("./deductions/deductions.module");
const configs_module_1 = require("./configs/configs.module");
const notifications_module_1 = require("./notifications/notifications.module");
const schedule_1 = require("@nestjs/schedule");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            attendance_tracking_module_1.AttendanceTrackingModule,
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            passwordreset_module_1.PasswordresetModule,
            schedule_1.ScheduleModule.forRoot(),
            holiday_management_module_1.HolidayManagementModule,
            tasks_module_1.TasksModule,
            project_management_module_1.ProjectManagementModule,
            payroll_module_1.PayrollModule,
            allowances_module_1.AllowancesModule,
            deductions_module_1.DeductionsModule,
            configs_module_1.ConfigsModule,
            configs_module_1.ConfigsModule,
            notifications_module_1.NotificationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map