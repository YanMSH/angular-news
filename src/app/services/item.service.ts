import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ResourceData} from "../models/Resource";
import {tap} from "rxjs";

@Injectable({
  providedIn:'root'
})

export default class ItemService {
  constructor(
    private HttpClient: HttpClient
    ) {
  }

itemData: ResourceData;

  getItemData(itemId:number){
    return this.HttpClient.get<ResourceData>(`https://hn.algolia.com/api/v1/items/${itemId}`).pipe(
      tap(response => {
          this.itemData = response;
        }
      )
    )
  }
}

