import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetTask } from '../models/pet-task';


@Injectable({
  providedIn: 'root'
})
export class PetScheduleService {

  private url = environment.baseUrl + "api/pettasks";

  constructor(private http: HttpClient) { }

  index(): Observable<PetTask[]> {

    return this.http.get<PetTask[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create(): error creating todos: ' + err)
        );
      })
    );
    // return [...this.todos];
  }

}
