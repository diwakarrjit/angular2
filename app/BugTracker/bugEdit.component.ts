import {Component,Output,EventEmitter} from '@angular/core'

@Component({
  template:`<section class="edit" >
  New Bug:<input type="text" #txtBugTitle>
  <input type="button" (click)="onSaveClick(txtBugTitle.value)" value="Save">
  `,
  selector:'bug-edit'  
})
export class BugEditComponent{

@Output()
onBugAdd: EventEmitter<string>= new EventEmitter<string>();

onSaveClick(bugTitle:string){
    this.onBugAdd.emit(bugTitle);
}

}