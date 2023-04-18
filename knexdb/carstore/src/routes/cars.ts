import { Router } from "express";
import carsController from "../controllers/carsControllers"
const router:Router = Router()

router.get("/", carsController.index)

export {router}