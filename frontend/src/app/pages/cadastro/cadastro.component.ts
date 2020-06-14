import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ApiService } from '../../api.service';
import { Doador } from '../../models/doador';
import { NgForm, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Cadastrado com sucesso !'
}];
@Component({
  selector: 'app-cadastro',
  styleUrls: ['./cadastro.component.css'],
  template: `<body>
  <!-- FORM CADASTRO-->
  <div *ngIf="showMsg" style="position: fixed; width: max-content;">
      <ngb-alert *ngFor="let alert of alerts" [type]="alert.type" style="position: fixed; width: 100%;"
          (close)="close(alert)">
          {{ alert.message }} clique <a [routerLink]="['/dashboard']">aqui</a> para Login</ngb-alert>
  </div>
  <div class="container" style="text-align:left; position:absolute; top:7%;">
      <div class="row">
          <div class="col-sm-4">
              <h4 class="font-weight-bold"
                  style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-style: italic;">
                  <a style="color: red;">G</a>ood <a style="color: red;">W</a>ill Donations</h4>
          </div>
      </div>
  </div>



  <div class="container-fluid scrollable my-container">
      <div class="row">
          <div class="col-md-6" style="text-align: center; padding-bottom: 30px;">
              <h5>Escreva suas informações</h5>
          </div>
          <div class="col-md-8">

              <form #frm="ngForm" (ngSubmit)="addDoador(frm)" novalidate>
                  <div class="form-row">
                      <div class="form-group col-md-8">
                          <label for="nomelbl" class="font-weight-bold">Nome completo:</label>
                          <input type="text" id="nome" class="form-control" placeholder="*Nome completo"
                              [(ngModel)]="doador.nome" name="nome" minlength="5" #dname="ngModel" required />
                          <div *ngIf="dname.errors?.minlength">
                              Digite seu nome completo!
                          </div>
                      </div>
                      <div class="form-group col-sm-2">
                          <label for="tipo" class="font-weight-bold">Tipo:</label>
                          <select class="form-control" name="tipo" id="tipo" [(ngModel)]="doador.tipo" required>
                              <option selected>F</option>
                              <option>J</option>
                          </select>

                          <small id="opHelp" class="text-muted form-text">*F: Fisico / J: Juridico</small>
                      </div>
                      <div class="form-group col-md-10">
                          <label for="endereco" class="font-weight-bold">Endereço</label>
                          <input name="endereco" type="text" id="endereco" class="form-control"
                              placeholder="*Rua exemplo numero 1997" [(ngModel)]="doador.endereco" required>
                      </div>
                      <div class="form-group col-md-6">
                          <label for="registro" class="font-weight-bold">CPF/CNPJ</label>
                          <input name="registro" type="text" id="registro" class="form-control" placeholder="*"
                              [(ngModel)]="doador.registro" required>
                      </div>

                      <div class="form-group col-md-4">
                          <label for="telefone" class="font-weight-bold">Telefone</label>
                          <input name="telefone" type="text" id="telefone" class="form-control"
                              placeholder="*ex:31993707899" [(ngModel)]="doador.telefone" required>
                          <small id="telhelp" class="text-muted form-text">*Escreva todos os números sem
                              espaçamento</small>
                      </div>


                      <div class="form-group col-md-5" style="text-align: center;">
                          <label for="email" class="font-weight-bold">Email</label>
                          <input name="email" type="email" id="email" class="form-control" placeholder="*Email"
                              [(ngModel)]="doador.email" required>
                      </div>

                      <div class="form-group col-md-5" style="text-align: center;">
                          <label for="senha" class="font-weight-bold">Senha</label>
                          <input name="senha" type="password" id="senha" class="form-control" placeholder="*Senha"
                              [(ngModel)]="doador.senha" required>
                      </div>




                  </div>
                  <div class="col-md-10" style="text-align: center;">
                    
                      <button id="btnSubmit" [disabled]="frm.invalid" type="submit" class="btn btn-success"
                          style="width: 250px; height: 50px; border-radius: 8px;">Cadastrar</button>
                  </div>


              </form>
          </div>
      </div>
  </div>

  <!--imagem-->
  <div class="container-img" style="width: 600px; height: 600px;">
      <img src="../../../assets/img/donations2.jpg" class="img-fluid" alt="donate">

  </div>
  
</body>
`
})

export class CadastroComponent implements OnInit {
  faEye = faEye;
  doador: any;
  constructor(private router: Router, private api: ApiService) {
    this.reset()
  }
  //Alerta após login
  alerts: Alert[];
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  ngOnInit(): void {
    this.doador = {}
  }



  reset() {
    this.alerts = Array.from(ALERTS);
  }

  showMsg: boolean = false;


  // Post para criar doador no sistema
  addDoador(frm: NgForm) {
    this.api
      .addDoador(this.doador)
      .subscribe(
        doador => {
          this.router.navigate(['cadastro']),
            this.showMsg = true;
          frm.reset();
        });
        console.log(this.doador)
  }



}
