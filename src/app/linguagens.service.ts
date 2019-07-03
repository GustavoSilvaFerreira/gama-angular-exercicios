import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linguagens } from 'src/typings/linguagens';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  constructor(private httpClient: HttpClient) { }

  getLinguagens(): Observable<Linguagens[]> {
    return this.httpClient.get<Linguagens[]>('https://alefesouza.dev/gama/languages.php');
  }
}
