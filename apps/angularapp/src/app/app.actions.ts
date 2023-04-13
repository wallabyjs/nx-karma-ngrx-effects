import { createAction, props } from '@ngrx/store';
import { DataItem } from './data.service';

export const LoadData = createAction('[Data] Load Data');
export const LoadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: DataItem[] }>()
);
export const LoadDataError = createAction(
  '[Data] Load Data Error',
  props<{ error: any }>()
);
