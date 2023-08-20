import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetTask } from '../models/pet-task';

@Injectable({
  providedIn: 'root',
})
export class PetScheduleService {
  private url = environment.baseUrl + 'api/pettasks';

  constructor(private http: HttpClient) {}

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

  create(petTask: PetTask): Observable<PetTask> {
    return this.http.post<PetTask>(this.url, petTask).pipe(
      catchError((err: any) => {
        console.log('Detailed Error:', err);
        return throwError(
          () =>
            new Error(
              'PetScheduleService.create(): error creating task: ' +
                JSON.stringify(err)
            )
        );
      })

      // catchError((err: any) => {
      //   console.log(err);
      //   return throwError(
      //     () => new Error('PetScheduleService.create(): error creating task: ' + err)
      //   );

      // })
    );
  }

  update(updateTask: PetTask): Observable<PetTask> {
    return this.http
      .put<PetTask>(this.url + '/' + updateTask.id, updateTask)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () =>
              new Error(
                'PetScheduleService.update(): error updating task: ' + err
              )
          );
        })
      );
  }

  destroy(taskId: number) {
    return this.http.delete<PetTask>(this.url + '/' + taskId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'PetScheduleService.delete(): error deleting task: ' + err
            )
        );
      })
    );
  }
}
