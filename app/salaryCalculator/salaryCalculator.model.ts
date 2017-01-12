export class SalaryCalculator{
    message: string='';
basic:number;
hra:number;
tada:number;
tax:number=0;
salary:number;

calculateSalary(){
this.salary=(this.basic+this.hra+this.tada)-(this.tax/100*this.basic);
this.message='Your salary, '+this.salary;
}


}