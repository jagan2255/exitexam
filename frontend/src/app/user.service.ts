import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_address: string = 'http://localhost:3000';
  //server_address: string = 'api';

  constructor(private http:HttpClient) { }

  getotp(data:any){
    this.http.post(`${this.server_address}/getdata` , data)
    .subscribe((data) => { console.log(data) });

  }

  checkuser(id:any){
   return this.http.post<any>(`${this.server_address}/verifydata` , id)

  }
}
