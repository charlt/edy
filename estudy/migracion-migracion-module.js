(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["migracion-migracion-module"],{

/***/ "./src/app/administracion/migracion/migracion-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MigracionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigracionRoutingModule", function() { return MigracionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _migracion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./migracion.component */ "./src/app/administracion/migracion/migracion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _migracion_component__WEBPACK_IMPORTED_MODULE_2__["MigracionComponent"] }];
var MigracionRoutingModule = /** @class */ (function () {
    function MigracionRoutingModule() {
    }
    MigracionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MigracionRoutingModule);
    return MigracionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/migracion/migracion.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <form [formGroup]=\"layoutForm\">\r\n      <app-file-upload formControlName=\"contenido\"></app-file-upload>\r\n    </form><br>\r\n    <button class=\"btn btn-success pull-right\" (click)=\"enviar()\" [disabled]=\"bloqueo\">Enviar archivo</button>\r\n  </div>\r\n</div><br>\r\n<div *ngIf=\"bloqueo == true\" class=\"col-md-6 text-center\">\r\n  <i class=\"fa fa-spin fa-spinner\" aria-hidden=\"true\"></i>\r\n  <p>Procesando información, por favor espere.</p>\r\n</div>\r\n<div *ngIf=\"botones == true\" class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/admin']\">Menú</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/admin/alumno']\">Alumnos</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/admin/docente']\">Docentes</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/admin/plan-estudios']\">Planes de estudio</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/migracion/migracion.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL21pZ3JhY2lvbi9taWdyYWNpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/migracion/migracion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion.component.ts ***!
  \*****************************************************************/
/*! exports provided: MigracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigracionComponent", function() { return MigracionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var _migracion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migracion.service */ "./src/app/administracion/migracion/migracion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MigracionComponent = /** @class */ (function () {
    function MigracionComponent(formBuilder, _migracionService) {
        this.formBuilder = formBuilder;
        this._migracionService = _migracionService;
        this.bloqueo = false;
        this.botones = false;
    }
    Object.defineProperty(MigracionComponent.prototype, "f", {
        get: function () { return this.layoutForm.controls; },
        enumerable: true,
        configurable: true
    });
    MigracionComponent.prototype.ngOnInit = function () {
        this.layoutForm = this.formBuilder.group({
            contenido: ['', Object(_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__["requiredFileType"])(1)]
        });
    };
    MigracionComponent.prototype.enviar = function () {
        alertify.confirm('', '¿Estás seguro que deseas cotinuar?', function () {
            var _this = this;
            this.bloqueo = true;
            this._migracionService.layout(this.layoutForm).subscribe(function (response) {
                if (response && response['status']) {
                    _this.bloqueo = false;
                    _this.botones = true;
                    alertify.success(response['msg']);
                    _this.layoutForm.get('contenido').setValue('');
                }
                else {
                    _this.bloqueo = false;
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    MigracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-migracion',
            template: __webpack_require__(/*! ./migracion.component.html */ "./src/app/administracion/migracion/migracion.component.html"),
            styles: [__webpack_require__(/*! ./migracion.component.scss */ "./src/app/administracion/migracion/migracion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _migracion_service__WEBPACK_IMPORTED_MODULE_3__["MigracionService"]])
    ], MigracionComponent);
    return MigracionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/migracion/migracion.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion.module.ts ***!
  \**************************************************************/
/*! exports provided: MigracionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigracionModule", function() { return MigracionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _migracion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migracion-routing.module */ "./src/app/administracion/migracion/migracion-routing.module.ts");
/* harmony import */ var _migracion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./migracion.component */ "./src/app/administracion/migracion/migracion.component.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MigracionModule = /** @class */ (function () {
    function MigracionModule() {
    }
    MigracionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_migracion_component__WEBPACK_IMPORTED_MODULE_4__["MigracionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _migracion_routing_module__WEBPACK_IMPORTED_MODULE_3__["MigracionRoutingModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ]
        })
    ], MigracionModule);
    return MigracionModule;
}());



/***/ }),

/***/ "./src/app/administracion/migracion/migracion.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/migracion/migracion.service.ts ***!
  \***************************************************************/
/*! exports provided: MigracionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigracionService", function() { return MigracionService; });
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




var MigracionService = /** @class */ (function () {
    function MigracionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MigracionService.prototype.layout = function (archivo) {
        var formData = new FormData();
        formData.append('documento', archivo.get('contenido').value);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'extras/excel/layout.php', formData);
    };
    MigracionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MigracionService);
    return MigracionService;
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

/***/ "./src/app/services/archivos.ts":
/*!**************************************!*\
  !*** ./src/app/services/archivos.ts ***!
  \**************************************/
/*! exports provided: Archivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
/* variable sincronizada con la base de de estudydg.cat_formatos */
var Archivo = [
    { id: 1, nombre: "Imagen", formatos: "jpg,jpeg,png,gif" },
    { id: 2, nombre: "Documento", formatos: "txt,doc,docx,pdf,odt" },
    { id: 3, nombre: "Presentación ", formatos: "pptx,ppsx,pptm,ppt,pps,potx,ppam" },
    { id: 4, nombre: "Hoja de cálculo ", formatos: "xlsx,xlsm,xlsb,xltx,xls,csv" },
    { id: 5, nombre: "Audio", formatos: "mp3,m4a,mp4,wav,wma" },
    { id: 6, nombre: "Video", formatos: "avi,mp4,m4v,mov,mpg,mpeg,swf" },
    { id: 100, nombre: "Archivo", formatos: "txt,doc,docx,odt,ppt,pdf,pps,jpg,jpeg,png,gif,jfif,pptx,pptm,ppt,potx,ppam,xlsx,xlsm,xlsb,xltx,XLR,mp3,m4a,mp4,wav,wma,avi,mp4, m4v, mov,mpg,mpeg,swf,wmv,zip,rar" },
];


/***/ })

}]);
//# sourceMappingURL=migracion-migracion-module.js.map