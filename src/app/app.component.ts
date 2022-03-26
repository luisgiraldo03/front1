import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SendService } from './send.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  pipe = new DatePipe('en-US');
  
  modelo ="";
  fecha = "";
  nombreDataSet= "";
 
  response = "";
 
  ngOnInit(){
  
  }
 
  /**
   *
   */
   constructor(public sendService: SendService, public http: HttpClient) {
   
  }
 
  public onSend(){
 
 
 
 
    let fechaF = this.pipe.transform(this.fecha, 'MM/dd/yyyy');
 
 
    this.sendService.save().subscribe((data)=>{console.log(data);
      this.response=data
    });
 
 
    //aqui va la respuesta
 
  }
}
