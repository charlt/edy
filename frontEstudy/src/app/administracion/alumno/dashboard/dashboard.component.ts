import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from '../services/alumno.service';

declare var alertify;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardAlumnoComponent implements OnInit {
  idAlumno;
  title;
  rol_id;
  id_usuario;
  alumno;
  Buttons: any;
  plataforma: string;

  constructor(
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _alumnosService: AlumnoService,
    private router: Router
  ) { 
    this.plataforma = this.router.url.split('/')[1];
    this.title = "";
    this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
    this._usuarioService.pushBreadcum(this.title,"",2); 
  }

  ngOnInit() {
    this.rol_id = this._usuarioService.getIdentity().rol_id;
    this.idAlumno = this.route.snapshot.params['id'];
    let link, link_accesos;
    if (this.rol_id != 3) {
      link = `/${this.plataforma}/alumno`;
      link_accesos = `/${link}/accesos/${this.idAlumno}`;
    }else {
      link = `/${this.plataforma}`;
      link_accesos = `/${link}/accesos/${this.idAlumno}`;
    }

    this.Buttons = [
      { label: 'Materias', link: `${link}/materias/${this.idAlumno}`, class: '', icon: 'book', condition: 'this.rol_id == 3 || this.rol_id == 5' },
      { label: 'Accesos', link: link_accesos, class: 'ml-2', icon: 'sign-in', condition: '' },
      { label: 'Expediente', link: `/${link}/expediente/${this.idAlumno}`, class: 'ml-2', icon: 'file-text-o', condition: 'this.rol_id == 3' },
      { label: 'Historial', link: `/${link}/historial/${this.idAlumno}`, class: 'ml-2', icon: 'list-alt', condition: 'this.rol_id == 3 || this.rol_id == 5' },
      { label: 'Notas', link: `/${link}/notas/${this.idAlumno}`, class: 'ml-2', icon: 'sticky-note-o', condition: 'this.rol_id == 3' },
      { label: 'Solicitud', link: `/${link}/solicitud/${this.idAlumno}`, class: 'ml-2', icon: 'address-book-o', condition: 'this.rol_id == 3' },
      { label: 'Avance', link: `/${link}/avance/${this.idAlumno}`, class: 'ml-2', icon: 'search', condition: 'this.rol_id == 3' }
    ]

    this.consultaAlumno();
  }

  consultaAlumno(){
    this._alumnosService.consultaEspecifica(this.idAlumno, '').subscribe(
      response =>{
        if(response && response['status']){
          this.alumno = response['alumno'];
        }
      },error =>{
        console.log(<any>error)
    });
  }

  refresh(){
    alertify.confirm('', '¿Deseas regresar el alumno como aspirante?', function(){
      this._alumnosService.rollBack(this.alumno.usuario_id).subscribe(
        response =>{
          if(response && response['status']){
            alertify.success(response['msg'])
          }
        },error =>{
          console.log(<any>error)
      });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});  
  }

  isHidden(value){
    return eval(value); 
  }

}
