import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  public tipoferiado = [ 'inamovible', 'trasladable', 'nolaborable', 'puente' ];

  constructor() { }

  ngOnInit(): void {
  }

}
