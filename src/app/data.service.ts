import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {
  private base = 'https://api.guildwars2.com/v2/'
  constructor(private http: HttpClient) { }

  test(data: string) {
    return this.http.get(`${this.base}${data}`)
  }

  retrieveItem(id: number ){
    return this.http.get(`${this.base}items/${id}`)
  }

  retrieveItemListing(id) {
    return this.http.get(`${this.base}/commerce/prices?ids=${id}`)
  }
}
