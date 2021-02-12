import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CicloService } from '../services/ciclo.service';

@Component({
  selector: 'app-transferir-ciclo',
  templateUrl: './transferir-ciclo.component.html',
  styleUrls: ['./transferir-ciclo.component.scss']
})
export class TransferirCicloComponent implements OnInit {
  idCiclo;
  ciclos;
  transferForm: FormGroup;

  constructor(
    private _catalogoService: CatalogoService,
    private _cicloService: CicloService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }
  get f() { return this.transferForm.controls; }


  ngOnInit(){
    this.idCiclo = this.route.snapshot.paramMap.get('id');
    this.consulta();
    this.transferForm = this.formBuilder.group({
       ciclo: ['', Validators.required],  
       numMaterias: ['', Validators.required],
       nuevoCiclo: [false],
       docGrupo: [false],
       reprobados: [false],
       recursadores: [false],
     });
  }
    consulta(){
      let ciclosPerm = [];
      this._catalogoService.consultaCiclo().subscribe(
        response => {
          console.log(response)
          if (response && response['status']) {
            this.ciclos = response['ciclo'];
            this.ciclos.forEach(_ciclo => {
              if (_ciclo.ciclo_id != this.idCiclo && _ciclo.ciclo_estatus_id == 1) {
                ciclosPerm.push(_ciclo);
              }
            });
            this.ciclos = ciclosPerm;
          }
        }, error => {
          console.log(<any>error)
        });
    }

    cambiaValid(){
      if (this.transferForm.get('nuevoCiclo').value) {
        this.transferForm.controls.ciclo.setValidators(Validators["null"])
        this.transferForm.controls.ciclo.updateValueAndValidity();
      }
    }

    enviarInformacion(){
      if (this.transferForm.invalid) {
        Object.keys(this.transferForm.controls).forEach(controlKey => {
          this.transferForm.controls[controlKey].markAsTouched();
        });
        return;
      }
      this._cicloService.aperuraCiclo(this.transferForm, this.idCiclo).subscribe(
        response => {
          console.log(response)
          if (response && response['status']) {

          }
        }, error => {
          console.log(<any>error)
        });
    }

}
