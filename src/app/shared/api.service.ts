import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  //now here i will define the POST,GET,PUT,DELETE
  //CREATE RESTURANT USING POST METHOD
  postResturant(data: any) {
    return this._http.post<any>("http://localhost:3000/posts/", data).pipe(map((res: any) => {
      return res;
    }))
  }
  //GET RESTURANT DATA USING GET METHOD
  getResturant() {
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res: any) => {
      return res;
    }))
  }
  //UPDATE RESTURANT USING PUT METHOD
  updateResturant(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  //DELETE RESTURANT USING DELETE METHOD
  deleteResturant(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
  //THIS IS DONE
}
