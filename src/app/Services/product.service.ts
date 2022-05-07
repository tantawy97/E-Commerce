import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myclient:HttpClient) { }
  private BaseUrl="http://localhost:5155/api/Product";
GetAll(){
  return this.myclient.get<Product[]>(this.BaseUrl);
}
Create(product:FormData){
  return this.myclient.post(this.BaseUrl,product);
}
}
