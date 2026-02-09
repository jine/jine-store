import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductGrid } from "@/components/product-grid";

/**
 * Metadata for the products page.
 * Static for now, can be dynamic later.
 */
export const metadata: Metadata = {
    title: "All Products",
    description: "Check out our products.",
};

/**
 * Products page.
 * @param searchParams - The search parameters for the products page.
 * @returns The products page.
 */
export default async function Products({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { sort = "asc", search = "" } = await searchParams;

    return (
        <main className="flex flex-col gap-12 pb-20 pt-10">
            <Suspense
                fallback={
                    <div className="container mx-auto px-4">Loading...</div>
                }
            >
                <ProductGrid search={search} sort={sort} />
            </Suspense>
        </main>
    );
}
