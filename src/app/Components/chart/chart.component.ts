import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions , CategoryScale , registerables } from 'chart.js/auto';
import { DataService } from 'src/app/services/data.service';

Chart.register(...registerables);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  constructor ( private cdr: ChangeDetectorRef  ) { }


  @Input() transactions: any[] = [];


  ngOnInit(): void {
      console.log(this.transactions);

  }

  public chartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Transaction Amount',
        borderColor: '#3cba9f',
        backgroundColor: '#399918',
      }
    ]
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false
      },
      y: {
        beginAtZero: false
      }
    },
  };

  ngOnChanges(): void {
    this.updateChartData();
  }



  updateChartData() {
    const groupedData = this.transactions.reduce((acc, transaction) => {
      const date = transaction.date.split('T')[0];



      acc[date] = (acc[date] || 0) + transaction.amount;

      return acc;
    }, {});



    this.chartData.labels = Object.keys(groupedData);
    this.chartData.datasets[0].data = Object.values(groupedData);


    console.log('Updated chartData.labels:', this.chartData.labels);
    console.log('Updated chartData.datasets[0].data:', this.chartData.datasets[0].data);

    // Mark for check to ensure the chart updates
    this.cdr.markForCheck();


  }

}
