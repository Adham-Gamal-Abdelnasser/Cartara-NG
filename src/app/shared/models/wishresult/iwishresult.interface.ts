import { IProduct } from "../product/iproduct.interface"

export interface IWishResult {
  status: string
  count: number
  data: IProduct[]
}
