import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  @Input() question!: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
