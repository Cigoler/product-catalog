import { defineCollection, z } from 'astro:content';

const products = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		price: z.number().optional(),
        category: z.string().default('uncategorized'),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
        category: z.string().default('uncategorized'),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { products, blog };
