import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { RolService } from '../services/rol.service';
import { CatalogoService } from 'src/app/services/catalogo.service';

declare var alertify;

@Component({
  selector: 'app-edita-privilegios',
  templateUrl: './edita-privilegios.component.html',
  styleUrls: ['./edita-privilegios.component.scss']
})
export class EditaPrivilegiosComponent implements OnInit {
  title: string;
  jwt: string;
  id_area;
  nombreRol: string;
  rol;
  privilegioTotal;
  privilegioRol;
  estado;
  mensaje;
  muestraEstatus;
  tipoAdmin;


  constructor(
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _rolService: RolService,
    private _catalogoService: CatalogoService

    

  ){

    this.title = "Edita privilegios";
    this._usuarioService.pushBreadcum(this.title,"",2);   


   }

  ngOnInit(

  ){
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin =1;;
    this.id_area = this.route.snapshot.paramMap.get('id');
    // this.nombreRol = this.route.snapshot.paramMap.get('rol');
 
       this._catalogoService.consultaPrivilegios( this.jwt, this.muestraEstatus).subscribe(
         response =>{
           //console.log(response)    
           if(response && response['status']){
             this.privilegioTotal = response['privilegios']

             this._rolService.consultaPrivilegios(this.id_area).subscribe(
              response =>{  
                if(response && response['status']){
                  this.privilegioRol = response['privilegios']
                  this.consultaPrivilegios(this.privilegioTotal, this.privilegioRol)                                 
                }
              },error =>{
                console.log(<any>error)
              });
 
           }
         },error =>{
           console.log(<any>error)
         });
         
  }

  consultaPrivilegios(privilegioTotal, privilegioRol){
    console.log(privilegioTotal);
    console.log(privilegioRol);
    privilegioTotal.forEach(privilegioT => {
      privilegioT.status = 0
      privilegioRol.forEach(privilegioR => {
        
        if(privilegioR.privilegio_id == privilegioT.privilegio_id){
          privilegioT.status = 1; 
        }
        
        privilegioT.sub_privilegios.forEach(subPrivilegioT => {  
          privilegioR.sub_privilegios.forEach(subPrivilegioR => {
            if(subPrivilegioR.privilegio_id == subPrivilegioT.privilegio_id){
              subPrivilegioT.status = 1
              
            }
            
          });
        });
        
      });      

    
    });
    console.log(privilegioTotal)
    
  }

  cambiarCheckbox(i){
    this.privilegioTotal[i].status = this.privilegioTotal[i].status === undefined ? 0 : this.privilegioTotal[i].status;
    if(this.privilegioTotal[i].status == 0 ){
      this.privilegioTotal[i].status = 1;  
      }else{
        this.privilegioTotal[i].status = 0;
      }
    //console.log(this.privilegioTotal[i].status); 
  }
  
  subPrivilegiosC(i , j){

    this.privilegioTotal[i].sub_privilegios[j].status = this.privilegioTotal[i].sub_privilegios[j].status === undefined ? 0 : this.privilegioTotal[i].sub_privilegios[j].status;
   if(this.privilegioTotal[i].sub_privilegios[j].status == 0){
      this.privilegioTotal[i].sub_privilegios[j].status = 1;
    }else{
      this.privilegioTotal[i].sub_privilegios[j].status = 0;

    console.log(this.privilegioTotal[i].sub_privilegios[j].status);
    }
  }

  alert(){
    let seleccionados = false;
    let id_privilegios:number[] = [];
    this.privilegioTotal.forEach(privilegioT => {
      privilegioT.status = privilegioT.status === undefined ? 0 : privilegioT.status 
      if(privilegioT.status == 1){
        seleccionados = true;
        id_privilegios.push(privilegioT.privilegio_id)                
      }
      privilegioT.sub_privilegios.forEach(subPrivilegioT => {
      subPrivilegioT.status = subPrivilegioT.status === undefined ? 0 : subPrivilegioT.status 
      if(subPrivilegioT.status == 1){
        seleccionados = true;
        id_privilegios.push(subPrivilegioT.privilegio_id)
      }
      });
    });
    if(seleccionados == false ){
          alertify.error('Debes seleccional mínimo un elemento.');
        }else{
          alertify.success('Información guardada correctamente.');          
        }

        console.log(id_privilegios)

        this._rolService.eliminarPrivilegios(this.id_area).subscribe(
          response =>{
            console.log(response)
                this._rolService.insertaPrivilegios(id_privilegios, this.id_area).subscribe(
                  response =>{
                    console.log(response)
                    
                    });
              
            
            });
      }
}