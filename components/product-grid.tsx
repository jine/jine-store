import Link from "next/link";
import { ProductCard } from "@/components/product-card";
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
}: ProductGridProps) {
    const jsondata = category
        ? await getProductsByCategory(category)
        : await getProducts(search, sort);
    const products = jsondata.products;

    const sortLink = `/products?search=${search}&sort=${sort === "asc" ? "desc" : "asc"}`;

    return (
        <div className="container mx-auto px-4">
            <h2 className="pb-4 font-bold text-2xl">
                {category ? (
                    <span className="capitalize">
                        {category.replace("-", " ")}
                    </span>
                ) : (
                    <>
                        Products<span className="text-foreground/60"> | </span>
                        <Link
                            href={sortLink}
                            className="text-sm text-foreground/60"
                        >
                            Sorting by price{" "}
                            {sort == "asc" ? "ascending" : "descending"}
                        </Link>
                    </>
                )}
            </h2>

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
