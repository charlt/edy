import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensajeriaService } from '../mensajeria/services/mensajeria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bandeja-mensajes',
  templateUrl: './bandeja-mensajes.component.html',
  styleUrls: ['./bandeja-mensajes.component.scss']
})
export class BandejaMensajesComponent implements OnInit {
  title;
  ident;
  mensajes;
  idMateria;
  id_asignatura_grupo;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private modalService: NgbModal,
    private _mensajeriaService: MensajeriaService,
  ){
    this.title = "Consulta de mensajes";
    this.title = this._usuarioService.pushBreadcum(this.title,"",2)
    this.id_asignatura_grupo = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.consultaMensajes(0);
  }

  openModal(content, materia_id){
    this.idMateria = materia_id;
    this.modalService.open(content, {windowClass: 'modal-xl'});
  }

  consultaMensajes(tipo){
    this.ident = tipo;
    this._mensajeriaService.consultaBandejaMensajes( tipo).subscribe(
      response =>{
          if(response && response['status']){
            this.mensajes = response['mensajes'];
            this.mensajes.forEach(mensajes => {
              let fecha = new Date(mensajes.ultimo_mensaje * 1000);
              mensajes.ultimo_mensaje = fecha;
            });
            console.log(this.mensajes);
            
          }else{
            this.mensajes = null;
          }
    });
  }

}
