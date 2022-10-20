import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  productdataser(data:any){
    return this.HttpClient.get('https://dummyjson.com/products/'+data);
  }
}
