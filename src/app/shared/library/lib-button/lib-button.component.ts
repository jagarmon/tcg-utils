import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'lib-button',
  templateUrl: './lib-button.component.html',
  styleUrls: ['./lib-button.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LibButtonComponent {
  @Input() id!: string;
  @Input() ariaLabel?: string;
  @Input() icon?: string;
  @Input() text?: string;
  @Input() size?: 'small' | 'standard' = 'standard';
  @Input() color?: 'default' | 'error' | 'none' = 'default';
  @Input() disabled?: boolean;
  @Input() fullWidth?: boolean;
  @Input() submit? = false;
  @Output() clickEvent = new EventEmitter<Event>();
  @Output() keyDownEvent = new EventEmitter<KeyboardEvent>();

  onClick(event: Event): void {
    this.clickEvent.emit(event);
  }

  onKeyDown(event: KeyboardEvent): void {
    this.keyDownEvent.emit(event);
  }
}
