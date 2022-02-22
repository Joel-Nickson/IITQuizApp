import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet, getFromCharCode } from '../questions';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  getFromCharCode = getFromCharCode
  @Input() questionSet!: QuestionSet;
  constructor() { }

  ngOnInit(): void {
  }

}
