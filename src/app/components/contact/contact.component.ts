import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm{
    "name" : string, 
    "email" : string, 
    "subject" : string, 
    "message" : string
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
        message : ""
    }

    constructor() {
        this.title = "Formulario de Contacto"
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm):void{
        console.log('form values', form.valid);
    }
}
