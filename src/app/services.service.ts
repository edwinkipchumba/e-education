import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private book!: string;
  private content!:string;
  private api!:string;

  

  constructor(private http:HttpClient) { 
    console.log("ready");
    this.book = "sql";
    this.content="";
  }
  getUser(book:any):Observable<any> {
    return this.http.get("https://api.itbook.store/1.0/search/" +book)
    .pipe((res =>res));

  }
  getCont(book:any):Observable<any> {
    return this.http.get("https://api.itbook.store/1.0/search/" +book)
    .pipe((res =>res));
  }

  getapi():Observable<any> {
    return this.http.get("https://127.0.0.1:5000/blogs")
    .pipe((res =>res));

  }
}