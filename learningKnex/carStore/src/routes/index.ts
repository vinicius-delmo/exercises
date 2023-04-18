import { router as carsRoutes } from "./cars";
import { router as brandsRoutes } from "./brands";
import { Router } from "express";

const router: Router = Router();

router.use("/cars", carsRoutes);
router.use("/brands", brandsRoutes);

export { router };
