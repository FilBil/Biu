import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exam-write',
  templateUrl: './exam-write.component.html',
  styleUrls: ['./exam-write.component.scss'],
})
export class ExamWriteComponent implements OnInit {
  id$!: Observable<string>;
  isChecked: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id')!)
    );
  }
}
