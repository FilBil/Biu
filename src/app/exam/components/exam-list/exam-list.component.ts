import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Exam } from '../../exam';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss'],
})
export class ExamListComponent implements OnInit {
  exams$: Observable<Array<Exam>> = this.store.select(
    (state) => state.appState.exams
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
