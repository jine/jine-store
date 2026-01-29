import { ViewProduct } from "@/components/view-product";
import { getProduct } from "@/lib/functions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product.id) notFound();

    return (
        <>
            <ViewProduct product={product} />

            <Link
                href="/products"
                className="mx-auto px-6 py-3 font-semibold text-foreground text-xl"
            >
                Back to Products
            </Link>
        </>
    );
}
