(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asignatura-asignatura-module"],{

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

/***/ "./src/app/administracion/carga-actividades/asignatura/asignatura-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/asignatura-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AsignaturaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaRoutingModule", function() { return AsignaturaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asignatura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignatura.component */ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _asignatura_component__WEBPACK_IMPORTED_MODULE_2__["AsignaturaComponent"],
        children: [
            { path: '', redirectTo: 'modulos', pathMatch: 'full' },
            { path: 'modulos', loadChildren: './modulo/modulo.module#ModuloModule' },
            { path: 'modulosGrupo', loadChildren: './modulo/modulo.module#ModuloModule' },
            { path: 'objetivos-ponderaciones', loadChildren: './objetivos-ponderaciones/objetivos-ponderaciones.module#ObjetivosPonderacionesModule' },
            { path: 'control-actividad', loadChildren: './control-actividad/control-actividad.module#ControlActividadModule' },
        ]
    }
];
var AsignaturaRoutingModule = /** @class */ (function () {
    function AsignaturaRoutingModule() {
    }
    AsignaturaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AsignaturaRoutingModule);
    return AsignaturaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/asignatura.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div *ngIf=\"asignatura\" class=\"row my-3\">\r\n      <div    class=\"col-md-5\" >\r\n        <h4 >{{asignatura.asignatura}}\r\n          <br><small>Asignatura</small>\r\n        </h4>\r\n      </div> \r\n      <div class=\"col-md-7\"> \r\n          <div  *ngIf=\"verMenu && identity.rol_id == 1\" class=\"btn-group pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n            <button [routerLink]=\"['/admin/carga']\" class=\"btn btn-outline-primary\">\r\n              <h4><i class=\"fa fa-home\"></i></h4>\r\n              <p><small>Selección</small></p>\r\n            </button>\r\n            <button [routerLink]=\"[opcion.url]\" *ngFor=\"let opcion of privilegiosContenido\"  class=\"btn btn-outline-primary\" [routerLinkActive]=\"'active'\">\r\n              <h4><i class=\"fa {{opcion.icono}}\"></i></h4>\r\n              <p><small>{{opcion.opcion}}</small></p>\r\n            </button>\r\n            <button class=\"btn btn-outline-primary\" (click)=\"vistaPrevia()\">\r\n              <h4><i class=\"fa fa-eye\"></i></h4>\r\n              <p><small>Vista previa</small></p>\r\n            </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/asignatura.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvYXNpZ25hdHVyYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/asignatura.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AsignaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaComponent", function() { return AsignaturaComponent; });
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






var AsignaturaComponent = /** @class */ (function () {
    function AsignaturaComponent(_asignaturaService, _usuarioService, _grupoService, route, _router) {
        this._asignaturaService = _asignaturaService;
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this.route = route;
        this._router = _router;
        this.opcionSeleccionada = false;
        //banderas de token
        this.asignaturaSeleccionada = false;
        //variables de componentes
        this.verMenu = true;
        src_app_models_admin_privilegiosContenido__WEBPACK_IMPORTED_MODULE_5__["privilegiosContenido"].splice(4, 1);
        this.privilegiosContenido = src_app_models_admin_privilegiosContenido__WEBPACK_IMPORTED_MODULE_5__["privilegiosContenido"];
        this.title = "Carga de actividades";
    }
    AsignaturaComponent.prototype.ngOnInit = function () {
        this.idAsignatura = this.route.snapshot.params['id'];
        this.idOrdenAsignatura = this.route.snapshot.params['id2'];
        // console.log(this.idAsignatura, this.idOrdenAsignatura);
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.consultaAsignatura();
    };
    //PENDIENTE DE ACTUALIZAR
    AsignaturaComponent.prototype.consultaAsignaturaGrupo = function () {
        var _this = this;
        this._asignaturaService.consultaAsignaturaGrupo(this.idAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                var idAsignaturaGrupo = parseInt(response['asignaturaGrupo'][0].asignatura_grupo_id);
                _this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo, _this.jwt).then(function (data) {
                    if (!_this.privilegiosContenido.find(function (privilegio) { return privilegio.id == "5"; })) {
                        _this.privilegiosContenido.push();
                    }
                });
            }
            else {
                _this.verMenu = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsignaturaComponent.prototype.vistaPrevia = function () {
        var _this = this;
        this._asignaturaService.consultaAsignaturasAdminDummy(this.idOrdenAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                var idAsignaturaGrupo = parseInt(response['materia'].asignatura_grupo_id);
                _this._grupoService.seleccionaMateriaDummy(idAsignaturaGrupo, _this.jwt).then(function (data) {
                    _this._router.navigate(['/materia/']);
                });
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsignaturaComponent.prototype.consultaAsignatura = function () {
        var _this = this;
        this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                _this.asignatura = response['Asignatura'][0];
                sessionStorage.setItem('idAsignaturaSelected', _this.asignatura.asignatura_id);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsignaturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asignatura',
            template: __webpack_require__(/*! ./asignatura.component.html */ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.html"),
            styles: [__webpack_require__(/*! ./asignatura.component.scss */ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.scss")]
        }),
        __metadata("design:paramtypes", [_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_1__["AsignaturaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_3__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AsignaturaComponent);
    return AsignaturaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/asignatura.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/asignatura.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AsignaturaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaModule", function() { return AsignaturaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asignatura_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignatura.component */ "./src/app/administracion/carga-actividades/asignatura/asignatura.component.ts");
/* harmony import */ var _asignatura_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asignatura-routing.module */ "./src/app/administracion/carga-actividades/asignatura/asignatura-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AsignaturaModule = /** @class */ (function () {
    function AsignaturaModule() {
    }
    AsignaturaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _asignatura_component__WEBPACK_IMPORTED_MODULE_2__["AsignaturaComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _asignatura_routing_module__WEBPACK_IMPORTED_MODULE_3__["AsignaturaRoutingModule"]
            ]
        })
    ], AsignaturaModule);
    return AsignaturaModule;
}());



/***/ })

}]);
//# sourceMappingURL=asignatura-asignatura-module.js.map