import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Set } from '../models/set.model';
import { SetService } from '../services/set.service';
import { inject } from '@angular/core';
interface SetState {
  sets: Set[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
}

const initialState: SetState = {
  sets: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const SetStore = signalStore(
  withState(initialState),
  //withComputed(),
  withMethods((store, setService = inject(SetService)) => ({
    async loadAll() {
      patchState(store, { isLoading: true });
      const sets = await setService.getAll();
      patchState(store, { sets: sets, isLoading: false });
      console.log('SETEO >-', sets);
    },
  }))
);
