import { Component, OnInit } from '@angular/core';
import { questionsSet, getFromCharCode } from '../questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questionsSet = questionsSet;
  getFromCharCode = getFromCharCode;
  constructor() { }

  ngOnInit(): void {
  }

}
