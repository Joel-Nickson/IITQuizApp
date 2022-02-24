import { Component, HostListener, OnInit } from '@angular/core';
import { questionsSet } from '../questions';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questionsSet = questionsSet;
  answer_choice = questionsSet[0]?.answer_choices;
  answers = questionsSet[0]?.answers;
  answer = questionsSet[0]?.answer;
  index = -100;
  choice: string[] = [];

  // constructor() {
  // }

  ngOnInit(): void {
  }

  getAns() {
    this.answer_choice = this.questionsSet[this.index].answer_choices;
    this.answers = this.questionsSet[this.index]?.answers;
    this.answer = this.questionsSet[this.index]?.answer;
  }
  move(i: number, key: string) {
    this.index = i;
    this.getAns();
    if (key == 'right') {
      if (i < questionsSet.length - 1) {
        ++this.index;
        this.getAns();
        document.getElementById(`modal-open-${this.index}`)?.click();
      }
      else {
        console.log(i, "end of questions");

        document.getElementById('body')?.click();
      }
    }
    if (key == 'left') {
      if (i > 0) {
        --this.index;
        this.getAns();
        document.getElementById(`modal-open-${this.index}`)?.click();
      }
    }
  }
  //   if (modal?.contains('.modal-clicked')) {
  //     modal.remove('.modal-clicked');
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowRight": this.move(this.index, 'right'); break;
      case "ArrowLeft": this.move(this.index, 'left'); break;
      case "ArrowUp": this.move(this.index, 'left'); break;
      case "ArrowDown": this.move(this.index, 'right'); break;
      case "enter": let ele = document.getElementById(`modal-open-${this.index}`)?.getElementsByClassName('btn-sub')[0]
        if (ele instanceof HTMLElement)
          ele.click();
        break;
    }
  }
  skip(i: number) {
    let html_el = document.getElementById(`q-s-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-set');
    html_el?.classList.add('q-set-red');

    html_el = document.getElementById(`q-h-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-head');
    html_el?.classList.add('q-head-red')

    this.move(this.index, 'right');
  }
  mfr(i: number) {
    let html_el = document.getElementById(`q-s-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-set');
    html_el?.classList.add('q-set-yellow');

    html_el = document.getElementById(`q-h-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-head');
    html_el?.classList.add('q-head-yellow')

    this.move(this.index, 'right');
  }
  smfr(i: number, ...ans: string[]) {
    console.log(this.check(i, ans))
    let html_el = document.getElementById(`q-s-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-set');
    html_el?.classList.add('q-set-blue');

    html_el = document.getElementById(`q-h-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-head');
    html_el?.classList.add('q-head-blue')

    this.move(this.index, 'right');
  }
  sub(i: number, ...ans: string[]) {
    console.log(this.check(i, ans))
    let html_el = document.getElementById(`q-s-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-set');
    html_el?.classList.add('q-set-green');

    html_el = document.getElementById(`q-h-${i}`);
    html_el?.removeAttribute("class");
    html_el?.classList.add('q-head');
    html_el?.classList.add('q-head-green')

    this.move(this.index, 'right');
  }

  log(a: any, j: number) {
    console.log(a, j);
  }

  check_maq() {
    let a: string[] = [];
    if (this.answer_choice)
      for (let i = 0; i < this.answer_choice.length; i++) {
        if (this.choice[i]) {
          a.push(this.answer_choice[i]);
        }
      }
    return a;
  }
  check_mcq(ans: string[]) {
    let mark = false;
    if (this.answer_choice && this.answer) {
      for (let i = 0; i < this.answer_choice.length; i++) {
        if (ans.includes(this.answer))
          mark = true;
        else
          mark = false;
      }
    }
    console.log("tot ans:" + ans.length + "  wrong ans:" + (mark ? ans.length - 1 : ans.length)); // answer is of lenght 1 always
  }

  check(i: number, ans: any[]): boolean {
    // console.log(questionsSet[i].answers, ans, questionsSet[i].answers![0] == ans[0]);
    switch (questionsSet[i].type) {
      case "FITB1":
        // console.log(questionsSet[i].answers![0] == ans[0]);
        return questionsSet[i].answers![0] == ans[0];
      case "FITB2":
        // console.log((questionsSet[i].answers![0] == ans[0] && questionsSet[i].answers![1] == ans[1]));
        return (questionsSet[i].answers![0] == ans[0] && questionsSet[i].answers![1] == ans[1]);
      case "MAQ":
        ans = this.check_maq();
        // console.log(ans.every(i => this.answers?.includes(i)) && this.answers?.length == ans.length);
        return (ans.every(i => this.answers?.includes(i)) && this.answers?.length == ans.length);
      case "MCQ":
        ans = this.check_maq();
        this.check_mcq(ans);
        return (ans.every(i => this.answers?.includes(i)));
      case "FITB!":
        return questionsSet[i].answers![0] == ans[0];
    }
    return false;
  }

}
