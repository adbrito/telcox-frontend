import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumoService {
  private apiUrl = 'http://127.0.0.1:8000/telcox_api/cliente/';

  constructor(private http: HttpClient) {}

  getCliente(clienteId: number | null): Observable<any> {
    console.log('servicio');

    // Si el clienteId es null, no enviar nada en la URL
    const url = clienteId ? `${this.apiUrl}${clienteId}/` : this.apiUrl;

    return this.http.get(url);
  }
}
