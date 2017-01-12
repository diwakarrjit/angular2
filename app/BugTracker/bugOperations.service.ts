import {Bug} from './models/Bug'

export class BugOperations{
 
 ///******Variable declarations */
 bugs:Array<Bug>=[];
 bug:Bug= new Bug();
 closed:number=this.bugs.filter(x=>x.isClosed).length;

 ///***********Functions */
AddBug(bugName:string){
    let newBug:Bug={Id:this.bugs.length+1,  Title:this.bug.Title,isClosed:false};
    this.bugs.push(newBug);
    this.bug=new Bug();
}

toggle(bug:Bug){
bug.isClosed=!bug.isClosed;
this.closed=this.bugs.filter(x=>x.isClosed).length;
}

removeBugs()
{
    this.bugs=this.bugs.filter(x=>!x.isClosed);
    this.closed=this.bugs.filter(x=>x.isClosed).length;
}

 }



