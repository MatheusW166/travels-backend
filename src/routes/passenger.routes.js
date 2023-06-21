import { Router } from "express";
import passengerController from "../controllers/passenger.controllers.js";

const passengerRoutes = Router();

passengerRoutes.get("/passengers/travels", passengerController.getNumberOfTravelsByPassenger);

export default passengerRoutes;
