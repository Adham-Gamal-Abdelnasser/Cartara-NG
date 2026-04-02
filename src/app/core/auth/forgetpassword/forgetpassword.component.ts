import { Component, inject, signal, WritableSignal } from '@angular/core';
import { LetterComponent } from "../../../shared/components/letter/letter.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { AuthService } from '../../services/auth/auth.service';
import { finalize } from 'rxjs';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';
import { ResetcodeComponent } from "../resetcode/resetcode.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule, ResetcodeComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent {
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService)
  private readonly _toastrService = inject(ToastrService)
  isLoading:WritableSignal<boolean> = signal(false);
  isForgotPassFlag:WritableSignal<boolean> = signal(false);
  isResetCodeFlag:WritableSignal<boolean> = signal(false);
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
      this.isLoading.set(true);
      this._authService.forgotPassword({email:this.forgetPasswordForm.get('email')?.value}).pipe(finalize(()=>{this.isLoading.set(false)})).subscribe(res=>{
        this._toastrService.info(res.message);
        this.isForgotPassFlag.set(false);
        this.isResetCodeFlag.set(true);
      })
    } else {
      this.forgetPasswordForm.markAllAsTouched();
    }
  }
}