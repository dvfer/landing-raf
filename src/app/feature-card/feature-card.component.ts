import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-feature-card',
    templateUrl: './feature-card.component.html',
    styleUrl: './feature-card.component.css',
})
export class FeatureCardComponent {
    @Input() img: string =
        'https://globalve.cl/wp-content/uploads/2021/10/Global-ve-chile-icono-mundo2.gif';
    @Input() header: string = 'Envios a todo el mundo';
    @Input() body: string = 'Vendedores designados por zona';
    @Input() type: string = 'url';


}
