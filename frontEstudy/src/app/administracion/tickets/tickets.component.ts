import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketsService } from './servicios/tickets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify: any;

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  EstatusTickets: any;
  activeTab: number;
  Tickets: Array<any>;
  selected: any;
  ticketsForm: FormGroup;
  Respuestas: any;
  idRol: any;
  tipoAdmin;
  idEstatus: any;

  @ViewChild('tabset') tabset;

  constructor(
    private _ticketsService: TicketsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.idRol = this._usuarioService.getRol().rol_id;
    let identity = this._usuarioService.getIdentity();
    if(identity.administrador)
      this.tipoAdmin = identity.administrador.edicion;
    else
      this.tipoAdmin = 1;;
    this.conteoTickets();
  }

  conteoTickets(id = 0, tab = 0) {
    this.EstatusTickets = undefined;
    this._ticketsService.getConteoTickets().subscribe(response => {
      if (response && response['status']) {
        this.EstatusTickets = response['tickets'];         
        this.getTab('tab-' + tab);
        if (id = 1) this.modalService.dismissAll();
      }
    }, error => {
      console.log(<any>error);
    });
  }

  getTab(id) {                    
    let array = id.split('tab-');
    this.activeTab = parseInt(array[1]); 
    this.idEstatus = this.EstatusTickets[this.activeTab]['estatus_ticket_id'];      
    this._ticketsService.consultaTicket(this.idEstatus).subscribe(response => {  
      if (response && response['status']) {
        this.Tickets = response['ticket'];   
        setTimeout(() => {          
          this.tabset.select(id);
        }, 1); 
      }else {
        this.Tickets = null;
      }      
    }, error => {
      console.log(<any>error);
    });
  }

  get f() { return this.ticketsForm.controls }

  open(content, ticket) {    
    this.selected = ticket;
    this.Respuestas = undefined;
    if (!this.ticketsForm && this.idEstatus != 4) {      
      this.ticketsForm = this.formBuilder.group({
        texto: ['', Validators.required]
      });
    }else if(this.ticketsForm && this.idEstatus != 4) {
      this.ticketsForm.get('texto').setValue('');
    }  
      
    this._ticketsService.consultaRespuestas(this.selected['ticket_id']).subscribe(response => {  
      if (response && response['status']) {
        this.Respuestas = response['Respuestas'];        
      }
      this.modalService.open(content, { keyboard: false, size: 'lg', backdrop: 'static' });
    }, error => {
      console.log(<any>error);
    });
  }

  guardaRespuesta(id = 0) {
    let form = this.ticketsForm.value;
    this._ticketsService.guardarRespuesta(this.selected['ticket_id'], form).subscribe(response => {  
      if (response && response['status']) {
        if (id == 0) {
          this.conteoTickets(1, this.activeTab);
          alertify.success(response['msg']).dismissOthers();
        }
        else if (id == 1) {
          this._ticketsService.cerrarTicket(this.selected['ticket_id']).subscribe(response =>{
            if(response && response['status']){
              this.conteoTickets(1, this.activeTab);
              alertify.success(response['msg']).dismissOthers();
            }
            },error =>{
              console.log(<any>error)
          });
        }
      }
    }, error => {
      console.log(<any>error);
    });
  }

  cerrarTicket() {
    alertify.confirm('Cerrar ticket', `¿Deseas cerrar el ticket?`, function() { 
      this.guardaRespuesta(1);
    }.bind(this), 
    function() { 
      alertify.error('Cancelado').dismissOthers();
    });
  }

}
