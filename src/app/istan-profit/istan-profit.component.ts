import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { SHIPMENTS } from "./database/shipment";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-istan-profit",
  templateUrl: "./istan-profit.component.html",
  styleUrls: ["./istan-profit.component.css"]
})
export class IstanProfitComponent implements OnInit {
  goldCoinImage = "/assets/images/Gold_coin.png";
  silverCoinImage = "/assets/images/Silver_coin.png";
  copperCoinImage = "/assets/images/Copper_coin.png";
  volatileImage = "assets/images/Volatile_magic.png";
  shipments = SHIPMENTS

  constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    for (let idx = 0; idx < this.shipments.length; idx++) {
      let params = this.shipments[idx].contain.map( a => a.id )
      this.dataService.retrieveItemListing(params).subscribe(data => {
        console.log(data)
        for (let i=0; i < this.shipments[idx].contain.length; i++) {
          this.shipments[idx].buy_price += this.shipments[idx].contain[i].rate * data[i].buys.unit_price
          this.shipments[idx].sell_price += this.shipments[idx].contain[i].rate * data[i].sells.unit_price          
        }        
        this.shipments[idx].buy_price = Math.round(this.shipments[idx].buy_price)
        this.shipments[idx].sell_price = Math.round(this.shipments[idx].sell_price)
        this.shipments[idx].buy_after_fee = Math.round((this.shipments[idx].buy_price*0.85)-10000)
        this.shipments[idx].sell_after_fee = Math.round((this.shipments[idx].sell_price*0.85)-10000)

      })
 
    }
  }
}
