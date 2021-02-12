(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-pagos-alumnos-alumnos-module"],{

/***/ "./src/app/administracion/alumno/services/alumno.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/alumno/services/alumno.service.ts ***!
  \******************************************************************/
/*! exports provided: AlumnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoService", function() { return AlumnoService; });
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




var AlumnoService = /** @class */ (function () {
    function AlumnoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.activaConsulta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AlumnoService.prototype.consultaEspNotas = function (id_alumno) {
        var params = '?alumno_id=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/alumno/consultaNotasAlumno.php' + params);
    };
    AlumnoService.prototype.consultaAlumnoCarrera = function (id_alumno) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/consultaOfertaAlumno.php' + params);
    };
    AlumnoService.prototype.insertaOferta = function (id_alumno, id_plan_orden, campus_id) {
        var formData = new FormData();
        formData.append('alumno_id', id_alumno);
        formData.append('id_plan_orden', id_plan_orden);
        formData.append('campus_id', campus_id);
        return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/agregaOferta.php', formData);
    };
    AlumnoService.prototype.eliminaOferta = function (id_plan_orden, id_alumno) {
        var params = '?id_plan_orden=' + id_plan_orden;
        params += '&alumno_id=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/eliminaOferta.php' + params);
    };
    AlumnoService.prototype.consultaTicketsHeader = function (id_ticket) {
        var params = '?id_ticket=' + id_ticket;
        // params += '&id_rol=' + 2;
        return this._httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php' + params);
    };
    AlumnoService.prototype.consultaAccesos = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'general/usuario/consultaAccesos.php' + params);
    };
    AlumnoService.prototype.consultaTicketAlumno = function (id_persona, id_rol) {
        var params = '?id_persona=' + id_persona;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + 'general/tickets/consultaUsuario.php' + params);
    };
    AlumnoService.prototype.consultaEspecifica = function (id, jwt) {
        var params = '?id_alumno=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
    };
    AlumnoService.prototype.elimina = function (id, jwt) {
        var params = '?id_alumno=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/alumno/elimina.php' + params);
    };
    AlumnoService.prototype.modificaAlumnoOld = function (alumno, jwt, id_alumno) {
        var formData = new FormData();
        // console.log(alumno)
        formData.append('alumno_nombre', alumno.get('nombreAlumno').value);
        formData.append('alumno_primer_apellido', alumno.get('apPatAlumno').value);
        formData.append('alumno_segundo_apellido', alumno.get('apMatAlumno').value);
        formData.append('clave_alumno', alumno.get('claveAlumno').value);
        formData.append('sexo_id', alumno.get('sexoAlumno').value);
        formData.append('fecha_nacimiento', alumno.get('nacimientoAlumno').value);
        formData.append('correo', alumno.get('correoAlumno').value);
        formData.append('telefono_1', alumno.get('tel1Alumno').value);
        formData.append('telefono_2', alumno.get('tel2Alumno').value);
        formData.append('celular', alumno.get('celularAlumno').value);
        formData.append('rfc', alumno.get('rfcAlumno').value);
        formData.append('curp', alumno.get('curpAlumno').value);
        formData.append('cedula_profesional', alumno.get('cedulaAlumno').value);
        var fd = new FormData();
        if (id_alumno == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
        }
        else {
            formData.append('alumno_id', id_alumno);
            return this._httpClient.post(this.url + 'controlEscolar/alumno/edita.php', formData);
        }
    };
    AlumnoService.prototype.consultaAlumno = function (jwt, id_rol, busqueda, min, max, tipoForm) {
        var params = '?busqueda=' + busqueda;
        params += '&tipo_busqueda=' + tipoForm;
        params += '&id_rol=' + id_rol;
        params += '&min=' + min;
        params += '&max=' + max;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/busqueda_alumno.php' + params);
    };
    AlumnoService.prototype.consultaCurp = function (curp, jwt) {
        var params = '?curp=' + curp;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta_curp.php' + params);
    };
    AlumnoService.prototype.consultaCedula = function (id_alumno, jwt) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
    };
    AlumnoService.prototype.modificaAlumno = function (cedulaForm, jwt, id) {
        var formData = new FormData();
        formData.append('cedula_profesional', '');
        formData.append('clave_alumno', cedulaForm.get('clave').value);
        formData.append('id_persona', id);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/alumno/creaSimple.php', formData);
    };
    AlumnoService.prototype.cambiaOferta = function (jwt, id_plan_orden, alumno_id) {
        var params = '?id_plan_orden=' + id_plan_orden;
        params += '&alumno_id=' + alumno_id;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/cambiaOferta.php' + params);
    };
    AlumnoService.prototype.getTotalAlumnos = function (jwt) {
        return this._httpClient.get(this.url + 'controlEscolar/alumno/totalAlumnos.php');
    };
    AlumnoService.prototype.getMatricula = function (jwt) {
        return this._httpClient.get(this.url + 'controlEscolar/matricula/consulta.php');
    };
    AlumnoService.prototype.getSituacion = function (jwt) {
        return this._httpClient.get(this.url + 'catalogosCE/situacionAlumno.php');
    };
    AlumnoService.prototype.creaAlumno = function (jwt, form) {
        var formData = new FormData();
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], name_1 = _a[0], value = _a[1];
            if (name_1 == 'envia_correo') {
                if (value == false || value == 'false') {
                    value = 0;
                }
                else if (value == true || value == 'true') {
                    value = 1;
                }
            }
            formData.append(name_1, value);
        }
        formData.append('nombre_usuario', '');
        formData.append('password', '');
        return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
    };
    AlumnoService.prototype.cambiaSituacion = function (form, id_alumno, id_area) {
        var formData = new FormData();
        formData.append('estatus', form.situacion);
        formData.append('id_alumno', id_alumno);
        formData.append('id_area', id_area);
        formData.append('observacion', form.observacion ? form.observacion : '');
        return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/cambiaSituacionAlumno.php', formData);
    };
    AlumnoService.prototype.rollBack = function (id_usuario) {
        var formData = new FormData();
        formData.append('id_usuario', id_usuario);
        return this._httpClient.post(this.url + 'controlEscolar/alumno/rollbackAspirante.php', formData);
    };
    AlumnoService.prototype.getPendientes = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this._httpClient.get(this.url + 'controlEscolar/pendientes/alumnos.php', { params: params });
    };
    AlumnoService.prototype.busquedaFiltro = function (filtros, inicio, fin) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('min', inicio)
            .set('max', fin);
        filtros.forEach(function (filtro) {
            params = params.set(filtro.key, filtro.value);
        });
        return this._httpClient.get(this.url + 'controlEscolar/alumno/busquedaAlumnoFiltro.php', { params: params });
    };
    AlumnoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlumnoService);
    return AlumnoService;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/alumnos-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/alumnos-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AlumnosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosRoutingModule", function() { return AlumnosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alumnos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumnos.component */ "./src/app/administracion/pagos/alumnos/alumnos.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/pagos/alumnos/form/form.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.ts");
/* harmony import */ var _carga_layout_pagos_carga_layout_pagos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carga-layout-pagos/carga-layout-pagos.component */ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _alumnos_component__WEBPACK_IMPORTED_MODULE_2__["PagosAlumnosComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'edita/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"] },
            { path: 'layout', component: _carga_layout_pagos_carga_layout_pagos_component__WEBPACK_IMPORTED_MODULE_5__["CargaLayoutPagosComponent"] },
            { path: 'solicitud/:id', loadChildren: './solicitud/solicitud-pago.module#SolicitudModule' },
            { path: 'suscripcion/:id', loadChildren: './suscripcion/suscripcion.module#SuscripcionModule' },
            { path: 'suscripcion/:id/:id2', loadChildren: './suscripcion/suscripcion.module#SuscripcionModule' },
        ]
    }
];
var AlumnosRoutingModule = /** @class */ (function () {
    function AlumnosRoutingModule() {
    }
    AlumnosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AlumnosRoutingModule);
    return AlumnosRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/alumnos.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/alumnos.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/alumnos.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/alumnos.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL2FsdW1ub3MvYWx1bW5vcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/alumnos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/alumnos.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagosAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosAlumnosComponent", function() { return PagosAlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagosAlumnosComponent = /** @class */ (function () {
    function PagosAlumnosComponent() {
    }
    PagosAlumnosComponent.prototype.ngOnInit = function () {
    };
    PagosAlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alumnos',
            template: __webpack_require__(/*! ./alumnos.component.html */ "./src/app/administracion/pagos/alumnos/alumnos.component.html"),
            styles: [__webpack_require__(/*! ./alumnos.component.scss */ "./src/app/administracion/pagos/alumnos/alumnos.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], PagosAlumnosComponent);
    return PagosAlumnosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/alumnos.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/alumnos.module.ts ***!
  \****************************************************************/
/*! exports provided: PagosAlumnosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosAlumnosModule", function() { return PagosAlumnosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alumnos-routing.module */ "./src/app/administracion/pagos/alumnos/alumnos-routing.module.ts");
/* harmony import */ var _alumnos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alumnos.component */ "./src/app/administracion/pagos/alumnos/alumnos.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/pagos/alumnos/form/form.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _carga_layout_pagos_carga_layout_pagos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carga-layout-pagos/carga-layout-pagos.component */ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PagosAlumnosModule = /** @class */ (function () {
    function PagosAlumnosModule() {
    }
    PagosAlumnosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_alumnos_component__WEBPACK_IMPORTED_MODULE_3__["PagosAlumnosComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"], _carga_layout_pagos_carga_layout_pagos_component__WEBPACK_IMPORTED_MODULE_9__["CargaLayoutPagosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _alumnos_routing_module__WEBPACK_IMPORTED_MODULE_2__["AlumnosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_7__["LanguageTranslationModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_8__["EncabezadoPersonaModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"]
            ]
        })
    ], PagosAlumnosModule);
    return PagosAlumnosModule;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <a href=\"assets/layout/layout_pagos.xlsx\" class=\"archivo\">Descargar layout de carga</a>  \r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <form [formGroup]=\"layoutForm\">\r\n      <app-file-upload formControlName=\"contenido\"></app-file-upload><br>\r\n      <button [disabled]=\"cargando\" type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"enviar()\">\r\n        <i  *ngIf=\"cargando\" class=\"fa fa-spin fa-spinner\"></i>\r\n        Enviar información</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-6 alert alert-success\" role=\"alert\">\r\n    <p><b>Observaciones</b>:</p>\r\n    <p><b>1.</b> La fecha deberá ir con un formato de DD/MM/YYYY con ceros incluidos.</p>\r\n    <p><b>2.</b> El alumno debe tener un plan de pagos en la plataforma para saber si tiene pagos al corriente.</p>\r\n    <p><b>3.</b> No es necesario cargar los pagos pendientes del alumno, el sistema los reconoce con su plan de pagos</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col col-md-12\">\r\n  <div *ngIf=\"carga\" class=\"col col-md-6\">\r\n    <div class=\"alert\" [ngClass]=\"{'alert-success': carga == 1,'alert-warning': carga == 2, 'alert-danger': carga == 3}\" role=\"alert\" >\r\n      <p>{{msjCarga}}</p>\r\n    </div>\r\n  </div>\r\n\r\n    <table *ngIf=\"pagos\" class=\"table table-striped table-bordered\">\r\n      <tr>\r\n        <th colspan=\"4\">\r\n          No se lograron cargar los pagos de los siguientes alumnos:\r\n        </th>\r\n      </tr>\r\n      <tr>\r\n        <th>Nombre</th>\r\n        <th>Clave</th>\r\n        <th>Nombre de pago</th>\r\n        <th>Rol</th>\r\n      </tr>\r\n      <tr *ngFor=\"let pago of pagos\">\r\n        <td>{{pago.nombre}}</td>\r\n        <td>{{pago.clave_alumno}}</td>\r\n        <td>{{pago.nombre_pago}}</td>\r\n        <td>{{pago.rol}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".archivo {\n  color: #5cb85c !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3MvYWx1bW5vcy9jYXJnYS1sYXlvdXQtcGFnb3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXHBhZ29zXFxhbHVtbm9zXFxjYXJnYS1sYXlvdXQtcGFnb3NcXGNhcmdhLWxheW91dC1wYWdvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL2FsdW1ub3MvY2FyZ2EtbGF5b3V0LXBhZ29zL2NhcmdhLWxheW91dC1wYWdvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcmNoaXZve1xyXG4gICAgY29sb3I6ICM1Y2I4NWMgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CargaLayoutPagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaLayoutPagosComponent", function() { return CargaLayoutPagosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CargaLayoutPagosComponent = /** @class */ (function () {
    function CargaLayoutPagosComponent(_usuarioService, formBuilder, _pagoService) {
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this._pagoService = _pagoService;
        this.cargando = false;
        this.carga = 0;
        this.title = 'Carga de layout';
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    Object.defineProperty(CargaLayoutPagosComponent.prototype, "f", {
        get: function () { return this.layoutForm.controls; },
        enumerable: true,
        configurable: true
    });
    CargaLayoutPagosComponent.prototype.ngOnInit = function () {
        this.layoutForm = this.formBuilder.group({
            contenido: ['', Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__["requiredFileType"])(0)],
        });
    };
    CargaLayoutPagosComponent.prototype.enviar = function () {
        var _this = this;
        this.cargando = true;
        this._pagoService.guardaLayoutPago(this.layoutForm).subscribe(function (response) {
            if (response && response['status']) {
                _this.pagos = response['alumnos_sin_suscripcion'];
                _this.msjCarga = response['msg'];
                if (_this.pagos.length) {
                    _this.carga = 2;
                }
                else {
                    _this.carga = 1;
                }
            }
            else {
                _this.msjCarga = response['msg'];
            }
            _this.cargando = false;
        }, function (error) {
            _this.cargando = false;
            console.log(error);
        });
    };
    CargaLayoutPagosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carga-layout-pagos',
            template: __webpack_require__(/*! ./carga-layout-pagos.component.html */ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.html"),
            styles: [__webpack_require__(/*! ./carga-layout-pagos.component.scss */ "./src/app/administracion/pagos/alumnos/carga-layout-pagos/carga-layout-pagos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_pago_service__WEBPACK_IMPORTED_MODULE_4__["PagoService"]])
    ], CargaLayoutPagosComponent);
    return CargaLayoutPagosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/consulta/consulta.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4 class=\"mt-3\">{{title}}</h4>\r\n  </div>  \r\n</div>\r\n<div class=\"input-group mb-3\">\r\n  <input type=\"text\" class=\"form-control\" [formControl]=\"inputBusqueda\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n  <div class=\"input-group-append\">\r\n    <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n  </div>\r\n</div> \r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Matrícula</th>\r\n      <th scope=\"col\">Nombre del alumno</th>\r\n      <th scope=\"col\">Plan de pagos</th>\r\n      <th scope=\"col\">Pagos pendientes</th>\r\n      <th scope=\"col\">Situación del alumno por pago</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngIf=\"alumnos.length == 0\">\r\n      <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n    </tr>\r\n    <tr *ngFor=\"let alumno of alumnos; let i = index\">\r\n      <td>{{alumno.clave_alumno}}</td>\r\n      <td>{{alumno.nombre}} {{alumno.primer_apellido}} {{alumno.segundo_apellido}}</td>\r\n      <td><a [routerLink]=\"['../suscripcion/'+alumno.alumno_id+'/0']\">\r\n        <span *ngIf=\"alumno.nombre_suscripcion\">{{alumno.nombre_suscripcion}}</span>\r\n        <span *ngIf=\"!alumno.nombre_suscripcion\"><i class=\"fa fa-plus-square\"></i> Agrega suscripción</span>\r\n      </a></td>\r\n      <td class=\"text-center\"><span class=\"badge\" [ngClass]=\"alumno.pendientes_pago > 0 ? 'badge-danger': 'badge-info'\">{{alumno.pendientes_pago}}</span>\r\n        <br>\r\n        <a [routerLink]=\"['../solicitud/'+alumno.alumno_id]\">Ver pagos</a>\r\n      </td>\r\n      \r\n      <td [ngClass]=\"[alumno.situacion_pago_id == '1' ? 'alert-success':'',alumno.situacion_pago_id == '2' ? 'alert-danger':'',alumno.situacion_pago_id == '3' ? 'alert-warning':'']\" class=\"text-center\">\r\n        <i (click)=\"open(Situacion, alumno.alumno_id)\" class=\"fa fa-money _hover fa-2x\" aria-hidden=\"true\"></i>\r\n          <p> {{alumno.situacion_pago_descripcion}}</p>\r\n        </td>\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>\r\n\r\n<ng-template #Situacion let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Situación del alumno por pago</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n      <form [formGroup]=\"situacionForm\" (ngSubmit)=\"enviaInformacion()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Tipo de situación</label>\r\n          <select formControlName=\"situacion\" class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"situacion.situacion_pago_id\" *ngFor=\"let situacion of catSituacion\">{{situacion.situacion_pago_descripcion}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"situacionForm.get('observacion')\">\r\n          <label class=\"control-label\">Observación</label>\r\n          <textarea class=\"form-control\" formControlName=\"observacion\" rows=\"3\"></textarea>\r\n        </div>\r\n        <!-- <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-success pull-right mt-3\" [disabled]=\"situacionForm.invalid\">Guardar información</button> -->\r\n        <button class=\"btn btn-success pull-right mt-3\" [disabled]=\"situacionForm.invalid\">Guardar información</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/consulta/consulta.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3MvYWx1bW5vcy9jb25zdWx0YS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxccGFnb3NcXGFsdW1ub3NcXGNvbnN1bHRhXFxjb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3MvYWx1bW5vcy9jb25zdWx0YS9jb25zdWx0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5faG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/consulta/consulta.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pago_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pago.service */ "./src/app/administracion/pagos/services/pago.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/alumno/services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
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
    function ConsultaComponent(_pagoService, _modalService, formBuilder, _usuarioService, _alumnosService) {
        this._pagoService = _pagoService;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._alumnosService = _alumnosService;
        this.alumnos = [];
        this.title = 'Pagos de alumnos';
        this._usuarioService.pushBreadcum(this.title, '/admin/pagos-alumno', 1);
        // this._usuarioService.pushBreadcum(this.title,"",2); 
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputBusqueda = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.inputBusqueda.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (value) {
            _this.consultaAlumnos(value);
        });
        this.consultaAlumnos('');
    };
    ConsultaComponent.prototype.consultaAlumnos = function (busqueda) {
        var _this = this;
        this._pagoService.consultaAlumnos(busqueda).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumnos = response['alumnos'];
                console.log(_this.alumnos);
            }
            else {
                _this.alumnos = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.open = function (content, id_alumno) {
        this.idAlumno = id_alumno;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
        };
        this.situacionAlumno(content, ngbModalOptions);
    };
    ConsultaComponent.prototype.situacionAlumno = function (content, options) {
        var _this = this;
        this.situacionForm = this.formBuilder.group({
            situacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            // observacion: ['', Validators.required]
        });
        this.situacionForm.get('situacion').valueChanges.subscribe(function (value) {
            /*if (value == 1 || value == 4) {
              if (this.situacionForm.get('observacion')){
                this.situacionForm.removeControl('observacion')
              }
            }else{*/
            if (!_this.situacionForm.get('observacion')) {
                _this.situacionForm.addControl('observacion', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            }
            // }
        });
        if (!this.catSituacion) {
            this._pagoService.catSituacionAlumnosPagos().subscribe(function (response) {
                if (response && response['status']) {
                    _this.catSituacion = response['ciclo_estatus'];
                    _this._modalService.open(content, options);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._modalService.open(content, options);
        }
    };
    ConsultaComponent.prototype.enviaInformacion = function () {
        var _this = this;
        this._pagoService.cambiaSituacion(this.situacionForm.value, this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                var index = _this.alumnos.map(function (a) { return a.alumno_id; }).indexOf(_this.idAlumno);
                var situacion = _this.catSituacion.find(function (s) { return s.situacion_pago_id == _this.situacionForm.value.situacion; });
                // this.alumnos[index].estatus = this.situacionForm.value.situacion;        
                _this.alumnos[index].situacion_pago_descripcion = situacion.situacion_pago_descripcion;
                _this.alumnos[index].situacion_pago_id = situacion.situacion_pago_id;
                alertify.success(response['msg']).dismissOthers();
                _this._modalService.dismissAll();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/pagos/alumnos/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_pago_service__WEBPACK_IMPORTED_MODULE_1__["PagoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_6__["AlumnoService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/form/form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/form/form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    \r\n    <app-encabezado-persona [idPersona]=\"1248\" \r\n    [idRol]=\"2\"></app-encabezado-persona>\r\n\r\n  </div>\r\n  <div class=\"col-md-12 editar-ciclo\"> \r\n    <form [formGroup]=\"alumnoForm\" >\r\n  \r\n  <!--<div class=\"col-md-6\">              \r\n    <div class=\"form-group \">         \r\n      <label class=\"control-label\" for=\"\">{{'Level' | translate}}:</label>\r\n      <select  formControlName=\"nivelCiclo\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmErrSelect' | translate}} </option>\r\n        <option  [value]=\"nivelEstudio.nivel_estudios_id\" *ngFor=\"let nivelEstudio of nivelEstudios\">{{nivelEstudio.nivel_estudios}}</option>\r\n      </select>\r\n    </div>                                           \r\n  </div>-->\r\n  <div class=\"col-md-6\">              \r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"beca\">Porcentaje de beca:</label>\r\n      <input formControlName=\"porcentajeBeca\" class=\"form-control\" id=\"beca\" placeholder=\"Ingresa un porcentaje de beca\" type=\"text\" required>\r\n      <span class=\"invalidText\" *ngIf=\"f.porcentajeBeca.invalid && f.porcentajeBeca.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n      </span>\r\n    </div>                                                                   \r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\" for=\"fecha_inicio\"><i class=\"fa fa-calendar\"></i>Días Límite:</label>\r\n      <input formControlName=\"diasLimite\" class=\"form-control\" id=\"fecha_inicio\" placeholder=\"Número de días límite para que el alumno pague en la plataforma\">\r\n    </div>                                                                                                \r\n    <div class=\"form-group \" rel=\"1\">\r\n      <label class=\"control-label\" for=\"\">Tipo de suscripción:</label>\r\n      <select  formControlName=\"tipoSuscripcion\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n      </select>\r\n      <span class=\"invalidText\" *ngIf=\"f.tipoSuscripcion.invalid && f.tipoSuscripcion.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n      </span>\r\n    </div> <br>                                      \r\n    <button  type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n    <div class=\"resultado-datos-ciclo margin-top\" ></div>      \r\n  </div>  \r\n  </form>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/form/form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/form/form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGFnb3MvYWx1bW5vcy9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BhZ29zL2FsdW1ub3MvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/pagos/alumnos/form/form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/pagos/alumnos/form/form.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.alumnoForm = this.formBuilder.group({
            // nivelCiclo:  ['', Validators.required],  
            porcentajeBeca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            diasLimite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoSuscripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.alumnoForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/pagos/alumnos/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/pagos/alumnos/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/file-upload/file.upload.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/file-upload/file.upload.validators.ts ***!
  \******************************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");

function requiredFileType(type) {
    return function (control) {
        var archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__["Archivo"];
        var tipoArchivos;
        if (type == 0) {
            type = archivo.length - 1;
            tipoArchivos = archivo[type].formatos;
        }
        else {
            tipoArchivos = archivo[type].formatos;
        }
        var file = control.value;
        if (file) {
            var archivo_1 = file.name.split('.');
            var longitud = archivo_1.length;
            var extension = file.name.split('.')[longitud - 1].toLowerCase();
            if (tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/services/archivos.ts":
/*!**************************************!*\
  !*** ./src/app/services/archivos.ts ***!
  \**************************************/
/*! exports provided: Archivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
/* variable sincronizada con la base de de estudydg.cat_formatos */
var Archivo = [
    { id: 1, nombre: "Imagen", formatos: "jpg,jpeg,png,gif" },
    { id: 2, nombre: "Documento", formatos: "txt,doc,docx,pdf,odt" },
    { id: 3, nombre: "Presentación ", formatos: "pptx,ppsx,pptm,ppt,pps,potx,ppam" },
    { id: 4, nombre: "Hoja de cálculo ", formatos: "xlsx,xlsm,xlsb,xltx,xls,csv" },
    { id: 5, nombre: "Audio", formatos: "mp3,m4a,mp4,wav,wma" },
    { id: 6, nombre: "Video", formatos: "avi,mp4,m4v,mov,mpg,mpeg,swf" },
    { id: 100, nombre: "Archivo", formatos: "txt,doc,docx,odt,ppt,pdf,pps,jpg,jpeg,png,gif,jfif,pptx,pptm,ppt,potx,ppam,xlsx,xlsm,xlsb,xltx,XLR,mp3,m4a,mp4,wav,wma,avi,mp4, m4v, mov,mpg,mpeg,swf,wmv,zip,rar" },
];


/***/ })

}]);
//# sourceMappingURL=administracion-pagos-alumnos-alumnos-module.js.map