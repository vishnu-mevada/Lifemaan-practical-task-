import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProjectById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  addProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  updateProject(project: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${project.id}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
