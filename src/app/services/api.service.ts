import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders( { 'Content-Type': 'application/json '})
  constructor(private http: HttpClient) { } 

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + '/movies/', {headers:  this.httpHeaders })
  }

  getMovieDescription(param): Observable<any> {
    return this.http.get(this.baseurl + '/movies/' + param  + '/' , {headers:  this.httpHeaders })
  }

  UpdateMovie(param): Observable<any> {
    const body = {title: param.title, desc: param.desc, year: param.year};
    return this.http.put(this.baseurl + '/movies/' + param.id  + '/', body , {headers:  this.httpHeaders })
  }

  CreateMovie(param): Observable<any> {
    const body = {title: param.title, desc: param.desc, year: param.year};
    return this.http.post(this.baseurl + '/movies/' , body , {headers:  this.httpHeaders })
  }

  DeleteMovie(param): Observable<any> {
    return this.http.delete(this.baseurl + '/movies/' + param  + '/' , {headers:  this.httpHeaders })
  }
}
