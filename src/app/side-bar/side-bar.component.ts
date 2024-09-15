import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  name: string = 'João Marcelo Santiago B. Silva'; // Nome a ser exibido
  email: String = 'joaosantiago558@gmail.com - ✉';
  numero: String = '(+11) 99842-9764 - 📱';
  formacoes: String[] = [
    'Técnico em Mecatrônica - SENAI',
    'Tecnólogo Análise e Desenvolvimento de Sistemas',
  ];

  cursos: String[] = [
    'FullStack Javascript - One bit Code',
    'Java Completo - Nélio Alves',
  ];
}
