import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AsignaturaService } from '../../../../asignatura/services/asignatura.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ModuloService } from 'src/app/administracion/carga-actividades/services/modulo.service';

declare var alertify;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  jwt;
  
  idAsignatura;

  title;
  tipoAdmin;
  ponderacionAsignatura = 100;
  
  //variables de Bloque
  modulos;
  totalModulosAsignatura;
  nuevoModulo = false;
  tipoConsulta;


  constructor(
    private _usuarioService: UsuarioService,
    private _asignaturaService: AsignaturaService,
    private _moduloService: ModuloService,
    private route: ActivatedRoute,
    private _router: Router
  ) { 
      

  }

  ngOnInit() {
    
      this.idAsignatura = this.route.snapshot.parent.parent.parent.parent.params['id'];
      let identity = this._usuarioService.getIdentity();
      if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;
       
      if(this._router.url.includes('/modulos/')){
        this.tipoConsulta = 1;
        this.title = 'Bloques en asignatura';
      }else if(this._router.url.includes('/modulosGrupo/')){
        this.tipoConsulta = 2;
        this.title = 'Bloques en Grupo';
      }else if(this._router.url.includes('/modulosAsignaturaGrupo/')){
        this.tipoConsulta = 3;
        this.title = 'Bloques en Grupo';
        // idAsignatura es idAsignaturaGrupo
        this.idAsignatura = this.route.snapshot.parent.parent.params['id'];
    
      }
    

      
      // this.jwt = this._usuarioService.getJWT();
      
      this.consultaModulos();      



}



cambiaConsulta(tipo){
this.tipoConsulta = tipo;
this.consultaModulos();
}

consultaModulos(){
this.totalModulosAsignatura = 0;
this._asignaturaService.consultaModulo(this.idAsignatura,this.tipoConsulta,this.jwt).subscribe(
  response =>{
    // console.log(response)
      if(response && response['status']){        
          this.ponderacionAsignatura=100;
          this.modulos = response['modulos']
          this.modulos.forEach(function(modulo){
            modulo.verActividades = false;
            if(!modulo.grupo_id)
              this.totalModulosAsignatura++;
          }.bind(this));
          
          
      }else{
          this.modulos=[];
        }
  },error =>{
    console.log(<any>error)
  });
}

dropModulo(event: CdkDragDrop<string[]>) {
let idModulo = this.modulos[event.previousIndex].modulo_id;
let nuevoOrden = event.currentIndex+1
moveItemInArray(this.modulos, event.previousIndex, event.currentIndex);

this._moduloService.orden(nuevoOrden,this.idAsignatura,idModulo,this.jwt).subscribe(
  response =>{
      if(response && response['status']){
        alertify.success(response['msg']);
      }
      else{
        alertify.success(response['msg']);
      }

  },error =>{
    console.log(<any>error)
  });


}

getmodificaModulo(event){
if(event.status){
  this.consultaModulos();
  this.nuevoModulo = false;
}
}

eliminaModulo(id,index){

alertify.confirm('¿Deseas eliminar el Bloque con todas sus actividades?',
function(){
  this._moduloService.elimina(id,this.jwt).subscribe(
    response =>{
        if(response && response['status']){
          this.modulos.splice(index,1);
          alertify.success(response['msg']);
        }
        else{
          alertify.success(response['msg']);
        }

    },error =>{
      console.log(<any>error)
    });
}.bind(this),
function(){
  alertify.error('Cancel');
});
    
}  


consulta_actividad(idModulo){  

//this._router.navigate(['actividades/'+idModulo]);
this._router.navigate(['./actividades/'+idModulo], { relativeTo: this.route.parent.parent });

}





}
