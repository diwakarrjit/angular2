import {Component,Input} from '@angular/core'

@Component({
    template:`
    <div>{{messageData}}</div>
    `,
    selector:'greeter-message'
})

export class GreeterMessageComponent{
    @Input()
    messageData: string='';
//name:string='';

}