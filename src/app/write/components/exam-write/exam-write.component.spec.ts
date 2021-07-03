import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWriteComponent } from './exam-write.component';

describe('ExamWriteComponent', () => {
  let component: ExamWriteComponent;
  let fixture: ComponentFixture<ExamWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
