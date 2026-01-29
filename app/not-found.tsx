import Link from "next/link";
import Button from "@/components/button";

export default function NotFound() {
    return (
        <main className="px-4 py-24 min-h-[60vh] text-center">
            <h1 className="font-bold text-6xl">404</h1>

            <h2 className="mt-4 text-2xl font-medium text-muted py-10">
                Page not found
            </h2>

            <Button
                params={{
                    title: "Go back",
                    href: "/",
                    disabled: false,
                    asLink: true,
                }}
            />
        </main>
    );
}
