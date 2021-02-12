(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscripcion-terminos-terminos-module"],{

/***/ "./src/app/inscripcion/inscripcion.service.ts":
/*!****************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.service.ts ***!
  \****************************************************/
/*! exports provided: InscripcionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionService", function() { return InscripcionService; });
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




var InscripcionService = /** @class */ (function () {
    function InscripcionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    InscripcionService.prototype.consultaAspirante = function (id_aspirante) {
        var params = '?id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/consulta.php' + params);
    };
    InscripcionService.prototype.insertaRegistro = function (signupForm, color, tipo) {
        var formData = new FormData();
        formData.append('nombre', signupForm.get('nombre').value);
        formData.append('primer_apellido', signupForm.get('primer_apellido').value);
        formData.append('segundo_apellido', signupForm.get('segundo_apellido').value);
        formData.append('email', signupForm.get('email').value);
        formData.append('celular', signupForm.get('numero').value);
        //formData.append('clave_aspirante', signupForm.get('claveElector').value);
        formData.append('carrera_id', signupForm.get('carrera').value);
        formData.append('curp', signupForm.get('curp').value);
        formData.append('promocion', signupForm.get('codPromo').value);
        formData.append('color', color);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/aspirante/registro.php', formData);
        }
        else if (tipo == 1) {
            return this._httpClient.post(this.url + 'asesor/aspirante/registro.php', formData);
        }
    };
    InscripcionService.prototype.validaCodigo = function (codigo) {
        var params = '?clave_promocion=' + codigo;
        // params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/promocion/consultaClave.php' + params);
    };
    InscripcionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InscripcionService);
    return InscripcionService;
}());



/***/ }),

/***/ "./src/app/inscripcion/services/terminos.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/inscripcion/services/terminos.service.ts ***!
  \**********************************************************/
/*! exports provided: TerminosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosService", function() { return TerminosService; });
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




var TerminosService = /** @class */ (function () {
    function TerminosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    TerminosService.prototype.consultaPlanVigente = function (idCarrera, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_carrera=' + idCarrera;
        return this._httpClient.get(this.url + 'admin/carrera/consultaUltimoPlanVigente.php' + params);
    };
    TerminosService.prototype.actualizaTerminos = function (idCarrera, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_carrera=' + idCarrera;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/aceptarTerminos.php' + params);
    };
    TerminosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TerminosService);
    return TerminosService;
}());



/***/ }),

/***/ "./src/app/inscripcion/terminos/terminos-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/inscripcion/terminos/terminos-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TerminosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosRoutingModule", function() { return TerminosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _terminos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminos.component */ "./src/app/inscripcion/terminos/terminos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _terminos_component__WEBPACK_IMPORTED_MODULE_2__["TerminosComponent"] }
];
var TerminosRoutingModule = /** @class */ (function () {
    function TerminosRoutingModule() {
    }
    TerminosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TerminosRoutingModule);
    return TerminosRoutingModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/terminos/terminos.component.html":
/*!**************************************************************!*\
  !*** ./src/app/inscripcion/terminos/terminos.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"pasoActual == 0 \">\r\n    <div class=\"alert alert-danger text-center\" role=\"alert\">\r\n        Para continuar, debes terminar el bloque anterior.\r\n    </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"pasoActual == 1\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h4>{{title}}</h4>\r\n            <p> {{instruccion[momento]}}:</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"momento == 1\">\r\n        <div class=\"col-12\">\r\n            <div class=\"row\" *ngIf=\"!carreraSeleccionada\">\r\n                <div class=\"col-md-6 col-lg-4\" *ngFor=\"let carrera of carreras;let i = index\">\r\n\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" [src]=\"urlAssets + carrera.imagen_url\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\" style=\"min-height: 200px;\">\r\n                            <h5 class=\"card-title\"><b>{{carrera.carrera}}</b></h5>\r\n                            <p class=\"card-text\">{{carrera.objetivo}}</p>\r\n                            <button class=\"btn btn-primary pull-right\" (click)=\"seleccionaOferta(i)\">Seleccionar oferta</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"carreraSeleccionada\">\r\n                <div class=\"col-md-4\">\r\n                    <img class=\"card-img-top\" [src]=\"urlAssets + carreraSeleccionada.imagen_url\" alt=\"Card image cap\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <h5>{{carreraSeleccionada.carrera}}</h5>\r\n                    <p>{{carreraSeleccionada.objetivo}}</p>\r\n                    <button class=\"btn btn-primary pull-right\" (click)=\"confirmaOferta(i)\">Confirmar oferta</button>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n\r\n                    <app-plan-estudio *ngIf=\"idPlanEstudios\" [idPlanEstudios]=\"idPlanEstudios\"></app-plan-estudio>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"momento == 2\">\r\n        <div class=\"col-12\">\r\n            <iframe src=\"assets/layout/inscripcion/terminos.pdf\" style=\"width: 100%; height: 600px\"></iframe>\r\n        </div>\r\n        <div class=\"col-12 text-center\">\r\n            <h5>He leído y acepto el reglamento general, código de conducta, términos y condiciones de la Universidad.</h5>\r\n            <!--button class=\"btn btn-outline-secondary\" (click)=\"cambiarOferta()\">Cambiar oferta educativa<-button-->\r\n            <button class=\"btn btn-default btn-success \" (click)=\"guardarOferta()\">Acepto los términos </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"pasoActual >= 2\">\r\n    <p style=\"text-align: justify;\">\r\n        Has completado el segundo paso satisfactoriamente. Antes de pasar a la carga de documentos es necesario que:\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            <b>Descargues y firmes tu Información de inscripción.</b>\r\n        </li>\r\n        <li>\r\n            Descargues el reglamento general de educación superior.\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <a [href]=\"url+'/seguimiento/reportes/solicitud_inscripcion.php?id='+identity.persona_id\" target=\"_blank\">\r\n                <p style=\"text-align: center; font-size: 40px; color: royalblue;\">\r\n\r\n                    <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                </p>\r\n                <p style=\"font-size: 20px; text-align: center; color: royalblue;\">\r\n                    Información de inscripción\r\n                </p>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <a href=\"assets/layout/inscripcion/terminos.pdf\" target=\"_blank\">\r\n                <p style=\"text-align: center; font-size: 40px; color: royalblue;\">\r\n\r\n                    <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                </p>\r\n                <p style=\"font-size: 20px; text-align: center; color: royalblue;\">\r\n                    Reglamento general de educación superior\r\n                </p>\r\n            </a>\r\n        </div>\r\n        <!--\r\n    <div class=\"col-md-4\">\r\n        <p style=\"text-align: center; font-size: 40px; color: royalblue;\">\r\n            <a href=\"\" download=\"Carta compromiso\" target=\"_blank\">                \r\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></a>\r\n        </p>\r\n        <p style=\"font-size: 20px; text-align: center; color: royalblue;\">\r\n            Acuse de Recibo\r\n        </p>\r\n    </div>\r\n    -->\r\n    </div>\r\n    <div class=\"\">\r\n        <button [routerLink]=\"['/inscripcion/documentos']\" class=\"btn btn-info pull-right\">\r\n        Siguiente\r\n      </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inscripcion/terminos/terminos.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/inscripcion/terminos/terminos.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL3Rlcm1pbm9zL3Rlcm1pbm9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/inscripcion/terminos/terminos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/inscripcion/terminos/terminos.component.ts ***!
  \************************************************************/
/*! exports provided: TerminosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosComponent", function() { return TerminosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_terminos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/terminos.service */ "./src/app/inscripcion/services/terminos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _inscripcion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inscripcion.service */ "./src/app/inscripcion/inscripcion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TerminosComponent = /** @class */ (function () {
    function TerminosComponent(_usuarioService, _catalogoServices, _terminosServices, _inscripcionService, router) {
        this._usuarioService = _usuarioService;
        this._catalogoServices = _catalogoServices;
        this._terminosServices = _terminosServices;
        this._inscripcionService = _inscripcionService;
        this.router = router;
        this.idPlanEstudios = null;
        this.momento = 2;
        this.instruccion = ["", "Selecciona la oferta educativa en la que deseas inscribirte", "Lee con atención el documento y al concluir acepta los términos y condiciones"];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].url;
        this.urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].urlAssets;
        this.title = "Aceptación de términos";
        this._usuarioService.pushBreadcum(this.title, "", 1);
        this._usuarioService.removeBreadcum(2);
    }
    TerminosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);
        this._catalogoServices.consultaCarrera(this.jwt).subscribe(function (response) {
            console.log(response);
            _this.carreras = response['carreras'];
            //this.carreras = response
        }, function (error) {
            console.log(error);
        });
        this.consultaPasos();
    };
    TerminosComponent.prototype.consultaPasos = function () {
        var _this = this;
        this._inscripcionService.consultaAspirante(this.idAspirante).subscribe(function (response) {
            if (response && response['status']) {
                _this.pasoActual = response['aspirante'].paso;
                _this.idCarrera = response['aspirante'].carrera_id;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TerminosComponent.prototype.seleccionaOferta = function (i) {
        var _this = this;
        this.carreraSeleccionada = this.carreras[i];
        this._terminosServices.consultaPlanVigente(this.carreraSeleccionada.carrera_id, this.jwt).subscribe(function (response) {
            console.log(response);
            _this.idPlanEstudios = response['plan'].plan_estudio_id;
        }, function (error) {
            console.log(error);
        });
    };
    TerminosComponent.prototype.confirmaOferta = function () {
        this.momento = 2;
    };
    TerminosComponent.prototype.cambiarOferta = function () {
        this.momento = 1;
        this.carreraSeleccionada = null;
        this.idPlanEstudios = null;
    };
    TerminosComponent.prototype.guardarOferta = function () {
        var _this = this;
        //this._terminosServices.actualizaTerminos(this.carreraSeleccionada.carrera_id,this.jwt).subscribe(
        this._terminosServices.actualizaTerminos(this.idCarrera, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.pasoActual = 2;
            }
            else {
                console.log(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TerminosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminos',
            template: __webpack_require__(/*! ./terminos.component.html */ "./src/app/inscripcion/terminos/terminos.component.html"),
            styles: [__webpack_require__(/*! ./terminos.component.scss */ "./src/app/inscripcion/terminos/terminos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_1__["CatalogoService"],
            _services_terminos_service__WEBPACK_IMPORTED_MODULE_3__["TerminosService"],
            _inscripcion_service__WEBPACK_IMPORTED_MODULE_6__["InscripcionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TerminosComponent);
    return TerminosComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/terminos/terminos.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/inscripcion/terminos/terminos.module.ts ***!
  \*********************************************************/
/*! exports provided: TerminosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosModule", function() { return TerminosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _terminos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terminos-routing.module */ "./src/app/inscripcion/terminos/terminos-routing.module.ts");
/* harmony import */ var _terminos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminos.component */ "./src/app/inscripcion/terminos/terminos.component.ts");
/* harmony import */ var src_app_components_plan_estudio_plan_estudio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/plan-estudio/plan-estudio.module */ "./src/app/components/plan-estudio/plan-estudio.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TerminosModule = /** @class */ (function () {
    function TerminosModule() {
    }
    TerminosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_terminos_component__WEBPACK_IMPORTED_MODULE_3__["TerminosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _terminos_routing_module__WEBPACK_IMPORTED_MODULE_2__["TerminosRoutingModule"],
                src_app_components_plan_estudio_plan_estudio_module__WEBPACK_IMPORTED_MODULE_4__["PlanEstudioModule"]
            ]
        })
    ], TerminosModule);
    return TerminosModule;
}());



/***/ }),

/***/ "./src/app/services/catalogo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
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




var CatalogoService = /** @class */ (function () {
    function CatalogoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CatalogoService.prototype.consultaEstatusMateria = function () {
        return this._httpClient.get(this.url + 'catalogosLE/estatusMateria.php');
    };
    CatalogoService.prototype.consultaArea = function () {
        // var params = '?id_plan_estudio='+idPlan
        // params += '&id_plan_estudio='+idPlan;
        return this._httpClient.get(this.url + 'catalogosCE/consultaArea.php');
    };
    CatalogoService.prototype.consultaGrado = function (idPlan) {
        var params = '?id_plan_estudio=' + idPlan;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    CatalogoService.prototype.consultaCampus = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/campus.php' + params);
    };
    CatalogoService.prototype.consultaInstitucion = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/instituciones.php' + params);
    };
    CatalogoService.prototype.consultaTipoInst = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipo_instituciones.php' + params);
    };
    CatalogoService.prototype.consultaCarrera = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/carreras.php' + params);
    };
    CatalogoService.prototype.consultaCarreraAspirantes = function () {
        return this._httpClient.get(this.url + 'catalogos/carrerasAspirante.php');
    };
    CatalogoService.prototype.consultatipoPeriodo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoPeriodo.php' + params);
    };
    CatalogoService.prototype.consultaNivelEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/nivelestudios.php' + params);
    };
    CatalogoService.prototype.consultaEstatusAspirante = function () {
        return this._httpClient.get(this.url + 'catalogoSG/estatusAspirante.php');
    };
    CatalogoService.prototype.consultaEstatusCiclo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/ciclo_estatus.php' + params);
    };
    CatalogoService.prototype.consultaCiclo = function () {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        // var params = '?jwt='+jwt
        return this._httpClient.get(this.url + 'catalogosCE/ciclo.php');
    };
    CatalogoService.prototype.consultaGrupo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/grupo.php' + params);
    };
    // consultaGruposPrimero(){
    //   return this._httpClient.get(this.url +'controlEscolar/ordenJerarquico/gruposPrimero.php');
    // }
    // // controlEscolar\ordenJerarquico\gruposPrimero.php
    CatalogoService.prototype.consultatipoAsignatura = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoAsignatura.php' + params);
    };
    CatalogoService.prototype.consultaRol = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/planEstudios.php' + params);
    };
    CatalogoService.prototype.consultatipoPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/tipoPlanEstudios.php' + params);
    };
    CatalogoService.prototype.consultaAsignaturaTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/asignaturas.php' + params);
    };
    CatalogoService.prototype.consultaUsuario = function (jwt, limite) {
        var params = '?jwt=' + jwt;
        params += '&limite=' + limite;
        return this._httpClient.get(this.url + 'catalogos/usuario.php' + params);
    };
    CatalogoService.prototype.consultaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/correos.php' + params);
    };
    CatalogoService.prototype.consultaRolTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaListaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/grupoCorreo.php' + params);
    };
    CatalogoService.prototype.consultaPrivilegios = function (jwt, muestraEstatus) {
        var params = '?jwt=' + jwt;
        params += '&muestra_estatus=' + muestraEstatus;
        return this._httpClient.get(this.url + 'catalogos/privilegios.php' + params);
    };
    CatalogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ })

}]);
//# sourceMappingURL=inscripcion-terminos-terminos-module.js.map