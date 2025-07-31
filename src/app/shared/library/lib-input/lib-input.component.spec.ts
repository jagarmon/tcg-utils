import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LibInputComponent } from './lib-input.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InputComponentTest', () => {
  let component: LibInputComponent;
  let fixture: ComponentFixture<LibInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CommonModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LibInputComponent);
    component = fixture.componentInstance;
    component.text = 'input-label';

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
