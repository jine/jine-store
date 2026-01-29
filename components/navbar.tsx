import Link from "next/link";

export default function Navbar() {
    return (
        <header className="z-1 sticky top-0 w-full bg-white/80 border-b backdrop-blur-md">
            <div className="container flex items-center justify-between mx-auto px-4 h-16">
                <Link href="/" className="flex gap-2 items-center">
                    <span className="font-bold text-xl">STORE</span>
                </Link>
                <nav>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <form
                                action="/products"
                                method="GET"
                                className="flex items-center"
                            >
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search..."
                                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent text-sm"
                                />
                                <input
                                    type="submit"
                                    value="Go"
                                    className="ml-2 px-4 py-2 bg-foreground text-background rounded-md text-sm cursor-pointer hover:bg-foreground/90 transition-colors"
                                />
                            </form>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="font-medium text-sm transition-colors hover:text-foreground/80"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="font-medium text-muted text-sm transition-colors hover:text-foreground"
                            >
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
