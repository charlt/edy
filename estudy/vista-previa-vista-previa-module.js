(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vista-previa-vista-previa-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: VistaPreviaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaPreviaRoutingModule", function() { return VistaPreviaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vista_previa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vista-previa.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _vista_previa_component__WEBPACK_IMPORTED_MODULE_2__["VistaPreviaComponent"]
    }
];
var VistaPreviaRoutingModule = /** @class */ (function () {
    function VistaPreviaRoutingModule() {
    }
    VistaPreviaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VistaPreviaRoutingModule);
    return VistaPreviaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"row alert  alert-actividad\" role=\"alert\" >  \r\n  <div *ngIf=\"actividad\" class=\"col-md-9\">\r\n    <h4 >\r\n       {{actividad.actividad_nombre}}</h4>\r\n    <p>Actividad del tipo {{actividad.tipo_actividad_nombre}}</p> \r\n    <button  *ngIf=\"actividad.tipo_actividad == 2\"  class=\"btn btn-info btn-sm\"  (click)=\"redireccion('preguntas')\">\r\n      <span ><i class=\"fa fa-plus-square\"></i> Mostrar preguntas</span>  \r\n    </button>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <button (click)=\"redireccion('edita')\" class=\"btn btn-info btn-accion\"><i class=\"fa fa-pencil\"></i></button>\r\n    <button  (click)=\"redireccion('vista-previa')\" class=\"btn btn-info btn-accion\" class=\"btn btn-warning btn-accion\" ><i class=\"fa fa-eye\"></i></button>\r\n  </div>\r\n  <div class=\"col-md-12\" style=\"color:black\">\r\n        <div class=\"alert alert-warning text-center\">\r\n          <h1><i class=\"fa fa-eye\"></i></h1>\r\n          <p>Vista previa de la actividad</p>\r\n          <h1 *ngIf=\"fechaActividad && fechaActividad.estatus_actividad_id == 2\">{{fechaActividad.calificacion}}<br>\r\n            <small>Calificación</small>\r\n          </h1>\r\n        </div>\r\n        <app-contenido  *ngIf=\"actividad\" [actividad]=\"actividad\"></app-contenido>\r\n    </div>\r\n    <div class=\"col-12\"  style=\"color:black\"  >\r\n        <app-actividad \r\n          *ngIf=\"finalizaCarga && (actividad.tipo_actividad_id == 2 || actividad.tipo_actividad_id == 4)\" \r\n          (actividadEnviada)=\"refrescaHeader($event)\"\r\n          [actividad]=\"actividad\" [fechaActividad]=\"fechaActividad\" [edicion]=\"edicion\"></app-actividad>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-actividad {\n  text-align: left;\n  padding: 20px;\n  background-color: white; }\n\n.btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3Zpc3RhLXByZXZpYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcY2FyZ2EtYWN0aXZpZGFkZXNcXGFzaWduYXR1cmFcXG1vZHVsb1xcYWN0aXZpZGFkXFx2aXN0YS1wcmV2aWFcXHZpc3RhLXByZXZpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksYUFBVztFQUNYLFVBQVE7RUFDUixrQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9hY3RpdmlkYWQvdmlzdGEtcHJldmlhL3Zpc3RhLXByZXZpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWxlcnQtYWN0aXZpZGFke1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuLWFjY2lvbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: VistaPreviaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaPreviaComponent", function() { return VistaPreviaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/materia/actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
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




var VistaPreviaComponent = /** @class */ (function () {
    function VistaPreviaComponent(_usuarioService, _actividadService, router, route) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this.router = router;
        this.route = route;
        this.edicion = 1;
        this.finalizaCarga = false;
    }
    VistaPreviaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idActividad = this.route.snapshot.parent.params['id'];
        this.jwt = this._usuarioService.getJWT();
        this._actividadService.consulta(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
                _this._actividadService.consultaFechaActividadDummy(_this.idActividad, _this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.fechaActividad = response['fechaActividad'];
                        _this.finalizaCarga = true;
                    }
                });
            }
        });
    };
    VistaPreviaComponent.prototype.refrescaHeader = function (event) {
        this.fechaActividad = event.fechaActividad;
    };
    VistaPreviaComponent.prototype.redireccion = function (url) {
        this.router.navigate([url + '/' + this.idActividad], { relativeTo: this.route.parent.parent });
    };
    VistaPreviaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vista-previa-admin',
            template: __webpack_require__(/*! ./vista-previa.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.html"),
            styles: [__webpack_require__(/*! ./vista-previa.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ActividadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], VistaPreviaComponent);
    return VistaPreviaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: VistaPreviaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaPreviaModule", function() { return VistaPreviaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_materia_actividad_actividad_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/materia/actividad/actividad.module */ "./src/app/materia/actividad/actividad.module.ts");
/* harmony import */ var src_app_materia_actividad_portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module.ts");
/* harmony import */ var src_app_materia_actividad_contenido_contenido_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/materia/actividad/contenido/contenido.module */ "./src/app/materia/actividad/contenido/contenido.module.ts");
/* harmony import */ var _vista_previa_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vista-previa-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa-routing.module.ts");
/* harmony import */ var _vista_previa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vista-previa.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/vista-previa/vista-previa.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VistaPreviaModule = /** @class */ (function () {
    function VistaPreviaModule() {
    }
    VistaPreviaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_vista_previa_component__WEBPACK_IMPORTED_MODULE_7__["VistaPreviaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_2__["LanguageTranslationModule"],
                src_app_materia_actividad_actividad_module__WEBPACK_IMPORTED_MODULE_3__["ActividadModule"],
                src_app_materia_actividad_portafolio_evidencias_portafolio_evidencias_module__WEBPACK_IMPORTED_MODULE_4__["PortafolioEvidenciasModule"],
                src_app_materia_actividad_contenido_contenido_module__WEBPACK_IMPORTED_MODULE_5__["ContenidoModule"],
                _vista_previa_routing_module__WEBPACK_IMPORTED_MODULE_6__["VistaPreviaRoutingModule"]
            ]
        })
    ], VistaPreviaModule);
    return VistaPreviaModule;
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


/***/ })

}]);
//# sourceMappingURL=vista-previa-vista-previa-module.js.map