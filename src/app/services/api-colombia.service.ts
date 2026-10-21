import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class ApiColombiaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl: string = 'https://api-colombia.com/api/v1';

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/Department`);
  }

  getCities(departmentId: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/Department/${departmentId}/cities`);
  }
}
