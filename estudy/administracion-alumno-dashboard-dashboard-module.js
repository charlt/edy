(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-alumno-dashboard-dashboard-module"],{

/***/ "./src/app/administracion/alumno/dashboard/dashboard-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/alumno/dashboard/dashboard-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/administracion/alumno/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardAlumnoComponent"],
    }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/dashboard/dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/dashboard/dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<graficas-persona [idPersona]=\"idAlumno\"></graficas-persona><br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n\r\n    <a *ngFor=\"let button of Buttons; let i = index;\" [hidden]=\"isHidden(button.condition)\" \r\n     [routerLink]=\"[button.link]\" class=\"btn btn-lg btn-info {{button.class}}\">\r\n      <h1>\r\n        <i class=\"fa fa-{{button.icon}}\"></i>\r\n      </h1>\r\n      <p>{{button.label}}</p>\r\n    </a>\r\n\r\n  <!-- <div class=\"col-md-2\"> -->\r\n    <!-- <a [hidden]=\"rol_id == 3 || rol_id == 5 \" [routerLink]=\"['/admin/alumno/materias/'+idAlumno]\" class=\"btn btn-lg btn-info\">\r\n      <h1>\r\n        <i class=\"fa fa-book\"></i>\r\n      </h1>\r\n      <p>Materias</p>\r\n    </a> -->\r\n  <!-- </div>\r\n  <div class=\"col-md-2\"> -->\r\n    <!-- <a [hidden]=\"rol_id == 3\" [routerLink]=\"['/admin/alumno/accesos/'+idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-sign-in\"></i>\r\n      </h1>\r\n      <p>Accesos</p>\r\n    </a>\r\n    <a [hidden]=\"rol_id == 3\" [routerLink]=\"['/admin/alumno/expediente/' + idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-file-text-o _hover\"></i>\r\n      </h1>\r\n      <p>Expediente</p>\r\n    </a>\r\n    <a [hidden]=\"rol_id == 3 || rol_id == 5\" [routerLink]=\"['/admin/alumno/historial/' + idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-list-alt _hover\"></i>\r\n      </h1>\r\n      <p>Historial </p>\r\n    </a>\r\n    <a [hidden]=\"rol_id == 3\" [routerLink]=\"['/admin/alumno/notas/' + idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i>\r\n      </h1>\r\n      <p>Notas</p>\r\n    </a>\r\n    <a [hidden]=\"rol_id == 3\" [routerLink]=\"['/admin/alumno/solicitud/' + idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i>\r\n      </h1>\r\n      <p>Solicitud</p>\r\n    </a>\r\n    <a [hidden]=\"rol_id != 3\" [routerLink]=\"['/docente/accesos/'+idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-sign-in\"></i>\r\n      </h1>\r\n      <p>Accesos</p>\r\n    </a>\r\n    <a [hidden]=\"rol_id == 3\" [routerLink]=\"['/admin/alumno/avance/'+idAlumno]\" class=\"btn btn-lg btn-info ml-2\">\r\n      <h1>\r\n        <i class=\"fa fa-search\"></i>\r\n      </h1>\r\n      <p>Avance</p>\r\n    </a> -->\r\n  <!-- </div> -->\r\n  <button [hidden]=\"rol_id == 3 || rol_id == 5\" class=\"btn btn-light pull-right\" (click)=\"refresh()\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i>Regresar a aspirante</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/dashboard/dashboard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/alumno/dashboard/dashboard.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/alumno/dashboard/dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/alumno/dashboard/dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAlumnoComponent", function() { return DashboardAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardAlumnoComponent = /** @class */ (function () {
    function DashboardAlumnoComponent(route, _usuarioService, _alumnosService, router) {
        this.route = route;
        this._usuarioService = _usuarioService;
        this._alumnosService = _alumnosService;
        this.router = router;
        this.plataforma = this.router.url.split('/')[1];
        this.title = "";
        this._usuarioService.pushBreadcum('Alumnos', '/admin/alumno', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    DashboardAlumnoComponent.prototype.ngOnInit = function () {
        this.rol_id = this._usuarioService.getIdentity().rol_id;
        this.idAlumno = this.route.snapshot.params['id'];
        var link, link_accesos;
        if (this.rol_id != 3) {
            link = "/" + this.plataforma + "/alumno";
            link_accesos = "/" + link + "/accesos/" + this.idAlumno;
        }
        else {
            link = "/" + this.plataforma;
            link_accesos = "/" + link + "/accesos/" + this.idAlumno;
        }
        this.Buttons = [
            { label: 'Materias', link: link + "/materias/" + this.idAlumno, class: '', icon: 'book', condition: 'this.rol_id == 3 || this.rol_id == 5' },
            { label: 'Accesos', link: link_accesos, class: 'ml-2', icon: 'sign-in', condition: '' },
            { label: 'Expediente', link: "/" + link + "/expediente/" + this.idAlumno, class: 'ml-2', icon: 'file-text-o', condition: 'this.rol_id == 3' },
            { label: 'Historial', link: "/" + link + "/historial/" + this.idAlumno, class: 'ml-2', icon: 'list-alt', condition: 'this.rol_id == 3 || this.rol_id == 5' },
            { label: 'Notas', link: "/" + link + "/notas/" + this.idAlumno, class: 'ml-2', icon: 'sticky-note-o', condition: 'this.rol_id == 3' },
            { label: 'Solicitud', link: "/" + link + "/solicitud/" + this.idAlumno, class: 'ml-2', icon: 'address-book-o', condition: 'this.rol_id == 3' },
            { label: 'Avance', link: "/" + link + "/avance/" + this.idAlumno, class: 'ml-2', icon: 'search', condition: 'this.rol_id == 3' }
        ];
        this.consultaAlumno();
    };
    DashboardAlumnoComponent.prototype.consultaAlumno = function () {
        var _this = this;
        this._alumnosService.consultaEspecifica(this.idAlumno, '').subscribe(function (response) {
            if (response && response['status']) {
                _this.alumno = response['alumno'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardAlumnoComponent.prototype.refresh = function () {
        alertify.confirm('', '¿Deseas regresar el alumno como aspirante?', function () {
            this._alumnosService.rollBack(this.alumno.usuario_id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    DashboardAlumnoComponent.prototype.isHidden = function (value) {
        return eval(value);
    };
    DashboardAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/administracion/alumno/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/administracion/alumno/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardAlumnoComponent);
    return DashboardAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/dashboard/dashboard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/alumno/dashboard/dashboard.module.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/administracion/alumno/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/administracion/alumno/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_components_graficas_persona_graficas_persona_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/graficas-persona/graficas-persona.module */ "./src/app/components/graficas-persona/graficas-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardAlumnoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                src_app_components_graficas_persona_graficas_persona_module__WEBPACK_IMPORTED_MODULE_4__["GraficasPersonaModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=administracion-alumno-dashboard-dashboard-module.js.map