import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public description:string = '¡Bienvenido a mi portfolio! Soy Fabricio Narváez, desarrollador Front-End. Explora mi trabajo y conoce más sobre mí y mi trayectoria en el mundo del desarrollo web.'
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Fabricio Narváez' });
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ property: 'og:description', content: this.description });
  }

}
