import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyTask';

  constructor( private _DataService:DataService ){}

  data:any
  dataNames:any[] = []
  dataAmount:any[] =[]


  ngOnInit(): void {
    this._DataService.getCustomer().subscribe(customers => {
      this._DataService.getTarnsaction().subscribe(transactions => {
        this.data =
        transactions.map((transaction:any) => {const customer = customers.find((cust:any) => cust.id == transaction.customer_id);
          return { ...transaction, customerName : customer ? customer.name : 'Unknown'};
        });

        // if (this.data != null) {
        //   for (let i = 0; i < this.data.length; i++) {
        //     this.dataNames.push(this.data[i].customerName)
        //     this.dataAmount.push(this.data[i].amount)
        //   }
        // }

        // this.showChart(this.dataNames,this.dataAmount);
      });
    });

  }


  // showChart (dataNames:any,dataAmount:any):void{


  //   new Chart('myChart', {
  //     type: 'bar',
  //     data: {
  //       labels: dataNames,
  //       datasets: [{
  //         label: 'Total Transaction Amount',
  //         data: dataAmount,
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }


}
