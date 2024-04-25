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
exports.ProjectManagementController = void 0;
const common_1 = require("@nestjs/common");
const project_management_service_1 = require("./project-management.service");
let ProjectManagementController = class ProjectManagementController {
    constructor(projectManagementService) {
        this.projectManagementService = projectManagementService;
    }
    create(createProjectManagementDto) {
        return this.projectManagementService.create(createProjectManagementDto);
    }
    findAll() {
        return this.projectManagementService.getAllProjects();
    }
    findOne(id) {
        return this.projectManagementService.getProjectById(id);
    }
    update(id, updateProjectManagementDto) {
        return this.projectManagementService.update(id, updateProjectManagementDto);
    }
    remove(id) {
        return this.projectManagementService.remove(+id);
    }
};
exports.ProjectManagementController = ProjectManagementController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectManagementController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectManagementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectManagementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProjectManagementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectManagementController.prototype, "remove", null);
exports.ProjectManagementController = ProjectManagementController = __decorate([
    (0, common_1.Controller)('project-management'),
    __metadata("design:paramtypes", [project_management_service_1.ProjectManagementService])
], ProjectManagementController);
//# sourceMappingURL=project-management.controller.js.map