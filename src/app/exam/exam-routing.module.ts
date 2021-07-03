import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailComponent } from './components/exam-detail/exam-detail.component';
import { ExamListComponent } from './components/exam-list/exam-list.component';

const routes: Routes = [
  { path: '', component: ExamListComponent},
  { path: 'exam/:id', component: ExamDetailComponent},
  { path: 'exam/write/:id', redirectTo: 'exam/write/:id', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
