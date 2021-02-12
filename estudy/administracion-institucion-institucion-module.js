(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-institucion-institucion-module"],{

/***/ "./src/app/administracion/institucion/form-institucion/form-institucion.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/institucion/form-institucion/form-institucion.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <form [formGroup]=\"imgForm\" (ngSubmit)=\"enviarImagen()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\"> {{'color' | translate}}:</label><br>\r\n        <input type=\"color\" style=\"width: 100%\" formControlName=\"color\" name=\"color\" />\r\n      </div>   \r\n      <div class=\"form-group\">\r\n\r\n        <label class=\"control-label\" >{{'imagen' | translate}}:</label>\r\n        <app-file-upload formControlName=\"imagen\" (change)=\"preview('imagen',[2048,2048,10485760])\"></app-file-upload>\r\n        <div class=\"invalid-feedback\" style=\"display: block\" >\r\n          <ng-container *ngIf=\"hasError( 'imagen', 'required')\">{{'fmErrfileRequired' | translate}}</ng-container>\r\n          <ng-container *ngIf=\"hasError( 'imagen', 'requiredFileType')\">{{'fmErrfileImage' | translate}}</ng-container>\r\n        </div>\r\n      </div>                  \r\n      <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"btnDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">Guardar información</button>\r\n    </form>\r\n  </div>     \r\n  <div class=\"col-md-6\">\r\n      <div class=\"row\">\r\n          <div class=\"col justify-content-md-center\">\r\n              <label *ngIf=\"imgURL\" >Vista previa</label>\r\n              <br>\r\n              <img class=\"rounded img-fluid\" [src]=\"imgURL\"  *ngIf=\"imgURL\" alt=\"Imagen de perfil\">\r\n          </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/institucion/form-institucion/form-institucion.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/institucion/form-institucion/form-institucion.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vaW5zdGl0dWNpb24vZm9ybS1pbnN0aXR1Y2lvbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9pbnN0aXR1Y2lvbi9mb3JtLWluc3RpdHVjaW9uL2Zvcm0taW5zdGl0dWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/institucion/form-institucion/form-institucion.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/institucion/form-institucion/form-institucion.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormInstitucionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInstitucionComponent", function() { return FormInstitucionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_institucion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/institucion.service */ "./src/app/administracion/institucion/services/institucion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormInstitucionComponent = /** @class */ (function () {
    function FormInstitucionComponent(_usuarioService, _institucionService, router, route, formBuilder) {
        this._usuarioService = _usuarioService;
        this._institucionService = _institucionService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.estado = 0;
        this.btnDisabled = true;
        this.files = [];
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.global = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
    }
    Object.defineProperty(FormInstitucionComponent.prototype, "f", {
        get: function () { return this.imgForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormInstitucionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._institucionService.cambioHeader(this.jwt).subscribe(function (response) {
            console.log(response);
            _this.plataformaInstitucion = response['estilos'][0];
            _this.imgForm.get('color').setValue(_this.plataformaInstitucion.color);
            _this.imgURL = _this.global + _this.plataformaInstitucion.url_perfil;
        }, function (error) {
            console.log(error);
        });
        this.imgForm = this.formBuilder.group({
            imagen: ['', Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(0)],
            color: ['']
        });
    };
    FormInstitucionComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        console.log(this.files[0].relativePath);
        // for (const droppedFile of this.files) {
        // Is it a file?
        if (this.files[0].fileEntry.isFile) {
            var fileEntry = this.files[0].fileEntry;
            fileEntry.file(function (file) {
                // Here you can access the real file
                _this.preview(file, [1024, 243, 10485760]); // tamaño imagen
            });
        }
        else {
            // It was a directory (empty directories are added, otherwise only files)
            var fileEntry = this.files[0].fileEntry;
            console.log(this.files[0].relativePath, fileEntry);
        }
        // }
    };
    FormInstitucionComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    FormInstitucionComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    FormInstitucionComponent.prototype.preview = function (field, array) {
        var _this = this;
        if (!this.hasError(field, 'requiredFileType')) {
            var image = this.imgForm.get(field).value;
            this.imgFile = image;
            this.size = image.size;
            var reader_1 = new FileReader;
            reader_1.onload = function () {
                _this.imgURL = reader_1.result;
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
                img.src = reader_1.result.toString(); // This is the data URL
            };
            reader_1.readAsDataURL(image);
            // this.imgType.nativeElement.value = ""; 
        }
        //console.log(evt)
    };
    FormInstitucionComponent.prototype.hasError = function (field, error) {
        var control = this.imgForm.get(field);
        return control.dirty && control.hasError(error);
    };
    FormInstitucionComponent.prototype.enviarImagen = function () {
        var _this = this;
        if (this.plataformaInstitucion)
            this.crea = 0;
        else
            this.crea = 1;
        if (this.imgForm.invalid) {
            Object.keys(this.imgForm.controls).forEach(function (controlKey) {
                _this.imgForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (this.estado == 1) {
            this._institucionService.imagen(this.imgForm, this.crea, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.btnDisabled = true;
                    //esto es, para poder agregar la opción de edita
                    _this.plataformaInstitucion = 1;
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else
            alertify.error("Inserta una imagen válida");
        //this.estado = 0;
        this.imgFile = "";
    };
    FormInstitucionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-institucion',
            template: __webpack_require__(/*! ./form-institucion.component.html */ "./src/app/administracion/institucion/form-institucion/form-institucion.component.html"),
            styles: [__webpack_require__(/*! ./form-institucion.component.scss */ "./src/app/administracion/institucion/form-institucion/form-institucion.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_institucion_service__WEBPACK_IMPORTED_MODULE_2__["InstitucionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FormInstitucionComponent);
    return FormInstitucionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/institucion/institucion-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/institucion/institucion-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: InstitucionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionRoutingModule", function() { return InstitucionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _institucion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./institucion.component */ "./src/app/administracion/institucion/institucion.component.ts");
/* harmony import */ var _form_institucion_form_institucion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-institucion/form-institucion.component */ "./src/app/administracion/institucion/form-institucion/form-institucion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _institucion_component__WEBPACK_IMPORTED_MODULE_2__["InstitucionComponent"],
        children: [
            { path: '', redirectTo: 'form', pathMatch: 'full' },
            { path: 'form', component: _form_institucion_form_institucion_component__WEBPACK_IMPORTED_MODULE_3__["FormInstitucionComponent"] },
        ]
    }
];
var InstitucionRoutingModule = /** @class */ (function () {
    function InstitucionRoutingModule() {
    }
    InstitucionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InstitucionRoutingModule);
    return InstitucionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/institucion/institucion.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/institucion/institucion.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/institucion/institucion.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/institucion/institucion.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2luc3RpdHVjaW9uL2luc3RpdHVjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/institucion/institucion.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/institucion/institucion.component.ts ***!
  \*********************************************************************/
/*! exports provided: InstitucionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionComponent", function() { return InstitucionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstitucionComponent = /** @class */ (function () {
    function InstitucionComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = "Información de la institución";
        this._usuarioService.pushBreadcum(this.title, '/admin/institucion', 1);
    }
    InstitucionComponent.prototype.ngOnInit = function () {
    };
    InstitucionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-institucion',
            template: __webpack_require__(/*! ./institucion.component.html */ "./src/app/administracion/institucion/institucion.component.html"),
            styles: [__webpack_require__(/*! ./institucion.component.scss */ "./src/app/administracion/institucion/institucion.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], InstitucionComponent);
    return InstitucionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/institucion/institucion.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/institucion/institucion.module.ts ***!
  \******************************************************************/
/*! exports provided: InstitucionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionModule", function() { return InstitucionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _institucion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./institucion-routing.module */ "./src/app/administracion/institucion/institucion-routing.module.ts");
/* harmony import */ var _institucion_institucion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../institucion/institucion.component */ "./src/app/administracion/institucion/institucion.component.ts");
/* harmony import */ var _form_institucion_form_institucion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-institucion/form-institucion.component */ "./src/app/administracion/institucion/form-institucion/form-institucion.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
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
            declarations: [_institucion_institucion_component__WEBPACK_IMPORTED_MODULE_3__["InstitucionComponent"], _form_institucion_form_institucion_component__WEBPACK_IMPORTED_MODULE_4__["FormInstitucionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _institucion_routing_module__WEBPACK_IMPORTED_MODULE_2__["InstitucionRoutingModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"]
            ]
        })
    ], InstitucionModule);
    return InstitucionModule;
}());



/***/ }),

/***/ "./src/app/administracion/institucion/services/institucion.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/institucion/services/institucion.service.ts ***!
  \****************************************************************************/
/*! exports provided: InstitucionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitucionService", function() { return InstitucionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstitucionService = /** @class */ (function () {
    function InstitucionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    InstitucionService.prototype.imagen = function (form, crea, jwt) {
        var formData = new FormData();
        formData.append('fileToUpload', form.get('imagen').value);
        formData.append('color', form.get('color').value);
        formData.append('jwt', jwt);
        if (crea) {
            return this._httpClient.post(this.url + 'admin/InstitucionPlataforma/crea.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'admin/InstitucionPlataforma/edita.php', formData);
        }
    };
    InstitucionService.prototype.cambioHeader = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'admin/InstitucionPlataforma/consulta.php' + params);
    };
    InstitucionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InstitucionService);
    return InstitucionService;
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
//# sourceMappingURL=administracion-institucion-institucion-module.js.map