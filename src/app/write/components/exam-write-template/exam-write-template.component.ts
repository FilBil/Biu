import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Exam } from 'src/app/exam/exam';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-exam-write-template',
  templateUrl: './exam-write-template.component.html',
  styleUrls: ['./exam-write-template.component.scss'],
})
export class ExamWriteTemplateComponent implements OnInit {
  @Input() examId!: string;

  exam$: Observable<Array<Exam>> = this.store.select((state) =>
    state.appState.exams.filter((exam) => exam.id == parseInt(this.examId))
  );
  
  examQuestionsArray!: number[];
  isChecked: boolean = false;

  userAnswers: Array<number> = [];
  correctAnswers: Array<number> = [];

  userPoints: number = 0;
  maxPoints!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getAnswers();
  }

  getQuestion(qid: number) {
    return this.store.select((state) =>
      state.appState.questions.filter((question) => question.id == qid)
    );
  }

  getAnswers(): void {
    this.exam$.subscribe((data) =>
      data.map((examProps) => (this.examQuestionsArray = examProps.questions))
    );
  }

  getUserAnswers(question: number, answer: number): void {
    this.userAnswers[question] = answer;
  }

  getCorrectAnswers(question: number, answer: number): void {
    this.correctAnswers[question] = answer;
  }

  // Sweet Order Pattern 
  checkTheExam(): void {
    for (let i = 0; i < this.correctAnswers.length; i++) {
      if (this.userAnswers[i] === this.correctAnswers[i]) {
        this.userPoints++;
      }
    }

    this.isChecked = true;
    this.maxPoints = this.correctAnswers.length;
  }
}
