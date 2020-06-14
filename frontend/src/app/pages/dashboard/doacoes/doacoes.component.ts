import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faArrowCircleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';
import { Doacoes } from 'src/app/models/doacoes';
import { Doador } from 'src/app/models/doador';

@Component({
  selector: 'app-doacoes',
  templateUrl: './doacoes.component.html',
  styleUrls: ['./doacoes.component.css']
})
export class DoacoesComponent implements OnInit {
  opened: boolean = false;
  doacoes: [];
  doadores: [];
  instituicao: []
  // Ícones usados FA
  arrow = faBars;
  faUser = faUserCircle;
  icon = faArrowCircleRight;

  toggleSidebar(): void {
    this.opened = !this.opened;
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDonations();
    this.getDonators();
    this.getInstitutions();
  }

  
  getDonations = () => {
    this.api.getDonations()
      .subscribe(data => {
        this.doacoes = data
      }), error => console.error(error);
  }
  getDonators = () => {
    this.api.getDonators()
      .subscribe(data => {
        this.doadores = data
      }), error => console.error(error);
  }
   // Listar instituições 
   getInstitutions = () => {
    this.api.getInstitutions()
      .subscribe(data => {
        this.instituicao = data
      });
  }

}
