import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/auth/auth.module').then( module => module.AuthModule )
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes, { onSameUrlNavigation: 'reload' } ) ],
	exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
