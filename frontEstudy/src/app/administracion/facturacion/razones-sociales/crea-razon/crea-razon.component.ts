import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { FacturacionService } from '../services/facturacion.service';
declare var alertify;

@Component({
  selector: 'app-crea-razon',
  templateUrl: './crea-razon.component.html',
  styleUrls: ['./crea-razon.component.scss']
})
export class CreaRazonComponent implements OnInit {
  title = 'Registra una razon social';
  razon: string;
  razonSocialForm: FormGroup;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  carreras: any;
  jwt: string;

  //tipoAdmin; TODO

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _catalogosService: CatalogoService,
    private _facturacionService:FacturacionService,
    private router: Router

  ) { }

  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecciona todas',
      unSelectAllText: 'Deselecciona todas',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.razonSocialForm = this.formBuilder.group({
      carrerasLigadas: ['', Validators.required],
      nombreComercial: ['', Validators.required],
      nombreLegal: ['', Validators.required],
      regimenFiscal: ['', Validators.required],
      certificado: [, Validators.required],
      keyFile: ['', Validators.required],
      password: ['', Validators.required],
      cp: [, Validators.required],
      numex: ['', Validators.required],
      calle: ['', Validators.required]
    });
    this._catalogosService.consultaCarrera(this.jwt).subscribe(
      response => {
        this._facturacionService.getCarrerasOrg().subscribe(resCarreras=>{
          console.log('resCarreras',resCarreras)
          if (response && response['status']) {
            this.carreras = response['carreras'];
            let arregloToDropdown=[];
            for (const v of this.carreras) {
              let carr = resCarreras["organizaciones"]!=undefined?resCarreras["organizaciones"].find((a:any)=>{
                    return v.carrera_id==a.carrera_id  
              }):false;
              if(!carr){
                arregloToDropdown.push({ item_id: v.carrera_id, item_text: v.carrera })
              }
              
            }
            this.dropdownList = arregloToDropdown;
  
          }
  

        })
      }, error => {
        console.log(<any>error)
      });


  }

  onFileSelect(event,type) {
    console.log('entra al file')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

     // this.razonSocialForm.get(type).setValue(file);
    }
  }
  enviarInformacion(){

    // stop here if form is invalid
    if (this.razonSocialForm.invalid) {
      Object.keys(this.razonSocialForm.controls).forEach( controlKey => {
        this.razonSocialForm.controls[controlKey].markAsTouched();
      });
      return;
    }
    const formData = new FormData();
    formData.append('keyFile', this.razonSocialForm.get('keyFile').value);
    formData.append('certificado', this.razonSocialForm.get('certificado').value);
    formData.append('nombreComercial', this.razonSocialForm.get('nombreComercial').value);
    formData.append('nombreLegal', this.razonSocialForm.get('nombreLegal').value);
    formData.append('password', this.razonSocialForm.get('password').value);
    let strCarreras='';
    for (const carrera of this.razonSocialForm.get('carrerasLigadas').value) {
        strCarreras+=carrera.item_id+"/"+carrera.item_text+"|"
    }
    formData.append('carrerasLigadas', strCarreras);
    formData.append('regimenFiscal', this.razonSocialForm.get('regimenFiscal').value);
    formData.append('numex', this.razonSocialForm.get('numex').value);
    formData.append('calle', this.razonSocialForm.get('calle').value);
    formData.append('cp', this.razonSocialForm.get('cp').value);

    
    this._facturacionService.creaOrganizacion(formData  ).subscribe(
      response =>{
          if(response && response['status']){
            this.router.navigate(['admin/facturacion/vinculacion'])
             alertify.success(response['msg'])
          }else{
            alertify.error(response['msg'])
 
          }
 
      },error =>{
        console.log(<any>error)
      });

  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  get f() { return this.razonSocialForm.controls; }

}
