import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { Question } from '../question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions$: Observable<Array<Question>> = this.store.select(
    (state) => state.appState.questions
  );
  idArray!: Array<number>;

  constructor(private store: Store<AppState>) {}

  getNewId(): number {
    this.questions$.subscribe(
      (stateData: any) =>
        (this.idArray = stateData.map((stateItem: any) => stateItem.id))
    );

    return this.idArray[this.idArray.length - 1] + 1;
  }
}
