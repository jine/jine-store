import type { Product, ProductFetch } from "@/lib/types";

export async function fetchProducts(search = "", sort = "asc"): Promise<ProductFetch> {
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