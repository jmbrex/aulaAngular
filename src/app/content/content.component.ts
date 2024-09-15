import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  hardSkill: String[] = ['Java', 'Spring Boot', 'Javascript', 'MySQL'];
  softSkill: String[] = [];
}
