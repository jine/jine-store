import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden relative bg-white">

      <div className="overflow-hidden bg-neutral-100 aspect-square">
        <Image src={product.thumbnail} alt={product.title} width={500} height={500}
          className="object-cover w-full" />
      </div>

      <div className="flex gap-2 items-start justify-between">
        <h3 className="font-semibold text-foreground text-sm uppercase">{product.title}</h3>
        <p className="font-bold text-foreground text-sm">${product.price}</p>
      </div>

      <p className="mt-1 text-muted">{product.description}</p>

      <div className="mt-auto pt-4">
        <div className="flex gap-2 items-center">
            {product.brand} - {product.category}
        </div>
      </div>
    </div>
  );
}
