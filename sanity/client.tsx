import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

console.log("Sanity Project ID:", process.env.SANITY_PROJECT_ID);
console.log("Sanity Dataset:", process.env.SANITY_DATASET);
