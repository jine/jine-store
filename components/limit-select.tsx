"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const limitOptions = [10, 20, 30, 50, 100];

export function LimitSelect({ currentLimit }: { currentLimit: number }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const newLimit = event.target.value;
        const params = new URLSearchParams(searchParams.toString());
        params.set("limit", newLimit);

        // Reset to page 1 when changing limit
        params.delete("page");
        router.push(`${pathname}?${params.toString()}`);
        
        // we need router.refresh to re-render the serverside page
        router.refresh();
    }

    return (
        <form className="flex items-center gap-2">
            <label htmlFor="limit" className="text-sm text-foreground/60">
                Show:
            </label>
            <select
                id="limit"
                name="limit"
                value={currentLimit}
                onChange={handleChange}
                className="px-3 py-1.5 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
                {limitOptions.map((limit) => (
                    <option key={limit} value={limit}>
                        {limit}
                    </option>
                ))}
            </select>
            <span className="text-sm text-foreground/60">per page</span>
        </form>
    );
}
