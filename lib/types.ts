/* interfaces matching https://dummyjson.com/docs/products */

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
export interface ProductFetch {
    total: number;
    skip: number;
    limit: number;
    products: Product[];
}
