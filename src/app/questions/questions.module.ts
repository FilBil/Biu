import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { QuestionAddFormComponent } from './components/question-add-form/question-add-form.component';


@NgModule({
  declarations: [
    QuestionListComponent,
    QuestionAddComponent,
    QuestionItemComponent,
    QuestionAddFormComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuestionsModule { }
