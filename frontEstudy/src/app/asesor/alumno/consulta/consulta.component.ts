import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PlataformaService } from 'src/app/services/plataforma.service';
import { Router } from '@angular/router';
import { AsesorService } from '../../services/asesor.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  searchField: FormControl; 
  Alumnos: any;
  totalItems: number;
  page: number = 1;
  itemsPerPage: number = 50;
  previousPage: any = 1;
  jwt: string;
  idRol;
  tipoForm = 1;
  loading: boolean = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _plataformaService: PlataformaService,
    private _asesorService: AsesorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.jwt = this._usuarioService.getJWT();
    this.idRol = this._usuarioService.getRol().rol_id;
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(500)).subscribe(data => {
      let inicio = (this.page - 1) * this.itemsPerPage;    
      this.consultaAlumnos(data, inicio);
    }); 
    this.consultaAlumnos('', 1);
  }

  consultaAlumnos(busqueda, inicio){        
    this.loading = true;
    this._asesorService.consultaAlumnos().subscribe(
      response =>{         
        console.log(response);
        
          if(response && response['status']) {
            this.Alumnos = response['Alumnos'];            
          }
          else this.Alumnos = null;
          this.loading = false;
      },error =>{
        console.log(<any>error)
    });
  }

  verPlataforma(alumno) {
    this._plataformaService.consultaJWT(alumno.matricula, 2).subscribe(response =>{
      if(response && response['status']){
        sessionStorage.setItem('tmp_jwt', this.jwt);
        sessionStorage.setItem('tmp_identity', JSON.stringify(this._usuarioService.getIdentity()));
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', response['jwt']);
        localStorage.setItem('identity',JSON.stringify(response['user']));
        this.router.navigate(['learning/home']);
      }
    },error =>{
      console.log(<any>error)
    });
  }

}
