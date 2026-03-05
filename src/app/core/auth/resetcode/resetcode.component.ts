import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { LoaderCircleIcon, LucideAngularModule } from 'lucide-angular';
import { AsyncPipe } from '@angular/common';
import { ErrormessageComponent } from '../../../shared/components/errormessage/errormessage.component';
import { LetterComponent } from '../../../shared/components/letter/letter.component';
import { ResetnewpasswordComponent } from '../resetnewpassword/resetnewpassword.component';

@Component({
  selector: 'app-resetcode',
  imports: [LetterComponent, ReactiveFormsModule, ErrormessageComponent, LucideAngularModule, AsyncPipe, ResetnewpasswordComponent],
  templateUrl: './resetcode.component.html',
  styleUrl: './resetcode.component.css',
})
export class ResetcodeComponent {
  private readonly _formbuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService)
  isLoading = new BehaviorSubject<boolean>(false);
  resetCodeFlag = new BehaviorSubject<boolean>(true);
  resetNewPasswordFlag = new BehaviorSubject<boolean>(false);
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
      this.isLoading.next(true);
      this._authService.verifyResetCode({resetCode:this.resetCodeForm.get('resetCode')?.value}).pipe(finalize(()=>{this.isLoading.next(false)})).subscribe(res=>{
        console.log(res);
        this.resetCodeFlag.next(false)
        this.resetNewPasswordFlag.next(true)
      })
    } else {
      this.resetCodeForm.markAllAsTouched();
    }
  }
}
