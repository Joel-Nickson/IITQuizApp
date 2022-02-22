import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet } from '../questions';

@Component({
  selector: 'app-maq',
  templateUrl: './maq.component.html',
  styleUrls: ['./maq.component.scss']
})
export class MaqComponent implements OnInit {

  @Input() questionSet!: QuestionSet;
  constructor() { }

  ngOnInit(): void {
  }

}
