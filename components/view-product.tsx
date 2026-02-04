import Image from "next/image";
import type { Product } from "@/lib/types";
import Button from "@/components/button";
import Link from "next/link";

export function ViewProduct({ product }: { product: Product }) {
    // Hack to modify the price to fit SEK
    const modifiedPrice = Math.floor(product.price * 10);

    return (
        <main className="container mx-auto px-4 py-12 max-w-5xl">
            {/* Breadcrumbs */}
            <section className="mb-4">
                <div className="text-sm text-gray-500">
                    <Link href="/products" className="hover:underline">
                        Products
                    </Link>

                    <span className="mx-2">/</span>

                    <Link href={`/category/${product.category}`}>
                        {<span className="capitalize">{product.category}</span>}
                    </Link>

                    <span className="mx-2">/</span>

                    <span className="text-gray-900 font-semibold">
                        {product.title}
                    </span>
                </div>
            </section>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image */}
                <section className="bg-gray-50 rounded-2xl overflow-hidden aspect-square relative border border-gray-200">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-contain p-8"
                        width={500}
                        height={500}
                    />
                </section>

                {/* Info */}
                <section className="flex flex-col space-y-6">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">
                            {product.brand}
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {product.title}
                        </h1>
                        <p className="text-lg font-semibold text-gray-900 mt-2">
                            {modifiedPrice} SEK
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center space-x-2 text-sm">
                            <span className="text-foreground">Rating:</span>{" "}
                            <span className="text-yellow-500">
                                {product.rating}
                            </span>
                            <span className="text-foreground">|</span>
                            <span
                                className={`${product.stock > 0 ? "text-green-600" : "text-red-500"}`}
                            >
                                {product.stock > 0
                                    ? `${product.stock} in stock`
                                    : "Not in stock"}
                            </span>
                        </div>

                        <Button
                            params={{
                                title: "Add to Cart",
                                href: "#",
                                disabled: product.stock === 0,
                                asLink: false,
                            }}
                        />
                    </div>
                </section>
            </article>
        </main>
    );
}
