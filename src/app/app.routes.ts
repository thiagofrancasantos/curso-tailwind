import { Routes } from '@angular/router';
import { LayoutComponent } from './features/1layout/layout/layout.component';
import { FlexboxComponent } from './features/2flexbox/flexbox/flexbox.component';
import { GridComponent } from './features/3grid/grid/grid.component';

export const routes: Routes = [
  {
    path: '',
    component: GridComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
];
