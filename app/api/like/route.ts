import { NextResponse } from "next/server";

// In-memory store for product likes
// Maps productId to like count
// Note: Data is lost when server restarts
const likesStore = new Map<number, number>();

/**
 * POST /api/like
 * Updates the like count for a product (+1 for like, -1 for unlike)
 * @param request - Request body: { productId: number, action: 'like' | 'unlike' }
 * @returns JSON response with updated like count
 */
export async function POST(request: Request) {
    // Parse request body from client
    const { productId, action } = await request.json();

    // Get current likes for product, default to 0 if not exists
    const currentLikes = likesStore.get(productId) || 0;

    // Calculate new like count based on action
    const newLikes =
        action === "like" ? currentLikes + 1 : Math.max(currentLikes - 1, 0); // Prevent negative likes

    // Update store with new value
    likesStore.set(productId, newLikes);

    // Return updated count to client
    return NextResponse.json({
        productId,
        likes: newLikes,
    });
}
/**
 * GET /api/like?productId=123
 * Retrieves the current like count for a product
 * @param request - URL with productId query parameter
 * @returns JSON response with like count for the product
 */
export async function GET(request: Request) {
    // Extract query parameters from URL
    const { searchParams } = new URL(request.url);
    const productId = Number(searchParams.get("productId"));

    // Validate productId is provided
    if (!productId) {
        return NextResponse.json(
            { error: "Product Id required" },
            { status: 400 },
        );
    }

    // Get likes from store, default to 0 if not exists
    const likes = likesStore.get(productId) || 0;

    // Return data to client
    return NextResponse.json({ productId, likes });
}
