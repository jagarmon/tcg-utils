import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetStore } from './set/store/set.store';

@Component({
  selector: 'tcg-utils-root',
  imports: [RouterOutlet],
  providers: [SetStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tcg-utils';
  setStore = inject(SetStore);
  ngOnInit(): void {
    this.setStore.loadAll();
  }
}
