import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAllTransactions() {
    return this.http.get(`https://nakore.onrender.com/api/transactions`);
}

Total() {
  return this.http.get(`https://nakore.onrender.com/api/total`);
}
}
