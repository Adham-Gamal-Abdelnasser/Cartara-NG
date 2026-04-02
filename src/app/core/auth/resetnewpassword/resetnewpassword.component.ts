import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetnewpassword',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule],
  templateUrl: './resetnewpassword.component.html',
  styleUrl: './resetnewpassword.component.css',
})
export class ResetnewpasswordComponent {
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService)
  private readonly _router = inject(Router)
  isLoading :WritableSignal<boolean> = signal<boolean>(false);  
  resetNewPasswordForm!: FormGroup
  readonly loader = LoaderCircleIcon;

  initiateResetNewPasswordForm() {
    this.resetNewPasswordForm = this._formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['',[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{5,}")]] ,
    });
  }

  ngOnInit(): void {
    this.initiateResetNewPasswordForm()
  }

  submitResetNewPasswordForm() {
    console.log(this.resetNewPasswordForm.value);
    if (this.resetNewPasswordForm.valid) {
      this.isLoading.set(true);
      this._authService.resetPassword(this.resetNewPasswordForm.value).pipe(finalize(()=>{this.isLoading.set(false)})).subscribe(res=>{
        console.log(res);
        localStorage.setItem("userToken", res.token);
        this._authService.checkIsLoggedIn()
        this._router.navigate(["/home"]);
      })
    } else {
      this.resetNewPasswordForm.markAllAsTouched();
    }
  }
}
