(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-encuesta-encuesta-module~avisos-admin-avisos-admin-module"],{

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

/***/ "./src/app/administracion/encuesta/encuesta-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/encuesta/encuesta-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EncuestaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaRoutingModule", function() { return EncuestaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _encuesta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuesta.component */ "./src/app/administracion/encuesta/encuesta.component.ts");
/* harmony import */ var _form_main_form_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-main/form-main.component */ "./src/app/administracion/encuesta/form-main/form-main.component.ts");
/* harmony import */ var _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estadisticas/estadisticas.component */ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'consulta' },
    { path: 'consulta', component: _encuesta_component__WEBPACK_IMPORTED_MODULE_2__["EncuestaComponent"] },
    { path: 'nuevo', component: _form_main_form_main_component__WEBPACK_IMPORTED_MODULE_3__["FormMainComponent"] },
    { path: 'editar/:id/:id2', component: _form_main_form_main_component__WEBPACK_IMPORTED_MODULE_3__["FormMainComponent"] },
    { path: 'estadisticas/:id', component: _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_4__["EstadisticasComponent"] },
];
var EncuestaRoutingModule = /** @class */ (function () {
    function EncuestaRoutingModule() {
    }
    EncuestaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EncuestaRoutingModule);
    return EncuestaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/encuesta.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/encuesta/encuesta.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>Encuestas</h4><br>\r\n    <button class=\"btn btn-success\" routerLink=\"../nuevo\"><i class=\"fa fa-plus\"></i> Agregar encuesta</button>\r\n  \r\n    \r\n    <div class=\"table-responsive mt-3\">\r\n      <table class=\"table table-bordered\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Nombre de la encuesta</th>\r\n            <th>Instrucción de la encuesta</th>\r\n            <th>Estadísticas</th>\r\n            <th>Cambiar dirección</th>\r\n            <th [hidden]=\"tipoAdmin == 0\">Eliminar</th>\r\n            <!-- <th>Estatus</th>\r\n            <th>Inicio/fin</th>\r\n            <th>Contraseña</th>\r\n            <th>Tipo acceso</th>\r\n            <th>Registro</th>\r\n            <th></th>\r\n            <th></th>\r\n            <th></th> -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let encuesta of Encuestas; let i = index;\">\r\n            <td>{{encuesta.titulo}}</td>\r\n            <td>{{encuesta.instruccion}}</td>\r\n            <!-- <td>Activo</td>\r\n            <td>01/Mayo/2019 <hr> 30/junio/2019</td> -->\r\n            <!-- <td>Si</td>\r\n            <td>todos</td>\r\n            <td>01/Marzo/2019</td> -->\r\n            <td class=\"text-center\"><button class=\"btn btn-warning\" [routerLink]=\"['../estadisticas/'+ encuesta.encuesta_id]\"><i class=\"fa fa-bar-chart\"></i></button></td>\r\n            <td class=\"text-center\"><button class=\"btn btn-info\" [routerLink]=\"['../editar/'+ encuesta.encuesta_id+'/'+encuesta.switch_encuesta_id]\"><i class=\"fa fa-pencil\"></i></button></td>\r\n            <td [hidden]=\"tipoAdmin == 0\"><button class=\"btn btn-danger\" (click)=\"elimina(encuesta.encuesta_id, i)\"><i class=\"fa fa-trash\"></i></button></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/encuesta/encuesta.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/encuesta/encuesta.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2VuY3Vlc3RhL2VuY3Vlc3RhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/encuesta/encuesta.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/encuesta/encuesta.component.ts ***!
  \***************************************************************/
/*! exports provided: EncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaComponent", function() { return EncuestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
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




var EncuestaComponent = /** @class */ (function () {
    function EncuestaComponent(_encuestaService, _usuarioService, router, route) {
        this._encuestaService = _encuestaService;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
        this.title = 'Encuestas';
        this.idRol = this._usuarioService.getRol().rol_id;
        this.plataforma = this.router.url.split('/')[1];
        var redireccion;
        if (this.plataforma == 'admin') {
            redireccion = "/" + this.plataforma + "/encuesta";
        }
        else if (this.plataforma == 'docente') {
            this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id_ag');
            redireccion = "/" + this.plataforma + "/encuesta-docente/" + this.idAsignaturaGrupo;
        }
        this._usuarioService.pushBreadcum(this.title, redireccion, 1);
    }
    EncuestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._encuestaService.consultaListaEncuestas(this.idRol, this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.Encuestas = response['encuesta'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    EncuestaComponent.prototype.elimina = function (id_encuesta, index) {
        alertify.confirm('Eliminar encuesta', '¿Deseas eliminar la encuesta?', function () {
            var _this = this;
            this._encuestaService.eliminaEncuesta(id_encuesta).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Encuestas.splice(index, 1);
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    EncuestaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encuesta',
            template: __webpack_require__(/*! ./encuesta.component.html */ "./src/app/administracion/encuesta/encuesta.component.html"),
            styles: [__webpack_require__(/*! ./encuesta.component.scss */ "./src/app/administracion/encuesta/encuesta.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_encuesta_service__WEBPACK_IMPORTED_MODULE_1__["EncuestaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EncuestaComponent);
    return EncuestaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/encuesta.module.ts":
/*!************************************************************!*\
  !*** ./src/app/administracion/encuesta/encuesta.module.ts ***!
  \************************************************************/
/*! exports provided: EncuestaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaModule", function() { return EncuestaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _encuesta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuesta-routing.module */ "./src/app/administracion/encuesta/encuesta-routing.module.ts");
/* harmony import */ var _encuesta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta.component */ "./src/app/administracion/encuesta/encuesta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_encuesta_form_encuesta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-encuesta/form-encuesta.component */ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.ts");
/* harmony import */ var _form_main_form_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-main/form-main.component */ "./src/app/administracion/encuesta/form-main/form-main.component.ts");
/* harmony import */ var _form_preguntas_form_preguntas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-preguntas/form-preguntas.component */ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.ts");
/* harmony import */ var _form_reactivos_form_reactivos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-reactivos/form-reactivos.component */ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.ts");
/* harmony import */ var _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-switch/form-switch.component */ "./src/app/administracion/encuesta/form-switch/form-switch.component.ts");
/* harmony import */ var src_app_components_form_switch_form_switch_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/form-switch/form-switch.module */ "./src/app/components/form-switch/form-switch.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./estadisticas/estadisticas.component */ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var EncuestaModule = /** @class */ (function () {
    function EncuestaModule() {
    }
    EncuestaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_encuesta_component__WEBPACK_IMPORTED_MODULE_3__["EncuestaComponent"], _form_encuesta_form_encuesta_component__WEBPACK_IMPORTED_MODULE_5__["FormEncuestaComponent"], _form_main_form_main_component__WEBPACK_IMPORTED_MODULE_6__["FormMainComponent"], _form_preguntas_form_preguntas_component__WEBPACK_IMPORTED_MODULE_7__["FormPreguntasComponent"], _form_reactivos_form_reactivos_component__WEBPACK_IMPORTED_MODULE_8__["FormReactivosComponent"], _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_9__["FormSwitchComponent"], _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_13__["EstadisticasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _encuesta_routing_module__WEBPACK_IMPORTED_MODULE_2__["EncuestaRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_components_form_switch_form_switch_module__WEBPACK_IMPORTED_MODULE_10__["FormSwitchModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_12__["LanguageTranslationModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_14__["ChartsModule"]
            ],
            exports: [
                _form_switch_form_switch_component__WEBPACK_IMPORTED_MODULE_9__["FormSwitchComponent"]
            ]
        })
    ], EncuestaModule);
    return EncuestaModule;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/estadisticas/estadisticas.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">  \r\n    <div style=\"display: block\">\r\n      <div class=\"border rounded p-2 text-center\">\r\n        <h4>Estadísticas de encuestas</h4>\r\n        <div class=\"row mt-2\">\r\n          <div class=\"col-6 mb-5\" *ngFor=\"let chart of idsReactivos; let i = index\">\r\n            <h6>{{labelsReactivos[i]}}</h6>\r\n            <canvas height=\"120\" baseChart [data]=\"pieChartData[i]\" [labels]=\"pieChartLabels[i]\"\r\n            [chartType]=\"pieChartType\" [options]=\"pieChartOptions\"\r\n            [colors]=\"pieChartColors[i]\" [legend]=\"pieChartLegend\">> \r\n            </canvas>\r\n          </div>\r\n        </div>\r\n        <!-- <canvas height=\"100\" baseChart [datasets]=\"ChartData\" [labels]=\"ChartLabels\" [options]=\"ChartOptions\"\r\n          [legend]=\"ChartLegend\" [chartType]=\"ChartType\" [colors]=\"chartColors\">\r\n        </canvas> -->\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Pregunta abierta {{i+1}}\" *ngFor=\"let abierta of idsAbiertas; let i = index;\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"container mt-3\">\r\n                <h5>{{labelsAbiertas[i]}}</h5>\r\n                <div class=\"table-responsive mt-3\">\r\n                  <table class=\"table table-bordered\">\r\n                    <thead class=\"bg-light\">\r\n                      <tr>\r\n                        <th>Respuesta</th>\r\n                        <th>Veces que se repite</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of Abiertas[i]; let j = index;\">\r\n                        <td>{{item.respuesta}}</td>\r\n                        <td class=\"w-25\">{{item.num_respuestas}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n    <!-- <div *ngIf=\"Accesos == null && !loading && !show\" class=\"container border rounded py-4 px-5 text-center\">\r\n      <h4>No se encontró información</h4>\r\n    </div> -->\r\n    <!-- <div *ngIf=\"loading\" class=\"container border rounded py-4 px-5 text-center\">\r\n      <h4><i class=\"fa fa-spin fa-spinner fa-lg\"></i> Cargando información</h4>\r\n    </div> -->\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/estadisticas/estadisticas.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2VuY3Vlc3RhL2VzdGFkaXN0aWNhcy9lc3RhZGlzdGljYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/estadisticas/estadisticas.component.ts ***!
  \********************************************************************************/
/*! exports provided: EstadisticasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasComponent", function() { return EstadisticasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstadisticasComponent = /** @class */ (function () {
    function EstadisticasComponent(_encuestaService, route) {
        this._encuestaService = _encuestaService;
        this.route = route;
        this.Reactivos = [];
        this.Abiertas = [];
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true,
            scales: {
                xAxes: [{ stacked: true }],
                // yAxes: [{ stacked: true, ticks: { beginAtZero: true, stepSize: 2 } }]
                yAxes: [{ stacked: true, ticks: { beginAtZero: true, precision: 0 } }]
            }
        };
        this.barChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartColors = [{ backgroundColor: [], borderColor: [] }];
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            }
            // ,
            // plugins: {
            //   datalabels: {
            //     formatter: (value, ctx) => {
            //       const label = ctx.chart.data.labels[ctx.dataIndex];
            //       return label;
            //     },
            //   },
            // }
        };
        this.pieChartLabels = [];
        this.pieChartData = [];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [];
    }
    EstadisticasComponent.prototype.ngOnInit = function () {
        this.idEncuesta = parseInt(this.route.snapshot.paramMap.get('id'));
        this.consultaEstadísticas();
    };
    EstadisticasComponent.prototype.consultaEstadísticas = function () {
        var _this = this;
        this._encuestaService.consultaEstadísticas(this.idEncuesta).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.setArreglos(response, 'reactivos', 'Reactivos');
                _this.setArreglos(response, 'abiertas', 'Abiertas');
                _this.setPieCharts();
                console.log(_this.Abiertas, _this.idsAbiertas, _this.labelsAbiertas);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EstadisticasComponent.prototype.setPieCharts = function () {
        var _this = this;
        this.pieChartColors = [];
        this.pieChartData = [];
        this.pieChartLabels = [];
        this.Reactivos.forEach(function (reactivo, i) {
            var labels = [];
            var data = [];
            var colors = [];
            reactivo.forEach(function (item) {
                var color = "hsla(" + ~~(360 * Math.random()) + "," + (25 + 70 * Math.random()) + "%," +
                    (70 + 10 * Math.random()) + "%,1)";
                // let color = randomColor();
                labels.push(item.respuesta);
                data.push(item.num_respuestas);
                colors.push(color);
            });
            _this.pieChartColors.push([{ backgroundColor: colors }]);
            _this.pieChartLabels.push(labels);
            _this.pieChartData.push(data);
        });
    };
    EstadisticasComponent.prototype.setArreglos = function (datos, tipo, variable) {
        var _this = this;
        var ids = datos[tipo].map(function (r) { return r.campo_encuesta_id; });
        var labels = datos[tipo].map(function (r) { return r.pregunta; });
        this['ids' + variable] = ids.filter(this.getUnicos);
        this['labels' + variable] = labels.filter(this.getUnicos);
        this['ids' + variable].forEach(function (id) {
            var arreglo = datos[tipo].filter(function (r) { return r.campo_encuesta_id == id; });
            _this[variable].push(arreglo);
        });
    };
    EstadisticasComponent.prototype.getUnicos = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    EstadisticasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estadisticas',
            template: __webpack_require__(/*! ./estadisticas.component.html */ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.html"),
            styles: [__webpack_require__(/*! ./estadisticas.component.scss */ "./src/app/administracion/encuesta/estadisticas/estadisticas.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_encuesta_service__WEBPACK_IMPORTED_MODULE_1__["EncuestaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EstadisticasComponent);
    return EstadisticasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <h4 class=\"mb-3\">{{title}}</h4>\r\n    <form [formGroup]=\"encuestaForm\" (ngSubmit)=\"creaEncuesta()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"nombre\">Título de la encuesta</label>\r\n        <input class=\"form-control\" placeholder=\"Título\" type=\"text\" id=\"nombre\" formControlName=\"titulo\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"instruccion\">* Contenido</label>\r\n        <textarea class=\"form-control\" placeholder=\"Contenido\" id=\"instruccion\" formControlName=\"instruccion\"></textarea>\r\n        <span class=\"invalidText\" *ngIf=\"f.instruccion.invalid && f.instruccion.touched\">\r\n          {{'fmErrText' | translate}}\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\">* Obligatorio</label><br>\r\n        <div class=\"custom-control custom-radio custom-control-inline\">\r\n          <input formControlName=\"obligatorio\" type=\"radio\" id=\"obligatorio_1\" value=\"1\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\" for=\"obligatorio_1\">Si</label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio custom-control-inline\">\r\n          <input formControlName=\"obligatorio\" type=\"radio\" id=\"obligatorio_1_2\" value=\"0\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\" for=\"obligatorio_1_2\">No</label>\r\n        </div>\r\n      </div>\r\n      <button [hidden]=\"tipoAdmin == 0\" type=\"submit()\" class=\"btn btn-success pull-right\" [disabled]=\"encuestaForm.invalid\">Enviar información</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1lbmN1ZXN0YS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9lbmN1ZXN0YS9mb3JtLWVuY3Vlc3RhL2Zvcm0tZW5jdWVzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FormEncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEncuestaComponent", function() { return FormEncuestaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormEncuestaComponent = /** @class */ (function () {
    function FormEncuestaComponent(formBuilder, _encuestaService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._encuestaService = _encuestaService;
        this._usuarioService = _usuarioService;
        this.title = 'Nueva encuesta';
        this.setIdEncuesta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormEncuestaComponent.prototype, "f", {
        get: function () { return this.encuestaForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormEncuestaComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.idPersona = this._usuarioService.getIdentity().persona_id;
        this.encuestaForm = this.formBuilder.group({
            titulo: [''],
            instruccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            obligatorio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    FormEncuestaComponent.prototype.creaEncuesta = function () {
        var _this = this;
        this.encuestaForm.setErrors({ invalid: true });
        var form = Object.entries(this.encuestaForm.value);
        this._encuestaService.guardaEncuesta(this.idPersona, form).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dimissOthers;
                _this.setIdEncuesta.emit({ id: response['id_encuesta'], titulo: _this.encuestaForm.value.titulo });
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormEncuestaComponent.prototype, "setIdEncuesta", void 0);
    FormEncuestaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-encuesta',
            template: __webpack_require__(/*! ./form-encuesta.component.html */ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.html"),
            styles: [__webpack_require__(/*! ./form-encuesta.component.scss */ "./src/app/administracion/encuesta/form-encuesta/form-encuesta.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__["EncuestaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormEncuestaComponent);
    return FormEncuestaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/form-main/form-main.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-main/form-main.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-encuesta *ngIf=\"paso == 0\" (setIdEncuesta)=\"setPreguntas($event)\"></app-form-encuesta>\r\n<app-form-preguntas *ngIf=\"paso == 1\" [idEncuesta]=\"idEncuesta\" (success)=\"setReactivos($event)\"></app-form-preguntas>\r\n<app-form-reactivos *ngIf=\"paso == 2\" [idEncuesta]=\"idEncuesta\" [arregloPreguntas]=\"preguntas\" (success)=\"setNivelEncuesta($event)\"></app-form-reactivos>\r\n<app-form-switch [idAsignaturaGrupo]=\"idAsignaturaGrupo\" *ngIf=\"paso == 3\" [idEncuesta]=\"idEncuesta\" (success)=\"finalizado($event)\"></app-form-switch>"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-main/form-main.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-main/form-main.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2VuY3Vlc3RhL2Zvcm0tbWFpbi9mb3JtLW1haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-main/form-main.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-main/form-main.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMainComponent", function() { return FormMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormMainComponent = /** @class */ (function () {
    function FormMainComponent(router, route) {
        this.router = router;
        this.route = route;
        this.paso = 0;
    }
    FormMainComponent.prototype.ngOnInit = function () {
        this.plataforma = this.router.url.split('/')[1];
        if (this.plataforma == 'docente') {
            this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id_ag');
        }
        var idEncuesta = this.route.snapshot.paramMap.get('id');
        if (idEncuesta) {
            this.idEncuesta = parseInt(idEncuesta);
            this.paso = 3;
        }
    };
    FormMainComponent.prototype.setPreguntas = function (evt) {
        this.idEncuesta = evt.id;
        this.paso = 1;
    };
    FormMainComponent.prototype.setReactivos = function (evt) {
        this.preguntas = evt;
        this.paso = 2;
    };
    FormMainComponent.prototype.setNivelEncuesta = function (evt) {
        this.paso = 3;
    };
    FormMainComponent.prototype.finalizado = function (evt) {
        if (this.plataforma == 'admin') {
            this.router.navigate(['/admin/encuesta']);
        }
        else if (this.plataforma == 'docente') {
            this.router.navigate(['/docente/encuesta-docente/' + this.idAsignaturaGrupo]);
        }
    };
    FormMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-main',
            template: __webpack_require__(/*! ./form-main.component.html */ "./src/app/administracion/encuesta/form-main/form-main.component.html"),
            styles: [__webpack_require__(/*! ./form-main.component.scss */ "./src/app/administracion/encuesta/form-main/form-main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], FormMainComponent);
    return FormMainComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <h4 class=\"mb-3\">{{title}}</h4>\r\n    <form [formGroup]=\"preguntasForm\" (ngSubmit)=\"guardaPreguntas()\">\r\n      <div formArrayName=\"items\"\r\n        *ngFor=\"let item of preguntasForm.get('items')['controls']; let i = index;\">\r\n        <div [formGroupName]=\"i\" class=\"border rounded p-3 mb-2\">\r\n          <div [hidden]=\"seleccionados[i]\">\r\n            <div class=\"row\">\r\n              <div class=\"col-8\"><label>Pregunta {{i+1}}</label></div>\r\n              <div class=\"col\"><button class=\"btn btn-link p-0\" type=\"button\" (click)=\"setSeleccionado(i)\">\r\n                <i class=\"fa fa-plus\"></i> Mostrar pregunta</button>\r\n              </div>\r\n              <div [hidden]=\"tipoAdmin == 0\" *ngIf=\"i > 0\" class=\"col\"><button class=\"btn btn-link p-0 text-danger\" type=\"button\" (click)=\"deleteItem(i)\">\r\n                <i class=\"fa fa-times\"></i> Eliminar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [hidden]=\"!seleccionados[i]\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">* Pregunta {{i+1}}</label>\r\n              <input class=\"form-control\" formControlName=\"pregunta\" type=\"text\" placeholder=\"Pregunta\">\r\n              <span class=\"invalidText\" *ngIf=\"item['controls'].pregunta.invalid && item['controls'].pregunta.touched\">\r\n                {{'fmErrText' | translate}}\r\n              </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Descripción de la pregunta</label>\r\n              <textarea class=\"form-control\" formControlName=\"descripcion\" placeholder=\"Descripción\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">* Tipo input</label>\r\n              <select formControlName=\"tipo_campo\" class=\"form-control\">\r\n                <option value=\"\" hidden selected disabled>Selecciona una opción</option>\r\n                <option [value]=\"input.id\" *ngFor=\"let input of tipoInput;\">{{input.label}}</option>\r\n              </select>\r\n              <span class=\"invalidText\" *ngIf=\"item['controls'].tipo_campo.invalid && item['controls'].tipo_campo.touched\">\r\n                {{'fmOptSelect' | translate}}\r\n              </span>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"arrayItems['controls'][i].get('regex')\">\r\n              <label class=\"control-label\">Expresión regular</label><br>\r\n              <input class=\"form-control\" formControlName=\"regex\" type=\"text\" placeholder=\"Expresión regular de la pregunta\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">* Obligatorio</label><br>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input formControlName=\"obligatorio\" type=\"radio\" id=\"obligatorio_2_{{i}}\" value=\"1\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"obligatorio_2_{{i}}\">Si</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input formControlName=\"obligatorio\" type=\"radio\" id=\"obligatorio_2_{{i}}_2\" value=\"0\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"obligatorio_2_{{i}}_2\">No</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">Mensaje de error</label><br>\r\n              <input class=\"form-control\" formControlName=\"error\" type=\"text\" placeholder=\"Error\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-link\" type=\"button\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Agregar pregunta</button>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-success pull-right\" type=\"submit\" [disabled]=\"preguntasForm.invalid\">Guardar información</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1wcmVndW50YXMvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1wcmVndW50YXMvZm9ybS1wcmVndW50YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormPreguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreguntasComponent", function() { return FormPreguntasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormPreguntasComponent = /** @class */ (function () {
    function FormPreguntasComponent(formBuilder, _encuestaService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._encuestaService = _encuestaService;
        this._usuarioService = _usuarioService;
        this.title = 'Carga de preguntas';
        this.suscripciones = [];
        this.seleccionados = [];
        this.tipoInput = [{ id: 1, label: 'Texto' }, { id: 2, label: 'Número' }, { id: 3, label: 'Radio' },
            { id: 4, label: 'Checkbox' }, { id: 5, label: 'Lista seleccionable' }];
        this.bandera = false;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormPreguntasComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
    };
    FormPreguntasComponent.prototype.ngOnChanges = function () {
        this.preguntasForm = this.formBuilder.group({
            items: this.formBuilder.array([this.createItem()])
        });
        this.valueChanges(0);
        this.setSeleccionado();
    };
    FormPreguntasComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            pregunta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descripcion: [''],
            tipo_campo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            obligatorio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            error: ['']
        });
    };
    Object.defineProperty(FormPreguntasComponent.prototype, "arrayItems", {
        get: function () { return this.preguntasForm.get('items'); },
        enumerable: true,
        configurable: true
    });
    FormPreguntasComponent.prototype.valueChanges = function (index) {
        var _this = this;
        this.suscripciones.push(this.preguntasForm.get('items')['controls'][index].get('tipo_campo').valueChanges.subscribe(function (value) {
            if (value == 1)
                _this.preguntasForm.get('items')['controls'][index].addControl('regex', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
            else
                _this.preguntasForm.get('items')['controls'][index].removeControl('regex');
        }));
    };
    FormPreguntasComponent.prototype.setSeleccionado = function (index) {
        if (index === void 0) { index = -1; }
        if (this.seleccionados.length > 0) {
            for (var i = 0; i < this.seleccionados.length; i++) {
                this.seleccionados[i] = false;
            }
        }
        if (index == -1)
            this.seleccionados.push(true);
        else
            this.seleccionados[index] = true;
    };
    FormPreguntasComponent.prototype.addItem = function () {
        this.items = this.preguntasForm.get('items');
        this.items.push(this.createItem());
        this.setSeleccionado();
        this.valueChanges(this.items.length - 1);
    };
    FormPreguntasComponent.prototype.deleteItem = function (index) {
        var _this = this;
        this.items = this.preguntasForm.get('items');
        this.items.removeAt(index);
        this.suscripciones.forEach(function (sub) { sub.unsubscribe(); });
        this.seleccionados = [];
        this.suscripciones = [];
        this.items.value.forEach(function (item, i) {
            _this.valueChanges(i);
            _this.setSeleccionado();
        });
    };
    FormPreguntasComponent.prototype.guardaPreguntas = function () {
        var _this = this;
        var form = this.preguntasForm.get('items').value;
        this._encuestaService.guardaPreguntas(form, this.idEncuesta).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                _this.success.emit(form);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormPreguntasComponent.prototype, "idEncuesta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormPreguntasComponent.prototype, "success", void 0);
    FormPreguntasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-preguntas',
            template: __webpack_require__(/*! ./form-preguntas.component.html */ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.html"),
            styles: [__webpack_require__(/*! ./form-preguntas.component.scss */ "./src/app/administracion/encuesta/form-preguntas/form-preguntas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__["EncuestaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormPreguntasComponent);
    return FormPreguntasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <h4 class=\"mb-3\">{{title}}</h4>\r\n    <form *ngIf=\"bandera\" [formGroup]=\"reactivosForm\" (ngSubmit)=\"guardaReactivos()\">\r\n      <div class=\"col-12\">\r\n        <div class=\"row border rounded py-3 bg-light\">\r\n          <div class=\"col-6\"><p class=\"h5\"><b>Pregunta</b></p></div>\r\n          <div class=\"col-3\"><p class=\"h5\"><b>Tipo de input</b></p></div>\r\n          <div class=\"col-3\"></div>\r\n        </div>\r\n      </div>\r\n      <div formArrayName=\"items\"\r\n        *ngFor=\"let item of reactivosForm.get('items').controls; let i = index;\">\r\n        <div [formGroupName]=\"i\" class=\"border rounded p-3\">\r\n            <div class=\"row mb-3\">\r\n              <div class=\"col-6\">\r\n                <label> Pregunta {{indices[i] + 1}}:</label>\r\n                <p class=\"mb-0 pb-0\">{{item.get('pregunta').value}}</p>\r\n              </div>\r\n              <div class=\"col-3\">\r\n                <p>{{item.get('nombre_tipo_campo').value}}</p>\r\n              </div>\r\n              <div class=\"col-3\" [hidden]=\"seleccionados[i]\"><button class=\"btn btn-link\" type=\"button\" (click)=\"setSeleccionado(i)\">\r\n                <i class=\"fa fa-plus\"></i> Mostrar reactivos</button>\r\n              </div>\r\n            </div>\r\n\r\n            <div formArrayName=\"reactivos\">\r\n              <div *ngFor=\"let reactivo of item.get('reactivos').controls; let j = index;\" [hidden]=\"!seleccionados[i]\">\r\n                <div [formGroupName]=\"j\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6 mb-2\">\r\n                      <div class=\"input-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <div class=\"input-group-text\">Reactivo {{j+1}}</div>\r\n                        </div>\r\n                        <input formControlName=\"reactivo_desc\" type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Descripción del reactivo\">\r\n                      </div>\r\n                      <span class=\"invalidText\" *ngIf=\"reactivo['controls'].reactivo_desc.invalid && reactivo['controls'].reactivo_desc.touched\">\r\n                        {{'fmErrText' | translate}}\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <i *ngIf=\"(item.get('tipo_campo_id').value == '3' && j > 1) || \r\n                          (item.get('tipo_campo_id').value != '3' && j > 0)\" \r\n                        class=\"fa fa-times fa-2x text-danger\" (click)=\"deleteReactivo(i,j)\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"seleccionados[i]\">\r\n                <div class=\"col-12\">\r\n                  <button class=\"btn btn-link\" type=\"button\" (click)=\"addReactivo(i)\"><i class=\"fa fa-plus\"></i> Agregar reactivo</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row my-3\">\r\n        <div class=\"col-12\">\r\n          <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-success pull-right\" type=\"submit\" [disabled]=\"reactivosForm.invalid\">Guardar información</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1yZWFjdGl2b3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1yZWFjdGl2b3MvZm9ybS1yZWFjdGl2b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormReactivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormReactivosComponent", function() { return FormReactivosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormReactivosComponent = /** @class */ (function () {
    function FormReactivosComponent(formBuilder, _encuestaService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._encuestaService = _encuestaService;
        this._usuarioService = _usuarioService;
        this.title = "Carga de reactivos";
        this.seleccionados = [];
        this.tipoInput = [{ id: 1, label: 'Texto' }, { id: 2, label: 'Número' }, { id: 3, label: 'Radio' },
            { id: 4, label: 'Checkbox' }, { id: 5, label: 'Lista seleccionable' }];
        this.bandera = false;
        this.indices = [];
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormReactivosComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
    };
    FormReactivosComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._encuestaService.consultaPreguntas(this.idEncuesta).subscribe(function (response) {
            if (response && response['status']) {
                _this.preguntas = response['pregunta'];
                _this.setDatos();
            }
            else {
                _this.success.emit({ completo: true });
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormReactivosComponent.prototype.setDatos = function () {
        var _this = this;
        this.preguntas.forEach(function (pregunta) {
            var indice = _this.arregloPreguntas.findIndex(function (p) { return p.pregunta == pregunta.pregunta && p.tipo_campo == pregunta.tipo_campo_id; });
            _this.indices.push(indice);
        });
        this.reactivosForm = this.formBuilder.group({
            items: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](this.preguntas.map(function (pregunta) { return _this.createPreguntaReactivos(pregunta); }))
        });
        this.setSeleccionado();
        this.bandera = true;
    };
    FormReactivosComponent.prototype.createPreguntaReactivos = function (datos) {
        var _this = this;
        // let tipo = this.tipoInput.find(i => i.id == datos.tipo_campo_id);
        var reactivos = [0];
        if (datos.tipo_campo_id == '3') {
            reactivos.push(1);
        }
        var nombre_tipo_campo = datos.nombre_tipo_campo.charAt(0).toUpperCase() + datos.nombre_tipo_campo.slice(1);
        return this.formBuilder.group({
            campo_encuesta_id: [datos.campo_encuesta_id],
            pregunta: [datos.pregunta],
            descripcion: [datos.descripcion],
            nombre_tipo_campo: [nombre_tipo_campo],
            tipo_campo_id: [datos.tipo_campo_id],
            reactivos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](reactivos.map(function (reactivo) { return _this.createReactivo(); }))
        });
    };
    FormReactivosComponent.prototype.createReactivo = function () {
        return this.formBuilder.group({
            reactivo_desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    FormReactivosComponent.prototype.addReactivo = function (index) {
        this.reactivos = this.reactivosForm.get('items')['controls'][index].get('reactivos');
        this.reactivos.push(this.createReactivo());
    };
    FormReactivosComponent.prototype.deleteReactivo = function (i, j) {
        this.reactivos = this.reactivosForm.get('items')['controls'][i].get('reactivos');
        this.reactivos.removeAt(j);
    };
    FormReactivosComponent.prototype.setSeleccionado = function (index) {
        if (index === void 0) { index = -1; }
        if (this.seleccionados.length > 0) {
            for (var i = 0; i < this.seleccionados.length; i++) {
                this.seleccionados[i] = false;
            }
        }
        if (index == -1)
            this.seleccionados.push(true);
        else
            this.seleccionados[index] = true;
    };
    FormReactivosComponent.prototype.guardaReactivos = function () {
        var _this = this;
        var form = this.reactivosForm.get('items').value;
        this._encuestaService.guardaReactivos(form, this.idEncuesta).subscribe(function (response) {
            if (response && response['status']) {
                _this.success.emit({ completo: true });
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormReactivosComponent.prototype, "idEncuesta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormReactivosComponent.prototype, "arregloPreguntas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormReactivosComponent.prototype, "success", void 0);
    FormReactivosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-reactivos',
            template: __webpack_require__(/*! ./form-reactivos.component.html */ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.html"),
            styles: [__webpack_require__(/*! ./form-reactivos.component.scss */ "./src/app/administracion/encuesta/form-reactivos/form-reactivos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__["EncuestaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormReactivosComponent);
    return FormReactivosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/encuesta/form-switch/form-switch.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-switch/form-switch.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <form [formGroup]=\"switchForm\" (ngSubmit)=\"enviarDatos()\" class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selecciona a quién va dirigida la encuesta</label>\r\n          <select class=\"form-control\" formControlName=\"rol\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"rol.rol_id\" *ngFor=\"let rol of Roles; let i = index;\">{{rol.rol}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.nivel\">\r\n        <label>Selecciona la ubicación de la encuesta</label>\r\n        <div class=\"form-group\">\r\n          <div class=\"custom-control custom-radio custom-control-inline\"\r\n            *ngFor=\"let nivel of Radios; let i = index;\">\r\n            <input formControlName=\"nivel\" type=\"radio\" id=\"radio_{{i}}\" class=\"custom-control-input\" [value]=\"nivel.valor\">\r\n            <label class=\"custom-control-label\" for=\"radio_{{i}}\">{{nivel.texto}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"nivel\">\r\n        <app-consulta-asignatura (ready)=\"getReady($event)\" [parentForm]=\"switchForm\" [tipo]=\"tipo\" [nivel]=\"nivel\"></app-consulta-asignatura>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.grupo\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selecciona un grupo</label>\r\n          <select class=\"form-control\" formControlName=\"grupo\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"grupo.grupo_id\" *ngFor=\"let grupo of Grupos; let i = index;\">{{grupo.nombre_grupo}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.grupo_asignatura\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selecciona una asignatura en el grupo</label>\r\n          <select class=\"form-control\" formControlName=\"grupo_asignatura\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"asignatura.asignatura_grupo_id \" *ngFor=\"let asignatura of Asignaturas; let i = index;\">{{asignatura.asignatura}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-3\">\r\n        <button class=\"btn btn-success pull-right\" type=\"submit\">Guardar información</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div> -->\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <!-- <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"direcciones && !direcciones[0].aviso_id\">\r\n      <span>{{direcciones}}</span>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-7\">\r\n    <div *ngIf=\"encuesta\" class=\"col-md-6 alert alert-success\" role=\"alert\">\r\n      <p>{{encuesta}}</p>\r\n    </div>\r\n    <form [formGroup]=\"formSwitch\" (ngSubmit)=\"enviarDatos()\">\r\n      <div class=\"row\">\r\n        <div [hidden]=\"tipoForm == 1\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n          <label class=\"control-label\">Fecha de inicio:</label>\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"AAAA-MM-DD\" name=\"dp\" formControlName=\"fecha_inicio\"\r\n              [footerTemplate]=\"footerTemplate_1\" ngbDatepicker #d_1=\"ngbDatepicker\" [placement]=\"'bottom'\">\r\n            <div class=\"input-group-append\">\r\n              <button #buttonEl class=\"btn btn-outline-primary calendar\" (click)=\"d_1.toggle()\" type=\"button\"><i\r\n                  class=\"fa fa-calendar\"></i></button>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"fS.fecha_inicio.invalid && fS.fecha_inicio.touched\">\r\n            {{'fmErrDate' | translate}}\r\n          </span>\r\n          <ng-template #footerTemplate_1>\r\n            <hr class=\"my-0\">\r\n            <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"setData(1, today); d_1.close()\">Hoy</button>\r\n            <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d_1.close()\">Cerrar</button>\r\n          </ng-template>\r\n        </div>\r\n        <div [hidden]=\"tipoForm == 1\" class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n          <label class=\"control-label\">Fecha de fin:</label>\r\n          <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"AAAA-MM-DD\" name=\"dp\" formControlName=\"fecha_fin\"\r\n              [footerTemplate]=\"footerTemplate_2\" ngbDatepicker #d_2=\"ngbDatepicker\" [placement]=\"'bottom'\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-primary calendar\" (click)=\"d_2.toggle()\" type=\"button\"><i\r\n                  class=\"fa fa-calendar\"></i></button>\r\n            </div>\r\n          </div>\r\n          <ng-template #footerTemplate_2>\r\n            <hr class=\"my-0\">\r\n            <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"setData(2, today); d_2.close()\">Hoy</button>\r\n            <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d_2.close()\">Cerrar</button>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <form-switch (completado)=\"disableForm($event)\" [idAsignaturaGrupo]=\"idAsignaturaGrupo\" [switchForm]=\"formSwitch\" [tipoForm]=\"tipoForm\"></form-switch>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 mt-3\">\r\n          <button  [disabled]=\"disabled\" [hidden]=\"tipoAdmin == 0\" class=\"btn btn-success pull-right\" type=\"submit\">Guardar\r\n            información</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-md-5\">\r\n    <h4 *ngIf=\"direcciones\">Destino del aviso:</h4>\r\n      <div class=\"card\" *ngFor=\"let direccion of direcciones; let i = index\">\r\n        <div class=\"card-body\">\r\n          <blockquote class=\"blockquote mb-0\">\r\n            <button class=\"btn btn-danger pull-right\" (click)=\"eliminaSwitch(direccion.switch_aviso_id, i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n            <p>{{direccion.destino}}</p>\r\n            <p>Fecha de creación: {{direccion.fecha_creacion | date:\"dd/MM/yyyy\"}}</p>\r\n          </blockquote>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-switch/form-switch.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-switch/form-switch.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.card {\n  margin-top: 3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZW5jdWVzdGEvZm9ybS1zd2l0Y2gvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9lbmN1ZXN0YS9mb3JtLXN3aXRjaC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcZW5jdWVzdGFcXGZvcm0tc3dpdGNoXFxmb3JtLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUNJLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9lbmN1ZXN0YS9mb3JtLXN3aXRjaC9mb3JtLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2Zvcm1zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/encuesta/form-switch/form-switch.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/encuesta/form-switch/form-switch.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSwitchComponent", function() { return FormSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../avisos-admin/avisos-admin.service */ "./src/app/administracion/avisos-admin/avisos-admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormSwitchComponent = /** @class */ (function () {
    function FormSwitchComponent(formBuilder, _encuestaService, calendar, _fechaService, _usuarioService, route, _avisosService) {
        this.formBuilder = formBuilder;
        this._encuestaService = _encuestaService;
        this.calendar = calendar;
        this._fechaService = _fechaService;
        this._usuarioService = _usuarioService;
        this.route = route;
        this._avisosService = _avisosService;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.today = this.calendar.getToday();
        this.disabled = true;
    }
    Object.defineProperty(FormSwitchComponent.prototype, "sF", {
        get: function () { return this.formSwitch.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormSwitchComponent.prototype, "fS", {
        get: function () { return this.formSwitch.controls; },
        enumerable: true,
        configurable: true
    });
    FormSwitchComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        this.id_encuesta = this.route.snapshot.params['id'];
        this.switch_encuesta_id = this.route.snapshot.params['id2'];
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this.formSwitch = this.formBuilder.group({
            fecha_inicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fecha_fin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        if (this.tipoForm == 1) {
            this.formSwitch.controls.fecha_inicio.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.formSwitch.controls.fecha_inicio.updateValueAndValidity();
            this.formSwitch.controls.fecha_fin.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.formSwitch.controls.fecha_fin.updateValueAndValidity();
        }
        if (this.id_encuesta && this.switch_encuesta_id) {
            this.consultaEspecifica();
        }
        this.direccion();
    };
    FormSwitchComponent.prototype.consultaEspecifica = function () {
        var _this = this;
        this._encuestaService.consultaSwitchEncuesta(this.idEncuesta, this.switch_encuesta_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.encuesta = response['encuesta'];
                var asignatura = _this.encuesta[0].asignatura;
                if (asignatura) {
                    _this.encuesta = asignatura;
                }
                // console.log(this.encuesta);
            }
        });
    };
    FormSwitchComponent.prototype.eliminaSwitch = function (switch_aviso_id, index) {
        alertify.confirm('', '¿Deseas eliminar el aviso para este destino?', function () {
            var _this = this;
            this._avisosService.eliminaSwitchAviso(switch_aviso_id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.direcciones.splice(index, 1);
                    alertify.success(response['msg']);
                }
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    FormSwitchComponent.prototype.direccion = function () {
        var _this = this;
        this._avisosService.consultaDireccion(this.idAviso).subscribe(function (response) {
            if (response && response['status']) {
                _this.direcciones = response['avisos'];
                _this.direcciones.forEach(function (direccion) {
                    if (direccion.fecha_creacion)
                        direccion.fecha_creacion = new Date((direccion.fecha_creacion) * 1000);
                });
                console.log(_this.direcciones);
            }
        });
    };
    FormSwitchComponent.prototype.enviarDatos = function () {
        var _this = this;
        var id_rol = this.formSwitch.get('rol').value;
        var id, variable;
        var fecha_inicio = this._fechaService.formatoFecha(this.formSwitch.get('fecha_inicio').value, '', 1) + ' 00:00:00';
        var fecha_fin = this._fechaService.formatoFecha(this.formSwitch.get('fecha_fin').value, '', 1) + ' 23:59:59';
        if (!this.idAsignaturaGrupo) {
            var nivel = this.formSwitch.get('nivel').value;
            switch (nivel) {
                case 2:
                    id = this.formSwitch.get('plan_estudio_id').value;
                    variable = 'id_plan_estudio';
                    break;
                case 3:
                    id = this.formSwitch.get('plan_orden_id').value;
                    variable = 'id_plan_orden';
                    break;
                case 4:
                    id = this.formSwitch.get('orden_asignatura_id').value;
                    variable = 'id_orden_asignatura';
                    break;
                case 5:
                    id = this.formSwitch.get('grupo').value;
                    variable = 'id_grupo';
                    break;
                case 6:
                    id = this.formSwitch.get('grupo_asignatura').value;
                    variable = 'id_asignatura_grupo';
                    break;
                case 7:
                    id = undefined;
                    variable = undefined;
                    break;
                default:
                    id = '';
                    break;
            }
        }
        else {
            id = this.idAsignaturaGrupo;
            variable = 'id_asignatura_grupo';
        }
        this._encuestaService.guardaInformacion(variable, id, this.idEncuesta, id_rol, fecha_inicio, fecha_fin, this.tipoForm, this.idAviso).subscribe(function (response) {
            if (response && response['status']) {
                _this.direccion();
                _this.success.emit({ completo: true });
                alertify.success(response['msg']).dismissOthers();
            }
        });
    };
    FormSwitchComponent.prototype.setData = function (id, data) {
        if (id == 1) {
            this.formSwitch.get('fecha_inicio').setValue(data);
        }
        else {
            this.formSwitch.get('fecha_fin').setValue(data);
        }
    };
    FormSwitchComponent.prototype.disableForm = function (evt) {
        this.disabled = !evt;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormSwitchComponent.prototype, "idEncuesta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "tipoForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "idAviso", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "idAsignaturaGrupo", void 0);
    FormSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-switch',
            template: __webpack_require__(/*! ./form-switch.component.html */ "./src/app/administracion/encuesta/form-switch/form-switch.component.html"),
            styles: [__webpack_require__(/*! ./form-switch.component.scss */ "./src/app/administracion/encuesta/form-switch/form-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_encuesta_service__WEBPACK_IMPORTED_MODULE_2__["EncuestaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_4__["FechaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_7__["AvisosAdminService"]])
    ], FormSwitchComponent);
    return FormSwitchComponent;
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

/***/ "./src/app/components/form-switch/form-switch.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-switch/form-switch.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <form [formGroup]=\"switchForm\"  class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-group\">\r\n          <label *ngIf=\"tipoForm != 1\" class=\"control-label\">Selecciona a quién va dirigida la encuesta</label>\r\n          <label *ngIf=\"tipoForm == 1\" class=\"control-label\">Selecciona a quién va dirigido el aviso</label>\r\n          <select class=\"form-control\" formControlName=\"rol\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"rol.rol_id\" *ngFor=\"let rol of Roles; let i = index;\">{{rol.rol}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.nivel\">\r\n        <label *ngIf=\"tipoForm != 1\">Selecciona la ubicación de la encuesta</label>\r\n        <label *ngIf=\"tipoForm == 1\">Selecciona la ubicación del aviso</label>\r\n        <div class=\"form-group\">\r\n          <div class=\"custom-control custom-radio custom-control-inline\"\r\n            *ngFor=\"let nivel of Radios; let i = index;\">\r\n            <input formControlName=\"nivel\" type=\"radio\" id=\"radio_{{i}}\" class=\"custom-control-input\" [value]=\"nivel.valor\">\r\n            <label class=\"custom-control-label\" for=\"radio_{{i}}\">{{nivel.texto}}</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"nivel\">\r\n        <app-consulta-asignatura (completado)=\"seleccionado($event)\" (ready)=\"getReady($event)\" [parentForm]=\"switchForm\" [tipo]=\"tipo\" [nivel]=\"nivel\"></app-consulta-asignatura>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.grupo\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selecciona un grupo</label>\r\n          <select class=\"form-control\" formControlName=\"grupo\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"grupo.grupo_id\" *ngFor=\"let grupo of Grupos; let i = index;\">{{grupo.nombre_grupo}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-2\" *ngIf=\"sF.grupo_asignatura\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Selecciona una asignatura en el grupo</label>\r\n          <select class=\"form-control\" formControlName=\"grupo_asignatura\">\r\n            <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n            <option [value]=\"asignatura.asignatura_grupo_id \" *ngFor=\"let asignatura of Asignaturas; let i = index;\">{{asignatura.asignatura}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/form-switch/form-switch.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-switch/form-switch.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXN3aXRjaC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tc3dpdGNoL2Zvcm0tc3dpdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/form-switch/form-switch.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-switch/form-switch.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSwitchComponent", function() { return FormSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../administracion/encuesta/services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormSwitchComponent = /** @class */ (function () {
    function FormSwitchComponent(_catalogoService, _usuarioService, _encuestaService) {
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this._encuestaService = _encuestaService;
        this.completado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nivel = 0;
        this.Radios = [
            { texto: 'Todos', valor: 7 },
            { texto: 'Plan de estudios', valor: 2 },
            { texto: 'Grado', valor: 3 },
            { texto: 'Asignatura', valor: 4 },
            { texto: 'Grupo', valor: 5 },
            { texto: 'Asignatura en grupo', valor: 6 }
        ];
    }
    Object.defineProperty(FormSwitchComponent.prototype, "sF", {
        get: function () { return this.switchForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormSwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._catalogoService.consultaRol(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Roles = response['rol'];
                if (_this.idAsignaturaGrupo) {
                    _this.Roles = _this.Roles.filter(function (r) { return r.rol_id == 2; });
                }
            }
        }, function (error) {
            console.log(error);
        });
        this.switchForm.addControl('rol', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.idAsignaturaGrupo ? 2 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        if (!this.idAsignaturaGrupo) {
            this.switchForm.get('rol').valueChanges.subscribe(function (value) {
                if (!_this.switchForm.get('nivel')) {
                    _this.switchForm.addControl('nivel', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
                    _this.subscribeNivel();
                }
            });
        }
    };
    FormSwitchComponent.prototype.subscribeNivel = function () {
        var _this = this;
        this.switchForm.get('nivel').valueChanges.subscribe(function (value) {
            _this.nivel = parseInt(value);
            _this.completado.emit(false);
            if (_this.switchForm.get('grupo'))
                _this.switchForm.removeControl('grupo');
            if (_this.switchForm.get('grupo_asignatura'))
                _this.switchForm.removeControl('grupo_asignatura');
            if (_this.nivel > 4) {
                _this.tipo = 'large';
                if (_this.nivel == 7)
                    _this.completado.emit(true);
            }
            else if (_this.nivel <= 4) {
                if (_this.switchForm.get('grupo')) {
                    _this.switchForm.removeControl('grupo');
                }
                if (_this.nivel == 2)
                    _this.tipo = 'medium';
                else if (_this.nivel == 3)
                    _this.tipo = 'large';
                else if (_this.nivel == 4)
                    _this.tipo = '';
            }
        });
    };
    FormSwitchComponent.prototype.getReady = function (event) {
        if (event) {
            if (this.nivel > 4) {
                this.subscribeGrado();
            }
        }
    };
    FormSwitchComponent.prototype.subscribeGrado = function () {
        var _this = this;
        if (this.switchForm.get('plan_orden_id')) {
            this.switchForm.get('plan_orden_id').valueChanges.subscribe(function (value) {
                if (value != '') {
                    _this.seleccionado(false, 'grado');
                    _this._encuestaService.consultaGrupo(value).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.Grupos = response['grupos'];
                            _this.subscribeGrupo();
                        }
                        else {
                            if (_this.switchForm.get('grupo')) {
                                _this.switchForm.removeControl('grupo');
                            }
                            _this.seleccionado(false);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            });
        }
    };
    FormSwitchComponent.prototype.subscribeGrupo = function () {
        var _this = this;
        if (!this.switchForm.get('grupo')) {
            this.switchForm.addControl('grupo', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.switchForm.get('grupo').valueChanges.subscribe(function (value) {
                if (_this.nivel == 6) {
                    _this.seleccionado(false, 'grupo');
                    _this._encuestaService.consultaAsignatura(value).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.Asignaturas = response['Asignaturas'];
                            _this.subscribeGrupoAsignatura();
                        }
                        else {
                            if (_this.switchForm.get('grupo_asignatura')) {
                                _this.switchForm.removeControl('grupo_asignatura');
                            }
                            _this.completado.emit(false);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    _this.completado.emit(true);
                }
            });
        }
    };
    FormSwitchComponent.prototype.subscribeGrupoAsignatura = function () {
        var _this = this;
        if (!this.switchForm.get('grupo_asignatura')) {
            this.switchForm.addControl('grupo_asignatura', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.switchForm.get('grupo_asignatura').valueChanges.subscribe(function (value) {
                _this.completado.emit(true);
            });
        }
    };
    FormSwitchComponent.prototype.seleccionado = function (evt, select) {
        if (select === void 0) { select = null; }
        if (evt == false) {
            if (this.switchForm.get('grupo') && select == 'grado') {
                this.switchForm.get('grupo').setValue('');
                if (this.switchForm.get('grupo_asignatura'))
                    this.switchForm.removeControl('grupo_asignatura');
            }
            else if (this.switchForm.get('grupo_asignatura') && select == 'grupo') {
                this.switchForm.get('grupo_asignatura').setValue('');
            }
        }
        this.completado.emit(evt);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FormSwitchComponent.prototype, "switchForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormSwitchComponent.prototype, "idEncuesta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "tipoForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "idAsignaturaGrupo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormSwitchComponent.prototype, "completado", void 0);
    FormSwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-switch',
            template: __webpack_require__(/*! ./form-switch.component.html */ "./src/app/components/form-switch/form-switch.component.html"),
            styles: [__webpack_require__(/*! ./form-switch.component.scss */ "./src/app/components/form-switch/form-switch.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_4__["EncuestaService"]])
    ], FormSwitchComponent);
    return FormSwitchComponent;
}());



/***/ }),

/***/ "./src/app/components/form-switch/form-switch.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/form-switch/form-switch.module.ts ***!
  \**************************************************************/
/*! exports provided: FormSwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSwitchModule", function() { return FormSwitchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-switch.component */ "./src/app/components/form-switch/form-switch.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormSwitchModule = /** @class */ (function () {
    function FormSwitchModule() {
    }
    FormSwitchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_form_switch_component__WEBPACK_IMPORTED_MODULE_2__["FormSwitchComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaAsignaturaModule"]
            ],
            exports: [_form_switch_component__WEBPACK_IMPORTED_MODULE_2__["FormSwitchComponent"]]
        })
    ], FormSwitchModule);
    return FormSwitchModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-encuesta-encuesta-module~avisos-admin-avisos-admin-module.js.map