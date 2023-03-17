import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAllTransactions() {
    return this.http.get(`http://localhost:5050/api/transactions`);
}
}
