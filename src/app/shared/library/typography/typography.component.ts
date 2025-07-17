import { Component, Input } from '@angular/core';

@Component({
  selector: 'typography',
  imports: [],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss',
})
export class TypographyComponent {
  @Input({ required: true }) text!: string;
  @Input() color: 'standard' | 'danger' = 'standard';
  @Input() variant: 'input' | 'small' | 'standard' | 'h1' | 'h2' = 'standard';
}
