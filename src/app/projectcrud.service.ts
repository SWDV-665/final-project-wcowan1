import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// create project class to export
export class Project{
  _id: number;
  project_id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  leader: String;
  accountant: String;
  report:String;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectcrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createProject(user: Project): Observable<any> {
    return this.httpClient.post<Project>('http://localhost:5000/api/create-user', Project, this.httpOptions)
      .pipe(
        catchError(this.handleError<Project>('Error occured'))
      );
  }

  getProject(_id): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:5000/api/fetch-user/' + _id)
      .pipe(
        tap(_ => console.log(`User fetched: ${_id}`)),
        catchError(this.handleError<Project[]>(`Get project id=${_id}`))
      );
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('http://localhost:5000/api')
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<Project[]>('Get project', []))
      );
  }

  updateProject(_id, project: Project): Observable<any> {
    return this.httpClient.put('http://localhost:5000/api/update-project/' + _id, project, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${_id}`)),
        catchError(this.handleError<Project[]>('Update project'))
      );
  }

  deleteProject(_id): Observable<Project[]> {
    return this.httpClient.delete<Project[]>('http://localhost:5000/api/delete-project/' + _id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${_id}`)),
        catchError(this.handleError<Project[]>('Delete user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}
