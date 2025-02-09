"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutorialController_1 = __importDefault(require("../controllers/tutorialController"));
class Tutorial {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new tutorialController_1.default();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post("/", this.controller.create);
        this.router.get("/", this.controller.findAll);
    }
}
exports.default = new Tutorial().router;
