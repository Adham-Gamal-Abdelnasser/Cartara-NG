import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { IOrdersResult } from '../../../shared/models/orders/iordersresult.interface';
import { PaymentService } from '../../../core/services/payment/payment.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  private readonly _paymentService = inject(PaymentService)
  private readonly _authService = inject(AuthService)
  private readonly _platform_ID = inject(PLATFORM_ID)
  orders:WritableSignal<IOrdersResult> = signal<IOrdersResult>([])

  recieveUserOrders():void {
    if (isPlatformBrowser(this._platform_ID)) {
      if (localStorage.getItem('userToken')) {
        this._authService.checkIsLoggedIn()
        console.log(this._authService.decodedUser().id);
        this._paymentService.getUserOrders(this._authService.decodedUser().id).subscribe(res=>{
          this.orders.set(res)
          console.log(this.orders())
        })               
      }
    }
  }

  ngOnInit():void { 
    this.recieveUserOrders()
  }
}
