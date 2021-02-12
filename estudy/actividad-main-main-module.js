(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividad-main-main-module"],{

/***/ "./src/app/materia/actividad/main/main-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/materia/actividad/main/main-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MainActividadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainActividadRoutingModule", function() { return MainActividadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/materia/actividad/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainActividadComponent"]
    }
];
var MainActividadRoutingModule = /** @class */ (function () {
    function MainActividadRoutingModule() {
    }
    MainActividadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MainActividadRoutingModule);
    return MainActividadRoutingModule;
}());



/***/ }),

/***/ "./src/app/materia/actividad/main/main.component.html":
/*!************************************************************!*\
  !*** ./src/app/materia/actividad/main/main.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 container-actividad\">\r\n    <div class=\"row banner\">\r\n      <div class=\"col-md-2 pt-1\">\r\n        <!-- padre {{idActividadPadre}} {{actividadPadreContestada}} -->\r\n          <span *ngIf=\"!activoFM && estadoFM == 3\" class=\"badge badge-danger badge-actividad\">Fecha cierre de materia: {{materia.fecha_fin | date: \"dd/MM/yyyy hh:mm a\"}} </span> \r\n          <span *ngIf=\"!activoFM && estadoFM == 2\" class=\"badge badge-danger badge-actividad\">Fecha inicio de materia: {{materia.fecha_inicio | date: \"dd/MM/yyyy hh:mm a\"}} </span> \r\n          <span *ngIf=\"activoF && estadoFA == 1\"  class=\"badge badge-success badge-actividad\">Fecha cierre de actividad: {{actividad.fecha_fin | date: \"dd/MM/yyyy hh:mm a\"}} </span> \r\n          <span *ngIf=\"!activoF && estadoFA ==  3\" class=\"badge badge-danger badge-actividad\">Fecha de cierre de actividad: {{actividad.fecha_fin | date: \"dd/MM/yyyy hh:mm a\"}} </span> \r\n          <!-- <span *ngIf=\"vigenciaFin == 0 && fechaValidaFin\" class=\"badge badge-success badge-actividad\">Fecha de cierre: {{actividad.fecha_fin | date: \"dd/MM/yyyy\"}} </span>  -->\r\n          <span *ngIf=\"!activoF && estadoFA == 2\" class=\"badge badge-secondary  badge-actividad\">Fecha de inicio de actividad: {{actividad.fecha_inicio | date: \"dd/MM/yyyy hh:mm a\"}} </span> \r\n          <span *ngIf=\"activoF && numIntentos != 0\" [ngClass]=\"intentosRestantes == 0 ? 'badge-danger' : 'badge-success' \" class=\"badge  badge-actividad\">Intentos restantes: {{intentosRestantes}} </span>  \r\n          \r\n        </div>\r\n        <div class=\"col-md-8 pt-1\" >\r\n            <h2 class=\"text-center titulo\">{{actividad.actividad_nombre}}</h2>    \r\n        </div>\r\n        <div *ngIf=\"actividad.rubrica_id\" class=\"col-md-2 pt-1\">\r\n          <button  class=\"btn btn-primary pull-right\" (click)=\"openModalRubrica(rubrica)\">Ver rúbrica</button>\r\n        </div>\r\n        <div class=\"pt-2\">\r\n          <button *ngIf=\"actividad.tipo_actividad_id != 1 && notificacionStatus == 0\" type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"openModalRetro(content)\" >\r\n              <i class=\"fa fa-exchange\"></i>\r\n              {{'_mensajesRetro' | translate}}\r\n              <span>(0)</span>\r\n          </button>\r\n          <button *ngIf=\"actividad.tipo_actividad_id != 1 && notificacionStatus >= 1\" type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"openModalRetro(content)\" >\r\n              <i class=\"fa fa-exchange\"></i>\r\n              {{'_mensajesRetro' | translate}}\r\n              <span>({{numeroMensajes}})</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"col-12 my-0 py-0\" *ngIf=\"reloj\">\r\n          <div class=\"pull-right text-white text-right\">\r\n          <small class=\"mr-2\">Tiempo restante</small>\r\n          <div class=\"container border rounded\">\r\n            <h5 class=\"m-0 py-0\">{{horas}}: {{minutos}}: {{segundos}}</h5>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    <div class=\"row justify-content-center text-center\" >\r\n      <div class=\"col-md-4\">\r\n        <!-- ACTIVIDAD CONTESTADA (PRIORIDAD UNO-->\r\n        <div *ngIf=\"(fechaActividad.estatus_actividad_id == 2 || fechaActividad.estatus_actividad_id == 4\r\n          || fechaActividad.estatus_actividad_id == 9 || fechaActividad.estatus_actividad_id == 10)\" style=\"margin-top: -75px\" class=\" alert\" [ngClass]=\"fechaActividad.calificacion > 5.99 ? 'alert-success': 'alert-danger'\" >\r\n            <h1>{{fechaActividad.calificacion}}</h1>\r\n            <p *ngIf=\"fechaActividad.estatus_actividad_id != 9 && fechaActividad.estatus_actividad_id != 10 \">{{fechaActividad.estatus_actividad}}</p>\r\n            <span *ngIf=\"unica=='1'\"  class=\"badge\" [ngClass]=\"fechaActividad.calificacion > 5.99 ? 'badge-success': 'badge-danger'\">Calificación final de la asignatura</span>\r\n            <button *ngIf=\"actividad.tipo_calificacion == '2'\" class=\"btn btn-sm btn-success\" (click)=\"openModalRubrica(rubrica)\">Ver rúbrica</button>\r\n            <button  class=\"btn btn-sm\"\r\n            [ngClass]=\"fechaActividad.calificacion > 5.99 ? 'btn-outline-success': 'btn-outline-danger'\"\r\n              *ngIf=\"numIntentos !== null && intentosRestantes > 0 \r\n              && fechaActividad.estatus_actividad_id != 1\r\n              && actividad.tipo_actividad_id != 1 \r\n              && activoF \r\n              && (fechaActividad.estatus_actividad_id ==4 || fechaActividad.estatus_actividad_id == 2)\" (click)=\"reintentarActividad()\"> Reintentar la actividad</button>\r\n        </div>\r\n        <!-- ACTIVIDAD CON FECHA ATRASADA -->\r\n        <div *ngIf=\"(!activoF || !activoFM) && fechaActividad.estatus_actividad_id == 1\"  style=\"margin-top: -75px\"  class=\"alert alert-danger\">\r\n          <h1><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></h1>\r\n          <p *ngIf=\"!activoFM && estadoFM == 3\">La materia se cerró el día {{materia.fecha_fin | date: \"dd/MM/yyyy h:mm:ss a\"}} </p>\r\n          <p *ngIf=\"activoFM && estadoFA == 3\">\r\n            Esta actividad se cerró el día {{actividad.fecha_fin | date: \"dd/MM/yyyy\"}}\r\n            <br>\r\n             <span *ngIf=\"actividad.fecha_fin.getHours() != 0 || actividad.fecha_fin.getMinutes() !=0\" >\r\n              a las {{actividad.fecha_fin | date: \"h:mm:ss a\"}}\r\n             </span>\r\n          </p>\r\n          <p *ngIf=\"!activoFM && estadoFA == 2\">La materia se podrá visualizar el día {{actividad.fecha_inicio | date: \"dd/MM/yyyy h:mm:ss a\"}} </p>\r\n          <p *ngIf=\"activoFM && estadoFA == 2\">\r\n            Esta actividad se podrá visualizar el día {{actividad.fecha_inicio | date: \"dd/MM/yyyy\"}}\r\n            <br>\r\n            <span *ngIf=\"actividad.fecha_inicio.getHours() != 0 || actividad.fecha_inicio.getMinutes() !=0\" >\r\n             a las {{actividad.fecha_inicio | date: \"h:mm:ss a\"}}\r\n            </span>  \r\n          </p>\r\n        </div>\r\n        <!-- ACTIVIDAD BLOQUEADA POR OTRA ACTIVIDAD -->\r\n        <div *ngIf=\"idActividadPadre && !actividadPadreContestada  && fechaActividad.estatus_actividad_id == 1\"  class=\" alert alert-warning\"  style=\"margin-top: -75px\"  >   \r\n          <h1><i class=\"fa fa-exclamation-triangle\"></i></h1>\r\n          <p>Debes realizar <strong *ngIf=\"actPadre\">{{actPadre.actividad_nombre}}</strong></p>\r\n        </div>\r\n        <!-- ACTIVIDAD PARA CONTESTAR -->  \r\n          <div *ngIf=\"fechaActividad.estatus_actividad_id == 3\"  class=\" alert alert-warning\"  style=\"margin-top: -75px\"  >   \r\n                  <h1><i class=\"fa fa-pencil-square-o\"></i></h1>\r\n                  <p>{{fechaActividad.estatus_actividad}}</p>\r\n          </div>\r\n            <div *ngIf=\"fechaActividad.estatus_actividad_id == 5\"  class=\" alert alert-warning\"  style=\"margin-top: -75px\"  >   \r\n              <h1><i class=\"fa fa-exclamation-triangle\"></i></h1>\r\n              <p>{{fechaActividad.estatus_actividad}}</p>\r\n            </div>\r\n            <div *ngIf=\"fechaActividad.estatus_actividad_id == 6\"  class=\" alert alert-danger\"  style=\"margin-top: -75px\"  >   \r\n              <h1><i class=\"fa fa-times\"></i></h1>\r\n              <p>{{fechaActividad.estatus_actividad}}</p>\r\n            </div>\r\n            <div *ngIf=\"fechaActividad.estatus_actividad_id == 7\"  class=\" alert alert-success\"  style=\"margin-top: -75px\"  >   \r\n              <h1><i class=\"fa fa-file-o\"></i></h1>\r\n              <p>{{fechaActividad.estatus_actividad}}</p>\r\n            </div>\r\n            <!--div *ngIf=\"unica == '1' && ocultaActividad && fechaActividad.estatus_actividad_id == 1\" class=\"alert alert-warning\" style=\"margin-top: -75px\">\r\n              <button class=\"btn btn-primary mt-2\" (click)=\"comienzaActividad()\">Comenzar actividad</button>\r\n            </div-->\r\n            \r\n          </div>\r\n    </div>\r\n<!--div class=\"row\" *ngIf=\"!ocultaActividad\" -->\r\n<div class=\"row\" *ngIf=\"errorFechaActividad\">\r\n  {{mensajeFechaActividad}}\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\" *ngIf=\"!errorFechaActividad && estadoFA != 2 && estadoFM != 2\">\r\n      <app-contenido *ngIf=\"finalizaCarga\" [actividad]=\"actividad\"></app-contenido>\r\n  </div>\r\n  <div class=\"col-12\">\r\n      <app-actividad \r\n        *ngIf=\"finalizaCarga && (actividad.tipo_actividad_id == 2 || actividad.tipo_actividad_id == 4)\" \r\n        (actividadEnviada)=\"refrescaHeader($event)\"\r\n        [actividad]=\"actividad\" [fechaActividad]=\"fechaActividad\" [edicion]=\"edicion\"\r\n        [intentosRestantes]=\"intentosRestantes\"></app-actividad>\r\n      <portafolio-evidencias  *ngIf=\"finalizaCarga && actividad.tipo_actividad_id == 3\"  \r\n        [idActividad]=\"actividad.actividad_id\" \r\n        [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\" \r\n        [edicion]=\"edicion\" \r\n        [estatusActividad]=\"fechaActividad.estatus_actividad_id\"\r\n        [fechaActividad]=\"fechaActividad\"></portafolio-evidencias>\r\n  </div>\r\n</div>\r\n<!--div class=\"row\" *ngIf=\"!ocultaActividad\" -->\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 text-center my-5\" >\r\n      <button *ngIf=\"actividad.tipo_actividad_id == 1 ||((actividad.tipo_actividad_id != 1  && edicion == 0)) \"  class=\"btn btn-success btn-lg\" (click)=\"siguienteActividad()\">\r\n        Siguiente\r\n      </button>\r\n    </div>\r\n</div>\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <retroalimentacion *ngIf=\"verRetro\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\" [idMateria]=\"idMateria\" [idActividad]=\"actividad.actividad_id\" ></retroalimentacion>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #rubrica let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        Rúbrica\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n              <div class=\"col\">\r\n                <app-rubrica [idRubrica]=\"actividad.rubrica_id\" [idMateriaFechaActividad]=\"fechaActividad.materia_fecha_actividad_id\"></app-rubrica>  \r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n      </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/main/main.component.scss":
/*!************************************************************!*\
  !*** ./src/app/materia/actividad/main/main.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\niframe {\n  display: block;\n  margin: auto; }\n\n.container-actividad {\n  margin-top: 20px; }\n\n.banner {\n  padding-bottom: 75px;\n  background-image: url('default_cintillo_Actividades.png');\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.titulo {\n  margin-top: 3%;\n  text-align: center;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvbWFpbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL21haW4vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcYWN0aXZpZGFkXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0ksV0FBVTtFQUNWLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSwwQkExQmtCO0VBMkJsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQS9Ca0IsRUFnQ3JCOztBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjs7QUFDRDtFQUNJLDBCQXRDa0I7RUF1Q2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQ25ERDtFQUNJLGVBQWE7RUFDYixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxpQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHFCQUFtQjtFQUNuQiwwREFBb0Y7RUFDcEYsNkJBQTRCO0VBQzVCLHVCQUNKLEVBQUM7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbmlmcmFtZXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lci1hY3RpdmlkYWR7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbWF0ZXJpYS9kZWZhdWx0X2NpbnRpbGxvX0FjdGl2aWRhZGVzLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxufVxyXG5cclxuLnRpdHVsb3tcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/materia/actividad/main/main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/materia/actividad/main/main.component.ts ***!
  \**********************************************************/
/*! exports provided: MainActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainActividadComponent", function() { return MainActividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/learning/trActividad */ "./src/app/models/learning/trActividad.ts");
/* harmony import */ var src_app_models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/learning/trMateriaFechaActividad */ "./src/app/models/learning/trMateriaFechaActividad.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/docente/retroalimentacion/services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainActividadComponent = /** @class */ (function () {
    function MainActividadComponent(route, router, _materiaService, _actividadService, _usuarioService, modalService, _fechaService, _retroalimentacionService) {
        this.route = route;
        this.router = router;
        this._materiaService = _materiaService;
        this._actividadService = _actividadService;
        this._usuarioService = _usuarioService;
        this.modalService = modalService;
        this._fechaService = _fechaService;
        this._retroalimentacionService = _retroalimentacionService;
        this.actividad = new src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_4__["TrActividad"]();
        this.fechaActividad = new src_app_models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_5__["TrMateriaFechaActividad"]();
        //1 activo por fecha, 0 inactivo por fecha
        this.activoF = false;
        this.activoFM = false;
        this.finalizaCarga = false;
        this.verRetro = false;
        this.pregContestada = true;
        this.reloj = false;
    }
    MainActividadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.identModal = localStorage.getItem('identModal');
        localStorage.removeItem('identModal');
        this.route.params.subscribe(function (params) {
            //reinicio las variables
            _this.errorFechaActividad = 0;
            _this.mensajeFechaActividad = "";
            _this._materiaService.actividadesCargadas.emit({ cargado: false, componente: 'main' });
            var id = +params['id'];
            if (id) {
                var seriacionActividad = _this._materiaService.getSeriacionActividad();
                var pertenece_1 = 0;
                seriacionActividad.forEach(function (actividades) {
                    if (actividades == id)
                        pertenece_1 = 1;
                });
                if (!pertenece_1) //la asignatura no pertenece, redirijo a la materia
                    _this.router.navigate(['/learning/materia/']);
                else {
                    _this.finalizaCarga = false;
                    _this.fechaActividad = new src_app_models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_5__["TrMateriaFechaActividad"]();
                    _this.numIntentos = _this.intentosRestantes = _this.estadoFM = _this.estadoFA = null;
                    _this.materia = _this._materiaService.getSelectedMateria();
                    _this.idMateria = _this._materiaService.getSelectedMateria().materia_id;
                    _this.idAlumno = _this._materiaService.getSelectedMateria().alumno_id;
                    _this.actividad.actividad_id = id;
                    _this.consultaActividad();
                    var date = new Date();
                    _this.estadoFM = _this.materia.estado;
                    _this.activoFM = _this.materia.activa;
                }
            }
        });
        this.abreModal();
    };
    MainActividadComponent.prototype.timer = function () {
        var self = this;
        var timer = function () {
            self.segundos = self.segundosTotales;
            self.horas = Math.floor(self.segundos / 3600);
            self.horas = ((self.horas < 10) ? '0' : '') + self.horas;
            self.segundos %= 3600;
            self.minutos = Math.floor(self.segundos / 60);
            self.minutos = ((self.minutos < 10) ? '0' : '') + self.minutos;
            self.segundos %= 60;
            self.segundos = ((self.segundos < 10) ? '0' : '') + self.segundos;
            if (self.segundosTotales > 0) {
                self.segundosTotales--;
            }
            else {
                clearInterval(self.interval);
                self.reloj = false;
                self._actividadService.finalizaFechaActividad(self.fechaActividad.materia_fecha_actividad_id, self.actividad.tipo_calificacion, 1).subscribe(function (response) {
                    console.log(response);
                    if (response && response['status']) {
                        alertify.success(response['msg']).dismissOthers();
                        location.reload();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        };
        this.interval = setInterval(timer, 1000);
    };
    // timer() {
    //   this.segundos = this.segundosTotales;
    //   this.horas = Math.floor(this.segundos / 3600);
    //   this.horas = ( (this.horas < 10) ? '0': '' ) + this.horas;
    //   this.segundos %= 3600;
    //   this.minutos = Math.floor(this.segundos / 60);
    //   this.minutos = ( (this.minutos < 10) ? '0': '' ) + this.minutos;
    //   this.segundos %= 60;
    //   this.segundos = ( (this.segundos < 10) ? '0': '' ) + this.segundos;
    //   this.segundosTotales--;    
    //   if (this.segundosTotales > -1) {
    //     setTimeout(() => {        
    //       this.timer()
    //     }, 1000);
    //   }else {
    //     this.reloj = false;
    //     this._actividadService.finalizaFechaActividad(this.fechaActividad.materia_fecha_actividad_id,this.actividad.tipo_calificacion,1).subscribe(response => {    
    //       if (response && response['status']) {
    //         alertify.success(response['msg']).dismissOthers();
    //         location.reload();
    //       }
    //     }, error => {
    //       console.log(<any>error);
    //     });
    //   }
    // }
    MainActividadComponent.prototype.abreModal = function () {
        if (this.identModal == 1) {
            this.openLg();
            this.identModal = 0;
        }
    };
    MainActividadComponent.prototype.openLg = function () {
        this.verRetro = true;
        this.modalService.open(this.contentRetro, { size: 'lg', windowClass: 'modal-xl' });
    };
    MainActividadComponent.prototype.retroalimentacionNotif = function () {
        var _this = this;
        this._retroalimentacionService.notificaciones(this.idMateria, this.actividad.actividad_id, this.jwt).subscribe(function (response) {
            _this.notificacionStatus = response['status'];
            _this.numeroMensajes = response['totalMensajes'];
        }, function (error) {
            console.log(error);
        });
    };
    MainActividadComponent.prototype.consultaActPadre = function () {
        var _this = this;
        this._actividadService.consultaFechaActividadActivo(this.actividad.actividad_padre_id, this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                var fechaActividadPadre = response['fechaActividad'];
                // console.log(fechaActividadPadre)
                _this._actividadService.consultaActividadPadre(_this.actividad.actividad_padre_id, _this.idMateria, _this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.actividadAnterior = response['fechaActividad'];
                        _this.actPadre = response['actividad'][0];
                    }
                }, function (error) {
                    console.log(error);
                });
                if (fechaActividadPadre.estatus_actividad_id == 2 || fechaActividadPadre.estatus_actividad_id == 4) {
                    _this.actividadPadreContestada = true;
                }
                else {
                    _this.actividadPadreContestada = false;
                }
            }
            else {
                _this.actividadPadreContestada = false;
            }
            _this.registraFechaActividad(_this.actividad.tipo_actividad_id);
        }, function (error) {
            console.log(error);
        });
    };
    MainActividadComponent.prototype.consultaActividad = function () {
        var _this = this;
        this._actividadService.consulta(this.actividad.actividad_id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
                _this.unica = _this.actividad.unica;
                if (response['actividad'][0].num_intentos) {
                    _this.numIntentos = parseInt(response['actividad'][0].num_intentos);
                }
                else {
                    _this.numIntentos = null;
                }
                if (_this.idAlumno == 0) {
                    //alumno dummy no debe validar fechas
                    _this.actividad.fecha_inicio = _this.actividad.fecha_fin = null;
                }
                var arreglo = _this._fechaService.validaVigencia(_this.actividad.fecha_inicio, _this.actividad.fecha_fin, 1);
                _this.actividad.fecha_inicio = new Date(parseInt(_this.actividad.fecha_inicio) * 1000);
                _this.actividad.fecha_fin = new Date(parseInt(_this.actividad.fecha_fin) * 1000);
                _this.estadoFA = arreglo[1];
                _this.activoF = arreglo[0];
                //CÓDIGO DE ACTIVIDAD PADRE
                _this.idActividadPadre = _this.actividad.actividad_padre_id;
                if (_this.idActividadPadre == '0')
                    _this.idActividadPadre = null;
                if (_this.idActividadPadre) {
                    _this.consultaActPadre();
                }
                else {
                    _this.registraFechaActividad(_this.actividad.tipo_actividad_id);
                    _this.actividadPadreContestada = false;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    MainActividadComponent.prototype.registraFechaActividad = function (idTipoActividad) {
        var _this = this;
        if (this.interval)
            clearInterval(this.interval);
        if (this.reloj)
            this.reloj = false;
        if (this.estadoFA == 2 || this.estadoFM == 2) {
            this.edicion = 0;
            this.fechaActividad.estatus_actividad_id = 1;
            this.finalizaCarga = true;
            this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'main' });
        }
        else {
            this._actividadService.registraFechaActividad(this.actividad.actividad_id, this.idMateria, idTipoActividad, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    if (response['materiaFechaActividad'].estatus_actividad_id == 1) {
                        _this.intentosRestantes = _this.numIntentos - parseInt(response['materiaFechaActividad'].intento_num) + 1;
                    }
                    else {
                        _this.intentosRestantes = _this.numIntentos - parseInt(response['materiaFechaActividad'].intento_num);
                    }
                    if (_this.intentosRestantes < 0)
                        _this.intentosRestantes = 0;
                    _this.fechaActividad = response['materiaFechaActividad'];
                    if ((_this.fechaActividad.estatus_actividad_id == 1 || _this.fechaActividad.estatus_actividad_id == 5 || _this.fechaActividad.estatus_actividad_id == 7)
                        && ((_this.activoF && _this.activoFM) || (_this.fechaActividad.estatus_actividad_id == 5))
                        && (!_this.idActividadPadre || (_this.idActividadPadre && _this.actividadPadreContestada)) && _this.materia.validacion == 1) //&& this.actPadre == 0 || this.actPadre != undefined
                        _this.edicion = 1;
                    else
                        _this.edicion = 0;
                    _this.identModal = localStorage.getItem('identModal');
                    localStorage.removeItem('identModal');
                    _this.abreModal();
                    _this.retroalimentacionNotif();
                    var fin = _this.actividad.fecha_fin.getTime();
                    var hoy = new Date().getTime();
                    _this.segundosTotales = ((fin - hoy) / (1000)).toFixed();
                    if (_this.segundosTotales <= 28800 && _this.segundosTotales > 0) {
                        console.log(_this.segundosTotales);
                        _this.timer();
                        _this.reloj = true;
                    }
                    _this.finalizaCarga = true;
                    _this._materiaService.actividadesCargadas.emit({ componente: 'main', actividad: _this.actividad });
                }
                else {
                    _this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'main' });
                    _this.errorFechaActividad = 1;
                    _this.mensajeFechaActividad = response['msg'];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    MainActividadComponent.prototype.refrescaHeader = function (event) {
        if (event.status == 1) {
            this.fechaActividad = event.fechaActividad;
            this.edicion = 0;
            if (this.intentosRestantes > 0)
                this.intentosRestantes--;
        }
    };
    MainActividadComponent.prototype.reintentarActividad = function () {
        alertify.confirm('Reintentar actividad', 'Al realizar esta acción <strong>renuncias a la calificación</strong> que obtuviste ¿estás seguro?', function () {
            var _this = this;
            var intento = parseInt(this.fechaActividad.intento_num) + 1;
            this._actividadService.reintentaActividad(this.actividad.actividad_id, this.idMateria, intento, this.actividad.tipo_actividad_id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.fechaActividad = response['materiaFechaActividad'];
                    _this.edicion = 1;
                    _this._actividadService.actividadCompletada.emit();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Acción cancelada');
        });
    };
    MainActividadComponent.prototype.siguienteActividad = function () {
        var nextIdActividad = this._actividadService.siguienteActividad(this.actividad.actividad_id);
        if (nextIdActividad)
            this.router.navigate(['/materia/actividad/' + nextIdActividad]);
        else
            this.router.navigate(['/materia/home']);
    };
    MainActividadComponent.prototype.openModalRetro = function (content) {
        this.verRetro = true;
        this.notificacionStatus = 0;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    MainActividadComponent.prototype.openModalRubrica = function (content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
    };
    /*comienzaActividad() {
      this.ocultaActividad = false;
    }*/
    MainActividadComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalRef"])
    ], MainActividadComponent.prototype, "contentRetro", void 0);
    MainActividadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/materia/actividad/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/materia/actividad/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__["MateriaService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_3__["ActividadService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_9__["FechaService"],
            src_app_docente_retroalimentacion_services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_8__["RetroalimentacionService"]])
    ], MainActividadComponent);
    return MainActividadComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/main/main.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/materia/actividad/main/main.module.ts ***!
  \*******************************************************/
/*! exports provided: MainActividadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainActividadModule", function() { return MainActividadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/materia/actividad/main/main.component.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/materia/actividad/main/main-routing.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_docente_retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/docente/retroalimentacion/retroalimentacion.module */ "./src/app/docente/retroalimentacion/retroalimentacion.module.ts");
/* harmony import */ var _actividad_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actividad.module */ "./src/app/materia/actividad/actividad.module.ts");
/* harmony import */ var _portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../portafolio-evidencias/portafolio-evidencias.module */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module.ts");
/* harmony import */ var _contenido_contenido_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contenido/contenido.module */ "./src/app/materia/actividad/contenido/contenido.module.ts");
/* harmony import */ var src_app_docente_rubrica_rubrica_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/docente/rubrica/rubrica.module */ "./src/app/docente/rubrica/rubrica.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainActividadModule = /** @class */ (function () {
    function MainActividadModule() {
    }
    MainActividadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainActividadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainActividadRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                src_app_docente_retroalimentacion_retroalimentacion_module__WEBPACK_IMPORTED_MODULE_5__["RetroalimentacionModule"],
                _actividad_module__WEBPACK_IMPORTED_MODULE_6__["ActividadModule"],
                _portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_7__["PortafolioEvidenciasModule"],
                _contenido_contenido_module__WEBPACK_IMPORTED_MODULE_8__["ContenidoModule"],
                src_app_docente_rubrica_rubrica_module__WEBPACK_IMPORTED_MODULE_9__["RubricaModule"]
            ]
        })
    ], MainActividadModule);
    return MainActividadModule;
}());



/***/ })

}]);
//# sourceMappingURL=actividad-main-main-module.js.map