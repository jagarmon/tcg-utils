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
import {
  addEntity,
  removeEntity,
  setEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';

interface SetState {
  isLoading: boolean;
  selectedId?: number;
  error?: string;
  filter: { query: string; order: 'asc' | 'desc' };
}

const initialState: SetState = {
  selectedId: undefined,
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
        return { name: set.name, id: set.id };
      })
    ),
  })),
  withMethods((store, setService = inject(SetService)) => ({
    emptySelectedId() {
      patchState(store, { selectedId: undefined });
    },
    setSelectedId(id: number) {
      patchState(store, { selectedId: id });
    },
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
        patchState(store, addEntity({ ...set, id: newSet.id }));
        patchState(store, {
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error creating set' });
      }
    },
    async edit(id: number, set: Partial<Set>) {
      patchState(store, { isLoading: true });
      try {
        await setService.edit(id, set);
        patchState(store, updateEntity({ id: id, changes: set }));
        patchState(store, {
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error updating set' });
      }
    },
    async delete(id: number) {
      patchState(store, { isLoading: true });
      try {
        await setService.delete(id);
        patchState(store, removeEntity(id));
        patchState(store, {
          isLoading: false,
          error: undefined,
        });
      } catch (_err) {
        patchState(store, { isLoading: false, error: 'Error deleting set' });
      }
    },
  }))
);
