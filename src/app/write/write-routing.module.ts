import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamWriteComponent } from './components/exam-write/exam-write.component';

const routes: Routes = [
  { path: 'exam/write/:id', component: ExamWriteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteRoutingModule { }
