import { ProductCard } from "@/components/product-card";
import { getProducts } from "@/lib/functions";
import type { ProductGridProps } from "@/lib/types";
import Link from "next/link";

export async function ProductGrid({
    search = "",
    sort = "asc",
}: ProductGridProps) {
    const jsondata = await getProducts(search, sort);
    const products = jsondata.products;

    return (
        <div className="container mx-auto px-4">
            <h2 className="pb-4 font-bold text-2xl">
                Products<span className="text-foreground/60"> | </span>
                <Link
                    href={`/products?search=${search}&sort=${sort == "asc" ? "desc" : "asc"}`}
                    className="text-sm text-foreground/60"
                >
                    Sorting by price{" "}
                    {sort == "asc" ? "ascending" : "descending"}
                </Link>
            </h2>

            {products.length < 1 ? (
                <div>No products found.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
