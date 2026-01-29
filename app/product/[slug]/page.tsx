import Image from "next/image";
import type { Product } from "@/lib/types";
import { ViewProduct } from "@/components/view-product";
import { notFound } from "next/navigation";
import Button from "@/components/button";
import Link from "next/link";

async function getProduct(slug: string): Promise<Product> {
    // Extract product ID from slug (format is: "{id}-{title}")
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

    return (
        <>
            <ViewProduct product={product} />

            <Link
                href="/"
                className="mx-auto px-6 py-3 font-semibold text-foreground text-xl"
            >
                Back to Products
            </Link>
        </>
    );
}
