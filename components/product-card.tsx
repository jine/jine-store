import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

/**
 * Product card component.
 * @param product - The product to display.
 * @returns The product card component.
 */
export function ProductCard({ product }: { product: Product }) {
    // Create URL-friendly slug
    const url = `/product/${product.id}-${encodeURIComponent(
        product.title.replace(/\s+/g, "-").toLowerCase(),
    )}`;

    return (
        <Link
            className="block relative p-3 bg-gray-50 border border-gray-200 rounded-md"
            href={url}
        >
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={500}
                className="object-cover w-full"
            />

            <h3 className="absolute left-0 top-0 p-3 font-semibold text-foreground text-m">
                {product.title}
            </h3>
            {product.brand && (
                <h3 className="absolute top-8 p-3">{product.brand}</h3>
            )}
            <h3
                className={`absolute p-3 text-sm uppercase ${product.brand ? "top-16" : "top-8"}`}
            >
                {product.category}
            </h3>
            <p className="absolute right-0 top-0 p-3 font-bold text-foreground text-m">
                {Math.floor(product.price * 10)} SEK
            </p>

            <p className="mt-1 text-muted">{product.description}</p>
        </Link>
    );
}
