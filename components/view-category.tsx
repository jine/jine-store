import { ProductGrid } from "@/components/product-grid";
import { Category } from "@/lib/types";
import { Suspense } from "react";

export default async function ViewCategory({
    categorySlug,
}: {
    categorySlug: string;
}) {
    return (
        <main className="p-8">
            <Suspense
                fallback={
                    <div className="container mx-auto px-4">Loading...</div>
                }
            >
                <ProductGrid category={categorySlug} />
            </Suspense>
        </main>
    );
}
