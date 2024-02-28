import { Component} from '@angular/core';

@Component({
    selector: 'app-root-view',
    templateUrl: './root-view.component.html',
    styleUrl: './root-view.component.css',
})
export class RootViewComponent {
    imgList = [
        {
            img: '/assets/map.png',
        },

        {
            img: '/assets/map.png'
        }
    ];

    config = {
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: false,
        pauseOnHover: true,
    };
}
