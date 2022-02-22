import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-mtf',
  templateUrl: './mtf.component.html',
  styleUrls: ['./mtf.component.scss']
})
export class MtfComponent implements OnInit {

  @Input() question!: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
