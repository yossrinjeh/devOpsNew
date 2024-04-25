"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayManagementModule = void 0;
const common_1 = require("@nestjs/common");
const holiday_management_service_1 = require("./holiday-management.service");
const holiday_management_controller_1 = require("./holiday-management.controller");
let HolidayManagementModule = class HolidayManagementModule {
};
exports.HolidayManagementModule = HolidayManagementModule;
exports.HolidayManagementModule = HolidayManagementModule = __decorate([
    (0, common_1.Module)({
        controllers: [holiday_management_controller_1.HolidayManagementController],
        providers: [holiday_management_service_1.HolidayManagementService],
    })
], HolidayManagementModule);
//# sourceMappingURL=holiday-management.module.js.map