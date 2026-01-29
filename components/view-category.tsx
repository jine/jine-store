import { ProductGrid } from "@/components/product-grid";
import { Category } from "@/lib/types";
import { Suspense } from "react";

export default async function ViewCategory({ category }: { category: Category }) {

    /* I need to redo this with params later on, but for now this is fine */
    return (
        <main className="flex flex-col gap-12 pb-20">
            <Suspense
                fallback={
                    <div className="container mx-auto px-4">Loading...</div>
                }
            >
                
                <ProductGrid category={category} />
            </Suspense>
        </main>
    );
}
