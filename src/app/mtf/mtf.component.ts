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
  // col1 = [""]
  // col2 = [""]
  // randcol1 = [""]
  // randcol2 = [""]
  MTFJsons: MTFJson[] = [];
  getFromCharCode = getFromCharCode;

  @Input() questionSet!: QuestionSet;
  @Input() btn: boolean;
  constructor() {
    this.btn = false;
  }

  ngOnInit(): void {
    this.jsonToArray();
    // this.randcol1 = this.randomizeArr(this.col1);
    // this.randcol2 = this.randomizeArr(this.col2);
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
      // this.col1[parseInt(index)] = cols[3];
      // this.col2[parseInt(index)] = cols[7];
      if (row == 0) {
        this.heading1 = cols[1];
        this.heading2 = cols[5];
        row++;
      }
      // console.log(MTFJson, this.col1, this.col2, cols);
      // console.log(MTFJson, this.MTFJsons)
      this.MTFJsons.push(MTFJson);
    }
  }

  // randomizeArr(array: any[]) {
  //   let curId = array.length ?? 0;
  //   while (0 !== curId) {
  //     let randId = Math.floor(Math.random() * curId);
  //     curId--;
  //     let tmp = array[curId];
  //     array[curId] = array[randId];
  //     array[randId] = tmp;
  //   }
  //   return array;
  // }
}

export interface MTFJson {
  id: number,
  left: string,
  right: string
}