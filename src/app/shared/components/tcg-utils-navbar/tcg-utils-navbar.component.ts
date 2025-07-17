import { Component } from '@angular/core';
import { TypographyComponent } from '../../library/typography/typography.component';

@Component({
  selector: 'tcg-utils-navbar',
  imports: [TypographyComponent, TypographyComponent],
  standalone: true,
  templateUrl: './tcg-utils-navbar.component.html',
  styleUrl: './tcg-utils-navbar.component.scss',
})
export class NavbarComponent {}
