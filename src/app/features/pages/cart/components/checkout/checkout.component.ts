import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LetterComponent } from "../../../../../shared/components/letter/letter.component";
import { ErrormessageComponent } from "../../../../../shared/components/errormessage/errormessage.component";
import { LucideAngularModule, ShellIcon } from "lucide-angular";
import { BehaviorSubject, finalize } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PaymentService } from '../../../../../core/services/payment/payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, LetterComponent, LucideAngularModule,AsyncPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  readonly loader = ShellIcon
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _formBuilder = inject(FormBuilder)
  private readonly _paymentService = inject(PaymentService)
  private readonly _toastrService = inject(ToastrService)
  cartID:WritableSignal<string | null>=signal<string | null>(null)
  checkoutSessionForm!: FormGroup
  isLoading = new BehaviorSubject<boolean>(false);
  
  getCartIDFromURL():void {
    this._activatedRoute.paramMap.subscribe(res=>{
      console.log(res.get('id'))
      this.cartID.set(res.get("id"))
    })

  }

  initiateCheckoutSessionForm():void {
    this.checkoutSessionForm = this._formBuilder.group({
      shippingAddress: this._formBuilder.group({
        details: [null, [Validators.required]],
        phone: [null, [Validators.required,Validators.pattern("^01[0125][0-9]{8}")]],
        city: [null, [Validators.required]]
      })
    })
  }

  submitCheckoutSessionForm():void {
    if (this.checkoutSessionForm.valid) {
      console.log(this.checkoutSessionForm.value);
      console.log(this.cartID());
      this.isLoading.next(true)
      this._paymentService.checkoutSession(this.cartID(),this.checkoutSessionForm.value).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res=>{
        console.log(res)
        window.open(res.session.url)
      },err=>{
        console.log(err)
        this._toastrService.error(err.error.message)
      })
      
    }
  }

  ngOnInit():void {
    this.getCartIDFromURL()
    this.initiateCheckoutSessionForm()
  }

}
