import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'lib-image-uploader',
  templateUrl: './lib-image-uploader.component.html',
  styleUrls: ['./lib-image-uploader.component.scss'],
  imports: [CommonModule, LibFontComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LibImageUploaderComponent {
  @Input() id!: string;
  @Output() clickEvent = new EventEmitter<Event>();
  @Input() control: FormControl = new FormControl({
    value: undefined,
    disabled: false,
  });
  @Output() keyDownEvent = new EventEmitter<KeyboardEvent>();

  imageToDisplay: string | ArrayBuffer | null = null;

  onChange(event: Event): void {
    const element = (event.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();

    if (element) {
      reader.onload = _event => {
        this.imageToDisplay = reader.result;
      };

      reader.readAsDataURL(element);
    }
    this.control.setValue(element);
  }

  onClick(event: Event): void {
    this.clickEvent.emit(event);
  }

  onKeyDown(event: KeyboardEvent): void {
    this.keyDownEvent.emit(event);
  }
}
