import { IBrand } from "../brand/ibrand.interface";
import { ICategory } from "../category/icategory.interface";
import { IProduct } from "../product/iproduct.interface";
import { ISubCategory } from "../subcategory/isubcategory.interface";

export interface ICartResult {
    status: string;
    message: string;
    numOfCartItems: number;
    cartId: string;
    data: CartData
}
export interface CartData {
    _id: string;
    cartOwner: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
}

export interface Product {
  count: number
  _id: string
  product: Product2
  price: number
}

export interface Product2 {
  subcategory: ISubCategory[]
  _id: string
  title: string
  slug: string
  quantity: number
  imageCover: string
  category: ICategory
  brand: IBrand
  ratingsAverage: number
  id: string
}




