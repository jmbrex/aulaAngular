import { Component } from '@angular/core';

@Component({
  selector: 'app-item-formacao',
  templateUrl: './item-formacao.component.html',
  styleUrl: './item-formacao.component.css'
})
export class ItemFormacaoComponent {
  formacoes: String[] = [
    'Técnico em Mecatrônica - SENAI',
    'Tecnólogo Análise e Desenvolvimento de Sistemas',
  ];

  cursos: String[] = [
    'FullStack Javascript - One bit Code',
    'Java Completo - Nélio Alves',
  ];
}
