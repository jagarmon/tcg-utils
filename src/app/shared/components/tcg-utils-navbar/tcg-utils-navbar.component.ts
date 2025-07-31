import { Component } from '@angular/core';
import { LibFontComponent } from '../../library/lib-font/lib-font.component';

@Component({
  selector: 'tcg-utils-navbar',
  imports: [LibFontComponent],
  standalone: true,
  templateUrl: './tcg-utils-navbar.component.html',
  styleUrl: './tcg-utils-navbar.component.scss',
})
export class NavbarComponent {}
