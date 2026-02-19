import { IBrand } from "../brand/ibrand.interface"
import { ICategory } from "../category/icategory.interface"
import { ISubCategory } from "../subcategory/isubcategory.interface"

export type IOrdersResult = IOrder[]

export interface IOrder {
  shippingAddress?: ShippingAddress
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: User
  cartItems: CartItem[]
  createdAt: string
  updatedAt: string
  id: number
  __v: number
  paidAt?: string
}

interface ShippingAddress {
  details: string
  city: string
  phone?: string
  postalCode?: string
}

interface User {
  _id: string
  name: string
  email: string
  phone: string
}

interface CartItem {
  count: number
  product: Product
  price: number
  _id: string
}

interface Product {
  subcategory: ISubCategory[]
  ratingsQuantity: number
  _id: string
  title: string
  imageCover: string
  category: ICategory
  brand: IBrand
  ratingsAverage: number
  id: string
}

