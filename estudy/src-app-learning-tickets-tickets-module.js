(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-learning-tickets-tickets-module"],{

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

/***/ "./src/app/administracion/tickets/servicios/tickets.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/tickets/servicios/tickets.service.ts ***!
  \*********************************************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketsService = /** @class */ (function () {
    function TicketsService(httpClient) {
        this.httpClient = httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    TicketsService.prototype.getConteoTickets = function () {
        return this.httpClient.get(this.url + 'controlEscolar/tickets/conteoEstatusTicket.php');
    };
    TicketsService.prototype.consultaTipoTicket = function () {
        return this.httpClient.get(this.url + '/catalogosCE/consultaTipoTiket.php');
    };
    TicketsService.prototype.consultaTicket = function (id_estatus) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_estatus_ticket', id_estatus);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaPorEstatus.php', { params: params });
    };
    TicketsService.prototype.consultaPorTicket = function (id_ticket) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_ticket', id_ticket);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php', { params: params });
    };
    TicketsService.prototype.consultaRespuestas = function (id_ticket) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_ticket', id_ticket);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaRespuestas.php', { params: params });
    };
    TicketsService.prototype.guardarRespuesta = function (id_ticket, form) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        formData.append('texto', form.texto);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/creaRespuesta.php', formData);
    };
    TicketsService.prototype.guardaTicketCorreccion = function (form, idPersona, idRol, idRolUsuario) {
        var formData = new FormData();
        formData.append('asunto_ticket', form.asunto);
        formData.append('descripcion_ticket', form.mensaje);
        formData.append('id_tipo_ticket', form.tipoTicket);
        if (idRol == 1) {
            formData.append('id_persona', idPersona);
            formData.append('id_rol', idRolUsuario);
            formData.append('id_area', '1');
            formData.append('id_rol_admin', idRol);
            return this.httpClient.post(this.url + 'controlEscolar/tickets/crearNotificacion.php', formData);
        }
        else if (idRol == 2) {
            return this.httpClient.post(this.url + 'controlEscolar/tickets/crearTicket.php', formData);
        }
    };
    TicketsService.prototype.ticketVisto = function (id_ticket) {
        var params = '?id_ticket=' + id_ticket;
        return this.httpClient.get(this.url + 'general/tickets/ticketVisto.php' + params);
    };
    TicketsService.prototype.cerrarTicket = function (id_ticket) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/cerrarTicket.php', formData);
    };
    TicketsService.prototype.eliminarTicket = function (id_ticket) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/eliminarTicket.php', formData);
    };
    TicketsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TicketsService);
    return TicketsService;
}());



/***/ }),

/***/ "./src/app/components/tickets/tickets-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/tickets/tickets-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TicketsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsRoutingModule", function() { return TicketsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets.component */ "./src/app/components/tickets/tickets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _tickets_component__WEBPACK_IMPORTED_MODULE_2__["TicketsComponent"] }
];
var TicketsRoutingModule = /** @class */ (function () {
    function TicketsRoutingModule() {
    }
    TicketsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TicketsRoutingModule);
    return TicketsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/tickets/tickets.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    \r\n    <div class=\"container p-4 border rounded\" *ngIf=\"Ticket\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n        <h5> {{Ticket.asunto_ticket}}</h5>\r\n        <p>{{Ticket.descripcion_ticket}}</p> \r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"py-2\" *ngIf=\"Respuestas\">\r\n        <b>Respuestas:</b>\r\n        <div *ngFor=\"let respuesta of Respuestas\">\r\n          <div class=\"alert alert-secondary\" role=\"alert\" *ngIf=\"respuesta.rol_id == 2\">\r\n            <small class=\"pull-right\">{{respuesta.fecha_creacion | date: 'dd/MM/yyyy hh:mm a'}}</small>\r\n            <p class=\"m-0 p-0\">{{respuesta.texto}}</p>\r\n          </div>\r\n          <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"respuesta.rol_id == 1\">\r\n            <small class=\"pull-right\">{{respuesta.fecha_creacion | date: 'dd/MM/yyyy hh:mm a'}}</small>\r\n            <p class=\"m-0 p-0\">{{respuesta.texto}}</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class=\"py-2\" *ngIf=\"Respuestas\">\r\n        <b>Respuestas:</b>\r\n        <div *ngFor=\"let respuesta of Respuestas\">\r\n          <div class=\"alert\" [ngClass]=\"((idRol == 2 || idRol == 4) && respuesta.rol_id == 1)? \r\n            'alert-secondary': ((idRol == 2 && respuesta.rol_id == 2) || idRol == 4 && respuesta.rol_id == 4)? 'alert-primary' : ''\" role=\"alert\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 my-0 py-0\">\r\n                <small class=\"m-0 p-0 pull-right\">{{respuesta.fecha_creacion | date: 'dd/MM/yyyy hh:mm a'}}</small>\r\n              </div>\r\n              <div class=\"col-12 my-0 py-0\">\r\n                <p class=\"m-0 p-0\">{{respuesta.texto}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <label *ngIf=\"!responder\"><input type=\"checkbox\" [(ngModel)]=\"responder\" [value]=\"1\" >Responder:</label>\r\n      <label *ngIf=\"responder\">Responder:</label>\r\n      <div class=\"mb-5 pb-1\" *ngIf=\"responder\">\r\n        <form [formGroup]=\"ticketsForm\" (ngSubmit)=\"guardaRespuesta()\">\r\n            <div class=\"form-group\">\r\n              \r\n              <textarea formControlName=\"texto\" placeholder=\"Escribe texto\" class=\"form-control\" rows=\"5\"></textarea>\r\n            </div>\r\n            <!--button class=\"btn btn-warning btn-small\"><i class=\"fa fa-minus-square fa-2x\"></i> Cerrar ticket</button-->\r\n            <button type=\"submit\" [disabled]=\"ticketsForm.invalid\" class=\"btn btn-success pull-right mt-2\">Enviar respuesta</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tickets/tickets.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/tickets/tickets.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.ts ***!
  \*********************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_administracion_tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/administracion/tickets/servicios/tickets.service */ "./src/app/administracion/tickets/servicios/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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







var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(_ticketsService, route, formBuilder, modalService, _usuarioService, _alumnoService) {
        this._ticketsService = _ticketsService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this._usuarioService = _usuarioService;
        this._alumnoService = _alumnoService;
        this.responder = 0;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketsForm = this.formBuilder.group({
            texto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.idRol = this._usuarioService.getRol().rol_id;
        if (this.route.snapshot.paramMap.get('id_ticket')) {
            this.idTicket = this.route.snapshot.paramMap.get('id_ticket');
        }
        this._ticketsService.consultaPorTicket(this.idTicket).subscribe(function (response) {
            if (response && response['status']) {
                _this.Ticket = response['ticket'][0];
                if (_this.Ticket.estatus_ticket_id != "5" || _this.Ticket.estatus_ticket_id != "4")
                    _this.responder = 1;
                _this._ticketsService.consultaRespuestas(_this.idTicket).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.Respuestas = response['Respuestas'];
                    }
                }, function (error) {
                    console.log(error);
                });
                if (_this.idRol != 1) {
                    _this.ticketVisto(_this.idTicket);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.guardaRespuesta = function () {
        var _this = this;
        var form = this.ticketsForm.value;
        this._ticketsService.guardarRespuesta(this.idTicket, form).subscribe(function (response) {
            if (response && response['status']) {
                _this.modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
                _this._alumnoService.activaConsulta.emit('1');
                _this.ticketVisto(_this.idTicket);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.ticketVisto = function (id_ticket) {
        this._ticketsService.ticketVisto(id_ticket).subscribe(function (response) {
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TicketsComponent.prototype, "idTicket", void 0);
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets-component',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/components/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.scss */ "./src/app/components/tickets/tickets.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_administracion_tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_6__["AlumnoService"]])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/tickets.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/tickets/tickets.module.ts ***!
  \******************************************************/
/*! exports provided: TicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModule", function() { return TicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-routing.module */ "./src/app/components/tickets/tickets-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tickets.component */ "./src/app/components/tickets/tickets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TicketsModule = /** @class */ (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [_tickets_component__WEBPACK_IMPORTED_MODULE_4__["TicketsComponent"]]
        })
    ], TicketsModule);
    return TicketsModule;
}());



/***/ }),

/***/ "./src/app/learning/tickets/nuevo/nuevo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/learning/tickets/nuevo/nuevo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tickets-alumno></app-tickets-alumno>\r\n"

/***/ }),

/***/ "./src/app/learning/tickets/nuevo/nuevo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/learning/tickets/nuevo/nuevo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL3RpY2tldHMvbnVldm8vbnVldm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/learning/tickets/nuevo/nuevo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/learning/tickets/nuevo/nuevo.component.ts ***!
  \***********************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
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

var NuevoComponent = /** @class */ (function () {
    function NuevoComponent() {
    }
    NuevoComponent.prototype.ngOnInit = function () {
    };
    NuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! ./nuevo.component.html */ "./src/app/learning/tickets/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/learning/tickets/nuevo/nuevo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ }),

/***/ "./src/app/learning/tickets/tickets-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/learning/tickets/tickets-routing.module.ts ***!
  \************************************************************/
/*! exports provided: TicketsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsRoutingModule", function() { return TicketsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets.component */ "./src/app/learning/tickets/tickets.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/learning/tickets/nuevo/nuevo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _tickets_component__WEBPACK_IMPORTED_MODULE_2__["TicketsComponent"] },
    { path: 'nuevo', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoComponent"] }
];
var TicketsRoutingModule = /** @class */ (function () {
    function TicketsRoutingModule() {
    }
    TicketsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TicketsRoutingModule);
    return TicketsRoutingModule;
}());



/***/ }),

/***/ "./src/app/learning/tickets/tickets.component.html":
/*!*********************************************************!*\
  !*** ./src/app/learning/tickets/tickets.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Notificaciones y tickets</h4>\r\n    <!-- <app-encabezado-persona [idPersona]=\"idPersona\" [idRol]=\"'2'\"></app-encabezado-persona> -->\r\n    <a *ngIf=\"idRol != 4\" class=\"btn btn-success\" [routerLink]=\"['./nuevo']\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Crear ticket</a>\r\n    <br *ngIf=\"idRol != 4\"><br>\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-light\">\r\n        <tr>\r\n          <th>Asunto</th>\r\n          <th>Descripción</th>\r\n          <th>Fecha envío</th>\r\n          <th>Tipo ticket</th>\r\n          <!--th>Estatus ticket</th-->\r\n          <th>Responder</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let ticket of tickets; let i = index;\">\r\n          <td>{{ticket.asunto_ticket}}</td>\r\n          <td>{{ticket.descripcion_ticket}}</td>\r\n          <td>{{ticket.fecha_creacion | date: \"dd/MM/yyyy\"}} {{ticket.fecha_creacion | date: \"shortTime\"}}</td>\r\n          <td>{{ticket.tipo_ticket}}</td>\r\n          <!--td>{{ticket.estatus_ticket}}</td-->\r\n          <td class=\"text-center\">\r\n            <button *ngIf=\"ticket.estatus_ticket_id != 4\" class=\"btn btn-primary\" (click)=\"open(content, ticket)\">\r\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #content let-modal>\r\n    <div class=\"modal-body p-3\">\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n      <app-tickets-component *ngIf=\"seleccionado\" [idTicket]=\"seleccionado.ticket_id\"></app-tickets-component>\r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/learning/tickets/tickets.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/learning/tickets/tickets.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/learning/tickets/tickets.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/learning/tickets/tickets.component.ts ***!
  \*******************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/administracion/alumno/services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(_alumnosService, _usuarioService, modalService, _route, _router) {
        this._alumnosService = _alumnosService;
        this._usuarioService = _usuarioService;
        this.modalService = modalService;
        this._route = _route;
        this._router = _router;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('prevUrl'))
            localStorage.removeItem('prevUrl');
        localStorage.setItem('prevUrl', this._router.url);
        this.idRol = this._usuarioService.getRol().rol_id;
        this.idPersona = this._usuarioService.getIdentity().persona_id;
        this.idSelectedTicket = this._route.snapshot.params['id'];
        this.consultaTickets();
    };
    TicketsComponent.prototype.consultaTickets = function () {
        var _this = this;
        this._alumnosService.consultaTicketAlumno(this.idPersona, this.idRol).subscribe(function (response) {
            var seleccionado;
            if (response && response['status']) {
                _this.tickets = response['tickets'];
                _this.tickets.forEach(function (_ticket) {
                    _ticket.fecha_creacion = new Date((_ticket.fecha_creacion) * 1000);
                    if (this.idSelectedTicket && this.idSelectedTicket == _ticket.ticket_id) {
                        seleccionado = _ticket;
                    }
                }.bind(_this));
                if (seleccionado)
                    _this.open(_this.modalTickets, seleccionado);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.open = function (content, ticket) {
        this.seleccionado = ticket;
        this.modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
    };
    TicketsComponent.prototype.close = function () {
        this.modalService.dismissAll();
        this._alumnosService.activaConsulta.emit('1');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalRef"])
    ], TicketsComponent.prototype, "modalTickets", void 0);
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/learning/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.scss */ "./src/app/learning/tickets/tickets.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_1__["AlumnoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/learning/tickets/tickets.module.ts":
/*!****************************************************!*\
  !*** ./src/app/learning/tickets/tickets.module.ts ***!
  \****************************************************/
/*! exports provided: TicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModule", function() { return TicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-routing.module */ "./src/app/learning/tickets/tickets-routing.module.ts");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets.component */ "./src/app/learning/tickets/tickets.component.ts");
/* harmony import */ var src_app_components_tickets_tickets_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/tickets/tickets.module */ "./src/app/components/tickets/tickets.module.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/learning/tickets/nuevo/nuevo.component.ts");
/* harmony import */ var src_app_administracion_alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/alumno/tickets-alumno/tickets-alumno.module */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TicketsModule = /** @class */ (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"], _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_5__["NuevoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
                src_app_components_tickets_tickets_module__WEBPACK_IMPORTED_MODULE_4__["TicketsModule"],
                src_app_administracion_alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_6__["TicketsAlumnoModule"]
            ],
            exports: [_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]]
        })
    ], TicketsModule);
    return TicketsModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-learning-tickets-tickets-module.js.map