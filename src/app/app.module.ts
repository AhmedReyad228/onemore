import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './Components/customer/customer.component';

import { SearchPipe } from './pipes/search.pipe'
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { ChartComponent } from './Components/chart/chart.component';

import { BaseChartDirective } from 'ng2-charts'



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchPipe,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartjsModule,
    BaseChartDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
