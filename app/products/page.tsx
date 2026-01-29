import { Suspense } from "react";
import { ProductGrid } from "@/components/product-grid";

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
