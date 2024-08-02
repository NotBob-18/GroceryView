import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Basic_Url = 'http://localhost:8082/groc';

@Injectable({
  providedIn: 'root',
})

export class GroceryService {
  constructor(private http: HttpClient) {}

  createNewItem(data: any): Observable<any> {
    return this.http.post(`${Basic_Url}/grocery/create`, data);
  }

  getAllItemsList(): Observable<any> {
    return this.http.get(`${Basic_Url}/grocery`);
  }
}
