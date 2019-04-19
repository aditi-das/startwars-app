import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, zip} from 'rxjs';
import {PeopleApiResponse, PeopleModel} from '../model/people.model';

@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) {}
  getPeopleData(): Observable<PeopleApiResponse> {
    return this.http.get<PeopleApiResponse>('https://swapi.co/api/people/');
  }
  getPeopleDetails(id: string): Observable<PeopleModel> {
    return this.http.get<PeopleModel>(`https://swapi.co/api/people/${id}/`);
  }
  getSpeciesDetails(urls: string[]) {
    return zip(...urls.map((url) => this.http.get(url)));
  }
}

