import {Component} from '@angular/core'

@Component({
    template:`<h3>Greeter</h3>
    <label>Name:</label>
    <input type="text" #txtName>
    <input type="text" [(ngModel)]="name">
    <input type="button" value="Greet" (click)="onGreetClick(txtName.value)" >
    <input type="button" value="Greet2WayBinding" (click)="onGreetClick2Way()" >
    <div>{{message}}</div>
    `,
    selector:'greeter'
})

export class GreeterComponent{
    message: string='Dummy Message';
name:string='';

onGreetClick(name: string){
    this.message=`Hi ${name}, Have a nice day!`;
}

onGreetClick2Way()
{
    this.message=`Hi ${this.name}, Have a nice day!`;
}

}