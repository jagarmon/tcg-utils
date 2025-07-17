import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  @Input({ required: true })
  text!: string;
  @Input()
  color: 'black' | 'error' = 'black';
  @Input()
  variant: 'h1' | 'h2' | 'standard' | 'element' | 'helper' = 'standard';
  @Input()
  weight: 'small' | 'normal' | 'medium' | 'big' = 'normal';
}
