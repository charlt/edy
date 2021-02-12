import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../services/alumno.service';
import { TicketsService } from '../../tickets/servicios/tickets.service';

declare var alertify: any;

@Component({
  selector: 'app-consulta-tickets-alumno',
  templateUrl: './consulta-tickets-alumno.component.html',
  styleUrls: ['./consulta-tickets-alumno.component.scss']
})
export class ConsultaTicketsAlumnoComponent implements OnInit {
  title;
  idPersona;
  tickets;

  constructor(
    private route: ActivatedRoute,
    private _alumnosService: AlumnoService,
    private _ticketService: TicketsService
  ) { }

  ngOnInit() {
    this.idPersona = this.route.snapshot.params['id'];
    this.consultaTickets();
  }

  consultaTickets(){
    this._alumnosService.consultaTicketAlumno(this.idPersona, 2).subscribe(
      response =>{
          if(response && response['status']){
            this.tickets = response['tickets'];
            this.tickets.forEach(_ticket => {
              _ticket.fecha_creacion = new Date((_ticket.fecha_creacion)*1000);
            });                        
          }
      },error =>{
        console.log(<any>error)
      });
  }

  eliminaTicket(ticket, index) {    
    alertify.confirm('Eliminar ticket', `¿Deseas eliminar el ticket con asunto: 
      ${ticket.asunto_ticket}?`, function(){
      this._ticketService.eliminarTicket(ticket.ticket_id).subscribe(
        response =>{
            if(response && response['status']){
              this.tickets.splice(index, 1);
              if (this.tickets.length == 0) this.tickets = undefined;
              alertify.success(response['msg']).dismissOthers();
            }else {
              alertify.error(response['msg']).dismissOthers();
            }
        },error =>{
          console.log(<any>error)
      });
    }.bind(this),
    function(){
        alertify.error('Cancelado');
    }).set('labels', {ok:'Sí', cancel:'No'});

  }

}
