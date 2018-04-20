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
  lastElement: string='';
  append(element: string){

   // this.operation += element;
   if(this.result=='' && !this.isOperator(element) ){
     this.operation='';
     this.lastElement='';
   }
   if(this.result==''){
    this.result=' ';
  }
    if(this.isOperator(element) &&  this.lastElement==''){
      this.result=' ';
      this.operation='';
    }
    else{  
    this.appendString(element);
    this.lastElement=element;
    if(!this.isOperator(element)){
      this.result = eval(this.operation);
    }
  }
  }
  clear(){
    this.operation = '';
    this.result = '';
    this.lastElement='';
  }
  evaluate(){
    try {
      this.operation=this.result;
      this.result ='' ;
     // this.lastElement='';
    }
    catch(e){
      this.result ='Invalid Input' ;
    }
  }
  
  isOperator(element){
      if(element!='+' && element!='-' && element!='*' && element!='/'){
        return false
    }
    return true;
  }
    appendString(element){
        if(!this.isOperator(this.lastElement)&&!this.isOperator(element)){
            this.operation += element;
        }
        else if(this.isOperator(this.lastElement)&&!this.isOperator(element)){
          this.operation += element;
        }
        else if(!this.isOperator(this.lastElement)&&this.isOperator(element)){
          this.operation += element;
        }
        else if(this.isOperator(this.lastElement)&& this.isOperator(element)){
          if(this.isOperator!=element){
            this.operation=this.operation.replace(this.operation.charAt(this.operation.length-1),element);
          }
        }
       
  }


}