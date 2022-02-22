import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet } from '../questions';

@Component({
  selector: 'app-fitb2',
  templateUrl: './fitb2.component.html',
  styleUrls: ['./fitb2.component.scss']
})
export class Fitb2Component implements OnInit {

  blanks = '_________'
  question = ""
  @Input() questionSet!: QuestionSet;
  constructor() {
  }

  ngOnInit(): void {
    if (this.questionSet) {
      this.question = this.questionSet.question.split('{}').join(this.blanks);
    }
  }
}
