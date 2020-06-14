import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faArrowCircleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class DoacoesComponent implements OnInit {
  opened: boolean = false;
  // Ícones usados FA
  arrow = faBars;
  faUser = faUserCircle;
  icon = faArrowCircleRight;

  
  toggleSidebar(): void {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
