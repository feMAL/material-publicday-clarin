import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  getSideBarEmit(e){
    this.sideBarOpen= !this.sideBarOpen
  }
}
