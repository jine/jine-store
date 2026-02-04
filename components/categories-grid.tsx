import { getCategories } from "@/lib/functions";
import { Category } from "@/lib/types";
import Link from "next/link";

/**
 * Categories grid component.
 * @returns The categories grid component.
 */
export async function CategoriesGrid() {
    const categories: Category[] = await getCategories();

    return (
        <div className="container mx-auto px-4">
            <h2 className="pb-4 font-bold text-2xl">Categories</h2>

            <div className="grid grid-cols-4 gap-8">
                {categories.map((category) => (
                    <Link
                        key={`${category.slug}`}
                        href={`/category/${category.slug}`}
                        className="block px-6 py-10 border rounded-lg text-center hover:shadow"
                    >
                        <h3 className="text-lg font-semibold">
                            {category.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
