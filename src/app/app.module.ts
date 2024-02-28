import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RootViewComponent } from './root-view/root-view.component';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';


import { GalleriaModule } from 'primeng/galleria';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import 'animate.css';


import { GalleriaComponent } from './galleria/galleria.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { FeatureAltComponent } from './feature-alt/feature-alt.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
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
        FeatureCardComponent,
        FeatureAltComponent,
        FooterComponent,
        ContactFormComponent,
        FeatureSectionComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        GalleriaModule,
        SlickCarouselModule,
        ButtonModule,
        TagModule,
        CarouselModule,
        CardModule,
        ReactiveFormsModule,
        AnimateOnScrollModule,
        InputTextModule,
        InputTextareaModule,
        InputMaskModule,
        InputNumberModule,
        DropdownModule,

    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}
