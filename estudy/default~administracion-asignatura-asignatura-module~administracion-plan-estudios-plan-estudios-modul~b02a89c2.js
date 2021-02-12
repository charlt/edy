(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-asignatura-asignatura-module~administracion-plan-estudios-plan-estudios-modul~b02a89c2"],{

/***/ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"guardarImagen()\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" ><b>Carga de imagen</b></label>\r\n    <div class=\"justify-content-center\">\r\n      <img  *ngIf=\"imgURL\" [src]=\"imgURL\" style=\"width:100%\">\r\n      <ngx-file-drop dropZoneLabel=\"Arrastra tu imagen aqui\" (onFileDrop)=\"dropped($event)\" \r\n        (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\" multiple=\"false\">\r\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\"  accept='image/*'>\r\n          Arrastra tu imagen aquí o\r\n          <button class=\"btn btn-outline-secondary ml-1\" type=\"button\" (click)=\"openFileSelector()\"> Selecciona tu imagen aquí</button>\r\n        </ng-template>\r\n      </ngx-file-drop><br>\r\n      <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"btnDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">Guardar imagen</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzaWduYXR1cmEvY2FyZ2EtaW1hZ2VuL2NhcmdhLWltYWdlbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CargaImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaImagenComponent", function() { return CargaImagenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CargaImagenComponent = /** @class */ (function () {
    function CargaImagenComponent(_usuarioService, _asignaturaService) {
        this._usuarioService = _usuarioService;
        this._asignaturaService = _asignaturaService;
        //imagen
        this.files = [];
    }
    CargaImagenComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
    };
    CargaImagenComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        // console.log(this.files[0].relativePath)
        // for (const droppedFile of this.files) {
        // Is it a file?
        if (this.files[0].fileEntry.isFile) {
            var fileEntry = this.files[0].fileEntry;
            fileEntry.file(function (file) {
                // Here you can access the real file
                _this.preview(file, [3000, 3000, 10485760], 1); // tamaño imagen
            });
        }
        else {
            // It was a directory (empty directories are added, otherwise only files)
            var fileEntry = this.files[0].fileEntry;
            console.log(this.files[0].relativePath, fileEntry);
        }
        // }
    };
    CargaImagenComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    CargaImagenComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    CargaImagenComponent.prototype.preview = function (evt, array, id) {
        var _this = this;
        //console.log(evt)
        if (id == 0) {
            var file = evt.target.files;
            if (file.length === 0)
                return;
            var mimeType = file[0].type;
        }
        else if (id == 1) {
            var file = evt;
            var mimeType = file.type;
        }
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Sólo se admiten imágenes.";
            this.estado = 0;
            this.imgURL = '';
            alertify.error(this.message);
            return;
        }
        var image;
        if (id == 0) {
            image = evt.target.files[0];
        }
        else if (id == 1) {
            image = evt;
        }
        this.imgFile = image;
        this.size = image.size;
        var reader = new FileReader;
        reader.onload = function () {
            _this.imgURL = reader.result;
            var img = new Image();
            img.onload = function () {
                _this.width = img.width;
                _this.height = img.height;
                if (_this.size <= array[2]) {
                    if (_this.width < array[0] && _this.height < array[1]) {
                        alertify.success("Tamaño de imagen correcto");
                        _this.estado = 1;
                        _this.btnDisabled = false;
                    }
                    else {
                        alertify.error("El tamaño de la imagen no debe de pasar  de " + array[0] + "x" + array[1] + "px");
                        _this.estado = 0;
                        _this.imgURL = '';
                    }
                }
                else {
                    alertify.error("El tamaño de la imagen es demasiado grande");
                    _this.estado = 0;
                }
            };
            img.src = reader.result.toString(); // This is the data URL
        };
        reader.readAsDataURL(image);
        // this.imgType.nativeElement.value = ""; 
    };
    CargaImagenComponent.prototype.guardarImagen = function () {
        var _this = this;
        console.log(this.tipoImagen);
        if (this.tipoImagen == "imagen") {
            if (this.estado == 1) {
                this._asignaturaService.imagen(this.idAsignaturaSelected, this.imgFile, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.btnDisabled = true;
                        _this.urlImagen.forEach(function (imagen, index) {
                            // console.log(imagen.id)
                            if (imagen.id == this.idAsignaturaSelected)
                                this.urlImagen[index] = this.imgURL;
                        }.bind(_this));
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                alertify.error("Inserta una imagen válida");
            }
        }
        else if (this.tipoImagen == "previa") {
            if (this.estado == 1) {
                this._asignaturaService.imagenPrevia(this.idAsignaturaSelected, this.imgFile, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.btnDisabled = true;
                        _this.urlImagen.forEach(function (imagen, index) {
                            console.log(imagen.id);
                            if (imagen.id == this.idAsignaturaSelected)
                                this.urlImagen[index] = this.imgURL;
                        }.bind(_this));
                        alertify.success(response['msg']);
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                alertify.error("Inserta una imagen válida");
            }
        }
        //this.estado = 0;
        this.imgFile = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CargaImagenComponent.prototype, "urlImagen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CargaImagenComponent.prototype, "idAsignaturaSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CargaImagenComponent.prototype, "tipoImagen", void 0);
    CargaImagenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carga-imagen',
            template: __webpack_require__(/*! ./carga-imagen.component.html */ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.html"),
            styles: [__webpack_require__(/*! ./carga-imagen.component.scss */ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturaService"]])
    ], CargaImagenComponent);
    return CargaImagenComponent;
}());



/***/ }),

/***/ "./src/app/administracion/asignatura/edicion/edicion.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/asignatura/edicion/edicion.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n</div> -->\r\n<ngb-tabset>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle><p>Principal</p></ng-template>\r\n      <ng-template ngbTabContent><!---->\r\n        <div class=\"modal-body\">\r\n          <app-form  [idAsignatura]=\"idAsignaturaSelected\" [tipoForm]=\"1\"></app-form>\r\n        </div>\r\n      </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab><!---->\r\n    <ng-template ngbTabTitle><p>Bienvenida</p></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"modal-body\">\r\n          <label class=\"control-label\"><b>Bienvenida</b></label>\r\n          <form-descripcion [columna] = \"1\" [idAsignatura]=\"idAsignaturaSelected\"></form-descripcion>\r\n        </div>\r\n      </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab><!---->\r\n    <ng-template ngbTabTitle><p>Objetivos</p></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"modal-body\">\r\n          <label class=\"control-label\"><b>Objetivos</b></label>\r\n          <form-descripcion [columna] = \"2\" [idAsignatura]=\"idAsignaturaSelected\"></form-descripcion>\r\n        </div>\r\n      </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab><!---->\r\n    <ng-template ngbTabTitle><p>Evaluación</p></ng-template>\r\n      <ng-template ngbTabContent>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\"><b>Evaluación</b></label>\r\n            <form-descripcion [columna] = \"3\" [idAsignatura]=\"idAsignaturaSelected\"></form-descripcion>\r\n          </div>  \r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab><!---->\r\n      <ng-template ngbTabTitle><p>Bibliografía</p></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <div class=\"modal-body\">\r\n            <label class=\"control-label\" ><b>Bibliografía</b></label>\r\n            <form-descripcion [columna] = \"4\" [idAsignatura]=\"idAsignaturaSelected\"></form-descripcion>\r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab><!---->\r\n      <ng-template ngbTabTitle><p>Carga de imagen</p></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <div class=\"modal-body\">\r\n                <img src=\"{{imgURL}}\" width=\"50%\">\r\n                <app-carga-imagen [idAsignaturaSelected]=\"idAsignaturaSelected\" [urlImagen]=\"urlImagen\"[tipoImagen]=\"'imagen'\"></app-carga-imagen>\r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab><!---->\r\n      <ng-template ngbTabTitle><p>Carga de imagen previa</p></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <img src=\"{{imgURLPrevia}}\" width=\"50%\">\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <app-carga-imagen [idAsignaturaSelected]=\"idAsignaturaSelected\" [urlImagen]=\"urlImagen\" [tipoImagen]=\"'previa'\"></app-carga-imagen>\r\n              </div>\r\n            </div>      \r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab><!---->\r\n      <ng-template ngbTabTitle><p>Carga de contenido</p></ng-template>\r\n        <ng-template ngbTabContent>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <app-file-upload [(ngModel)]=\"contenidoPdf\" (change)=\"guardarPdf()\"></app-file-upload>\r\n              </div>\r\n              <div class=\"col-md-6 text-center\">\r\n                <div class=\"form-row mt-3\">\r\n                  <div class=\"col-11\">\r\n                    <app-archivo *ngIf=\"asignatura.url_contenido\" [urlBase]=\"asignatura.url_contenido\"></app-archivo>\r\n                  </div>\r\n                  <div class=\"col-1\">\r\n                    <button *ngIf=\"asignatura.url_contenido\" class=\"btn btn-danger\" (click)=\"eliminarArchivo(asignatura.url_contenido)\"><i class=\"fa fa-times\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div> \r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/administracion/asignatura/edicion/edicion.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/asignatura/edicion/edicion.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzaWduYXR1cmEvZWRpY2lvbi9lZGljaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/asignatura/edicion/edicion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/asignatura/edicion/edicion.component.ts ***!
  \************************************************************************/
/*! exports provided: EdicionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionComponent", function() { return EdicionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdicionComponent = /** @class */ (function () {
    function EdicionComponent(_usuarioService, route, _asignaturaService) {
        this._usuarioService = _usuarioService;
        this.route = route;
        this._asignaturaService = _asignaturaService;
        this.title = "Editar asignatura";
        this._usuarioService.pushBreadcum(this.title, '', 2);
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
    }
    EdicionComponent.prototype.ngOnInit = function () {
        this.jwt = '';
        if (this.tipo == 1) {
            this.idAsignaturaSelected = this.id_asignatura;
        }
        else {
            this.idAsignaturaSelected = this.route.snapshot.paramMap.get('id');
        }
        this.asignaturaSelect = this._usuarioService;
        this.consultaAsignaturas();
    };
    EdicionComponent.prototype.consultaAsignaturas = function () {
        var _this = this;
        this._asignaturaService.consultaEspecificaAsign(this.jwt, this.idAsignaturaSelected).subscribe(function (response) {
            if (response && response['status']) {
                _this.asignatura = response['asignatura'];
                if (_this.asignatura.url_imagen)
                    _this.imgURL = _this.url + _this.asignatura.url_imagen;
                if (_this.asignatura.url_imagen_previa)
                    _this.imgURLPrevia = _this.url + _this.asignatura.url_imagen_previa;
            }
        }, function (error) {
            console.log(error);
        });
    };
    EdicionComponent.prototype.guardarPdf = function () {
        var _this = this;
        this._asignaturaService.guardaContenido(this.contenidoPdf, this.idAsignaturaSelected).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                _this.contenidoPdf = '';
                _this.consultaAsignaturas();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EdicionComponent.prototype.eliminarArchivo = function (url_contenido) {
        alertify.confirm('', '¿Deseas eliminar el contenido?', function () {
            var _this = this;
            this._asignaturaService.eliminaContenido(url_contenido, this.idAsignaturaSelected).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                    _this.contenidoPdf = '';
                    _this.consultaAsignaturas();
                }
                else {
                    alertify.error(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdicionComponent.prototype, "id_asignatura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EdicionComponent.prototype, "tipo", void 0);
    EdicionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edicion',
            template: __webpack_require__(/*! ./edicion.component.html */ "./src/app/administracion/asignatura/edicion/edicion.component.html"),
            styles: [__webpack_require__(/*! ./edicion.component.scss */ "./src/app/administracion/asignatura/edicion/edicion.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturaService"]])
    ], EdicionComponent);
    return EdicionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/asignatura/edicion/edicion.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/asignatura/edicion/edicion.module.ts ***!
  \*********************************************************************/
/*! exports provided: EdicionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdicionModule", function() { return EdicionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edicion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edicion.component */ "./src/app/administracion/asignatura/edicion/edicion.component.ts");
/* harmony import */ var _carga_imagen_carga_imagen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carga-imagen/carga-imagen.component */ "./src/app/administracion/asignatura/carga-imagen/carga-imagen.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/form.component */ "./src/app/administracion/asignatura/form/form.component.ts");
/* harmony import */ var _form_descripcion_form_descripcion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-descripcion/form-descripcion.component */ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var EdicionModule = /** @class */ (function () {
    function EdicionModule() {
    }
    EdicionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edicion_component__WEBPACK_IMPORTED_MODULE_2__["EdicionComponent"], _carga_imagen_carga_imagen_component__WEBPACK_IMPORTED_MODULE_3__["CargaImagenComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormAsignaturaComponent"], _form_descripcion_form_descripcion_component__WEBPACK_IMPORTED_MODULE_5__["FormDescripcionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_6__["NgxFileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_11__["FileUploadModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_12__["ArchivoModule"]
            ],
            exports: [_edicion_component__WEBPACK_IMPORTED_MODULE_2__["EdicionComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormAsignaturaComponent"]]
        })
    ], EdicionModule);
    return EdicionModule;
}());



/***/ }),

/***/ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"formEditor\"(ngSubmit)=\"enviarInformacion()\">   \r\n   <div class=\"form-group\">\r\n        <ckeditor\r\n        (ready)=\"comienza($event)\"\r\n        [config]=\"{\r\n            allowedContent : true,\r\n            extraPlugins: 'uploadimage',\r\n            filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n            }\"   \r\n        formControlName=\"tex\"  name=\"ckeditor\"></ckeditor><br>    \r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n    </div>\r\n</form>    "

/***/ }),

/***/ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzaWduYXR1cmEvZm9ybS1kZXNjcmlwY2lvbi9mb3JtLWRlc2NyaXBjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FormDescripcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDescripcionComponent", function() { return FormDescripcionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormDescripcionComponent = /** @class */ (function () {
    function FormDescripcionComponent(formBuilder, _asignaturaService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._asignaturaService = _asignaturaService;
        this._usuarioService = _usuarioService;
        this.button = false;
    }
    Object.defineProperty(FormDescripcionComponent.prototype, "f", {
        get: function () { return this.formEditor.controls; },
        enumerable: true,
        configurable: true
    });
    FormDescripcionComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.formEditor = this.formBuilder.group({
            tex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    FormDescripcionComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._asignaturaService.consulta(this.jwt, this.idAsignatura).subscribe(function (response) {
            if (_this.columna == 1) {
                _this.formEditor.get('tex').setValue(response['Asignatura'][0].bienvenida_desc);
            }
            if (_this.columna == 2) {
                _this.formEditor.get('tex').setValue(response['Asignatura'][0].objetivos_desc);
            }
            if (_this.columna == 3) {
                _this.formEditor.get('tex').setValue(response['Asignatura'][0].evaluacion_desc);
            }
            if (_this.columna == 4) {
                _this.formEditor.get('tex').setValue(response['Asignatura'][0].bibliografia_desc);
            }
        });
    };
    FormDescripcionComponent.prototype.enviarInformacion = function () {
        //  if (this.formEditor.invalid) {
        //      alertify.error('Ingresa algún texto');
        //} else {
        this._asignaturaService.insertaEditor(this.idAsignatura, this.columna, this.formEditor.get('tex').value, this.jwt).subscribe(function (response) {
            console.log(response);
            alertify.success('Guardado correctamente');
        });
        //}
    };
    FormDescripcionComponent.prototype.comienza = function (event) {
        var url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
        var urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
        var jwt = this.jwt;
        var idAsignatura = this.idAsignatura;
        event.editor.on('fileUploadRequest', function (evt) {
            var fileLoader = evt.data.fileLoader, formData = new FormData(), xhr = fileLoader.xhr;
            xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
            //xhr.setRequestHeader('Content-type', "multipart/form-data");
            formData.append('jwt', jwt);
            formData.append('nom_carpeta', 'asignatura');
            formData.append('id', idAsignatura);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            fileLoader.xhr.send(formData);
            evt.stop();
            // Prevented the default behavior.
        }, null, null, 4);
        event.editor.on('fileUploadResponse', function (evt) {
            // Prevent the default response handler.
            evt.stop();
            // Get XHR and response.
            var data = evt.data, xhr = data.fileLoader.xhr, response = xhr.responseText.split('|');
            console.log(response);
            if (response[1]) {
                // An error occurred during upload.          
                data.message = response[1];
                evt.cancel();
            }
            else {
                var msg = JSON.parse(response[0]);
                console.log(response[0]);
                console.log(msg);
                data.url = urlAssets + msg.url;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDescripcionComponent.prototype, "columna", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDescripcionComponent.prototype, "idAsignatura", void 0);
    FormDescripcionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-descripcion',
            template: __webpack_require__(/*! ./form-descripcion.component.html */ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.html"),
            styles: [__webpack_require__(/*! ./form-descripcion.component.scss */ "./src/app/administracion/asignatura/form-descripcion/form-descripcion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormDescripcionComponent);
    return FormDescripcionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/asignatura/form/form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/administracion/asignatura/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12  nuevaAsignatura\">\r\n        <form [formGroup]=\"asignaturaForm\" (ngSubmit)=\"enviarInformacion()\">\r\n\r\n                <div class=\"row\">\r\n                        <!--div class=\"col-md-6\">\r\n            <div class=\"form-group repo_carrera\">\r\n                <label class=\"control-label\" for=\"consulta_carrera\">{{'SelectCareerSyllabus' | translate}}</label>\r\n                <select   formControlName=\"catCarreras\"  class=\"form-control\" (change)=\"consultaPlan($event.target.value)\">\r\n                    <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n                    <option  [value]=\"carrera.carrera_id\" *ngFor=\"let carrera of carreras\">{{carrera.carrera}}</option>\r\n                </select>\r\n                <span class=\"invalidText\" *ngIf=\"f.catCarreras.invalid && f.catCarreras.touched\">\r\n                    {{'fmErrSelect' | translate}}\r\n                </span>\r\n            </div>\r\n       </div>\r\n       <div class=\"col-md-6\">\r\n            <div class=\"form-group cat_tipo_asignaturas\">         \r\n                <label class=\"control-label\" for=\"\">{{'PlanEstudios' | translate}}:</label>\r\n                <select  formControlName=\"catPlanEstudio\"  class=\"form-control\"  >\r\n                <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n                <option  [value]=\"_planEstudio.plan_estudio_id\" *ngFor=\"let _planEstudio of planEstudio\">{{_planEstudio.plan_estudio}}</option>\r\n                </select>\r\n                <span class=\"invalidText\" *ngIf=\"f.tipoAsignatura.invalid && f.tipoAsignatura.touched\">\r\n                        {{'fmErrSelect' | translate}}\r\n                </span>\r\n            </div>  \r\n       </div-->\r\n                        <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                        <label class=\"control-label  \"\r\n                                                for=\"nombre_asignatura\">{{'nombreAsignatura' | translate}}:</label>\r\n                                        <input formControlName=\"nombreAsignatura\" class=\"form-control\"\r\n                                                id=\"nombre_asignatura\" placeholder=\"{{'nombreAsignatura' | translate}}\"\r\n                                                type=\"text\" required>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.nombreAsignatura.invalid && f.nombreAsignatura.touched\">\r\n                                                {{'fmErrNombre' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                        <label class=\"control-label\"\r\n                                                for=\"clave_asignatura\">{{'claveAsignatura' | translate}}:</label>\r\n                                        <input formControlName=\"claveAsignatura\" class=\"form-control\"\r\n                                                id=\"clave_asignatura\" placeholder=\"{{'claveAsignatura' | translate}}\"\r\n                                                type=\"text\" required>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.claveAsignatura.invalid && f.claveAsignatura.touched && !repetida\">\r\n                                                {{'fmErrClave' | translate}}\r\n                                        </span>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.claveAsignatura.invalid && f.claveAsignatura.touched && repetida\">\r\n                                                Clave ya registrada\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                        <label class=\"control-label  \">{{'califMin' | translate}}:</label>\r\n                                        <input formControlName=\"califMin\" class=\"form-control\"\r\n                                                placeholder=\"{{'califMin' | translate}}\" type=\"number\">\r\n                                        <span class=\"invalidText\" *ngIf=\"f.califMin.invalid && f.califMin.touched\">\r\n                                                {{'fmErrNumber' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                                <!-- aqui va el plan estudios -->\r\n                                <div *ngIf=\"!idCarrera\" class=\"form-group cat_tipo_asignaturas\">\r\n                                        <label class=\"control-label\" for=\"\">Plan de estudios</label>\r\n                                        <select formControlName=\"planEstudio\" class=\"form-control\" (change)=\"consultaOrdenJerarquico()\">\r\n                                                <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}\r\n                                                </option>\r\n                                                <option [value]=\"plan.plan_estudio_id\"\r\n                                                        *ngFor=\"let plan of planesEstudio\">{{plan.plan_estudio}}\r\n                                                </option>\r\n                                        </select>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.planEstudio.invalid && f.planEstudio.touched\">\r\n                                                {{'fmErrSelect' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"form-group cat_tipo_asignaturas\">\r\n                                        <label class=\"control-label\" for=\"\">{{'tipoAsignatura' | translate}}:</label>\r\n                                        <select formControlName=\"tipoAsignatura\" class=\"form-control\">\r\n                                                <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}\r\n                                                </option>\r\n                                                <option [value]=\"tipo_asignatura.tipo_asignatura_id\"\r\n                                                        *ngFor=\"let tipo_asignatura of asignaturas\">\r\n                                                        {{tipo_asignatura.tipo_asignatura}}</option>\r\n                                        </select>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.tipoAsignatura.invalid && f.tipoAsignatura.touched\">\r\n                                                {{'fmErrSelect' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n\r\n                                <div class=\"form-group\">\r\n                                        <label class=\"control-label\"\r\n                                                for=\"nombre_asignatura\">{{'creditosAsignatura' | translate}}:</label>\r\n                                        <input formControlName=\"creditosAsignatura\" class=\"form-control\"\r\n                                                id=\"nombre_asignatura\"\r\n                                                placeholder=\"{{'creditosAsignatura' | translate}}\" type=\"number\"\r\n                                                required>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.creditosAsignatura.invalid && f.creditosAsignatura.touched\">\r\n                                                {{'fmErrCreditos' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                        <label class=\"control-label\">{{'califMax' | translate}}:</label>\r\n                                        <input formControlName=\"califMax\" class=\"form-control\"\r\n                                                placeholder=\"{{'califMax' | translate}}\" type=\"number\">\r\n                                        <span class=\"invalidText\" *ngIf=\"f.califMax.invalid && f.califMax.touched\">\r\n                                                {{'fmErrNumber' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                                <!-- aqui va el grado de la asignatura -->\r\n                                <div *ngIf=\"!idCarrera\" class=\"form-group\">\r\n                                        <label class=\"control-label\" for=\"grado_asignatura\">{{'gradoAsignatura' | translate}}:</label>\r\n                                        <select formControlName=\"gradoAsignatura\" class=\"form-control\">\r\n                                                <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}</option>\r\n                                                <option [value]=\"grado.orden_jerarquico_id\" *ngFor=\"let grado of grados\">{{grado.orden_jerarquico_descripcion}}</option>\r\n                                        </select>\r\n                                        <span class=\"invalidText\" *ngIf=\"f.gradoAsignatura.invalid && f.gradoAsignatura.touched\">{{'fmErrGrado' | translate}}</span>\r\n                                </div> \r\n                                <div *ngIf=\"tipoForm == 1\" class=\"form-group\">\r\n                                        <label class=\"control-label\" for=\"\">Seriar materia con:</label>\r\n                                        <select formControlName=\"asignaturaPlan\" class=\"form-control\">\r\n                                                <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}\r\n                                                </option>\r\n                                                <option [value]=\"asignaturaPlan.asignatura_id\"\r\n                                                        *ngFor=\"let asignaturaPlan of asignaturasPlan\">\r\n                                                        {{asignaturaPlan.asignatura}}</option>\r\n                                        </select>\r\n                                        <span class=\"invalidText\"\r\n                                                *ngIf=\"f.asignaturaPlan.invalid && f.asignaturaPlan.touched\">\r\n                                                {{'fmErrSelect' | translate}}\r\n                                        </span>\r\n                                </div>\r\n                        </div>\r\n                </div><br>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                                <button [hidden]=\"tipoAdmin == 0\" type=\"submit\"class=\"btn btn-primary float-right enviar-datos-asignaturas\">{{'fmSave' | translate}}</button>\r\n                        </div>\r\n                </div>\r\n        </form>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/asignatura/form/form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/administracion/asignatura/form/form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYXNpZ25hdHVyYS9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FzaWduYXR1cmEvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/asignatura/form/form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/asignatura/form/form.component.ts ***!
  \******************************************************************/
/*! exports provided: FormAsignaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAsignaturaComponent", function() { return FormAsignaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_asignatura_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var _carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../carrera/services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormAsignaturaComponent = /** @class */ (function () {
    function FormAsignaturaComponent(formBuilder, _catalogoService, _usuarioService, router, route, _asignaturaService, _carreraService) {
        this.formBuilder = formBuilder;
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
        this._asignaturaService = _asignaturaService;
        this._carreraService = _carreraService;
        this.estatusPlan = false;
        this.repetida = false;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.idAsignatura)
            this.title = 'Editar elemento';
        else
            this.title = 'Nuevo elemento';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(FormAsignaturaComponent.prototype, "f", {
        get: function () { return this.asignaturaForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormAsignaturaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        this.consultaPlan();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (this.idAsignatura === undefined)
            this.idAsignatura = null;
        if (this.tipoForm == 1) {
            this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
            this.idCarrera = this.route.snapshot.paramMap.get('id2');
            this.consultamateriasPlan();
        }
        this._catalogoService.consultatipoAsignatura('').subscribe(function (response) {
            if (response && response['status']) {
                _this.asignaturas = response['asignaturas'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogoService.consultaCarrera('').subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
            }
        }, function (error) {
            console.log(error);
        });
        this.asignaturaForm = this.formBuilder.group({
            //catCarreras:   ['', Validators.required],
            //catPlanEstudio:   ['', Validators.required],
            claveAsignatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombreAsignatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            califMin: [''],
            califMax: [''],
            creditosAsignatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoAsignatura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            asignaturaPlan: [''],
            gradoAsignatura: [''],
            planEstudio: ['']
        });
        if (this.idAsignatura) {
            this.asignaturaForm.controls.gradoAsignatura.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.asignaturaForm.controls.gradoAsignatura.reset();
            this.asignaturaForm.get('gradoAsignatura').setValue("");
            this.asignaturaForm.controls.planEstudio.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["required"]);
            this.asignaturaForm.controls.planEstudio.reset();
            this.asignaturaForm.get('planEstudio').setValue("");
        }
        else {
            this.asignaturaForm.controls.gradoAsignatura.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.asignaturaForm.controls.gradoAsignatura.reset();
            this.asignaturaForm.get('gradoAsignatura').setValue("");
            this.asignaturaForm.controls.planEstudio.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
            this.asignaturaForm.controls.planEstudio.reset();
            this.asignaturaForm.get('planEstudio').setValue("");
        }
        this.asignaturaForm.get('claveAsignatura').valueChanges.subscribe(function (value) {
            if (_this.asignaturaForm.get('claveAsignatura').value) {
                _this.consultaAsignatura();
            }
            else {
                _this.asignaturaForm.get('claveAsignatura').setErrors({ invalid: true });
                _this.repetida = false;
            }
        });
        //this.asignaturaForm.get('carreraAsignatura').disable();
        if (this.idAsignatura != null) {
            this._asignaturaService.consulta('', this.idAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Asignaturas = response['Asignatura'][0];
                    _this.asignaturaForm.get('claveAsignatura').setValue(_this.Asignaturas.asignatura_clave);
                    _this.asignaturaForm.get('nombreAsignatura').setValue(_this.Asignaturas.asignatura);
                    _this.asignaturaForm.get('creditosAsignatura').setValue(_this.Asignaturas.creditos);
                    _this.asignaturaForm.get('tipoAsignatura').setValue(_this.Asignaturas.tipo_asignatura_id);
                    _this.asignaturaForm.get('califMin').setValue(_this.Asignaturas.calif_min);
                    _this.asignaturaForm.get('califMax').setValue(_this.Asignaturas.calif_max);
                    _this.asignaturaForm.get('planEstudio').setValue(_this.Asignaturas.plan_estudio_id);
                    if (_this.tipoForm == 1)
                        _this.asignaturaForm.get('asignaturaPlan').setValue(_this.Asignaturas.asignatura_padre_id);
                    if (_this.Asignaturas.plan_estudio_id) {
                        _this._asignaturaService.consultaOrden(_this.Asignaturas.plan_estudio_id).subscribe(function (response) {
                            if (response && response['status']) {
                                _this.grados = response['ordenJerarquico'];
                                _this.asignaturaForm.get('gradoAsignatura').setValue(_this.Asignaturas.orden_jerarquico_id);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormAsignaturaComponent.prototype.consultaAsignatura = function () {
        var _this = this;
        this._catalogoService.consultaAsignaturaTabla('').subscribe(function (response) {
            if (response && response['status']) {
                _this.asignaturasGeneral = response['Asignaturas'];
                for (var index = 0; index < _this.asignaturasGeneral.length; index++) {
                    if (_this.asignaturasGeneral[index]['asignatura_id'] == _this.idAsignatura) {
                        _this.asignaturasGeneral.splice(index, 1);
                    }
                }
                _this.materiaRepetida();
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormAsignaturaComponent.prototype.consultaOrdenJerarquico = function () {
        var _this = this;
        this.grados = [];
        if (this.asignaturaForm.get('planEstudio').value) {
            var plan_estudios_id = this.asignaturaForm.get('planEstudio').value;
            this.asignaturaForm.get('gradoAsignatura').setValue("");
            this._asignaturaService.consultaOrden(plan_estudios_id).subscribe(function (response) {
                if (response && response['status']) {
                    _this.grados = response['ordenJerarquico'];
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.grados = [];
            alertify.error('Debes seleccionar primero un plan de estudios');
        }
    };
    FormAsignaturaComponent.prototype.materiaRepetida = function () {
        var _this = this;
        var clave = this.asignaturaForm.get('claveAsignatura').value;
        this.asignaturasGeneral.forEach(function (asignatura) {
            if (clave == asignatura.asignatura_clave) {
                console.log(asignatura);
                _this.repetida = true;
                _this.asignaturaForm.get('claveAsignatura').setErrors({ invalid: true });
            }
        });
    };
    FormAsignaturaComponent.prototype.consultamateriasPlan = function () {
        var _this = this;
        this._asignaturaService.consultaMateriasPlan(this.idPlanEstudios).subscribe(function (response) {
            if (response && response['status']) {
                _this.asignaturasPlan = response['asignaturas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormAsignaturaComponent.prototype.consultaPlan = function () {
        var _this = this;
        this._catalogoService.consultaPlanEstudios('').subscribe(function (response) {
            if (response && response['status']) {
                _this.planesEstudio = response['planEstudio'];
            }
            else {
                _this.planesEstudio = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormAsignaturaComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.asignaturaForm.invalid) {
            Object.keys(this.asignaturaForm.controls).forEach(function (controlKey) {
                _this.asignaturaForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._asignaturaService.modificaAsignatura(this.asignaturaForm, '', this.idAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                //this.router.navigate(['admin/asignatura/consulta']);
                _this.sucessEvent.emit(response['idAsignatura']); //si se insertó correctamente se le agrega la asignatura a la asignatura
                alertify.success(response['msg']);
                if (!_this.idAsignatura) {
                    _this.insertaAsignatura(response['idAsignatura']);
                }
            }
            else {
                _this.sucessEvent.emit(response['idAsignatura']); //si no se devuelve un id igual a 0
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.asignaturaForm.invalid) {
            return;
        }
    };
    FormAsignaturaComponent.prototype.insertaAsignatura = function (idAsignatura) {
        this._asignaturaService.insertaPlanOrdenAsignatura(this.idPlanOrdenSelected, idAsignatura, this.asignaturaForm, 1).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormAsignaturaComponent.prototype, "idAsignatura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormAsignaturaComponent.prototype, "tipoForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormAsignaturaComponent.prototype, "idPlanOrdenSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormAsignaturaComponent.prototype, "sucessEvent", void 0);
    FormAsignaturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/asignatura/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/asignatura/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_asignatura_service__WEBPACK_IMPORTED_MODULE_5__["AsignaturaService"],
            _carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_6__["CarreraService"]])
    ], FormAsignaturaComponent);
    return FormAsignaturaComponent;
}());



/***/ }),

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

/***/ "./src/app/shared/modules/institucion/institucion.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/institucion/institucion.module.ts ***!
  \******************************************************************/
/*! exports provided: InstitucionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionModule", function() { return InstitucionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InstitucionModule = /** @class */ (function () {
    function InstitucionModule() {
    }
    InstitucionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
        })
    ], InstitucionModule);
    return InstitucionModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-asignatura-asignatura-module~administracion-plan-estudios-plan-estudios-modul~b02a89c2.js.map