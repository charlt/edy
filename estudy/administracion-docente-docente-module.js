(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-docente-docente-module"],{

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

/***/ "./src/app/administracion/docente/accesos/accesos.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/docente/accesos/accesos.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-accesos-persona [id_persona]=\"id_persona\" [id_rol]=\"'3'\"></app-accesos-persona>"

/***/ }),

/***/ "./src/app/administracion/docente/accesos/accesos.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/docente/accesos/accesos.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvYWNjZXNvcy9hY2Nlc29zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/docente/accesos/accesos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/docente/accesos/accesos.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccesosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesosComponent", function() { return AccesosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../alumno/services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccesosComponent = /** @class */ (function () {
    function AccesosComponent(_usuarioService, _alumnosService, route) {
        this._usuarioService = _usuarioService;
        this._alumnosService = _alumnosService;
        this.route = route;
        this.title = "Consulta de accesos";
        this._usuarioService.pushBreadcum('Docente', '/admin/docente', 1);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    AccesosComponent.prototype.ngOnInit = function () {
        this.id_persona = this.route.snapshot.params['id'];
    };
    AccesosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accesos',
            template: __webpack_require__(/*! ./accesos.component.html */ "./src/app/administracion/docente/accesos/accesos.component.html"),
            styles: [__webpack_require__(/*! ./accesos.component.scss */ "./src/app/administracion/docente/accesos/accesos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _alumno_services_alumno_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AccesosComponent);
    return AccesosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/docente/consulta/consulta.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/docente/consulta/consulta.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\">\r\n        <h4>{{title}}</h4><br>\r\n        <button class=\" btn btn-success\" (click)=\"setSelectedRol()\" [routerLink]=\"['/admin/usuario/nuevo']\">Agregar docente</button>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <div class=\"btngroup pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"cambiaChat()\">\r\n              <h4><i class=\"fa fa-comments\"></i></h4>\r\n              <p><small>{{chat}}</small></p>\r\n            </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"input-group mt-2 mb-3\">\r\n      <br>\r\n      <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n     <!-- 1 -->\r\n     <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"1\" type=\"radio\" id=\"coincidencias\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"coincidencias\">Búsqueda por coincidencias</label>\r\n    </div>\r\n    <!-- 2 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"2\" type=\"radio\" id=\"curp\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"curp\">Búsqueda por CURP</label>\r\n    </div>\r\n    <!-- 3 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\" [value]=\"3\" type=\"radio\" id=\"correo\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"correo\">Búsqueda por correo</label>\r\n    </div>\r\n    <!-- 4 -->\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [(ngModel)]=\"tipoForm\"  [value]=\"4\" type=\"radio\" id=\"clave\" name=\"tipoForm\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"clave\">Búsqueda por clave</label>\r\n    </div>\r\n    <p><strong style=\"font-size: small;\">Total de registros: {{totalItems}}</strong></p>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Clave</th>\r\n            <th>Nombre</th>\r\n            <!--th>CURP</th-->\r\n            <th>Email</th>\r\n            <th>Carga de contenido</th>\r\n            <th>Situación</th>\r\n            <th>Dashboard</th>\r\n            <th>Plataforma</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"!docentes && !loading\">\r\n          <tr>\r\n            <td colspan=\"7\" class=\"text-center\">No se encontraron docentes</td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"loading\">\r\n          <tr>\r\n            <td colspan=\"7\" class=\"text-center\">\r\n              <div class=\"mt-2 mb-2\">\r\n                <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                <h5>\"Cargando información, por favor espere.\"</h5>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        <tbody *ngIf=\"docentes\">\r\n          <tr *ngFor=\"let docente of docentes;let i = index\">\r\n            <td>{{i + 1}}</td>\r\n            <td>{{docente.clave_profesor}}</td>\r\n            <td><a [routerLink]=\"['../dashboard/'+docente.persona_id]\"> {{docente.primer_apellido}} {{docente.segundo_apellido}} {{docente.nombre}}</a></td>\r\n            <!--td>{{docente.curp}}</td-->\r\n            <td>{{docente.email}}</td>\r\n            <td>\r\n              <select class=\"form-control\" [(ngModel)]=\"docente.carga_contenido\" (change)=\"tipoContenido(docente.carga_contenido, docente.persona_id)\">\r\n                <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n                <option value=\"0\">Desactivado</option>\r\n                <option value=\"1\">Carga por grupo</option>\r\n                <option value=\"2\">Carga por materia</option>\r\n              </select>\r\n            </td>\r\n            <td>{{docente.situacion_docente}}</td>\r\n            <td class=\"text-center\">\r\n              <a [routerLink]=\"['../dashboard/'+docente.persona_id]\"><i class=\"fa fa-dashboard  fa-2x\"></i></a>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button class=\"btn btn-warning\" (click)=\"verPlataforma(docente)\">\r\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [pageSize]=\"itemsPerPage\" [(page)]=\"page\" \r\n        [maxSize]=\"4\" [rotate]=\"true\" (pageChange)=\"loadPage($event)\"></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/docente/consulta/consulta.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/docente/consulta/consulta.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/docente/consulta/consulta.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/docente/consulta/consulta.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_docente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/docente.service */ "./src/app/services/docente.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ConsultaComponent(_usuarioService, _docenteService, _plataformaService, router) {
        this._usuarioService = _usuarioService;
        this._docenteService = _docenteService;
        this._plataformaService = _plataformaService;
        this.router = router;
        this.totalItems = 100;
        this.previousPage = 1;
        this.page = 1;
        this.itemsPerPage = 50;
        this.loading = false;
        this.chat = 'Activar chat';
        this.title = "Consulta de docentes";
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        var id_persona = localStorage.getItem('id_persona');
        localStorage.removeItem('id_persona');
        // busqueda de datos por input
        this.searchField.valueChanges.subscribe(function (busqueda) {
            if (_this.totalItems == 1) {
                _this.consultaTotal();
                _this.itemsPerPage = 50;
            }
            _this.busquedaDocente(busqueda);
        });
        if (id_persona) {
            this.consultaEspDocente(id_persona);
        }
        else {
            this.consultaTotal();
        }
    };
    ConsultaComponent.prototype.consultaTotal = function () {
        var _this = this;
        this._docenteService.consultaTotalDocentes(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalItems = response['total'];
                _this.consultaChat();
                _this.consultaDocente(null, 0);
                _this.tipoForm = 1;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaEspDocente = function (id_persona) {
        var _this = this;
        this.totalItems = 1;
        this.docentes = [];
        this._docenteService.consultaDocente(id_persona, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                var _docente = response['docente'];
                _this.docentes.push(_docente);
            }
            else
                _this.docentes = null;
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.tipoContenido = function (estatus, id_persona) {
        this._docenteService.guardaTipoC(estatus, id_persona).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.danger(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaChat = function () {
        var _this = this;
        this._docenteService.consultaChat(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusChat = response['situacion'];
                if (_this.estatusChat == 0)
                    _this.chat = 'Chat Desactivado';
                else if (_this.estatusChat == 1)
                    _this.chat = 'Chat activado';
                else
                    _this.chat = 'Chat Mixto';
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaDocente = function (busqueda, inicio) {
        var _this = this;
        var numero;
        this._docenteService.consultaBusqueda(this.jwt, busqueda, inicio, this.itemsPerPage, this.tipoForm).subscribe(function (response) {
            if (response && response['status']) {
                _this.docentes = response['usuario'];
                if (inicio == 1)
                    numero = inicio - 1;
                else
                    numero = inicio;
                for (var index = 0; index < _this.docentes.length; index++) {
                    numero++;
                    _this.docentes[index].numero = numero;
                }
            }
            else {
                _this.docentes = null;
            }
            _this.loading = false;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.busquedaDocente('', 1);
        }
    };
    ConsultaComponent.prototype.busquedaDocente = function (input, id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.docentes = null;
        this.loading = true;
        if (id == 0) {
            if (!this.searchChangeObserver) {
                rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                    _this.searchChangeObserver = observer;
                }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function (busqueda) {
                    var inicio = (_this.page - 1) * _this.itemsPerPage;
                    if (busqueda === '' || busqueda == null)
                        _this.consultaDocente(busqueda, inicio);
                    else
                        _this.consultaDocente(busqueda, 0);
                });
            }
            this.searchChangeObserver.next(input);
        }
        else {
            var inicio = (this.page - 1) * this.itemsPerPage;
            this.consultaDocente('', inicio);
        }
    };
    ConsultaComponent.prototype.cambiaChat = function () {
        var _this = this;
        // if (this.estatusChat != -1) {
        var estatus;
        if (this.estatusChat == 0)
            estatus = 1;
        else if (this.estatusChat == 1)
            estatus = 0;
        else
            estatus = 1;
        this._docenteService.cambiaChat(this.jwt, estatus).subscribe(function (response) {
            if (response && response['status']) {
                _this.estatusChat = estatus;
                if (_this.estatusChat == 0)
                    _this.chat = 'Chat Desactivado';
                else if (_this.estatusChat == 1)
                    _this.chat = 'Chat Activado';
                else
                    _this.chat = 'Chat mixto';
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
        // }else {
        // }
    };
    ConsultaComponent.prototype.setSelectedRol = function () {
        if (sessionStorage.getItem('selectedRol'))
            sessionStorage.removeItem('selectedRol');
        sessionStorage.setItem('selectedRol', 'Docente');
    };
    ConsultaComponent.prototype.verPlataforma = function (docente) {
        var _this = this;
        this._plataformaService.consultaJWT(docente.clave_profesor, 3).subscribe(function (response) {
            if (response && response['status']) {
                sessionStorage.setItem('tmp_jwt', _this.jwt);
                sessionStorage.setItem('tmp_identity', JSON.stringify(_this._usuarioService.getIdentity()));
                localStorage.removeItem('jwt');
                localStorage.removeItem('identity');
                localStorage.setItem('jwt', response['jwt']);
                localStorage.setItem('identity', JSON.stringify(response['user']));
                _this.router.navigate(['docente/home']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/docente/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/docente/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_docente_service__WEBPACK_IMPORTED_MODULE_2__["DocenteService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_6__["PlataformaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/docente/docente-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/docente/docente-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DocenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteRoutingModule", function() { return DocenteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/docente/consulta/consulta.component.ts");
/* harmony import */ var _docente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docente.component */ "./src/app/administracion/docente/docente.component.ts");
/* harmony import */ var _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accesos/accesos.component */ "./src/app/administracion/docente/accesos/accesos.component.ts");
/* harmony import */ var _materias_docente_materias_docente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materias-docente/materias-docente.component */ "./src/app/administracion/docente/materias-docente/materias-docente.component.ts");
/* harmony import */ var _alumno_tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alumno/tickets-alumno/tickets-alumno.component */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _docente_component__WEBPACK_IMPORTED_MODULE_3__["DocenteComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] },
            { path: 'accesos/:id', component: _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_4__["AccesosComponent"] },
            { path: 'materias/:id', component: _materias_docente_materias_docente_component__WEBPACK_IMPORTED_MODULE_5__["MateriasDocenteComponent"] },
            { path: 'dashboard/:id', loadChildren: './dashboard-docente/dashboard-docente.module#DashboardDocenteModule' },
            { path: 'expediente/:id', loadChildren: './expediente-docente/expediente-docente.module#ExpedienteDocenteModule' },
            { path: 'ticket-expediente/:id', component: _alumno_tickets_alumno_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_6__["TicketsAlumnoComponent"] }
        ]
    }
];
var DocenteRoutingModule = /** @class */ (function () {
    function DocenteRoutingModule() {
    }
    DocenteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocenteRoutingModule);
    return DocenteRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/docente/docente.component.html":
/*!***************************************************************!*\
  !*** ./src/app/administracion/docente/docente.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/docente/docente.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/administracion/docente/docente.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvZG9jZW50ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/docente/docente.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/docente/docente.component.ts ***!
  \*************************************************************/
/*! exports provided: DocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteComponent", function() { return DocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocenteComponent = /** @class */ (function () {
    function DocenteComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = "Docentes";
        this._usuarioService.pushBreadcum(this.title, "admin/docente", 1);
    }
    DocenteComponent.prototype.ngOnInit = function () {
    };
    DocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-docente',
            template: __webpack_require__(/*! ./docente.component.html */ "./src/app/administracion/docente/docente.component.html"),
            styles: [__webpack_require__(/*! ./docente.component.scss */ "./src/app/administracion/docente/docente.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], DocenteComponent);
    return DocenteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/docente/docente.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/administracion/docente/docente.module.ts ***!
  \**********************************************************/
/*! exports provided: DocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteModule", function() { return DocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _docente_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docente-routing.module */ "./src/app/administracion/docente/docente-routing.module.ts");
/* harmony import */ var _docente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docente.component */ "./src/app/administracion/docente/docente.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/docente/consulta/consulta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accesos/accesos.component */ "./src/app/administracion/docente/accesos/accesos.component.ts");
/* harmony import */ var src_app_components_accesos_persona_accesos_persona_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/accesos-persona/accesos-persona.module */ "./src/app/components/accesos-persona/accesos-persona.module.ts");
/* harmony import */ var _materias_docente_materias_docente_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./materias-docente/materias-docente.component */ "./src/app/administracion/docente/materias-docente/materias-docente.component.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../alumno/tickets-alumno/tickets-alumno.module */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DocenteModule = /** @class */ (function () {
    function DocenteModule() {
    }
    DocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_docente_component__WEBPACK_IMPORTED_MODULE_3__["DocenteComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _accesos_accesos_component__WEBPACK_IMPORTED_MODULE_8__["AccesosComponent"], _materias_docente_materias_docente_component__WEBPACK_IMPORTED_MODULE_10__["MateriasDocenteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _docente_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocenteRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                src_app_components_accesos_persona_accesos_persona_module__WEBPACK_IMPORTED_MODULE_9__["AccesosPersonaModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_11__["EncabezadoPersonaModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_12__["ConsultaAsignaturaModule"],
                _alumno_tickets_alumno_tickets_alumno_module__WEBPACK_IMPORTED_MODULE_13__["TicketsAlumnoModule"]
            ]
        })
    ], DocenteModule);
    return DocenteModule;
}());



/***/ }),

/***/ "./src/app/administracion/docente/materias-docente/materias-docente.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/docente/materias-docente/materias-docente.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!cargando && alert\" class=\"alert alert-danger text-center\" role=\"alert\">\r\n  Aún no cuentas con una materia asignada.\r\n</div>\r\n<app-encabezado-persona [idPersona]=\"id_docente\" [idRol]=\"'3'\"></app-encabezado-persona>\r\n<button class=\"btn btn-success mb-3\" (click)=\"agregarMateria(content)\">Agregar asignatura</button>\r\n<div *ngIf=\"cargando && !alert\">\r\n  <div><i class=\"fa fa-spin fa-spinner\" style=\"margin-left: 45%; margin-top: 20%;\"></i><h5 style=\"margin-left: 28%;\">{{'TiempoEspera' | translate}}</h5></div>\r\n</div>\r\n<table *ngIf=\"!cargando && !alert\" class=\"table table-bordered\" >\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Grado</th>\r\n      <th scope=\"col\">Asignatura</th>\r\n      <th scope=\"col\">Clave grupo</th>\r\n      <th scope=\"col\">Nombre del grupo</th>\r\n      <th scope=\"col\">Act. pendientes</th>\r\n      <!-- <th scope=\"col\">Mensajes</th>\r\n      <th scope=\"col\">Retroalimentaciones</th> -->\r\n      <th scope=\"col\">Estado de la materia</th>\r\n      <th scope=\"col\">Actividad más antigua</th>\r\n      <th>Eliminar</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let _asignaturaGrupo of asignaturaGrupo; let i = index;\">\r\n    <tr>\r\n      <td>{{_asignaturaGrupo.orden_jerarquico_descripcion}}</td>\r\n      <td><a href=\"javascript:void()\" [routerLink]=\"['../../../../admin/grupo/calificaciones/'+_asignaturaGrupo.asignatura_grupo_id]\">{{_asignaturaGrupo.asignatura}}</a></td>\r\n      <td>{{_asignaturaGrupo.grupo}}</td>\r\n      <td>{{_asignaturaGrupo.nombre_grupo}}</td>\r\n      <td class=\"text-center\"><i class=\"fa fa-thumbs-o-up\"></i> {{_asignaturaGrupo.actividades_pendientes}} </td>\r\n      <!-- <td><button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/docente/bandeja-mensajes/'+_asignaturaGrupo.asignatura_grupo_id]\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> {{_asignaturaGrupo.mensaje}}</button></td>\r\n      <td><button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/docente/bandeja-retro/'+_asignaturaGrupo.asignatura_grupo_id]\"><i class=\"fa fa-comments\"></i>  {{_asignaturaGrupo.retroalimentacion}}</button></td> -->\r\n      <td>\r\n        <small  *ngIf=\"_asignaturaGrupo.activa == 1\">\r\n          <span *ngIf=\"_asignaturaGrupo.estado == 1\" > Cierra el  {{_asignaturaGrupo.fecha_fin | date: \"dd/MM/yyyy\"}} </span>   \r\n          <span *ngIf=\"_asignaturaGrupo.estado == 0\" > Sin fecha de cierre </span>\r\n        </small>\r\n        <small *ngIf=\"_asignaturaGrupo.activa == 0\">\r\n          <span  *ngIf=\"_asignaturaGrupo.estado == 2\"> Abre el  {{_asignaturaGrupo.fecha_inicio | date: \"dd/MM/yyyy\"}} </span>   \r\n          <span *ngIf=\"_asignaturaGrupo.estado == 3\" > Cerró el  {{_asignaturaGrupo.fecha_fin | date: \"dd/MM/yyyy\"}} </span>\r\n        </small>   \r\n      </td>\r\n      <td>\r\n        <span *ngIf=\"_asignaturaGrupo.actividad_antigua\" >\r\n        <a href=\"javascript:void()\" [routerLink]=\"['/docente/actividad/'+_asignaturaGrupo.actividad_antigua.actividad_id+'/'+_asignaturaGrupo.actividad_antigua.materia_id]\" >{{_asignaturaGrupo.actividad_antigua.fecha_actividad | date: 'dd/MM/yyyy'}} </a>\r\n        </span>\r\n        <span *ngIf=\"!_asignaturaGrupo.actividad_antigua\" >\r\n          Sin pendientes\r\n        </span>\r\n      </td>\r\n      <td><button class=\"btn btn-danger\" (click)=\"eliminar(_asignaturaGrupo, i)\"><i class=\"fa fa-trash\"></i></button></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<ng-template #modalEncuesta let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Encuesta</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body my-3 mx-2 text-center\">\r\n      <p>Antes de continuar, ayúdanos a contestar el siguiente cuestionario</p>\r\n      <a class=\"btn btn-lg btn-primary mb-3\" [routerLink]=\"['encuesta/'+ idEncuesta]\">Ir al cuestionario</a>\r\n      <router-outlet></router-outlet> \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body mx-4\">\r\n    <app-consulta-asignatura [nivel]=\"4\" [tipo]=\"'small'\" (sucessEvent)=\"obtieneAsignatura($event)\">\r\n    </app-consulta-asignatura>\r\n    <div class=\"form-group\" *ngIf=\"grupos\">\r\n      <label class=\"control-label\" for=\"grupo\">5. Grupo</label>\r\n      <select class=\"form-control\" (change)=\"setGrupo($event)\">\r\n        <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}</option>\r\n        <option [value]=\"grupo.asignatura_grupo_id\" *ngFor=\"let grupo of grupos\">{{grupo.grupo}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button [disabled]=\"!asignatura_grupo_id\" type=\"button\" class=\"btn btn-success\"\r\n          (click)=\"guardarAsignatura()\">Guardar</button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/docente/materias-docente/materias-docente.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/docente/materias-docente/materias-docente.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZG9jZW50ZS9tYXRlcmlhcy1kb2NlbnRlL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2RvY2VudGUvbWF0ZXJpYXMtZG9jZW50ZS9tYXRlcmlhcy1kb2NlbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/docente/materias-docente/materias-docente.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/docente/materias-docente/materias-docente.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MateriasDocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasDocenteComponent", function() { return MateriasDocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../encuesta/services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var _alumno_materias_alumnos_materias_alumnos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../alumno/materias-alumnos/materias-alumnos.service */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MateriasDocenteComponent = /** @class */ (function () {
    function MateriasDocenteComponent(_usuarioService, _asignaturaService, _encuestaService, modalService, router, _fechaService, _materiasAlumnosService) {
        this._usuarioService = _usuarioService;
        this._asignaturaService = _asignaturaService;
        this._encuestaService = _encuestaService;
        this.modalService = modalService;
        this.router = router;
        this._fechaService = _fechaService;
        this._materiasAlumnosService = _materiasAlumnosService;
        this.cargando = true;
        this.alert = false;
        this.title = 'Mis grupos';
        this._usuarioService.pushBreadcum(this.title, "/docente/home", 1);
        this._usuarioService.removeBreadcum(2);
    }
    MateriasDocenteComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.id_docente = this.router.snapshot.params['id'];
        this.consultaAsignaturas();
        this.consultaEncuesta();
    };
    MateriasDocenteComponent.prototype.consultaAsignaturas = function () {
        var _this = this;
        this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(function (response) {
            if (response && response['status']) {
                var asignaturas = response['Asignaturas'];
                asignaturas.forEach(function (asignatura) {
                    var arreglo = this._fechaService.validaVigencia(asignatura.fecha_inicio, asignatura.fecha_fin, 1);
                    asignatura.fecha_inicio = new Date(asignatura.fecha_inicio * 1000);
                    asignatura.fecha_fin = new Date(asignatura.fecha_fin * 1000);
                    asignatura.activa = arreglo[0];
                    asignatura.estado = arreglo[1];
                }.bind(_this));
                _this.asignaturaGrupo = asignaturas;
                _this.cargando = false;
                _this.alert = false;
            }
            else {
                _this.cargando = false;
                _this.alert = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasDocenteComponent.prototype.consultaEncuesta = function () {
        var _this = this;
        this._encuestaService.consultaEncuestaAlumno().subscribe(function (response) {
            if (response && response['status']) {
                _this.Encuestas = response['encuesta'];
                _this.idEncuesta = _this.Encuestas[0]['encuesta_id'];
                _this.modalService.open(_this.modalEncuesta, { backdrop: 'static', size: 'lg' });
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasDocenteComponent.prototype.setBreadcum = function (title, id_grupo) {
        this.title = title;
        var url = "/docente/grupo/" + id_grupo;
        this._usuarioService.pushBreadcum(this.title, url, 1);
    };
    MateriasDocenteComponent.prototype.agregarMateria = function (content) {
        if (this.asignatura_grupo_id)
            this.asignatura_grupo_id = undefined;
        this.grupos = undefined;
        this.modalService.open(content, { backdrop: 'static', keyboard: false, size: 'lg' });
    };
    MateriasDocenteComponent.prototype.obtieneAsignatura = function (event) {
        this.idOrdenAsignatura = event.idOrdenAsignatura;
        if (this.asignatura_grupo_id)
            this.asignatura_grupo_id = undefined;
        this.grupos = undefined;
        this.consultaGrupo();
    };
    MateriasDocenteComponent.prototype.consultaGrupo = function () {
        var _this = this;
        this._materiasAlumnosService.consultaGrupo(this.idOrdenAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupos = response['grupos'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasDocenteComponent.prototype.setGrupo = function (event) {
        this.asignatura_grupo_id = event.target.value;
    };
    MateriasDocenteComponent.prototype.guardarAsignatura = function () {
        var _this = this;
        this._materiasAlumnosService.agregaMateriaDocente(this.id_docente, this.asignatura_grupo_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaAsignaturas();
                _this.modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
            }
            else
                alertify.error(response['msg']).dismissOthers();
        }, function (error) {
            console.log(error);
        });
    };
    MateriasDocenteComponent.prototype.eliminar = function (asignatura, index) {
        alertify.confirm('Eliminar asignatura', "\u00BFDeseas eliminar la asignatura " + asignatura.asignatura + "?", function () {
            var _this = this;
            this._materiasAlumnosService.eliminaAsignaturaDocente(this.id_docente, asignatura.asignatura_grupo_id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.asignaturaGrupo.splice(index, 1);
                    if (_this.asignaturaGrupo.length == 0)
                        _this.consultaAsignaturas();
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])
    ], MateriasDocenteComponent.prototype, "myModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("modalEncuesta"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MateriasDocenteComponent.prototype, "modalEncuesta", void 0);
    MateriasDocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-materias-docente',
            template: __webpack_require__(/*! ./materias-docente.component.html */ "./src/app/administracion/docente/materias-docente/materias-docente.component.html"),
            styles: [__webpack_require__(/*! ./materias-docente.component.scss */ "./src/app/administracion/docente/materias-docente/materias-docente.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturaService"],
            _encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__["EncuestaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__["FechaService"],
            _alumno_materias_alumnos_materias_alumnos_service__WEBPACK_IMPORTED_MODULE_7__["MateriasAlumnosService"]])
    ], MateriasDocenteComponent);
    return MateriasDocenteComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/services/encuesta.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/encuesta/services/encuesta.service.ts ***!
  \**********************************************************************/
/*! exports provided: EncuestaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaService", function() { return EncuestaService; });
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



var EncuestaService = /** @class */ (function () {
    function EncuestaService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    EncuestaService.prototype.consultaListaEncuestas = function (id_rol, id_asignatura_grupo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_rol', id_rol)
            .set('id_asignatura_grupo', id_asignatura_grupo);
        return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/listaEncuestas.php', { params: params });
    };
    EncuestaService.prototype.consultaSwitchEncuesta = function (id_encuesta, id_switch_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('encuesta_id', id_encuesta)
            .set('id_switch_encuesta', id_switch_encuesta);
        return this._httpClient.get(this.url + 'seguimiento/encuesta/consultaSwitchEncuesta.php', { params: params });
    };
    EncuestaService.prototype.guardaEncuesta = function (id_persona, form) {
        var formData = new FormData();
        formData.append('id_persona', id_persona);
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], key = _a[0], value = _a[1];
            formData.append(key, value);
        }
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/crea.php', formData);
    };
    EncuestaService.prototype.guardaPreguntas = function (form, id_encuesta) {
        var formData = new FormData();
        formData.append('preguntas', JSON.stringify(form));
        formData.append('id_encuesta', id_encuesta);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaCampo.php', formData);
    };
    EncuestaService.prototype.consultaPreguntas = function (id_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('encuesta_id', id_encuesta);
        return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/consultaReactivos.php', { params: params });
    };
    EncuestaService.prototype.guardaReactivos = function (form, id_encuesta) {
        var formData = new FormData();
        formData.append('preguntas', JSON.stringify(form));
        formData.append('encuesta_id', id_encuesta);
        console.log(form);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaReactivos.php', formData);
    };
    EncuestaService.prototype.consultaGrupo = function (id_plan_orden) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_plan_orden', id_plan_orden);
        return this._httpClient.get(this.url + 'controlEscolar/ordenJerarquico/consultaGrupos.php', { params: params });
    };
    EncuestaService.prototype.consultaAsignatura = function (id_grupo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_grupo', id_grupo);
        return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAsignaturas.php', { params: params });
    };
    EncuestaService.prototype.guardaInformacion = function (variable, id, id_encuesta, id_rol, inicio, fin, tipoForm, idAviso) {
        var formData = new FormData();
        formData.append('encuesta_id', id_encuesta);
        formData.append('id_rol', id_rol);
        if (variable && id) {
            formData.append(variable, id);
        }
        if (tipoForm != 1) {
            formData.append('fecha_inicio', inicio);
            formData.append('fecha_fin', fin);
            return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaSwitch.php', formData);
        }
        else if (tipoForm == 1) {
            formData.append('id_aviso', idAviso);
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/creaSwitch.php', formData);
        }
    };
    EncuestaService.prototype.consultaEncuestaAlumno = function () {
        return this._httpClient.get(this.url + '/seguimiento/encuesta/alumno/consultaEncuesta.php');
    };
    EncuestaService.prototype.eliminaEncuesta = function (id_encuesta) {
        var formData = new FormData();
        formData.append('id_encuesta', id_encuesta);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/elimina.php', formData);
    };
    EncuestaService.prototype.consultaEstadísticas = function (id_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_encuesta', id_encuesta);
        return this._httpClient.get(this.url + '/seguimiento/administracionEncuesta/consultaEstadistica.php', { params: params });
    };
    EncuestaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EncuestaService);
    return EncuestaService;
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



/***/ })

}]);
//# sourceMappingURL=administracion-docente-docente-module.js.map