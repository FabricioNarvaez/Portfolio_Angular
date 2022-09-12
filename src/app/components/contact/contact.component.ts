import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public title: String;

    constructor() {
        this.title = "Formulario de Contacto"
    }

    ngOnInit(): void {
    }

}
