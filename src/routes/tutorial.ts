import { Router } from "express";
import TutorialController from "../controllers/tutorialController";

class Tutorial {
    router = Router();
    controller = new TutorialController();

    constructor() {
        this.initRoutes();
    }

    initRoutes() {
        this.router.get("/", this.controller.findAll);
    }
}

export default new Tutorial().router;