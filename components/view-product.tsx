import Image from "next/image";
import type { Product } from "@/lib/types";

export function ViewProduct({ product }: { product: Product }) {
    return (
        <div className="container mx-auto px-4grid p-3 bg-white">
            <div className="grid grid-cols-2 mb-4">
                <h2 className="p-3 font-semibold text-foreground text-m">
                    {product.title}
                </h2>

                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="object-cover"
                />

                <h3 className="p-3">{product.brand}</h3>
                <h3 className="p-3 text-sm">{product.category}</h3>
                <p className="p-3 font-bold text-foreground text-m">
                    {Math.floor(product.price) * 10} SEK
                </p>
            </div>

            <p className="mt-1">{product.description}</p>
        </div>
    );
}
