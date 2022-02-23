import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { questionsSet } from '../questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questionsSet = questionsSet;
  index = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  move(i: number, key: string) {
    this.index = i;
    if (key == 'right') {
      if (i < questionsSet.length - 1) {
        document.getElementById(`modal-open-${++this.index}`)?.click();
        // document.getElementById(`modal-open-${i + 1}`)?.classList.add('.modal-clicked');
      }
    }
    if (key == 'left') {
      if (i > 0) {
        document.getElementById(`modal-open-${--this.index}`)?.click();
        // document.getElementById(`modal-open-${i + 1}`)?.classList.add('.modal-clicked');
      }
    }
    // console.log(this.index);
  }
  // removeClass() {
  //   let modal = document.getElementById(`modal-open-${this.index}`)?.classList;
  //   if (modal?.contains('.modal-clicked')) {
  //     modal.remove('.modal-clicked');
  //   }
  // }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowRight": this.move(this.index, 'right'); break;
      case "ArrowLeft": this.move(this.index, 'left'); break;
      case "ArrowUp": this.move(this.index, 'left'); break;
      case "ArrowDown": this.move(this.index, 'right'); break;
    }
  }


}
