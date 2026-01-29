import Link from "next/link";

export default function NotFound() {
    return (
        <div className="px-4 py-24 min-h-[60vh] text-center">
            <h1 className="font-bold text-6xl">404</h1>
            <h2 className="mt-4 text-2xl font-medium text-muted py-10">
                Page not found
            </h2>

            <Link
                href="/"
                className="mt-8 px-6 py-3 font-semibold text-background text-sm bg-foreground transition-colors hover:bg-foreground/90 rounded-md"
            >
                Go back
            </Link>
        </div>
    );
}
