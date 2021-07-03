import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {
  id$!: Observable<string>;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id')!)
    );
  }

}
