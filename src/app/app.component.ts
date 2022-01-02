import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
// import { timeStamp } from 'console';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  closeResult = '';
  City:any = '';
  data:any = {};
  isShown:boolean = true;
  showbutton:boolean = true;
  cityname='';
  countryname ='';
  temp:any ='';
  database:any='';
  constructor(private modalService: NgbModal ,private apiservice:ApiService){}

  showtable(){
    this.isShown = false;
    this.showbutton = false;
  }
  showgrid(){
    this.isShown = true;
    this.showbutton = true;
  }

  Addcity(content:any)
  {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = ''
    });
  }

  submitHandler(){
    // console.log(this.City);
    this.apiservice.getdata(this.City).subscribe((res)=>{
        this.data = res;  
        // console.log(this.data.sys.country);
        
        // console.log(this.data.sys.country);
        // console.log(this.data.name); 

        let data:any = {
          City : this.data.name,
          Country:this.data.sys.country,
        }

        // console.log(data);
        

        this.apiservice.postdata(data).subscribe(result=>{
          console.log("result" ,result);
          
        });

        this.apiservice.gettemp(this.cityname).subscribe(res=>{
          this.database = res;
          // console.log(this.database);
        })

        this.apiservice.temp(this.database.City).subscribe(res=>{
          this.temp = res;
          console.log(this.temp);
        })
    });
  }    

  }
