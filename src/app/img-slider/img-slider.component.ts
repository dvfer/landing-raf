import { Component} from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
    selector: 'app-img-slider',
    templateUrl: './img-slider.component.html',
    styleUrl: './img-slider.component.css',
})
export class ImgSliderComponent {
    slides = [
        {
            img: 'https://globalve.cl/wp-content/uploads/2023/08/Banner-principal-nuevo-Global_Banner-1.jpg.png',
        },
        {
            img: 'https://globalve.cl/wp-content/uploads/2023/07/Banner-Productos-Nestle-Horizontal.png',
        },
        {
            img: 'https://globalve.cl/wp-content/uploads/2023/07/Banner-Cafe-Horizontal.png',
        },
    ];
    hidden = true;
    slideConfig = {
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        dots: true,
        pauseOnHover: true,
    };

    slickInit(e: any) {
        this.hidden = false;
        console.log('slick initialized' + e);
    }

    breakpoint(e: any) {
        console.log('breakpoint' + e);
    }
}
