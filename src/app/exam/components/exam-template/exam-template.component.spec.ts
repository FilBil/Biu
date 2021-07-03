import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamTemplateComponent } from './exam-template.component';

describe('ExamTemplateComponent', () => {
  let component: ExamTemplateComponent;
  let fixture: ComponentFixture<ExamTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
