import { Routes } from '@angular/router';

import { Portfolio } from './pages/portfolio/portfolio';
import { HcStore } from './pages/projetos/hc-store/hc-store';
import { DraBruna } from './pages/projetos/dra-bruna/dra-bruna';
import { LsTransporte } from './pages/projetos/ls-transporte/ls-transporte';

export const routes: Routes = [
  {
    path: '',
    component: Portfolio
  },
  {
    path: 'projetos/hc-store',
    component: HcStore
  },
  {
    path: 'projetos/dra-bruna',
    component: DraBruna
  },
  {
    path: 'projetos/ls-transporte',
    component: LsTransporte
  }
];