import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/administracion/pagos/services/pago.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Router } from '@angular/router';
import { InscripcionService } from '../inscripcion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var alertify;
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  
  title;
  suscripcion;
  selectedSuscripcion : any = null;
  pasoActual;
  idAspirante;
  idCarrera;
  nombreCarrera;
  planPago;
  

  constructor(
    private _pagoService: PagoService,
    private _alumnoService: AlumnoService,
    private _usuarioService: UsuarioService,
    private _inscripcionService: InscripcionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Pago en línea";

    this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);


    this._inscripcionService.consultaAspirante(this.idAspirante).subscribe(
      response =>{
        if(response && response['status']){
          this.idCarrera = response['aspirante'].carrera_id;
          this.nombreCarrera = response['aspirante'].carrera;
          this.pasoActual = response['aspirante'].paso;

          this._pagoService.consultaAlumnoInscripcion(this.idAspirante).subscribe(
            response =>{
              if(response && response['status']){
                {
                  let idSolicitudPago = response['inscripcion'][0].solicitud_pago_id;
                  this.router.navigate(['/inscripcion/realizar-pago/'+idSolicitudPago])
                }
                
              }
            },error =>{
              console.log(error)
            }
          )
      
        this._pagoService.catSuscripcion(this.idCarrera).subscribe(
          response =>{
            if(response && response['status']){
              this.suscripcion =  response['suscripcion'];
              if(this.suscripcion.length == 1){
                this.selectedSuscripcion = this.suscripcion[0];
              }
            }

          },error =>{
            console.log(error)
          }
        );

        }
      },error =>{
        console.log(error);
      }
    )



  }

  seleccionaPlan(suscripcion){
    this.selectedSuscripcion = suscripcion;
  }

  cancelaPlan(){
    this.selectedSuscripcion = null;
  }

  confirmaPlan(){
    this._alumnoService.seleccionaPlan(this.selectedSuscripcion.suscripcion_id).subscribe(
      response =>{
        if(response && response['status']){
          let idSolicitudPago = response['idSolicitudPago'];
          if(idSolicitudPago == '0'){
            this.pasoActual = 4;
          }else{
            this.router.navigate(['/inscripcion/realizar-pago/'+idSolicitudPago+'/'])
          }
          alertify.success(response['msg']);
        }
      },error => {
        console.log(error)
      }
    )
  }

}
