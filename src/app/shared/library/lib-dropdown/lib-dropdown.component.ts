import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibInputComponent } from '../lib-input/lib-input.component';
import { FormControl } from '@angular/forms';
import { LibButtonComponent } from '../lib-button/lib-button.component';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [CommonModule, LibInputComponent, LibButtonComponent],
  templateUrl: './lib-dropdown.component.html',
  styleUrl: './lib-dropdown.component.scss',
})
export class LibDropdownComponent<T> {
  @Input()
  id?: string;
  @Input({ required: true })
  text!: string;
  @Input()
  placeholder?: string;
  @Input()
  suggestionList: string[] = [];
  @Input()
  control: FormControl = new FormControl({
    value: undefined,
    disabled: true,
  });
  @Input()
  errorMessages: Record<string, string> = {};
  @Input()
  assistiveText?: string = '';
  @Input()
  ariaLabel?: string;
  @Input()
  required?: boolean;

  isDropdownOpen = false;

  onClickArrow() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onClickSuggestion(suggestion: string) {
    this.control.setValue(suggestion);
    this.isDropdownOpen = false;
  }
}
