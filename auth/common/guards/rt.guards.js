"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtGuard = void 0;
const passport_1 = require("@nestjs/passport");
class RtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.RtGuard = RtGuard;
//# sourceMappingURL=rt.guards.js.map