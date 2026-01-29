import Image from "next/image";
import type { Product } from "@/lib/types";
import { ViewProduct } from "@/components/view-product";
import { notFound } from "next/navigation";

async function getProduct(slug: string): Promise<Product> {
    const productId = slug.split("-")[0];

    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    return data;
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product.id) notFound();

    return ViewProduct({ product });
}
