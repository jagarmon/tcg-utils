import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFontComponent } from './lib-font.component';

describe('TypographyComponent', () => {
  let component: LibFontComponent;
  let fixture: ComponentFixture<LibFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFontComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
