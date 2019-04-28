import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyLoadRouterModule } from './lazy-load-router.module';
import { LazyLoadDemoComponent } from './lazy-load-demo/lazy-load-demo.component';
import { LazyLoadComponent } from './lazy-load.component';

@NgModule({
	declarations: [
        LazyLoadDemoComponent,
        LazyLoadComponent,
    ],
	imports: [
        LazyLoadRouterModule
	],
	providers: [],
})
export class LazyLoadModule { }
