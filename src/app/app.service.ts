import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class AppService {
  protected api: string;
  protected mockedUser: string = '1';

  constructor(protected http: HttpClient) {
    this.api = 'https://60d539c3943aa60017768834.mockapi.io';
  }

  getProducts(): Observable<unknown> {
    return this.http.get(`${this.api}/product`);
  }
  getProductById(id: string): Observable<unknown> {
    return this.http.get(`${this.api}/product/${id}`);
  }

  getUser(): Observable<unknown> {
    return this.http.get(`${this.api}/users/${this.mockedUser}`);
  }

  putUser(data: unknown): Observable<unknown> {
    return this.http.put(`${this.api}/users/${this.mockedUser}`, data);
  }

}
