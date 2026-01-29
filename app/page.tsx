import Hero from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { getProducts } from "@/lib/functions";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { sort = "asc", search = "" } = await searchParams;

    const jsondata = await getProducts(search, sort);
    const products = jsondata.products;

    return (
        <main className="flex flex-col gap-12 pb-20">
            <Hero />

            <div className="container mx-auto px-4">
                <h2 className="pb-4 font-bold text-2xl">
                    Products <span className="text-foreground/60">|</span>
                    <Link
                        href={`/products?search=${search}&sort=${sort == "asc" ? "desc" : "asc"}`}
                        className="text-sm text-foreground/60"
                    >
                        {" "}
                        Sorting by {sort == "asc" ? "ascending" : "descending"}
                    </Link>
                </h2>

                <Suspense fallback={<div>Loading...</div>}>
                  {jsondata.products.length < 1 ? (
                    <div>No products found.</div>
                  ) : (
                    <ProductGrid products={products} />
                  )}
                </Suspense>
            </div>
        </main>
    );
}
