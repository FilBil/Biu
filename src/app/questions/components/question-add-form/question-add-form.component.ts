import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Exam } from 'src/app/exam/exam';
import { QuestionService } from '../../service/question.service';
import { addQuestion } from 'src/app/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-add-form',
  templateUrl: './question-add-form.component.html',
  styleUrls: ['./question-add-form.component.scss'],
})
export class QuestionAddFormComponent implements OnInit {
  @Input() exams!: Array<Exam>;
  maxAnswersNum: number = 4;

  state$: Observable<any> = this.store.select(
    state => state
  );

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {}

  questionAddForm = this.formBuilder.group({
    examId: ['', Validators.required],
    // New Question auto generation
    questionId: this.questionService.getNewId(),
    content: ['', Validators.required],
    answers: this.formBuilder.array([
      this.formBuilder.control('', Validators.required),
      this.formBuilder.control('', Validators.required),
    ]),
    correct: ['', Validators.required],
  });

  get answers() {
    return this.questionAddForm.get('answers') as FormArray;
  }

  addAnswerCustomValidation(): boolean {
    return this.answers.length === this.maxAnswersNum ? true : false;
  }

  addAnswer(): void {
    this.answers.push(this.formBuilder.control('', Validators.required));
  }

  addQuestion(): void {
    console.log(this.questionAddForm.value);
    this.store.dispatch(addQuestion({ appState: {
      exams: this.questionAddForm.value.examId,
      questions: this.questionAddForm.value
    }}));
    this.state$.subscribe(state => console.log(state.appState));
  }
}
