import { IBrand } from "../brand/ibrand.interface";
import { ICategory } from "../category/icategory.interface";
import { ISubCategory } from "../subcategory/isubcategory.interface";

export interface IProduct {
  sold: number;
  images: string[];
  subcategory: ISubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: ICategory;
  brand: IBrand;
  ratingsAverage: number; 
  createdAt: string;
  updatedAt: string;
  id: string;
  __v?:number
}