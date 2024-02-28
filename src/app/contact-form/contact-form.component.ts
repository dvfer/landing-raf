import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Region {
    name: string;

}

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.css',
})
export class ContactFormComponent implements OnInit{
    FormData: FormGroup;
    regiones: Region[] = [{ name: 'Arica y Parinacota' }, { name: 'Tarapacá' }, { name: 'Antofagasta' }, { name: 'Atacama' }, { name: 'Coquimbo' }, { name: 'Valparaíso' }, { name: 'Metropolitana' }, { name: 'O’Higgins' }, { name: 'Maule' }, { name: 'Ñuble' }, { name: 'Biobío' }, { name: 'Araucanía' }, { name: 'Los Ríos' }, { name: 'Los Lagos' }, { name: 'Aysén' }, { name: 'Magallanes' }];
    ngOnInit() {}
    constructor(private builder: FormBuilder) {
        this.FormData = this.builder.group({
            Fullname: new FormControl('', [Validators.required]),
            Email: new FormControl('', [Validators.required, Validators.email]),
            Region: new FormControl<Region|null>(null, [Validators.required]),
            Phone: new FormControl('', [
                Validators.required,
            ]),
            Message: new FormControl('', [Validators.required]),
            Address: new FormControl('', [Validators.required]),
        });
    }
    onSubmit(FormData: any) {
        console.log(FormData)
    }

}
