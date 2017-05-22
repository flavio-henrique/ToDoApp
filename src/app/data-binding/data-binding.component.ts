import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://test';
  valorAtual: string = "";
  valorSalvo: string;
  nome: string = 'abc';
  nomeDoCurso: string = "Angular";
  valorInicial: number = 15;
  pessoa = {
    nome: null,
    idade: null
  }

  onMudouValor(evento){
    console.log(evento);
  }

  getValue(){
    return 3;
  }

  botaoClicado(e:HTMLSelectElement){
    alert('botão clicado');
    console.log(e.value);
  }


  onkeyUp(evento: KeyboardEvent){
    let input: HTMLInputElement;
    input = <HTMLInputElement>evento.target;
    this.valorAtual = input.value;
  }

  salvandoValor(valor){
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
