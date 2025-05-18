import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private apiUrl = 'http://localhost:3000/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReportById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  addReport(report: any): Observable<any> {
    return this.http.post(this.apiUrl, report);
  }

  updateReport(report: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${report.id}`, report);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
