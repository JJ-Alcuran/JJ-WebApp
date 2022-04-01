import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    public barChartLabels = ['2006', '2007', '2008', '2009', '2010'];
    public barChartType = 'bar';
    public barChartLegend = true;

    public barChartData = [
      {data: [10, 20, 70, 100, 150], label: 'OTDC'},
      {data: [2, 10, 30, 50], label: 'ODEP'}
    ];


  constructor() { }

  ngOnInit() {}

}
