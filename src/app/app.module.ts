import { StoreModule } from '@ngrx/store';
import { ExamModule } from './exam/exam.module';
import { WriteModule } from './write/write.module';
import { QuestionsModule } from './questions/questions.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExamModule,
    QuestionsModule,
    WriteModule,
    StoreModule.forRoot({ appState: appReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
