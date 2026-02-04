import { Suspense } from "react";
import ViewCategory from "@/components/view-category";

export default async function Category({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    // Leaving this for the future, we might want to use search and sort later
    const { sort = "asc", search = "" } = await searchParams;
    const { slug } = await params;

    return <ViewCategory categorySlug={slug} />;
}
