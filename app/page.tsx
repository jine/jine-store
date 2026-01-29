import Hero from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import type { Product, ProductFetch } from "@/lib/types";
import { Suspense } from "react";

async function fetchProducts(): Promise<ProductFetch> {
	const response = await fetch('https://dummyjson.com/products?limit=30');
	const data = await response.json();
	return data;
}

/*https://dummyjson.com/products?limit=12;*/

export default async function Home() {
  const jsondata = await fetchProducts();

  return (
    <div className="flex flex-col gap-12 pb-20">

      <Hero />

      <div className="container mx-auto px-4">
        <h2 className="pb-4 font-bold text-2xl">Products</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid products={jsondata.products} />
        </Suspense>
      </div>
    </div>
  );
}

