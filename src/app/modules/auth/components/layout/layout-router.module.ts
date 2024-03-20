import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'home',
				component: HomePageComponent
			},
			{
				path: 'results',
				component: SearchResultsComponent
			},
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule( {
	exports: [ RouterModule ],
	imports: [
		RouterModule.forChild( routes )
	]
} )
export class LayoutRouterModule {
}
