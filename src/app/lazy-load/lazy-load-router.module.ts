import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadComponent } from './lazy-load.component';
import { LazyLoadDemoComponent } from './lazy-load-demo/lazy-load-demo.component';

const routes: Routes = [
    {
        path:'',
        component:LazyLoadComponent,
        children:[
        //     {
        //         path:'',
        //         redirectTo:'demo',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path:'demo',
        //         component:LazyLoadDemoComponent
        //     }
        ]    
    },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],  
  exports:[RouterModule]
})
export class LazyLoadRouterModule { }
