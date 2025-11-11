import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Set } from '../models/set.model';
import { SetService } from '../services/set.service';
import { inject } from '@angular/core';
interface SetState {
  sets: Set[];
  isLoading: boolean;
  error?: string;
  filter: { query: string; order: 'asc' | 'desc' };
}

const initialState: SetState = {
  sets: [],
  isLoading: false,
  error: undefined,
  filter: { query: '', order: 'asc' },
};

export const SetStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  //withComputed(),
  withMethods((store, setService = inject(SetService)) => ({
    async loadAll() {
      patchState(store, { isLoading: true });
      try {
        const sets = await setService.getAll();
        patchState(store, {
          sets: sets,
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error loading sets' });
      }
    },
    async create(newSet: Set) {
      patchState(store, { isLoading: true });
      try {
        await setService.create(newSet);
        patchState(store, {
          sets: [...store.sets(), newSet],
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error creating set' });
      }
    },
  }))
);
