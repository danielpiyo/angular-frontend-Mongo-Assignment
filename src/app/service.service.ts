import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) { }

  addStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, studentData);
  }
}
