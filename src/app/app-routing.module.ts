import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  {
    path: 'lazy',
    loadChildren: './lazy-load/lazy-load.module#LazyLoadModule'
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],  
  exports:[RouterModule]
})
export class AppRoutingModule { }
