import { Component, effect, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {

	query: string = '';
	resultados: any[] = [];
	datos: any[] = [];

	constructor( private authservice: AuthService,
			private router: Router,
			private route: ActivatedRoute ) {
		effect( () => {
			this.query = this.authservice.getInputValue();
		} );
	}

	ngOnInit(): void {
		this.authservice.obtenerDatos().subscribe( ( data: any ) => {
			this.datos = data;
		} );
	}

	buscar() {
		this.authservice.setInputValue( this.query );
		this.resultados =
				this.datos.filter( item => item.price && item.image && item.title.toLowerCase().includes( this.query.toLowerCase() ) );
		this.authservice.setResultados( this.resultados );
		this.router.navigateByUrl( '/store/results' );
	}
}
