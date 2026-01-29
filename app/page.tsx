import Hero from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import type { Product, ProductFetch } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";

async function fetchProducts(search = "", sort = "asc"): Promise<ProductFetch> {
    const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}&order=${sort}&sortBy=price`,
    );
    const data = await response.json();
    return data;
}

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { sort = "asc", search = "" } = await searchParams;
    let jsondata: ProductFetch;

    if (search !== "") {
        jsondata = await fetchProducts(search as string, sort as string);
    } else {
        jsondata = await fetchProducts();
    }

    const products = jsondata.products;

    return (
        <main className="flex flex-col gap-12 pb-20">
            <Hero />

            <div className="container mx-auto px-4">
                <h2 className="pb-4 font-bold text-2xl">
                    Products <span className="text-foreground/60">|</span>
                    <Link
                        href={`/?search=${search}&sort=${sort == "asc" ? "desc" : "asc"}`}
                        className="text-sm text-foreground/60"
                    >
                        {" "}
                        Sorting by {sort == "asc" ? "ascending" : "descending"}
                    </Link>
                </h2>

                <Suspense fallback={<div>Loading...</div>}>
                    <ProductGrid products={products} />
                </Suspense>
            </div>
        </main>
    );
}
