import { Component } from '@angular/core';
//import 'hammerjs/hammer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  operation: string = '';
  result: string= '';

  append(element: string){
    this.operation += element;
  }
  clear(){
    this.operation = '';
    this.result = '';
  }
  evaluate(){
    try {
      this.result = eval(this.operation);
    }
    catch(e){
      this.result ='Invalid Input' ;
    }
  }
}


