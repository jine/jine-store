// app/components/layout/Footer.tsx
import Link from "next/link";
import {
    Instagram,
    Facebook,
    Twitter,
    Youtube,
    Mail,
    Phone,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 pb-8 pt-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-x-12">
                    {/* Brand + description */}
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-tight text-white"
                        >
                            Store app
                        </Link>
                        <p className="mt-5 text-sm leading-6 text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit quidem autem voluptate minima sed labore
                            nam.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                <Instagram size={32} />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                <Facebook size={32} />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                <Twitter size={32} />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                <Youtube size={32} />
                            </Link>
                        </div>
                    </div>

                    {/* Popular categories */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Popular Categories
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/category/laptops"
                                    className="hover:text-white transition-colors"
                                >
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/mobile-accessories"
                                    className="hover:text-white transition-colors"
                                >
                                    Mobile Accessories
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/category/home-decoration"
                                    className="hover:text-white transition-colors"
                                >
                                    Home Decoration
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/categories"
                                    className="hover:text-white transition-colors"
                                >
                                    View all categories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Company
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <Link
                                    href="#/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#/faq"
                                    className="hover:text-white transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Support
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <Link
                                    href="#/shipping"
                                    className="hover:text-white transition-colors"
                                >
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#/privacy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#/terms"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © 2025 Jim Nelin - Store app. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                            <a
                                href="mailto:hello@jine.se"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Mail size={16} />
                                hello@jine.se
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <Phone size={16} />
                                +46 123 456 780
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
