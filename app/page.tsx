import Hero from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import data from "@/data/products.json";

/*https://dummyjson.com/products?limit=12;*/

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20">

      <Hero />

      <div className="container mx-auto px-4">
          <h2 className="font-bold text-2xl">Products</h2>

          <ProductGrid products={data.products} />
      </div>
    </div>
  );
}

