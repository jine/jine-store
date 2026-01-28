import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="grid relative p-3 bg-white border rounded-md">

      <div className="bg-neutral-100">
        <Image src={product.thumbnail} alt={product.title} width={500} height={500}
          className="object-cover w-full" />

        <h3 className="absolute top-0 p-3 font-semibold text-foreground text-m bleft-0">{product.title}</h3>
        <h3 className="absolute top-8 p-3">{product.brand}</h3>
        <h3 className="absolute top-16 p-3 text-sm uppercase">{product.category}</h3>
        <p className="absolute right-0 top-0 p-3 font-bold text-foreground text-m">{Math.floor(product.price)*10} SEK</p>

      </div>

      <p className="mt-1 text-muted">{product.description}</p>

    </div>
  );
}
