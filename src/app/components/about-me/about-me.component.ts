import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public title: string;
  public description:string = "¡Bienvenido a mi página de 'Sobre Mí'! Aquí encontrarás información sobre mi background, experiencia y pasiones. Descubre quién soy y lo que puedo ofrecer en el mundo de la tecnología y el desarrollo web.";

  constructor(private meta: Meta) {
    this.title = "Sobre mi"
  }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Fabricio Narváez' });
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ property: 'og:description', content: this.description });
  }

  openPDF() {
    const pdfUrl = 'assets/pdf/cv_Fabricio_Narvaez.pdf';
    window.open(pdfUrl, '_blank');
  }

}
