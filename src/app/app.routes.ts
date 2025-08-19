import { Routes } from '@angular/router';
import { LayoutComponent } from './features/1layout/layout/layout.component';
import { FlexboxComponent } from './features/2flexbox/flexbox/flexbox.component';

export const routes: Routes = [
  {
    path: '',
    component: FlexboxComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
];
