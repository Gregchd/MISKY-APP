import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getFood,
    getFoods,
    createFood,
    updateFood,
    deleteFood,
} from "../controllers/food.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createFoodSchema } from "../schemas/food.schema.js";

const router = Router();

router.get("/foods", getFoods);
router.get("/foods/:id", getFood);
router.post("/foods", validateSchema(createFoodSchema), createFood);
router.delete("/foods/:id", authRequired, deleteFood);
router.put("/foods/:id", authRequired, updateFood);
export default router;
