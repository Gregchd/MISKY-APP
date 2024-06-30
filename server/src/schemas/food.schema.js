import { z } from "zod";

export const createFoodSchema = z.object({
    name: z.string({
        require_error: "Name is required",
    }),
    ingredients: z.string({
        require_error: "Ingredients is required",
    }),
    preparation: z.string({
        require_error: "Preparation is required",
    }),
    link: z.string({
        require_error: "Link is required",
    }),
    imglink: z.string({
        require_error: "Image Link is required",
    }),
    country: z.string({
        require_error: "Country is required",
    }),
    date: z.string().datetime().optional(),
});
