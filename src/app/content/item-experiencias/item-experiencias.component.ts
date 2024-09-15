import { Component } from '@angular/core';

@Component({
  selector: 'app-item-experiencias',
  templateUrl: './item-experiencias.component.html',
  styleUrl: './item-experiencias.component.css'
})
export class ItemExperienciasComponent {
  experiencias = [
    {
      empresa: 'SPI - integração de Sistemas',
      descrição: 'Atuação na area de Desenvolvimento e Implementação de Softwares industriais e Integração/Implementação de Sistemas',
      cargos:[
        {
          cargo: 'Técnico em Programação',
          duracao:'Set/2022 - out/2023',
        },
        {
          cargo: 'Programador de Software',
          duracao:'out/2023 - Atual',
        },
      ]
    },
  ]
}
