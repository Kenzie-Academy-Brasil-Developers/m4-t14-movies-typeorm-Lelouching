import { z } from "zod";

export const movieCreateSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().nullish(),
    duration: z.number().positive(),
    price: z.number().positive().int()
})

export const movieCreatedSchema = movieCreateSchema.extend({
    id: z.number()
})

export const movieUpdateSchema = movieCreateSchema.partial()