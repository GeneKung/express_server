import { Request, Response } from "express";

export default class TutorialController {
    async findAll(req: Request, res: Response) {
        try {
            console.log("GET /api/tutorial hit");
            res.status(200).json({
                message: "Hello"
            })
        } catch (e) {
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
}