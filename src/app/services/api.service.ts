import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiurl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(this.apiurl)
  }

  addPost(data: any): Observable<any>{
    return this.http.post(this.apiurl, data)
  }
}
