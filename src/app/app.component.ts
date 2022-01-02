import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import {OnInit} from '@angular/core';
// import { timeStamp } from 'console';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'weather-app';
  closeResult = '';
  City:any = 'Chennai';
  data:any = {};
  isShown:boolean = true;
  showbutton:boolean = true;
  cityname='';
  countryname ='';
  temp:any ='';
  settemp:any = '';
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

ngOnInit():void{
  this.submitHandler()
}
  submitHandler(){
    // console.log(this.City);
    this.apiservice.getdata(this.City).subscribe((res)=>{
        this.data = res;  
        let data:any = {
          City : this.data.name,
          Country:this.data.sys.country,
        }

        // console.log(data);
        this.apiservice.postdata(data).subscribe(result=>{
          console.log("result" ,result);

        this.apiservice.gettemp(this.cityname).subscribe(res=>{
            this.database = res;
            console.log("result2",this.database);

            for (let elem of this.database) {
              this.apiservice.temp(elem.City).subscribe(res=>{
                console.log("temp for city",elem.City,res);
                elem.weather = res
                elem.temp = elem.weather.main.temp
              });
            }
          });
        });
   ;
    });

    

    // this.apiservice.temp(this.City).subscribe(res=>{
    //   this.temp = res;
    //   console.log(this.temp.main.temp);
    //   this.settemp = this.temp.main.temp

    // })
  }    

  }
