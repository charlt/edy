(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-perfil-perfil-module"],{

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

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circulo m-1\" [ngStyle]=\"{'background-color': color, 'width': anchoLogo, 'height': altoLogo}\"><span [ngStyle]=\"{'font-size': tamanoLetra}\">{{letrasLogo}}</span></div>"

/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circulo {\n  border-radius: 100%;\n  display: inline-block; }\n\n.circulo > span {\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  display: block;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvdGlwby11c3VhcmlvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ290aXBvLXVzdWFyaW9cXGxvZ290aXBvLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFFcEIsc0JBQXFCLEVBQ25COztBQUNIO0VBQ0MsYUFBWTtFQUNULGdCQUFlO0VBQ2xCLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3RpcG8tdXN1YXJpby9sb2dvdGlwby11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmN1bG8ge1xyXG5cdCBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgzOCwgMzgsIDIyNCwgMC43NCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gXHR9XHJcbi5jaXJjdWxvID4gc3BhbiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.component.ts ***!
  \***************************************************************************/
/*! exports provided: LogotipoUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogotipoUsuarioComponent", function() { return LogotipoUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogotipoUsuarioComponent = /** @class */ (function () {
    function LogotipoUsuarioComponent() {
    }
    LogotipoUsuarioComponent.prototype.ngOnChanges = function () {
        if (!this.color) {
            this.color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_1__["randomColor"])();
        }
        this.logo();
        this.radio = 100 + "%";
        this.altoLogo = this.alto + "px";
        this.anchoLogo = this.ancho + "px";
        this.tamanoLetra = this.tamLetra + "px";
    };
    LogotipoUsuarioComponent.prototype.logo = function () {
        this.letrasLogo = this.iniciales.substr(0, 2);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "iniciales", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "ancho", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "alto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "tamLetra", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LogotipoUsuarioComponent.prototype, "color", void 0);
    LogotipoUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logotipo-usuario',
            template: __webpack_require__(/*! ./logotipo-usuario.component.html */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.html"),
            styles: [__webpack_require__(/*! ./logotipo-usuario.component.scss */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogotipoUsuarioComponent);
    return LogotipoUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/logotipo-usuario/logotipo-usuario.module.ts ***!
  \************************************************************************/
/*! exports provided: LogotipoUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogotipoUsuarioModule", function() { return LogotipoUsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logotipo-usuario.component */ "./src/app/components/logotipo-usuario/logotipo-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogotipoUsuarioModule = /** @class */ (function () {
    function LogotipoUsuarioModule() {
    }
    LogotipoUsuarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__["LogotipoUsuarioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_logotipo_usuario_component__WEBPACK_IMPORTED_MODULE_2__["LogotipoUsuarioComponent"]]
        })
    ], LogotipoUsuarioModule);
    return LogotipoUsuarioModule;
}());



/***/ }),

/***/ "./src/app/master/perfil/mis-datos/mis-datos.component.html":
/*!******************************************************************!*\
  !*** ./src/app/master/perfil/mis-datos/mis-datos.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 animated slideInUp\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form [formGroup]=\"datosForm\" (ngSubmit)=\"enviarDatos()\">  \r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'nombrePerfil' | translate}}</label>\r\n          <input formControlName=\"nombrePerfil\" class=\"form-control\" placeholder=\"{{'nombrePerfil' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"fd.nombrePerfil.invalid && fd.nombrePerfil.touched\">\r\n              {{'fmErrName' | translate}}\r\n          </span>           \r\n        </div>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'apPatPerfil' | translate}}</label>\r\n          <input formControlName=\"apPatPerfil\" class=\"form-control\" placeholder=\"{{'apPatPerfil' | translate}}\" type=\"text\" required autocomplete=\"off\">         \r\n          <span class=\"invalidText\" *ngIf=\"fd.apPatPerfil.invalid && fd.apPatPerfil.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>                 \r\n        </div>    \r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">{{'apMatPerfil' | translate}}</label>\r\n          <input formControlName=\"apMatPerfil\" class=\"form-control\" placeholder=\"{{'apMatPerfil' | translate}}\" type=\"text\" required autocomplete=\"off\">         \r\n          <span class=\"invalidText\" *ngIf=\"fd.apMatPerfil.invalid && fd.apMatPerfil.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>                 \r\n        </div>      \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">{{'curpPerfil' | translate}}</label>\r\n          <input  pattern=\"^([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)$\"\r\n          type=\"text\"  class=\"form-control\" formControlName=\"curpPerfil\" placeholder=\"{{'curpPerfil' | translate}}\">\r\n          <span class=\"invalidText\" *ngIf=\"fd.curpPerfil.invalid && fd.curpPerfil.touched\">\r\n              {{'fmErrCURP' | translate}}\r\n          </span>                         \r\n        </div> \r\n        <div class=\"form-group\">                               \r\n            <label class=\"control-label\">Email</label>\r\n            <input formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"text\">          \r\n        </div>\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\">Celular</label>\r\n          <input formControlName=\"celular\" class=\"form-control\" placeholder=\"Celular\" type=\"text\">          \r\n        </div>\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n      </form><br>\r\n      <form *ngIf=\"curriculumFm\" [formGroup]=\"curriculumForm\" (ngSubmit)=\"enviarCurriculum()\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Currículum</label>\r\n          <app-file-upload formControlName=\"curriculum\"></app-file-upload>\r\n        </div><br>\r\n          <button class=\"btn btn-primary pull-right\" type=\"submit\">Enviar currículum</button>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-6\"> \r\n      <form (ngSubmit)=\"enviarImagen()\">\r\n        <div class=\"form-group\">                    \r\n          <label class=\"h5\">{{'fotoPerfil' | translate}}</label><br>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div *ngIf=\"usuario\" class=\"row justify-content-md-center col-md-6\">\r\n              <app-logotipo-usuario *ngIf=\"usuario.nombre && usuario.url_perfil == null \" [iniciales]=\"usuario.nombre\" [alto]=\"120\" [ancho]=\"120\" [tamLetra]=\"72\" [color]=\"color\"></app-logotipo-usuario>\r\n              <img *ngIf=\"usuario.nombre && usuario.url_perfil !== null \" class=\"rounded img-fluid\" [src]=\"imgURL\" alt=\"Imagen de perfil\">\r\n            </div>\r\n          </div>\r\n            <br>\r\n            <div class=\"justify-content-center\">\r\n                <ngx-file-drop dropZoneLabel=\"Arrastra tu imagen aqui\" (onFileDrop)=\"dropped($event)\"\r\n                (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\" multiple=\"false\">\r\n                    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\"  accept='image/*'>\r\n                      Arrastra tu imagen aquí o\r\n                      <button class=\"btn btn-light ml-1\" type=\"button\" (click)=\"openFileSelector()\"> Selecciona tu imagen aquí</button>\r\n                    </ng-template>\r\n                </ngx-file-drop>              \r\n            </div>\r\n            <br>           \r\n            <!-- <input #imagen type=\"file\" formControlName=\"imgPerfil\" accept='image/*' (change)=\"preview($event, [800,600,10485760], 0)\" name=\"fileToUpload\"/><br> -->\r\n            <!-- <span class=\"invalidText\" *ngIf=\"f.imgPerfil.invalid && f.imgPerfil.touched\">\r\n                {{'fmErrImage' | translate}}\r\n            </span>                 -->\r\n        </div>                     \r\n        <br>\r\n        <button [disabled]=\"btnDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n      </form> \r\n      <br><br>\r\n      \r\n      <div>\r\n        <app-password [id_usuario]=\"id_usuario\"></app-password>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master/perfil/mis-datos/mis-datos.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/master/perfil/mis-datos/mis-datos.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3BlcmZpbC9taXMtZGF0b3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyL3BlcmZpbC9taXMtZGF0b3MvbWlzLWRhdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/master/perfil/mis-datos/mis-datos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/master/perfil/mis-datos/mis-datos.component.ts ***!
  \****************************************************************/
/*! exports provided: MisDatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisDatosComponent", function() { return MisDatosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/perfil.service */ "./src/app/master/perfil/services/perfil.service.ts");
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MisDatosComponent = /** @class */ (function () {
    function MisDatosComponent(formBuilder, _catalogoService, _usuarioService, _perfilService, router, route) {
        this.formBuilder = formBuilder;
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this._perfilService = _perfilService;
        this.router = router;
        this.route = route;
        this.estado = 0;
        this.btnDisabled = true;
        this.curriculumFm = false;
        this.datosPersonalesDeshabilidados = false;
        this.files = [];
        this.title = 'Mi información personal';
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.identity = this._usuarioService.getIdentity();
        this.rolUser = this._usuarioService.getRol();
    }
    Object.defineProperty(MisDatosComponent.prototype, "f", {
        get: function () { return this.perfilForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MisDatosComponent.prototype, "fd", {
        get: function () { return this.datosForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MisDatosComponent.prototype, "pf", {
        get: function () { return this.passForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MisDatosComponent.prototype, "cf", {
        get: function () { return this.curriculumForm.controls; },
        enumerable: true,
        configurable: true
    });
    MisDatosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.id_usuario = this.identity.usuario_id;
        if (this.rolUser.rol_id == 3) {
            this.curriculumFm = true;
        }
        if (this.rolUser.rol_id == 2) {
            this.datosPersonalesDeshabilidados = true;
        }
        this.color = this.identity.color;
        this._usuarioService.miconsulta(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.usuario = response['usuario'];
                if (response['usuario'].url_perfil)
                    _this.imgURL = _this.url + _this.usuario.url_perfil;
                _this.datosForm.get("nombrePerfil").setValue(_this.usuario.nombre);
                _this.datosForm.get("apPatPerfil").setValue(_this.usuario.primer_apellido);
                _this.datosForm.get("apMatPerfil").setValue(_this.usuario.segundo_apellido);
                _this.datosForm.get("curpPerfil").setValue(_this.usuario.curp);
                _this.datosForm.get("email").setValue(_this.usuario.email);
                _this.datosForm.get("celular").setValue(_this.usuario.celular);
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogoService.consultaRol(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.roles = response['rol'];
            }
        }, function (error) {
            console.log(error);
        });
        this.datosForm = this.formBuilder.group({
            nombrePerfil: [{ "value": '', disabled: this.datosPersonalesDeshabilidados }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,],
            apPatPerfil: [{ "value": '', disabled: this.datosPersonalesDeshabilidados }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apMatPerfil: [{ "value": '', disabled: this.datosPersonalesDeshabilidados }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            curpPerfil: [{ "value": '', disabled: this.datosPersonalesDeshabilidados }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // this.perfilForm = this.formBuilder.group({
        //   imgPerfil: ['', Validators.required]
        // });
        this.passForm = this.formBuilder.group({
            passPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmpassPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.curriculumForm = this.formBuilder.group({
            curriculum: ['', Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_7__["requiredFileType"])(0)],
        });
    };
    MisDatosComponent.prototype.enviarCurriculum = function () {
        this._usuarioService.guardaCurriculum(this.jwt, this.curriculumForm).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else
                alertify.error(response['msg']);
        }, function (error) {
            console.log(error);
        });
    };
    MisDatosComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        console.log(this.files[0].relativePath);
        // for (const droppedFile of this.files) {
        // Is it a file?
        if (this.files[0].fileEntry.isFile) {
            var fileEntry = this.files[0].fileEntry;
            fileEntry.file(function (file) {
                // Here you can access the real file
                _this.preview(file, [800, 600, 10485760], 1);
                /**
                // You could upload it like this:
                const formData = new FormData()
                formData.append('logo', file, relativePath)
       
                // Headers
                const headers = new HttpHeaders({
                  'security-token': 'mytoken'
                })
       
                this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
                .subscribe(data => {
                  // Sanitized logo returned from backend
                })
                **/
            });
        }
        else {
            // It was a directory (empty directories are added, otherwise only files)
            var fileEntry = this.files[0].fileEntry;
            console.log(this.files[0].relativePath, fileEntry);
        }
        // }
    };
    MisDatosComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    MisDatosComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    MisDatosComponent.prototype.preview = function (evt, array, id) {
        var _this = this;
        console.log(evt);
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
            this.imgURL = this.url + 'assets/archivos_alumno/0/imagen_perfil/default.png';
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
                _this.estado = 1;
                _this.btnDisabled = false;
                // alertify.success('Imagen')
                //     this.width = img.width;
                //     this.height = img.height;
                //     if (this.size <= array[2]) {            
                //       if (this.width < array[0] && this.height < array[1]){
                //         alertify.success("Tamaño de imagen correcto");
                //         this.estado = 1;
                //         this.btnDisabled = false;              
                //       }
                //       else{
                //         alertify.error("El tamaño de la imagen no debe de pasar  de "+array[0]+"x"+array[1]+"px");
                //         this.estado = 0;
                //         this.imgURL = this.url + 'assets/archivos_alumno/0/imagen_perfil/default.png';   
                //       }
                //     }else{
                //       alertify.error("El tamaño de la imagen es demasiado grande");
                //       this.estado = 0;
                //     }
            };
            img.src = reader.result.toString(); // This is the data URL
        };
        reader.readAsDataURL(image);
        // this.imgType.nativeElement.value = ""; 
    };
    MisDatosComponent.prototype.enviarImagen = function () {
        // stop here if form is invalid      
        // if (this.perfilForm.invalid) {
        //   Object.keys(this.perfilForm.controls).forEach( controlKey => {
        //     this.perfilForm.controls[controlKey].markAsTouched();
        //   });
        //   return;
        // }
        var _this = this;
        if (this.estado == 1) {
            this._perfilService.enviarImagen(this.identity.usuario_id, this.jwt, this.imgFile).subscribe(function (response) {
                _this.identity.url_perfil = response['url'];
                var _identity = JSON.stringify(_this.identity);
                localStorage.removeItem('identity');
                localStorage.setItem('identity', _identity);
                if (response && response['status']) {
                    _this.btnDisabled = true;
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
        // if (this.perfilForm.invalid) {
        //   return;
        // }   
        this.estado = 0;
        this.imgFile = "";
    };
    MisDatosComponent.prototype.enviarDatos = function () {
        var _this = this;
        if (this.datosForm.invalid) {
            Object.keys(this.datosForm.controls).forEach(function (controlKey) {
                _this.datosForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._perfilService.editarDatos(this.datosForm, this.jwt, this.identity, this.rolUser, this.usuario).subscribe(function (response) {
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
    MisDatosComponent.prototype.enviarPass = function () {
        var _this = this;
        if (this.passForm.invalid) {
            Object.keys(this.passForm.controls).forEach(function (controlKey) {
                _this.passForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        var pass = this.passForm.get("passPerfil").value;
        var confirmPass = this.passForm.get("confirmpassPerfil").value;
        if (pass == confirmPass) {
            this._perfilService.editarPass(pass, this.jwt, this.identity.usuario_id).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.passForm = _this.formBuilder.group({
                        passPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        confirmpassPerfil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error("Las contraseñas no coinciden");
        }
    };
    MisDatosComponent.prototype.confirmPass = function () {
        var pass = this.passForm.get('passPerfil').value;
        var confirm = this.passForm.get('confirmpassPerfil').value;
        if (pass == confirm) {
            this.estadoPass = true;
        }
        else {
            this.estadoPass = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imagen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MisDatosComponent.prototype, "imgType", void 0);
    MisDatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mis-datos',
            template: __webpack_require__(/*! ./mis-datos.component.html */ "./src/app/master/perfil/mis-datos/mis-datos.component.html"),
            styles: [__webpack_require__(/*! ./mis-datos.component.scss */ "./src/app/master/perfil/mis-datos/mis-datos.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MisDatosComponent);
    return MisDatosComponent;
}());



/***/ }),

/***/ "./src/app/master/perfil/perfil-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/master/perfil/perfil-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRoutingModule", function() { return PerfilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component */ "./src/app/master/perfil/perfil.component.ts");
/* harmony import */ var _mis_datos_mis_datos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-datos/mis-datos.component */ "./src/app/master/perfil/mis-datos/mis-datos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"],
        children: [
            { path: '', redirectTo: 'mis-datos', pathMatch: 'full' },
            { path: 'mis-datos', component: _mis_datos_mis_datos_component__WEBPACK_IMPORTED_MODULE_3__["MisDatosComponent"] }
        ]
    }
];
var PerfilRoutingModule = /** @class */ (function () {
    function PerfilRoutingModule() {
    }
    PerfilRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PerfilRoutingModule);
    return PerfilRoutingModule;
}());



/***/ }),

/***/ "./src/app/master/perfil/perfil.component.html":
/*!*****************************************************!*\
  !*** ./src/app/master/perfil/perfil.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/master/perfil/perfil.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/master/perfil/perfil.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyL3BlcmZpbC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXIvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/master/perfil/perfil.component.ts":
/*!***************************************************!*\
  !*** ./src/app/master/perfil/perfil.component.ts ***!
  \***************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Perfil";
        this._usuarioService.pushBreadcum(this.title, '/admin/perfil', 1);
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent.prototype.onActivate = function (e) {
        this.breadcum = this._usuarioService.getBreadcum();
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/master/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.scss */ "./src/app/master/perfil/perfil.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/master/perfil/perfil.module.ts":
/*!************************************************!*\
  !*** ./src/app/master/perfil/perfil.module.ts ***!
  \************************************************/
/*! exports provided: PerfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/master/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.component */ "./src/app/master/perfil/perfil.component.ts");
/* harmony import */ var _mis_datos_mis_datos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mis-datos/mis-datos.component */ "./src/app/master/perfil/mis-datos/mis-datos.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_password_password_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/password/password.module */ "./src/app/components/password/password.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PerfilModule = /** @class */ (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilComponent"], _mis_datos_mis_datos_component__WEBPACK_IMPORTED_MODULE_4__["MisDatosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _perfil_routing_module__WEBPACK_IMPORTED_MODULE_2__["PerfilRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_9__["LogotipoUsuarioModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"],
                src_app_components_password_password_module__WEBPACK_IMPORTED_MODULE_11__["PasswordModule"]
            ]
        })
    ], PerfilModule);
    return PerfilModule;
}());



/***/ }),

/***/ "./src/app/master/perfil/services/perfil.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/master/perfil/services/perfil.service.ts ***!
  \**********************************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
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




var PerfilService = /** @class */ (function () {
    function PerfilService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PerfilService.prototype.enviarImagen = function (id_perfil, jwt, file) {
        var formData = new FormData();
        formData.append('id_usuario', id_perfil);
        formData.append('imagen', file);
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/general/usuario/imagen_perfil.php', formData);
    };
    PerfilService.prototype.editarDatos = function (form, jwt, usuario, rol, datos) {
        console.log(datos);
        var formData = new FormData();
        formData.append('nombre', form.get('nombrePerfil').value);
        formData.append('primer_apellido', form.get('apPatPerfil').value);
        formData.append('segundo_apellido', form.get('apMatPerfil').value);
        formData.append('curp', form.get('curpPerfil').value);
        formData.append('celular', form.get('celular').value);
        formData.append('email', form.get('email').value);
        formData.append('rfc', datos.rfc);
        formData.append('fecha_nacimiento', datos.fecha_nacimiento);
        // formData.append('email', usuario.email);
        formData.append('id_sexo', datos.sexo_id);
        formData.append('id_otros_datos', '1');
        formData.append('id_persona', datos.persona_id);
        formData.append('id_rol', rol.rol_id);
        formData.append('id_rol_old', rol.rol_id);
        formData.append('nombre_usuario', usuario.usuario);
        formData.append('estatus', '1');
        formData.append('id_usuario', usuario.usuario_id);
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/general/usuario/edita.php', formData);
    };
    PerfilService.prototype.editarPass = function (pass, jwt, id_usuario) {
        var formData = new FormData();
        formData.append('contraseña', pass);
        formData.append('id_usuario', id_usuario);
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/general/usuario/edita_contrasena.php', formData);
    };
    PerfilService.prototype.tokenPass = function (email) {
        var formData = new FormData();
        formData.append('email', email);
        return this._httpClient.post(this.url + '/general/plataforma/tokenPass.php', formData);
    };
    PerfilService.prototype.confirmToken = function (token) {
        var formData = new FormData();
        formData.append('token', token);
        return this._httpClient.post(this.url + '/general/plataforma/confirmaToken.php', formData);
    };
    PerfilService.prototype.resetPass = function (token, pass, id_usuario) {
        var formData = new FormData();
        formData.append('token', token);
        formData.append('pass', pass);
        formData.append('usuario_id', id_usuario);
        return this._httpClient.post(this.url + '/general/plataforma/reestableceContraseña.php', formData);
    };
    PerfilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PerfilService);
    return PerfilService;
}());



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
//# sourceMappingURL=master-perfil-perfil-module.js.map