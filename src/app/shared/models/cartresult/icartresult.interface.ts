import { IProduct } from "../product/iproduct.interface";

export interface ICartResult {
    status: string;
    message: string;
    numOfCartItems: number;
    cartId: string;
    data: CartData
}
interface CartData {
    _id: string;
    cartOwner: string;
    products: IProduct[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
}