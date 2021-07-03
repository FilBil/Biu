import { AppState } from 'src/app/state/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exam } from '../../exam';

@Component({
  selector: 'app-exam-template',
  templateUrl: './exam-template.component.html',
  styleUrls: ['./exam-template.component.scss'],
})
export class ExamTemplateComponent implements OnInit {
  @Input() examId!: string;
  exam$: Observable<Array<Exam>> = this.store.select((state) =>
    state.appState.exams.filter((exam) => exam.id == parseInt(this.examId))
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
