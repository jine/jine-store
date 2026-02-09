import type { Metadata } from "next";
import { Suspense } from "react";
import ViewCategory from "@/components/view-category";

/**
 * Generates metadata for a category page.
 * @param params - The parameters for the category page.
 * @returns The metadata for the category page.
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const title = slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
        title: `${title} Products`,
        description: `Browse our collection of ${title} products.`,
    };
}

/**
 * Category page.
 * @param params - The parameters for the category page.
 * @returns The category page.
 */
export default async function Category({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return <ViewCategory categorySlug={slug} />;
}
