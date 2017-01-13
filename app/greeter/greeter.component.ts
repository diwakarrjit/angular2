import {Component} from '@angular/core'

@Component({
    template:`<h3>Greeter</h3>
    <label>Name:</label>
    <input type="text" #txtName>
    
    <input type="button" value="Greet" (click)="onGreetClick(txtName.value)" >
    
    <greeter-message [messageData]="name" ></greeter-message>`,
    selector:'greeter'
})

//<input type="text" [(ngModel)]="name">
//<input type="button" value="Greet2WayBinding" (click)="onGreetClick2Way()" >
export class GreeterComponent{
    message: string='Dummy Message';
    name:string='';

onGreetClick(name: string){
    //this.message=`Hi ${name}, Have a nice day!`;
    this.name=`Hi ${name}, its one way binding magic.`
}

onGreetClick2Way()
{
    this.message=`Hi ${this.name}, Have a nice day!`;
}

}