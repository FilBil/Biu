import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Question } from 'src/app/questions/question';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-exam-question',
  templateUrl: './exam-question.component.html',
  styleUrls: ['./exam-question.component.scss'],
})
export class ExamQuestionComponent implements OnInit {
  @Input() questionId!: number;
  question$: Observable<Array<Question>> = this.store.select((state) =>
    state.appState.questions.filter(
      (question) => question.id == this.questionId
    )
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
