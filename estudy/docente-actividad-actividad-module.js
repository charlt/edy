(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-actividad-actividad-module"],{

/***/ "./src/app/docente/actividad/actividad-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/docente/actividad/actividad-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActividadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadRoutingModule", function() { return ActividadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actividad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actividad.component */ "./src/app/docente/actividad/actividad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _actividad_component__WEBPACK_IMPORTED_MODULE_2__["ActividadDocenteComponent"]
    }
];
var ActividadRoutingModule = /** @class */ (function () {
    function ActividadRoutingModule() {
    }
    ActividadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActividadRoutingModule);
    return ActividadRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/actividad/actividad.component.html":
/*!************************************************************!*\
  !*** ./src/app/docente/actividad/actividad.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bandera\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <h2>{{actividad.actividad_nombre}} | {{actividad.tipo_actividad_nombre}}</h2>\r\n      <p *ngIf=\"fechaActividad && fechaActividad.estatus_actividad_id != 1\"> Actividad enviada el  <b>{{fechaActividad.fecha_actividad | date: 'dd/MM/yy (hh:mm:ss)'}}</b></p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"pendientes.length > 0\">\r\n  <div class=\"col-6\">\r\n    <button class=\"btn btn-info\" (click)=\"cambiaActividad(0)\"><i class=\"fa fa-arrow-left fa-lg\" aria-hidden=\"true\"></i> Anterior pendiente</button>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <button class=\"btn btn-info pull-right\" (click)=\"cambiaActividad(1)\">Siguiente pendiente <i class=\"fa fa-arrow-right fa-lg\" aria-hidden=\"true\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row my-3\">\r\n  <div class=\"col-md-6\">\r\n      <app-encabezado-persona *ngIf=\"idAlumno !== undefined\" [idPersona]=\"idAlumno\" [idRol]=\"2\"></app-encabezado-persona>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    \r\n      <div *ngIf=\"this.actividad.tipo_actividad_id != '5'\" class=\"btn-group btn-group-sm pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-secondary\"  (click)=\"openModalCalculadora(contentModalCP)\">\r\n              <h4><i class=\" fa fa-calculator\"></i></h4>\r\n              <p><small>{{'_calculadoraPromedios' | translate}}</small></p>\r\n            </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"actividad.metodo_resolver_id == 2\" (click)=\"openModalRetro(contentModalEquipo)\">\r\n            <h4><i class=\"fa fa-users\"></i></h4>\r\n            <p><small>{{'_equipo' | translate}}</small></p>\r\n          </button>\r\n          <div *ngIf=\"!retroalimentacion\">\r\n          <button style=\"border-right-color:rgb(177, 176, 176);\" type=\"button\" class=\"btn btn-secondary\"  *ngIf=\"fechaActividad\" (click)=\"openModalRetro(contentModalRetro); retroPendiente()\">\r\n            <h4><i class=\" fa fa-exchange\"></i></h4>\r\n            <p><small>{{'_mensajesRetro' | translate}}</small></p>\r\n          </button>\r\n          </div>\r\n          <div *ngIf=\"retroalimentacion >= 1\">\r\n            <button style=\"border-right-color:\t#5cb85c;\" type=\"button\" class=\"btn btn-success\" *ngIf=\"fechaActividad\" (click)=\"openModalRetro(contentModalRetro)\">\r\n              <h4><i class=\" fa fa-exchange\"></i></h4>\r\n              <p><small>{{'_mensajesRetro' | translate}}</small></p>\r\n            </button>\r\n          </div>\r\n          <a style=\"border-left-color: rgb(177, 176, 176);\" class=\"btn btn-secondary\" [routerLink]=\"['/docente/notas/'+idMateria+'/'+idActividad]\">\r\n            <h4><i class=\" fa fa-sticky-note-o\" ></i></h4>\r\n            <p ><small>{{'_nota' | translate}}</small></p>\r\n          </a>\r\n    \r\n        </div>\r\n  </div>\r\n</div>\r\n<div class=\"row justify-content-md-center\">\r\n  <div  class=\"col-4 sticky\"  cdkDrag *ngIf=\"fechaActividad\">\r\n      <h4 style=\"cursor: move\"></h4>\r\n    <div class=\"col-12\" *ngIf=\"actividad.tipo_actividad_id != 3\">\r\n\r\n\r\n\r\n\r\n\r\n      <h5 class=\"text-center p-3\" *ngIf=\"fechaActividad.estatus_actividad_id==1 && !calificacionBorrador\">Esta actividad permanece en borrador</h5>\r\n      <h5 class=\"text-center p-3\" *ngIf=\"fechaActividad.estatus_actividad_id==5 && !calificacionBorrador\">Esta Actividad esta en corrección</h5>\r\n      <h4 class=\"text-center p-3\" *ngIf=\"(fechaActividad.estatus_actividad_id==1 || fechaActividad.estatus_actividad_id==5) && calificacionBorrador\">{{calificacionBorrador}}</h4>\r\n      <h5 class=\"text-center p-3\" *ngIf=\"fechaActividad.estatus_actividad_id==6\">Esta Actividad es inválida</h5>\r\n      <div *ngIf=\"fechaActividad.estatus_actividad_id == 1 || fechaActividad.estatus_actividad_id == 5\" class=\"col-md-10\">\r\n        <button  class=\"btn btn-success btn-sm pull-right\" type=\"button\" id=\"button-addon2\" (click)=\"guardarCalificacion()\">{{'_guardarCalificacion'| translate }}</button>\r\n      </div>\r\n      <div *ngIf=\"fechaActividad.estatus_actividad_id==1\" class=\"col-md-8\">\r\n        <button class=\"btn btn-warning btn-sm pull-right\" (click)=\"openModalCorreccion(contentModalC)\">{{'pedirCorreccion' | translate}}</button> \r\n      </div>\r\n\r\n      <div class=\"col-md-12 text-center\" *ngIf=\"fechaActividad.estatus_actividad_id == 2 || fechaActividad.estatus_actividad_id == 4  ||  fechaActividad.estatus_actividad_id == 9 || fechaActividad.estatus_actividad_id == 10\">\r\n          <label><b>{{'calificacionActividad' | translate}}</b></label>\r\n          <h4 *ngIf=\"fechaActividad.calificacion\">{{fechaActividad.calificacion}}</h4>\r\n          <button class=\"btn btn-primary mb-2\" *ngIf=\"(fechaActividad.estatus_actividad_id == 4 ||  fechaActividad.estatus_actividad_id == 9 || fechaActividad.estatus_actividad_id == 10)\r\n            && idSituacionAsignaturaGrupo != 4\" (click)=\"reevaluarCalificacion()\">{{ '_reevaluarCalificacion' | translate}}</button>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"col-md-12 text-center\" *ngIf=\"fechaActividad.estatus_actividad_id == 3\">\r\n            <h4 *ngIf=\"fechaActividad.calificacion\">{{fechaActividad.calificacion}}</h4>\r\n            <h4 *ngIf=\"!fechaActividad.calificacion && calificacionBorrador\">{{calificacionBorrador}}</h4>\r\n\r\n\r\n\r\n\r\n\r\n            <p *ngIf=\"!fechaActividad.calificacion && !calificacionBorrador && pasoPortafolio != 1\">{{'_sinCalificar' | translate}}</p>\r\n\r\n            <button *ngIf=\"fechaActividad.estatus_actividad_id != 2 && idSituacionAsignaturaGrupo != 4\" \r\n              class=\"btn btn-success btn-lg my-3 btn-block\" type=\"button\" id=\"button-addon2\" (click)=\"guardarCalificacion()\">\r\n              <span *ngIf=\"actividad.tipo_calificacion == 2\">{{'_calificarRubrica'| translate }}</span>\r\n              <span *ngIf=\"actividad.tipo_calificacion != 2\">{{'_guardarCalificacion'| translate }}</span>\r\n            </button>\r\n\r\n\r\n\r\n\r\n\r\n            <button *ngIf=\"fechaActividad.estatus_actividad_id != 2 && fechaActividad.estatus_actividad_id != 4 \r\n              && idSituacionAsignaturaGrupo != 4\" class=\"btn btn-warning btn-sm\" (click)=\"openModalCorreccion(contentModalC)\">{{'pedirCorreccion' | translate}}</button> \r\n            <button *ngIf=\"fechaActividad.estatus_actividad_id != 2 && fechaActividad.estatus_actividad_id != 4 && actividad.tipo_actividad_id != 3\r\n              && idSituacionAsignaturaGrupo != 4\" class=\"btn btn-danger btn-sm\" (click)=\"openModalInvalido(contentModalI)\">{{'invalidarActividad' | translate}}</button>\r\n      </div> \r\n\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"actividad.tipo_actividad_id == 3\">\r\n      <h5 class=\"text-center p-3\" *ngIf=\"fechaActividad.estatus_actividad_id==1\">Esta actividad permanece en borrador</h5>\r\n      <h5 class=\"text-center p-3\" *ngIf=\"fechaActividad.estatus_actividad_id==7\">Este portafolio fue aprobado correctamente</h5>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\" text-center\">          \r\n          <label *ngIf=\"fechaActividad.estatus_actividad_id == 4 || (fechaActividad.estatus_actividad_id == 3 && pasoPortafolio == 3)\"><b>{{'calificacionPortafolio' | translate}}</b></label>\r\n          <select *ngIf=\"fechaActividad.estatus_actividad_id == 3 && pasoPortafolio == 3\" class=\"form-control\"  [(ngModel)]=\"calificacionPortafolioBorrador\" >\r\n            <option value=\"\" >Selecciona</option>\r\n            <option *ngFor=\"let metrica of metricaCalif; let i = index\" value=\"{{metrica.valor}}\">{{metrica.texto}}</option>\r\n            <!-- <option value=\"0.00\">0.0</option>\r\n            <option value=\"0.50\">5.0</option>\r\n            <option value=\"0.60\">6.0</option>\r\n            <option value=\"0.65\">6.5</option>\r\n            <option value=\"0.70\">7.0</option>\r\n            <option value=\"0.75\">7.5</option>\r\n            <option value=\"0.80\">8.0</option>\r\n            <option value=\"0.85\">8.5</option>\r\n            <option value=\"0.9\">9.0</option>\r\n            <option value=\"0.95\">9.5</option>\r\n            <option value=\"1.00\">10.0</option> -->\r\n          </select>\r\n          <h4 *ngIf=\"fechaActividad.estatus_actividad_id == 4\">{{fechaActividad.calificacion}}</h4>\r\n          <button *ngIf=\"fechaActividad.estatus_actividad_id == 3 && pasoPortafolio == 1\" class=\"btn btn-success btn-lg my-3\" type=\"button\" id=\"button-addon2\" (click)=\"aprobarPortafolio()\">{{'_aprobarPortafolio'| translate }}</button><br>\r\n          <button *ngIf=\"fechaActividad.estatus_actividad_id == 3 && pasoPortafolio == 3\" class=\"btn btn-success btn-lg my-3\" type=\"button\" id=\"button-addon2\" (click)=\"guardarCalificacionPortafolio()\">{{'_guardarCalificacion'| translate }}</button><br>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div  class=\"row justify-content-md-center\" *ngIf=\"!fechaActividad\">\r\n    <div  class=\"col-12 text-center\">\r\n        <h4>El alumno aún no ha comenzado la actividad</h4>\r\n          <button class=\"btn btn-warning\" (click)=\"openModalCorreccion(contentModalC)\">{{'pedirCorreccion' | translate}}</button> \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n  <!-- <div class=\"row justify-content-md-center\" [hidden]=\"fechaActividad.estatus_actividad_id==5\">\r\n    <div class=\"col-md-4\">\r\n             <div class=\"row text-center\">\r\n          <div *ngIf=\"fechaActividad && fechaActividad.estatus_actividad_id != 1 \" class=\"col \">\r\n            <label><b>{{'calificacionActividad' | translate}}</b></label>\r\n            <h4 *ngIf=\" fechaActividad.calificacion\">{{fechaActividad.calificacion}}</h4>\r\n            <p *ngIf=\"!fechaActividad.calificacion\">{{'_sinCalificar' | translate}}</p>\r\n            <button *ngIf=\"fechaActividad.estatus_actividad_id != 2\" class=\"btn btn-success btn-lg my-3\" type=\"button\" id=\"button-addon2\">{{'_guardarCalificacion'| translate }}</button><br>\r\n            <button *ngIf=\"fechaActividad.estatus_actividad_id != 2\" class=\"btn btn-outline-danger btn-sm\">{{'pedirCorreccion' | translate}}</button>\r\n          </div>\r\n          \r\n  \r\n        </div>\r\n    </div>      \r\n  </div> -->\r\n  <div class=\"row\">\r\n      <div *ngIf=\"fechaActividad\" class=\"col-12\">\r\n        <div class=\"container\">\r\n          <div class=\"form-check form-check-inline mb-3\">\r\n            <input (change)=\"mostrar($event)\" class=\"form-check-input\" type=\"checkbox\" id=\"mostrar_instrucciones\" value=\"\">\r\n            <label class=\"form-check-label\" for=\"mostrar_instrucciones\">Mostrar instrucciones</label>\r\n          </div>\r\n\r\n          <app-contenido *ngIf=\"mostrarInstruccion\" [actividad]=\"actividad\"></app-contenido>\r\n\r\n          <app-actividad \r\n            *ngIf=\"finalizaCarga && actividad.tipo_actividad_id == 2 || finalizaCarga && actividad.tipo_actividad_id == 4\" \r\n            (actividadEnviada)=\"refrescaHeader($event)\"\r\n            [actividad]=\"actividad\" [fechaActividad]=\"fechaActividad\" [edicion]=\"0\" [idAlumno]=\"idAlumno\"></app-actividad>\r\n\r\n          <portafolio-evidencias *ngIf=\"finalizaCarga && actividad.tipo_actividad_id == 3\"  \r\n            [idActividad]=\"actividad.actividad_id\" \r\n            [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\" \r\n            [edicion]=\"0\" [fechaActividad]=\"fechaActividad\"\r\n            (RespuestasAlumno)=\"getRespuestasAlumno($event)\"></portafolio-evidencias>          \r\n        </div>\r\n      </div>\r\n\r\n  <ng-template #contentModalRetro let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n              <div class=\"col\">\r\n                  <retroalimentacion *ngIf=\"verRetro\"  [idActividad]=\"actividad.actividad_id\" [idMateria]=\"idMateria\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\"></retroalimentacion>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n      </div>\r\n  </ng-template>\r\n\r\n  \r\n\r\n<ng-template #contentModalC let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4>Solicitud de corrección</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <app-correccion [tipo]=\"5\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\" (correccionSuccess)=\"correccionCorrecta($event);c('Close click')\"></app-correccion>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentModalI let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4>Solicitud de Invalidacion</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <app-correccion [tipo]=\"6\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\" (invalidacionSuccess)=\"invalidacionCorrecta($event);c('Close click')\"></app-correccion>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #contentModalCP let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4>Calculadora de Promedios</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <app-calculadora-promedios *ngIf=\"verCalculadora\" [idMateria]=\"idMateria\"></app-calculadora-promedios>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n    </div>\r\n</ng-template>\r\n<ng-template #contentModalEquipo let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4>Equipos</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-equipo></app-equipo>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n<ng-template #contentModalRubrica let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4>Calificar por rúbrica</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-rubrica [idRubrica]=\"actividad.rubrica_id\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\"  (setTotal)=\"porcentajeRubrica($event)\"></app-rubrica>  \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n</div>\r\n<!--Scroll to top-->\r\n<button [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"scrollToTop()\" class=\"buttons scroll-to-top\">\r\n    <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\r\n</button>\r\n\r\n</div>\r\n\r\n     \r\n\r\n\r\n\r\n     \r\n"

/***/ }),

/***/ "./src/app/docente/actividad/actividad.component.scss":
/*!************************************************************!*\
  !*** ./src/app/docente/actividad/actividad.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky {\n  align-content: center;\n  padding: 10px 0px;\n  background: rgba(183, 239, 243, 0.8);\n  margin-top: 20px;\n  cursor: move; }\n\n@media (max-width: 768px) {\n  .sticky {\n    position: relative;\n    background: #ffffff; } }\n\n.buttons {\n  background: rgba(149, 151, 151, 0.938);\n  color: white;\n  padding: 20px;\n  border: none;\n  cursor: pointer;\n  cursor: hand;\n  border-radius: 5px; }\n\n.scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out; }\n\n.show-scroll {\n  opacity: 0.7;\n  transition: all .2s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9hY3RpdmlkYWQvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcZG9jZW50ZVxcYWN0aXZpZGFkXFxhY3RpdmlkYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFFSSxzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLHFDQUFvQztFQUVwQyxpQkFBZ0I7RUFDaEIsYUFBWSxFQUViOztBQUNEO0VBQ0U7SUFDRSxtQkFBa0I7SUFDbEIsb0JBQW1CLEVBQ3BCLEVBQUE7O0FBR0g7RUFDRSx1Q0FBc0M7RUFDdEMsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osZ0JBQWM7RUFBRSxhQUFZO0VBQzVCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVO0VBQ1YsZ0NBQStCLEVBQ2xDOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGdDQUErQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvYWN0aXZpZGFkL2FjdGl2aWRhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBkaXZ7XHJcbi8vICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuLy8gfVxyXG5cclxuLnN0aWNreSB7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgzLCAyMzksIDI0MywgMC44KTtcclxuICAgIC8vIHotaW5kZXg6IDEwMzA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgXHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnN0aWNreSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDE1MSwgMTUxLCAwLjkzOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7IGN1cnNvcjogaGFuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbC10by10b3Age1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93LXNjcm9sbCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/docente/actividad/actividad.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/docente/actividad/actividad.component.ts ***!
  \**********************************************************/
/*! exports provided: ActividadDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadDocenteComponent", function() { return ActividadDocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/materia/actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var _frontEstudy_src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontEstudy/src/app/models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var src_app_models_controlEscolar_trAlumno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/controlEscolar/trAlumno */ "./src/app/models/controlEscolar/trAlumno.ts");
/* harmony import */ var src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/learning/trActividad */ "./src/app/models/learning/trActividad.ts");
/* harmony import */ var src_app_models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/learning/trMateriaFechaActividad */ "./src/app/models/learning/trMateriaFechaActividad.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var src_app_materia_actividad_services_portafolio_evidencias_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/materia/actividad/services/portafolio-evidencias.service */ "./src/app/materia/actividad/services/portafolio-evidencias.service.ts");
/* harmony import */ var _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/metricaCalificacion */ "./src/app/services/metricaCalificacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ActividadDocenteComponent = /** @class */ (function () {
    function ActividadDocenteComponent(_usuarioService, _actividadService, _materiaService, route, router, modalService, _portafolioService) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this._materiaService = _materiaService;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this._portafolioService = _portafolioService;
        this.alumno = new src_app_models_controlEscolar_trAlumno__WEBPACK_IMPORTED_MODULE_5__["Alumno"]();
        this.actividad = new src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_6__["TrActividad"]();
        this.fechaActividad = new src_app_models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_7__["TrMateriaFechaActividad"]();
        this.calificacionBorrador = null;
        this.finalizaCarga = false;
        this.verRetro = false;
        this.verNota = false;
        this.verCalculadora = false;
        this.simpleEditor = _frontEstudy_src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__["simpleEditor"];
        this.pasoPortafolio = null;
        this.calificacionPortafolioBorrador = "";
        this.bandera = true;
        this.mostrarInstruccion = false;
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.pendientes = [];
        this.title = 'Consulta de actividad';
        this.idActividad = this.route.snapshot.paramMap.get('id1');
        this.idMateria = this.route.snapshot.paramMap.get('id2');
        // this.id_Alumno= this.route.snapshot.paramMap.get('id3');
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ActividadDocenteComponent.prototype.onWindowScroll = function () {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    };
    ActividadDocenteComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    };
    ActividadDocenteComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('situacionAsignaturaGrupo'))
            this.idSituacionAsignaturaGrupo = sessionStorage.getItem('situacionAsignaturaGrupo');
        this.jwt = this._usuarioService.getJWT();
        this.metricaCalif = _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_11__["metrica"];
        this.identModal = localStorage.getItem('identModal');
        localStorage.removeItem('identModal');
        /*window.onscroll = function() {
          if (window.pageYOffset > sticky) {
    
            // console.log(sticky,',',window.pageYOffset)
            calif.classList.add("sticky");
          } else {
            calif.classList.remove("sticky");
          }
        };*/
        //var calif = document.getElementById("scroll");
        //var sticky = calif.offsetTop;
        this._actividadService.actividadCalificada.subscribe(function (response) {
            _this.obtieneCalificacion();
        });
        this.getActividad();
        this.changeURL = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                _this.idActividad = _this.route.snapshot.paramMap.get('id1');
                _this.idMateria = _this.route.snapshot.paramMap.get('id2');
                _this.identModal = localStorage.getItem('identModal');
                localStorage.removeItem('identModal');
                _this.calificacionBorrador = null;
                _this.finalizaCarga = false;
                _this.verRetro = false;
                _this.verNota = false;
                _this.verCalculadora = false;
                _this.pasoPortafolio = null;
                _this.calificacionPortafolioBorrador = "";
                _this.getActividad();
            }
        });
    };
    ActividadDocenteComponent.prototype.openLg = function () {
        this.verRetro = true;
        this.modalService.open(this.contentModalRetro, { size: 'lg', windowClass: 'modal-xl' });
        this.identModal = 0;
    };
    ActividadDocenteComponent.prototype.getActividad = function () {
        var _this = this;
        this._actividadService.consulta(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
                _this.getPendientes();
                _this.consultaAlumno();
                _this.consultaActividad();
                if (_this.actividad.tipo_actividad_id == 3) {
                    _this.consultaPortafolio();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.getPendientes = function () {
        var _this = this;
        this.pendientes = [];
        this._actividadService.consultaPendientes(this.jwt, this.idActividad, this.idMateria).subscribe(function (response) {
            if (response && response['status']) {
                if (response['pendientes'] > 0) {
                    _this.pendientes.push({ anterior: response['pendienteAnterior'] });
                    _this.pendientes.push({ siguiente: response['pendienteSiguiente'] });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.consultaActividad = function () {
        var _this = this;
        this._actividadService.consultaFechaActividadActivo(this.idActividad, this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.fechaActividad = response['fechaActividad'];
                _this.finalizaCarga = true;
                if (_this.fechaActividad.estatus_actividad_id == 3)
                    _this.obtieneCalificacion();
                _this.retroPendiente();
                if (_this.identModal)
                    _this.openLg();
            }
            else {
                _this.fechaActividad = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.consultaPortafolio = function () {
        var _this = this;
        this.pasoPortafolio = 0; //inicializa el paso del portafolio
        this._portafolioService.consultaRespuestas(this.idActividad, this.fechaActividad.materia_fecha_actividad_id, this.jwt).
            subscribe(function (response) {
            if (response && response['status']) {
                _this.portafolio = response['respuestas'];
                _this.pasoPortafolio = _this.portafolio.paso;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.consultaAlumno = function () {
        var _this = this;
        this._materiaService.consultaAlumno(this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumno = response['alumno'];
                _this.idAlumno = _this.alumno.alumno_id;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.retroPendiente = function () {
        var _this = this;
        this._actividadService.consultaRetro(this.jwt, this.fechaActividad.actividad_id, this.fechaActividad.materia_id).subscribe(function (response) {
            if (response && response['status'] == 1) {
                _this.retroalimentacion = response['numero_mensajes'];
            }
            _this.bandera = true;
        }, function (error) {
            console.log(error);
        });
    };
    ActividadDocenteComponent.prototype.obtieneCalificacion = function () {
        var _this = this;
        this._actividadService.consultaRespuestas(this.fechaActividad.materia_fecha_actividad_id, this.jwt).subscribe(function (response) {
            var respuestas, tmpCalif = 0.0;
            if (response && response['status']) {
                respuestas = response['respuestas'];
                respuestas.forEach(function (respuesta) {
                    tmpCalif += parseFloat(respuesta.calificacion);
                });
                _this.calificacionBorrador = tmpCalif.toFixed(2);
                if (_this.calificacionBorrador >= 9.98)
                    _this.calificacionBorrador = Number(10).toFixed(2);
                // if (id) {
                _this.fechaActividad.calificacion = _this.calificacionBorrador;
                // }
            }
        });
    };
    ActividadDocenteComponent.prototype.verNotas = function () {
        this.router.navigate(['/docente/notas/' + this.idActividad, this.idMateria]);
    };
    ActividadDocenteComponent.prototype.openModalRetro = function (content) {
        this.verRetro = true;
        this.retroalimentacion = null;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadDocenteComponent.prototype.openModalNotas = function (content) {
        this.verNota = true;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadDocenteComponent.prototype.openModalCalculadora = function (content) {
        this.verCalculadora = true;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadDocenteComponent.prototype.openModalCorreccion = function (content, texto) {
        // this._actividadService.correcci||onActividad(this.idMateriaFechaActividad,this.idPersona,texto,this.idRol,this.jwt).subscribe(
        //   response =>{
        //     if(response && response['status']){
        //       this.correccion;
        //     }
        //   },error =>{
        //     console.log(<any>error)
        //   });
        // this.verCorreccion = true;
        if (this.fechaActividad) {
            this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
            }, function (reason) {
            });
        }
        else {
            alertify.confirm('Reintentar actividad', '¿Deseas darle un reintento a este alumno?', function () {
                this._actividadService.correccionActividad(this.idActividad, this.idMateria).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']).dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Acción cancelada');
            });
        }
    };
    ActividadDocenteComponent.prototype.correccionCorrecta = function (event) {
        if (event) {
            this.fechaActividad.estatus_actividad_id = 5;
            this.calificacionBorrador = null;
        }
    };
    ActividadDocenteComponent.prototype.openModalInvalido = function (content, texto) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    ActividadDocenteComponent.prototype.invalidacionCorrecta = function (event) {
        if (event) {
            this.fechaActividad.estatus_actividad_id = 6;
        }
    };
    ActividadDocenteComponent.prototype.guardarCalificacion = function () {
        var idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;
        if (this.actividad.tipo_calificacion == '2') {
            this.modalService.open(this.contentModalRubrica, { size: 'lg', windowClass: 'modal-xl' });
        }
        else {
            alertify.confirm('Guardar calificación', '¿Desea guardar la calificación?', function () {
                var _this = this;
                this._actividadService.consultaFaltantes(idMateriaFecha, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this._actividadService.guardarCalificacion(idMateriaFecha, _this.jwt).subscribe(function (response) {
                            if (response && response['status']) {
                                _this.consultaActividad();
                                alertify.success("Se insertó la calificación correctamente").dismissOthers();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else {
                        _this.actividad.preguntas.forEach(function (pregunta) {
                            pregunta.incompleto = false;
                            response['actividades'].forEach(function (id_pregunta) {
                                if (pregunta.datos_pregunta_id == id_pregunta) {
                                    pregunta.incompleto = true;
                                }
                            });
                        });
                        alertify.error("Hay actividades pendientes de calificar").dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Acción cancelada');
            });
        }
    };
    ActividadDocenteComponent.prototype.guardarCalificacionPortafolio = function () {
        var idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;
        alertify.confirm('Guardar calificación', '¿Desea guardar la calificación para el portafolio?', function () {
            var _this = this;
            this._actividadService.guardarCalificacionPortafolio(idMateriaFecha, this.calificacionPortafolioBorrador, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.consultaActividad();
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Acción cancelada');
        });
    };
    ActividadDocenteComponent.prototype.aprobarPortafolio = function () {
        var idMateriaFecha = this.fechaActividad.materia_fecha_actividad_id;
        var bandera = true;
        this.respuestasAlumno.forEach(function (respuesta) {
            if (respuesta.validado == '0') {
                bandera = false;
            }
        });
        if (bandera) {
            alertify.confirm('Aprobar portafolio', '¿Desea aprobar el portafolio?', function () {
                var _this = this;
                this._actividadService.aprobarPortafolio(idMateriaFecha, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.consultaActividad();
                        alertify.success("Se aprobó el portafolio correctamente").dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Acción cancelada');
            });
        }
        else {
            alertify.error("Hay aprobaciones pendientes").dismissOthers();
        }
    };
    ActividadDocenteComponent.prototype.getRespuestasAlumno = function (evt) {
        this.respuestasAlumno = evt;
    };
    ActividadDocenteComponent.prototype.calculadoraPromedios = function () {
        console.log(this.idMateria);
    };
    ActividadDocenteComponent.prototype.reevaluarCalificacion = function () {
        alertify.confirm('Reevaluar calificación', '¿Deseas reevaluar esta calificación?', function () {
            var _this = this;
            this._actividadService.reevaluarCalificacion(this.fechaActividad.materia_fecha_actividad_id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.consultaActividad();
                    alertify.success("Acción realizada satisfactoriamente").dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    ActividadDocenteComponent.prototype.porcentajeRubrica = function (total) {
        this.modalService.dismissAll();
        this.fechaActividad.estatus_actividad_id = 4;
        this.calificacionBorrador = total;
        this.fechaActividad.calificacion = total.toString();
    };
    ActividadDocenteComponent.prototype.cambiaActividad = function (tipo) {
        var datos = null;
        if (tipo == 0) {
            datos = this.pendientes.find(function (r) { return r.anterior; });
            if (datos)
                datos = datos.anterior;
        }
        else if (tipo == 1) {
            datos = this.pendientes.find(function (r) { return r.siguiente; });
            if (datos)
                datos = datos.siguiente;
        }
        if (datos) {
            this.router.navigate(['/docente/actividad/' + datos.actividad_id + '/' + datos.materia_id]);
        }
    };
    ActividadDocenteComponent.prototype.ngOnDestroy = function () {
        this.changeURL.unsubscribe();
    };
    ActividadDocenteComponent.prototype.mostrar = function (evt) {
        this.mostrarInstruccion = evt.target.checked;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentModalRubrica'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalRef"])
    ], ActividadDocenteComponent.prototype, "contentModalRubrica", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentModalRetro'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalRef"])
    ], ActividadDocenteComponent.prototype, "contentModalRetro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ActividadDocenteComponent.prototype, "onWindowScroll", null);
    ActividadDocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actividad-docente',
            template: __webpack_require__(/*! ./actividad.component.html */ "./src/app/docente/actividad/actividad.component.html"),
            styles: [__webpack_require__(/*! ./actividad.component.scss */ "./src/app/docente/actividad/actividad.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_3__["ActividadService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_9__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_materia_actividad_services_portafolio_evidencias_service__WEBPACK_IMPORTED_MODULE_10__["PortafolioEvidenciasService"]])
    ], ActividadDocenteComponent);
    return ActividadDocenteComponent;
}());



/***/ }),

/***/ "./src/app/docente/actividad/actividad.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/docente/actividad/actividad.module.ts ***!
  \*******************************************************/
/*! exports provided: AppModule, ActividadDocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadDocenteModule", function() { return ActividadDocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actividad-routing.module */ "./src/app/docente/actividad/actividad-routing.module.ts");
/* harmony import */ var _actividad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actividad.component */ "./src/app/docente/actividad/actividad.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../retroalimentacion/retroalimentacion.module */ "./src/app/docente/retroalimentacion/retroalimentacion.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notas_notas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notas/notas.module */ "./src/app/docente/notas/notas.module.ts");
/* harmony import */ var src_app_materia_actividad_actividad_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/materia/actividad/actividad.module */ "./src/app/materia/actividad/actividad.module.ts");
/* harmony import */ var src_app_materia_actividad_portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _correccion_correccion_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../correccion/correccion.module */ "./src/app/docente/correccion/correccion.module.ts");
/* harmony import */ var _calculadora_promedios_calculadora_promedios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../calculadora-promedios/calculadora-promedios.component */ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.ts");
/* harmony import */ var _equipo_equipo_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../equipo/equipo.module */ "./src/app/docente/equipo/equipo.module.ts");
/* harmony import */ var _rubrica_rubrica_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../rubrica/rubrica.module */ "./src/app/docente/rubrica/rubrica.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_materia_actividad_contenido_contenido_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/materia/actividad/contenido/contenido.module */ "./src/app/materia/actividad/contenido/contenido.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//import { DragDropModule } from '@angular/cdk/drag-drop';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
        })
    ], AppModule);
    return AppModule;
}());

var ActividadDocenteModule = /** @class */ (function () {
    function ActividadDocenteModule() {
    }
    ActividadDocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_actividad_component__WEBPACK_IMPORTED_MODULE_3__["ActividadDocenteComponent"], _calculadora_promedios_calculadora_promedios_component__WEBPACK_IMPORTED_MODULE_13__["CalculadoraPromediosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_materia_actividad_actividad_module__WEBPACK_IMPORTED_MODULE_9__["ActividadModule"],
                _actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActividadRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_5__["RetroalimentacionModule"],
                _notas_notas_module__WEBPACK_IMPORTED_MODULE_8__["NotasModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                src_app_materia_actividad_portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_10__["PortafolioEvidenciasModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_11__["EncabezadoPersonaModule"],
                _correccion_correccion_module__WEBPACK_IMPORTED_MODULE_12__["CorreccionModule"],
                _equipo_equipo_module__WEBPACK_IMPORTED_MODULE_14__["EquipoModule"],
                _rubrica_rubrica_module__WEBPACK_IMPORTED_MODULE_15__["RubricaModule"],
                //DragDropModule,
                src_app_materia_actividad_contenido_contenido_module__WEBPACK_IMPORTED_MODULE_17__["ContenidoModule"]
            ]
        })
    ], ActividadDocenteModule);
    return ActividadDocenteModule;
}());



/***/ }),

/***/ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/docente/calculadora-promedios/calculadora-promedios.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n    <thead class=\"thead\">\r\n      <tr>\r\n        <th>\r\n          Nombre de la actividad\r\n        </th>\r\n        <th>\r\n          Ponderación\r\n        </th>\r\n        <th>\r\n          Calificación del alumno\r\n        </th>\r\n        <th>\r\n          Valor total\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let actividad of actividadesCalculadora; let i = index \">\r\n        <td>\r\n            {{actividad.actividad_nombre}}\r\n        </td>\r\n        <td>\r\n            {{actividad.ponderacion}}\r\n        </td>\r\n        <td>\r\n            <span *ngIf=\"actividad.unica != 1\">{{actividad.calificacion}}</span>\r\n            <span><input class=\"form-control\" type=\"number\" (keyup)=\"calculaPromedio(i,actividad.calificacion)\" [(ngModel)]=\"actividad.calificacion\" min=\"0\" max=\"10\"></span>\r\n        </td>\r\n        <td>\r\n            {{actividad.valor}}\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"3\">Calificación en la materia</td>\r\n        <td>{{calificacionTotalAsignatura}}</td>\r\n      </tr>\r\n    </tfoot>\r\n  </table>  "

/***/ }),

/***/ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/docente/calculadora-promedios/calculadora-promedios.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvY2FsY3VsYWRvcmEtcHJvbWVkaW9zL2NhbGN1bGFkb3JhLXByb21lZGlvcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/docente/calculadora-promedios/calculadora-promedios.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CalculadoraPromediosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculadoraPromediosComponent", function() { return CalculadoraPromediosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculadoraPromediosComponent = /** @class */ (function () {
    function CalculadoraPromediosComponent(_usuarioService, _materiaService) {
        this._usuarioService = _usuarioService;
        this._materiaService = _materiaService;
    }
    CalculadoraPromediosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._materiaService.calculadoraPromedios(this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividadesCalculadora = response['actividades'];
                _this.calculaPromedio();
            }
        }, function (error) {
            console.log(error);
        });
    };
    CalculadoraPromediosComponent.prototype.calculaPromedio = function (i, calificacion) {
        if (i === void 0) { i = null; }
        if (calificacion === void 0) { calificacion = null; }
        if (i != null) {
            this.actividadesCalculadora[i].valor = parseFloat(calificacion) * parseFloat(this.actividadesCalculadora[i].ponderacion) / 100;
        }
        var calificacionTmp = 0;
        this.actividadesCalculadora.forEach(function (actividad) {
            calificacionTmp += parseFloat(actividad.valor);
        }.bind(this));
        this.calificacionTotalAsignatura = calificacionTmp.toFixed(2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalculadoraPromediosComponent.prototype, "idMateria", void 0);
    CalculadoraPromediosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculadora-promedios',
            template: __webpack_require__(/*! ./calculadora-promedios.component.html */ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.html"),
            styles: [__webpack_require__(/*! ./calculadora-promedios.component.scss */ "./src/app/docente/calculadora-promedios/calculadora-promedios.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__["MateriaService"]])
    ], CalculadoraPromediosComponent);
    return CalculadoraPromediosComponent;
}());



/***/ }),

/***/ "./src/app/docente/equipo/equipo.component.html":
/*!******************************************************!*\
  !*** ./src/app/docente/equipo/equipo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buscador-persona (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n<div *ngIf=\"identTabla == true\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <tr>\r\n      <th>Lider de equipo</th>\r\n      <th>Nombre</th>\r\n      <th>CURP</th>\r\n    </tr>\r\n    <tr *ngFor=\"let alumno of grupo\">\r\n      <td class=\"text-center\"><div class=\"custom-control custom-radio\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"{{alumno.persona_id}}\" name=\"{{alumno.persona_id}}\"(click)=\"radio(alumno.persona_id)\" [checked]=\"seleccionado == alumno.persona_id\">\r\n            <label class=\"custom-control-label\" for=\"{{alumno.persona_id}}\"></label>\r\n          </div> \r\n      </td>\r\n      <td>{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</td>\r\n      <td>{{alumno.curp}}</td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/docente/equipo/equipo.component.scss":
/*!******************************************************!*\
  !*** ./src/app/docente/equipo/equipo.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvZXF1aXBvL2VxdWlwby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/docente/equipo/equipo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/docente/equipo/equipo.component.ts ***!
  \****************************************************/
/*! exports provided: EquipoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoComponent", function() { return EquipoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquipoComponent = /** @class */ (function () {
    function EquipoComponent() {
        this.identTabla = false;
        this.grupo = [];
    }
    EquipoComponent.prototype.ngOnInit = function () {
    };
    EquipoComponent.prototype.alumnoSeleccionado = function (event) {
        var _this = this;
        var bandera1 = 1;
        if (event.status) {
            this.selectedAlumno = event.persona;
            if (this.grupo.length == 0) {
                this.grupo.push(this.selectedAlumno);
                alertify.success('Alumno insertado correctamente');
                console.log(this.grupo);
            }
            else {
                this.grupo.forEach(function (alumno) {
                    if (alumno.curp == _this.selectedAlumno.curp)
                        bandera1 = 0;
                });
                if (bandera1 == 1) {
                    this.grupo.push(this.selectedAlumno);
                    alertify.success('Alumno insertado correctamente');
                    console.log(this.grupo);
                }
                else {
                    alertify.error('Alumno ya insertado');
                    console.log(this.grupo);
                }
            }
            this.identTabla = true;
        }
        else {
            this.identTabla = false;
        }
    };
    EquipoComponent.prototype.radio = function (radio) {
        this.seleccionado = radio;
    };
    EquipoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipo',
            template: __webpack_require__(/*! ./equipo.component.html */ "./src/app/docente/equipo/equipo.component.html"),
            styles: [__webpack_require__(/*! ./equipo.component.scss */ "./src/app/docente/equipo/equipo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipoComponent);
    return EquipoComponent;
}());



/***/ }),

/***/ "./src/app/docente/equipo/equipo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/docente/equipo/equipo.module.ts ***!
  \*************************************************/
/*! exports provided: EquipoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipoModule", function() { return EquipoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _equipo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipo.component */ "./src/app/docente/equipo/equipo.component.ts");
/* harmony import */ var _components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/buscadorPersona/buscador-persona.module */ "./src/app/components/buscadorPersona/buscador-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EquipoModule = /** @class */ (function () {
    function EquipoModule() {
    }
    EquipoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_equipo_component__WEBPACK_IMPORTED_MODULE_2__["EquipoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_3__["BuscadorPersonaModule"]
            ],
            exports: [_equipo_component__WEBPACK_IMPORTED_MODULE_2__["EquipoComponent"]]
        })
    ], EquipoModule);
    return EquipoModule;
}());



/***/ }),

/***/ "./src/app/models/controlEscolar/trAlumno.ts":
/*!***************************************************!*\
  !*** ./src/app/models/controlEscolar/trAlumno.ts ***!
  \***************************************************/
/*! exports provided: Alumno, Actividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alumno", function() { return Alumno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actividad", function() { return Actividad; });
/* harmony import */ var _persona__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../persona */ "./src/app/models/persona.ts");
/* harmony import */ var _learning_trActividad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../learning/trActividad */ "./src/app/models/learning/trActividad.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Alumno;
}(_persona__WEBPACK_IMPORTED_MODULE_0__["Persona"]));

var Actividad = /** @class */ (function (_super) {
    __extends(Actividad, _super);
    function Actividad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Actividad;
}(_learning_trActividad__WEBPACK_IMPORTED_MODULE_1__["TrActividad"]));



/***/ })

}]);
//# sourceMappingURL=docente-actividad-actividad-module.js.map