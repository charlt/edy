import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DocumentosService } from 'src/app/inscripcion/services/documentos.service';
import { AspiranteService } from 'src/app/administracion/aspirante/services/aspirante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {
  
  jwt: string;
  idPersona: number;
  idRol: number;
  idAspirante: number;

  constructor(
    private _usuarioService: UsuarioService,
    private _aspiranteService: AspiranteService,
    private route: ActivatedRoute
  ) { 
    this.jwt = this._usuarioService.getJWT();
    this.idRol = this._usuarioService.getRol().rol_id;
    if (this.idRol != 1 && this.idRol != 5) {
      this.idPersona = this._usuarioService.getIdentity().persona_id;  
    }else{
      this.idPersona = parseInt(this.route.snapshot.paramMap.get('id'));
    }
    this.idRol = 2;
  }

  ngOnInit() {    
    this.consultaAspirante();
  }

  consultaAspirante(){        
    this._aspiranteService.registroAspirante(this.jwt, this.idPersona).subscribe(
      response =>{        
        if(response && response['status']){  
          this.idAspirante = response['idAspirante'];            
        }
      },error =>{
        console.log(<any>error)
    });
  }
}
