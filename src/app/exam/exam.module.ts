import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamListComponent } from './components/exam-list/exam-list.component';
import { ExamDetailComponent } from './components/exam-detail/exam-detail.component';
import { ExamTemplateComponent } from './components/exam-template/exam-template.component';
import { ExamQuestionComponent } from './components/exam-question/exam-question.component';


@NgModule({
  declarations: [
    ExamListComponent,
    ExamDetailComponent,
    ExamTemplateComponent,
    ExamQuestionComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
