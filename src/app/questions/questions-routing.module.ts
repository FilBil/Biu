import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

const routes: Routes = [
  { path: 'questions', component: QuestionListComponent },
  { path: 'questions/add', component: QuestionAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
