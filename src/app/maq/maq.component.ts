import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet, getFromCharCode } from '../questions';

@Component({
  selector: 'app-maq',
  templateUrl: './maq.component.html',
  styleUrls: ['./maq.component.scss']
})
export class MaqComponent implements OnInit {

  getFromCharCode = getFromCharCode;

  @Input() questionSet!: QuestionSet;
  constructor() { }

  ngOnInit(): void {
  }

}
