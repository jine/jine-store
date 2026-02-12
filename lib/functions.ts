import type { CategoriesFetch, Product, ProductFetch } from "@/lib/types";

export async function getProducts(
    search = "",
    sort = "asc",
    limit = 30,
): Promise<ProductFetch> {
    const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}&order=${sort}&sortBy=price&limit=${limit}`,
    );
    const data = await response.json();
    return data;
}

export async function getProductsByCategory(
    category: string,
): Promise<ProductFetch> {
    const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
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

export async function getCategories(): Promise<CategoriesFetch> {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();

    return data;
}

export async function getAllProducts(): Promise<ProductFetch> {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();
    return data;
}
