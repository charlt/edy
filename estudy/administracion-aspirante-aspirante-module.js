(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-aspirante-aspirante-module"],{

/***/ "./src/app/administracion/aspirante/aspirante-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/aspirante/aspirante-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AspiranteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteRoutingModule", function() { return AspiranteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aspirante_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aspirante.component */ "./src/app/administracion/aspirante/aspirante.component.ts");
/* harmony import */ var _aspirante_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aspirante/consulta/consulta.component */ "./src/app/administracion/aspirante/consulta/consulta.component.ts");
/* harmony import */ var _solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitud/solicitud.component */ "./src/app/administracion/aspirante/solicitud/solicitud.component.ts");
/* harmony import */ var _expediente_expediente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expediente/expediente.component */ "./src/app/administracion/aspirante/expediente/expediente.component.ts");
/* harmony import */ var _cleaver_cleaver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cleaver/cleaver.component */ "./src/app/administracion/aspirante/cleaver/cleaver.component.ts");
/* harmony import */ var _alumno_tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alumno/tickets-alumno/tickets-alumno.component */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _aspirante_component__WEBPACK_IMPORTED_MODULE_2__["AspiranteComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            // { path: 'nuevo', component: NuevoComponent },
            { path: 'consulta', component: _aspirante_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'solicitud/:id', component: _solicitud_solicitud_component__WEBPACK_IMPORTED_MODULE_4__["SolicitudComponent"] },
            { path: 'expediente/:id', component: _expediente_expediente_component__WEBPACK_IMPORTED_MODULE_5__["ExpedienteComponent"] },
            { path: 'cleaver/:id', component: _cleaver_cleaver_component__WEBPACK_IMPORTED_MODULE_6__["CleaverComponent"] },
            { path: 'ticket-expediente/:id', component: _alumno_tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_7__["TicketsAlumnoComponent"] },
            { path: 'estadisticas', loadChildren: './estadistica/estadistica.module#EstadisticaModule' },
        ]
    }
];
var AspiranteRoutingModule = /** @class */ (function () {
    function AspiranteRoutingModule() {
    }
    AspiranteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AspiranteRoutingModule);
    return AspiranteRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/aspirante.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/aspirante/aspirante.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/aspirante/aspirante.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/aspirante/aspirante.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzcGlyYW50ZS9hc3BpcmFudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/aspirante/aspirante.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/aspirante/aspirante.component.ts ***!
  \*****************************************************************/
/*! exports provided: AspiranteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteComponent", function() { return AspiranteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AspiranteComponent = /** @class */ (function () {
    function AspiranteComponent(_usuarioService, _translate) {
        this._usuarioService = _usuarioService;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Aspirantes";
        this._usuarioService.pushBreadcum(this.title, '/admin/aspirante', 1);
    }
    AspiranteComponent.prototype.ngOnInit = function () {
    };
    AspiranteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aspirante',
            template: __webpack_require__(/*! ./aspirante.component.html */ "./src/app/administracion/aspirante/aspirante.component.html"),
            styles: [__webpack_require__(/*! ./aspirante.component.scss */ "./src/app/administracion/aspirante/aspirante.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AspiranteComponent);
    return AspiranteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/aspirante.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/administracion/aspirante/aspirante.module.ts ***!
  \**************************************************************/
/*! exports provided: AspiranteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteModule", function() { return AspiranteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _aspirante_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aspirante-routing.module */ "./src/app/administracion/aspirante/aspirante-routing.module.ts");
/* harmony import */ var _aspirante_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aspirante.component */ "./src/app/administracion/aspirante/aspirante.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/aspirante/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _expediente_expediente_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expediente/expediente.module */ "./src/app/administracion/aspirante/expediente/expediente.module.ts");
/* harmony import */ var _solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./solicitud/solicitud.module */ "./src/app/administracion/aspirante/solicitud/solicitud.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../alumno/tickets-alumno/tickets-alumno.module */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cleaver/cleaver.module */ "./src/app/administracion/aspirante/cleaver/cleaver.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AspiranteModule = /** @class */ (function () {
    function AspiranteModule() {
    }
    AspiranteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_aspirante_component__WEBPACK_IMPORTED_MODULE_4__["AspiranteComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _aspirante_routing_module__WEBPACK_IMPORTED_MODULE_3__["AspiranteRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _expediente_expediente_module__WEBPACK_IMPORTED_MODULE_7__["ExpedienteModule"],
                _solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_8__["SolicitudModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_10__["TicketsAlumnoModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_11__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_12__["CleaverModule"]
            ]
        })
    ], AspiranteModule);
    return AspiranteModule;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/consulta/consulta.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/aspirante/consulta/consulta.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Aspirantes</h4>\r\n    <button class=\"btn btn-success\" (click)=\"setSelectedRol()\" [routerLink]=\"['/admin/usuario/nuevo']\">Agregar\r\n      aspirante</button>\r\n    <div class=\"btn-group float-right\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"generaExcel()\">\r\n        <h4><i class=\"fa fa-file-excel-o\"></i></h4>\r\n        Genera reporte\r\n      </button>\r\n      <button [routerLink]=\"['/admin/aspirante/estadisticas']\" class=\"btn btn-outline-info\">\r\n        <h4><i class=\"fa fa-table\"></i></h4>\r\n        Consulta estadística\r\n      </button>\r\n    </div>\r\n    <p class=\"mt-3\">Búsqueda de aspirantes</p>\r\n    <div class=\"input-group mb-3\">\r\n      <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'SearchInput' | translate}}\"\r\n        aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <p *ngIf=\"!consultaAspirantes\"><strong style=\"font-size: small;\">Total de registros: {{totalItems}}</strong></p>\r\n    <!-- <div class=\"row\"> -->\r\n    <!-- Default unchecked -->\r\n    <div class=\"custom-control custom-checkbox\">\r\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked\" (click)=\"switchFechas()\">\r\n      <label class=\"custom-control-label\" for=\"defaultUnchecked\">Filtrar por fechas</label>\r\n    </div>\r\n    <!-- <button class=\"btn btn-primary pull-right\" (click)=\"limpiaFechas()\">Quitar fechas</button> -->\r\n    <!-- </div> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label for=\"tipo\">Tipo de búsqueda</label>\r\n          <select class=\"form-control\" id=\"tipo\" [(ngModel)]=\"tipoConsulta\" (change)=\"switchConsulta(tipoConsulta)\">\r\n            <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n            <option value=1>Todos</option>\r\n            <option value=2>Validados</option>\r\n            <option value=3>Sin validar</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col-md-4\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 1 ? 'active':''\"\r\n            (click)=\"consultaTodos(1)\">Todos</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 2 ? 'active':''\"\r\n            (click)=\"muestraAspirantes(2)\">Validado</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"tipoConsulta == 3 ? 'active':''\"\r\n            (click)=\"muestraAspirantes(3)\">Sin validar</button>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"col-md-3\">\r\n        <div class=\"form-group\">\r\n          <label for=\"cat_carrera\">Carrera</label>\r\n          <select class=\"form-control\" id=\"cat_carrera\" [(ngModel)]=\"carreraIdBusqueda\"\r\n            (change)=\"switchConsulta(tipoConsulta)\">\r\n            <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n            <option value=\"0\">Ninguna</option>\r\n            <option *ngFor=\"let carrera of carreras\" value=\"{{carrera.carrera_id}}\">{{carrera.carrera}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div [hidden]=\"!muestraFechas\" class=\"form-group\">\r\n          <label for=\"fecha_inicio\">Fecha inicio</label>\r\n          <input type=\"date\" class=\"form-control\" id=\"fecha_inicio\" (change)=\"switchConsulta(tipoConsulta)\"\r\n            [(ngModel)]=\"fechaInicio\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div [hidden]=\"!muestraFechas\" class=\"form-group\">\r\n          <label for=\"fecha_fin\">Fecha fin</label>\r\n          <input type=\"date\" class=\"form-control\" id=\"fecha_fin\" (change)=\"switchConsulta(tipoConsulta)\"\r\n            [(ngModel)]=\"fechaFin\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <table class=\"table table-bordered table-responsive\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>Folio de aspirante</th>\r\n          <th>Nombre</th>\r\n          <th>Correo</th>\r\n          <th>Carrera</th>\r\n          <th>Paso</th>\r\n          <th>Validado por el administrador</th>\r\n          <th>Matricular</th>\r\n          <th>Información de inscripción</th>\r\n          <th>Expediente</th>\r\n          <th>Situación</th>\r\n          <th>Resultado cleaver</th>\r\n          <th>Pago</th>\r\n          <th>Reporte</th>\r\n          <th>Último acceso</th>\r\n          <!--<th>Generar matrícula</th>-->\r\n          <th>Fecha de registro</th>\r\n          <th>Eliminar</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"aspirantes\">\r\n        <tr *ngFor=\"let aspirante of aspirantes; let i = index\">\r\n          <td>{{aspirante.persona_id}}</td>\r\n          <td style=\"width:20%\">{{aspirante.nombre}} {{aspirante.primer_apellido}} {{aspirante.segundo_apellido}}</td>\r\n          <td>{{aspirante.email}}</td>\r\n          <td>\r\n            {{aspirante.carrera}}\r\n            <a href=\"javascript:void(0)\" (click)=\"abreModal(i)\">Cambiar</a>\r\n          </td>\r\n          <td class=\"text-center\" [ngClass]=\"aspirante.paso == 4 ? 'alert-success':''\">\r\n            <!--span *ngIf=\"aspirante.paso == 4\"\r\n              (click)=\"matricula_aspirante(aspirante.persona_id,aspirante.nombre,aspirante.primer_apellido,i)\"\r\n              style=\"cursor: pointer;\"><i class=\"fa fa-id-card-o\"></i><span\r\n                style=\"font-size: 10px;\">Matrícular</span></span-->\r\n            <span>{{aspirante.paso}}</span>\r\n          </td>\r\n          <td>\r\n            <div style=\"display: flex; justify-content: center;\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{aspirante.persona_id}}\"\r\n                  (click)=\"cambiaValidador(aspirante.persona_id, i )\" [checked]=\"aspirante.validado_administrador != 0\">\r\n                <label class=\"custom-control-label\" for=\"{{aspirante.persona_id}}\"></label>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td class=\"alert text-center\" role=\"alert\" [ngClass]=\"aspirante.paso == 4 ? 'alert-success':''\">\r\n            <a href=\"javascript:void()\" (click)=\"setFiltros()\"\r\n              [routerLink]=\"['../../matriculacion/'+aspirante.persona_id]\"><i class=\"fa fa-id-card-o\"\r\n                aria-hidden=\"true\"></i><br>\r\n              <small>Matricular</small>\r\n            </a>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <a [routerLink]=\"['../solicitud/'+aspirante.persona_id]\" target=\"_blank\"\r\n              [ngClass]=\"aspirante.paso >= 1 ? 'bg-completo': 'bg-incompleto'\">\r\n              <i class=\"fa fa-list fa-2x\" aria-hidden=\"true\"></i>\r\n              <p>{{aspirante.porcentaje_formulario}}%</p>\r\n            </a>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <a [routerLink]=\"['../expediente/'+aspirante.persona_id]\"\r\n              [ngClass]=\"aspirante.paso >= 3 ? 'bg-completo': 'bg-incompleto'\" target=\"_blank\">\r\n              <i class=\"fa fa-folder-open-o fa-2x\" aria-hidden=\"true\"></i>\r\n              <p>{{aspirante.porcentaje_documento}}%</p>\r\n            </a>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <a href=\"javascript:void(0)\" [ngClass]=\"{'bg-completo':aspirante.situacion_aspirante_id == 1, 'bg-incompleto':aspirante.situacion_aspirante_id ==2,\r\n           'bg-incompleto':aspirante.situacion_aspirante_id ==3, 'bg-null':aspirante.situacion_aspirante_id ==null}\"\r\n              (click)=\"muestraModalSituacion(aspirante.persona_id, aspirante.situacion_aspirante_id, i)\">\r\n              <i class=\"fa fa-user-o fa-2x\" aria-hidden=\"true\"></i>\r\n              <p>{{aspirante.situacion_aspirante_descripcion}}</p>\r\n            </a>\r\n          </td>\r\n          <td [ngClass]=\"aspirante.cleaver_completo == '1' ? 'bg-completo': 'bg-incompleto'\" class=\"text-center\"\r\n            [routerLink]=\"['../cleaver/'+aspirante.persona_id]\"><i class=\"fa fa-bar-chart fa-2x\" aria-hidden=\"true\"></i>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            {{aspirante.plan_pago}}\r\n            <button *ngIf=\"aspirante.estatus_pago == 3\"  [routerLink]=\"['/admin/pagos-alumno/solicitud/'+aspirante.persona_id]\" class=\"btn btn-outline-success\">\r\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n              Ver pago\r\n            </button>\r\n          </td>\r\n\r\n          <td [ngClass]=\"aspirante.paso >= 1 ? 'bg-completo': 'bg-incompleto'\" class=\"text-center\"><a\r\n              [href]=\"url+'/seguimiento/reportes/solicitud_inscripcion.php?id='+ aspirante.persona_id\"\r\n              style=\"color:inherit\" target=\"_blank\"><i class=\"fa fa-file-pdf-o fa-2x\" aria-hidden=\"true\"></i></a></td>\r\n          <td>\r\n            <p>{{aspirante.sesion | date: \"dd/MM/yyyy\"}} {{aspirante.sesion | date: \"mediumTime\"}} </p>\r\n          </td>\r\n          <!-- <td class=\"text-center\"><i style=\"color: red;\" class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i></td> -->\r\n          <td class=\"text-center\">{{aspirante.fecha_creacion | date: \"dd/MM/yyyy\"}}\r\n            {{aspirante.fecha_creacion | date: \"mediumTime\"}}</td>\r\n          <td class=\"text-center\"><i style=\"color: red;\" class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"\r\n              (click)=\"eliminar(aspirante.persona_id, i)\"></i></td>\r\n        </tr>\r\n      </tbody>\r\n      <tr *ngIf=\"consultaAspirantes\">\r\n        <td colspan=\"11\">\r\n          <div class=\"col text-center mt-1 mb-1\">\r\n            <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n            <h5>\"Cargando datos, por favor espere.\"</h5>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n    <div *ngIf=\"numAspirantes == 0\" class=\"alert alert-danger text-center\" role=\"alert\">\r\n      Sin coincidencias\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" [maxSize]=\"4\"\r\n        [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalCarrera let-modal>\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p><b>Aspirante:</b> {{selectAspirante.nombre}} {{selectAspirante.primer_apellido}}\r\n      {{selectAspirante.segundo_apellido}}</p>\r\n    <p><b>Carrera:</b> {{selectAspirante.carrera}}</p>\r\n    <app-consulta-asignatura [nivel]=\"1\" [tipo]=\"'small'\" (sucessEvent)=\"obtieneCarrera($event)\">\r\n    </app-consulta-asignatura>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiaCarrera()\">Guardar</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #modalSituacion let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4>Edita situación</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"form-group\">\r\n      <label for=\"cat_estatus\">Situación</label>\r\n      <select id=\"cat_estatus\" class=\"form-control\" [(ngModel)]=\"situacion_aspirante_id\">\r\n        <option value=\"\" hidden selected>Selecciona una opción</option>\r\n        <option value=\"{{estatus.situacion_aspirante_id}}\" *ngFor=\"let estatus of estatusPermitido\">\r\n          {{estatus.situacion_aspirante_descripcion}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"cambiaEstatusAspirante()\">Guardar</button>\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/aspirante/consulta/consulta.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/aspirante/consulta/consulta.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-completo {\n  color: var(--green); }\n\n.bg-incompleto {\n  color: var(--yellow); }\n\n.bg-alumno {\n  color: var(--blue); }\n\n.bg-null {\n  color: var(--black); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYXNwaXJhbnRlL2NvbnN1bHRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxhc3BpcmFudGVcXGNvbnN1bHRhXFxjb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG9CQUFtQixFQUNuQjs7QUFFRDtFQUNJLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzcGlyYW50ZS9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb21wbGV0b3tcclxuIGNvbG9yOiB2YXIoLS1ncmVlbilcclxufVxyXG5cclxuLmJnLWluY29tcGxldG97XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KVxyXG59XHJcblxyXG4uYmctYWx1bW5ve1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbn1cclxuXHJcbi5iZy1udWxse1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/aspirante/consulta/consulta.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/aspirante/consulta/consulta.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/aspirante.service */ "./src/app/administracion/aspirante/services/aspirante.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(_usuarioService, _aspiranteService, translate, _modalService, _catalogoService, router) {
        this._usuarioService = _usuarioService;
        this._aspiranteService = _aspiranteService;
        this.translate = translate;
        this._modalService = _modalService;
        this._catalogoService = _catalogoService;
        this.router = router;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
        this.itemsPerPage = 50;
        this.page = 1;
        this.previousPage = 1;
        this.consultaAspirantes = false;
        this.tipoConsulta = 1;
        this.carreraIdBusqueda = "";
        this.aspirantesTotales = [];
        this.situacion_aspirante_id = "";
        this.estatusPermitido = [];
        this.fechaInicio = '';
        this.fechaFin = '';
        this.muestraFechas = false;
        this.title = "Consulta";
        this._usuarioService.pushBreadcum('Aspirantes', '/admin/aspirante', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.consultaCarrerasAspirante();
        this.consultaEstatus();
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500)).subscribe(function (data) {
            _this.buscaPersona(data);
        });
    };
    ConsultaComponent.prototype.consultaCarrerasAspirante = function () {
        var _this = this;
        this._catalogoService.consultaCarreraAspirantes().subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
                if (sessionStorage.getItem('filtroAspirante')) {
                    var filtro = JSON.parse(sessionStorage.getItem('filtroAspirante'));
                    _this.tipoConsulta = filtro.tipo;
                    _this.carreraIdBusqueda = filtro.id_carrera;
                    _this.switchConsulta(_this.tipoConsulta);
                    sessionStorage.removeItem('filtroAspirante');
                }
                else {
                    _this.switchConsulta(1);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.switchFechas = function () {
        if (this.muestraFechas) {
            this.muestraFechas = false;
            this.fechaInicio = '';
            this.fechaFin = '';
            this.switchConsulta(this.tipoConsulta);
        }
        else if (!this.muestraFechas) {
            this.muestraFechas = true;
        }
    };
    ConsultaComponent.prototype.cambiaEstatusAspirante = function () {
        var _this = this;
        this._aspiranteService.editaEstatusAspirante(this.persona_id, this.situacion_aspirante_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.aspirantes[_this.indexAspirante].situacion_aspirante_id = _this.situacion_aspirante_id;
                _this._modalService.dismissAll();
                _this.estatusAspirantes.forEach(function (estatus) {
                    if (estatus.situacion_aspirante_id == _this.situacion_aspirante_id) {
                        _this.aspirantes[_this.indexAspirante].situacion_aspirante_descripcion = estatus.situacion_aspirante_descripcion;
                    }
                });
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.generaExcel = function () {
        window.open(this.url + 'seguimiento/reportes/solicitud_excel.php?jwt=' + this.jwt, "_blank");
    };
    ConsultaComponent.prototype.consultatTotalAspirantes = function (tipo) {
        var _this = this;
        this._aspiranteService.totalAspirantes(tipo, this.carreraIdBusqueda, this.fechaInicio, this.fechaFin).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalItems = response['total'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaEstatus = function () {
        var _this = this;
        this._catalogoService.consultaEstatusAspirante().subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusAspirantes = response['estatus'];
                _this.estatusAspirantes.splice(0, 1);
                _this.estatusAspirantes.splice(3, 1);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.buscaPersona = function (data) {
        var _this = this;
        if (this.contenido != "") {
            this._aspiranteService.consultaAspirantes(this.jwt, data, 0, this.itemsPerPage, 1, '', '', '').subscribe(function (response) {
                if (response && response['status']) {
                    _this.aspirantes = response['aspirante'];
                    _this.numAspirantes = _this.aspirantes.length;
                }
                else {
                    _this.aspirantes = [];
                    _this.numAspirantes = 0;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.consultaTodos(1);
        }
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm('', '¿Deseas eliminar el aspirante?', function () {
            var _this = this;
            this._aspiranteService.elimina(this.jwt, id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.aspirantes.splice(index, 1);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaComponent.prototype.cambiaValidador = function (persona_id, index) {
        var _this = this;
        var validador = this.aspirantes[index].validado_administrador;
        if (validador == 0)
            validador = 1;
        else if (validador == 1)
            validador = 0;
        this.aspirantes[index].validado_administrador = validador;
        this._aspiranteService.editaValidacion(persona_id, validador).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.totalItems = _this.totalItems - 1;
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.abreModal = function (index) {
        this.selectAspirante = "";
        this.selectAspirante = this.aspirantes[index];
        this._modalService.open(this.modalCarrera, { size: 'lg' });
    };
    ConsultaComponent.prototype.obtieneCarrera = function (event) {
        this.carrera_id = event.idCarrera;
    };
    ConsultaComponent.prototype.cambiaCarrera = function () {
        var _this = this;
        if (!this.carrera_id) {
            alertify.error('Selecciona una carrera');
            return;
        }
        this._aspiranteService.editaCarrera(this.selectAspirante.persona_id, this.carrera_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this._modalService.dismissAll();
                _this.carrera_id = "";
                _this.consultaTodos(_this.tipoConsulta);
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.switchConsulta = function (tipoConsulta) {
        if (tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) { //todos sin carrera y sin fecha
            this.consultaTodos(tipoConsulta);
        }
        else if (tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) { //todos con carrera y con fecha
            tipoConsulta = 4;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) { //todos con carrera y sin fecha
            tipoConsulta = 5;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) { //todos sin carrera y con fecha
            tipoConsulta = 6;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) { //validados sin carrera y sin fecha
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) { //validados con carrera y con fecha
            tipoConsulta = 7;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) { //validados con carrera y sin fecha
            tipoConsulta = 8;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) { //validados sin carrera y con fecha
            tipoConsulta = 9;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (!this.fechaInicio && !this.fechaFin)) { //sin validar sin carrera y sin fecha
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (this.fechaInicio && this.fechaFin)) { //sin validar con carrera y con fecha
            tipoConsulta = 10;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0') && (!this.fechaInicio && !this.fechaFin)) { //sin validar con carrera y sin fecha
            tipoConsulta = 11;
            this.muestraAspirantes(tipoConsulta);
        }
        else if (tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0') && (this.fechaInicio && this.fechaFin)) { //sin validar sin carrera y con fecha
            tipoConsulta = 12;
            this.muestraAspirantes(tipoConsulta);
        }
        if (this.consultaAnterior != tipoConsulta) {
            this.page = 1;
            this.consultaAnterior = tipoConsulta;
        }
        console.log(this.consultaAnterior, tipoConsulta);
        // console.log(tipoConsulta, this.carreraIdBusqueda);
        // if(tipoConsulta == 1 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')){ // todos
        //   this.consultaTodos(tipoConsulta);
        // }else if(tipoConsulta == 2 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // validado sin carrera
        //   this.muestraAspirantes(tipoConsulta);
        // }else if(tipoConsulta == 3 && (this.carreraIdBusqueda == "" || this.carreraIdBusqueda == '0')) { // sin validar y sin carrera
        //   this.muestraAspirantes(tipoConsulta);
        // }else if(tipoConsulta == 2 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // validado con carrera
        //   tipoConsulta=4;
        //   this.muestraAspirantes(tipoConsulta);
        // }else if(tipoConsulta == 3 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // sin validar con carrera
        //   tipoConsulta = 5;
        //   this.muestraAspirantes(tipoConsulta);
        // }else if(tipoConsulta == 1 && (this.carreraIdBusqueda != "" && this.carreraIdBusqueda != '0')) { // todos carrera
        //   tipoConsulta = 6;
        //   this.muestraAspirantes(tipoConsulta);
        // }
    };
    ConsultaComponent.prototype.consultaTodos = function (tipo) {
        var _this = this;
        this.aspirantes = null;
        this.numAspirantes = null;
        this.contenido = null;
        this.consultaAspirantes = true;
        var inicio = (this.page - 1) * this.itemsPerPage;
        this._aspiranteService.consultaAspirantes('', this.contenido, inicio, this.itemsPerPage, tipo, '', '', '').subscribe(function (response) {
            _this.consultaAspirantes = false;
            if (response && response['status']) {
                _this.aspirantes = response['aspirante'];
                _this.numAspirantes = _this.aspirantes.length;
                _this.consultatTotalAspirantes(tipo);
            }
            else {
                _this.numAspirantes = 0;
                _this.totalItems = 0;
                _this.consultaAspirantes = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.muestraAspirantes = function (tipo) {
        var _this = this;
        // console.log(tipo);
        // if (tipo != 4 ) this.carreraIdBusqueda = "";
        // if (this.tipoConsulta != tipo || this.tipoConsulta == 4) {
        // this.tipoConsulta = tipo;
        this.aspirantes = [];
        // this.tipoConsulta = tipo;
        this.consultaAspirantes = true;
        var inicio = (this.page - 1) * this.itemsPerPage;
        // let fin = inicio + 50;
        if ((tipo == 4 || tipo == 6 || tipo == 7 || tipo == 9 || tipo == 10 || tipo == 12) && (!this.fechaInicio && !this.fechaFin)) {
            return;
        }
        this._aspiranteService.consultaAspirantes('', this.contenido, inicio, this.itemsPerPage, tipo, this.carreraIdBusqueda, this.fechaInicio, this.fechaFin).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaAspirantes = false;
                _this.aspirantesTotales = response['aspirante'];
                // console.log(this.aspirantesTotales);
                _this.aspirantes = response['aspirante'];
                _this.numAspirantes = _this.aspirantes.length;
                _this.consultatTotalAspirantes(tipo);
            }
            else {
                _this.numAspirantes = 0;
                _this.totalItems = 0;
                _this.consultaAspirantes = false;
            }
        }, function (error) {
            console.log(error);
        });
        // } else {
        //   let inicio = (this.page - 1) * this.itemsPerPage;
        //   let fin = inicio + 50;
        //   console.log(this.page, inicio, fin);
        //   if (this.aspirantesTotales.length < 50) {
        //     console.log(this.aspirantesTotales);
        //     this.aspirantes = [];
        //     this.aspirantes = this.aspirantesTotales.slice(inicio, this.aspirantesTotales.length)
        //     console.log(this.aspirantes);
        //   } else {
        //     console.log('aquí x2');
        //     this.aspirantes = [];
        //     this.aspirantes = this.aspirantesTotales.slice(inicio, fin)
        //     console.log(this.aspirantes);
        //   }
        // }
    };
    ConsultaComponent.prototype.matricula_aspirante = function (id_aspirante, nombre, primer_apellido, index) {
        alertify.confirm('Matriculación de alumno', '¿Deseas matricular al aspirante ' + nombre + ' ' + primer_apellido + '? al hacer esta operación el aspirante desaparecerá de la lista', function () {
            var _this = this;
            this._aspiranteService.matriculaAspirante(id_aspirante, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.aspirantes.splice(index, 1);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaComponent.prototype.loadPage = function (page) {
        if (page != this.previousPage) {
            this.previousPage = page;
            // if (this.tipoConsulta == 1) {
            //   this.consultaTodos(1);
            // } else {
            //   this.previousPage = page;
            //   console.log(this.tipoConsulta);
            //   this.muestraAspirantes(this.tipoConsulta);
            // }
            this.switchConsulta(this.tipoConsulta);
        }
    };
    ConsultaComponent.prototype.setSelectedRol = function () {
        if (sessionStorage.getItem('selectedRol'))
            sessionStorage.removeItem('selectedRol');
        sessionStorage.setItem('selectedRol', 'Aspirante');
    };
    ConsultaComponent.prototype.setFiltros = function () {
        var filtro = {
            tipo: this.tipoConsulta,
            id_carrera: this.carreraIdBusqueda
        };
        if (sessionStorage.getItem('filtroAspirante'))
            sessionStorage.removeItem('filtroAspirante');
        sessionStorage.setItem('filtroAspirante', JSON.stringify(filtro));
        console.log(sessionStorage.getItem('filtroAspirante'));
    };
    ConsultaComponent.prototype.muestraModalSituacion = function (persona_id, situacion_aspirante_id, index) {
        var _this = this;
        this.estatusPermitido = [];
        this.situacion_aspirante_id = "";
        this.estatusAspirantes.forEach(function (estatus) {
            if (situacion_aspirante_id == 1 && estatus.situacion_aspirante_id == 3) {
                _this.estatusPermitido.push(estatus);
            }
            else if (situacion_aspirante_id == 3 && estatus.situacion_aspirante_id == 1) {
                _this.estatusPermitido.push(estatus);
            }
        });
        console.log(this.estatusPermitido, situacion_aspirante_id, this.estatusAspirantes);
        this.persona_id = persona_id;
        this.indexAspirante = index;
        this._modalService.open(this.modalSituacion, { size: 'sm' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalCarrera'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsultaComponent.prototype, "modalCarrera", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalSituacion'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsultaComponent.prototype, "modalSituacion", void 0);
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/aspirante/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/aspirante/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_aspirante_service__WEBPACK_IMPORTED_MODULE_2__["AspiranteService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_6__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/aspirante/services/aspirante.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/aspirante/services/aspirante.service.ts ***!
  \************************************************************************/
/*! exports provided: AspiranteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteService", function() { return AspiranteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AspiranteService = /** @class */ (function () {
    function AspiranteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AspiranteService.prototype.consultaSolicitud = function (jwt) {
        // var params = '?jwt='+jwt;
        // params += '&id='+ id_persona;
        return this._httpClient.get(this.url + '/seguimiento/reportes/solicitud.php');
    };
    AspiranteService.prototype.totalAspirantes = function (tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?tipo=' + tipo;
        params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        return this._httpClient.get(this.url + '/seguimiento/administracion/totalAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaEspecifica = function (id_persona) {
        var params = '?id=' + id_persona;
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAspirante.php' + params);
    };
    AspiranteService.prototype.elimina = function (jwt, id) {
        var params = '?aspirante_id=' + id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/elimina.php' + params);
    };
    AspiranteService.prototype.matriculaAspirante = function (id, jwt) {
        var params = '?id_aspirante=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/administracionAlumno/matriculaAspirante.php' + params);
    };
    AspiranteService.prototype.editaValidacion = function (id_persona, validador) {
        var params = '?persona_id=' + id_persona;
        params += '&validador=' + validador;
        return this._httpClient.get(this.url + '/seguimiento/administracion/cambiaValidacionAdmin.php' + params);
    };
    AspiranteService.prototype.consultaAspirantes = function (jwt, contenido, inicio, limite, tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?limit_final=' + limite;
        if (contenido != null) {
            params += '&busqueda=' + contenido;
        }
        if (carrera_id)
            params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        params += '&limit_inicio=' + inicio;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/seguimiento/administracion/consultaAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaAlumno = function () {
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAlumno.php');
    };
    AspiranteService.prototype.editaEstatusAspirante = function (id_aspirante, situacion_aspirante_id) {
        var formData = new FormData();
        formData.append('aspirante_id', id_aspirante);
        formData.append('situacion_aspirante_id', situacion_aspirante_id);
        return this._httpClient.post(this.url + 'seguimiento/aspirante/editaEstatus.php', formData);
    };
    AspiranteService.prototype.editaCarrera = function (aspirante_id, carrera_id) {
        var params = '?id_aspirante=' + aspirante_id;
        params += '&id_carrera=' + carrera_id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/modificaCarrera.php' + params);
    };
    AspiranteService.prototype.registroAspirante = function (jwt, id_aspirante) {
        var formData = new FormData();
        formData.append('id_persona', id_aspirante);
        formData.append('clave_aspirante', id_aspirante);
        formData.append('carrera_id', '0');
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/perfil/registroAspirante.php', formData);
    };
    AspiranteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AspiranteService);
    return AspiranteService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-aspirante-aspirante-module.js.map