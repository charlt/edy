import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  alumnoForm:FormGroup;

  constructor(
        private formBuilder: FormBuilder
    ) { }

  ngOnInit() {

    

    this.alumnoForm = this.formBuilder.group({
      // nivelCiclo:  ['', Validators.required],  
       porcentajeBeca: ['', Validators.required],
       diasLimite: ['', Validators.required],
       tipoSuscripcion: ['', Validators.required]
     });
  }

  get f() { return this.alumnoForm.controls; }


}
