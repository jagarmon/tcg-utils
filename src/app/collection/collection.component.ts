import { Component, inject } from '@angular/core';
import { LibButtonComponent } from '../shared/library/lib-button/lib-button.component';
import { LibInputComponent } from '../shared/library/lib-input/lib-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../shared/library/utils/form.service';

@Component({
  imports: [LibButtonComponent, LibInputComponent, ReactiveFormsModule],
  providers: [FormService],
  standalone: true,
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
})
export class CollectionComponent {
  formService = inject(FormService);
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  onSubmit(formm: FormGroup) {
    console.log('Entro', formm.value);
  }
}
