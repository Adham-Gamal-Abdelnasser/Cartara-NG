import { IProduct } from "../product/iproduct.interface"

export interface IWishResult {
  status: string
  count: number
  data: IProduct[]
}

export interface IWishAddingResult {
  status: string
  message: string
  data: string[]
}