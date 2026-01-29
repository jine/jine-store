import type { Product, ProductFetch, CategoriesFetch } from "@/lib/types";

export async function getProducts(
    search = "",
    sort = "asc",
): Promise<ProductFetch> {
    const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}&order=${sort}&sortBy=price`,
    );
    const data = await response.json();
    return data;
}

export async function getProduct(slug: string): Promise<Product> {
    // Extract product ID from slug (format is: "{id}-{title}")
    const productId = slug.split("-")[0];

    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    return data;
}

/* Thanks Grok for this */
export function firstCharToUpperCase(str: string): string {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export async function getCategories(): Promise<CategoriesFetch> {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();

    return data;
}
