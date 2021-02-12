(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-carga-archivos-carga-archivos-module"],{

/***/ "./src/app/administracion/carga-actividades/services/adjuntable.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/adjuntable.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AdjuntableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjuntableService", function() { return AdjuntableService; });
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




var AdjuntableService = /** @class */ (function () {
    function AdjuntableService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AdjuntableService.prototype.guardaContenido = function (form, idCatFormato, idPregunta, idMateriaFechaActividad, jwt) {
        var formData = new FormData();
        formData.append('id_pregunta', idPregunta);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('archivo', form.get('contenido').value);
        formData.append('id_cat_formato', idCatFormato);
        return this._httpClient.post(this.url + 'learning/respuestaAdjuntable/crea.php', formData);
    };
    AdjuntableService.prototype.guardaUrl = function (idMateriaFechaActividad, idPregunta, url) {
        var formData = new FormData();
        formData.append('pregunta_id', idPregunta);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('url_archivo', url);
        return this._httpClient.post(this.url + 'learning/respuestaAdjuntable/creaUrlExterna.php', formData);
    };
    AdjuntableService.prototype.eliminaUrl = function (id) {
        var params = '?id_respuesta=' + id;
        // params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/eliminaUrlExterna.php' + params);
    };
    AdjuntableService.prototype.consultaContenido = function (id, idMateriaFechaActividad, jwt) {
        var params = '?id_pregunta=' + id;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/consulta.php' + params);
    };
    AdjuntableService.prototype.eliminaContenido = function (id, idMateriaFechaActividad, jwt) {
        var params = '?id_respuesta=' + id;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        return this._httpClient.get(this.url + 'learning/respuestaAdjuntable/elimina.php' + params);
    };
    AdjuntableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdjuntableService);
    return AdjuntableService;
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


/***/ }),

/***/ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [hidden]=\"edicion == 0\">\r\n  <div class=\"col\">\r\n    <form class=\"col\" *ngIf=\"cargaArchivosForm\" [formGroup]=\"cargaArchivosForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\"  *ngIf=\"!f.check.value\">\r\n            <label  class=\"control-label\" for=\"tipo_pregunta\">Da clic o arrastra <b>{{tipoArchivo.nombre}}</b> <span *ngIf=\"cat_formato_id != '100'\">({{tipoArchivo.formatos}})</span> :</label>\r\n            <div [hidden]=\"contador==num_archivos\" class=\"form-group\">\r\n              <app-file-upload formControlName=\"contenido\" (change)=\"guardarBorrador()\"></app-file-upload>\r\n              <div class=\"invalid-feedback\" style=\"display: block\">\r\n                <ng-container *ngIf=\"hasError( 'required')\">{{'fmErrfileRequired' | translate}} {{tipoArchivo.nombre}}\r\n                  ({{tipoArchivo.formatos}})</ng-container>\r\n                <ng-container *ngIf=\"hasError( 'requiredFileType')\">{{'fmErrfileRequired' | translate}}\r\n                  {{tipoArchivo.nombre}}</ng-container>\r\n              </div>\r\n            </div>\r\n            <p *ngIf=\"cargando\"><i class=\"fa fa-spin fa-spinner\"></i> Cargando archivo, por favor espera</p>\r\n          </div>\r\n          <div class=\"col-12\"  *ngIf=\"f.check.value\">\r\n            <div class=\"form-group\">                               \r\n              <label class=\"control-label  \" for=\"link\">Link del archivo externo</label>\r\n              <div class=\"input-group mb-3\">\r\n                <input formControlName=\"link\" class=\"form-control\" id=\"link\" placeholder=\"Ingresa el link del archivo externo\" type=\"text\" required >\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-success\" type=\"button\" (click)=\"link()\">Agregar link</button>\r\n                </div>\r\n              </div>\r\n              <span class=\"invalidText\" *ngIf=\"f.link.invalid && f.link.touched\" >\r\n                La url  no es válida \r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input formControlName=\"check\" type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked\">\r\n              <label class=\"custom-control-label\" for=\"defaultUnchecked\">O agregar link de archivo externo</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <label *ngIf=\"contenidoPregunta && contenidoPregunta.length\">Mis archivos:</label>\r\n          \r\n          <div class=\"col-md-12\" *ngFor=\"let _contenidoPregunta of contenidoPregunta; let i = index\">\r\n            <div class=\"row \">\r\n              <div class=\"col-10\">\r\n                <app-archivo *ngIf=\"_contenidoPregunta.url_archivo && !_contenidoPregunta.urlExt\" [urlBase]=\"_contenidoPregunta.url_archivo\"></app-archivo>\r\n                <div *ngIf=\"_contenidoPregunta.url_archivo && _contenidoPregunta.urlExt\">\r\n                  <a class=\"ml-5\" [href]=\"_contenidoPregunta.url_archivo\" target=\"_blank\">{{_contenidoPregunta.url_archivo}}</a>\r\n                </div>\r\n                <p *ngIf=\"!_contenidoPregunta.url_archivo\"><b><i class=\"fa fa-exclamation-triangle\"></i>No se logró cargar el archivo. Inténtalo nuevamente</b></p>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <button type=\"button\" class=\"btn btn-danger\"\r\n                (click)=\"eliminaContenido(_contenidoPregunta.respuesta_id,i,_contenidoPregunta.urlExt)\"> <i class=\"fa fa-trash\"\r\n                  aria-hidden=\"true\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n        <!-- <div *ngIf=\"userlink && f.check.value\" class=\"alert alert-primary\" role=\"alert\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <a href=\"{{userlink}}\" target=\"_blank\">{{userlink}}</a>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <button class=\"btn btn-danger\" (click)=\"eliminaLink()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n    </form>\r\n    <div class=\"row mt-3\" *ngIf=\"!bandera && !cargaArchivosForm\" >\r\n      <div class=\"col\">\r\n        <div class=\"alert alert-secondary text-center p-4\">\r\n          <b>No se puede responder la pregunta</b>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"edicion == 0 \" class=\"row\">\r\n  <div *ngIf=\"!contenidoPregunta.length\" class=\"col-md-12\">\r\n    <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n  </div>\r\n  <div class=\"col-md-12\" *ngFor=\"let _contenidoPregunta of contenidoPregunta; let i = index\">\r\n    <div class=\"alert alert-info\">\r\n      <p><b>Mi archivo respuesta: </b></p>\r\n      <app-archivo *ngIf=\"_contenidoPregunta.url_archivo && !_contenidoPregunta.urlExt\" [urlBase]=\"_contenidoPregunta.url_archivo\"></app-archivo>\r\n\r\n      <a target=\"_blank\" *ngIf=\"_contenidoPregunta.url_archivo && _contenidoPregunta.urlExt\" [href]=\"_contenidoPregunta.url_archivo\">{{_contenidoPregunta.url_archivo}}</a>\r\n      <p *ngIf=\"!_contenidoPregunta.url_archivo \"><b><i class=\"fa fa-exclamation-triangle\"></i>No se logró cargar el\r\n          archivo.</b></p>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL2NhcmdhLWFyY2hpdm9zL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL3ByZWd1bnRhcy9jYXJnYS1hcmNoaXZvcy9jYXJnYS1hcmNoaXZvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CargaArchivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaArchivosComponent", function() { return CargaArchivosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_adjuntable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/adjuntable.service */ "./src/app/administracion/carga-actividades/services/adjuntable.service.ts");
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CargaArchivosComponent = /** @class */ (function () {
    function CargaArchivosComponent(formBuilder, _usuarioService, _adjuntableService, _httpClient) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._adjuntableService = _adjuntableService;
        this._httpClient = _httpClient;
        this.contenidoPregunta = new Array();
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cargandoArchivo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_5__["Archivo"];
        this.contador = 0;
        this.inicio = false;
        this.cargando = false;
        this.bandera = false;
    }
    Object.defineProperty(CargaArchivosComponent.prototype, "f", {
        get: function () { return this.cargaArchivosForm.controls; },
        enumerable: true,
        configurable: true
    });
    CargaArchivosComponent.prototype.hasError = function (error) {
        var control = this.cargaArchivosForm.get('contenido');
        return control.dirty && control.hasError(error);
    };
    CargaArchivosComponent.prototype.ngOnInit = function () {
        this.pregunta = this.Data.pregunta;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.edicion = this.Data.edicion;
        this.jwt = this._usuarioService.getJWT();
        if (this.pregunta.contenido_pregunta) {
            this.num_archivos = this.pregunta.contenido_pregunta.num_archivos;
            this.cat_formato_id = this.pregunta.contenido_pregunta.cat_formato_id;
        }
        if (isNaN(this.cat_formato_id)) {
            this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        }
        else {
            var idCatFormato = void 0;
            if (this.cat_formato_id == "100") { //todos
                idCatFormato = this.archivo.length - 1;
            }
            else {
                idCatFormato = parseInt(this.cat_formato_id) - 1;
            }
            this.cargaArchivosForm = this.formBuilder.group({
                contenido: ['', isNaN(idCatFormato) ? '' : Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_3__["requiredFileType"])(idCatFormato)],
                link: [''],
                check: [],
            });
            this.tipoArchivo = this.archivo[idCatFormato];
            this.consultaContenido();
        }
    };
    CargaArchivosComponent.prototype.consultaContenido = function () {
        var _this = this;
        var datosRespuesta = this.pregunta.arreglo_reactivos;
        if (datosRespuesta.contenido) {
            this.contenidoPregunta = datosRespuesta['contenido'];
            this.setContenido(datosRespuesta);
        }
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 1);
    };
    CargaArchivosComponent.prototype.getContenido = function () {
        var _this = this;
        this._adjuntableService.consultaContenido(this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.contenidoPregunta = response['contenido'];
                _this.setContenido(response);
            }
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, function (error) {
            console.log(error);
        });
    };
    CargaArchivosComponent.prototype.setContenido = function (response) {
        this.contenidoPregunta.forEach(function (contenido) {
            var url = contenido.url_archivo;
            if (url) {
                var res = url.split('/');
                if (res[0] == 'http:' || res[0] == 'https:') {
                    contenido.urlExt = true;
                }
                else {
                    contenido.urlExt = false;
                }
            }
        });
        // console.log(this.contenidoPregunta);
        response['contenido'].forEach(function (archivos) {
            if (archivos.materia_fecha_actividad_id == this.idMateriaFechaActividad && archivos.pregunta_id == this.pregunta.pregunta_id) {
                this.contador++;
            }
        }.bind(this));
    };
    CargaArchivosComponent.prototype.link = function () {
        var _this = this;
        var userlink = this.cargaArchivosForm.get('link').value;
        userlink = userlink.trim();
        this.cargaArchivosForm.get('link').setValue(userlink);
        this.cargaArchivosForm.controls.link.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/));
        this.cargaArchivosForm.controls.link.updateValueAndValidity();
        if (this.cargaArchivosForm.get('link').value && this.cargaArchivosForm.get('link').valid) {
            this.cargaArchivosForm.controls.link.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"]["required"]);
            this.cargaArchivosForm.controls.link.updateValueAndValidity();
            this._adjuntableService.guardaUrl(this.idMateriaFechaActividad, this.pregunta.pregunta_id, userlink).subscribe(function (response) {
                if (response && response['status']) {
                    _this.getContenido();
                    _this.cargaArchivosForm.get('link').reset();
                    _this.cargaArchivosForm.get('check').setValue(false);
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error('Ingresa una url válida');
        }
    };
    CargaArchivosComponent.prototype.guardarBorrador = function () {
        var _this = this;
        this.cargando = true;
        this.cargandoArchivo.emit(true);
        this._adjuntableService.guardaContenido(this.cargaArchivosForm, this.cat_formato_id, this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.cargaArchivosForm.get('contenido').disable();
                // alertify.success(response['msg'])
                _this._adjuntableService.consultaContenido(_this.pregunta.pregunta_id, _this.idMateriaFechaActividad, _this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.contenidoPregunta = response['contenido'];
                        _this.contador++;
                        _this.cargaArchivosForm.get('contenido').enable();
                        alertify.success('Archivo cargado correctamente');
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                alertify.error(response['msg']);
            }
            _this.cargando = false;
            _this.cargandoArchivo.emit(false);
        }, function (error) {
            console.log(error);
        });
    };
    CargaArchivosComponent.prototype.eliminaContenido = function (id, index, externo) {
        alertify.confirm('¿Deseas eliminar el contenido?', function () {
            var _this = this;
            if (!externo) {
                this._adjuntableService.eliminaContenido(id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.contenidoPregunta.splice(index, 1);
                        _this.contador--;
                    }
                    else {
                        alertify.success(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this._adjuntableService.eliminaUrl(id).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.contenidoPregunta.splice(index, 1);
                        alertify.success(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CargaArchivosComponent.prototype, "actividadCargada", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CargaArchivosComponent.prototype, "cargandoArchivo", void 0);
    CargaArchivosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carga-archivos',
            template: __webpack_require__(/*! ./carga-archivos.component.html */ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.html"),
            styles: [__webpack_require__(/*! ./carga-archivos.component.scss */ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_carga_actividades_services_adjuntable_service__WEBPACK_IMPORTED_MODULE_4__["AdjuntableService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], CargaArchivosComponent);
    return CargaArchivosComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CargaArchivosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaArchivosModule", function() { return CargaArchivosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carga_archivos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga-archivos.component */ "./src/app/materia/actividad/preguntas/carga-archivos/carga-archivos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CargaArchivosModule = /** @class */ (function () {
    function CargaArchivosModule() {
    }
    CargaArchivosModule_1 = CargaArchivosModule;
    var CargaArchivosModule_1;
    CargaArchivosModule.rootComponent = _carga_archivos_component__WEBPACK_IMPORTED_MODULE_2__["CargaArchivosComponent"];
    CargaArchivosModule = CargaArchivosModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [CargaArchivosModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__["ArchivoModule"]
            ],
            entryComponents: [
                CargaArchivosModule_1.rootComponent
            ]
        })
    ], CargaArchivosModule);
    return CargaArchivosModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-carga-archivos-carga-archivos-module.js.map