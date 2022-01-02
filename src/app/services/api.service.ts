import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

constructor(private http:HttpClient) { }

  getdata(city:any){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=054d16e4792cf28373a50294a1f4e840")
  }

  postdata(data1:any){
    return this.http.post("http://127.0.0.1:8000/api/post_data",
  data1);
   }

   gettemp(citytemp:any){
     return this.http.get("http://127.0.0.1:8000/api/get_data")
   }

   temp(temp:any){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+temp+"&appid=054d16e4792cf28373a50294a1f4e840")
   }
}
