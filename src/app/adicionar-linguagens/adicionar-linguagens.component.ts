import { Component, OnInit } from '@angular/core';
import { Linguagem } from 'src/typings/linguagem';
import { LinguagensService } from '../linguagens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-linguagens',
  templateUrl: './adicionar-linguagens.component.html',
  styleUrls: ['./adicionar-linguagens.component.css']
})
export class AdicionarLinguagensComponent implements OnInit {

  linguagem: Linguagem = {
    id: null,
    name: '',
    creator: '',
    year: null
  }

  constructor(private linguagemService: LinguagensService,
              private router: Router) { }

  ngOnInit() {
  }

  adicionarLinguagem() {
    this.linguagemService.adicionarLinguagem(this.linguagem).subscribe(() => {
      alert('Adicionado com sucesso!!!');
      this.router.navigateByUrl('/languages');
    });
  }

}
