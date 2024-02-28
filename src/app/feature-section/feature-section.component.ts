import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.css'
})
export class FeatureSectionComponent {
    features = [
        {
            img:'bi-globe-americas',
            type: 'svg',
            header: 'Envios a todo el mu',
            body: 'Vendedores designados por zona'
        },
        {
            img: 'bi-telephone-forward',
            type: 'svg',
            header: 'Envios a todo el muaaaaaaaaaaaa',
            body: 'Vendedores designados por zonaaaaaaaaaaaaaa'
        },

        {
            img: 'bi-globe-americas',
            type: 'svg',
            header: 'Garantía de calidad',
            body: 'Productos con certificación de calidad internacional',
        },
        {
            img: 'bi-headset',
            type:'svg',
            header: 'Atención al cliente',
            body: 'Soporte técnico y atención personalizada 24/7'
        }
    ];
}
