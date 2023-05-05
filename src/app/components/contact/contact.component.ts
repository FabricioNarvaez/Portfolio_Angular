import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

    public title: String;
    public model = {
        name : "", 
        email : "", 
        subject : "", 
        message : "", 
        phone: ""
    }

    constructor() {
        this.title = "Contacto"
    }

    ngOnInit(): void {
    }

    sendEmail():void{
      window.open('mailto:narvaezfabricio38@gmail.com?subject=Asunto%20del%20correo%20electr%C3%B3nico&body=Cuerpo%20del%20correo%20electr%C3%B3nico');
    }
    // onSubmit(form: NgForm):void{
    //     console.log('form values', form);
    //     console.log('form values', form.valid);
    // }
}
