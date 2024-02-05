// import { Component, OnInit } from '@angular/core';
import { Component} from '@angular/core';
// import { PhotoService } from '../../service/photoservice';
@Component({
    selector: 'app-galleria',
    templateUrl: './galleria.component.html',
    styleUrl: './galleria.component.css',
})
export class GalleriaComponent{
images = [
            'https://globalve.cl/wp-content/uploads/2023/08/Banner-principal-nuevo-Global_Banner-1.jpg.png',
            'https://globalve.cl/wp-content/uploads/2023/07/Banner-Productos-Nestle-Horizontal.png',
            'https://globalve.cl/wp-content/uploads/2023/07/Banner-Cafe-Horizontal.png',
        ];


    responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
        },
        {
            breakpoint: '768px',
            numVisible: 1,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ];
}
