import { NextResponse } from "next/server";

// "Ett enkelt minne på servern"
// Mapen sparar: productId -> likes
// OBS: Detta lever så länge servern körs
const likesStore = new Map<number, number>();

// POST /api/like
// Anropas när användaren klickar på "like" eller "unlike"
export async function POST(request: Request) {
    // Vi läser body från requesten (skickad från fetch i klienten)
    const { productId, action } = await request.json();

    // Hämta nuvarande antal likes för productId
    // Finns den inte än -> börja från 0
    const currentLikes = likesStore.get(productId) || 0;

    // Bestäm nytt antal likes beroende på action
    const newLikes =
        action === "like"
            ? currentLikes + 1 // like -> +1
            : Math.max(currentLikes - 1, 0); // unlike -> -1 (men aldrig under 0)

    // Spara det nya värdet i Mapen
    likesStore.set(productId, newLikes);

    // Skicka tillbaka ett JSON-svar till klienten
    return NextResponse.json({
        productId,
        likes: newLikes,
    });
}
// GET /api/like?productId=123
// Anropas när sidan laddas för att hämta aktuellt antal likes
export async function GET(request: Request) {
    // Vi plockar ut query-parametrar från URL:en
    const { searchParams } = new URL(request.url);
    const productId = Number(searchParams.get("productId"));

    // Om ingen Pokémon skickades -> fel
    if (!productId) {
        return NextResponse.json(
            { error: "Product Id required" },
            { status: 400 },
        );
    }
    // Hämta antal likes från Mapen
    // Finns den inte -> 0
    const likes = likesStore.get(productId) || 0;

    // Skicka tillbaka datan till klienten
    return NextResponse.json({ productId, likes });
}
