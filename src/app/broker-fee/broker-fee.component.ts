import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker-fee',
  templateUrl: './broker-fee.component.html',
  styleUrls: ['./broker-fee.component.css']
})
export class BrokerFeeComponent implements OnInit {
  copperCoin: string = '/assets/images/Copper_coin.png'
  silverCoin: string = '/assets/images/Silver_coin.png'
  goldCoin: string = '/assets/images/Gold_coin.png'
  constructor() { }

  ngOnInit() {
  }

}
