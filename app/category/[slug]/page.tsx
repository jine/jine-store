import { Suspense } from "react";
import ViewCategory from "@/components/view-category";

export default async function Category({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return <ViewCategory categorySlug={slug} />;
}
