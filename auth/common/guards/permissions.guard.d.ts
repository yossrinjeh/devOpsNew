import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UsersService } from "src/users/users.service";
export declare class PermissionsGuard implements CanActivate {
    private usersService;
    private reflector;
    constructor(usersService: UsersService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
