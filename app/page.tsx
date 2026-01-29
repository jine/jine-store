import Hero from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { Suspense } from "react";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { sort = "asc", search = "" } = await searchParams;

    return (
        <main className="flex flex-col gap-12 pb-20">
            <Hero />

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
