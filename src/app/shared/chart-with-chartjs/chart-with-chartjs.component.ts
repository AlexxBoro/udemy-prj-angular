import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-with-chartjs',
  templateUrl: './chart-with-chartjs.component.html',
  styleUrls: ['./chart-with-chartjs.component.scss']
})

export class ChartWithChartJSComponent  {

  title = 'app';
  public pieChartLabels:string[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
  public pieChartData:number[] = [21, 39, 10, 14, 16];

  public pieChartType:string = 'doughnut';

  // events on slice click
  public chartClicked(e: any): void {
    // console.log(e);
  }
// event on pie chart slice hover
  public chartHovered(e: any): void {
    // console.log(e);
  }

}


