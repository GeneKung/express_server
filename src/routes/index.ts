import { Application } from "express";
import tutorial from "./tutorial"; // Ensure correct path

export default class Routes {
    constructor(app: Application) {
        console.log("Registering /api/tutorial routes...");
        app.use("/api/tutorial", tutorial);
    }
}
