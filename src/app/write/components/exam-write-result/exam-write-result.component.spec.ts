import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWriteResultComponent } from './exam-write-result.component';

describe('ExamWriteResultComponent', () => {
  let component: ExamWriteResultComponent;
  let fixture: ComponentFixture<ExamWriteResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamWriteResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamWriteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
