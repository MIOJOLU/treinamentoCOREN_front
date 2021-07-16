import { Injectable } from '@angular/core'

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url = 'http://localhost:8080/'
  constructor(private http: HttpClient) {
  
  }

  listar(): Observable<any>{
      return this.http.get(`${this.url}vendas`);
  }

  listarClientes(): Observable<any>{
    return this.http.get(`${this.url}clientes`);
  }

  listarProdutos(): Observable<any>{
    return this.http.get(`${this.url}produtos`);
  }

  adicionarVenda(venda: any): Observable<any>{
    return this.http.post<any>(`${this.url}vendas`, venda)
  }
}
