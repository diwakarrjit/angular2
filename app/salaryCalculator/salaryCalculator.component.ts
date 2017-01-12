import {Component} from '@angular/core'
import { SalaryCalculator } from './SalaryCalculator.Model';

@Component({
    template:`<h3>Salary Calcular</h3>
    <label>Basic:</label>
    <input type="number" [(ngModel)]="calculator.basic"><br>
    <label>Hra:</label>
    <input type="number" [(ngModel)]="calculator.hra"><br>
    <label>Ta/Da:</label>
    <input type="number" [(ngModel)]="calculator.tada"><br>
    <label>Tax:</label>
    <input type="number" [(ngModel)]="calculator.tax">
    <input type="range" min="0" max="30" [(ngModel)]="calculator.tax">
    <br>
    <input type="button" value="CalculateSalary" (click)="calculator.calculateSalary()" >
    <div>{{calculator.message}}</div>
    `,
    selector:'salarycalculator'
})

export class SalaryCalculatorComponent{

    calculator:SalaryCalculator= new SalaryCalculator();
}

