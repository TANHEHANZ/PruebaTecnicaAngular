import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataPockemon, listPockemon } from '../types/pockeService';

@Injectable({
  providedIn: 'root',
})
export class PockeServiceService {
  private POKEAPI = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<listPockemon> {
    return this.httpClient.get<listPockemon>(this.POKEAPI).pipe((res) => res);
  }
}
  