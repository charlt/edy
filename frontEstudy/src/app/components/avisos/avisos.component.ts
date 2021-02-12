import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { AvisosService } from './avisos.service';
import { MateriaService } from 'src/app/services/materia.service';
import { ActivatedRoute } from '@angular/router';

declare var alertify;

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss']
})
export class AvisosComponent implements OnInit {
  title: string;
  jwt;
  
  avisos;
  nuevo = 1;
  cargandoAvisos = false;
  tipo;
  idMateria = null;
  idRol;
  
  
  constructor(
    private _usuarioService:UsuarioService,
    private _avisosService: AvisosService,
    private _sanitizer: DomSanitizer,
    private _materia: MateriaService,
    private route: ActivatedRoute,
  ){
    this.title= "Mis Avisos";
    this._usuarioService.pushBreadcum(this.title,"",1);
    this.tipo = this.route.snapshot.paramMap.get('id'); 
    if(this.tipo == 2){
      this.idMateria = this._materia.getSelectedMateria().materia_id
    }

    this.idRol = this._usuarioService.getIdentity().rol_id;
   }

  ngOnInit() {
    
    this.consultaAvisos(1);
  }


  consultaAvisos(nuevo){
    this.nuevo = nuevo;
    this.cargandoAvisos = true;
    this._avisosService.consulta(this.nuevo,this.idMateria,this.idRol).subscribe(
      response =>{
          if (response && response['status']){            
            let avisos = response['avisos'];
            avisos.forEach(function(_aviso){
              _aviso.visto = parseInt(_aviso.visto);
              _aviso.mensaje_html = this.htmlProperty(_aviso.mensaje)
              _aviso.fecha_inicio = _aviso.fecha_inicio ? new Date(_aviso.fecha_inicio*1000) : null;
              _aviso.fecha_fin =  _aviso.fecha_fin ? new Date(_aviso.fecha_fin*1000) : null;
            }.bind(this));

            this.avisos = avisos;
            this.cargandoAvisos = false;
            
          }else{
            this.avisos = null;
            this.cargandoAvisos = false;
          }
      },error =>{
        console.log(<any>error)
    });
  }

  htmlProperty(html) : SafeHtml {
    
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }


 marcarAviso(aviso,index) {
    if(aviso.visto == 1){
      aviso.visto = 0;
    }
    else if(aviso.visto == 0){
      aviso.visto = 1;
      this._avisosService.cambiaAvisoEstatus(aviso.aviso_id);
    }
    this._avisosService.marcarAvisos(aviso.aviso_id,aviso.tipo,aviso.visto).subscribe(response => {
      if (response && response['status']){          
        this.avisos[index] = aviso.visto;
        alertify.success(response['msg']).dismissOthers();
        }
    }, error => {
        console.log(<any>error);
    });        
  }
}