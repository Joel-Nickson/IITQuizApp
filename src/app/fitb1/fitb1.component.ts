import { Component, OnInit } from '@angular/core';
import { questions } from '../questions';

@Component({
  selector: 'app-fitb1',
  templateUrl: './fitb1.component.html',
  styleUrls: ['./fitb1.component.scss']
})
export class FITB1Component {
  questions = questions;

  constructor() { }

}
