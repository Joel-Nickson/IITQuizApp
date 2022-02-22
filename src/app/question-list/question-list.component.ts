import { Component, OnInit } from '@angular/core';
import { questions } from '../questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions = questions;
  constructor() { }

  ngOnInit(): void {
  }

}
