import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataItem {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.apiUrl);
  }
}
