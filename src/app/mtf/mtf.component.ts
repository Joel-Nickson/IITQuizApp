import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-mtf',
  templateUrl: './mtf.component.html',
  styleUrls: ['./mtf.component.scss']
})
export class MtfComponent implements OnInit {

  col1: string[] = []
  col2: string[] = []

  @Input() question!: Question;
  constructor() {
  }

  ngOnInit(): void {
    let answer_options = this.question.answer_options;
    for (let index in answer_options) {
      let cols: string[] = [];
      cols = JSON.stringify(answer_options[parseInt(index)]).split('"');
      this.col1[parseInt(index)] = cols[4 - 1];
      this.col2[parseInt(index)] = cols[8 - 1]
    }
    console.log(this.col1, this.col2)
  }

}
