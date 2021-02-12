(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-main-main-module~docente-actividad-actividad-module~vista-previa-vista-previa-modu~e0e74ef8"],{

/***/ "./src/app/administracion/carga-actividades/services/diagnostica.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/diagnostica.service.ts ***!
  \**********************************************************************************/
/*! exports provided: DiagnosticaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticaService", function() { return DiagnosticaService; });
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




var DiagnosticaService = /** @class */ (function () {
    function DiagnosticaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    DiagnosticaService.prototype.consultaRespuesta = function (idPregunta, jwt, momento, visualiza_flag, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + idPregunta;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&visualiza_flag=' + visualiza_flag;
        params += '&momento=' + momento;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaDiagnostica/consulta.php' + params);
    };
    DiagnosticaService.prototype.guardaRespuesta = function (idPregunta, respuesta, idMateriaFechaActividad, visualiza_flag, jwt, idRespuesta) {
        if (idRespuesta === void 0) { idRespuesta = null; }
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('id_pregunta', idPregunta);
        formData.append('visualiza_flag', visualiza_flag);
        formData.append('respuesta', respuesta);
        formData.append('jwt', jwt);
        if (!idRespuesta) {
            return this._httpClient.post(this.url + 'learning/respuestaDiagnostica/crea.php', formData);
        }
        else {
            formData.append('id_respuesta', idRespuesta);
            return this._httpClient.post(this.url + 'learning/respuestaDiagnostica/edita.php', formData);
        }
    };
    DiagnosticaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DiagnosticaService);
    return DiagnosticaService;
}());



/***/ }),

/***/ "./src/app/directive/block-copy-paste.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directive/block-copy-paste.directive.ts ***!
  \*********************************************************/
/*! exports provided: BlockCopyPasteDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCopyPasteDirective", function() { return BlockCopyPasteDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _learning_examen_examen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../learning/examen/examen.service */ "./src/app/learning/examen/examen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockCopyPasteDirective = /** @class */ (function () {
    function BlockCopyPasteDirective(_examenService) {
        this._examenService = _examenService;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BlockCopyPasteDirective.prototype.blockPaste = function (e) {
        var _this = this;
        if (this.options['apply']) {
            alertify.error('La opción de pegar está deshabilitada').dismissOthers();
            this._examenService.guardarEvent("control_v", this.options['id_mfa']).subscribe(function (response) {
                if (response && response['status'])
                    _this.success.emit(1);
            });
            e.preventDefault();
        }
    };
    BlockCopyPasteDirective.prototype.blockCopy = function (e) {
        var _this = this;
        if (this.options['apply']) {
            alertify.error('La opción de copiar está deshabilitada').dismissOthers();
            this._examenService.guardarEvent("control_c", this.options['id_mfa']).subscribe(function (response) {
                if (response && response['status'])
                    _this.success.emit(1);
            });
            e.preventDefault();
        }
    };
    BlockCopyPasteDirective.prototype.blockCut = function (e) {
        if (this.options['apply']) {
            alertify.error('La opción de cortar está deshabilitada').dismissOthers();
            e.preventDefault();
        }
    };
    BlockCopyPasteDirective.prototype.onRightClick = function (e) {
        var _this = this;
        if (this.options['apply']) {
            alertify.error('No es posible usar el click derecho').dismissOthers();
            this._examenService.guardarEvent("click_derecho", this.options['id_mfa']).subscribe(function (response) {
                if (response && response['status'])
                    _this.success.emit(1);
            });
            e.preventDefault();
        }
    };
    BlockCopyPasteDirective.prototype.onKeyUp = function (e) {
        var _this = this;
        if (this.options['apply']) {
            if (e.keyCode == 44 || e.keyCode == 123) {
                alertify.error('La captura de pantalla está deshabilitada').dismissOthers();
                this._examenService.guardarEvent("imp_pt", this.options['id_mfa']).subscribe(function (response) {
                    if (response && response['status'])
                        _this.success.emit(1);
                });
                e.preventDefault();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appBlockCopyPaste'),
        __metadata("design:type", Object)
    ], BlockCopyPasteDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BlockCopyPasteDirective.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockPaste", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('copy', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCopy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('cut', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "blockCut", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "onRightClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BlockCopyPasteDirective.prototype, "onKeyUp", null);
    BlockCopyPasteDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appBlockCopyPaste]'
        }),
        __metadata("design:paramtypes", [_learning_examen_examen_service__WEBPACK_IMPORTED_MODULE_1__["ExamenService"]])
    ], BlockCopyPasteDirective);
    return BlockCopyPasteDirective;
}());



/***/ }),

/***/ "./src/app/learning/examen/examen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/learning/examen/examen.service.ts ***!
  \***************************************************/
/*! exports provided: ExamenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenService", function() { return ExamenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamenService = /** @class */ (function () {
    function ExamenService(httpClient) {
        this.httpClient = httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    // inicializaExamen(){
    //   let formData: FormData = new FormData(); 
    //   return this.httpClient.post(this.url +'/learning/proctoring/creaAlumno.php',formData);
    // }  
    ExamenService.prototype.guardarEvent = function (tipo, id_materia_fecha_actividad) {
        var formData = new FormData();
        formData.append('tipo', tipo);
        formData.append('materia_fecha_actividad_id', id_materia_fecha_actividad);
        return this.httpClient.post(this.url + '/learning/seguimientoActividad/editaTeclas.php', formData);
    };
    ExamenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExamenService);
    return ExamenService;
}());



/***/ }),

/***/ "./src/app/materia/actividad/actividad.component.html":
/*!************************************************************!*\
  !*** ./src/app/materia/actividad/actividad.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\" *ngIf=\"cargando\">\r\n  <div class=\"col text-center mt-5 p-5\">\r\n    <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n    <h5>{{'TiempoEspera' | translate}}</h5>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" [hidden]=\"cargando\" [appBlockCopyPaste]=\"{apply: aplicar, id_mfa: fechaActividad['materia_fecha_actividad_id']}\">\r\n    <div class=\"col-md-12\" *ngIf=\"actividad.preguntas && actividad.preguntas.length && verPregunta\">        \r\n      <div class=\"row\" *ngFor=\"let pregunta of actividad.preguntas;let i = index\">\r\n        <div class=\"col mt-3\">\r\n          <app-pregunta *ngIf=\"actividad.importancia_actividad_id != 2 || (actividad.importancia_actividad_id == 2 && !sinFecha)\" id =\"{{pregunta.datos_pregunta_id}}\"\r\n          (success)=\"setSemaforo($event, 1)\"\r\n          [pregunta]=\"pregunta\" \r\n          [formatoNumero]=\"actividad.numero_mostrado\"\r\n          [tipoCalificacion]=\"actividad.tipo_calificacion\"\r\n          [edicion]=\"edicion\"\r\n          [fechaActividad]=\"fechaActividad\"\r\n          [indice]=\"i\"\r\n          [numeroPreguntas]=\"preguntasActividad.length\"\r\n          [intentosRestantes]=\"intentosRestantes\"\r\n          [idAlumno]=\"idAlumno\"\r\n          ></app-pregunta>\r\n\r\n          <div [hidden]=\"actividad.importancia_actividad_id == 2 && sinFecha\">\r\n            <ng-container [successCharge]=\"successCharge\" (actividadCargada)=\"cargarActividad($event)\"\r\n              (cargandoArchivo)=\"cambiarBotonEnviar($event)\" \r\n              [data]=\"{ \r\n                pregunta: pregunta,\r\n                idMateriaFechaActividad: fechaActividad.materia_fecha_actividad_id,\r\n                idEstatusActividad: fechaActividad.estatus_actividad_id,\r\n              edicion: edicion, intentosRestantes: intentosRestantes, idAlumno: idAlumno }\" [appModuleLoad]=\"pregunta.module_load\"></ng-container>\r\n          </div>\r\n          <div *ngIf=\"actividad.importancia_actividad_id == 2 && sinFecha\" class=\"alert alert-secondary text-center\">\r\n            Esta actividad aún no está disponible  (Pendiente de asignar Fecha)\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\" *ngIf=\"actividad.importancia_actividad_id == 2\">\r\n        <div class=\"row semaforo\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"circulo\" [ngClass]=\"(semaforo >= 0 && semaforo < 4)? 'green': 'off'\"></div>\r\n            <div class=\"circulo\" [ngClass]=\"(semaforo >= 4 && semaforo < 8)? 'yellow': 'off'\"></div>\r\n            <div class=\"circulo\" [ngClass]=\"(semaforo >= 8)? 'red': 'off'\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" [hidden]=\"cargando\">\r\n  <div class=\"col-md-12 text-center mt-3\">\r\n    <div class=\"alert alert-secondary\" *ngIf=\"!preguntasActividad\">No se encontró información de la pregunta</div>\r\n    <button [disabled]=\"botonTerminar\" *ngIf=\"edicion == 1\" class=\"btn btn-success btn-lg\" (click)=\"finalizarActividad(actividad.tipo_actividad_id)\">\r\n      <i class=\"fa fa-save\"></i> Terminar y enviar\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/actividad.component.scss":
/*!************************************************************!*\
  !*** ./src/app/materia/actividad/actividad.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\niframe {\n  display: block;\n  margin: auto; }\n\n.container-actividad {\n  margin-top: 20px; }\n\n.semaforo {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: 100px;\n  display: flex;\n  width: 100px; }\n\n.circulo {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\n.off {\n  background: radial-gradient(rgba(0, 0, 0, 0.5) 5%, #676d73 25%, #818182 70%); }\n\n.green {\n  background: radial-gradient(rgba(149, 199, 149, 0.9) 5%, #7cc57c 25%, #5cb85c 70%); }\n\n.red {\n  background: radial-gradient(rgba(224, 134, 131, 0.9) 5%, #de6562 25%, #d9534f 70%); }\n\n.yellow {\n  background: radial-gradient(rgba(226, 193, 145, 0.9) 5%, #efb15a 25%, #f0ad4e 70%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhL2FjdGl2aWRhZC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxhY3RpdmlkYWRcXGFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFHRDtFQUNJLFdBQVU7RUFDViw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFlO0VBR2Ysb0RBQWdELEVBQ25EOztBQUVEO0VBQ0ksMEJBMUJrQjtFQTJCbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjs7QUFFRDtFQUNJLGVBbkNrQixFQW9DckI7O0FBQ0Q7RUFDSSwwQkF0Q2tCO0VBdUNsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUNuREQ7RUFDSSxlQUFhO0VBQ2IsYUFBWSxFQUNmOztBQUNEO0VBQ0ksaUJBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxTQUFRO0VBQ1IsY0FBYTtFQUNiLGNBQWE7RUFDYixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUdaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLDZFQUE0RSxFQUMvRTs7QUFDRDtFQUNJLG1GQUFrRixFQUNyRjs7QUFDRDtFQUNJLG1GQUFrRixFQUNyRjs7QUFDRDtFQUNJLG1GQUFrRixFQUNyRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL2FjdGl2aWRhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbmlmcmFtZXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRhaW5lci1hY3RpdmlkYWR7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5zZW1hZm9yb3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwOyAgIFxyXG4gICAgaGVpZ2h0OiAxMDBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmNpcmN1bG8ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5vZmZ7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpIDUlLCAjNjc2ZDczIDI1JSwgIzgxODE4MiA3MCUpOyBcclxufVxyXG4uZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgxNDksIDE5OSwgMTQ5LCAwLjkpIDUlLCAjN2NjNTdjIDI1JSwgIzVjYjg1YyA3MCUpOyAgICBcclxufVxyXG4ucmVke1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjI0LCAxMzQsIDEzMSwgMC45KSA1JSwgI2RlNjU2MiAyNSUsICNkOTUzNGYgNzAlKTtcclxufVxyXG4ueWVsbG93e1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjI2LCAxOTMsIDE0NSwgMC45KSA1JSwgI2VmYjE1YSAyNSUsICNmMGFkNGUgNzAlKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/actividad.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/materia/actividad/actividad.component.ts ***!
  \**********************************************************/
/*! exports provided: ActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadComponent", function() { return ActividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var _models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/learning/trActividad */ "./src/app/models/learning/trActividad.ts");
/* harmony import */ var _models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/learning/trMateriaFechaActividad */ "./src/app/models/learning/trMateriaFechaActividad.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActividadComponent = /** @class */ (function () {
    function ActividadComponent(_usuarioService, _actividadService, _materiaService) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this._materiaService = _materiaService;
        this.successCharge = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cargando = true;
        this.fechaActual = new Date();
        this.aplicar = false;
        this.sinFecha = false;
        this.fechaActividad = new _models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_4__["TrMateriaFechaActividad"]();
        this.actividad = new _models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__["TrActividad"]();
        this.actividadEnviada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActividadComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // this.edicion = 1; 
        if (this.actividad.fecha_inicio == 'Invalid Date' || this.actividad.fecha_fin == 'Invalid Date') {
            this.sinFecha = true;
        }
        this.jwt = this._usuarioService.getJWT();
        this.idRol = this._usuarioService.getRol().rol_id;
        if (this.actividad['importancia_actividad_id'] == 2 && this.fechaActividad['materia_fecha_actividad_id']) {
            this.aplicar = true;
            this._actividadService.creaSeguimientoActividad(this.fechaActividad['materia_fecha_actividad_id'])
                .subscribe(function (response) {
                if (response && response['status']) {
                    _this.setSemaforo(response['total']);
                    _this.consultaPreguntas();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.consultaPreguntas();
        }
        //AQUI VALIDAR SI ES DEL TIPO EJERCICIO O EVALUACIÓN PARA NO HACER CONSULTAS INNECESARIAS
    };
    ActividadComponent.prototype.consultaPreguntas = function () {
        var _this = this;
        this._actividadService.consultaPreguntasRespuestas(this.actividad.actividad_id, this.fechaActividad.materia_fecha_actividad_id, this.intentosRestantes, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad.preguntas = response['preguntas'];
                // console.log(this.actividad);
                var fecha_actual = new Date();
                if (fecha_actual < _this.actividad.fecha_inicio) {
                    _this.verPregunta = false;
                    _this.cargando = false;
                }
                else {
                    _this.verPregunta = true;
                }
                _this.preguntasActividad = _this.actividad.preguntas.slice();
                _this.preguntasActividad.forEach(function (pregunta) {
                    pregunta.cargada = false;
                });
                _this.actividad.preguntas.forEach(function (pregunta) {
                    pregunta.valor = "";
                    pregunta.calificacion = null;
                    pregunta['importancia_actividad_id'] = this.actividad['importancia_actividad_id'];
                    pregunta.module_load = this.setModulo(pregunta.tipo_pregunta_id);
                }.bind(_this));
                if (_this.edicion == 0) {
                    _this.obtenerRespuestas();
                }
            }
            else {
                _this.cargando = false;
                _this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'actividad' });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadComponent.prototype.setModulo = function (tipo_pregunta) {
        var modulo;
        var t = tipo_pregunta;
        if (t == 1)
            modulo = 'abiertaModule';
        else if (t == 2)
            modulo = 'opcionMultipleModule';
        else if (t == 3)
            modulo = 'relacionColumnasModule';
        else if (t == 4)
            modulo = 'zonaImagenesModule';
        else if (t == 5)
            modulo = 'dragDropModule';
        else if (t == 6)
            modulo = 'estrategicaModule';
        // else if(t == 7) modulo = '';
        else if (t == 8 || t == 9)
            modulo = 'vinculacionIdeasModule';
        else if (t == 10)
            modulo = 'foroModule';
        else if (t == 11)
            modulo = 'cargaArchivosModule';
        return modulo;
    };
    ActividadComponent.prototype.obtenerRespuestas = function () {
        var _this = this;
        this._actividadService.consultaRespuestas(this.fechaActividad.materia_fecha_actividad_id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.respuestas = response['respuestas'];
                _this.respuestas.forEach(function (respuesta) {
                    this.actividad.preguntas.forEach(function (pregunta) {
                        if (pregunta.datos_pregunta_id == respuesta.datos_pregunta_id) {
                            pregunta.valor = respuesta.valor;
                            pregunta.calificacion = parseFloat(respuesta.calificacion);
                        }
                    });
                }.bind(_this));
            }
        }, function (error) {
            console.log(error);
        });
    };
    ActividadComponent.prototype.finalizarActividad = function () {
        alertify.confirm('Finalizar actividad', '¿Deseas terminar y enviar la actividad?', function () {
            var _this = this;
            this._actividadService.finalizaFechaActividad(this.fechaActividad.materia_fecha_actividad_id, this.actividad.tipo_calificacion, 0).subscribe(function (response) {
                if (response && response['status']) {
                    console.log(response);
                    _this.edicion = 0;
                    _this.fechaActividad = response['materiaFechaActividad'];
                    _this.obtenerRespuestas();
                    _this.actividad.preguntas.forEach(function (pregunta) {
                        pregunta.incompleto = false;
                    });
                    window.scrollTo(0, 0);
                    _this.actividadEnviada.emit({
                        'status': response['status'],
                        'fechaActividad': response['materiaFechaActividad']
                    });
                    _this._actividadService.actividadCompletada.emit();
                }
                else {
                    alertify.error('falta completar actividades');
                    if (response['pendientes']) {
                        var datosPregunta_1 = response['pendientes'];
                        _this.actividad.preguntas.forEach(function (pregunta) {
                            pregunta.incompleto = false;
                            datosPregunta_1.forEach(function (idDatosPregunta) {
                                if (pregunta.datos_pregunta_id == idDatosPregunta)
                                    pregunta.incompleto = true;
                            });
                        });
                        // console.log(datosPregunta);
                        var id_1 = datosPregunta_1[0].toString();
                        document.getElementById(id_1).scrollIntoView();
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Acción cancelada');
        });
    };
    ActividadComponent.prototype.cargarActividad = function (id_pregunta) {
        this.preguntasActividad.forEach(function (pregunta) {
            if (pregunta.datos_pregunta_id == id_pregunta) {
                pregunta.cargada = true;
            }
        });
        this.cargando = !this.validaCarga();
        if (!this.cargando) {
            this.successCharge.emit(true);
            this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'actividad' });
        }
    };
    ActividadComponent.prototype.validaCarga = function () {
        var valor = true;
        this.preguntasActividad.forEach(function (pregunta) {
            if (pregunta.cargada == false) {
                valor = false;
            }
        });
        return valor;
    };
    ActividadComponent.prototype.setSemaforo = function (total, id) {
        if (id === void 0) { id = 0; }
        if (id == 0) {
            this.semaforo = parseInt(total);
        }
        else if (id == 1) {
            this.semaforo += 1;
        }
    };
    ActividadComponent.prototype.cambiarBotonEnviar = function (event) {
        this.botonTerminar = event;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActividadComponent.prototype, "edicion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_learning_trMateriaFechaActividad__WEBPACK_IMPORTED_MODULE_4__["TrMateriaFechaActividad"])
    ], ActividadComponent.prototype, "fechaActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__["TrActividad"])
    ], ActividadComponent.prototype, "actividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActividadComponent.prototype, "actividadEnviada", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActividadComponent.prototype, "intentosRestantes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActividadComponent.prototype, "idAlumno", void 0);
    ActividadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actividad',
            template: __webpack_require__(/*! ./actividad.component.html */ "./src/app/materia/actividad/actividad.component.html"),
            styles: [__webpack_require__(/*! ./actividad.component.scss */ "./src/app/materia/actividad/actividad.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ActividadService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_5__["MateriaService"]])
    ], ActividadComponent);
    return ActividadComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/actividad.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/materia/actividad/actividad.module.ts ***!
  \*******************************************************/
/*! exports provided: createTranslateLoader, ActividadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadModule", function() { return ActividadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _actividad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actividad.component */ "./src/app/materia/actividad/actividad.component.ts");
/* harmony import */ var _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preguntas/preguntas.component */ "./src/app/materia/actividad/preguntas/preguntas.component.ts");
/* harmony import */ var _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _preguntas_diagnostica_diagnostica_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preguntas/diagnostica/diagnostica.component */ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.ts");
/* harmony import */ var src_app_directive_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directive/block-copy-paste.directive */ "./src/app/directive/block-copy-paste.directive.ts");
/* harmony import */ var src_app_module_load_module_load_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/module-load/module-load.directive */ "./src/app/module-load/module-load.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/modulo/', '.json');
}
var ActividadModule = /** @class */ (function () {
    function ActividadModule() {
    }
    ActividadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _actividad_component__WEBPACK_IMPORTED_MODULE_3__["ActividadComponent"],
                // AbiertaComponent, 
                // OpcionMultipleComponent, 
                // RelacionColumnasComponent, 
                _preguntas_preguntas_component__WEBPACK_IMPORTED_MODULE_4__["PreguntasComponent"],
                // CargaArchivosComponent, 
                // DragDropComponent,
                // ZonaImagenesComponent,
                _preguntas_diagnostica_diagnostica_component__WEBPACK_IMPORTED_MODULE_8__["DiagnosticaComponent"],
                // VinculacionIdeasComponent,
                // TablaComponent,
                // DiagramaComponent,
                // EstrategicaComponent,
                // ForoComponent,
                src_app_directive_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_9__["BlockCopyPasteDirective"],
                src_app_module_load_module_load_directive__WEBPACK_IMPORTED_MODULE_10__["ModuleLoadDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_7__["LanguageTranslationModule"],
                // CKEditorModule,
                // DragDropModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__["ArchivoModule"],
            ],
            exports: [
                _actividad_component__WEBPACK_IMPORTED_MODULE_3__["ActividadComponent"],
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"] },
            ]
        })
    ], ActividadModule);
    return ActividadModule;
}());



/***/ }),

/***/ "./src/app/materia/actividad/contenido/contenido.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/contenido/contenido.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row archivo\">\r\n    <div class=\"col-md-12\" *ngFor=\"let _contenidoActividad of contenidoActividad;\">\r\n        <app-archivo *ngIf=\"_contenidoActividad.url_contenido && _contenidoActividad.nombre && _contenidoActividad.visto == 1\" [urlBase]=\"_contenidoActividad.url_contenido\" [nombre]=\"_contenidoActividad.nombre\" [tipoVista] = '1'></app-archivo>          \r\n        <app-archivo *ngIf=\"_contenidoActividad.url_contenido && !_contenidoActividad.nombre && _contenidoActividad.visto == 1\" [urlBase]=\"_contenidoActividad.url_contenido\" [tipoVista]='1'></app-archivo>          \r\n    </div>\r\n    <div class=\"col-md-12\" [innerHTML]=\"actividad.instruccion_html\" >\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/contenido/contenido.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/contenido/contenido.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL2NvbnRlbmlkby9jb250ZW5pZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/contenido/contenido.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/materia/actividad/contenido/contenido.component.ts ***!
  \********************************************************************/
/*! exports provided: ContenidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenidoComponent", function() { return ContenidoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/learning/trActividad */ "./src/app/models/learning/trActividad.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContenidoComponent = /** @class */ (function () {
    function ContenidoComponent(_usuarioService, _actividadService, _sanitizer) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this._sanitizer = _sanitizer;
        this.actividad = new src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__["TrActividad"]();
    }
    ContenidoComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.actividad.instruccion_html = this.htmlProperty(this.actividad.instruccion);
        this._actividadService.consultaContenidos(this.actividad.actividad_id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.contenidoActividad = response['contenido'];
            }
            else {
                _this.contenidoActividad = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ContenidoComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_3__["TrActividad"])
    ], ContenidoComponent.prototype, "actividad", void 0);
    ContenidoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contenido',
            template: __webpack_require__(/*! ./contenido.component.html */ "./src/app/materia/actividad/contenido/contenido.component.html"),
            styles: [__webpack_require__(/*! ./contenido.component.scss */ "./src/app/materia/actividad/contenido/contenido.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_2__["ActividadService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ContenidoComponent);
    return ContenidoComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/contenido/contenido.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/actividad/contenido/contenido.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContenidoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenidoModule", function() { return ContenidoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contenido_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contenido.component */ "./src/app/materia/actividad/contenido/contenido.component.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContenidoModule = /** @class */ (function () {
    function ContenidoModule() {
    }
    ContenidoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_contenido_component__WEBPACK_IMPORTED_MODULE_2__["ContenidoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_3__["ArchivoModule"]
            ],
            exports: [
                _contenido_component__WEBPACK_IMPORTED_MODULE_2__["ContenidoComponent"]
            ]
        })
    ], ContenidoModule);
    return ContenidoModule;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div class=\"col-md-12\" *ngIf=\" momento == '1'\">    \r\n    <ckeditor \r\n    *ngIf=\"edicion\"\r\n    [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"   \r\n    [(ngModel)]=\"model\"\r\n    (blur)=\"guardarBorrador($event)\"\r\n    (ready)=\"editorCargado($event)\"\r\n    ></ckeditor>\r\n    <div *ngIf=\"!edicion\" class=\"alert alert-secondary mt-3\">La pregunta  ha sido contestada.</div>\r\n</div>\r\n<div class=\"col-md-12\" *ngIf=\"momento == '2'\">\r\n    <div *ngIf=\"!edicion\" class=\"alert alert-secondary mt-3\">La pregunta  ha sido contestada.</div>\r\n    <div *ngIf=\"edicion && momentoCompletado < 1\" class=\"alert alert-secondary mt-3\">Aún no puedes responder esta pregunta.</div>\r\n    <ckeditor \r\n          *ngIf=\"otrasRespuestas && edicion\"\r\n                [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"   \r\n                [(ngModel)]=\"model\"\r\n                (blur)=\"guardarBorrador($event)\" \r\n                (ready)=\"editorCargado($event)\"></ckeditor>\r\n</div>\r\n<div *ngIf=\"momento == '3'\" class=\"col-md-12\">\r\n    <div *ngIf=\"edicion && momentoCompletado < 2\" class=\"alert alert-secondary mt-3\">Aún no puedes responder esta pregunta.</div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <table id=\"tablaDia_{{idPregunta}}\" class=\"table table-bordered\">\r\n                <tbody>\r\n                  <tr *ngFor=\"let _respuesta of generateRowIndexes(size);let i = index\">\r\n                    <td >\r\n                        <span *ngIf=\"respuestasM1[i]\">\r\n                            <p ><b [innerHTML]=\"respuestasM1[i].pregunta\"></b></p>\r\n                          <p [innerHTML]=\"respuestasM1[i].respuesta\"></p></span>\r\n                    </td>\r\n                    <td >\r\n                        <span *ngIf=\"respuestasM2[i]\">\r\n                            <p ><b [innerHTML]=\"respuestasM2[i].pregunta\"></b></p>\r\n                          <p [innerHTML]=\"respuestasM2[i].respuesta\"></p></span>\r\n                    </td>\r\n                    <td *ngIf=\"i == 0\" [attr.rowspan]=\"size\">\r\n                        <p><b>Conclusión</b></p>\r\n                        <ckeditor \r\n                        *ngIf=\"edicion\"\r\n                        [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"   \r\n                        [(ngModel)]=\"model\"\r\n                        (blur)=\"guardarBorrador($event)\" \r\n                        (ready)=\"editorCargado($event)\"></ckeditor>\r\n                        <p *ngIf=\"!edicion && respuesta\" [innerHtml]=\"model\"></p>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n            </table>\r\n            <img class=\"pull-right\" style=\"display: none\" *ngIf=\"imgURL\" [src]=\"imgURL\" width=\"50%\" id=\"urlDia_{{idPregunta}}\">\r\n            <button *ngIf=\"edicion == 0\" class=\"btn btn-primary pull-right\" (click)=\"descargaImagen()\"><i class=\"fa fa-file-image-o \"></i> Descargar</button>\r\n        </div>          \r\n      </div>\r\n</div>\r\n -->\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL3ByZWd1bnRhcy9kaWFnbm9zdGljYS9kaWFnbm9zdGljYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DiagnosticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticaComponent", function() { return DiagnosticaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var src_app_models_documentEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/documentEditor */ "./src/app/models/documentEditor.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_diagnostica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/diagnostica.service */ "./src/app/administracion/carga-actividades/services/diagnostica.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DiagnosticaComponent = /** @class */ (function () {
    function DiagnosticaComponent(_usuarioService, _materiaService, _diagnosticaService) {
        this._usuarioService = _usuarioService;
        this._materiaService = _materiaService;
        this._diagnosticaService = _diagnosticaService;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].urlAssets;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idRespuesta = null;
        this.simpleEditor = src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__["simpleEditor"];
        this.documentEditor = src_app_models_documentEditor__WEBPACK_IMPORTED_MODULE_2__["documentEditor"];
        this.respuestasM1 = [];
        this.respuestasM2 = [];
    }
    DiagnosticaComponent.prototype.ngOnInit = function () {
        this.model = {
            editorData: '<p>Hello, world!</p>'
        };
        this.rol = this._usuarioService.getRol();
        if (this.rol.url_logo_institucion) {
            this.imgURL = this.url + this.rol.url_logo_institucion;
        }
        else {
            this.imgURL = this.url + '/assets/institucion/0/imagen_perfil/default.png';
        }
        this.momento = this.pregunta.contenido_pregunta.momento;
        this.visualizaFlag = this._materiaService.getSelectedMateria().materia_id;
        this.idPregunta = this.pregunta.pregunta_id;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.getDatos();
    };
    DiagnosticaComponent.prototype.getDatos = function () {
        var _this = this;
        this._diagnosticaService.consultaRespuesta(this.idPregunta, this.jwt, this.momento, this.visualizaFlag, this.idMateriaFechaActividad).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.respuesta = response['diagnostica'];
                _this.idRespuesta = _this.respuesta.respuesta_id;
                _this.model = _this.respuesta.respuesta;
            }
            if (response['momentoCompletado']) {
                _this.momentoCompletado = response['momentoCompletado'];
            }
            if (response['otrasRespuestas'] && response['otrasRespuestas'].length) {
                _this.otrasRespuestas = response['otrasRespuestas'];
            }
            else {
                _this.otrasRespuestas = null;
            }
            if (_this.momentoCompletado >= 2) {
                _this.otrasRespuestas.forEach(function (respuesta) {
                    if (respuesta.momento == '1')
                        this.respuestasM1.push(respuesta);
                    if (respuesta.momento == '2')
                        this.respuestasM2.push(respuesta);
                }.bind(_this));
                if (_this.respuestasM1.length > _this.respuestasM2.length) {
                    _this.size = _this.respuestasM1.length;
                }
                else {
                    _this.size = _this.respuestasM2.length;
                }
            }
            if ((!_this.edicion) || (_this.edicion && _this.momentoCompletado < 1) ||
                (_this.edicion && _this.momentoCompletado < 2)) {
                _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DiagnosticaComponent.prototype.generateRowIndexes = function (count) {
        var indexes = [];
        for (var i = 0; i < count; i++) {
            indexes.push(i);
        }
        return indexes;
    };
    DiagnosticaComponent.prototype.guardarBorrador = function (event) {
        var _this = this;
        var dbRespuesta, bandera = 1;
        if (this.respuesta) {
            dbRespuesta = this.respuesta.respuesta;
            if (this.model === dbRespuesta) {
                bandera = 0;
            }
        }
        if (this.model.length > 0 && bandera == 1) {
            this._diagnosticaService.guardaRespuesta(this.idPregunta, this.model, this.idMateriaFechaActividad, this.visualizaFlag, this.jwt, this.idRespuesta).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                    if (response['idRespuesta'])
                        _this.idRespuesta = response['idRespuesta'];
                }
                else {
                    alertify.error('Error al guardar').dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    DiagnosticaComponent.prototype.descargaImagen = function () {
        window.scrollTo(0, 0);
        var data = document.getElementById('tablaDia_' + this.idPregunta);
        var idImage = 'urlDia_' + this.idPregunta;
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(data, {
            allowTaint: true,
            "logging": true,
            useCORS: true,
            onclone: function (clonedDoc) {
                clonedDoc.getElementById(idImage).style.display = 'block';
            }
        }).then(function (canvas) {
            var link = document.createElement("a");
            link.download = "mapa_cognitivo.png";
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
        });
    };
    DiagnosticaComponent.prototype.editorCargado = function (evt) {
        var _this = this;
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiagnosticaComponent.prototype, "pregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiagnosticaComponent.prototype, "idMateriaFechaActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DiagnosticaComponent.prototype, "edicion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DiagnosticaComponent.prototype, "actividadCargada", void 0);
    DiagnosticaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'respuesta-diagnostica',
            template: __webpack_require__(/*! ./diagnostica.component.html */ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.html"),
            styles: [__webpack_require__(/*! ./diagnostica.component.scss */ "./src/app/materia/actividad/preguntas/diagnostica/diagnostica.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_7__["MateriaService"],
            src_app_administracion_carga_actividades_services_diagnostica_service__WEBPACK_IMPORTED_MODULE_4__["DiagnosticaService"]])
    ], DiagnosticaComponent);
    return DiagnosticaComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/preguntas.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/preguntas.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-3 alert\" [class.alert-danger]=\"pregunta.incompleto\" *ngIf=\"pregunta.pregunta_id\">\r\n    <div class=\"col-md-10 preg\">\r\n        <h5 class=\"titulo-ejercicio\">\r\n            <b>Pregunta {{formato(indice+1)}}  </b>\r\n            <small *ngIf=\"tipoCalificacion != '2'\">({{pregunta.ponderacion}} %)</small>\r\n        </h5>\r\n        <p [innerHTML]=\"pregunta.pregunta_html\" ></p>\r\n        <div *ngIf=\"(pregunta.retroalimentacion && pregunta.retroalimentacion != '0') && edicion == 0 && intentosRestantes == 0\" class=\"alert alert-primary row\" role=\"alert\">\r\n            <div class=\"col-1\"><i class=\"fa fa-lightbulb-o fa-3x\" aria-hidden=\"true\"></i> </div>\r\n            <p class=\"col-11\">{{pregunta.retroalimentacion}}</p>\r\n        </div>\r\n        <app-archivo *ngIf=\"pregunta.contenido_pregunta && pregunta.contenido_pregunta.contenido\" [urlBase]=\"pregunta.contenido_pregunta.contenido\"></app-archivo>\r\n    </div>\r\n    <div *ngIf=\"automatica == 0  && (fechaActividad.estatus_actividad_id == 3 || fechaActividad.estatus_actividad_id == 1 || fechaActividad.estatus_actividad_id == 5) && pregunta.ponderacion != 0 && rol.rol_id == 3 && tipoCalificacion != 2 \" class=\"col-md-2 text-center p-3\" >\r\n        <select class=\"form-control\" [(ngModel)]=\"pregunta.valor\" (change)=\"guardarCalificacion($event)\">\r\n            <option value=\"\" *ngIf=\"!pregunta.valor\">Selecciona</option>\r\n            <option *ngFor=\"let metrica of metricaCalif\" value=\"{{metrica.valor}}\">{{metrica.texto}}</option>\r\n        </select>\r\n    </div>\r\n    <div *ngIf=\"edicion == 0 && (fechaActividad.estatus_actividad_id == 2 || fechaActividad.estatus_actividad_id == 4) && pregunta.calificacion\" \r\n    class=\"col-md-2  text-center p-4\">\r\n        <span class=\"badge cuadro-ponderacion p-2\">{{'_calificacion'|translate}}: {{pregunta.calificacion}}</span>\r\n    </div>\r\n    <!-- <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3\"> -->\r\n\r\n        <!-- <respuesta-abierta          *ngIf=\"pregunta.tipo_pregunta_id=='1'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" (actividadCargada)=\"cargaActividad($event)\"></respuesta-abierta>\r\n        <respuesta-opcion-multiple  *ngIf=\"pregunta.tipo_pregunta_id=='2'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [intentosRestantes]=\"intentosRestantes\" (actividadCargada)=\"cargaActividad($event)\"></respuesta-opcion-multiple>\r\n        <relacion-columnas          *ngIf=\"pregunta.tipo_pregunta_id=='3'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [intentosRestantes]=\"intentosRestantes\" (actividadCargada)=\"cargaActividad($event)\"></relacion-columnas>\r\n        <respuesta-zona-imagenes    *ngIf=\"pregunta.tipo_pregunta_id=='4'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [intentosRestantes]=\"intentosRestantes\" (actividadCargada)=\"cargaActividad($event)\"></respuesta-zona-imagenes>\r\n        <drag-drop                  *ngIf=\"pregunta.tipo_pregunta_id=='5'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [intentosRestantes]=\"intentosRestantes\" (actividadCargada)=\"cargaActividad($event)\"></drag-drop>\r\n        <respuesta-estrategica      *ngIf=\"pregunta.tipo_pregunta_id=='6'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" (actividadCargada)=\"cargaActividad($event)\"></respuesta-estrategica>\r\n        <respuesta-diagnostica      *ngIf=\"pregunta.tipo_pregunta_id=='7'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" (actividadCargada)=\"cargaActividad($event)\"></respuesta-diagnostica>\r\n        <vinculacion-ideas          *ngIf=\"pregunta.tipo_pregunta_id=='8'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [tipo]=\"1\" (actividadCargada)=\"cargaActividad($event)\"></vinculacion-ideas>\r\n        <vinculacion-ideas          *ngIf=\"pregunta.tipo_pregunta_id=='9'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"    [edicion]=\"edicion\" [tipo]=\"2\" (actividadCargada)=\"cargaActividad($event)\"></vinculacion-ideas>\r\n        <app-foro                   *ngIf=\"pregunta.tipo_pregunta_id=='10'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"   [idAlumno]=\"idAlumno\" [rol]=\"rol\" (actividadCargada)=\"cargaActividad($event)\"></app-foro>\r\n        <carga-archivos             *ngIf=\"pregunta.tipo_pregunta_id=='11'\" [pregunta]=\"pregunta\" [idMateriaFechaActividad]=\"idMateriaFechaActividad\"   [edicion]=\"edicion\" (actividadCargada)=\"cargaActividad($event)\"></carga-archivos> -->\r\n    <!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/preguntas.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/preguntas.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.titulo-ejercicio {\n  border-left: 10px solid #1e5799;\n  margin: 10px 0px;\n  padding-left: 10px; }\n\n.titulo-ejercicio b {\n    color: #1e5799; }\n\n.titulo-ejercicio small {\n    color: #1e5799; }\n\n.cuadro-ponderacion {\n  background-color: #1e5799;\n  color: white; }\n\n.preg {\n  margin-left: -15px; }\n\n.epdf {\n  width: 400px;\n  height: 150px; }\n\n.star-rating.star-5 input,\n.star-rating.star-5 i {\n  width: 20%; }\n\n.star-rating.star-5 i ~ i {\n  width: 40%; }\n\n.star-rating.star-5 i ~ i ~ i {\n  width: 60%; }\n\n.star-rating.star-5 i ~ i ~ i ~ i {\n  width: 80%; }\n\n.star-rating.star-5 i ~ i ~ i ~ i ~ i {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXG1hdGVyaWFcXGFjdGl2aWRhZFxccHJlZ3VudGFzXFxwcmVndW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDbkREO0VBQ0ksZ0NERGtCO0VDRWxCLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFRckI7O0FBWEQ7SUFNUSxlRE5jLEVDT2pCOztBQVBMO0lBU1EsZURUYyxFQ1VqQjs7QUFFTDtFQUNJLDBCRGJrQjtFQ2NsQixhQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFHSSxhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFHRDs7RUFDdUIsV0FBVSxFQUFHOztBQUNwQztFQUEyQixXQUFVLEVBQUc7O0FBQ3hDO0VBQStCLFdBQVUsRUFBRzs7QUFDNUM7RUFBbUMsV0FBVSxFQUFHOztBQUNoRDtFQUFzQyxZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2FjdGl2aWRhZC9wcmVndW50YXMvcHJlZ3VudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kc2Nob29sLWNvbG9yOiAjMWU1Nzk5O1xyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSAgIHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7IFxyXG59XHJcblxyXG4uYWxlcnQtZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcblxyXG4uaWNvbi1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcbi5idG4tZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC14bCAubW9kYWwtZGlhbG9nIHsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mb25kbyB7IFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7IFxyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLnRpdHVsby1lamVyY2ljaW97XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkc2Nob29sLWNvbG9yO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDsgXHJcblxyXG4gICAgYntcclxuICAgICAgICBjb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIH1cclxuICAgIHNtYWxse1xyXG4gICAgICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcbi5jdWFkcm8tcG9uZGVyYWNpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5wcmVne1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uZXBkZntcclxuICAgIC8vYm9yZGVyOiAycHggc29saWQgcmdiKDEzOCwgMjA3LCAyMTkpOyBcclxuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2IoMTM4LCAyMDcsIDIxOSk7IFxyXG4gICAgd2lkdGg6IDQwMHB4OyBcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG4uc3Rhci1yYXRpbmcuc3Rhci01IGlucHV0LFxyXG4uc3Rhci1yYXRpbmcuc3Rhci01IGkge3dpZHRoOiAyMCU7fVxyXG4uc3Rhci1yYXRpbmcuc3Rhci01IGkgfiBpIHt3aWR0aDogNDAlO31cclxuLnN0YXItcmF0aW5nLnN0YXItNSBpIH4gaSB+IGkge3dpZHRoOiA2MCU7fVxyXG4uc3Rhci1yYXRpbmcuc3Rhci01IGkgfiBpIH4gaSB+IGkge3dpZHRoOiA4MCU7fVxyXG4uc3Rhci1yYXRpbmcuc3Rhci01IGkgfiBpIH4gaSB+IGkgfmkge3dpZHRoOiAxMDAlO31cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/preguntas.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/preguntas.component.ts ***!
  \********************************************************************/
/*! exports provided: PreguntasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasComponent", function() { return PreguntasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/metricaCalificacion */ "./src/app/services/metricaCalificacion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreguntasComponent = /** @class */ (function () {
    function PreguntasComponent(_sanitizer, _usuarioService, _actividadService) {
        this._sanitizer = _sanitizer;
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this.cargaCompletada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PreguntasComponent.prototype.ngOnChanges = function () {
        this.jwt = this._usuarioService.getJWT();
        this.rol = this._usuarioService.getRol();
        this.metricaCalif = _services_metricaCalificacion__WEBPACK_IMPORTED_MODULE_4__["metrica"];
        this.idMateriaFechaActividad = this.fechaActividad.materia_fecha_actividad_id;
        if (this.tipoCalificacion == "3")
            this.pregunta.ponderacion = (1 / this.numeroPreguntas * 100).toFixed(2);
        this.pregunta.pregunta_html = this.htmlProperty(this.pregunta.pregunta ? this.pregunta.pregunta : null);
        if (this.pregunta.reactivos == '1') {
            this.automatica = 1;
        }
        else {
            this.automatica = 0;
        }
    };
    PreguntasComponent.prototype.formato = function (index) {
        if (this.formatoNumero == '2')
            return String.fromCharCode(96 + index);
        else
            return index;
    };
    PreguntasComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    PreguntasComponent.prototype.guardarCalificacion = function (event) {
        var _this = this;
        var valor = event.target.value;
        this._actividadService.calificaRespuesta(this.fechaActividad.materia_fecha_actividad_id, this.pregunta.datos_pregunta_id, valor, this.tipoCalificacion, this.numeroPreguntas, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                _this._actividadService.actividadCalificada.emit();
                _this.pregunta.incompleto = false;
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    PreguntasComponent.prototype.guardarSeleccion = function () {
        alertify.confirm('¿Deseas guardar tus respuestas?', function () {
            alertify.success('Respuestas guardadas').dismissOthers();
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "pregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "indice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "formatoNumero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "fechaActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "edicion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "intentosRestantes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "tipoCalificacion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "numeroPreguntas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "idAlumno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PreguntasComponent.prototype, "cargaCompletada", void 0);
    PreguntasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pregunta',
            template: __webpack_require__(/*! ./preguntas.component.html */ "./src/app/materia/actividad/preguntas/preguntas.component.html"),
            styles: [__webpack_require__(/*! ./preguntas.component.scss */ "./src/app/materia/actividad/preguntas/preguntas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_3__["ActividadService"]])
    ], PreguntasComponent);
    return PreguntasComponent;
}());



/***/ }),

/***/ "./src/app/models/documentEditor.ts":
/*!******************************************!*\
  !*** ./src/app/models/documentEditor.ts ***!
  \******************************************/
/*! exports provided: documentEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentEditor", function() { return documentEditor; });
var documentEditor = {
    // Define the toolbar: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_toolbar
    // The full preset from CDN which we used as a base provides more features than we need.
    // Also by default it comes with a 3-line toolbar. Here we put all buttons in a single row.
    toolbar: [
        { name: 'document', items: ['Print'] },
        { name: 'clipboard', items: ['Undo', 'Redo'] },
        { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'align', items: ['AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'] },
        { name: 'links', items: ['Link', 'Unlink'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
        { name: 'insert', items: ['Image', 'Table'] },
        { name: 'tools', items: ['Maximize'] },
        { name: 'editing', items: ['Scayt'] }
    ],
    // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
    // One HTTP request less will result in a faster startup time.
    // For more information check http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config-cfg-customConfig
    customConfig: '',
    // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
    // For more information check:
    //  - About Advanced Content Filter: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
    //  - About Disallowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_disallowed_content
    //  - About Allowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_allowed_content_rules
    disallowedContent: 'img{width,height,float}',
    extraAllowedContent: 'img[width,height,align]',
    // Enabling extra plugins, available in the full-all preset: http://ckeditor.com/presets-all
    extraPlugins: 'tableresize,uploadimage,uploadfile,justify',
    /*********************** File management support ***********************/
    // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
    // solution with file upload/management capabilities, like for example CKFinder.
    // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_ckfinder_integration
    // Uncomment and correct these lines after you setup your local CKFinder instance.
    // filebrowserBrowseUrl: 'http://example.com/ckfinder/ckfinder.html',
    // filebrowserUploadUrl: 'http://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    /*********************** File management support ***********************/
    // Make the editing area bigger than default.
    height: 800,
    // An array of stylesheets to style the WYSIWYG area.
    // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
    contentsCss: ['https://cdn.ckeditor.com/4.8.0/full-all/contents.css', 'mystyles.css'],
    // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
    bodyClass: 'document-editor',
    // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
    format_tags: 'p;h1;h2;h3;pre',
    // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
    removeDialogTabs: 'image:advanced;link:advanced',
    // Define the list of styles which should be available in the Styles dropdown list.
    // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
    // (and on your website so that it rendered in the same way).
    // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
    // that file, which means one HTTP request less (and a faster startup).
    // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles
    stylesSet: [
        /* Inline Styles */
        { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },
        { name: 'Cited Work', element: 'cite' },
        { name: 'Inline Quotation', element: 'q' },
        /* Object Styles */
        {
            name: 'Special Container',
            element: 'div',
            styles: {
                padding: '5px 10px',
                background: '#eee',
                border: '1px solid #ccc'
            }
        },
        {
            name: 'Compact table',
            element: 'table',
            attributes: {
                cellpadding: '5',
                cellspacing: '0',
                border: '1',
                bordercolor: '#ccc'
            },
            styles: {
                'border-collapse': 'collapse'
            }
        },
        { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
        { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }
    ]
};


/***/ }),

/***/ "./src/app/models/learning/trActividad.ts":
/*!************************************************!*\
  !*** ./src/app/models/learning/trActividad.ts ***!
  \************************************************/
/*! exports provided: TrActividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrActividad", function() { return TrActividad; });
var TrActividad = /** @class */ (function () {
    function TrActividad() {
        this.mostrarPreguntas = false;
        this.nuevaPregunta = false;
    }
    return TrActividad;
}());



/***/ }),

/***/ "./src/app/models/learning/trMateriaFechaActividad.ts":
/*!************************************************************!*\
  !*** ./src/app/models/learning/trMateriaFechaActividad.ts ***!
  \************************************************************/
/*! exports provided: TrMateriaFechaActividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrMateriaFechaActividad", function() { return TrMateriaFechaActividad; });
var TrMateriaFechaActividad = /** @class */ (function () {
    function TrMateriaFechaActividad() {
    }
    return TrMateriaFechaActividad;
}());



/***/ }),

/***/ "./src/app/models/simpleEditor.ts":
/*!****************************************!*\
  !*** ./src/app/models/simpleEditor.ts ***!
  \****************************************/
/*! exports provided: simpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleEditor", function() { return simpleEditor; });
var simpleEditor = [
    //['Styles''Format''Font','FontSize'],
    //['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
    //['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    //['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor']
    ['Format', 'Font', 'FontSize'],
    ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Outdent', 'Indent', '-', 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Table', 'Link', 'Smiley', 'TextColor', 'BGColor']
];


/***/ }),

/***/ "./src/app/module-load/module-load.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/module-load/module-load.directive.ts ***!
  \******************************************************/
/*! exports provided: ModuleLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleLoadDirective", function() { return ModuleLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules-map */ "./src/app/module-load/modules-map.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModuleLoadDirective = /** @class */ (function () {
    function ModuleLoadDirective(viewContainerRef, injector, ngModuleFactoryLoader, modulesMap) {
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.ngModuleFactoryLoader = ngModuleFactoryLoader;
        this.modulesMap = modulesMap;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cargandoArchivo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModuleLoadDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.ngModuleFactoryLoader
            .load(this.modulesMap[this.moduleName])
            .then(function (moduleFactory) {
            _this.ngModuleRef = moduleFactory.create(_this.injector);
            var rootComponent = moduleFactory.moduleType.rootComponent;
            var factory = _this.ngModuleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            _this.componentRef.instance.Data = _this.data;
            _this.componentRef.instance.actividadCargada.subscribe(function (value) { return _this.actividadCargada.emit(value); });
            if (_this.componentRef.instance.cargandoArchivo) {
                _this.componentRef.instance.cargandoArchivo.subscribe(function (value) { return _this.cargandoArchivo.emit(value); });
            }
            _this.componentRef.instance.successCharge = _this.successCharge;
        });
    };
    ModuleLoadDirective.prototype.ngOnDestroy = function () {
        this.ngModuleRef && this.ngModuleRef.destroy();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appModuleLoad'),
        __metadata("design:type", Object)
    ], ModuleLoadDirective.prototype, "moduleName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModuleLoadDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModuleLoadDirective.prototype, "successCharge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModuleLoadDirective.prototype, "actividadCargada", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModuleLoadDirective.prototype, "cargandoArchivo", void 0);
    ModuleLoadDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appModuleLoad]'
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_modules_map__WEBPACK_IMPORTED_MODULE_1__["LAZY_DYNAMIC_MODULES_MAP"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], Object])
    ], ModuleLoadDirective);
    return ModuleLoadDirective;
}());



/***/ }),

/***/ "./src/app/module-load/modules-map.ts":
/*!********************************************!*\
  !*** ./src/app/module-load/modules-map.ts ***!
  \********************************************/
/*! exports provided: lazyDynamicMap, LAZY_DYNAMIC_MODULES_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyDynamicMap", function() { return lazyDynamicMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_DYNAMIC_MODULES_MAP", function() { return LAZY_DYNAMIC_MODULES_MAP; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var lazyDynamicMap = {
    abiertaModule: 'src/app/materia/actividad/preguntas/abierta/abierta.module#AbiertaModule',
    opcionMultipleModule: 'src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.module#OpcionMultipleModule',
    relacionColumnasModule: 'src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.module#RelacionColumnasModule',
    zonaImagenesModule: 'src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.module#ZonaImagenesModule',
    dragDropModule: 'src/app/materia/actividad/preguntas/drag-drop/drag-drop.module#DragDropModule',
    vinculacionIdeasModule: 'src/app/materia/actividad/preguntas/vinculacion-ideas/vinculacion-ideas.module#VinculacionIdeasModule',
    foroModule: "src/app/materia/actividad/preguntas/foro/foro.module#ForoModule",
    estrategicaModule: "src/app/materia/actividad/preguntas/estrategica/estrategica.module#EstrategicaModule",
    // diagnosticaModule: "src/app/materia/actividad/preguntas/diagnostica/diagnostica.module#DiagnosticaModule",
    cargaArchivosModule: "src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.module#CargaArchivosModule"
};
var LAZY_DYNAMIC_MODULES_MAP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LAZY_DYNAMIC_MODULES_MAP', {
    factory: function () { return lazyDynamicMap; }
});


/***/ }),

/***/ "./src/app/services/metricaCalificacion.ts":
/*!*************************************************!*\
  !*** ./src/app/services/metricaCalificacion.ts ***!
  \*************************************************/
/*! exports provided: metrica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metrica", function() { return metrica; });
var metrica = [{
        valor: "0.00",
        texto: "0.0"
    },
    {
        valor: "0.50",
        texto: "5.0"
    },
    {
        valor: "0.60",
        texto: "6.0"
    },
    {
        valor: "0.65",
        texto: "6.5"
    },
    {
        valor: "0.70",
        texto: "7.0"
    },
    {
        valor: "0.75",
        texto: "7.5"
    },
    {
        valor: "0.80",
        texto: "8.0"
    },
    {
        valor: "0.85",
        texto: "8.5"
    },
    {
        valor: "0.90",
        texto: "9.0"
    },
    {
        valor: "0.95",
        texto: "9.5"
    },
    {
        valor: "1.00",
        texto: "10.0"
    }];


/***/ })

}]);
//# sourceMappingURL=default~actividad-main-main-module~docente-actividad-actividad-module~vista-previa-vista-previa-modu~e0e74ef8.js.map