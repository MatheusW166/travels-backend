import express from "express";
import passengerRoutes from "./routes/passenger.routes.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(passengerRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port: ${PORT}`));
