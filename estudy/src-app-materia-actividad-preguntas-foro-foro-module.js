(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-foro-foro-module"],{

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

/***/ "./src/app/materia/actividad/preguntas/foro/foro.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/foro/foro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!show\">\r\n  <div class=\"col-md-12\">\r\n    <h5>Foro</h5>\r\n    <div>\r\n      <button *ngIf=\"tipoResp && rol.rol_id == 3\" class=\"btn btn-primary btnResp\" (click)=\"cambiaResp(0)\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i> Ver todas las respuestas del foro</button>\r\n      <button *ngIf=\"!tipoResp && rol.rol_id == 3\" class=\"btn btn-primary btnResp\" (click)=\"cambiaResp(1)\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Ver respuestas del alumno</button>\r\n    </div><br>\r\n     <div *ngIf=\"rol.rol_id != 3\"><!-- condición -->\r\n      <ckeditor [(ngModel)]=\"respuestaInicial\"\r\n      [config]=\"{allowedContent : true , toolbar: simpleEditor, extraPlugins: 'justify' }\"\r\n      (ready)=\"editorCargado($event)\" name=\"ckeditor\"></ckeditor><br>\r\n    <form [formGroup]=\"foroForm\">\r\n      <div class=\"custom-control custom-checkbox; let k = index\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox_{{idPregunta}}\" (click)=\"toggle(0)\">\r\n        <label class=\"custom-control-label\" for=\"checkbox_{{idPregunta}}\">¿Deseas subir un archivo adjunto?</label>\r\n        <div [hidden]=\"buttonName1\"><br>\r\n          <app-file-upload formControlName=\"contenido\"></app-file-upload><br>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"rol.rol_id != 3 && idEstatusActividad != 1 \" class=\"custom-control custom-checkbox; let k = index\">\r\n        <input formControlName=\"solicitaRevision\" type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxRevision{{idPregunta}}\">\r\n        <label class=\"custom-control-label\" for=\"checkboxRevision{{idPregunta}}\">Solicitar revisión del docente</label>\r\n      </div>\r\n    </form>\r\n    <div class=\"col \">\r\n      <button class=\"btn btn-success pull-right\" (click)=\"enviarInformacion(0)\"> Enviar respuesta</button>\r\n      <!-- respuesta -->\r\n    </div>\r\n    </div><br>\r\n    <hr>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" *ngFor=\"let _respuesta of respuestas; let i = index; \">\r\n      <ul>\r\n        <li class=\"row m-3 alert\"\r\n          [ngClass]=\" _respuesta.flg_moderador == 1 ? 'alert-warning': (persona_id == _respuesta.persona_id && _respuesta.flg_moderador != 1 ? 'alert-info' : '')\">\r\n          <div class=\"col-5\">\r\n            <div class=\"row\" *ngIf=\"_respuesta.flg_moderador == 1\">\r\n              <app-logotipo-usuario [iniciales]=\"_respuesta.nombre\" [ancho]=\"ancho\" [alto]=\"alto\"\r\n                [color]=\"_respuesta.color\"></app-logotipo-usuario><b class=\"nombre\"\r\n                [innerHTML]=\"_respuesta.nombre \"></b><b class=\"nombre\"> (Moderador)</b> <span class=\"time\"> -\r\n                {{horaPregunta(_respuesta.fecha_creacion)}}</span>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"_respuesta.flg_moderador != 1\">\r\n              <app-logotipo-usuario [iniciales]=\"_respuesta.nombre\" [ancho]=\"ancho\" [alto]=\"alto\"\r\n                [color]=\"_respuesta.color\"></app-logotipo-usuario><b class=\"nombre\"\r\n                [innerHTML]=\"_respuesta.nombre \"></b><span class=\"time\"> -\r\n                {{horaPregunta(_respuesta.fecha_creacion)}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-7 \">\r\n            <button class=\"btn btn-primary pull-right responder\" (click)=\"btnDesplegar(i)\"><i\r\n                class=\"fa fa-reply-all\"></i></button>\r\n            <button *ngIf=\"persona_id == _respuesta.persona_id\" class=\"btn btn-warning pull-right responder\"\r\n              (click)=\"btnEditar(i)\"><i class=\"fa fa-pencil\"></i></button>\r\n          </div>\r\n          <div class=\"col-12\" *ngIf=\"!_respuesta.statusTextEdita && _respuesta.statusTextEdita !=1\">\r\n            <p class=\"respuesta\" id=\"respuesta\" [innerHTML]=\"_respuesta.respuesta\"></p>\r\n            <app-archivo class=\"archivo\" *ngIf=\"_respuesta.contenido\" [urlBase]=\"_respuesta.contenido\"></app-archivo>\r\n          </div>\r\n          <div class=\"col-12\" *ngIf=\"_respuesta.statusTextEdita\">\r\n            <ckeditor [(ngModel)]=\"respuesta\"\r\n              [config]=\"{allowedContent : true , toolbar: simpleEditor, extraPlugins: 'justify' }\" name=\"ckeditor\">\r\n            </ckeditor><br>\r\n            <form [formGroup]=\"foroForm\">\r\n              <!-- <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked1{{idPregunta}}\"\r\n                  (click)=\"toggle(1)\">\r\n                <label class=\"custom-control-label\" for=\"defaultUnchecked1{{idPregunta}}\">¿Deseas subir un archivo adjunto?</label>\r\n                <div [hidden]=\"buttonName2 \"><br> \r\n                  <app-file-upload formControlName=\"contenido\"></app-file-upload><br>\r\n                </div>\r\n              </div> -->\r\n            </form>\r\n            <button class=\"btn btn-success pull-right\" (click)=\"enviarInformacion(1)\" tooltip=\"hola\">Enviar respuesta</button><br><!-- sub -->\r\n          </div>\r\n        </li>\r\n        <span style=\"visibility: hidden;\" id=\"{{_respuesta.respuesta_id}}\">.</span>\r\n        <div class=\"row ml-5\">\r\n          <div class=\"col\" *ngIf=\"_respuesta.statusTextArea\">\r\n            <ckeditor [(ngModel)]=\"respuesta\"\r\n              [config]=\"{allowedContent : true , toolbar: simpleEditor, extraPlugins: 'justify' }\" name=\"ckeditor\">\r\n            </ckeditor><br>\r\n            <form [formGroup]=\"foroForm\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked2{{idPregunta}}\"\r\n                  (click)=\"toggle(2)\">\r\n                <label class=\"custom-control-label\" for=\"defaultUnchecked2{{idPregunta}}\">¿Deseas subir un archivo adjunto?</label>\r\n                <div [hidden]=\"buttonName3\"><br>\r\n                  <app-file-upload formControlName=\"contenido\"></app-file-upload><br>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"rol.rol_id != 3\" class=\"custom-control custom-checkbox\">\r\n                <input formControlName=\"solicitaRevision\" type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxRevision{{_respuesta.respuesta_id}}\">\r\n                <label class=\"custom-control-label\" for=\"checkboxRevision{{_respuesta.respuesta_id}}\">Solicitar revisión del docente</label>\r\n              </div>\r\n            </form>\r\n            <button class=\"btn btn-success pull-right responder\" (click)=\"enviarInformacion(1)\">Enviar\r\n              respuesta</button><br>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mx-4\" *ngFor=\"let sub_respuesta of _respuesta.sub_respuesta; let j = index \">\r\n          <div class=\"col\">\r\n            <ul>\r\n              <li class=\"row ml-3 borde alert\"\r\n                [ngClass]=\"sub_respuesta.flg_moderador == 1 ? 'alert-warning':(persona_id == sub_respuesta.persona_id && sub_respuesta.flg_moderador != 1 ? 'alert-info': '')  \">\r\n                <div class=\"col-6\">\r\n                  <div class=\"row\" *ngIf=\"sub_respuesta.flg_moderador == 1\">\r\n                    <app-logotipo-usuario [iniciales]=\"sub_respuesta.nombre\" [ancho]=\"ancho + 'px'\" [alto]=\"alto + 'px'\"\r\n                      [color]=\"sub_respuesta.color\"></app-logotipo-usuario><b class=\"nombre\"\r\n                      [innerHTML]=\"sub_respuesta.nombre\"></b><span class=\"time\"> (Moderador) -\r\n                      {{horaPregunta(sub_respuesta.fecha_creacion)}}</span>\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"sub_respuesta.flg_moderador != 1\">\r\n                    <app-logotipo-usuario [iniciales]=\"sub_respuesta.nombre\" [ancho]=\"ancho + 'px'\" [alto]=\"alto + 'px'\"\r\n                      [color]=\"sub_respuesta.color\"></app-logotipo-usuario><b class=\"nombre\"\r\n                      [innerHTML]=\"sub_respuesta.nombre\"></b><span class=\"time\"> -\r\n                      {{horaPregunta(sub_respuesta.fecha_creacion)}}</span>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"persona_id == sub_respuesta.persona_id\" class=\"col-6\">\r\n                  <button class=\"btn btn-warning pull-right responder\" (click)=\"btnEditarSub(i, j)\"><i\r\n                      class=\"fa fa-pencil\"></i></button>\r\n                </div>\r\n                <div class=\"col-12\" *ngIf=\"!sub_respuesta.statusTextEdita\">\r\n                  <p [innerHTML]=\"sub_respuesta.respuesta\"></p>\r\n                  <app-archivo class=\" archivo\" *ngIf=\"sub_respuesta.contenido && sub_respuesta.statusTextEdita != 1\"\r\n                    [urlBase]=\"sub_respuesta.contenido\"></app-archivo>\r\n                </div>\r\n              </li>\r\n              <div *ngIf=\"sub_respuesta.statusTextEdita\">\r\n                <!-- Sub respuesta -->\r\n                <ckeditor [(ngModel)]=\"respuesta\"\r\n                  [config]=\"{allowedContent : true , toolbar: simpleEditor, extraPlugins: 'justify' }\" name=\"ckeditor\">\r\n                </ckeditor><br>\r\n                <form [formGroup]=\"foroForm\">\r\n                  <!-- <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked3{{idPregunta}}\"\r\n                      (click)=\"toggle(3)\">\r\n                    <label class=\"custom-control-label\" for=\"defaultUnchecked3{{idPregunta}}\">¿Deseas subir un adjunto?</label>\r\n                    <div [hidden]=\"buttonName4\"><br>\r\n                      <app-file-upload formControlName=\"contenido\" class=\"archivo\"></app-file-upload><br>\r\n                    </div>\r\n                  </div> -->\r\n                  <div *ngIf=\"rol.rol_id != 3\" class=\"custom-control custom-checkbox\">\r\n                    <input formControlName=\"solicitaRevision\" type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxRevision{{sub_respuesta.respuesta_id}}\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxRevision{{sub_respuesta.respuesta_id}}\">Solicitar revisión del docente</label>\r\n                  </div>\r\n                </form>\r\n                <button class=\"btn btn-success pull-right\" (click)=\"enviarInformacion(1)\">Enviar respuesta</button><br>\r\n              </div>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </ul>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/foro/foro.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/foro/foro.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".time {\n  color: rgba(85, 87, 87, 0.479);\n  font-size: small;\n  margin-top: 7px;\n  margin-left: 2px; }\n\n.usuario {\n  color: cornflowerblue; }\n\n.borde {\n  border-left: #3f76c9 2px solid; }\n\nli {\n  margin: 0px;\n  padding: 0px; }\n\n.responder {\n  margin-top: 3px; }\n\n.editar {\n  margin-left: 752px; }\n\n.nombre {\n  margin-top: 5px; }\n\n.btnResp {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL2Zvcm8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcYWN0aXZpZGFkXFxwcmVndW50YXNcXGZvcm9cXGZvcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBOEI7RUFDOUIsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksc0JBQ0osRUFBQzs7QUFDRDtFQUNDLCtCQUF3QyxFQUN4Qzs7QUFDRDtFQUNDLFlBQVc7RUFDWCxhQUFZLEVBQ1o7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL2Zvcm8vZm9yby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1le1xyXG4gICAgY29sb3I6IHJnYmEoODUsIDg3LCA4NywgMC40NzkpO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnVzdWFyaW97XHJcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWVcclxufVxyXG4uYm9yZGUge1xyXG5cdGJvcmRlci1sZWZ0OiByZ2IoNjMsIDExOCwgMjAxKSAycHggc29saWQ7XHJcbn1cclxubGkge1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcdFxyXG59XHJcbi5yZXNwb25kZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5lZGl0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUycHg7XHJcbn1cclxuLm5vbWJyZXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJ0blJlc3B7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy8gZGl2e1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNDI1cHgpIHtcclxuICAgIFxyXG4vLyAgICAgLm14LTQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5wdWxsLXJpZ2h0e1xyXG4vLyAgICAgICAgIGZsb2F0OiBub25lXHJcbi8vICAgICB9XHJcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/foro/foro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/foro/foro.component.ts ***!
  \********************************************************************/
/*! exports provided: ForoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoComponent", function() { return ForoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _foro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foro.service */ "./src/app/materia/actividad/preguntas/foro/foro.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var _components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForoComponent = /** @class */ (function () {
    function ForoComponent(formBuilder, _foroService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._foroService = _foroService;
        this._usuarioService = _usuarioService;
        this.simpleEditor = _models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__["simpleEditor"];
        this.respuestas = new Array();
        this.numRespuestas = 0;
        this.tipoResp = 0;
        this.buttonName1 = true;
        this.buttonName2 = true;
        this.buttonName3 = true;
        this.buttonName4 = true;
        this.selectAlumno = [];
        this.muestraCK = true;
        this.show = false;
        this.tiempo = new Date();
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ForoComponent.prototype, "f", {
        get: function () { return this.foroForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForoComponent.prototype.ngOnInit = function () {
        this.pregunta = this.Data.pregunta;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.idEstatusActividad = this.Data.idEstatusActividad;
        this.idAlumno = this.Data.idAlumno;
        this.rol = this._usuarioService.getRol();
        this.ancho = 25;
        this.alto = 25;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.persona_id = this.identity.persona_id;
        this.idPregunta = this.pregunta.pregunta_id;
        this.foroForm = this.formBuilder.group({
            contenido: ['', Object(_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(0)],
            solicitaRevision: [this.idEstatusActividad == '1' && this.rol.rol_id == '2' ? true : false]
        });
        if (this.rol.rol_id == 3) {
            this.editorCargado(0);
            this.cambiaResp(1);
        }
        else {
            this.setRespuestas();
        }
    };
    ForoComponent.prototype.setRespuestas = function () {
        var _this = this;
        var datosForo = this.pregunta.arreglo_reactivos;
        if (datosForo.respuesta) {
            if (this.tipoResp == 0) {
                this.respuestas = datosForo['respuesta'];
            }
            else if (this.tipoResp == 1) {
                this.respuestas = [];
                var _respuestas = datosForo['respuesta'];
                _respuestas.forEach(function (_respuesta) {
                    if (_respuesta.persona_id == _this.idAlumno || _respuesta.persona_id == _this.persona_id) {
                        _this.respuestas.push(_respuesta);
                        _this.numRespuestas++;
                    }
                });
            }
        }
    };
    ForoComponent.prototype.toggle = function (check) {
        if (check == 0) {
            this.buttonName1 = !this.buttonName1;
        }
        if (check == 1) {
            this.buttonName2 = !this.buttonName2;
        }
        if (check == 2) {
            this.buttonName3 = !this.buttonName3;
        }
        if (check == 3) {
            this.buttonName4 = !this.buttonName4;
        }
    };
    ForoComponent.prototype.btnDesplegar = function (index) {
        var id;
        if (!this.respuestas[index].statusTextArea) {
            this.respuestas[index].statusTextArea = 1;
            this.respuestas[index].statusTextEdita = 0;
            this.respuesta = "";
            this.respuesta_padre_id = this.respuestas[index].respuesta_id;
            this.id_respuesta = null;
            // conversion
            id = this.respuestas[index].respuesta_id.toString();
            document.getElementById(id).scrollIntoView();
        }
        else {
            this.respuestas[index].statusTextArea = 0;
        }
    };
    ForoComponent.prototype.btnEditar = function (index) {
        if (!this.respuestas[index].statusTextEdita) {
            this.respuestas[index].statusTextEdita = 1;
            this.respuestas[index].statusTextArea = 0;
            this.id_respuesta = this.respuestas[index].respuesta_id;
            this.respuesta = this.respuestas[index].respuesta;
            this.respuesta_padre_id = null;
        }
        else {
            this.respuestas[index].statusTextEdita = 0;
        }
    };
    ForoComponent.prototype.btnEditarSub = function (indexi, indexj) {
        if (!this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita) {
            this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita = 1;
            this.id_respuesta = this.respuestas[indexi].sub_respuesta[indexj].respuesta_id;
            //this.persona_id = this.respuestas[indexi].sub_respuesta[indexj].persona_id
            this.respuesta = this.respuestas[indexi].sub_respuesta[indexj].respuesta;
            this.respuesta_padre_id = this.respuestas[indexi].pregunta_id;
        }
        else {
            this.respuestas[indexi].sub_respuesta[indexj].statusTextEdita = 0;
        }
    };
    ForoComponent.prototype.enviarInformacion = function (diff) {
        var _this = this;
        if (diff == 0) {
            if (this.respuestaInicial != "") {
                this.respuesta_padre_id = null;
                this._foroService.insertaRespuesta(this.foroForm, this.idPregunta, this.respuestaInicial, this.respuesta_padre_id, this.id_respuesta, this.idMateriaFechaActividad, this.rol.rol_id).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.consulta();
                        _this.respuestaInicial = "";
                        scrollTo(0, 99999);
                        _this.foroForm.get('contenido').setValue('');
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                alertify.error('Ingresa una respuesta');
            }
        }
        if (diff == 1) {
            if (this.respuesta != "") {
                this._foroService.insertaRespuesta(this.foroForm, this.idPregunta, this.respuesta, this.respuesta_padre_id, this.id_respuesta, this.idMateriaFechaActividad, this.rol.rol_id).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.consulta();
                        _this.foroForm.get('contenido').setValue('');
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                    _this.foroForm.reset('contenido');
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                alertify.error('Ingresa una respuesta');
            }
        }
    };
    ForoComponent.prototype.cambiaResp = function (_tipoResp) {
        this.tipoResp = _tipoResp;
        // this.consulta();
        this.setRespuestas();
    };
    ForoComponent.prototype.consulta = function () {
        var _this = this;
        var contador = 0;
        this._foroService.consultaRespuesta(this.idPregunta, this.idMateriaFechaActividad).subscribe(function (response) {
            if (response && response['status']) {
                // response['respuesta'].forEach(_resp => {
                //   contador = contador + 1; 
                //   _resp.idCK = contador.toString() 
                // });
                if (_this.tipoResp == 0) {
                    _this.respuestas = response['respuesta'];
                }
                else if (_this.tipoResp == 1) {
                    _this.respuestas = [];
                    var _respuestas = response['respuesta'];
                    _respuestas.forEach(function (_respuesta) {
                        if (_respuesta.persona_id == _this.idAlumno || _respuesta.persona_id == _this.persona_id) {
                            _this.respuestas.push(_respuesta);
                            _this.numRespuestas++;
                        }
                    });
                }
                // console.log(this.respuestas)
                // this.ultimaRespuesta = this.respuestas[this.respuestas.length-1].respuesta_id
                // this.respuestas.forEach(_respuestas =>{
                //   let subRespuestaId = _respuestas.sub_respuesta[_respuestas.sub_respuesta.length-1].respuesta_id
                //   if(this.ultimaRespuesta < subRespuestaId){
                //     this.ultimaRespuesta = subRespuestaId
                //   }
                // });    
            }
        }, function (error) {
            console.log(error);
        });
        this.fecha = new Date();
    };
    ForoComponent.prototype.horaPregunta = function (fecha_creacion) {
        var horarioPregunta;
        this.date = new Date(fecha_creacion);
        this._actual = new Date(); // var actual = new Date(_actual);
        var diffMs = (this._actual.getTime() - this.date.getTime());
        var diffDays = Math.floor(diffMs / 86400000); // days
        var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        var diffSg = Math.floor((((diffMs % 86400000) % 3600000) / 60000) / 60);
        if (diffDays > 0) {
            horarioPregunta = 'Hace ' + diffDays + ' días';
        }
        else if (diffDays == 0 && diffHrs > 0) {
            horarioPregunta = 'Hace ' + diffHrs + ' horas';
        }
        else if (diffDays == 0 && diffHrs == 0 && diffMins > 0) {
            horarioPregunta = 'Hace ' + diffMins + ' minutos';
        }
        else if (diffDays == 0 && diffHrs == 0 && diffMins == 0) {
            horarioPregunta = 'Ahora';
        }
        return horarioPregunta;
    };
    ForoComponent.prototype.editorCargado = function (evt) {
        if (this.rol.rol_id != 3) {
            this.show = true;
            this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
            this.show = true;
        }
        else {
            this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
            this.show = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ForoComponent.prototype, "actividadCargada", void 0);
    ForoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foro',
            template: __webpack_require__(/*! ./foro.component.html */ "./src/app/materia/actividad/preguntas/foro/foro.component.html"),
            styles: [__webpack_require__(/*! ./foro.component.scss */ "./src/app/materia/actividad/preguntas/foro/foro.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _foro_service__WEBPACK_IMPORTED_MODULE_2__["ForoService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ForoComponent);
    return ForoComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/foro/foro.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/foro/foro.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoModule", function() { return ForoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _foro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foro.component */ "./src/app/materia/actividad/preguntas/foro/foro.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ForoModule = /** @class */ (function () {
    function ForoModule() {
    }
    ForoModule_1 = ForoModule;
    var ForoModule_1;
    ForoModule.rootComponent = _foro_component__WEBPACK_IMPORTED_MODULE_2__["ForoComponent"];
    ForoModule = ForoModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [ForoModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__["LogotipoUsuarioModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__["ArchivoModule"]
            ],
            entryComponents: [
                ForoModule_1.rootComponent
            ]
        })
    ], ForoModule);
    return ForoModule;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/foro/foro.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/foro/foro.service.ts ***!
  \******************************************************************/
/*! exports provided: ForoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoService", function() { return ForoService; });
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




var ForoService = /** @class */ (function () {
    function ForoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ForoService.prototype.insertaRespuesta = function (form, id_pregunta, respuesta, respuesta_padre_id, id_respuesta, id_materia_fecha_actividad, rol) {
        var formData = new FormData();
        if (rol == 3) {
            formData.append('flg_moderador', '1');
        }
        else {
            formData.append('flg_moderador', '0');
        }
        formData.append('id_pregunta', id_pregunta);
        formData.append('respuesta', respuesta);
        formData.append('archivo', form.get('contenido').value);
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        if (form.get('solicitaRevision').value) {
            formData.append('solicita_revision', '1');
        }
        else {
            formData.append('solicita_revision', '0');
        }
        if (id_respuesta) {
            formData.append('id_respuesta', id_respuesta);
        }
        else {
            formData.append('id_respuesta_padre', respuesta_padre_id);
        }
        var fd = new FormData();
        if (id_respuesta) {
            return this._httpClient.post(this.url + 'learning/respuestaForo/edita.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'learning/respuestaForo/crea.php', formData);
        }
    };
    ForoService.prototype.consultaRespuesta = function (id_pregunta, id_materia_fecha_actividad) {
        var params = '?id_pregunta=' + id_pregunta;
        params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        return this._httpClient.get(this.url + 'learning/respuestaForo/consulta.php' + params);
    };
    ForoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ForoService);
    return ForoService;
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


/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-foro-foro-module.js.map