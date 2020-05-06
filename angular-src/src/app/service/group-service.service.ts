import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from  '@angular/common/http';
import {Router} from '@angular/router';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {
  group1(company_name) {
    console.log(company_name)
    return this.http.post('http://localhost:3000/data/getCompanyInfo',company_name);

  }

  constructor(private http : HttpClient,
              private roter:Router) { }
}


