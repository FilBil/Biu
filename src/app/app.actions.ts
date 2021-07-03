import { createAction, props } from '@ngrx/store';
import { AppState } from './state/app.state';

export const addQuestion = createAction(
  '[Question Page] Add Question',
  props<AppState>()
);
