import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAllProducts() {
        return this.http.get(`https://nakore.onrender.com/api/getfarmer`);
    }

    getAllFarmers() {
        return this.http.get(`https://nakore.onrender.com/api/getfarmer`);
    }
}