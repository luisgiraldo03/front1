import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  
  modelo ="";
  fecha = "";
  nombreDataSet= "";

  ngOnInit(){
    
  }

  public onSend(){
    console.log(this.modelo, this.fecha, this.nombreDataSet);
  }


}
