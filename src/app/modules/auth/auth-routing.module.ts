import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ConfirmUserPageComponent } from './pages/confirm-user-page/confirm-user-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'landing',
				component: LandingComponent
			},
			{
				path: 'confirm-user/:token',
				component: ConfirmUserPageComponent
			},
			{
				path: 'store',
				loadChildren: () => import('./components/layout/layout.module').then( module => module.LayoutModule )
			},
			{
				path: '**',
				redirectTo: 'landing',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class AuthRoutingModule {
}
