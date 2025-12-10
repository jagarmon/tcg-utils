import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LibFontComponent } from '../lib-font/lib-font.component';
import { LibButtonComponent } from '../lib-button/lib-button.component';

interface listItem<T> {
  displayName: string;
  item?: T;
}
@Component({
  standalone: true,
  selector: 'lib-list',
  templateUrl: './lib-list.component.html',
  styleUrls: ['./lib-list.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibFontComponent,
    LibButtonComponent,
  ],
})
export class LibListComponent<T> {
  @Input() list: listItem<T>[] = [];
  @Output() clickEvent = new EventEmitter<T>();
  @Output() deleteEvent = new EventEmitter<T>();

  onClickElement(item: listItem<T>) {
    this.clickEvent.emit(item.item);
  }

  onClickDelete(item: listItem<T>) {
    this.deleteEvent.emit(item.item);
  }
}
