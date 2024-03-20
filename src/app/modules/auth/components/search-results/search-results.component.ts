import { Component, effect, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component( {
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: [ './search-results.component.scss' ]
} )
export class SearchResultsComponent implements OnInit {

	resultados: any[] = [];
	query: string = '';

	constructor( private router: Router,
			private authservice: AuthService
	) {
		effect( () => {
			this.resultados = this.authservice.getResultados();
		} );
		effect( () => {
			this.query = this.authservice.getInputValue();
		} );
	}


	ngOnInit(): void {

	}


}
