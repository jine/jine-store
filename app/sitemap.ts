import type { MetadataRoute } from "next";
import { getAllProducts, getCategories } from "@/lib/functions";
import type { Category, Product } from "@/lib/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Fetch all products
    const productsData = await getAllProducts();
    const products = productsData.products.map((product: Product) => ({
        url: `${baseUrl}/product/${product.id}-${encodeURIComponent(
            product.title.replace(/\s+/g, "-").toLowerCase(),
        )}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    // Fetch all categories
    const categoriesData = await getCategories();

    // Safety check just in case, though types say it is array
    const categoriesList = Array.isArray(categoriesData) ? categoriesData : [];

    const categories = categoriesList.map((category: Category) => ({
        url: `${baseUrl}/category/${encodeURIComponent(category.slug)}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        // Add base URL
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        // Add products page
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        // Add products
        ...products,
        // Add categories
        ...categories,
    ];
}
