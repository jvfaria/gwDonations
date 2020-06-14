import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { faArrowCircleLeft, faArrowCircleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Doacoes } from '../../models/doacoes';
import { Instituicoes } from '../../models/instituicoes';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from '../modal-basic/modal-basic.component';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Cadastrado com sucesso !'
}];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CurrencyPipe]
})



export class DashboardComponent implements OnInit {
  id: Number; // Recebe id da instituição aberta
  nome: string; // Recebe nome da instituição aberta

  showMsg: boolean = false;
  opened: boolean = false; // modal fechado
  doacoes: any = {};
  closeResult = '';
  instituicoes: Array<Instituicoes>;
  model: NgbDateStruct;
  date: { year: number, month: number };
  // Ícones usados FA
  arrow = faBars;
  faUser = faUserCircle;
  icon = faArrowCircleRight;

  toggleSidebar(): void {
    this.opened = !this.opened;
  }
  alerts: Alert[];
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  constructor(private api: ApiService,
    private modalService: NgbModal,
    private calendar: NgbCalendar,
    private router: Router,
    private currencyPipe: CurrencyPipe
    ) {

  }

  ngOnInit(): void {
    this.getInstitutions()

  }



  // Listar instituições 
  getInstitutions = () => {
    this.api.getInstitutions()
      .subscribe(data => {
        this.instituicoes = data
      });
  }

  setNome(nome) {
    this.nome = nome
  }
  // Open Modal

  open(content, id: Number, nome: String) {
    console.log(nome);
    this.setId(id);
    this.setNome(nome);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  setId(id: Number) {
    this.id = id;
  }

  // Return todays date  
  getDate() {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    return date;
  }
  //Return time
  getTime() {
    var today = new Date();
    return today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }
 

  // Realiza doação
  onSubmit(frm: NgForm) {
    const obj = {
      instituicao: this.id,
      data_doacao: this.getDate(),
      horario_doacao: this.getTime()
    }
   const donation = Object.assign(this.doacoes, obj)
    this
      .api
      .addDoacao(donation)
      .subscribe(doacao => {
        this.router.navigate(['dashboard']),
          alert('Doação realizada com sucesso !!!')
        frm.reset();
        this.modalService.dismissAll()
      }); console.log(this.doacoes);
  }


  resetForm(frm: NgForm) {
    frm.reset();

  }

  alert(element: any) {
    
    const formated = this.currencyPipe.transform(element).replace("[$ / ,]g", "");
    return formated;
  }

 
 

}



