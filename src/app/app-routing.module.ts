import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootViewComponent } from './root-view/root-view.component';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: RootViewComponent
    },
    {
        path: 'nosotros',
        component: AboutUsViewComponent
    },
    {
        path: 'contacto',
        component: ContactViewComponent
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
