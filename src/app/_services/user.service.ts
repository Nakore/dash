import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllProducts() {
        return this.http.get(`http://localhost:5050/api/getfarmer`);
    }

    getAllFarmers() {
        return this.http.get(`http://localhost:5050/api/getfarmer`);
    }
}