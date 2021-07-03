import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exam } from 'src/app/exam/exam';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.scss'],
})
export class QuestionAddComponent implements OnInit {
  exams$: Observable<Array<Exam>> = this.store.select(
    (state) => state.appState.exams
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
