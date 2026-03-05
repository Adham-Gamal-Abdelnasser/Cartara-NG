import { Component, inject } from '@angular/core';
import { LetterComponent } from "../../../shared/components/letter/letter.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';
import { AsyncPipe } from '@angular/common';
import { ResetcodeComponent } from "../resetcode/resetcode.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule, AsyncPipe, ResetcodeComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent {
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService)
  private readonly _toastrService = inject(ToastrService)
  isLoading = new BehaviorSubject<boolean>(false);
  isForgotPassFlag = new BehaviorSubject<boolean>(true);
  isResetCodeFlag = new BehaviorSubject<boolean>(false);
  forgetPasswordForm!: FormGroup;
  readonly loader = LoaderCircleIcon;

  initiateForgetPasswordForm() {
    this.forgetPasswordForm = this._formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.initiateForgetPasswordForm()
  }

  submitForgetPasswordForm() {
    console.log(this.forgetPasswordForm.value);
    if (this.forgetPasswordForm.valid) {
      this.isLoading.next(true);
      this._authService.forgotPassword({email:this.forgetPasswordForm.get('email')?.value}).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res=>{
        this._toastrService.info(res.message);
        this.isForgotPassFlag.next(false);
        this.isResetCodeFlag.next(true);
      })
    } else {
      this.forgetPasswordForm.markAllAsTouched();
    }
  }
}