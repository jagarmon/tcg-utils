import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../shared/library/utils/form.service';
import { LibDropdownComponent } from '../shared/library/lib-dropdown/lib-dropdown.component';
import { LibButtonComponent } from '../shared/library/lib-button/lib-button.component';

@Component({
  imports: [ReactiveFormsModule, LibDropdownComponent, LibButtonComponent],
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
