import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TicketsService } from '../../tickets/servicios/tickets.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify;

@Component({
  selector: 'app-tickets-alumno',
  templateUrl: './tickets-alumno.component.html',
  styleUrls: ['./tickets-alumno.component.scss']
})
export class TicketsAlumnoComponent implements OnInit {
  idPersona;
  tiposTicket;
  ticketForm: FormGroup;
  bandera: boolean = false;
  component: string;
  idRol: any;
  idRolPersona: number;
  plataforma: string;
  enviando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private _ticketsService: TicketsService,
    private _usuarioService: UsuarioService
  ) { }

  get f() { return this.ticketForm.controls; }

  ngOnInit() {
    this.plataforma = this.router.url.split('/')[2];
    if (this.plataforma == 'alumno') this.idRolPersona = 2;
    else if (this.plataforma == 'docente') this.idRolPersona = 3;
    else if (this.plataforma == 'aspirante') this.idRolPersona = 4;
    this.idRol = this._usuarioService.getRol().rol_id;
    this.ticketForm = this.formBuilder.group({
      mensaje: ['', Validators.required],
      // tipoTicket: ['', Validators.required],
      asunto: ['', Validators.required],
    });

    if (this.idRol == 1) {
      this.idPersona = this.route.snapshot.params['id'];
    }else if (this.idRol == 2) {
      this.idPersona = this._usuarioService.getIdentity().persona_id;
    }
    this.consultaTiposTicket();
  }

  consultaTiposTicket() {
    this._ticketsService.consultaTipoTicket().subscribe(response => {                
      if (response && response['status']) {          
        this.tiposTicket = [];
        if (this.idRol == 1) {
          let array = this.router.url.split('/'); 
          this.component = array[3];   
          if (this.component === 'ticket') {
            this.setTiposTicket(response['tickets']);
            this.ticketForm.addControl('tipoTicket', new FormControl('', Validators.required));
          }else if (this.component === 'ticket-expediente') {
            this.tiposTicket = [];
            let ticket = response['tickets'].find(t => t.tipo_ticket == 'Expediente incompleto');
            this.tiposTicket.push(ticket);
            this.ticketForm.addControl('tipoTicket', new FormControl(
              { value: ticket.tipo_ticket_id, disabled: true }, Validators.required));
          }
        }else if (this.idRol == 2) {
          this.component = 'alumno';
          this.tiposTicket = [];
          this.setTiposTicket(response['tickets']);
          this.ticketForm.addControl('tipoTicket', new FormControl('', Validators.required));
        }
        this.bandera = true;
      }
    }, error => {
      console.log(<any>error)
    });
  }

  setTiposTicket(tickets) {
    tickets.filter(t => t.rol_id == this.idRol).map(ticket => {
      this.tiposTicket.push(ticket);
    });
  }

  enviarInformacion() {
    if (this.ticketForm.invalid) {
      Object.keys(this.ticketForm.controls).forEach( controlKey => {
        this.ticketForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    this.enviando = true;
    this._ticketsService.guardaTicketCorreccion(this.ticketForm.getRawValue(), this.idPersona, this.idRol, this.idRolPersona).subscribe(
      response => {        
        if (response && response['status']){
          alertify.success(response['msg']);
          if (this.component === 'ticket') this.router.navigate(['/admin/'+this.plataforma+'/consulta-ticket/'+this.idPersona]);
          else if (this.component === 'ticket-expediente') this.router.navigate(['/admin/'+this.plataforma+'/expediente/'+this.idPersona]);
          else if (this.component === 'alumno') {
            if (localStorage.getItem('prevUrl')) this.router.navigate([localStorage.getItem('prevUrl')]);
            else this.router.navigate(['/learning/home']);
          }
        }else{
          alertify.error(response['msg'])
        }
      }, error => {
        console.log(<any>error)
      });
  }

}
