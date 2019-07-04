import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Linguagem } from 'src/typings/linguagem';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  constructor(private httpClient: HttpClient) { }

  getLinguagens(): Observable<Linguagem[]> {
    return this.httpClient.get<Linguagem[]>('http://localhost:3000/languages');
  }

  adicionarLinguagem(linguagem: Linguagem) {
    console.log(linguagem);
    return this.httpClient.post('http://localhost:3000/languages', linguagem);
  }
}
