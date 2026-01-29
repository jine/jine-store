import { CategoriesGrid } from "@/components/categories-grid";

export default async function Categories() {
    return (
        <main className="flex flex-col gap-12 pb-20 pt-10">
            <CategoriesGrid />
        </main>
    );
}