import { Component, OnInit, Input } from '@angular/core';
import { TicketsService } from 'src/app/administracion/tickets/servicios/tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlumnoService } from 'src/app/administracion/alumno/services/alumno.service';

declare var alertify: any;

@Component({
  selector: 'app-tickets-component',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() idTicket: any;
  Respuestas: any;
  Ticket: any;
  ticketsForm: FormGroup
  responder = 0;
  idRol: any;

  constructor(
    private _ticketsService: TicketsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _usuarioService: UsuarioService,
    private _alumnoService: AlumnoService
  ) { }

  ngOnInit() {
    this.ticketsForm = this.formBuilder.group({
      texto: ['', Validators.required]
    });
    this.idRol = this._usuarioService.getRol().rol_id;
    if (this.route.snapshot.paramMap.get('id_ticket')) {
      this.idTicket = this.route.snapshot.paramMap.get('id_ticket'); 
    }
    this._ticketsService.consultaPorTicket(this.idTicket).subscribe(response => {       
      if (response && response['status']) {  
        this.Ticket = response['ticket'][0]; 
        if(this.Ticket.estatus_ticket_id != "5" || this.Ticket.estatus_ticket_id != "4")
          this.responder = 1;
        this._ticketsService.consultaRespuestas(this.idTicket).subscribe(response => { 
          if (response && response['status']) {
            this.Respuestas = response['Respuestas'];            
          }
        }, error => {
          console.log(<any>error);
        });

        if(this.idRol != 1){
          this.ticketVisto(this.idTicket);
        }
      }
    }, error => {
      console.log(<any>error);
    }); 
  }

  guardaRespuesta() {
    let form = this.ticketsForm.value;
    this._ticketsService.guardarRespuesta(this.idTicket, form).subscribe(response => {  
      if (response && response['status']) {
        this.modalService.dismissAll();
        alertify.success(response['msg']).dismissOthers();
        this._alumnoService.activaConsulta.emit('1');
        this.ticketVisto(this.idTicket);
      }
    }, error => {
      console.log(<any>error);
    });
  }

  ticketVisto(id_ticket){
    this._ticketsService.ticketVisto(id_ticket).subscribe(response => {            
      if (response && response['status']) {
        }
    }, error => {
        console.log(<any>error);
    });

  }

       
   
}
