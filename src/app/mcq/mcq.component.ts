import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet } from '../questions';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  @Input() questionSet!: QuestionSet;
  constructor() { }

  ngOnInit(): void {
  }

}
