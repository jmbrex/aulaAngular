import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  hardSkill: String[] = ['Java', 'Spring Boot', 'Javascript', 'MySQL'];
  softSkill: String[] = ['Engenharia de Software','Desenvolvimento em Equipe','Padronização de Software','Comunicação com Cliente','Metodologias de Desenvolvimento'];
}
