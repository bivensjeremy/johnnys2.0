import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "p6nl3p8p",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});