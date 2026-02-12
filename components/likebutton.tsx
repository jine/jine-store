"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";

export default function LikeButton({
    product,
    initialLikes,
}: {
    product: Product;
    initialLikes: number;
}) {
    const [likes, setLikes] = useState(initialLikes);
    const [hasLiked, setHasLiked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const productId = product.id;

    // we store the state in localstorage so refreshing the page does "remember" the like.
    useEffect(() => {
        const stored = localStorage.getItem(`liked_${productId}`);
        if (stored === "true") {
            setHasLiked(true);
        }
        setIsLoaded(true);
    }, [productId]);

    const handleLike = async () => {
        const newHasLiked = !hasLiked;
        setHasLiked(newHasLiked);

        localStorage.setItem(`liked_${productId}`, String(newHasLiked));

        const res = await fetch("/api/like", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                productId,
                action: newHasLiked ? "like" : "unlike",
            }),
        });

        const data = await res.json();
        setLikes(data.likes);
    };

    return (
        <button
            type="button"
            className={`button cursor-pointer text-white p-1 rounded-xl font-bold transition-all ${
                isLoaded
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={isLoaded ? handleLike : undefined}
            disabled={!isLoaded}
        >
            {!isLoaded ? "🤍 Like" : hasLiked ? "❤️ Liked " : "🤍 Like "}
            {isLoaded && likes > 0 && (
                <span className="ml-2 font-mono">{likes}</span>
            )}
        </button>
    );
}
