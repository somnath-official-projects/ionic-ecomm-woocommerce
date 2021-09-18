import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { app_constants, getUrl, getAuthParam } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  type: String;
  constructor(private http:HttpClient) {
    this.type = 'products';
  }
  
  getAllProducts(){
    return this.http.get(getUrl(this.type), {params: getAuthParam()}).toPromise();
  }
}
