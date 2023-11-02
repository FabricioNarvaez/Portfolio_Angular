import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {

  public title: String;
  public description:string = "Explora mis habilidades y conocimientos en el desarrollo web. Aquí te muestro todo sobre mis competencias en el mundo del desarrollo web.";

  constructor(private meta: Meta) {
    this.title = "Habilidades"
  }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Fabricio Narváez' });
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ property: 'og:description', content: this.description });
  }

}
