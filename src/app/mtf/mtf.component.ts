import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionSet, getFromCharCode } from '../questions';

@Component({
  selector: 'app-mtf',
  templateUrl: './mtf.component.html',
  styleUrls: ['./mtf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MtfComponent implements OnInit {

  @Input() questionSet!: QuestionSet;
  @Input() btn = false;
  @Input() ind = 0;

  @Output() leftpartSelected = new EventEmitter<number>();
  @Output() rightpartSelected = new EventEmitter<number>();
  @Output() leftpartUnselected = new EventEmitter();
  @Output() rightpartUnselected = new EventEmitter();

  heading1 = ""
  heading2 = ""
  MTFJsons: MTFJson[] = [];
  id = -1
  leftid = -1
  rightid = -1
  left = ""
  right = ""
  getFromCharCode = getFromCharCode;

  solvedPairs: MTFJson[] = [];
  unsolvedPairs: MTFJson[] = [];
  leftpartSelectedId = -1;
  rightpartSelectedId = -1;

  constructor() {
  }

  ngOnInit(): void {
    this.MTFJsonsArray();
    this.MTFJsons.forEach(i => this.unsolvedPairs.push(i))
  }

  startAgain() {

    for (let j in this.MTFJsons) {
      let ele = document.getElementById(`t-c-l-${this.ind}-0${j}`)
      ele?.removeAttribute('class')
      ele?.classList.add('btn');

      ele = document.getElementById(`t-c-r-${this.ind}-0${j}`)
      ele?.removeAttribute('class')
      ele?.classList.add('btn');
    }
    this.unsolvedPairs = [];
    this.MTFJsons.forEach(i => this.unsolvedPairs.push(i))
    this.solvedPairs = []
  }

  MTFJsonsArray() {
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

  choose(side: string, i: number, j: number) {
    if (side == 'l' && this.right == "") {
      this.id = this.MTFJsons[j].id
      this.left = this.MTFJsons[j].left
      this.leftid = j
    }
    else if (side == 'l' && this.right != "") {
      this.id = this.MTFJsons[j].id
      this.left = this.MTFJsons[j].left
      this.leftid = j

      this.handleSolvedAssignment(this.id, this.left, this.right)
      this.remove_btn_from_table(this.leftid, this.rightid)
    }
    else if (side == 'r' && this.left == "") {
      // let ele = document.getElementById(`t-c-r-${this.ind}-0${j}`)
      this.right = this.MTFJsons[j].right
      this.rightid = this.find(this.right)
    }
    else if (side == 'r' && this.left != "") {
      this.right = this.MTFJsons[j].right
      this.rightid = j

      this.handleSolvedAssignment(this.id, this.left, this.right)
      this.remove_btn_from_table(this.leftid, this.rightid)
    }
  }

  find(ele: string) {
    return this.MTFJsons.filter(i => i.right == ele)[0].id
  }

  remove_btn_from_table(leftj: number, rightj: number) {
    this.left = ""
    this.right = ""
    let ele = document.getElementById(`t-c-l-${this.ind}-0${leftj}`)
    ele?.removeAttribute('class')
    ele?.classList.add('btn');
    ele?.classList.add('none')
    ele = document.getElementById(`t-c-r-${this.ind}-0${rightj}`)
    ele?.removeAttribute('class')
    ele?.classList.add('btn');
    ele?.classList.add('none')
  }

  private handleSolvedAssignment(id: number, left: string, right: string): void {
    let pair: MTFJson = {
      id: id,
      left: left,
      right: right
    };
    this.solvedPairs.push(pair);
    this.remove(this.unsolvedPairs, pair);
  }

  private handleUnsolvedAssignment(id: number, left: string, right: string): void {
    let pair: MTFJson = {
      id: id,
      left: left,
      right: right
    };
    this.solvedPairs.push(pair);
    this.remove(this.unsolvedPairs, pair);
  }

  private remove(array: MTFJson[], pair: MTFJson) {
    let index = array.indexOf(pair);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}

export interface MTFJson {
  id: number,
  left: string,
  right: string
}