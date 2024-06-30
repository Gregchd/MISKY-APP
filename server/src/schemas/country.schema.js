import { z } from "zod";

export const createCountrySchema = z.object({
    name: z.string({
        required_error: "Country is required",
    }),
});
