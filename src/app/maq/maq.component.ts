import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../questions';

@Component({
  selector: 'app-maq',
  templateUrl: './maq.component.html',
  styleUrls: ['./maq.component.scss']
})
export class MaqComponent implements OnInit {

  @Input() question!: Question;
  constructor() { }

  ngOnInit(): void {
  }

}
