import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WriteRoutingModule } from './write-routing.module';
import { ExamWriteComponent } from './components/exam-write/exam-write.component';
import { ExamWriteTemplateComponent } from './components/exam-write-template/exam-write-template.component';
import { ExamWriteResultComponent } from './components/exam-write-result/exam-write-result.component';


@NgModule({
  declarations: [
    ExamWriteComponent,
    ExamWriteTemplateComponent,
    ExamWriteResultComponent,
  ],
  imports: [
    CommonModule,
    WriteRoutingModule,
    ReactiveFormsModule
  ]
})
export class WriteModule { }
