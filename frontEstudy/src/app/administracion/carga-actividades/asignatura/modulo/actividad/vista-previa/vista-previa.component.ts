import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActividadService } from 'src/app/materia/actividad/services/actividad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vista-previa-admin',
  templateUrl: './vista-previa.component.html',
  styleUrls: ['./vista-previa.component.scss']
})
export class VistaPreviaComponent implements OnInit {

  idActividad;
  jwt;
  actividad;
  fechaActividad;
  edicion = 1;

  finalizaCarga = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _actividadService: ActividadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.idActividad = this.route.snapshot.parent.params['id'];    
  
    this.jwt = this._usuarioService.getJWT();
    this._actividadService.consulta( this.idActividad,this.jwt).subscribe(
      response =>{        
          if(response && response['status']){
            this.actividad = response['actividad'][0];  
            this._actividadService.consultaFechaActividadDummy( this.idActividad,this.jwt).subscribe(
              response =>{                
                  if(response && response['status']){
                    this.fechaActividad = response['fechaActividad'];  
                    this.finalizaCarga = true;   
                  }
            });
          
          }
    });

   
  }
  refrescaHeader(event){
    
    this.fechaActividad = event.fechaActividad;
  }


  
  redireccion(url){
    this.router.navigate([url+ '/'+this.idActividad],{ relativeTo: this.route.parent.parent });
  }
  

}
