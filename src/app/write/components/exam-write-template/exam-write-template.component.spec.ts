import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWriteTemplateComponent } from './exam-write-template.component';

describe('ExamWriteTemplateComponent', () => {
  let component: ExamWriteTemplateComponent;
  let fixture: ComponentFixture<ExamWriteTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamWriteTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamWriteTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
