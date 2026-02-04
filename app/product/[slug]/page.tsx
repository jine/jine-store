import { ViewProduct } from "@/components/view-product";
import { getProduct } from "@/lib/functions";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

/**
 * Generates metadata for a product page.
 * @param params - The parameters for the product page.
 * @returns The metadata for the product page.
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product.id) {
        return {
            title: "Product not found",
            description: "The product you are looking for does not exist.",
        };
    }

    return {
        title: product.title,
        description: product.description,
    };
}

/**
 * Renders the product page.
 * @param params - The parameters for the product page.
 * @returns The product page.
 */
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
                href="/products"
                className="mx-auto px-6 py-3 font-semibold text-foreground text-xl"
            >
                Back to Products
            </Link>
        </>
    );
}
