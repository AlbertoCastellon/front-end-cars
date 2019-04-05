import { Injectable } from '@angular/core';

import { Car } from './car';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'api/cars';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      catchError(this.handleError<Car[]>('getCars', []))
    )
  }

  getCar(id: string): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  /** PUT: update the car on the server */
  updateCar (car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, httpOptions).pipe(
      catchError(this.handleError<any>('updateCar'))
    );
  }

  searchCars(term: string): Observable<Car[]> {
    if (!term.trim()) {
      // if not search term, return empty car array.
      return of([]);
    }
    return this.http.get<Car[]>(`${this.carsUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Car[]>('searchCars', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      /* TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`); */
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
