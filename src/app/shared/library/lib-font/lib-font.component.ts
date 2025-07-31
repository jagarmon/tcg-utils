import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-font',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-font.component.html',
  styleUrl: './lib-font.component.scss',
})
export class LibFontComponent {
  @Input({ required: true })
  text!: string;
  @Input()
  color: 'default' | 'disabled' | 'error' = 'default';
  @Input()
  variant: 'h1' | 'h2' | 'standard' | 'element' | 'helper' = 'standard';
  @Input()
  weight: 'small' | 'normal' | 'medium' | 'big' = 'normal';
}
