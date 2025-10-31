import { signalStore, withState } from '@ngrx/signals';
import { Set } from '../models/set.model';
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

export const SetStore = signalStore(withState(initialState));
