//import {Injectable} from '@angular/core'
import {Bug} from './models/Bug'

//@Injectable()
export class LocalStorage{
localStorage:any= window.localStorage;

getAllBugs(key:string="bugs"):Array<Bug>
{
let bugs:Array<Bug>= JSON.parse(this.localStorage.getItem(key));

return bugs;
}

syncBugs(value:Array<Bug>,key:string="bugs")
{
    this.localStorage.setItem(key, JSON.stringify(value));
}

}