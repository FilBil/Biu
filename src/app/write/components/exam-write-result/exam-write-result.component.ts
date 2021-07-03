import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-write-result',
  templateUrl: './exam-write-result.component.html',
  styleUrls: ['./exam-write-result.component.scss'],
})
export class ExamWriteResultComponent implements OnInit {
  @Input() userPoints!: number;
  @Input() maxPoints!: number;

  constructor() {}

  ngOnInit(): void {}
}
