import express, { Application } from 'express';
import Server from "./src/index"; // Ensure correct import path

const dotenv = require('dotenv');
dotenv.config();

const app: Application = express();
const server: Server = new Server(app);

const PORT = process.env.DEV_PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
