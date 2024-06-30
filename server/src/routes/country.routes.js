import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
    getCountries,
    createCountry,
} from "../controllers/country.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCountrySchema } from "../schemas/country.schema.js";

const router = Router();

router.get("/countries", authRequired, getCountries);
router.post(
    "/countries",
    authRequired,
    validateSchema(createCountrySchema),
    createCountry
);
export default router;
