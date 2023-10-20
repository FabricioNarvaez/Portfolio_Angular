import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meta } from '@angular/platform-browser';

interface ContactForm{
    "name" : string, 
    "email" : string, 
    "subject" : string, 
    "message" : string,
    "phone": ""
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public description:string = "¡Hablemos! Estoy siempre interesado en nuevas oportunidades y colaboraciones. Contáctame para discutir proyectos, oportunidades laborales o simplemente para saludar. Estoy disponible y listo para conectarme contigo.";
    public model = {
        name : "", 
        email : "", 
        subject : "", 
        message : "", 
        phone: ""
    }

    constructor(private meta: Meta) {

    }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });
        this.meta.updateTag({ name: 'author', content: 'Fabricio Narváez' });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ property: 'og:description', content: this.description });
    }

    sendEmail():void{
      window.open('mailto:narvaezfabricio38@gmail.com?subject=Asunto%20del%20correo%20electr%C3%B3nico&body=Cuerpo%20del%20correo%20electr%C3%B3nico');
    }
    // onSubmit(form: NgForm):void{
    //     console.log('form values', form);
    //     console.log('form values', form.valid);
    // }
}
