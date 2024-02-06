import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RootViewComponent } from './root-view/root-view.component';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';


import { GalleriaModule } from 'primeng/galleria';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';

import { GalleriaComponent } from './galleria/galleria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
@NgModule({
    declarations: [
        AppComponent,
        RootViewComponent,
        AboutUsViewComponent,
        ContactViewComponent,
        NavbarComponent,
        GalleriaComponent,
        ImgSliderComponent,
        ProductCarouselComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        GalleriaModule,
        SlickCarouselModule,
        ButtonModule,
        TagModule,
        CarouselModule,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
