import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {BackResponse, DataRecord} from "../models/Record";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  data: DataRecord[] = [];
  allPages = 0;
  getData(sortBy: 'date' | 'points', tags: string[], page = 0, hitsPerPage = 30): Observable<BackResponse> {
    return this.httpClient.get<BackResponse>(`https://hn.algolia.com/api/v1/${sortBy === 'date' ? 'search_by_date' : 'search'}`, {
      params: new HttpParams({fromObject:{tags: tags.join(','), page, hitsPerPage}})
    }).pipe(
      tap(response => {
        this.data = response.hits.map((item, index) => {
          item['serial_number'] = (index + 1) + (page * hitsPerPage);
          return item;
        });
        this.allPages = response.nbPages;
      })
    )
  }

}
