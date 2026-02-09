'use client';

import type { Product } from "@/lib/types";
import { useState } from "react";


export default function LikeButton({product, initialLikes}:{product: Product, initialLikes: number}) {

    const [likes, setLikes] = useState(initialLikes);
    const [hasLiked, setHasLiked] = useState(false);

    const productId = product.id;

    const handleLike = async () => {
		const newHasLiked = !hasLiked;
		setHasLiked(newHasLiked);

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
        <>
            <div>| Like this product? </div>

            <button type="button" 
            className="button cursor-pointer bg-black text-white p-1 rounded-xl font-bold hover:bg-gray-800 transition-all"
            onClick={handleLike}
            >{hasLiked ? "❤️ Liked " : "🤍 Like "}
			{likes > 0 && <span className="ml-2 font-mono">{likes}</span>}</button>

        </>
    )
    
}