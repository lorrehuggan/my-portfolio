import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    published: z.boolean(),
    publishedDate: z.date(),
    excerpt: z.string(),
    author: z.string().default('Lorre Huggan'),
    footnote: z.string().optional(),
  }),
});

const pickCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    published: z.boolean(),
    publishedDate: z.date(),
    url: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  pick: pickCollection,
};
