import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{

  constructor( private _DataService:DataService){  }


  combinedData: any[] = [];
  searchName: string = '';
  searchAmount: number | null = null


  groupedTransactions:any [] = []

  selectedCustomer: any = null;
  selectedCustomerTransactions: any[] = [];



    ngOnInit(): void {
      this._DataService.getCustomer().subscribe(customers => {
        this._DataService.getTarnsaction().subscribe(transactions => {
          this.combinedData =
          transactions.map((transaction:any) => {const customer = customers.find((cust:any) => cust.id == transaction.customer_id);
            return { ...transaction, customerName : customer ? customer.name : 'Unknown'};
          });
        });
      });
    }


    selectCustomer(customer: any) {
      this.selectedCustomer = customer;
      this.selectedCustomerTransactions = this.combinedData.filter(transaction => transaction.customerId == customer.customerId);
      this.groupTransactionsByDate();
    }




    groupTransactionsByDate() {
      const groupedData = this.selectedCustomerTransactions.reduce((acc, transaction) => {
        const date = transaction.date.split('T')[0];
        acc[date] = (acc[date] || 0) + transaction.amount;
        return acc;
      }, {});

      this.groupedTransactions = Object.keys(groupedData).map(date => ({
        date,
        totalAmount: groupedData[date]
      }));
    }



  }

