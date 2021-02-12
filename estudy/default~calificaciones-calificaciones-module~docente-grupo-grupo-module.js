(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calificaciones-calificaciones-module~docente-grupo-grupo-module"],{

/***/ "./src/app/administracion/carga-actividades/services/modulo.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/modulo.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ModuloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloService", function() { return ModuloService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuloService = /** @class */ (function () {
    function ModuloService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ModuloService.prototype.consultaModulo = function (id, jwt) {
        var params = '?id_modulo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/consulta.php' + params);
    };
    ModuloService.prototype.consultaActividad = function (id, preguntas, tipo) {
        var params = '?id_modulo=' + id;
        params += '&tipo=' + tipo; //1 todas las actividades, 2 sólo ejercicios
        if (preguntas == 1) {
            params += '&preguntas=1';
        }
        return this._httpClient.get(this.url + 'learning/modulos/consultaActividades.php' + params);
    };
    ModuloService.prototype.elimina = function (id, jwt) {
        var params = '?id_modulo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/elimina.php' + params);
    };
    ModuloService.prototype.orden = function (orden_nuevo, id_asignatura, id_modulo, jwt) {
        var params = '?orden_nuevo=' + orden_nuevo;
        params += '&id_asignatura=' + id_asignatura;
        params += '&id_modulo=' + id_modulo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/orden.php' + params);
    };
    ModuloService.prototype.modificaModulo = function (form, id_modulo, id_asignatura, tipoConsulta) {
        var formData = new FormData();
        formData.append('modulo_nombre', form.get('nombreModulo').value);
        formData.append('modulo_numero', form.get('numeroModulo').value);
        formData.append('porcentaje', form.get('porcentaje').value);
        formData.append('id_asignatura', id_asignatura);
        formData.append('tipo_consulta', tipoConsulta);
        if (form.get('promedio_modulo').value) {
            formData.append('promedio_modulo', '1');
        }
        else {
            formData.append('promedio_modulo', '0');
        }
        var fd = new FormData();
        if (id_modulo == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/modulos/creaModuloAsignatura.php', formData);
        }
        else {
            formData.append('id_modulo', id_modulo);
            return this._httpClient.post(this.url + 'learning/modulos/edita.php', formData);
        }
    };
    ModuloService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ModuloService);
    return ModuloService;
}());



/***/ }),

/***/ "./src/app/docente/grupo/grupo-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/docente/grupo/grupo-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GrupoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoRoutingModule", function() { return GrupoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo.component */ "./src/app/docente/grupo/grupo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _grupo_component__WEBPACK_IMPORTED_MODULE_2__["GrupoComponent"] },
];
var GrupoRoutingModule = /** @class */ (function () {
    function GrupoRoutingModule() {
    }
    GrupoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GrupoRoutingModule);
    return GrupoRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/grupo/grupo.component.html":
/*!****************************************************!*\
  !*** ./src/app/docente/grupo/grupo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\" style=\"display: contents;\">\r\n  <div *ngIf=\"asignaturaGrupo\" class=\"t\" [ngClass]=\"(idRol == 3)? 'col-md-5': 'col-md-12'\">\r\n    <h6> {{asignaturaGrupo.carrera}} - grupo {{asignaturaGrupo.grupo}} <span class=\"badge\" [ngClass]=\"{'badge-danger' : asignaturaGrupo.situacion_asignatura_grupo_id == 4, 'badge-warning' : asignaturaGrupo.situacion_asignatura_grupo_id == 3 || asignaturaGrupo.situacion_asignatura_grupo_id == 2,'badge-success' : asignaturaGrupo.situacion_asignatura_grupo_id == 1}\">{{asignaturaGrupo.situacion_asignatura_grupo_descripcion}}</span></h6>\r\n    <h4 class=\"header-estudy\" style=\"width: auto;\">{{asignaturaGrupo.asignatura}}</h4>\r\n    <p style=\"margin-bottom: 0px\"> <b>{{'_vigenciaCiclo' | translate}}</b> : {{asignaturaGrupo.fecha_inicio_ciclo | date: 'dd/MM/yyyy'}} - {{asignaturaGrupo.fecha_fin_ciclo | date: 'dd/MM/yyyy'}}</p>\r\n    <p *ngIf=\"asignaturaGrupo.fecha_inicio  != '0000-00-00 00:00:00' && asignaturaGrupo.fin != '0000-00-00 00:00:00'\"> <b>{{'_vigenciaAsignatura' | translate}}</b> : {{asignaturaGrupo.fecha_inicio | date: 'dd/MM/yyyy'}} - {{asignaturaGrupo.fecha_fin | date: 'dd/MM/yyyy'}}</p>\r\n  </div>\r\n  <div class=\"col-md-12\" *ngIf=\"idRol == 1\">\r\n    <button [routerLink]=\"['/admin/grupo/calculo/'+idAsignaturaGrupo+'/2']\" class=\"btn btn-outline-info float-right\">Cálculo de promedio final</button>\r\n  </div>\r\n  <div class=\"col-md-7 cuadro\" *ngIf=\"idRol == 3\">\r\n      <div class=\"btngroup pull-right\" role=\"group\" aria-label=\"Basic example\" *ngIf=\"Privilegios\">\r\n          <div *ngFor=\"let item of Privilegios\">\r\n            <button [ngClass]=\"item['tooltip']? '_tooltip': ''\" *ngIf=\"item['type'] == 'button'\" type=\"button\" class=\"btn btn-sm  {{item['class']}}\" (click)=\"item['function']? this[item.function]() : false\">\r\n              <div *ngIf=\"item['tooltip']\" class=\"top\">\r\n                {{item['tooltip']}}\r\n                <i></i>\r\n              </div>\r\n              <h4><i [className]=\"'fa ' + item['icon']\"></i></h4>\r\n              <p><small>{{ item['label'] | translate }}</small></p>\r\n            </button>\r\n            <a [ngClass]=\"item['tooltip']? '_tooltip': ''\" *ngIf=\"item['type'] == 'router'\" [routerLink]=\"[item['url']]\" class=\"btn btn-sm  {{item['class']}}\">\r\n              <div *ngIf=\"item['tooltip']\" class=\"top\">\r\n                {{item['tooltip']}}\r\n                <i></i>\r\n              </div>\r\n              <h4><i [className]=\"'fa ' + item['icon']\"></i></h4>\r\n              <p><small>{{ item['label'] | translate }}</small></p>\r\n            </a>\r\n            <a [ngClass]=\"item['tooltip']? '_tooltip': ''\" *ngIf=\"item['type'] == 'href'\" class=\"btn btn-sm {{item['class']}} \" [href]=\"item['url']\" target=\"_new\">\r\n              <div *ngIf=\"item['tooltip']\" class=\"top\">\r\n                {{item['tooltip']}}\r\n                <i></i>\r\n              </div>\r\n              <h4><i [className]=\"'fa ' + item['icon']\"></i></h4>\r\n              <p ><small>{{ item['label'] | translate }}</small></p>\r\n            </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!cargandoGrupo && !alumnos\" class=\"alert alert-warning text-center\" role=\"alert\">{{'trabajoAsignatura' | translate}}</div>\r\n<div *ngIf=\"cargandoGrupo\">\r\n  <div >\r\n    <i style=\"margin-left: 50%; margin-top: 20%; size: 20%;\" class=\"fa fa-spin fa-spinner\"></i>\r\n    <h5 style=\"margin-left: 31%;\">{{'TiempoEspera' | translate}}</h5>\r\n  </div>\r\n</div>\r\n<div class=\"in\" *ngIf=\"!cargandoGrupo\">\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button *ngIf=\"idRol == 3\" type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipoConsulta == 1 ? 'active':''\" (click)=\"consultaAlumnos(1)\">Pendientes</button>\r\n      <button *ngIf=\"idRol == 3\" type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipoConsulta == 2 ? 'active':''\" (click)=\"consultaAlumnos(2)\">Mensajes sin leer</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipoConsulta == 3 ? 'active':''\" (click)=\"consultaAlumnos(3)\">Retroalimentaciones</button>\r\n      <button type=\"button\" class=\"btn btn-info\" [ngClass]=\"tipoConsulta == 4 ? 'active':''\" (click)=\"consultaAlumnos(4)\">Todos</button>\r\n      <a type=\"button\" class=\"btn btn-info\" [routerLink]=\"['/docente/asistencia-alumno/'+idAsignaturaGrupo]\">Asistencia</a>\r\n    </div>\r\n    <br><br>\r\n  </div>\r\n  \r\n  <div class=\"col-8\">\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" [formControl]=\"searchField\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\"> -->\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-4\">\r\n    <ngb-pagination *ngIf=\"totalAlumnos >50\" [collectionSize]=\"totalAlumnos\" [pageSize]=\"paginacion\" [(page)]=\"pagina\" \r\n        [maxSize]=\"paginacion\" [rotate]=\"true\" (pageChange)=\"consultaAlumnos(4)\"></ngb-pagination>\r\n  </div>\r\n  \r\n  <div class=\"table-responsive tabla-grupo\">\r\n    <table class=\"table table-bordered\">\r\n    <thead class=\"thead-gray\" >\r\n      <tr>\r\n        <th> # </th>\r\n        <!--th class=\"static tamT\" scope=\"col\">Nombre</th-->\r\n        <th class=\"static tamT\" scope=\"col\">Nombre</th>\r\n        <th class=\"tituloActividad first-col\">Matricula</th>\r\n        <th class=\"tituloActividad\" scope=\"col\">Mensajes</th>\r\n        <th class=\"tituloActividad\" [ngClass]=\"_actividad.tipo_actividad_id == 5 ? 'table-info':'' \" *ngFor=\"let _actividad of actividad; let i = index;\">\r\n          {{_actividad.actividad_nombre}}<br>\r\n          <i *ngIf=\"tipoConsulta == 4 && asignaturaGrupo && asignaturaGrupo.situacion_asignatura_grupo_id != 4\" \r\n            (click)=\"seleccionaSeccion(i, _actividad.modulo_id,_actividad.actividad_id,_actividad.tipo_actividad_id)\" style=\"cursor: pointer;\" class=\"fa fa-lg text-primary\" \r\n            [ngClass]=\"_actividad.tipo_actividad_id == 5? 'fa-calculator' : 'fa-pencil'\" placement=\"top\" \r\n            [ngbTooltip]=\"_actividad.tipo_actividad_id == 5? 'Calcular calificaciones': 'Editar calificaciones'\"></i> \r\n          <i placement=\"top\" ngbTooltip=\"Mostrar al alumno\" *ngIf=\"tipoConsulta == 4 && _actividad.tipo_actividad_id == 5\" class=\"fa fa-lg ml-2\" [ngClass]=\"_actividad.visible == 1? 'fa-eye' : (_actividad.visible == 0? 'fa-eye-slash': '')\" \r\n            style=\"cursor: pointer;\" (click)=\"editaVisible(i, _actividad.visible, _actividad.actividad_id)\"></i>\r\n            <!-- <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n              Tooltip on top\r\n            </button> -->\r\n        </th>\r\n        <th class=\"table-info tituloActividad\">\r\n          <b>CALIFICACIÓN FINAL EN MATERIA</b> <br *ngIf=\"idRol == 1 || idRol == 3\">\r\n          <i *ngIf=\"tipoConsulta == 4 && (idRol == 1 || idRol == 3)\" (click)=\"editaCalificacion = !editaCalificacion\" style=\"cursor: pointer;\" class=\"fa fa-pencil fa-lg text-primary\"></i>\r\n        </th>\r\n        <!--th class=\"tituloActividad\" *ngIf=\"actividadSQA && actividadSQA.length == 3\">Ejercicios SQA</th-->\r\n        <th class=\"tituloActividad\" >Archivos</th>\r\n        <th class=\"tituloActividad\" >Notas</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody >\r\n      <!--tr *ngIf=\"(alumnos | filter: search).length === 0\">\r\n        <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n      </tr-->\r\n      <tr *ngIf=\"!(alumnos && alumnos.length)\">\r\n        <td colspan=\"20\" class=\"text-center p-3\">\r\n          <span *ngIf=\"tipoConsulta == 1\"> <i class=\"fa fa-check\"></i>Sin actividades pendientes </span>\r\n          <span *ngIf=\"tipoConsulta == 2\"> <i class=\"fa fa-check\"></i>Sin Mensajes pendientes </span>\r\n          <span *ngIf=\"tipoConsulta == 3\"> <i class=\"fa fa-check\"></i>Aún no cuentas con alumnos </span>\r\n        </td>\r\n      </tr>\r\n      <tr *ngFor=\"let _alumno of alumnos; let i = index\">\r\n        <td class=\"text-center align-middle\" >{{i + 1}}</td> \r\n        <td class=\"align-middle static tam\">\r\n          <a  href=\"javascript:void(0)\" [routerLink]=\"['../../../../dashboard/'+_alumno.alumno_id]\">\r\n            {{_alumno.primer_apellido}}\r\n            {{_alumno.segundo_apellido}}\r\n            {{_alumno.nombre}}\r\n          </a> \r\n        </td>\r\n        <td class=\"text-right align-middle\" >{{_alumno.clave_alumno}}</td>\r\n        <td>\r\n          <!-- <a [routerLink]=\"['../../../mensajeria/'+_alumno.materia_id]\" class=\"notification\">\r\n            <span  class=\"badge\" \r\n              [ngClass]=\"[_alumno.numero_mensajes > 0? 'badge-success' : 'badge-secondary']\">{{_alumno.numero_mensajes}}</span>\r\n            <i class=\"fa fa-envelope\"></i>\r\n          </a> -->\r\n          <a href=\"javascript:void(0)\" class=\"notification\" (click)=\"openMensajeria(modalMensajeria, _alumno.materia_id)\">\r\n            <span *ngIf=\"_alumno.numero_mensajes.nuevos > 0\" class=\"badge\" \r\n                [ngClass]=\"[_alumno.numero_mensajes.nuevos > 0?  'badge-info' : 'badge-secondary']\">{{_alumno.numero_mensajes.nuevos}}</span>\r\n            <span *ngIf=\"_alumno.numero_mensajes.vistos > 0 && _alumno.numero_mensajes.nuevos == 0\" class=\"badge\" style=\"color:#71deff;\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i></span>\r\n            <i class=\"fa fa-envelope\"></i>  \r\n          </a>\r\n        </td>\r\n        <td class=\"text-center align-middle\"  *ngFor=\"let _calificacion of _alumno.actividadesAlumno; let j = index;\">\r\n          <!--div *ngIf=\"!actividad[j]['editar']\"-->\r\n            <a  *ngIf=\"tipoConsulta != 3 && _calificacion && _calificacion.estatus_actividad_id == 0 && !actividad[j]['editar'] \" [routerLink]=\"[urlRedirect+'/actividad/'+_calificacion.actividad_id+'/'+_alumno.materia_id]\">\r\n              <span title=\"{{actividad[j].actividad_nombre}} | Sin realizar\" *ngIf=\"_calificacion.tipo_actividad_id == 2\">\r\n                <i class=\"fa fa-circle-o \" style=\"color:  lightblue;\"></i>\r\n              </span>\r\n              <span title=\"{{actividad[j].actividad_nombre}} | Sin realizar\" *ngIf=\"_calificacion.tipo_actividad_id == 3\">\r\n                <i  class=\"fa fa-circle  icon-incompleto\" ></i>\r\n                <i  class=\"fa fa-circle  icon-incompleto\" ></i>\r\n              </span>\r\n            </a>\r\n            <a class=\"actividad\" \r\n            [ngClass]=\"[_calificacion.estatus_actividad_id == 3 || _calificacion.estatus_actividad_id == 6 ? 'actividad-danger': '', _calificacion.estatus_actividad_id == 5 ? 'actividad-warning': '']\" \r\n            *ngIf=\"tipoConsulta != 3 && _calificacion && _calificacion.estatus_actividad_id != 0 && !actividad[j]['editar']\" [routerLink]=\"[urlRedirect+'/actividad/'+_calificacion.actividad_id+'/'+_alumno.materia_id]\" >\r\n              <span   *ngIf=\"_calificacion.tipo_actividad_id== 2\"  title=\" {{_calificacion.estatus_actividad}}\" >\r\n                <i *ngIf=\"!_calificacion.calificacion\" class=\"fa {{_calificacion.icono}}\" ></i>\r\n                <span *ngIf=\"_calificacion.calificacion\">{{_calificacion.calificacion}}</span>\r\n              </span>\r\n              <span   *ngIf=\"_calificacion.calificacion && _calificacion.tipo_actividad_id== 5\"  [ngClass]=\"_calificacion.calificacion >= 6  ? 'text-success' : 'text-danger'\"  title=\" {{_calificacion.estatus_actividad}}\" >\r\n                <span >{{_calificacion.calificacion}}</span>\r\n              </span>\r\n              <span *ngIf=\"_calificacion.tipo_actividad_id== 3\">\r\n                <i *ngIf=\"_calificacion.estatus_actividad_id == 3\"  ></i>\r\n                <span  *ngIf=\"_calificacion.estatus_actividad_id == 4\">{{_calificacion.calificacion}}</span>\r\n                <span *ngIf=\"_calificacion.estatus_actividad_id == 7\">\r\n                  <i  class=\"fa fa-circle  icon-estudy\" ></i>\r\n                  <i  class=\"fa fa-circle  icon-incompleto\" ></i>\r\n                </span>\r\n                <span *ngIf=\"_calificacion.estatus_actividad_id == 1\">\r\n                  <i  class=\"fa fa-circle  icon-incompleto\" ></i>\r\n                  <i  class=\"fa fa-circle  icon-incompleto\" ></i>\r\n                </span>\r\n              </span>\r\n            </a>\r\n            <a  *ngIf=\"tipoConsulta == 3\">\r\n              <button [routerLink]=\"[urlRedirect+'/actividad/'+_calificacion.actividad_id+'/'+_alumno.materia_id]\" *ngIf=\"_calificacion.nuevos > 0\" class=\"btn btn-sm btn-success\">{{_calificacion.nuevos}} <i  class=\"fa fa-exchange\" ></i> </button>\r\n              <button [routerLink]=\"[urlRedirect+'/actividad/'+_calificacion.actividad_id+'/'+_alumno.materia_id]\" *ngIf=\"_calificacion.nuevos == 0 && _calificacion.vistos > 0  \" class=\"btn btn-sm btn-info\"><i  class=\"fa fa-exchange\" ></i> </button>\r\n              <span *ngIf=\"_calificacion.nuevos == 0 && _calificacion.vistos == 0  \" ><i  class=\"fa fa-exchange\" ></i> </span>\r\n            </a>\r\n          <!--/div-->\r\n\r\n          <div *ngIf=\"actividad[j]['editar']\">\r\n            <a class=\"text-decoration-none\" *ngIf=\"tipoConsulta != 3 && _calificacion && _calificacion.estatus_actividad_id == 0 \">\r\n              <input (blur)=\"modificaCalificacion(_calificacion, $event, _alumno.materia_id, i, j)\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width:50px;margin:0px auto;display:block;\">\r\n            </a>\r\n            <div class=\"actividad\"\r\n            [ngClass]=\"[_calificacion.estatus_actividad_id == 3 || _calificacion.estatus_actividad_id == 6 ? 'actividad-danger': '', _calificacion.estatus_actividad_id == 5 ? 'actividad-warning': '']\" \r\n            *ngIf=\"tipoConsulta != 3 && _calificacion && _calificacion.estatus_actividad_id != 0\">\r\n              <span *ngIf=\"_calificacion.tipo_actividad_id== 2 || _calificacion.tipo_actividad_id== 5 \" title=\" {{_calificacion.estatus_actividad}}\" >\r\n                <input (blur)=\"modificaCalificacion(_calificacion, $event, _alumno.materia_id, i, j)\" [value]=\"_calificacion.calificacion? _calificacion.calificacion: ''\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width: 50px;margin:0px auto;display:block;\">\r\n              </span>\r\n              <span *ngIf=\"_calificacion.tipo_actividad_id== 3\">\r\n                <i *ngIf=\"_calificacion.estatus_actividad_id == 3\"  ></i>\r\n                <span *ngIf=\"_calificacion.estatus_actividad_id == 4\">\r\n                  <input (blur)=\"modificaCalificacion(_calificacion, $event, _alumno.materia_id, i, j)\" [value]=\"_calificacion.calificacion? _calificacion.calificacion: ''\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width: 50px;margin:0px auto;display:block;\">\r\n                </span>\r\n                <span *ngIf=\"_calificacion.estatus_actividad_id == 7\">\r\n                  <input (blur)=\"modificaCalificacion(_calificacion, $event, _alumno.materia_id, i, j)\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width: 50px;margin:0px auto;display:block;\">\r\n                </span>\r\n                <span *ngIf=\"_calificacion.estatus_actividad_id == 1\">\r\n                  <input (blur)=\"modificaCalificacion(_calificacion, $event, _alumno.materia_id, i, j)\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width: 50px;margin:0px auto;display:block;\">\r\n                </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n        </td>\r\n        <td class=\"text-center align-middle font-weight-bold\" [ngClass]=\"_alumno.calificacion >= 6 ? 'text-success' : 'text-danger'\">\r\n          <span *ngIf=\"!editaCalificacion\">{{_alumno.calificacion}}</span>\r\n          <input *ngIf=\"editaCalificacion\" [value]=\"_alumno.calificacion\" (blur)=\"modificaCalificacionFinal(_alumno, $event, i)\" type=\"text\" class=\"form-control form-control-sm\" style=\"max-width:50px;margin:0px auto;display:block;\">\r\n\r\n        </td>\r\n        <td class=\"text-center align-middle\">\r\n          <button type=\"button\" class=\"btn btn-estudy\" (click)=\"openModalArchivo(contentModalA,_alumno.materia_id,_alumno.alumno_id)\"><i class=\"fa fa-file\"></i></button>\r\n        </td>\r\n\r\n        <td class=\"text-center align-middle\">\r\n          <a  class=\"btn btn-estudy\" [routerLink]=\"[urlRedirect+'/notas/'+_alumno.materia_id]\"  ><i class=\"fa fa-sticky-note-o\"></i></a>\r\n        </td>\r\n\r\n        <!--td  *ngIf=\"actividadSQA && actividadSQA.length == 3\"  class=\"text-center align-middle\">\r\n          <a  [ngClass]=\"!_alumno.calificacionSQA && _alumno.actividadesSQA == 3 ? 'actividad actividad-danger':''\" [routerLink]=\"['../../../actividadSQA/'+_alumno.materia_id+'/'+_alumno.alumno_id]\" >\r\n            \r\n            <span *ngIf=\"_alumno.calificacionSQA\">{{_alumno.calificacionSQA}}</span>\r\n            <span title=\"{{actividad[i].actividad_nombre}} |Pendiente de calificar\" *ngIf=\"!_alumno.calificacionSQA && _alumno.actividadesSQA == 3\"><i class=\"fa fa-pencil-square-o\" ></i></span>\r\n            <span *ngIf=\"_alumno.actividadesSQA != 3\">\r\n                <i  *ngIf=\"_alumno.actividadesSQA > 0\" class=\"fa fa-circle icon-estudy\" ></i>\r\n                <i  *ngIf=\"_alumno.actividadesSQA > 1\" class=\"fa fa-circle icon-estudy\" ></i>\r\n                <i  *ngIf=\"_alumno.actividadesSQA < 1\" class=\"fa fa-circle icon-incompleto\"></i>\r\n                <i  *ngIf=\"_alumno.actividadesSQA < 2\" class=\"fa fa-circle icon-incompleto\"></i>\r\n                <i  class=\"fa fa-circle icon-incompleto\"></i>\r\n              </span>\r\n          </a>\r\n      </td-->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  \r\n  \r\n\r\n  <ng-template #contentModalA let-c=\"close\" let-d=\"dismiss\"  >\r\n\r\n    <div class=\"modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"row alert alert-info\">\r\n                <app-encabezado-persona *ngIf=\"idAlumnoSelected\" [idPersona]=\"idAlumnoSelected\"></app-encabezado-persona>\r\n            </div>\r\n        </div>\r\n        <h5 class=\"text-center p-3\" *ngIf=\"!archivos || archivos.length==0\">No hay Archivos</h5>\r\n\r\n              <table class=\"table table-borderless\" *ngIf=\"archivos && archivos.length>0\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\" class=\"header-estudy\">Actividad</th>\r\n                      <th scope=\"col\" class=\"header-estudy\">Archivo</th>\r\n                      <th scope=\"col\" class=\"header-estudy\">Fecha</th>\r\n                      <th scope=\"col\" class=\"header-estudy\">Calificación</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody *ngFor=\"let archivo of archivos\">\r\n                    <tr>\r\n                      <td><p class=\"header-estudy\">{{archivo.actividad_nombre}}</p></td>\r\n                      <td><app-archivo *ngIf=\"archivo.url_archivo\" [urlBase]=\"archivo.url_archivo\"></app-archivo></td>\r\n                      <td>{{archivo.fecha_creacion | date : \"dd/MM/yyyy HH:mm\"}}</td>\r\n                      <td>{{archivo.calificacion}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n   </div>              \r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary btn\" (click)=\"c('Close click')\">Salir</button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n  \r\n  <ng-template #modalMensajeria let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <app-mensajeria [activo]=\"0\" [idMateria]=\"idMateriaAlumno\" (sucessEvent)=\"getMensajeEnviado($event)\"></app-mensajeria>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #modalCalificacion let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Calcular calificación</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row justify-content-center\"  *ngIf=\"!formActividades\" >\r\n        <div class=\"alert alert-warning col-6 text-center\">\r\n          <p>No se cuenta con actividades para promediar en este bloque</p>\r\n          <button (click)=\"ingresarCalificacionesDirecto()\" class=\"btn btn-warning\">Agregar la calificación directamente</button>\r\n        </div>\r\n      </div>\r\n      <form class=\"row\" [formGroup]=\"formActividades\" *ngIf=\"formActividades\" (ngSubmit)=\"enviarPorcentajes()\">\r\n        <div class=\"col-12\">\r\n          <div class=\"table-responsive\">\r\n            <table formArrayName=\"items\" class=\"table table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Actividad</th>\r\n                  <th>Porcentaje</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of items.controls; let i = index\"\r\n                  [formGroupName]=\"i\">\r\n                  <td>{{actividadesModulo[i]['actividad_nombre']}}</td>\r\n                  <td><input class=\"form-control\" type=\"number\" formControlName=\"porcentaje\"></td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>Suma: {{getPorcentaje()}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 my-2\" *ngIf=\"getPorcentaje() > 100\">\r\n          <div class=\"alert alert-danger\">\r\n            La ponderación excede el 100% ¿desea continuar de todos modos? <input type=\"checkbox\" (change)=\"cambioCheckbox($event)\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 mb-3\">\r\n          <button (click)=\"ingresarCalificacionesDirecto()\" class=\"btn btn-default btn-sm m-1\">Agregar la calificación directamente</button>\r\n          <button class=\"btn btn-success pull-right\" [disabled]=\"(sumaTotal < 100 || btnBloqueo) || (sumaTotal > 100 && !banderaCheckbox)\">Guardar información</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n    </div>\r\n</ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/docente/grupo/grupo.component.scss":
/*!****************************************************!*\
  !*** ./src/app/docente/grupo/grupo.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.cuadro {\n  margin-left: -25px;\n  border: 0px solid #aaa;\n  background: #f1f2f3;\n  overflow: auto;\n  box-sizing: border-box;\n  padding: 0px;\n  height: 110px; }\n\n@media only screen and (max-width: 768px) {\n  .cuadro {\n    margin-left: 0px;\n    border: 0px solid #aaa;\n    background: #f1f2f3;\n    overflow: auto;\n    box-sizing: border-box;\n    padding: 0px;\n    height: 110px; } }\n\n.cuadro::-webkit-scrollbar {\n  -webkit-appearance: none; }\n\n.cuadro::-webkit-scrollbar:vertical {\n  width: 10px; }\n\n.cuadro::-webkit-scrollbar-button:increment, .cuadro::-webkit-scrollbar-button {\n  display: none; }\n\n.cuadro::-webkit-scrollbar:horizontal {\n  height: 10px; }\n\n.cuadro::-webkit-scrollbar-thumb {\n  background-color: #007bff;\n  border-radius: 20px;\n  border: 2px solid #f1f2f3; }\n\n.cuadro::-webkit-scrollbar-track {\n  border-radius: 10px; }\n\n.alert-sin-contenido {\n  color: #721c24;\n  background-color: #f8d7da; }\n\n.tituloActividad {\n  font-size: 10px;\n  text-align: center; }\n\n.nombreAlumno {\n  font-size: 14px;\n  padding: 0.75rem; }\n\n.icon-incompleto {\n  color: lightgray; }\n\n.tabla-grupo td {\n  padding: 0; }\n\n.tabla-grupo td > a.actividad {\n  padding: 0.75rem;\n  display: block; }\n\na.actividad-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n\na.actividad-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n\na.actividad-borrador {\n  color: lightblue; }\n\na.actividad-invalido {\n  color: #bd2130 !important; }\n\n.notification {\n  background-color: none;\n  text-decoration: none;\n  padding: 15px 26px;\n  position: relative;\n  display: inline-block;\n  border-radius: 2px; }\n\n.notification .badge {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  padding: 2px; }\n\n.t {\n  overflow: auto;\n  white-space: initial;\n  text-overflow: ellipsis;\n  word-wrap: break-word; }\n\n.btngroup {\n  position: absolute;\n  display: inline-flex;\n  vertical-align: middle; }\n\n.tabla-grupo table {\n  display: block;\n  overflow-x: auto; }\n\n.static {\n  position: absolute;\n  background-color: white;\n  z-index: 2; }\n\n.first-col {\n  padding-left: 270px !important; }\n\n.tamT {\n  width: 222px;\n  height: 11.1%;\n  background-color: white;\n  padding: 0.75rem; }\n\n.tam {\n  width: 225px;\n  height: 55px;\n  background-color: white; }\n\n@media screen and (max-width: 992px) {\n  .in {\n    margin-top: 120px; } }\n\n._tooltip {\n  display: inline-block;\n  position: relative; }\n\n._tooltip .top {\n  min-width: 200px;\n  top: -13%;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  padding: 10px 20px;\n  color: #FFFFFF;\n  background-color: #007bff;\n  font-weight: normal;\n  font-size: 13px;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 10;\n  box-sizing: border-box;\n  border: 1px solid #007bff; }\n\n._tooltip .top i {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -12px;\n  width: 24px;\n  height: 12px;\n  overflow: hidden; }\n\n._tooltip .top i::after {\n  content: '';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  background-color: #007bff;\n  border: 1px solid #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9ncnVwby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvY2VudGUvZ3J1cG8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXHNjcm9sbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jZW50ZS9ncnVwby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxkb2NlbnRlXFxncnVwb1xcZ3J1cG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDckREO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsZUFBYTtFQUNiLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUVEO0VBQ0U7SUFDRSxpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLG9CQUFtQjtJQUNuQixlQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGFBQVk7SUFDWixjQUFhLEVBQ2QsRUFBQTs7QUFHSDtFQUNFLHlCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLFlBQVUsRUFDWDs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQzNDSDtFQUNJLGVBQWM7RUFDZCwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGVBQWMsRUFHakI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDSSxlQUFhO0VBQ2IscUJBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixzQkFBb0IsRUFDdkI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLCtCQUE2QixFQUM5Qjs7QUFFRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixhQUFZO0VBQ1osd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0U7SUFDSSxrQkFBaUIsRUFDcEIsRUFBQTs7QUFHTDtFQUNFLHNCQUFvQjtFQUNwQixtQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxpQkFBZTtFQUNmLFVBQVM7RUFDVCxVQUFTO0VBQ1Qsa0NBQWdDO0VBQ2hDLG1CQUFpQjtFQUNqQixlQUFhO0VBQ2IsMEJBQXdCO0VBQ3hCLG9CQUFrQjtFQUNsQixnQkFBYztFQUNkLG1CQUFpQjtFQUNqQixtQkFBaUI7RUFDakIsWUFBVTtFQUNWLHVCQUFxQjtFQUNyQiwwQkFBd0IsRUFHekI7O0FBR0Q7RUFDRSxtQkFBaUI7RUFDakIsVUFBUTtFQUNSLFVBQVE7RUFDUixtQkFBaUI7RUFDakIsWUFBVTtFQUNWLGFBQVc7RUFDWCxpQkFBZSxFQUNoQjs7QUFFRDtFQUNFLFlBQVU7RUFDVixtQkFBaUI7RUFDakIsWUFBVTtFQUNWLGFBQVc7RUFDWCxVQUFRO0VBQ1IsK0NBQTRDO0VBQzVDLDBCQUF3QjtFQUN4QiwwQkFBd0IsRUFFekIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2dydXBvL2dydXBvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kc2Nob29sLWNvbG9yOiAjMWU1Nzk5O1xyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSAgIHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7IFxyXG59XHJcblxyXG4uYWxlcnQtZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcblxyXG4uaWNvbi1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcbi5idG4tZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC14bCAubW9kYWwtZGlhbG9nIHsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mb25kbyB7IFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7IFxyXG59IiwiLmN1YWRybyB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjYWFhO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjJmMztcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmN1YWRybyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICNhYWE7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYyZjM7XHJcbiAgICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIH0gXHJcbiAgICB9ICBcclxuXHJcbiAgLmN1YWRybzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY3VhZHJvOjotd2Via2l0LXNjcm9sbGJhcjp2ZXJ0aWNhbCB7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY3VhZHJvOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aW5jcmVtZW50LC5jdWFkcm86Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmN1YWRybzo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdWFkcm86Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2YxZjJmMztcclxuICB9XHJcbiAgXHJcbiAgLmN1YWRybzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgIFxyXG4gIH1cclxuICBcclxuICAiLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9zY3JvbGwuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5hbGVydC1zaW4tY29udGVuaWRve1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG59XHJcbi50aXR1bG9BY3RpdmlkYWR7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vbWJyZUFsdW1ub3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbn1cclxuLmljb24taW5jb21wbGV0b3tcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7ICAgXHJcbn1cclxuXHJcbi50YWJsYS1ncnVwbyB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGFibGEtZ3J1cG8gdGQgPiBhLmFjdGl2aWRhZHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBcclxufVxyXG5cclxuYS5hY3RpdmlkYWQtZGFuZ2Vye1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG59XHJcblxyXG5hLmFjdGl2aWRhZC13YXJuaW5ne1xyXG4gICAgY29sb3I6ICM4NTY0MDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xyXG59XHJcblxyXG5hLmFjdGl2aWRhZC1ib3JyYWRvcntcclxuICAgIGNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuYS5hY3RpdmlkYWQtaW52YWxpZG97XHJcbiAgICBjb2xvcjogI2JkMjEzMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHggMjZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4udHtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTppbml0aWFsO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufVxyXG5cclxuLmJ0bmdyb3Vwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4udGFibGEtZ3J1cG8gdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc3RhdGljIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgLmZpcnN0LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3MHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRhbVR7XHJcbiAgICB3aWR0aDogMjIycHg7XHJcbiAgICBoZWlnaHQ6IDExLjElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIH1cclxuICAudGFte1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uX3Rvb2x0aXAge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uX3Rvb2x0aXAgLnRvcCB7XHJcbiAgbWluLXdpZHRoOjIwMHB4OyBcclxuICB0b3A6IC0xMyU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4gIGNvbG9yOiNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICBmb250LXNpemU6MTNweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB6LWluZGV4OjEwO1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICBib3JkZXI6MXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgLy8gYm94LXNoYWRvdzowIDFweCA4cHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gIC8vIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5fdG9vbHRpcCAudG9wIGkge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDoxMDAlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIG1hcmdpbi1sZWZ0Oi0xMnB4O1xyXG4gIHdpZHRoOjI0cHg7XHJcbiAgaGVpZ2h0OjEycHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG59XHJcblxyXG4uX3Rvb2x0aXAgLnRvcCBpOjphZnRlciB7XHJcbiAgY29udGVudDonJztcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMnB4O1xyXG4gIGhlaWdodDoxMnB4O1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwN2JmZjtcclxuICBib3JkZXI6MXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgLy8gYm94LXNoYWRvdzowIDFweCA4cHggcmdiYSgwLDAsMCwwLjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/docente/grupo/grupo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/docente/grupo/grupo.component.ts ***!
  \**************************************************/
/*! exports provided: GrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoComponent", function() { return GrupoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_grupo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/modulo.service */ "./src/app/administracion/carga-actividades/services/modulo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { privilegiosDocente } from "../../models/controlEscolar/privilegiosDocente";



var GrupoComponent = /** @class */ (function () {
    function GrupoComponent(_usuarioService, _grupoService, router, route, modalService, _moduloService, _fb) {
        var _this = this;
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this._moduloService = _moduloService;
        this._fb = _fb;
        this.paginacion = 50;
        this.pagina = 1;
        this.verRetro = false;
        this.cargandoGrupo = true;
        this.editaCalificacion = false;
        this.sumaTotal = 0;
        this.btnBloqueo = false;
        this.banderaCheckbox = false;
        this.idRol = this._usuarioService.getRol().rol_id;
        this.subscription = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.setDatos();
            }
        });
        if (this.idRol == 1) {
            this.tipoConsulta = 4;
            this.urlRedirect = '/admin/grupo';
        }
        else if (this.idRol == 3) {
            this.tipoConsulta = this.route.snapshot.paramMap.get('id2');
            this.urlRedirect = '/docente';
            this.title = 'Alumnos en grupo';
            this._usuarioService.pushBreadcum(this.title, "", 2);
        }
        if (localStorage.getItem('selectedMateria') != undefined &&
            localStorage.getItem('seriacionActividad') != undefined &&
            localStorage.getItem('modulos') != undefined) {
            localStorage.removeItem("selectedMateria");
            localStorage.removeItem("seriacionActividad");
            localStorage.removeItem("modulos");
        }
    }
    GrupoComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.idDocente = this.identity.persona_id;
        if (this.identity.docente) {
            this.docente = this.identity.docente;
            this.edicion_contenido = parseInt(this.identity.docente.edicion_contenido);
        }
        else {
            this.docente = null;
            this.edicion_contenido = 0;
        }
    };
    GrupoComponent.prototype.getMensajeEnviado = function ($event) {
        var enviado = $event;
        if (enviado) {
            this.consultaAlumnos(this.tipoConsulta);
        }
    };
    GrupoComponent.prototype.setDatos = function () {
        var _this = this;
        if (this._grupoService.getSelectedAsignaturaGrupo())
            this.idAsignatura = this._grupoService.getSelectedAsignaturaGrupo().asignatura_id;
        else
            this.idAsignatura = null;
        if (sessionStorage.getItem('situacionAsignaturaGrupo'))
            sessionStorage.removeItem('situacionAsignaturaGrupo');
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.searchField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function (data) {
            _this.consultaAlumno(data);
        });
        this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
        this._grupoService.consultaPrivilegiosDocente().subscribe(function (response) {
            if (response && response['status']) {
                _this.cargaBloques = response['cargaBloques'];
                _this.Privilegios = response['privilegios'];
                if (!_this.edicion_contenido) {
                    _this.Privilegios = _this.Privilegios.filter(function (p) { return p.i != "1"; });
                }
                _this.Privilegios.forEach(function (privilegio) {
                    if (privilegio['id'] != null) {
                        var lastIndex = privilegio['url'].lastIndexOf('/');
                        privilegio['url'] = privilegio['url'].substring(0, lastIndex + 1);
                        privilegio['url'] = privilegio['url'] + _this.idAsignaturaGrupo;
                    }
                });
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
        this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(function (response) {
            _this.asignaturaGrupo = response['grupo'];
            sessionStorage.setItem('situacionAsignaturaGrupo', _this.asignaturaGrupo.situacion_asignatura_grupo_id);
            if (!_this.asignaturaGrupo.asignatura_id && !_this.idAsignaturaGrupo) {
                _this.router.navigate(['/docente/authDocente']);
            }
        }, function (error) {
            console.log(error);
        });
        this.consultaTotalAlumnos();
        this.consultaAlumnos(this.tipoConsulta);
    };
    GrupoComponent.prototype.consultaTotalAlumnos = function () {
        var _this = this;
        this._grupoService.totalAlumnos(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalAlumnos = response['totalAlumnos'];
            }
        }, function (error) {
        });
    };
    GrupoComponent.prototype.consultaAlumnos = function (tipoConsulta) {
        var _this = this;
        this.cargandoGrupo = true;
        this.tipoConsulta = tipoConsulta;
        var ini = (this.pagina - 1) * this.paginacion;
        var fin = this.pagina * this.paginacion;
        this._grupoService.consultaAlumnos(this.idAsignaturaGrupo, this.idAsignatura, tipoConsulta, ini, fin).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividades'];
                _this.actividad.forEach(function (item) { item['editar'] = false; });
                _this.actividadSQA = response['actividadesSQA'];
                _this.alumnos = response['Alumnos'];
            }
            else {
                _this.alumnos = null;
            }
            _this.cargandoGrupo = false;
        }, function (error) {
            console.log(error);
        });
    };
    GrupoComponent.prototype.openModalArchivo = function (content, id, idAlumno) {
        var _this = this;
        this.idAlumnoSelected = idAlumno;
        this._grupoService.consultaArchivos(id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.archivos = response['materiaArchivos'];
                var idArchivoTmp_1 = 0;
                _this.archivos.forEach(function (_archivo) {
                    if (idArchivoTmp_1 == _archivo.pregunta_id) {
                        _archivo.verEncabezado = false;
                    }
                    else {
                        _archivo.verEncabezado = true;
                    }
                    idArchivoTmp_1 = _archivo.pregunta_id;
                }.bind(_this));
            }
            else {
                _this.archivos = null;
            }
        }, function (error) {
            console.log(error);
        });
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    GrupoComponent.prototype.vistaAlumno = function () {
        var _this = this;
        this._grupoService.changeMenu.emit({ menu: 1 });
        // this.router.navigate(['/docente/vista-alumno/1']);
        this._grupoService.seleccionaMateriaDummy(this.idAsignaturaGrupo, this.jwt).then(function (data) {
            _this.router.navigate(['/materia/']);
        });
    };
    GrupoComponent.prototype.openMensajeria = function (content, id_materia) {
        var _this = this;
        this.idMateriaAlumno = id_materia;
        setTimeout(function () {
            _this.modalService.open(content, { backdrop: 'static', size: 'lg' });
        }, 100);
    };
    GrupoComponent.prototype.vistaContenido = function () {
        var _this = this;
        if (this.edicion_contenido == "1") {
            if (this.cargaBloques) {
                this.router.navigate(['/docente/modulosAsignaturaGrupo/' + this.idAsignaturaGrupo]);
            }
            else {
                var nombre_modulo = 'Actividades del grupo ' + this.asignaturaGrupo.grupo;
                this._grupoService.consultaModulos(this.idAsignaturaGrupo, nombre_modulo, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        var modulo = response['modulo'];
                        _this.router.navigate(['/docente/modulosAsignaturaGrupo/' + _this.idAsignaturaGrupo + '/actividades/' + modulo.modulo_id]);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            this.router.navigate(['/docente/contenido-asignatura/' + this.idAsignatura]);
        }
    };
    GrupoComponent.prototype.seleccionaSeccion = function (index, id_modulo, id_actividad, tipo) {
        var _this = this;
        if (tipo == 2) {
            this.editaActividad(index);
        }
        else if (tipo == 5) {
            this.banderaCheckbox = false;
            this.idModuloSeleccionado = id_modulo;
            this.idActividadSeleccionada = id_actividad;
            this.indexSeleccionado = index;
            this._moduloService.consultaActividad(this.idModuloSeleccionado, 0, 2).subscribe(function (response) {
                if (response && response['status']) {
                    _this.actividadesModulo = response['Actividades'].filter(function (f) { return f.tipo_actividad_id != 5; });
                    _this.formActividades = _this._fb.group({
                        items: _this._fb.array([])
                    });
                    _this.actividadesModulo.forEach(function (actividad) {
                        _this.addItem(actividad.actividad_id);
                    });
                }
                else {
                    _this.actividadesModulo = [];
                    _this.formActividades = null;
                }
            }, function (error) {
                console.log(error);
            });
            this.modalService.open(this.modalCalificacion, { size: 'lg' });
        }
    };
    GrupoComponent.prototype.ingresarCalificacionesDirecto = function () {
        this.modalService.dismissAll();
        this.actividad[this.indexSeleccionado].tipo_actividad_id = 2;
        this.editaActividad(this.indexSeleccionado);
    };
    GrupoComponent.prototype.editaActividad = function (index) {
        this.actividad[index]['editar'] = !this.actividad[index]['editar'];
    };
    Object.defineProperty(GrupoComponent.prototype, "items", {
        get: function () {
            return this.formActividades.get('items');
        },
        enumerable: true,
        configurable: true
    });
    GrupoComponent.prototype.addItem = function (id_actividad) {
        this.items.push(this._fb.group({
            actividad_id: [id_actividad, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            porcentaje: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }));
    };
    GrupoComponent.prototype.getPorcentaje = function () {
        var _this = this;
        var suma = 0;
        this.items.value.forEach(function (item) {
            suma += item.porcentaje;
            _this.sumaTotal = suma;
        });
        return this.sumaTotal;
    };
    GrupoComponent.prototype.enviarPorcentajes = function () {
        var _this = this;
        this.btnBloqueo = true;
        this._grupoService.guardarPorcentajes(this.items.value, this.idAsignaturaGrupo, this.idModuloSeleccionado, this.idActividadSeleccionada).subscribe(function (response) {
            if (response && response['status']) {
                _this.setDatos();
                _this.modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
            }
            _this.btnBloqueo = false;
        }, function (error) {
            console.log(error);
        });
    };
    // itemsTabla(id_actividad) {
    //   return this._fb.group({
    //     actividad_id: [id_actividad, Validators.required],
    //     porcentaje: ['0', Validators.required],
    //   });
    // }
    GrupoComponent.prototype.modificaCalificacion = function (datos, event, id_materia, i, j) {
        var _this = this;
        var calificacion = event.target.value;
        var id_actividad = datos.actividad_id;
        if (calificacion != '' && calificacion) {
            this._grupoService.modificaCalificacion(id_actividad, id_materia, calificacion).subscribe(function (response) {
                if (response && response['status']) {
                    _this.alumnos[i]['actividadesAlumno'][j]['calificacion'] = Number.parseFloat(calificacion).toFixed(2);
                    _this.alumnos[i]['actividadesAlumno'][j]['estatus_actividad_id'] = 9;
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    GrupoComponent.prototype.modificaCalificacionFinal = function (alumno, event, index) {
        var _this = this;
        var calificacion = event.target.value;
        var id_alumno = alumno.alumno_id;
        if (calificacion != '' && calificacion) {
            this._grupoService.modificaCalificacionFinal(id_alumno, calificacion, this.idAsignaturaGrupo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.alumnos[index]['calificacion'] = Number.parseFloat(calificacion).toFixed(2);
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    GrupoComponent.prototype.calculoCalificacion = function () {
        this.router.navigate(['/docente/calculo/' + this.idAsignaturaGrupo + '/2']);
    };
    GrupoComponent.prototype.consultaAlumno = function (busqueda) {
        var _this = this;
        this.alumnos = null;
        this.cargandoGrupo = true;
        this._grupoService.busquedaAlumno(this.idAsignaturaGrupo, busqueda).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumnos = response['Alumnos'];
            }
            else
                _this.alumnos = null;
            _this.cargandoGrupo = false;
        }, function (error) {
            console.log(error);
        });
    };
    GrupoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GrupoComponent.prototype.editaVisible = function (index, visible, id_actividad) {
        var _this = this;
        visible == '1' ? visible = '0' : (visible == '0' ? visible = '1' : null);
        this._grupoService.editaVisible(visible, id_actividad).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad[index]['visible'] = visible;
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    GrupoComponent.prototype.cambioCheckbox = function (evt) {
        var checked = evt.target.checked;
        if (checked) {
            this.banderaCheckbox = true;
        }
        else {
            this.banderaCheckbox = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])
    ], GrupoComponent.prototype, "myModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalCalificacion'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])
    ], GrupoComponent.prototype, "modalCalificacion", void 0);
    GrupoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupo',
            template: __webpack_require__(/*! ./grupo.component.html */ "./src/app/docente/grupo/grupo.component.html"),
            styles: [__webpack_require__(/*! ./grupo.component.scss */ "./src/app/docente/grupo/grupo.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_grupo_service__WEBPACK_IMPORTED_MODULE_3__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_7__["ModuloService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], GrupoComponent);
    return GrupoComponent;
}());



/***/ }),

/***/ "./src/app/docente/grupo/grupo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/docente/grupo/grupo.module.ts ***!
  \***********************************************/
/*! exports provided: GrupoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoModule", function() { return GrupoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo-routing.module */ "./src/app/docente/grupo/grupo-routing.module.ts");
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupo.component */ "./src/app/docente/grupo/grupo.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mensajeria/mensajeria.module */ "./src/app/docente/mensajeria/mensajeria.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GrupoModule = /** @class */ (function () {
    function GrupoModule() {
    }
    GrupoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_grupo_component__WEBPACK_IMPORTED_MODULE_3__["GrupoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__["GrupoRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__["ArchivoModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__["EncabezadoPersonaModule"],
                _mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_7__["MensajeriaModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            exports: [_grupo_component__WEBPACK_IMPORTED_MODULE_3__["GrupoComponent"]]
        })
    ], GrupoModule);
    return GrupoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~calificaciones-calificaciones-module~docente-grupo-grupo-module.js.map