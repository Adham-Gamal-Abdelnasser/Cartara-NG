import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { IOrder, IOrdersResult } from '../../../shared/models/orders/iordersresult.interface';
import { PaymentService } from '../../../core/services/payment/payment.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';
import { SideorderComponent } from "./components/sideorder/sideorder.component";
import { OrderdetailsComponent } from "./components/orderdetails/orderdetails.component";

@Component({
  selector: 'app-orders',
  imports: [SideorderComponent, OrderdetailsComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  private readonly _paymentService = inject(PaymentService)
  private readonly _authService = inject(AuthService)
  private readonly _platform_ID = inject(PLATFORM_ID)
  orders:WritableSignal<IOrdersResult> = signal<IOrdersResult>([])
  specifiedOrder:WritableSignal<IOrder> = signal<IOrder>({} as IOrder)
  recieveUserOrders():void {
    if (isPlatformBrowser(this._platform_ID)) {
      if (localStorage.getItem('userToken')) {
        this._authService.checkIsLoggedIn()
        console.log(this._authService.decodedUser().id);
        this._paymentService.getUserOrders(this._authService.decodedUser().id).subscribe(res=>{
          this.orders.set(res)
        })               
      }
    }
  }

  ngOnInit():void { 
    this.recieveUserOrders()
  }
}
