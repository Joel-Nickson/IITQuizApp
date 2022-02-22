import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet } from '../questions';

@Component({
  selector: 'app-fitb2',
  templateUrl: './fitb2.component.html',
  styleUrls: ['./fitb2.component.scss']
})
export class Fitb2Component implements OnInit {

  @Input() questionSet!: QuestionSet;
  constructor() { }

  ngOnInit(): void {
  }

}
