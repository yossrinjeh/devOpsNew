import { Role } from '@prisma/client';
export declare class RegisterRequest {
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    birthday: string;
    degree: string;
    number: number;
    job: string;
    password: string;
    roles: Role[];
}
