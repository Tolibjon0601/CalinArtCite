import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { Login2Component } from './core/auth/login2/login2.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogDetailComponent } from './components/catalog-detail/catalog-detail.component';
import { EducationComponent } from './components/education/education.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { UsefulComponent } from './components/useful/useful.component';
import { RedMoreComponent } from './components/red-more/red-more.component';

export const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'login2',component:Login2Component},
{path:'',component:LayoutComponent,
children:[
{path:'',component:HomeComponent},
{path:'catalog/:catalog-detail',component:CatalogDetailComponent},
{path:'education',component:EducationComponent},
{path:'useful',component:UsefulComponent},
{path:'partner',component:PartnerComponent},
{path:'profile',component:ProfileComponent},
{path:'contact',component:ContactComponent},
{path:'catalog', component:CatalogComponent},
{path:'useful/:read-more',component:RedMoreComponent},

]
}

];
