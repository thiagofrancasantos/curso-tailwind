import { Routes } from '@angular/router';
import { LayoutComponent } from './features/1layout/layout/layout.component';
import { FlexboxComponent } from './features/2flexbox/flexbox/flexbox.component';
import { GridComponent } from './features/3grid/grid/grid.component';
import { CustomizacaoComponent } from './features/4customizacao/customizacao/customizacao.component';
import { EspacamentoEAlinhamentoComponent } from './features/5espacamento_e_alinhamento/espacamento-e-alinhamento/espacamento-e-alinhamento.component';
import { TipografiaComponent } from './features/6tipografia/tipografia/tipografia.component';
import { BackgroundComponent } from './features/7background/background/background.component';

export const routes: Routes = [
  {
    path: '',
    component: BackgroundComponent,
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
  {
    path: 'customizacao',
    component: CustomizacaoComponent
  },
  {
    path: 'espacamento_alinhamento',
    component: EspacamentoEAlinhamentoComponent
  },
  {
    path: 'tipografia',
    component: TipografiaComponent
  },
  {
    path: 'background',
    component: BackgroundComponent
  }
];
