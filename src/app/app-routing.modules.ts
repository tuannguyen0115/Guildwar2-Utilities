import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { BrokerFeeComponent } from './broker-fee/broker-fee.component';
import { IstanProfitComponent } from './istan-profit/istan-profit.component';
import { ShipmentResolver } from './resolvers/shipment.resolve'
import { RichnodeComponent } from './richnode/richnode.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'tpcal',
        component: BrokerFeeComponent,
    },
    {
        path: 'istancal',
        component: IstanProfitComponent,
   
    },
    {
        path: 'richnode',
        component: RichnodeComponent,
    },            
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }