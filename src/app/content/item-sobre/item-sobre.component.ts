import { Component } from '@angular/core';

@Component({
  selector: 'app-item-sobre',
  templateUrl: './item-sobre.component.html',
  styleUrl: './item-sobre.component.css'
})
export class ItemSobreComponent {
  sobre: String =
  'Sou apaixonado por tecnologia e adoro estudar novas tendências e inovações na área. Sempre estou buscando aprender mais sobre as últimas ferramentas e técnicas. Para mim, a tecnologia é uma área emocionante e estou sempre animado para explorar novas possibilidades e desafios.';
  hardSkill: String[] = ['Java', 'Spring Boot', 'Javascript', 'MySQL', 'Angular', 'React-Native'];
  softSkill: String[] = ['Engenharia de Software','Desenvolvimento em Equipe','Padronização de Software','Comunicação com Cliente','Metodologias de Desenvolvimento'];
}
