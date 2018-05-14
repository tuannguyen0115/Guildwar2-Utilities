import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrokerFeeComponent } from './broker-fee/broker-fee.component';
import { IstanProfitComponent } from './istan-profit/istan-profit.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.modules';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ShipmentResolver } from './resolvers';
import { RichnodeComponent } from './richnode/richnode.component';


@NgModule({
  declarations: [
    AppComponent,
    BrokerFeeComponent,
    IstanProfitComponent,
    HomeComponent,
    RichnodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService, ShipmentResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
