import { Component } from '@angular/core';

@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrl: './product-carousel.component.css',
})
export class ProductCarouselComponent {
    products = [
        {
            image: 'https://th.bing.com/th/id/OIP.o47HT5Npc_dNowNOrW4UIAHaHO?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://th.bing.com/th/id/OIF.iQSCizqRXXfe1oGqgt2AFg?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://th.bing.com/th/id/OIP.o47HT5Npc_dNowNOrW4UIAHaHO?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://th.bing.com/th/id/OIF.iQSCizqRXXfe1oGqgt2AFg?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_Jumbo_Cencosud.png',
        },
        {
            image: 'https://th.bing.com/th/id/OIF.iQSCizqRXXfe1oGqgt2AFg?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://th.bing.com/th/id/OIP.o47HT5Npc_dNowNOrW4UIAHaHO?rs=1&pid=ImgDetMain',
        },
        {
            image: 'https://th.bing.com/th/id/OIF.iQSCizqRXXfe1oGqgt2AFg?rs=1&pid=ImgDetMain',
        },
    ];
    responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        },
    ];
}
