import { Routes } from '@angular/router';
import { RootViewComponent } from './root-view/root-view.component';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';

export const routes: Routes = [
    {
        path: '',
        component : RootViewComponent,
    },
    {
        path: 'nosotros',
        component: AboutUsViewComponent,
    }



];
