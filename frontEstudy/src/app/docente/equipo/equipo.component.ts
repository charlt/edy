import { Component, OnInit } from '@angular/core';

declare var alertify;

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  selectedAlumno;
  identTabla: boolean = false;
  grupo = [];
  seleccionado;

  constructor(){ }

  ngOnInit() {
  }

  alumnoSeleccionado(event){
    let bandera1 = 1;
    if(event.status){
      this.selectedAlumno = event.persona;
      if (this.grupo.length == 0) {
        this.grupo.push(this.selectedAlumno);
        alertify.success('Alumno insertado correctamente');
        console.log(this.grupo);
      }else{
        this.grupo.forEach(alumno => {
        if (alumno.curp == this.selectedAlumno.curp)
           bandera1 = 0;
        });
        if(bandera1 == 1){
          this.grupo.push(this.selectedAlumno);
          alertify.success('Alumno insertado correctamente')
          console.log(this.grupo);
        }else{
          alertify.error('Alumno ya insertado')
          console.log(this.grupo);  
        }
      }
      this.identTabla = true;
    }else{
      this.identTabla = false;
    }
  }

  radio(radio){
    this.seleccionado = radio
  }
}
