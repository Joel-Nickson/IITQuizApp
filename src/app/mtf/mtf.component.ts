import { Component, Input, OnInit } from '@angular/core';
import { QuestionSet, getFromCharCode } from '../questions';

@Component({
  selector: 'app-mtf',
  templateUrl: './mtf.component.html',
  styleUrls: ['./mtf.component.scss']
})
export class MtfComponent implements OnInit {

  heading1 = ""
  heading2 = ""
  MTFJsons: MTFJson[] = [];
  getFromCharCode = getFromCharCode;

  @Input() questionSet!: QuestionSet;
  @Input() btn: boolean;
  constructor() {
    this.btn = false;
  }

  ngOnInit(): void {
    this.jsonToArray();
  }

  jsonToArray() {
    this.MTFJsons = [];
    let answer_options = this.questionSet.answer_options;
    let row = 0;
    for (let index in answer_options) {
      let MTFJson: MTFJson = {
        id: -1,
        left: '',
        right: ''
      };
      MTFJson.id = parseInt(index);
      let cols: string[] = [];
      cols = JSON.stringify(answer_options[parseInt(index)]).split('"');
      MTFJson.left = cols[3]
      MTFJson.right = cols[7]
      if (row == 0) {
        this.heading1 = cols[1];
        this.heading2 = cols[5];
        row++;
      }
      this.MTFJsons.push(MTFJson);
    }
  }
}

export interface MTFJson {
  id: number,
  left: string,
  right: string
}