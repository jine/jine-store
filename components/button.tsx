import Link from "next/link";

/**
 * Button component.
 * @param params - The parameters for the button.
 * @returns The button component.
 */
export default function Button({
    params,
}: {
    params: {
        title: string;
        href: string;
        disabled?: boolean;
        asLink?: boolean;
    };
}) {
    if (params.asLink) {
        return (
            <Link
                href={params.href}
                className="button bg-black text-white py-4 px-8 rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {params.title}
            </Link>
        );
    } else {
        return (
            <button
                type="button"
                className="w-full bg-black text-white py-4 px-8 rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={params.disabled}
            >
                {params.title}
            </button>
        );
    }
}
