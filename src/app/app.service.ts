import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AppService {
  protected api: string;

  constructor(protected http: HttpClient) {
    this.api = 'https://60d539c3943aa60017768834.mockapi.io';
  }

  getProducts(): Observable<unknown> {
    return this.http.get(`${this.api}/product`);
  }
  getProductById(id: string): Observable<unknown> {
    return this.http.get(`${this.api}/product/${id}`);
  }

}
