"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_1 = __importDefault(require("./tutorial"));
class Routes {
    constructor(app) {
        app.use("/api/tutorial", tutorial_1.default);
    }
}
exports.default = Routes;
