import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { trigger,sequence, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[
    trigger('fadeInSequence', [
      transition('* <=> *', [
          style({ opacity: 0, transform: 'scale(0)'  }),
          sequence([
            animate('100ms', style({ opacity: 1, transform: 'scale(0, .01)' })),
            animate('100ms', style({ transform: 'scale(1, .01)' })),
            animate('200ms', style({ transform: 'scale(1, 1)' }))
          ])
      ])
    ]),
  ]
})
export class ProjectsComponent implements OnInit {

  public description:string = "Explora una selección de mis proyectos en el desarrollo web, desde los más antiguos a los más recientes. Aquí puedes conocer en detalle mi trabajo y en el mundo del desarrollo web.";

  constructor(private meta: Meta) {
  }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Fabricio Narváez' });
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ property: 'og:description', content: this.description });
  }

}
