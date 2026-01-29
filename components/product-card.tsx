import Image from "next/image";
import type { Product } from "@/lib/types";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            className="block relative p-3 bg-white border rounded-md"
            href={`/product/${product.id}-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
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
            {product.brand ? (
                <h3 className="absolute top-8 p-3">{product.brand}</h3>
            ) : null}
            <h3
                className={`absolute p-3 text-sm uppercase ${product.brand ? "top-16" : "top-8"}`}
            >
                {product.category}
            </h3>
            <p className="absolute right-0 top-0 p-3 font-bold text-foreground text-m">
                {Math.floor(product.price) * 10} SEK
            </p>

            <p className="mt-1 text-muted">{product.description}</p>
        </Link>
    );
}
