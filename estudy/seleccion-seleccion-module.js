(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seleccion-seleccion-module"],{

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

/***/ "./src/app/administracion/carga-actividades/seleccion/seleccion-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/seleccion/seleccion-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: SeleccionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionRoutingModule", function() { return SeleccionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seleccion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seleccion.component */ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _seleccion_component__WEBPACK_IMPORTED_MODULE_2__["SeleccionComponent"]
    }
];
var SeleccionRoutingModule = /** @class */ (function () {
    function SeleccionRoutingModule() {
    }
    SeleccionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SeleccionRoutingModule);
    return SeleccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/seleccion/seleccion.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <app-consulta-asignatura [nivel]=\"4\" (sucessEvent)=\"obtieneAsignatura($event)\" ></app-consulta-asignatura>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">    \r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n  <div *ngIf=\"asignatura\" class=\"container\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-12 text-center\">\r\n        <h4 *ngIf=\"asignatura\" class=\"modal-title\">Asignatura de {{asignatura.asignatura}}</h4>\r\n        <p>Selecciona una de las opciones para la materia</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-2\" *ngFor=\"let opcion of privilegiosContenido\" style=\"cursor:pointer\" (click)=\"selecciona_opcion(opcion.id,opcion.url)\">\r\n        <div class=\"alert alert-info text-center\" >\r\n          <h2><i class=\"fa {{opcion.icono}}\"></i></h2>\r\n          <p>{{opcion.opcion}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/seleccion/seleccion.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL3NlbGVjY2lvbi9zZWxlY2Npb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/seleccion/seleccion.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SeleccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionComponent", function() { return SeleccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/docente/grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_admin_privilegiosContenido__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/admin/privilegiosContenido */ "./src/app/models/admin/privilegiosContenido.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeleccionComponent = /** @class */ (function () {
    function SeleccionComponent(_asignaturaService, _usuarioService, _grupoService, route, _router) {
        this._asignaturaService = _asignaturaService;
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this.route = route;
        this._router = _router;
        this.title = "Carga de actividades";
        this.privilegiosContenido = src_app_models_admin_privilegiosContenido__WEBPACK_IMPORTED_MODULE_5__["privilegiosContenido"];
    }
    SeleccionComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        console.log(this.privilegiosContenido);
    };
    SeleccionComponent.prototype.obtieneAsignatura = function (event) {
        var _this = this;
        if (event.idAsignatura) {
            this.idAsignatura = event.idAsignatura;
            this.idOrdenAsignatura = event.idOrdenAsignatura;
            this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    _this.asignatura = response['Asignatura'][0];
                    console.log(_this.asignatura);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.idAsignatura = null;
        }
    };
    SeleccionComponent.prototype.selecciona_opcion = function (id, url) {
        var _this = this;
        if (id == 5) {
            this._asignaturaService.consultaAsignaturaGrupo(this.idOrdenAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    var idAsignaturaGrupo = parseInt(response['grupos'][0].asignatura_grupo_id);
                    _this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo, _this.jwt).then(function (data) {
                        _this._router.navigate(['/materia/']);
                    });
                }
                else {
                    alertify.error('Debes asignar la materia a un grupo primero');
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._router.navigate(['/admin/carga/asignatura/' + this.idAsignatura + '/' + this.idOrdenAsignatura + '/' + url]);
        }
    };
    SeleccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seleccion',
            template: __webpack_require__(/*! ./seleccion.component.html */ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.html"),
            styles: [__webpack_require__(/*! ./seleccion.component.scss */ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.scss")]
        }),
        __metadata("design:paramtypes", [_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_1__["AsignaturaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_3__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SeleccionComponent);
    return SeleccionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/seleccion/seleccion.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/seleccion/seleccion.module.ts ***!
  \********************************************************************************/
/*! exports provided: SeleccionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionModule", function() { return SeleccionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _seleccion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seleccion-routing.module */ "./src/app/administracion/carga-actividades/seleccion/seleccion-routing.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _seleccion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seleccion.component */ "./src/app/administracion/carga-actividades/seleccion/seleccion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SeleccionModule = /** @class */ (function () {
    function SeleccionModule() {
    }
    SeleccionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_seleccion_component__WEBPACK_IMPORTED_MODULE_4__["SeleccionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _seleccion_routing_module__WEBPACK_IMPORTED_MODULE_2__["SeleccionRoutingModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_3__["ConsultaAsignaturaModule"]
            ]
        })
    ], SeleccionModule);
    return SeleccionModule;
}());



/***/ })

}]);
//# sourceMappingURL=seleccion-seleccion-module.js.map