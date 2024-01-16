export interface Row {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    createdAt: string;
    verified?: boolean;
}

export interface ProductsRow {
    id: number;
    img: string;
    title: string;
    color: string;
    producer: string;
    price: string;
    createdAt: string;
    inStock?: boolean;
}
