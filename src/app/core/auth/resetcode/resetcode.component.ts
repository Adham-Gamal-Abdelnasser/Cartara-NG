import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { finalize } from 'rxjs';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { ResetnewpasswordComponent } from '../resetnewpassword/resetnewpassword.component';

@Component({
  selector: 'app-resetcode',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule, ResetnewpasswordComponent],
  templateUrl: './resetcode.component.html',
  styleUrl: './resetcode.component.css',
})
export class ResetcodeComponent {
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService)
  isLoading :WritableSignal<boolean> = signal<boolean>(false);  
  resetCodeFlag :WritableSignal<boolean> = signal<boolean>(false);  
  resetNewPasswordFlag :WritableSignal<boolean> = signal<boolean>(false);  
  resetCodeForm!: FormGroup
  readonly loader = LoaderCircleIcon;

  initiateResetCodeForm() {
    this.resetCodeForm = this._formbuilder.group({
      resetCode: ['', [Validators.required, Validators.pattern(/^[0-9]{4,}$/)]],
    });
  }

  ngOnInit(): void {
    this.initiateResetCodeForm()
  }

  submitResetCodeForm() {
    console.log(this.resetCodeForm.value);
    if (this.resetCodeForm.valid) {
      this.isLoading.set(true);
      this._authService.verifyResetCode({resetCode:this.resetCodeForm.get('resetCode')?.value}).pipe(finalize(()=>{this.isLoading.set(false)})).subscribe(res=>{
        console.log(res);
        this.resetCodeFlag.set(false)
        this.resetNewPasswordFlag.set(true)
      })
    } else {
      this.resetCodeForm.markAllAsTouched();
    }
  }
}
