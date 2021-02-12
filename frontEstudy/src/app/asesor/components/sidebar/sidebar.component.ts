import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsuarioService } from '../../../services/usuario.service';
import { GLOBAL } from 'src/app/services/global'
import { universidad } from 'src/app/services/universidad'
import { Rol } from 'src/app/models/rol';
import { AsignaturaService } from 'src/app/administracion/asignatura/services/asignatura.service';
import { GrupoService } from 'src/app/docente/grupo/services/grupo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AsesorService } from '../../services/asesor.service';

@Component({
  selector: 'app-sidebar-asesor',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  identity;
  rol : Rol;
  jwt;
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  privilegios;
  subprivilegios; 

  urlImg: string ;
  universidad = universidad;
  url: string = GLOBAL.urlAssets;
  Asignaturas: any;
  idAsignaturaGrupo;
  privilegiosAsesor: any;
  edicion_contenido: number;
  asignaturaGrupo: any;
  grupo: any;
  FormAG: FormGroup;
  location: string;
  btnReturn: boolean = false;

  subscription: Subscription;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(
      private translate: TranslateService,
      private _usuarioService: UsuarioService,
      public router: Router,
      private _asesorService: AsesorService,
      private _asignaturaService: AsignaturaService,
      private _grupoService: GrupoService,
      private formBuilder: FormBuilder
  ) {
    if (sessionStorage.getItem('tmp_jwt')) this.btnReturn = true;
    this.jwt = this._usuarioService.getJWT();
    this.identity = this._usuarioService.getIdentity();          
    this.rol = this._usuarioService.getRol();
    this.privilegios = this._usuarioService.getPrivilege();    

    this.subscription = this.router.events.subscribe(val => {        
        if (
            val instanceof NavigationEnd &&
            window.innerWidth <= 992 &&
            this.isToggled()
        ) {            
            this.toggleSidebar();
        }
    });
  }

  ngOnInit() {        
    this.isActive = false;
    this.collapsed = true;
    this.showMenu = '';
    this.pushRightClass = '';     
    this.toggleCollapsed();
    this.consultaPrivilegios();
  }

  consultaPrivilegios() {
    this._asesorService.consultaPrivilegiosAsesor().subscribe(response =>{                              
      if(response && response['status']){
        this.privilegiosAsesor = response['privilegios'];
        console.log(this.privilegiosAsesor);
        
      }
      },error =>{
        console.log(<any>error)
    });
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {           
        this.showMenu = '0';
    }else {
        this.showMenu = element;
    }
  }

  toggleCollapsed() {
    // console.log(this.collapsed);
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  onLoggedout() {
      
    localStorage.removeItem('identity');
    localStorage.removeItem('jwt');
    localStorage.removeItem('privilege');
    localStorage.removeItem('selectedRol');
    localStorage.removeItem('expirationDate');
      
  }

  // consulta(id = 0) {   
  //   if (!this.Asignaturas) {                     
  //     this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(response =>{                
  //         if(response && response['status']){            
  //           this.Asignaturas = response['Asignaturas'];              
  //           this.FormAG = this.formBuilder.group({
  //             asignatura_grupo_id: ['']
  //           });            
  //           this.FormAG.get('asignatura_grupo_id').valueChanges.subscribe(value => {                             
  //             this.setAsignaturaGrupo(value);
  //             this.router.navigate(['docente/grupo/' + value + '/4']); 
  //           });            
  //           if (id == 1) {
  //             this.setAsignaturaGrupo(this.idAsignaturaGrupo);
  //           }
  //         }
  //       },error =>{
  //         console.log(<any>error)
  //     });
  //   }else {
  //     this.setAsignaturaGrupo(this.idAsignaturaGrupo);
  //   }
  //   // else {  
  //     // this.setAsignaturaGrupo(this.idAsignaturaGrupo);

  //     // if (id == 1) {
  //     //   this.FormAG.get('asignatura_grupo_id').setValue(this.idAsignaturaGrupo);
  //     //   this.setAsignaturaGrupo(this.idAsignaturaGrupo);
  //     // }else if (id == 2) {
  //     //   this.setAsignaturaGrupo(this.idAsignaturaGrupo);                
  //     // }
  //   // }
  // }
  
  // setAsignaturaGrupo(value) {    
  //   this.idAsignaturaGrupo = value; 
  //   setTimeout(() => {
  //     this.FormAG.get('asignatura_grupo_id').setValue(this.idAsignaturaGrupo? this.idAsignaturaGrupo: '', {emitEvent: false});    
  //   }, 1);
         
  //   if (!this.privilegiosAsesor) {
  //       this._grupoService.consultaPrivilegiosAsesor().subscribe(response =>{                        
  //           if(response && response['status']){
  //               this.privilegiosAsesor = response['privilegios'];
  //               if(!this.edicion_contenido){
  //                 this.privilegiosAsesor = this.privilegiosAsesor.filter(p => p.i != "1");
  //               }
  //               if (this.idAsignaturaGrupo) this.setIdAsignaturaGrupo();
  //           }else{
  //           }
  //         },error =>{
  //           console.log(<any>error)
  //       });
  //   }else {      
  //     if (this.idAsignaturaGrupo) this.setIdAsignaturaGrupo();
  //   }
  // }

  // setIdAsignaturaGrupo() {    
  //   this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(
  //     response =>{                    
  //       this.asignaturaGrupo = response['grupo'];        
  //       localStorage.setItem('selectedAsignaturaGrupo', JSON.stringify(this.asignaturaGrupo));

  //       if(!this.asignaturaGrupo.asignatura_id && !this.idAsignaturaGrupo){
  //         this.router.navigate(['/docente/authDocente']);
  //       }                            
  //       this.privilegiosAsesor.forEach(privilegio => {              
  //         if (privilegio['id'] != null) {
  //           let lastIndex = privilegio['url'].lastIndexOf('/');
  //           privilegio['url'] = privilegio['url'].substring(0, lastIndex + 1);
  //           privilegio['url'] = privilegio['url'] + this.idAsignaturaGrupo; 
  //         }
  //       });
  //     },error =>{
  //       console.log(<any>error)
  //   });
  // }

  // vistaContenido() {      
  //   if(this.edicion_contenido == 1){
  //       let nombre_modulo = 'Actividades del grupo ' +this.asignaturaGrupo.grupo
  //       this._grupoService.consultaModulos(this.idAsignaturaGrupo,nombre_modulo,this.jwt).subscribe(
  //           response =>{
  //           if(response && response['status']){
  //               let modulo = response['modulo'];                
  //               this.router.navigate(['/docente/contenido/'+modulo.modulo_id]);
  //           }
  //           },error=>{
  //               console.log(error);
  //           });
  //       }else{
  //           this.router.navigate(['/docente/contenido-asignatura/'+this.grupo.asignatura_id]);
  //       }
  // }

  // vistaAlumno(){
  //   this._grupoService.changeMenu.emit({menu: 1});
  //   // this.router.navigate(['/docente/vista-alumno/1']);
  //   this._grupoService.seleccionaMateriaDummy(this.idAsignaturaGrupo,this.jwt).then(
  //     data =>{
  //       this.router.navigate(['/materia/']);
  //     }
  //   )
  // }

  // calculoCalificacion(){
  //   this.router.navigate(['/docente/calculo/'+this.idAsignaturaGrupo+'/2'])
  // }

  // vistaAdministrador() {
  //   localStorage.removeItem('jwt');
  //   localStorage.removeItem('identity');

  //   localStorage.setItem('jwt', sessionStorage.getItem('tmp_jwt'));
  //   localStorage.setItem('identity', sessionStorage.getItem('tmp_identity'));

  //   sessionStorage.removeItem('tmp_jwt');
  //   sessionStorage.removeItem('tmp_identity');

  //   this.router.navigate(['admin/docente/consulta']);
  // }

  ngOnDestroy() {    
    this.subscription.unsubscribe();    
  }

}
