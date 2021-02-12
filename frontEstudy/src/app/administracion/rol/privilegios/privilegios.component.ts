import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RolService } from '../services/rol.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privilegios',
  templateUrl: './privilegios.component.html',
  styleUrls: ['./privilegios.component.scss']
})
export class PrivilegiosComponent implements OnInit {
  title: string;
  jwt: string;
  roles;
  id_area;
  rol;
  nombreRol: string;
  privilegio;
  sub_privilegio;


  constructor(
    private _usuarioService: UsuarioService,
    private _rolService: RolService,
    private route: ActivatedRoute,


  ){
    this.title = 'Vista de privilegios';  
    this._usuarioService.pushBreadcum(this.title,"",2);
   }



  ngOnInit(){
    this.id_area = this.route.snapshot.paramMap.get('id');
    this.consultaPrivilegios();
  }

  consultaPrivilegios(){
    this._rolService.consultaPrivilegios(this.id_area).subscribe(
      response =>{
        if(response && response['status']){
          this.privilegio = response['privilegios']
        }
      },error =>{
        console.log(<any>error)
      });
  }
}
