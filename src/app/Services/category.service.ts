import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private BaseUrl="http://localhost:5155/api/Category";
  constructor(private myClient:HttpClient) { }
  GetAll(){
    return this.myClient.get<Category[]>(this.BaseUrl);
  }
}
