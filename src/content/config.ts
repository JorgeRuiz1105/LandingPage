import { defineCollection, z } from "astro:content";

const benefitsCollection = defineCollection({
    type: 'content',
        schema: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
    })
})

export const collections = {
    benefits: benefitsCollection,
}