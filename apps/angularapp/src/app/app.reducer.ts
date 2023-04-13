import { createReducer, on } from '@ngrx/store';
import { DataItem } from './data.service';
import { LoadData, LoadDataError, LoadDataSuccess } from './app.actions';

export interface AppState {
  data: DataItem[];
  loading: boolean;
  error: any;
}

export const initialState: AppState = {
  data: [],
  loading: false,
  error: null
};

export const appReducer = createReducer(
  initialState,
  on(LoadData, state => ({ ...state, loading: true, error: null })),
  on(LoadDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(LoadDataError, (state, { error }) => ({ ...state, error, loading: false }))
);
