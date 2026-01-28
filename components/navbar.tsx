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
                            <Link href="/" className="font-medium text-sm transition-colors hover:text-foreground/80" >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="font-medium text-muted text-sm transition-colors hover:text-foreground">
                                Products
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
