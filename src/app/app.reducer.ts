import { Action, createReducer, on } from '@ngrx/store';
import { Exam } from './exam/exam';
import { EXAMS } from './exam/exam-mock';
import { Question } from './questions/question';
import { QUESTIONS } from './questions/questions-mock';


export interface State {
  exams: Array<Exam>;
  questions: Array<Question>;
}

export const appState: State = {
  exams: EXAMS,
  questions: QUESTIONS,
};

const _appReducer = createReducer(
  appState,
);

export function appReducer(state: State | undefined, action: Action) {
  return _appReducer(state, action);
}
