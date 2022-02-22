import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-fitb1',
  templateUrl: './fitb1.component.html',
  styleUrls: ['./fitb1.component.scss']
})
export class FITB1Component implements OnInit {

  @Input() question!: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
