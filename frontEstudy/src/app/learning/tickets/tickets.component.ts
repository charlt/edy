import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketsService } from 'src/app/administracion/tickets/servicios/tickets.service';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  idPersona: any;
  idSelectedTicket;
  tickets: any;
  seleccionado: any;
  public id_aviso;
  idRol: any;

  @ViewChild('content') modalTickets: NgbModalRef;

  constructor(
    private _alumnosService: AlumnoService,
    private _usuarioService: UsuarioService,
    private modalService: NgbModal,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('prevUrl')) localStorage.removeItem('prevUrl');
    localStorage.setItem('prevUrl', this._router.url);  
    this.idRol = this._usuarioService.getRol().rol_id;
    this.idPersona = this._usuarioService.getIdentity().persona_id;
    this.idSelectedTicket = this._route.snapshot.params['id'];
    this.consultaTickets();
  }

  consultaTickets(){
    this._alumnosService.consultaTicketAlumno(this.idPersona, this.idRol).subscribe(
      response =>{
          let seleccionado;
          if(response && response['status']){
            this.tickets = response['tickets'];
            this.tickets.forEach(function(_ticket) {
              _ticket.fecha_creacion = new Date((_ticket.fecha_creacion)*1000);
              if(this.idSelectedTicket && this.idSelectedTicket == _ticket.ticket_id){
                seleccionado = _ticket;
              }              
            }.bind(this));
            if(seleccionado) this.open(this.modalTickets,seleccionado);
          }
      },error =>{
        console.log(<any>error)
      });
  }

  open(content, ticket) {    
    this.seleccionado = ticket;
    this.modalService.open(content, {size: 'lg', backdrop: 'static', keyboard: false});
  }

  close(){
    this.modalService.dismissAll();
    this._alumnosService.activaConsulta.emit('1');
  }

}
