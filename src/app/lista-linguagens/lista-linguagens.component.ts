import { Component, OnInit } from '@angular/core';
import { LinguagensService } from '../linguagens.service';
import { Linguagem } from 'src/typings/linguagem';

@Component({
  selector: 'app-lista-linguagens',
  templateUrl: './lista-linguagens.component.html',
  styleUrls: ['./lista-linguagens.component.css']
})
export class ListaLinguagensComponent implements OnInit {

  linguagens: Linguagem[];

  constructor(private linguagensService: LinguagensService) { }

  ngOnInit() {
    this.linguagensService.getLinguagens().subscribe(value => {
      this.linguagens = value;
    });
  }

}
