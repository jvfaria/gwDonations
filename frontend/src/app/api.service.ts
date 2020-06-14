import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Doador } from './models/doador';
import { Doacoes } from './models/doacoes';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  url = 'http://127.0.0.1:8000';
  headers = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) { }



  // POSTS
  addDoador(doador: Doador): Observable<Doador> {
    return this.http.post<Doador>(this.url + '/doadores/', doador, { headers: this.headers }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  addDoacao(doacao: Doacoes): Observable<Doacoes>{
    return this.http.post<Doacoes>(this.url + '/doacoes/', doacao, {headers: this.headers}).pipe(
      map( (obj) => obj),
      catchError( (e) => this.errorHandler(e))
    )
  }

  // GETTERS 
  // DOACOES |
  //         V
  getDonations(): Observable<any> {
    return this.http.get(this.url + '/doacoes/',
      { headers: this.headers })
  }

  // DOADORES |
  //          V
  getDonators(): Observable<any> {
    return this.http.get(this.url + '/doadores/',
      { headers: this.headers })
  }
  // Instituição |
  //          V
  getInstitutions(): Observable<any> {
    return this.http.get(this.url + '/instituicoes/', 
    { headers: this.headers });
    
  }
  getInstitutionId(id:Number): Observable<any> {
    return this.http.get(this.url + '/instituicoes/' + id + '/', 
    { headers: this.headers });
    
  }




  // Mensagem de erro
  showMessage(msg: string, isError: boolean = false) {
    return alert(msg);
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage("Erro ao cadastrar. Preencha o formulário novamente !", true);

    return EMPTY;
  }


}
