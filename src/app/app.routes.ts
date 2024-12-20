import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { provideNgxDcNavbarLinksConfig } from '@devcrate/ngx-dc-navbar';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AppComponent,
    providers: [provideNgxDcNavbarLinksConfig([
      {
        type: 'link',
        title: 'Home',
        path: '/home',
        icon: 'home',
      },
      {
        type: 'link',
        title: 'Characters',
        path: '/characters',
        icon: 'arrow_forward',
      }
    ])],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },

  {
    path: 'characters',
    component: AppComponent,
    providers: [provideNgxDcNavbarLinksConfig([
      {
        type: 'link',
        title: 'Home',
        path: '/home',
        icon: 'arrow_back',
      },
      {
        type: 'link',
        title: 'Panda',
        path: '/characters/panda',
        icon: 'pets',
      },
      {
        type: 'link',
        title: 'Coco',
        path: '/characters/coco',
        icon: 'pets',
      },
      {
        type: 'link',
        title: 'Luna',
        path: '/characters/luna',
        icon: 'pets',
      }
    ])],
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./characters/characters.routes').then(m => m.CHARACTERS_ROUTES),
      },
    ],
  },
];
