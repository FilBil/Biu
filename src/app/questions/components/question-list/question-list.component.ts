import { appState } from './../../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../question';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent implements OnInit {
  questions$: Observable<Array<Question>> = this.store.select(
    (state) => state.appState.questions
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
