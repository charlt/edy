(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learning-learning-module"],{

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

/***/ "./src/app/administracion/avisos-admin/avisos-admin.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/avisos-admin/avisos-admin.service.ts ***!
  \*********************************************************************/
/*! exports provided: AvisosAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosAdminService", function() { return AvisosAdminService; });
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




var AvisosAdminService = /** @class */ (function () {
    function AvisosAdminService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AvisosAdminService.prototype.eliminaSwitchAviso = function (switch_aviso_id) {
        var params = '?switch_aviso_id=' + switch_aviso_id;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/eliminaAvisosSwitch.php' + params);
    };
    AvisosAdminService.prototype.consulta = function (tipo) {
        var params = '?tipo=' + tipo;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consulta.php' + params);
    };
    AvisosAdminService.prototype.consultaAviso = function (id_aviso) {
        var params = '?id_aviso=' + id_aviso;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consultaEspecifica.php' + params);
    };
    AvisosAdminService.prototype.consultaDireccion = function (id_aviso) {
        var params = '?aviso_id=' + id_aviso;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consultaSwitchAviso.php' + params);
    };
    AvisosAdminService.prototype.modificaAvisos = function (aviso, id_persona, id_aviso, archivo) {
        var formData = new FormData();
        formData.append('titulo', aviso.get('tituloAviso').value);
        formData.append('mensaje', aviso.get('mensaje').value);
        formData.append('fecha_inicio', aviso.get('fechaInicio').value);
        formData.append('fecha_fin', aviso.get('fechaFin').value);
        formData.append('id_administrador', id_persona);
        // formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        if (archivo)
            formData.append('contenido', archivo);
        formData.append('id_importancia_aviso', aviso.get('importancia').value);
        var fd = new FormData();
        if (id_aviso == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/crea.php', formData);
        }
        else {
            formData.append('id_aviso', id_aviso);
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/edita.php', formData);
        }
    };
    AvisosAdminService.prototype.eliminaAviso = function (id_aviso) {
        var params = '?id_aviso=' + id_aviso;
        return this._httpClient.get(this.url + 'controlEscolar/avisosAdmin/elimina.php' + params);
    };
    AvisosAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvisosAdminService);
    return AvisosAdminService;
}());



/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circulo m-1\" [ngStyle]=\"{'background-color': color, 'width': anchoLogo, 'height': altoLogo}\"><span [ngStyle]=\"{'font-size': tamanoLetra}\">{{letrasLogo}}</span></div>"

/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circulo {\n  border-radius: 100%;\n  display: inline-block; }\n\n.circulo > span {\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  display: block;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvdGlwby11c3VhcmlvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ290aXBvLXVzdWFyaW9cXGxvZ290aXBvLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFFcEIsc0JBQXFCLEVBQ25COztBQUNIO0VBQ0MsYUFBWTtFQUNULGdCQUFlO0VBQ2xCLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3RpcG8tdXN1YXJpby9sb2dvdGlwby11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmN1bG8ge1xyXG5cdCBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgzOCwgMzgsIDIyNCwgMC43NCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gXHR9XHJcbi5jaXJjdWxvID4gc3BhbiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.ts ***!
  \***************************************************************************/
/*! exports provided: LogotipoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogotipoUsuarioComponent", function() { return LogotipoUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogotipoUsuarioComponent = /** @class */ (function () {
    function LogotipoUsuarioComponent() {
    }
    LogotipoUsuarioComponent.prototype.ngOnChanges = function () {
        if (!this.color) {
            this.color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_1__["randomColor"])();
        }
        this.logo();
        this.radio = 100 + "%";
        this.altoLogo = this.alto + "px";
        this.anchoLogo = this.ancho + "px";
        this.tamanoLetra = this.tamLetra + "px";
    };
    LogotipoUsuarioComponent.prototype.logo = function () {
        this.letrasLogo = this.iniciales.substr(0, 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "iniciales", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "ancho", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "alto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "tamLetra", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "color", void 0);
    LogotipoUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logotipo-usuario',
            template: __webpack_require__(/*! ./logotipo-usuario.component.html */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.html"),
            styles: [__webpack_require__(/*! ./logotipo-usuario.component.scss */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogotipoUsuarioComponent);
    return LogotipoUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.module.ts ***!
  \************************************************************************/
/*! exports provided: LogotipoUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogotipoUsuarioModule", function() { return LogotipoUsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logotipo-usuario.component */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogotipoUsuarioModule = /** @class */ (function () {
    function LogotipoUsuarioModule() {
    }
    LogotipoUsuarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__["LogotipoUsuarioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__["LogotipoUsuarioComponent"]]
        })
    ], LogotipoUsuarioModule);
    return LogotipoUsuarioModule;
}());



/***/ }),

/***/ "./src/app/learning/components/header/header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/learning/components/header/header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\" [style.background-color]=\"universidad.color\">\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\" >\r\n                <a href=\"https://www.dropbox.com/s/y22f5dq3zr09q5w/Tutorial%20alumno.mp4?dl=0\" target=\"_new\" class=\"nav-link\"><i class=\"fa fa-question-circle-o\"></i> Ver tutorial</a>\r\n            </li>\r\n            <li li class=\"nav-item dropdown iz\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle\r\n                     >\r\n                    <i class=\"fa fa-bell-o\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                    <span *ngIf=\"totalNotificaciones >= 1\" class=\"badge badge-success\">{{totalNotificaciones}}</span>\r\n                    <span *ngIf=\"!totalNotificaciones\" class=\"badge badge-secondary\">0</span>\r\n                </a>\r\n                <div *ngIf=\"totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 320px;\"\r\n                    ngbDropdownMenu>\r\n                    <div ngbTooltip=\"{{notificacion.titulo}}\" *ngFor=\"let notificacion of notificaciones\" (click)=\"abrirNotificacion(notificacion);\">\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item py-0 my-0\">\r\n                            <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                            <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                        </a>\r\n                        <li class=\"dropdown-divider\"></li>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 323px;\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        <b>Sin notificaciones pendientes</b>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n    <li class=\"nav-item dropdown user-menu\" ngbDropdown>\r\n\r\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n            <app-logotipo-usuario [iniciales]=\"nombre\" [ancho]=\"25\" [alto]=\"25\" [tamLetra]=\"15\" [color]=\"colorLogo\">\r\n            </app-logotipo-usuario>\r\n            {{identity.nombre + ' ' + identity.primer_apellido }}\r\n        </a>\r\n        <div class=\"dropdown-menu  dropdown-menu-left \" ngbDropdownMenu>\r\n            <a [routerLink]=\"['./perfil']\" [routerLinkActive]=\"['router-link-active']\" class=\"dropdown-item\"\r\n                href=\"javascript:void(0)\">\r\n                <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n            </a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n            </a>\r\n        </div>\r\n    </li>\r\n\r\n    </ul>\r\n    </div>\r\n\r\n    <ng-template #contentTicket let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\"><h5>{{selectedTicket.asunto_ticket}}</h5></h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div *ngIf=\"nuevasNotificaciones\">\r\n                <div>\r\n                    <small class=\"pull-right\">Fecha de envío: {{selectedTicket.fecha_creacion  | date:'dd/MM/yyyy hh:mm a'}}</small>\r\n                    <p [innerHTML]=\"selectedTicket.descripcion_ticket\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #contentObligatorio let-modal>\r\n        <div class=\"modal-body p-5 text-center\">\r\n            <h5>Tienes notificaciones en tu plataforma:</h5>\r\n            <div  *ngFor=\"let notificacion of notificacionesObligatorias\" >\r\n                <a class=\"btn btn-primary mt-3\" (click)=\"modal.close();abrirNotificacion(notificacion);\" href=\"javascript:void()\">\r\n                    <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                    <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #contentEmergente let-modal>\r\n        <div class=\"modal-header alert-info\">\r\n            <h5>Tienes un aviso de la escuela</h5>\r\n\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body px-5 text-center\">\r\n            <div class=\"container border rounded py-3 mt-2\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <label class=\"form-check-label float-right\" >\r\n                            <input (change)=\"marcarAviso(notificacionesEmergentes)\" [checked]=\"notificacionesEmergentes.visto == '1'\" class=\"form-check-input\" type=\"checkbox\">\r\n                            Marcar como visto\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <app-archivo class=\"archivo\" *ngIf=\"notificacionesEmergentes.adjunto\" [urlBase]=\"notificacionesEmergentes.adjunto\"></app-archivo>\r\n                        <h5>{{notificacionesEmergentes.titulo}}</h5>\r\n                        <div [innerHTML]=\"notificacionesEmergentes.mensaje\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n        </div>\r\n    </ng-template>\r\n</nav>"

/***/ }),

/***/ "./src/app/learning/components/header/header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/learning/components/header/header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar .navbar-brand {\n  color: #fff; }\n\n:host .navbar .nav-item > a {\n  color: #eee; }\n\n:host .navbar .nav-item > a:hover {\n    color: #fff; }\n\n:host .navbar .user-menu {\n  min-width: 200px;\n  text-align: right; }\n\n:host .navbar .user-menu > a {\n  overflow-x: hidden; }\n\n:host .notification {\n  width: 100px; }\n\n:host .messages {\n  width: 300px; }\n\n:host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n\n:host .messages .media:last-child {\n      border-bottom: none; }\n\n:host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n\n:host .messages .media-body .small {\n    margin: 0; }\n\n:host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.contenido {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm5pbmcvY29tcG9uZW50cy9oZWFkZXIvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbGVhcm5pbmdcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBSVksWUFBVyxFQUNkOztBQUxUO0VBT1ksWUFBVyxFQUlkOztBQVhUO0lBU2dCLFlBQVcsRUFDZDs7QUFWYjtFQWFZLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBZlQ7RUFpQlksbUJBQWtCLEVBQ3JCOztBQWxCVDtFQXFCUSxhQUFZLEVBRWY7O0FBdkJMO0VBeUJRLGFBQVksRUFxQmY7O0FBOUNMO0lBMkJZLDhCQUE2QjtJQUM3QixrQkFBaUIsRUFJcEI7O0FBaENUO01BOEJnQixvQkFBbUIsRUFDdEI7O0FBL0JiO0lBbUNnQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjs7QUFyQ2I7SUF1Q2dCLFVBQVMsRUFDWjs7QUF4Q2I7SUEwQ2dCLGdCQUFlO0lBQ2YsVUFBUyxFQUNaOztBQUtiO0VBQ0ksaUJBQWU7RUFDZixvQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvbGVhcm5pbmcvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgOSwgMTM5KTtcclxuOmhvc3Qge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyLW1lbnV7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1tZW51PmF7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm90aWZpY2F0aW9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuXHJcbiAgICB9XHJcbiAgICAubWVzc2FnZXMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAubWVkaWEge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc21hbGwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYXN0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbmlkbyB7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/learning/components/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/learning/components/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_universidad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/avisos/avisos.service */ "./src/app/components/avisos/avisos.service.ts");
/* harmony import */ var src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/administracion/alumno/services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/administracion/avisos-admin/avisos-admin.service */ "./src/app/administracion/avisos-admin/avisos-admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, _usuarioService, router, modalService, _plataformaService, _materiaService, _avisosService, _alumnoService, _avisosAdminService) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.modalService = modalService;
        this._plataformaService = _plataformaService;
        this._materiaService = _materiaService;
        this._avisosService = _avisosService;
        this._alumnoService = _alumnoService;
        this._avisosAdminService = _avisosAdminService;
        this.notificacionesObligatorias = [];
        this.notificacionesEmergentes = [];
        this.data = undefined;
        this._alumnoService.activaConsulta.subscribe(function (value) {
            _this.notificaciones = null;
            _this.getNotificaciones();
        });
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].urlAssets;
        this.universidad = _services_universidad__WEBPACK_IMPORTED_MODULE_6__["universidad"];
        this._plataformaService.change.subscribe(function (encuesta_id) {
            _this.encuesta_id = encuesta_id;
            if (_this.encuesta_id)
                _this.cambiaAvisosEncuesta();
        });
        this._avisosService.change.subscribe(function (aviso_id) {
            _this.aviso_id = aviso_id;
            if (_this.aviso_id)
                _this.cambiaAvisos();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.ruta = this.router.url;
        this.jwt = this._usuarioService.getJWT();
        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
        this.identity = this._usuarioService.getIdentity();
        this.nombre = this.identity.nombre;
        this.colorLogo = this.identity.color;
        this.selectedRol = this._usuarioService.getRol();
        this.id_persona = this.identity.persona_id;
        // this.consultaTickets();
        this.getNotificaciones();
    };
    HeaderComponent.prototype.cambiaAvisosEncuesta = function () {
        this.encuesta_id = this.encuesta_id.toString();
        for (var i = 0; i < this.notificaciones.length; i++) {
            if (this.notificaciones[i].encuesta_id == this.encuesta_id) {
                this.totalNotificaciones = this.totalNotificaciones - 1;
                this.notificaciones.splice(i, 1);
            }
        }
    };
    HeaderComponent.prototype.cambiaAvisos = function () {
        this.encuesta_id = this.aviso_id.toString();
        for (var i = 0; i < this.notificaciones.length; i++) {
            if (this.notificaciones[i].aviso_id == this.aviso_id) {
                this.notificaciones.splice(i, 1);
                this.totalNotificaciones = this.totalNotificaciones - 1;
            }
        }
    };
    HeaderComponent.prototype.getNotificaciones = function () {
        var _this = this;
        this._plataformaService.consultaNotificaciones(2).subscribe(function (response) {
            if (response && response['status']) {
                _this.notificaciones = response['notificacion'];
                _this.totalNotificaciones = _this.notificaciones.length;
                var notificacionObligatoria = void 0, notificacionEmergente = void 0;
                for (var _i = 0, _a = _this.notificaciones; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if ((item['tipo'] == '3' && item['importancia_aviso_id'] == '2') ||
                        (item['tipo'] == '6' && item['importancia_aviso_id'] == '2') ||
                        (item['tipo'] == '5' && item['obligatorio'] == '1')) {
                        _this.notificacionesObligatorias.push(item);
                        notificacionObligatoria = 1;
                    }
                    else if (item['tipo'] == '6' && item['importancia_aviso_id'] == '3') {
                        _this.notificacionesEmergentes.push(item);
                        notificacionEmergente = 1;
                    }
                }
                if (notificacionObligatoria)
                    _this.abrirObligatorio();
                if (notificacionEmergente) {
                    _this._avisosAdminService.consultaAviso(_this.notificacionesEmergentes[0]['aviso_id']).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.notificacionesEmergentes = response['aviso'][0];
                            _this.modalService.open(_this.modalEmergente, { size: 'lg' });
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                _this.notificaciones = undefined;
                _this.totalNotificaciones = undefined;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.abrirObligatorio = function () {
        this.modalService.open(this.modalObligatorio);
    };
    HeaderComponent.prototype.abrirNotificacion = function (notificacion) {
        switch (notificacion['tipo']) {
            case '1':
                this.redireccion(notificacion, '/learning/tickets/' + notificacion['ticket_id']);
                break;
            case '2':
                this.redireccion(notificacion, '/materia/mensajes/' + notificacion['materia_id']);
                break;
            case '3':
                this.redireccion(notificacion, '/materia/avisos/2');
                break;
            case '4':
                this.redireccion(notificacion, '/materia/actividad/' + notificacion['actividad_id']);
                break;
            case '5':
                this.redireccion(notificacion, '/learning/encuesta/' + notificacion['encuesta_id'] + '/' + notificacion['switch_encuesta_id']);
                break;
            case '6':
                this.router.navigate(['/learning/avisos/1']);
                break;
            default:
                break;
        }
    };
    HeaderComponent.prototype.redireccion = function (notificacion, url) {
        var _this = this;
        this._materiaService.seleccionaMateria(notificacion['materia_id'], this.jwt).then(function (data) {
            _this.router.navigate([url]);
        });
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(function (response) {
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
    };
    HeaderComponent.prototype.open = function (content) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'modal-xl'
        };
        this.modalService.open(content, ngbModalOptions).result.then(function (result) {
        }, function (reason) {
        });
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    Object.defineProperty(HeaderComponent.prototype, "value", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.abrirEncuesta = function () {
        var Encuestas = this.notificaciones.filter(function (n) { return n.tipo == 5; });
        if (Encuestas) {
            for (var _i = 0, Encuestas_1 = Encuestas; _i < Encuestas_1.length; _i++) {
                var encuesta = Encuestas_1[_i];
                if (encuesta['obligatorio'] == '0') {
                    if (this.ruta == '/learning/materia') {
                        this.data = { id: 'encuesta_id', value: encuesta, type: 5 };
                        this.router.navigate(['/learning/home']);
                    }
                    else if (this.ruta == '/learning/home')
                        this._plataformaService.listenEncuesta.emit({ encuesta_id: encuesta });
                }
            }
        }
    };
    HeaderComponent.prototype.marcarAviso = function (aviso) {
        if (aviso.visto == 1) {
            aviso.visto = 0;
        }
        else if (aviso.visto == 0) {
            aviso.visto = 1;
        }
        this._avisosService.marcarAvisos(aviso.aviso_id, aviso.tipo, aviso.visto).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentObligatorio'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], HeaderComponent.prototype, "modalObligatorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentEmergente'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], HeaderComponent.prototype, "modalEmergente", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-learning',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/learning/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/learning/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__["PlataformaService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_8__["MateriaService"],
            src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_9__["AvisosService"],
            src_app_administracion_alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_10__["AlumnoService"],
            src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_11__["AvisosAdminService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/learning/components/sidebar/sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/learning/components/sidebar/sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"home\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item  text-center\">\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\"><img  [src]=\"universidad.logoDark\" width=\"70%\"><br> </a> <!--width=\"200px\"-->\r\n            <p>Matrícula:<br>{{matricula}}</p>\r\n        </a>\r\n        <a *ngIf=\"btnReturn\" (click)=\"vistaAdministrador()\" class=\"list-group-item text-center\">\r\n            <p class=\"_hover\"><i class=\"fa fa-reply\"></i>Regresar al administrador</p>\r\n        </a>\r\n        <a  class=\"list-group-item\">\r\n        <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n        <span>{{rol.rol}}</span>\r\n    </a>\r\n    <div *ngIf=\"privilegios\">\r\n        <div *ngFor=\"let key of Keys\">\r\n            <div *ngFor=\"let privilegio of privilegios[key]\" class=\"text-white\">\r\n                <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                    <i class=\"fa fa-fw {{privilegio.icon}}\"></i>&nbsp;\r\n                    <span>{{ privilegio.label }}</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  <!-- <div *ngFor=\"let privilegio of privilegios\">\r\n      <div class=\"nested-menu\" *ngIf=\"!privilegio.url || privilegio.url == ''\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass(privilegio.privilegio)\">\r\n              <i class=\"fa {{privilegio.icono}}\"></i>\r\n              <span>{{ privilegio.privilegio }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === privilegio.privilegio\">\r\n              <ul class=\"submenu\">\r\n                  <li *ngFor=\"let subprivilegio of privilegio.sub_privilegios\">\r\n                      <a [routerLink]=\"['../' + subprivilegio.url]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa {{subprivilegio.icono}}\"></i>&nbsp;\r\n                          <span>{{ subprivilegio.privilegio }}</span>\r\n                      </a>\r\n                  </li>                \r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw {{privilegio.icono}}\"></i>&nbsp;\r\n          <span>{{ privilegio.privilegio }}</span>\r\n      </a>\r\n  </div>    -->\r\n       \r\n      <!--a [routerLink]=\"['../admin/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n          <span>{{ 'Charts' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-table\"></i>&nbsp;\r\n          <span>{{ 'Tables' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\r\n          <span>{{ 'Forms' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Element' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Grid' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-th-list\"></i>&nbsp;\r\n          <span>{{ 'Component' | translate }}</span>\r\n      </a>\r\n      <div class=\"nested-menu\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n              <i class=\"fa fa-plus\"></i>&nbsp;\r\n              <span>{{ 'Menu' | translate }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n              <ul class=\"submenu\">\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a [routerLink]=\"['../admin/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-file-o\"></i>&nbsp;\r\n          <span>{{ 'Blank Page' | translate }}</span>\r\n      </a>\r\n      <a href=\"http://www.strapui.com/\" class=\"list-group-item\">\r\n          <i class=\"fa fa-caret-down\"></i>&nbsp;\r\n          <span>{{ 'More Themes' | translate }}</span>\r\n      </a-->\r\n\r\n      <div class=\"header-fields\">\r\n          <!--a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n              <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n          </a-->\r\n          <!--div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                  <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                              {{ 'English' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                              {{ 'French' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                              {{ 'Urdu' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                              {{ 'Spanish' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                              {{ 'Italian' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                              {{ 'Farsi' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                              {{ 'German' | translate }}\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div-->\r\n          <div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                  <span><i class=\"fa fa-user\"></i>&nbsp; {{identity.nombre + ' ' + identity.primer_apellido }}</span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['./perfil']\">\r\n                              <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                      \r\n                      <li>\r\n                          <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                              <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n      <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\r\n      <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/learning/components/sidebar/sidebar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/learning/components/sidebar/sidebar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1031;\n  top: 0px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none;\n    white-space: initial; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n  ._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm5pbmcvY29tcG9uZW50cy9zaWRlYmFyL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGxlYXJuaW5nXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFNBQVE7RUFDUixZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsdUJBYjBCO0VBYzFCLFVBQVM7RUFDVCxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUtuQixpQ0FBZ0MsRUFrRm5DO0VBdkdEO0lBeUJZLGlCQTFCa0I7SUEyQmxCLFVBQVM7SUFDVCxpQkFBZ0I7SUFDaEIsWUFBVztJQUNYLHNCQUFxQjtJQUNyQixxQkFBb0IsRUFJdkI7RUFsQ1Q7TUFnQ2dCLG1CQUFrQixFQUNyQjtFQWpDYjtJQW9DWSxvQkFBZ0Q7SUFDaEQsWUFBVyxFQUNkO0VBdENUO0lBd0NZLG9CQUFnRDtJQUNoRCxZQUFXLEVBQ2Q7RUExQ1Q7SUE0Q1ksa0JBQWlCLEVBS3BCO0VBakRUO01BK0NnQiwrQ0FBOEMsRUFDakQ7RUFoRGI7SUFxRFksb0JBQW1CO0lBQ25CLGFBQVksRUFDZjtFQXZEVDtJQXlEWSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0IsRUFtQm5CO0VBOUVUO01BNkRnQixZQUFXO01BQ1gsc0JBQXFCO01BQ3JCLGlCQUFnQjtNQUNoQixpQkFqRWMsRUF3RWpCO0VBdkViO1FBa0VvQixtQkFBa0I7UUFDbEIsZUFBYztRQUNkLHdCQUF1QjtRQUN2QixrQkFBaUIsRUFDcEI7RUF0RWpCOztNQTBFZ0IsWUFBVztNQUNYLGNBQWE7TUFDYixxQkFBb0IsRUFDdkI7RUE3RWI7SUFnRlksb0JBQWdELEVBQ25EO0VBakZUO0lBbUZZLGlCQUFnQjtJQUNoQixhQUFZLEVBaUJmO0VBckdUO01BdUZvQixpQkFBZ0I7TUFDaEIsdUJBekZVO01BMEZWLDRCQUEyQixFQU85QjtFQWhHakI7UUEyRndCLFlBQVcsRUFDZDtFQTVGckI7UUE4RndCLFlBQVcsRUFDZDtFQS9GckI7TUFrR29CLG9CQUFnRCxFQUNuRDtFQU1qQjtFQUVRLGdCQUFlLEVBQ2xCO0VBSEw7RUFLUSxzQkFBcUIsRUFDeEI7RUFOTDtFQVFRLGNBQWE7RUFDYixVQUFTLEVBQ1o7RUFWTDtFQWFZLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsYUFBWSxFQVFmO0VBdkJUO0lBa0JvQixZQUFXO0lBQ1gsY0FBYTtJQUNiLGVBQWMsRUFDakI7RUFLakI7RUFDSTtJQUNJLFVBQVM7SUFDVCxVQUFTLEVBQ1osRUFBQTtFQUVMO0VBQ0k7SUFDSSx5QkFBd0IsRUFDM0IsRUFBQTtFQUVMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCLEVBQUE7RUFHTDtFQUNJLFdBQVUsRUFDYjtFQUVEO0VBQ0ksd0NBQXdEO0VBQ3hELG1CQUFrQixFQUNyQjtFQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLHdDQUF3RCxFQUMzRDtFQUVEO0VBQ0ksZ0JBQWU7RUFDZixhQUFZO0VBQ1osZ0JBQWU7RUFDZixjQUFhO0VBQ2IsVUFBUztFQUNULFlBQVc7RUFDWCxvQkFBbUI7RUFRbkIsMkJBQTBCO0VBSzFCLGlDQUFnQyxFQUNuQztFQXJCRDtJQVNRLGdCQUFlLEVBQ2xCO0VBVkw7SUFZUSxvQkFBZ0Q7SUFDaEQsWUFBVyxFQUNkO0VBU0w7RUFDSSxZQUFXLEVBSWQ7RUFMRDtJQUdRLGNBQWEsRUFDaEI7RUFHTDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGVhcm5pbmcvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbi5zaWRlYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDMxO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAyMzVweDtcclxuICAgIHdpZHRoOiAyMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsOyBcclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA+IC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLWRyb3Bkb3duIHtcclxuICAgICAgICAqOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcixcclxuICAgICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgLnBhbmVsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5lc3RlZC1tZW51IHtcclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5uZXN0ZWQge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJiAuZXhwYW5kIHtcclxuICAgICAgICB1bC5zdWJtZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZWFkZXItZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyMzZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbGxhcHNlZCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5faG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/learning/components/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/learning/components/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var src_app_services_alumno_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alumno.service */ "./src/app/services/alumno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, _usuarioService, _alumnoService, router) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this._alumnoService = _alumnoService;
        this.router = router;
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__["universidad"];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
        this.btnReturn = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('tmp_jwt'))
            this.btnReturn = true;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.isActive = false;
        this.collapsed = true;
        this.showMenu = '';
        this.pushRightClass = '';
        this.toggleCollapsed();
        if (this.identity.alumno) {
            this.alumno = this.identity.alumno;
            this.matricula = this.identity.alumno.clave_alumno;
        }
        else {
            this.alumno = null;
            this.matricula = null;
        }
        this._alumnoService.infoPlataformaCargada.subscribe(function (response) {
            _this.privilegios = response['privilegios'];
            _this.Keys = Object.keys(_this.privilegios);
        });
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        // console.log(this.collapsed);
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
    };
    SidebarComponent.prototype.vistaAdministrador = function () {
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', sessionStorage.getItem('tmp_jwt'));
        localStorage.setItem('identity', sessionStorage.getItem('tmp_identity'));
        sessionStorage.removeItem('tmp_jwt');
        sessionStorage.removeItem('tmp_identity');
        if (sessionStorage.getItem('urlRedirect')) {
            this.router.navigate([sessionStorage.getItem('urlRedirect')]);
            sessionStorage.removeItem('urlRedirect');
        }
        else {
            this.router.navigate(['/admin/alumno/consulta']);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-learning',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/learning/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/learning/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_alumno_service__WEBPACK_IMPORTED_MODULE_6__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/learning/learning-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/learning/learning-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LearningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningRoutingModule", function() { return LearningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _learning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning.component */ "./src/app/learning/learning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _learning_component__WEBPACK_IMPORTED_MODULE_2__["LearningComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: './home-learning/home-learning.module#HomeLearningModule' },
            { path: 'materia', loadChildren: 'src/app/learning/materia/materia.module#MateriaModule' },
            { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule' },
            { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
            { path: 'auth/:id', loadChildren: './auth/auth.module#AuthModule' },
            { path: 'pagos', loadChildren: 'src/app/learning/pagos/pagos.module#PagosModule' },
            { path: 'realizar-pago/:id', loadChildren: 'src/app/components/pago/pago.module#PagoModule' },
            { path: 'biblioteca', loadChildren: './biblioteca/biblioteca.module#BibliotecaModule' },
            { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
            { path: 'historial', loadChildren: './historial/historial.module#HistorialModule' },
            { path: 'expediente', loadChildren: './expediente/expediente.module#ExpedienteModule' },
            { path: 'serviciosAcademicos', loadChildren: './servicios-academicos/servicios-academicos.module#ServiciosAcademicosModule' },
            { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioModule' },
            { path: 'avisos/:id', loadChildren: '../components/avisos/avisos.module#AvisosModule' },
            { path: 'diploma', loadChildren: './diploma/diploma.module#DiplomaModule' },
            { path: 'solicitud', loadChildren: './solicitud/solicitud.module#SolicitudModule' },
            { path: 'encuesta/:id/:id2', loadChildren: 'src/app/components/encuestas/encuestas.module#EncuestasModule' },
            { path: 'tickets', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
            { path: 'tickets/:id', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
            { path: 'bandeja-retro/:id', loadChildren: 'src/app/learning/bandeja-retroalimentaciones/bandeja-retroalimentaciones.module#BandejaRetroalimentacionesModule' },
            { path: 'bandeja-mensajes', loadChildren: 'src/app/learning/bandeja-mensajes/bandeja-mensajes.module#BandejaMensajesModule' },
            { path: 'materias-extras', loadChildren: 'src/app/learning/materias-extras/materias-extras.module#MateriasExtrasModule' },
            { path: 'horario', loadChildren: 'src/app/learning/horario/horario.module#HorarioModule' },
            { path: 'avance', loadChildren: 'src/app/materia/avance/avance.module#AvanceModule' },
            { path: 'grabaciones', loadChildren: 'src/app/learning/videos-videoconferencia/videos-videoconferencia.module#VideosVideoconferenciaModule' }
        ]
    }
];
var LearningRoutingModule = /** @class */ (function () {
    function LearningRoutingModule() {
    }
    LearningRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LearningRoutingModule);
    return LearningRoutingModule;
}());

// C:\wamp64\www\estudy_new\frontEstudy\src\app\learning\consulta-videos-videoconferencia


/***/ }),

/***/ "./src/app/learning/learning.component.html":
/*!**************************************************!*\
  !*** ./src/app/learning/learning.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-learning></app-header-learning>\r\n<app-sidebar-learning  (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar-learning>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <div class=\"row d-print-none\" >\r\n        <div  *ngIf=\"idSituacionAlumno != null && idSituacionAlumno !=1\" class=\"col-md-12 alert alert-danger text-center\">\r\n            <p>Estimado alumno, por el momento no puedes acceder a tu plataforma</p>   \r\n            <a [routerLink]=\"['/learning/tickets/' + ticket.ticket_id]\" class=\"btn btn-danger\">Ver observación</a>\r\n        </div>\r\n        <div *ngIf=\"idSituacionPago == 2 && mostrarHeader\" class=\"col-md-12 alert alert-danger text-center no-print\">\r\n            <p >Estimado alumno, Tienes pago<span *ngIf=\"pagosPendientes != 1\">s</span> pendiente<span *ngIf=\"pagosPendientes != 1\">s</span></p>   \r\n            <button [routerLink]=\"['/learning/pagos']\" class=\"btn btn-info btn-sm ml-3\">Ver pagos</button>\r\n        </div>\r\n        <div *ngIf=\"idSituacionPago == 1 && pagosPendientes > 0 \" class=\"col-md-12 alert alert-warning text-center no-print\">\r\n            Estimado alumno, recuerda completar el pago de tu colegiatura antes del día  <b>{{diaCierre}}</b>\r\n            <button [routerLink]=\"['/learning/pagos']\" class=\"btn btn-warning btn-sm ml-3\">Ver mis pagos</button>\r\n        </div>\r\n    </div>\r\n       <!--div  *ngIf=\"notificacion\" class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h4>Motivo:</h4>\r\n            <p>{{notificacion.descripcion_ticket}}</p>\r\n        </div>\r\n    </div-->\r\n    \r\n    <app-page-header  [breadcum]=\"breadcum\" ></app-page-header>\r\n    <router-outlet  (activate)=\"onActivate($event)\" ></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/learning/learning.component.scss":
/*!**************************************************!*\
  !*** ./src/app/learning/learning.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\nbody {\n  color: red; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm5pbmcvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbGVhcm5pbmdcXGxlYXJuaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0kseUNBQXdDLEVBQzNDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLFdBQVUsRUFDYjs7QUFDRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLDJCQUEwQjtJQUMxQiw0QkFBMkIsRUFDOUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlYXJuaW5nL2xlYXJuaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbmJvZHl7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/learning/learning.component.ts":
/*!************************************************!*\
  !*** ./src/app/learning/learning.component.ts ***!
  \************************************************/
/*! exports provided: LearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningComponent", function() { return LearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/services/alumno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LearningComponent = /** @class */ (function () {
    function LearningComponent(_usuarioService, _router, _alumnoService) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._alumnoService = _alumnoService;
        this.breadcumDesactivado = false;
        this.idSituacionAlumno = null;
        this.mostrarHeader = true;
        this.ticket = null;
    }
    LearningComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identity = this._usuarioService.getIdentity();
        this.breadcum = this._usuarioService.getBreadcum();
        this.suscripcion = this._alumnoService.consultaPlataforma().subscribe(function (response) {
            if (response && response['status']) {
                var privilegios = response['privilegios'];
                _this.ticket = response['ticket'];
                _this.idSituacionAlumno = response['idSituacionAlumno'];
                _this.idSituacionPago = response['idSituacionPago'];
                var pago = response['pago'];
                if (pago && pago['status']) {
                    var diaPago = pago['diaPago'];
                    _this.pagosPendientes = pago['pagosPendientes'];
                    _this.bloqueo = pago['bloqueo'];
                    if (_this.bloqueo == 1) {
                        _this.idSituacionPago = 2;
                    }
                    _this.diaCierre = Math.min.apply(Math, diaPago);
                }
                else {
                    if (_this.idSituacionPago != 2)
                        _this.pagosPendientes = 0;
                    else
                        _this.pagosPendientes = null;
                }
                localStorage.setItem('privilegiosAlumno', JSON.stringify(privilegios));
                localStorage.setItem('situacionAlumno', _this.idSituacionAlumno);
                localStorage.setItem('situacionPago', _this.idSituacionPago);
                _this._alumnoService.infoPlataformaCargada.emit({
                    'privilegios': privilegios,
                    'idSituacionAlumno': _this.idSituacionAlumno,
                    'idSituacionPago': _this.idSituacionPago,
                });
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
    };
    LearningComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LearningComponent.prototype.onActivate = function (e) {
        this.breadcum = this._usuarioService.getBreadcum();
    };
    LearningComponent.prototype.ngOnDestroy = function () {
        this.suscripcion.unsubscribe();
    };
    LearningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learning',
            template: __webpack_require__(/*! ./learning.component.html */ "./src/app/learning/learning.component.html"),
            styles: [__webpack_require__(/*! ./learning.component.scss */ "./src/app/learning/learning.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoService"]])
    ], LearningComponent);
    return LearningComponent;
}());



/***/ }),

/***/ "./src/app/learning/learning.module.ts":
/*!*********************************************!*\
  !*** ./src/app/learning/learning.module.ts ***!
  \*********************************************/
/*! exports provided: LearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningModule", function() { return LearningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _learning_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-routing.module */ "./src/app/learning/learning-routing.module.ts");
/* harmony import */ var _learning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learning.component */ "./src/app/learning/learning.component.ts");
/* harmony import */ var _shared_modules_layout_learning_layout_learning_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modules/layout-learning/layout-learning.module */ "./src/app/shared/modules/layout-learning/layout-learning.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _inscripcion_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inscripcion/solicitud/solicitud.module */ "./src/app/inscripcion/solicitud/solicitud.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LearningModule = /** @class */ (function () {
    function LearningModule() {
    }
    LearningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_learning_component__WEBPACK_IMPORTED_MODULE_4__["LearningComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _learning_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearningRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _shared_modules_layout_learning_layout_learning_module__WEBPACK_IMPORTED_MODULE_5__["LayoutLearningModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _inscripcion_solicitud_solicitud_module__WEBPACK_IMPORTED_MODULE_7__["SolicitudModule"]
            ]
        })
    ], LearningModule);
    return LearningModule;
}());



/***/ }),

/***/ "./src/app/services/plataforma.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/plataforma.service.ts ***!
  \************************************************/
/*! exports provided: PlataformaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaService", function() { return PlataformaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlataformaService = /** @class */ (function () {
    function PlataformaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.listenTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenEncuesta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PlataformaService.prototype.cambiaAvisoEncuestaEstatus = function (encuesta_id) {
        this.change.emit(encuesta_id);
    };
    PlataformaService.prototype.consultaNomRetro = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaRetrosDocente = function (jwt, id_docente) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjDocente = function (jwt, id_docente, id_materia) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/notificaciones/onlineDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/numMensajesAlumno.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnosDetalles = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/mensajeriaAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaConferenciasActivas = function () {
        return this._httpClient.get(this.url + '/learning/notificaciones/consultaConferenciasAlumno.php');
    };
    PlataformaService.prototype.conferenciasActivasDocente = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/consultaConferenciasActivas.php' + params);
    };
    PlataformaService.prototype.verNotificacionBloqueo = function (id, id_rol) {
        var params = '?id_persona=' + id;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/general/tickets/consultaBloqueo.php' + params);
    };
    PlataformaService.prototype.consultaTicket = function () {
        return this._httpClient.get(this.url + 'general/tickets/notificacionTicket.php');
    };
    PlataformaService.prototype.consultaNotificaciones = function (idRol) {
        if (idRol == "2" || idRol == "4") {
            return this._httpClient.get(this.url + 'learning/notificaciones/general.php');
        }
        else if (idRol == "3") {
            return this._httpClient.get(this.url + 'controlEscolar/notificaciones/general.php');
        }
    };
    PlataformaService.prototype.consultaJWT = function (matricula, rol) {
        var formData = new FormData();
        formData.append('rol', rol);
        formData.append('clave', matricula);
        return this._httpClient.post(this.url + 'general/auth_clave.php', formData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlataformaService.prototype, "change", void 0);
    PlataformaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlataformaService);
    return PlataformaService;
}());



/***/ }),

/***/ "./src/app/shared/modules/layout-learning/layout-learning.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/modules/layout-learning/layout-learning.module.ts ***!
  \**************************************************************************/
/*! exports provided: LayoutLearningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLearningModule", function() { return LayoutLearningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _learning_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../learning/components/header/header.component */ "./src/app/learning/components/header/header.component.ts");
/* harmony import */ var _learning_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../learning/components/sidebar/sidebar.component */ "./src/app/learning/components/sidebar/sidebar.component.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutLearningModule = /** @class */ (function () {
    function LayoutLearningModule() {
    }
    LayoutLearningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_learning_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _learning_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_7__["LogotipoUsuarioModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__["ArchivoModule"]
            ],
            exports: [
                _learning_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _learning_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ]
        })
    ], LayoutLearningModule);
    return LayoutLearningModule;
}());



/***/ })

}]);
//# sourceMappingURL=learning-learning-module.js.map