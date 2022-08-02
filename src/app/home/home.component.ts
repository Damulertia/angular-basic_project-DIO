import { alunos } from './../model/model.component';
import {professores} from './../model/model.component';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor!: number;
  valorProf!: number;
  exibeTabela:  boolean = false;
  exibeTabelaProf: boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25, email: 'Teste@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  listaProfs: professores[] = [
    {nome: 'Dalila Chagas', curso: 'Matemática', email: 'dada@gmail', tempos: 4 },
    {nome: 'Daniel Boa Vista', curso: 'Português', email: 'dani@gmail', tempos: 5},
    {nome: 'Vitor Tomazi', curso: 'Física', email: 'vitor23@gmail', tempos: 3 },
    {nome: 'Ton Vegas', curso: 'Biologia', email: 'ton@gmail', tempos: 4 }
  ]



  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = this.listaAlunos.length;
    this.valorProf = this.listaProfs.length;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabelaAluno() {
    this.exibeTabela = true;
  }

  exibirTabelaProf() {
    this.exibeTabelaProf = true;
  }

  fecharTabela() {
    this.exibeTabela = false;
  }

  fecharTabelaProf() {
    this.exibeTabelaProf = false;
  }


}