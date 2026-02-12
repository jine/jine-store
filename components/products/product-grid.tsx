import Link from "next/link";
import { ProductCard } from "@/components/products/product-card";
import { LimitSelect } from "@/components/ui/limit-select";
import { getProducts, getProductsByCategory } from "@/lib/functions";
import type { ProductGridProps } from "@/lib/types";

/**
 * Product grid component.
 * @param search - The search query.
 * @param sort - The sort order.
 * @param category - The category to filter by.
 * @returns The product grid component.
 */
export async function ProductGrid({
    search = "",
    sort = "asc",
    category,
    limit = 30,
}: ProductGridProps) {
    const jsondata = category
        ? await getProductsByCategory(category)
        : await getProducts(search, sort, limit);
    const products = jsondata.products;

    const sortLink = `/products?search=${search}&sort=${sort === "asc" ? "desc" : "asc"}&limit=${limit}`;

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between pb-4">
                <h2 className="font-bold text-2xl">
                    {category ? (
                        <span className="capitalize">
                            {category.replace("-", " ")}
                        </span>
                    ) : (
                        <>
                            Products
                            <span className="text-foreground/60"> | </span>
                            <Link
                                href={sortLink}
                                className="text-sm text-foreground/60"
                            >
                                Sorting by price{" "}
                                {sort === "asc" ? "ascending" : "descending"}
                            </Link>
                        </>
                    )}
                </h2>
                {!category && <LimitSelect currentLimit={limit} />}
            </div>

            {products.length < 1 ? (
                <div>No products found.</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
