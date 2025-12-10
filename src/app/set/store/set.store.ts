import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Set, SetDTO } from '../models/set.model';
import { SetService } from '../services/set.service';
import { computed, inject } from '@angular/core';
import { addEntity, setEntities, withEntities } from '@ngrx/signals/entities';

interface SetState {
  isLoading: boolean;
  error?: string;
  filter: { query: string; order: 'asc' | 'desc' };
}

const initialState: SetState = {
  isLoading: false,
  error: undefined,
  filter: { query: '', order: 'asc' },
};

export const SetStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withEntities<SetDTO>(),
  withComputed(({ entities }) => ({
    nameIdList: computed(() =>
      entities().map(set => {
        return { displayName: set.name, item: set.id };
      })
    ),
  })),
  withMethods((store, setService = inject(SetService)) => ({
    async loadAll() {
      patchState(store, { isLoading: true });
      try {
        const sets = await setService.getAll();
        patchState(store, setEntities(sets));
        patchState(store, {
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error loading sets' });
      }
    },
    async create(set: Set) {
      patchState(store, { isLoading: true });
      try {
        const newSet = await setService.create(set);
        patchState(store, addEntity(newSet));
        patchState(store, {
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error creating set' });
      }
    },
  }))
);
