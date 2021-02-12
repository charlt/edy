(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asesor-asesor-module"],{

/***/ "./src/app/administracion/asignatura/services/asignatura.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/asignatura/services/asignatura.service.ts ***!
  \**************************************************************************/
/*! exports provided: AsignaturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaService", function() { return AsignaturaService; });
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




var AsignaturaService = /** @class */ (function () {
    function AsignaturaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AsignaturaService.prototype.consultaMateriasPlan = function (id) {
        var params = '?id_plan_estudio=' + id;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaAsignatura.php' + params);
    };
    AsignaturaService.prototype.guardaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('archivo', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/editarContenido.php', formData);
    };
    AsignaturaService.prototype.eliminaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('url_contenido', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/eliminaContenido.php', formData);
    };
    AsignaturaService.prototype.consultaEspecificaAsign = function (jwt, id_asignatura) {
        var params = '?id_asignatura=' + id_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consulta.php' + params);
    };
    AsignaturaService.prototype.excel = function (file, jwt) {
        var formData = new FormData();
        formData.append('excel', file);
        formData.append('columna', '7');
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'extras/consultaexcel.php', formData);
    };
    AsignaturaService.prototype.consulta = function (jwt, id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/consulta.php' + params);
    };
    AsignaturaService.prototype.elimina = function (id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/elimina.php' + params);
    };
    AsignaturaService.prototype.consultaModulo = function (id, tipo, jwt) {
        var params = '?id_asignatura=' + id;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaModulos.php' + params);
    };
    AsignaturaService.prototype.consultaOrden = function (id) {
        var params = '?id_plan_estudio=' + id;
        // params += '&tipo='+tipo;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    AsignaturaService.prototype.insertaPlanOrdenAsignatura = function (id_plan_orden, id_asignatura, Asignatura, origen) {
        var formData = new FormData();
        if (id_plan_orden) {
            formData.append('id_plan_orden', id_plan_orden);
        }
        else {
            formData.append('id_plan_orden', null);
        }
        if (id_asignatura)
            formData.append('id_asignatura', id_asignatura);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        formData.append('origen', origen);
        if (origen == 1 || origen == 2) {
            return this._httpClient.post(this.url + 'admin/asignaturas/insertaPlanOrdenAsignatura.php', formData);
        }
        else if (origen == 3) {
            //nuevo componente de asignatura
            return this._httpClient.post(this.url + 'admin/asignaturas/clonarAsignatura.php', formData);
        }
    };
    AsignaturaService.prototype.modificaAsignatura = function (Asignatura, jwt, id_asignatura) {
        var formData = new FormData();
        //formData.append('carrera', planEstudio.get('carreraAsignatura').value);
        formData.append('asignatura_clave', Asignatura.get('claveAsignatura').value);
        formData.append('asignatura', Asignatura.get('nombreAsignatura').value);
        formData.append('creditos', Asignatura.get('creditosAsignatura').value);
        formData.append('tipo_asignatura_id', Asignatura.get('tipoAsignatura').value);
        formData.append('id_asignatura_padre', Asignatura.get('asignaturaPlan').value);
        // formData.append('orden_jerarquico', Asignatura.get('gradoAsignatura').value);
        // formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        // formData.append('orden_jerarquico', '1');
        // console.log(Asignatura.get('gradoAsignatura').value);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        if (Asignatura.get('califMax').value) {
            formData.append('calif_max', Asignatura.get('califMax').value);
        }
        else {
            formData.append('calif_max', null);
        }
        if (Asignatura.get('califMin').value) {
            formData.append('calif_min', Asignatura.get('califMin').value);
        }
        else {
            formData.append('calif_min', null);
        }
        if (!id_asignatura) {
            return this._httpClient.post(this.url + 'admin/asignaturas/crea.php', formData);
        }
        else {
            formData.append('id_asignatura', id_asignatura);
            return this._httpClient.post(this.url + 'admin/asignaturas/edita.php', formData);
        }
    };
    AsignaturaService.prototype.insertaEditor = function (idAsignatura, columna, tex, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignatura);
        formData.append('columna', columna);
        formData.append('tex', tex);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaPresentacion.php', formData);
    };
    AsignaturaService.prototype.imagen = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagen.php', formData);
    };
    AsignaturaService.prototype.imagenPrevia = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagenPrevia.php', formData);
    };
    AsignaturaService.prototype.consultaAsignaturas = function (id_docente) {
        var params = '?id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/docente/consultaAsignaturas.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasTroncoComun = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/consultaAsignaturasTronco.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturaGrupo = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consultaGrupos.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasAdminDummy = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/materia/consultaAdministradorDummy.php' + params);
    };
    AsignaturaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsignaturaService);
    return AsignaturaService;
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

/***/ "./src/app/asesor/asesor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/asesor/asesor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AsesorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorRoutingModule", function() { return AsesorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asesor.component */ "./src/app/asesor/asesor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _asesor_component__WEBPACK_IMPORTED_MODULE_2__["AsesorComponent"],
        children: [
            { path: '', redirectTo: 'aspirante', pathMatch: 'prefix' },
            //{ path: 'home', loadChildren: '../asesor/dashboard/dashboard.module#DashboardModule' },
            { path: 'home', loadChildren: '../asesor/aspirante/aspirante.module#AspiranteModule' },
            { path: 'alumno', loadChildren: '../asesor/alumno/alumno.module#AlumnoModule' },
            { path: 'aspirante', loadChildren: '../asesor/aspirante/aspirante.module#AspiranteModule' },
        ]
    }
];
var AsesorRoutingModule = /** @class */ (function () {
    function AsesorRoutingModule() {
    }
    AsesorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AsesorRoutingModule);
    return AsesorRoutingModule;
}());



/***/ }),

/***/ "./src/app/asesor/asesor.component.html":
/*!**********************************************!*\
  !*** ./src/app/asesor/asesor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-asesor></app-header-asesor>\r\n<app-sidebar-asesor (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar-asesor>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <app-page-header [breadcum]=\"breadcum\"></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/asesor/asesor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/asesor/asesor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFzZXNvclxcYXNlc29yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0kseUNBQXdDLEVBQzNDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLDJCQUEwQjtJQUMxQiw0QkFBMkIsRUFDOUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FzZXNvci9hc2Vzb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbGxhcHNlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/asesor/asesor.component.ts":
/*!********************************************!*\
  !*** ./src/app/asesor/asesor.component.ts ***!
  \********************************************/
/*! exports provided: AsesorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorComponent", function() { return AsesorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsesorComponent = /** @class */ (function () {
    function AsesorComponent(_usuarioService, _router) {
        this._usuarioService = _usuarioService;
        this._router = _router;
    }
    AsesorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcum = this._usuarioService.getBreadcum();
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // console.log(event.url);            
                _this.breadcum = _this._usuarioService.getBreadcum();
            }
        });
    };
    AsesorComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    AsesorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asesor',
            template: __webpack_require__(/*! ./asesor.component.html */ "./src/app/asesor/asesor.component.html"),
            styles: [__webpack_require__(/*! ./asesor.component.scss */ "./src/app/asesor/asesor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AsesorComponent);
    return AsesorComponent;
}());



/***/ }),

/***/ "./src/app/asesor/asesor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/asesor/asesor.module.ts ***!
  \*****************************************/
/*! exports provided: AsesorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorModule", function() { return AsesorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asesor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asesor-routing.module */ "./src/app/asesor/asesor-routing.module.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _asesor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asesor.component */ "./src/app/asesor/asesor.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_modules_layout_asesor_layout_asesor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/layout-asesor/layout-asesor.module */ "./src/app/shared/modules/layout-asesor/layout-asesor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AsesorModule = /** @class */ (function () {
    function AsesorModule() {
    }
    AsesorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_asesor_component__WEBPACK_IMPORTED_MODULE_4__["AsesorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _asesor_routing_module__WEBPACK_IMPORTED_MODULE_2__["AsesorRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _shared_modules_layout_asesor_layout_asesor_module__WEBPACK_IMPORTED_MODULE_6__["LayoutAsesorModule"]
            ],
            providers: [
                _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
            ]
        })
    ], AsesorModule);
    return AsesorModule;
}());



/***/ }),

/***/ "./src/app/asesor/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/asesor/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\" [style.background-color]=\"universidad.color\">\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\" *ngIf=\"flagConferencia\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"open(modalConferencia)\"><span class=\"badge badge-success\">Ver clase en linea</span></a>\r\n            </li>\r\n            <li li class=\"nav-item dropdown iz\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-bell-o\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                    <span *ngIf=\"totalNotificaciones >= 1\" class=\"badge badge-success\">{{totalNotificaciones}}</span>\r\n                    <span *ngIf=\"!totalNotificaciones\" class=\"badge badge-secondary\">0</span>\r\n                </a>\r\n                <div *ngIf=\"totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 320px;\"\r\n                    ngbDropdownMenu>\r\n                    <div ngbTooltip=\"{{notificacion.titulo}}\" *ngFor=\"let notificacion of notificaciones\" (click)=\"abrirNotificacion(notificacion);\">\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item py-0 my-0\">\r\n                            <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                            <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                        </a>\r\n                        <li class=\"dropdown-divider\"></li>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 323px;\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        <b>Sin notificaciones pendientes</b>\r\n                    </a><hr>\r\n                    <div style=\"text-align: center;\">\r\n                        <a href=\"javascript:void()\" [routerLink]=\"['/docente/avisos']\">Ir a avisos</a>\r\n                    </div>\r\n                </div>\r\n\r\n            </li>\r\n            <li ngbDropdown class=\"d-inline-block nav-item btn_retro\">\r\n                <a href=\"javascript:void(0)\" (click)=\"consultaNombreRetros(); consultaRetros()\" class=\"nav-link notificacion\" placement=\"bottom\" ngbTooltip=\"Retroalimentaciones\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-exchange\"></i>\r\n                    <span *ngIf=\"totalRetros >= 1\" class=\"badge badge-success\">{{totalRetros}}</span>\r\n                    <span *ngIf=\"!totalRetros\" class=\"badge badge-secondary\">0</span>                     \r\n                </a>\r\n                <div ngbDropdownMenu style=\"width: 300px;\">\r\n                    <div *ngIf=\"retroalimentaciones\">\r\n                        <div *ngFor=\"let nombreRetro of nombresRetros\">\r\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"nuevoLink(nombreRetro.actividad_id, nombreRetro.materia_id );\">\r\n                                <b>\r\n                                    {{nombreRetro.primer_apellido}} {{nombreRetro.segundo_apellido}} {{nombreRetro.nombre}}\r\n                                </b>\r\n                                <p class=\"contenido\">{{nombreRetro.num_retros}} retroalimentación(es) nueva(s)</p>\r\n                            </a>\r\n                            <li class=\"dropdown-divider\"></li>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!totalRetros || totalRetros == 0\">\r\n                        <button class=\"dropdown-item\"><b>{{'_sinMensajes' | translate }}</b></button><hr>\r\n                    </div>\r\n                    <div style=\"text-align: center;\">\r\n                        <a href=\"javascript:void()\" [routerLink]=\"['/docente/bandeja-retro']\">Ir a bandeja de retroalimentaciones</a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li ngbDropdown class=\"d-inline-block nav-item btn_msg\">\r\n                <!-- <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"Mensajes\">\r\n                   <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                   <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                   <span *ngIf=\"!numMensajes\" class=\"badge badge-secondary\">0</span> \r\n               </a> -->\r\n               <a href=\"javascript:void(0)\" (click)=\"consultaMsjAlumnos()\" class=\"nav-link notificacion\" placement=\"bottom\" ngbTooltip=\"Mensajes\" ngbDropdownToggle>\r\n                   <i class=\"fa fa-envelope\"></i>\r\n                   <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                   <span *ngIf=\"!numMensajes\" class=\"badge badge-secondary\">0</span>                     \r\n               </a>\r\n               <div ngbDropdownMenu style=\"width: 300px;\">\r\n                   <div *ngIf=\"numMensajes\">\r\n                       <div *ngFor=\"let mensaje of mensajes\">\r\n                           <button class=\"dropdown-item\" (click)=\"openMensajeria(modalMensajeria, mensaje.materia_id)\">\r\n                               <b>\r\n                                   {{mensaje.primer_apellido}} {{mensaje.segundo_apellido}} {{mensaje.nombre}}\r\n                               </b>\r\n                               <p class=\"contenido\">{{mensaje.num_mensajes}} mensaje(s) nuevo(s)</p>\r\n                           </button>\r\n                           <li class=\"dropdown-divider\"></li>\r\n                       </div>\r\n                   </div>\r\n                   <div *ngIf=\"numMensajes == 0\">\r\n                       <button class=\"dropdown-item\"><b>{{'_sinMensajes' | translate }}</b></button><hr>\r\n                       <div class=\"text-center\">\r\n                           <a href=\"javascript:void(0)\" [routerLink]=\"['bandeja-mensajes']\">Ver mensajes</a>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown user-menu btn_name\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <app-logotipo-usuario [iniciales]=\"nombre\" [ancho]=\"25\" [alto]=\"25\" [tamLetra]=\"15\" [color]=\"colorLogo\"></app-logotipo-usuario>\r\n                        {{identity.nombre + ' ' + identity.primer_apellido }}       \r\n                </a>\r\n                <div class=\"dropdown-menu  dropdown-menu-left \" ngbDropdownMenu  >\r\n                    <a [routerLink]=\"['./perfil']\" [routerLinkActive]=\"['router-link-active']\" class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- <ng-template #modalMensajeria let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" >\r\n                    <app-mensajeria [activo]=\"0\" [idMateria]=\"idMateria\"></app-mensajeria>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n        </div>\r\n    </ng-template> -->\r\n    <!-- <ng-template #modalConferencia let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Clase en curso </h4>\r\n        </div>\r\n        <div class=\"modal-body m-3\">\r\n            <div *ngIf=\"selectedConferencia\" class=\"row\">\r\n                <div class=\"col text-center\">\r\n                    <h5><b>{{selectedConferencia.nombre}}</b></h5>\r\n                    <p>{{selectedConferencia.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}} - {{selectedConferencia.fecha_fin | date: 'dd/MM/yyyy hh:mm a'}}</p>\r\n                    <p class=\"mt-4\"> Para iniciar tu clase en línea, debes ingresar por el siguiente link:</p>\r\n                    \r\n                    <button [disabled]=\"cargandoConferencia\" (click)=\"acceder_sala(selectedConferencia, 0)\" class=\"btn btn-lg btn-success \">\r\n                        <i class=\"fa fa-spin fa-spinner\" *ngIf=\"cargandoConferencia\"></i> Acceder a sala\r\n                    </button>\r\n                    <button [disabled]=\"cerrandoConferencia\" (click)=\"cerrarSala(selectedConferencia)\" class=\"btn btn-lg btn-light\">\r\n                        <i class=\"fa fa-spin fa-spinner\" *ngIf=\"cerrandoConferencia\"></i> Terminar clase\r\n                    </button>\r\n                    <br>\r\n                    <small>(Debes habilitar la opción de ventanas emergentes) {{tipoVideoconferencia}}</small>\r\n                    <p *ngIf=\"urlMeet\">No puedes acceder? da clic <a href=\"{{urlMeet}}\" > es este vínculo.</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); flagModal = false\">Salir</button>\r\n        </div>\r\n    </ng-template> -->\r\n\r\n    <!-- <ng-template #contentObligatorio let-modal>\r\n        <div class=\"modal-body p-5 text-center\">\r\n            <h5>Tienes notificaciones en tu plataforma:</h5>\r\n            <div  *ngFor=\"let notificacion of notificacionesObligatorias\" >\r\n                <a class=\"btn btn-primary mt-3\" (click)=\"modal.close(); abrirNotificacion(notificacion);\" href=\"javascript:void()\">\r\n                    <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                    <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ng-template> -->\r\n\r\n    <!-- <ng-template #contentEmergente let-modal>\r\n        <div class=\"modal-header alert-info\">\r\n            <h5>Tienes un aviso de la escuela</h5>\r\n\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body px-5 text-center\">\r\n            <div class=\"container border rounded py-3 mt-2\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <label class=\"form-check-label float-right\" >\r\n                            <input (change)=\"marcarAviso(notificacionesEmergentes)\" [checked]=\"notificacionesEmergentes.visto == 1\" class=\"form-check-input\" type=\"checkbox\">\r\n                            Marcar como visto\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <app-archivo class=\"archivo\" *ngIf=\"notificacionesEmergentes.adjunto\" [urlBase]=\"notificacionesEmergentes.adjunto\"></app-archivo>\r\n                        <h5>{{notificacionesEmergentes.titulo}}</h5>\r\n                        <div [innerHTML]=\"notificacionesEmergentes.mensaje\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n        </div>\r\n    </ng-template> -->\r\n</nav>  "

/***/ }),

/***/ "./src/app/asesor/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/asesor/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar .navbar-brand {\n  color: #fff; }\n\n:host .navbar .nav-item > a {\n  color: #eee; }\n\n:host .navbar .nav-item > a:hover {\n    color: #fff; }\n\n:host .navbar .user-menu {\n  min-width: 200px;\n  text-align: right; }\n\n:host .navbar .user-menu > a {\n  overflow-x: hidden; }\n\n:host .notification {\n  width: 100px; }\n\n:host .messages {\n  width: 300px; }\n\n:host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n\n:host .messages .media:last-child {\n      border-bottom: none; }\n\n:host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n\n:host .messages .media-body .small {\n    margin: 0; }\n\n:host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.contenido {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL2NvbXBvbmVudHMvaGVhZGVyL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFzZXNvclxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEdBO0VBSVksWUFBVyxFQUNkOztBQUxUO0VBT1ksWUFBVyxFQUlkOztBQVhUO0lBU2dCLFlBQVcsRUFDZDs7QUFWYjtFQWFZLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBZlQ7RUFpQlksbUJBQWtCLEVBQ3JCOztBQWxCVDtFQXFCUSxhQUFZLEVBRWY7O0FBdkJMO0VBeUJRLGFBQVksRUFxQmY7O0FBOUNMO0lBMkJZLDhCQUE2QjtJQUM3QixrQkFBaUIsRUFJcEI7O0FBaENUO01BOEJnQixvQkFBbUIsRUFDdEI7O0FBL0JiO0lBbUNnQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjs7QUFyQ2I7SUF1Q2dCLFVBQVMsRUFDWjs7QUF4Q2I7SUEwQ2dCLGdCQUFlO0lBQ2YsVUFBUyxFQUNaOztBQUtiO0VBQ0ksaUJBQWU7RUFDZixvQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvYXNlc29yL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDksIDEzOSk7XHJcbi8vIDpob3N0IHtcclxuLy8gICAgIC5uYXZiYXIge1xyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuLy8gICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuLy8gICAgICAgICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAudXNlci1tZW51e1xyXG4vLyAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLnVzZXItbWVudT5he1xyXG4vLyAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLm5vdGlmaWNhdGlvbntcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWVzc2FnZXMge1xyXG4vLyAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuLy8gICAgICAgICAubWVkaWEge1xyXG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5tZWRpYS1ib2R5IHtcclxuLy8gICAgICAgICAgICAgaDUge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAuc21hbGwge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sYXN0IHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmNvbnRlbmlkbyB7XHJcbi8vICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbi8vICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gfVxyXG5cclxuLy8gLm5vdGlmaWNhY2lvbiB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5ub3RpZmljYWNpb24gLmJhZGdlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNXB4O1xyXG4vLyAgICAgcmlnaHQ6IDE1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuYnRuX3JldHJve1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDY4MHB4O1xyXG4vLyB9XHJcbi8vIC5idG5fbXNne1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbi8vIH1cclxuLy8gLmJ0bl9uYW1le1xyXG4vLyAgIG1hcmdpbi10b3A6IDBweDtcclxuLy8gfVxyXG4vLyAuY29sbGFwc2Vze1xyXG4vLyAgICAgZGlzcGxheTogY29udGVudHM7XHJcbi8vIH1cclxuXHJcbi8vICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgLmJ0bl9yZXRyb3tcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtMzFweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnRuX21zZ3tcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtNDJweDtcclxuLy8gICB9XHJcbi8vICAgLmJ0bl9uYW1le1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTQ0cHg7XHJcbi8vIH1cclxuLy8gLm5vdGlmaWNhY2lvbiAuYmFkZ2Uge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAxcHg7XHJcbi8vICAgICByaWdodDogMjM1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgfVxyXG4vLyAgIC5kcm9wZG93bi1tZW51e1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDksIDEzOSk7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1tZW51e1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItbWVudT5he1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdGlmaWNhdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVkaWEtYm9keSB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5pZG8ge1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/asesor/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/asesor/components/header/header.component.ts ***!
  \**************************************************************/
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
/* harmony import */ var src_app_services_timing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/timing */ "./src/app/services/timing.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/administracion/avisos-admin/avisos-admin.service */ "./src/app/administracion/avisos-admin/avisos-admin.service.ts");
/* harmony import */ var src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/avisos/avisos.service */ "./src/app/components/avisos/avisos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { timer  } from 'rxjs';







var HeaderComponent = /** @class */ (function () {
    //   @ViewChild('modalConferencia') modalConferencia: NgbModalRef;
    //   @ViewChild('contentObligatorio') modalObligatorio: NgbModalRef;
    //   @ViewChild('contentEmergente') modalEmergente: NgbModalRef;
    function HeaderComponent(translate, _usuarioService, router, modalService, _plataformaService, _avisosAdminService, _avisosService) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.modalService = modalService;
        this._plataformaService = _plataformaService;
        this._avisosAdminService = _avisosAdminService;
        this._avisosService = _avisosService;
        this.numMensajes = 0;
        this.toggleAlumnos = false;
        this.flagConferencia = false;
        this.flagModal = true;
        this.cargandoConferencia = false;
        this.cerrandoConferencia = false;
        this.notificacionesObligatorias = [];
        this.notificacionesEmergentes = [];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].urlAssets;
        this.universidad = _services_universidad__WEBPACK_IMPORTED_MODULE_6__["universidad"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        //   this.id_usuario = identity.usuario_id;      
        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
        this.identity = this._usuarioService.getIdentity();
        this.nombre = this.identity.nombre;
        this.colorLogo = this.identity.color;
        this.selectedRol = this._usuarioService.getRol();
        this.numMensajes = 0;
        // this.consultaMensajes();
        // this.consultaRetros()
        // this.consultaNombreRetros();
        // this.getNotificaciones();
        // this.interval = setInterval(() => {                    
        //     this.getConferenciaActiva(0);
        // }, 60000)    
    };
    HeaderComponent.prototype.consultaNombreRetros = function () {
        var _this = this;
        this._plataformaService.consultaNomRetro(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombresRetros = response['retroalimentaciones'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.nuevoLink = function (actividad_id, materia_id) {
        this.router.navigate(['docente/actividad/' + actividad_id + '/' + materia_id]);
        localStorage.setItem('identModal', '1');
    };
    HeaderComponent.prototype.getNotificaciones = function () {
        var _this = this;
        this._plataformaService.consultaNotificaciones(3).subscribe(function (response) {
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
                // if (notificacionObligatoria) this.abrirObligatorio();
                // if (notificacionEmergente) {
                //     this._avisosAdminService.consultaAviso(this.notificacionesEmergentes[0]['aviso_id']).subscribe(
                //         response => {                                                        
                //             if (response && response['status']) {
                //                 this.notificacionesEmergentes = response['aviso'][0];  
                //                 this.modalService.open(this.modalEmergente, {size: 'lg'});
                //             }
                //         }, error => {
                //             console.log(<any>error)
                //     });
                // }
            }
            else {
                _this.notificaciones = undefined;
                _this.totalNotificaciones = undefined;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.abrirNotificacion = function (notificacion) {
        if (notificacion['tipo'] == 1)
            this.router.navigateByUrl('/docente/tickets/' + notificacion['ticket_id']);
        else if (notificacion['tipo'] == 6)
            this.router.navigateByUrl('/docente/avisos');
    };
    // abrirObligatorio() {
    //     this.modalService.open(this.modalObligatorio);
    // }
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
    HeaderComponent.prototype.consultaRetros = function () {
        var _this = this;
        this._plataformaService.consultaRetrosDocente(this.jwt, this.id_usuario).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalRetros = response['totalRetroalimentaciones'];
                _this.retroalimentaciones = response['retroalimentaciones'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaMensajes = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this._plataformaService.consultamsjAlumnos(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.numMensajes = response['numero_mensajes'];
            }
            if (id == 0) {
                _this.intervalDocente = setInterval(function () {
                    _this.consultaMensajes(1);
                }, src_app_services_timing__WEBPACK_IMPORTED_MODULE_7__["Timing"].docente);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.conferenciaActiva = function () {
        // let ngbModalOptions: NgbModalOptions = {
        //     backdrop : 'static',
        //     keyboard : false,
        //     windowClass: 'modal-xl'
        // };
        // if (!this.flagConferencia) {
        //     this.flagConferencia = true;
        //     this.modalService.open(this.modalConferencia,ngbModalOptions).result.then((result) => {
        //         }, (reason) => {
        //     });
        // }
        this.flagConferencia = true;
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
                console.log('funciona');
            }
        }, function (error) {
            console.log(error);
        });
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('selectedAsignaturaGrupo');
        sessionStorage.removeItem('idAsignaturaGrupo');
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
    //   seleccionaConferencia(conferencia){
    //     this.selectedConferencia = conferencia
    //   }
    HeaderComponent.prototype.consultaMsjAlumnos = function () {
        var _this = this;
        this.mensajes = null;
        this.toggleAlumnos = true;
        this._plataformaService.consultamsjAlumnosDetalles(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.mensajes = response['mensajes'];
            }
            else {
                _this.mensajes = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.openMensajeria = function (content, id_materia) {
        this.idMateria = id_materia;
        this.modalService.open(content, { windowClass: 'modal-xl' });
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
    HeaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-asesor',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/asesor/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/asesor/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__["PlataformaService"],
            src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_9__["AvisosAdminService"],
            src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_10__["AvisosService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/asesor/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/asesor/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n  <div class=\"list-group\">\r\n      <a routerLink=\"home\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item  text-center\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\"><img  [src]=\"universidad.logoDark\" width=\"70%\"><br> </a> <!--width=\"200px\"-->\r\n      </a>\r\n      <a *ngIf=\"btnReturn\" (click)=\"vistaAdministrador()\" class=\"list-group-item text-center\">\r\n        <p class=\"_hover\"><i class=\"fa fa-reply\"></i>Regresar al administrador</p>\r\n      </a>\r\n      <a  class=\"list-group-item\">\r\n      <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n      <span>{{rol.rol}}</span>\r\n  </a>\r\n  <!-- <form [formGroup]=\"FormAG\" *ngIf=\"Asignaturas && FormAG\" class=\"list-group-item px-3\" style=\"background-color: #222;\">\r\n    <select formControlName=\"asignatura_grupo_id\" class=\"form-control text-light\" style=\"background-color: #222;\">\r\n        <option value=\"\" [selected]=\"'selected'\" disabled hidden>Selecciona un grupo</option>\r\n        <option [value]=\"asignatura.asignatura_grupo_id\" *ngFor=\"let asignatura of Asignaturas\">{{asignatura.asignatura}}</option>\r\n    </select>\r\n  </form> -->\r\n  <span>\r\n   <div *ngFor=\"let privilegio of privilegiosAsesor\">\r\n        <a class=\"list-group-item _hover\" [routerLink]=\"[privilegio['url']]\"> \r\n            <i [className]=\"'fa ' + privilegio['icon']\"></i>\r\n            <span>{{ privilegio.label | translate }}</span>\r\n        </a>\r\n        \r\n      <!-- <div class=\"nested-menu\" *ngIf=\"!privilegio.url || privilegio.url == ''\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass(privilegio.i)\">\r\n              <i class=\"fa {{privilegio.icon}}\"></i>\r\n              <span>{{ privilegio.label | translate }}</span>\r\n          </a> -->\r\n          <!-- <li class=\"nested\" [class.expand]=\"showMenu === privilegio.i\">\r\n              <ul class=\"submenu\">\r\n                  <li *ngFor=\"let subprivilegio of privilegio.sub_privilegios\">\r\n                      <a [routerLink]=\"['../' + subprivilegio.url]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa {{subprivilegio.icono}}\"></i>&nbsp;\r\n                          <span>{{ subprivilegio.privilegio }}</span>\r\n                      </a>\r\n                  </li>                \r\n              </ul>\r\n          </li> -->\r\n      <!-- </div>\r\n      <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url + '/' + privilegio.id]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw {{privilegio.icon}}\"></i>&nbsp;\r\n          <span>{{ privilegio.label | translate }}</span>\r\n      </a> -->\r\n  </div>\r\n</span>\r\n\r\n  <!-- <div *ngFor=\"let privilegio of privilegios\">\r\n      <div class=\"nested-menu\" *ngIf=\"!privilegio.url || privilegio.url == ''\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass(privilegio.privilegio)\">\r\n              <i class=\"fa {{privilegio.icono}}\"></i>\r\n              <span>{{ privilegio.privilegio }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === privilegio.privilegio\">\r\n              <ul class=\"submenu\">\r\n                  <li *ngFor=\"let subprivilegio of privilegio.sub_privilegios\">\r\n                      <a [routerLink]=\"['../' + subprivilegio.url]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa {{subprivilegio.icono}}\"></i>&nbsp;\r\n                          <span>{{ subprivilegio.privilegio }}</span>\r\n                      </a>\r\n                  </li>                \r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw {{privilegio.icono}}\"></i>&nbsp;\r\n          <span>{{ privilegio.privilegio }}</span>\r\n      </a>\r\n  </div>        -->\r\n      <!--a [routerLink]=\"['../admin/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n          <span>{{ 'Charts' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-table\"></i>&nbsp;\r\n          <span>{{ 'Tables' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\r\n          <span>{{ 'Forms' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Element' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Grid' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-th-list\"></i>&nbsp;\r\n          <span>{{ 'Component' | translate }}</span>\r\n      </a>\r\n      <div class=\"nested-menu\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n              <i class=\"fa fa-plus\"></i>&nbsp;\r\n              <span>{{ 'Menu' | translate }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n              <ul class=\"submenu\">\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a [routerLink]=\"['../admin/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-file-o\"></i>&nbsp;\r\n          <span>{{ 'Blank Page' | translate }}</span>\r\n      </a>\r\n      <a href=\"http://www.strapui.com/\" class=\"list-group-item\">\r\n          <i class=\"fa fa-caret-down\"></i>&nbsp;\r\n          <span>{{ 'More Themes' | translate }}</span>\r\n      </a-->\r\n\r\n      <div class=\"header-fields\">\r\n          <!--a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n              <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n          </a-->\r\n          <!--div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                  <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                              {{ 'English' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                              {{ 'French' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                              {{ 'Urdu' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                              {{ 'Spanish' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                              {{ 'Italian' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                              {{ 'Farsi' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                              {{ 'German' | translate }}\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div-->\r\n          <div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                  <span><i class=\"fa fa-user\"></i>&nbsp; {{identity.nombre + ' ' + identity.primer_apellido }}</span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['./perfil']\">\r\n                              <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                      \r\n                      <li>\r\n                          <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                              <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n      <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\r\n      <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/asesor/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/asesor/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1031;\n  top: 0px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none;\n    white-space: initial; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n  .form-control, .form-control:focus {\n  border-color: white;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #222; }\n  ._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNlc29yL2NvbXBvbmVudHMvc2lkZWJhci9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhc2Vzb3JcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixjQUFhO0VBQ2IsU0FBUTtFQUNSLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQix1QkFiMEI7RUFjMUIsVUFBUztFQUNULG1CQUFrQjtFQUNsQixxQkFBb0I7RUFDcEIsb0JBQW1CO0VBS25CLGlDQUFnQyxFQWtGbkM7RUF2R0Q7SUF5QlksaUJBMUJrQjtJQTJCbEIsVUFBUztJQUNULGlCQUFnQjtJQUNoQixZQUFXO0lBQ1gsc0JBQXFCO0lBQ3JCLHFCQUFvQixFQUl2QjtFQWxDVDtNQWdDZ0IsbUJBQWtCLEVBQ3JCO0VBakNiO0lBb0NZLG9CQUFnRDtJQUNoRCxZQUFXLEVBQ2Q7RUF0Q1Q7SUF3Q1ksb0JBQWdEO0lBQ2hELFlBQVcsRUFDZDtFQTFDVDtJQTRDWSxrQkFBaUIsRUFLcEI7RUFqRFQ7TUErQ2dCLCtDQUE4QyxFQUNqRDtFQWhEYjtJQXFEWSxvQkFBbUI7SUFDbkIsYUFBWSxFQUNmO0VBdkRUO0lBeURZLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGlCQUFnQixFQW1CbkI7RUE5RVQ7TUE2RGdCLFlBQVc7TUFDWCxzQkFBcUI7TUFDckIsaUJBQWdCO01BQ2hCLGlCQWpFYyxFQXdFakI7RUF2RWI7UUFrRW9CLG1CQUFrQjtRQUNsQixlQUFjO1FBQ2Qsd0JBQXVCO1FBQ3ZCLGtCQUFpQixFQUNwQjtFQXRFakI7O01BMEVnQixZQUFXO01BQ1gsY0FBYTtNQUNiLHFCQUFvQixFQUN2QjtFQTdFYjtJQWdGWSxvQkFBZ0QsRUFDbkQ7RUFqRlQ7SUFtRlksa0JBQWlCO0lBQ2pCLGFBQVksRUFpQmY7RUFyR1Q7TUF1Rm9CLGlCQUFnQjtNQUNoQix1QkF6RlU7TUEwRlYsNEJBQTJCLEVBTzlCO0VBaEdqQjtRQTJGd0IsWUFBVyxFQUNkO0VBNUZyQjtRQThGd0IsWUFBVyxFQUNkO0VBL0ZyQjtNQWtHb0Isb0JBQWdELEVBQ25EO0VBTWpCO0VBRVEsZ0JBQWUsRUFDbEI7RUFITDtFQUtRLHNCQUFxQixFQUN4QjtFQU5MO0VBUVEsY0FBYTtFQUNiLFVBQVMsRUFDWjtFQVZMO0VBYVksZUFBYztFQUNkLHNCQUFxQjtFQUNyQixhQUFZLEVBUWY7RUF2QlQ7SUFrQm9CLFlBQVc7SUFDWCxjQUFhO0lBQ2IsZUFBYyxFQUNqQjtFQUtqQjtFQUNJO0lBQ0ksVUFBUztJQUNULFVBQVMsRUFDWixFQUFBO0VBRUw7RUFDSTtJQUNJLHlCQUF3QixFQUMzQixFQUFBO0VBRUw7RUFDSTtJQUNJLGNBQWEsRUFDaEIsRUFBQTtFQUdMO0VBQ0ksV0FBVSxFQUNiO0VBRUQ7RUFDSSx3Q0FBd0Q7RUFDeEQsbUJBQWtCLEVBQ3JCO0VBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsd0NBQXdELEVBQzNEO0VBRUQ7RUFDSSxnQkFBZTtFQUNmLGFBQVk7RUFDWixnQkFBZTtFQUNmLGNBQWE7RUFDYixVQUFTO0VBQ1QsWUFBVztFQUNYLG9CQUFtQjtFQVFuQiwyQkFBMEI7RUFLMUIsaUNBQWdDLEVBQ25DO0VBckJEO0lBU1EsZ0JBQWUsRUFDbEI7RUFWTDtJQVlRLG9CQUFnRDtJQUNoRCxZQUFXLEVBQ2Q7RUFTTDtFQUNJLFlBQVcsRUFJZDtFQUxEO0lBR1EsY0FBYSxFQUNoQjtFQUdMO0VBQ0ksb0JBQW1CO0VBQ25CLFdBQVU7RUFJViwrREFBeUQsRUFDNUQ7RUFFRDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXNlc29yL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAzMTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMjM1cHg7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDsgXHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIzNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggIzIyMjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggIzIyMjtcclxufVxyXG5cclxuLl9ob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/asesor/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/asesor/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
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
/* harmony import */ var src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/docente/grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_asesor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/asesor.service */ "./src/app/asesor/services/asesor.service.ts");
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
    function SidebarComponent(translate, _usuarioService, router, _asesorService, _asignaturaService, _grupoService, formBuilder) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this._asesorService = _asesorService;
        this._asignaturaService = _asignaturaService;
        this._grupoService = _grupoService;
        this.formBuilder = formBuilder;
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__["universidad"];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
        this.btnReturn = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (sessionStorage.getItem('tmp_jwt'))
            this.btnReturn = true;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.privilegios = this._usuarioService.getPrivilege();
        this.subscription = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = true;
        this.showMenu = '';
        this.pushRightClass = '';
        this.toggleCollapsed();
        this.consultaPrivilegios();
    };
    SidebarComponent.prototype.consultaPrivilegios = function () {
        var _this = this;
        this._asesorService.consultaPrivilegiosAsesor().subscribe(function (response) {
            if (response && response['status']) {
                _this.privilegiosAsesor = response['privilegios'];
                console.log(_this.privilegiosAsesor);
            }
        }, function (error) {
            console.log(error);
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
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
    };
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
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-asesor',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/asesor/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/asesor/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_asesor_service__WEBPACK_IMPORTED_MODULE_9__["AsesorService"],
            src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturaService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], SidebarComponent);
    return SidebarComponent;
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

/***/ "./src/app/services/universidad.ts":
/*!*****************************************!*\
  !*** ./src/app/services/universidad.ts ***!
  \*****************************************/
/*! exports provided: universidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "universidad", function() { return universidad; });
var universidad = {
    color: "#292f33",
    logo: "assets/images/logo.png",
    logoDark: "assets/images/logoWhite.png",
    nombre: "Casa Lamm"
};


/***/ }),

/***/ "./src/app/shared/modules/layout-asesor/layout-asesor.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modules/layout-asesor/layout-asesor.module.ts ***!
  \**********************************************************************/
/*! exports provided: LayoutAsesorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAsesorModule", function() { return LayoutAsesorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_asesor_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/asesor/components/header/header.component */ "./src/app/asesor/components/header/header.component.ts");
/* harmony import */ var src_app_asesor_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/asesor/components/sidebar/sidebar.component */ "./src/app/asesor/components/sidebar/sidebar.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutAsesorModule = /** @class */ (function () {
    function LayoutAsesorModule() {
    }
    LayoutAsesorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [src_app_asesor_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], src_app_asesor_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__["LogotipoUsuarioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            exports: [
                src_app_asesor_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                src_app_asesor_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]
            ]
        })
    ], LayoutAsesorModule);
    return LayoutAsesorModule;
}());



/***/ })

}]);
//# sourceMappingURL=asesor-asesor-module.js.map