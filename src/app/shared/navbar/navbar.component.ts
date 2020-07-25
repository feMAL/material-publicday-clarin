import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() SideBar: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toogleSideBar(){
    this.SideBar.emit()
  }

}
