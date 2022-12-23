import { Routes } from '@angular/router';
import {
  HelloComponent,
  HiComponent,
  PageNotFoundComponent,
} from './hello.component';

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [
      { path: 'HelloChild', component: HiComponent },
      { path: 'Test', component: PageNotFoundComponent },
    ],
  },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: 'hi', component: HiComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: '**', redirectTo: 'PageNotFound' },
];
