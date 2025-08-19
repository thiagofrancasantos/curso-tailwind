import { Routes } from '@angular/router';
import { LayoutComponent } from './features/1layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
    {
        path: 'layout',
        component: LayoutComponent
    }
];
