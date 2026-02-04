import { CategoriesGrid } from "@/components/categories-grid";

/**
 * Categories page.
 * @returns The categories page.
 */
export default async function Categories() {
    return (
        <main className="flex flex-col gap-12 pb-20 pt-10">
            <CategoriesGrid />
        </main>
    );
}
