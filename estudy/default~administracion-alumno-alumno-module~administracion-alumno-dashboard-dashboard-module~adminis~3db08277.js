(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~administracion-alumno-dashboard-dashboard-module~adminis~3db08277"],{

/***/ "./src/app/components/encabezado-persona/encabezado-persona.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\">\r\n  <div class=\"row fondo\" *ngIf=\"persona\">\r\n    <div class=\"imagenes\">\r\n      <app-logotipo-usuario *ngIf=\"persona && !persona.url_perfil \" [iniciales]= \"persona.nombre\" [alto]=\"75\" [ancho]=\"75\" [tamLetra]=\"45\" [color]=\"persona.color\"></app-logotipo-usuario>\r\n        <div *ngIf=\"persona && persona.url_perfil\">\r\n          <img src=\"assets/images/marco_foto.png\"  class=\"margen\" width=\"11%\">\r\n          <div  class=\"imagen_persona\">\r\n            <img src=\"assets/images/ico_alumno.png\"  class=\"icono\" width=\"2.5%\">\r\n            <img src=\"{{urlPerfil}}\" width=\"90%\">\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"texto\">\r\n      <p class=\"header-estudy rol_persona\">{{rol[idRol-1]}}</p>\r\n      <h4 class=\"nombre_persona\">{{persona.nombre}} {{persona.primer_apellido}} {{persona.segundo_apellido}}</h4>\r\n      <p *ngIf=\"persona.clave_alumno\" class=\"header-estudy matricula\"><b>Matricula: {{persona.clave_alumno}}</b></p>\r\n      <p *ngIf=\"persona.clave_profesor\" class=\"header-estudy\"><b>Clave: {{persona.clave_profesor}}</b></p>\r\n    </div>\r\n  </div>\r\n</div>  "

/***/ }),

/***/ "./src/app/components/encabezado-persona/encabezado-persona.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n.form-group {\n  margin-bottom: 0px; }\n.invalidText {\n  color: red;\n  text-align: left !important; }\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n.header-estudy {\n  color: #1e5799; }\n.icon-estudy {\n  color: #1e5799; }\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n.imagenes {\n  width: 12.5%; }\n.texto {\n  width: 60%; }\n.fondo {\n  background-image: url('bg_alumno.png');\n  background-repeat: no-repeat;\n  background-color: white;\n  min-height: auto;\n  min-width: auto;\n  height: 150px; }\n.margen {\n  position: absolute;\n  margin-left: auto;\n  margin-top: auto;\n  display: block;\n  z-index: 1; }\n.icono {\n  position: absolute;\n  margin-left: 9%;\n  margin-top: auto;\n  display: block;\n  z-index: 2; }\n.imagen_persona {\n  vertical-align: middle;\n  z-index: -1; }\n.nombre_persona {\n  font-family: 'Open Sans';\n  font-size: 24px;\n  src: local(\"Open Sans Regular\"), local(\"OpenSans-Regular\"), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTa-j2U0lmluP9RWlSytm3ho.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n.rol_persona {\n  font-family: 'Open Sans';\n  font-size: 16px;\n  src: local(\"Open Sans Regular\"), local(\"OpenSans-Regular\"), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTa-j2U0lmluP9RWlSytm3ho.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n.matricula {\n  font-family: 'Open Sans';\n  font-size: 16px;\n  src: local(\"Open Sans Bold\"), local(\"OpenSans-Bold\"), url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTa-j2U0lmluP9RWlSytm3ho.woff2) format(\"woff2\");\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbmNhYmV6YWRvLXBlcnNvbmEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcZW5jYWJlemFkby1wZXJzb25hXFxlbmNhYmV6YWRvLXBlcnNvbmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZW5jYWJlemFkby1wZXJzb25hL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxpRUFBWTtBQ0laO0VBQ0MsbUJBQWtCLEVBQ2xCO0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCO0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjtBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjtBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjtBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjtBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmO0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiO0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCO0FEakREO0VBQ0ksYUFBWSxFQUNmO0FBRUQ7RUFDSSxXQUFVLEVBQ2I7QUFFRDtFQUNDLHVDQUE2RDtFQUM3RCw2QkFBNEI7RUFDNUIsd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWEsRUFDYjtBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLFdBQVUsRUFDYjtBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxXQUFVLEVBQ2I7QUFPRDtFQUNJLHVCQUFxQjtFQUNyQixZQUFXLEVBQ2Q7QUFFRDtFQUNJLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLDRLQUEySztFQUMzSyw2REFBNEQsRUFDL0Q7QUFFRDtFQUNJLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLDRLQUEySztFQUMzSyw2REFBNEQsRUFDL0Q7QUFFRDtFQUNJLHlCQUF3QjtFQUN4QixnQkFBZTtFQUNmLHNLQUFxSztFQUNySyw2REFBNEQsRUFDL0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VuY2FiZXphZG8tcGVyc29uYS9lbmNhYmV6YWRvLXBlcnNvbmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJyk7XHJcblxyXG5cclxuLmltYWdlbmVze1xyXG4gICAgd2lkdGg6IDEyLjUlO1xyXG59XHJcblxyXG4udGV4dG97XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uZm9uZG97XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnX2FsdW1uby5wbmdcIik7XHJcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gbWluLXdpZHRoOiBhdXRvO1xyXG4gaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLm1hcmdlbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmljb25ve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDklO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLy8gZGl2e1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuXHJcbi8vIH1cclxuXHJcbi5pbWFnZW5fcGVyc29uYXtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubm9tYnJlX3BlcnNvbmF7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBzcmM6IGxvY2FsKCdPcGVuIFNhbnMgUmVndWxhcicpLCBsb2NhbCgnT3BlblNhbnMtUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxMy9EWEkxT1JIQ3BzUW0zVnA2bVhvYVRhLWoyVTBsbWx1UDlSV2xTeXRtM2hvLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUY7XHJcbn1cclxuXHJcbi5yb2xfcGVyc29uYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBSZWd1bGFyJyksIGxvY2FsKCdPcGVuU2Fucy1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjEzL0RYSTFPUkhDcHNRbTNWcDZtWG9hVGEtajJVMGxtbHVQOVJXbFN5dG0zaG8ud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RjtcclxufVxyXG5cclxuLm1hdHJpY3VsYXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBCb2xkJyksIGxvY2FsKCdPcGVuU2Fucy1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjEzL0RYSTFPUkhDcHNRbTNWcDZtWG9hVGEtajJVMGxtbHVQOVJXbFN5dG0zaG8ud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RjtcclxufVxyXG4iLCJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/encabezado-persona/encabezado-persona.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EncabezadoPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoPersonaComponent", function() { return EncabezadoPersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var _encabezado_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EncabezadoPersonaComponent = /** @class */ (function () {
    // idAlumno = 2;
    function EncabezadoPersonaComponent(_usuarioService, _encabezadoService) {
        this._usuarioService = _usuarioService;
        this._encabezadoService = _encabezadoService;
        this.rol = ['Administrador', 'Alumno', 'Docente', 'Aspirante'];
    }
    EncabezadoPersonaComponent.prototype.ngOnChanges = function () {
        this.jwt = this._usuarioService.getJWT();
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets;
        this.consultas();
    };
    EncabezadoPersonaComponent.prototype.consultas = function () {
        var _this = this;
        this._encabezadoService.consultaPersona(this.idPersona, this.idRol).subscribe(function (response) {
            if (response && response['status']) {
                _this.persona = response['persona'];
                _this.urlPerfil = _this.url + _this.persona.url_perfil;
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EncabezadoPersonaComponent.prototype, "idPersona", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EncabezadoPersonaComponent.prototype, "idRol", void 0);
    EncabezadoPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encabezado-persona',
            template: __webpack_require__(/*! ./encabezado-persona.component.html */ "./src/app/components/encabezado-persona/encabezado-persona.component.html"),
            styles: [__webpack_require__(/*! ./encabezado-persona.component.scss */ "./src/app/components/encabezado-persona/encabezado-persona.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _encabezado_persona_service__WEBPACK_IMPORTED_MODULE_3__["EncabezadoPersonaService"]])
    ], EncabezadoPersonaComponent);
    return EncabezadoPersonaComponent;
}());



/***/ }),

/***/ "./src/app/components/encabezado-persona/encabezado-persona.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.module.ts ***!
  \****************************************************************************/
/*! exports provided: EncabezadoPersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoPersonaModule", function() { return EncabezadoPersonaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _encabezado_persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encabezado-persona.component */ "./src/app/components/encabezado-persona/encabezado-persona.component.ts");
/* harmony import */ var _logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EncabezadoPersonaModule = /** @class */ (function () {
    function EncabezadoPersonaModule() {
    }
    EncabezadoPersonaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_encabezado_persona_component__WEBPACK_IMPORTED_MODULE_2__["EncabezadoPersonaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_3__["LogotipoUsuarioModule"]
            ],
            exports: [_encabezado_persona_component__WEBPACK_IMPORTED_MODULE_2__["EncabezadoPersonaComponent"]]
        })
    ], EncabezadoPersonaModule);
    return EncabezadoPersonaModule;
}());



/***/ }),

/***/ "./src/app/components/encabezado-persona/encabezado-persona.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/encabezado-persona/encabezado-persona.service.ts ***!
  \*****************************************************************************/
/*! exports provided: EncabezadoPersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncabezadoPersonaService", function() { return EncabezadoPersonaService; });
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




var EncabezadoPersonaService = /** @class */ (function () {
    function EncabezadoPersonaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    EncabezadoPersonaService.prototype.consultaPersona = function (id_persona, id_rol) {
        var params = '?id_persona=' + id_persona;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/admin/personas/consulta.php' + params);
    };
    EncabezadoPersonaService.prototype.modificaPersona = function (persona, id_persona, id_sexo, fechaN, jwt) {
        var formData = new FormData();
        formData.append('nombre', persona.get('nombreUsuario').value);
        formData.append('primer_apellido', persona.get('apPatUsuario').value);
        formData.append('segundo_apellido', persona.get('apMatUsuario').value);
        formData.append('id_sexo', id_sexo);
        formData.append('curp', persona.get('curpUsuario').value);
        formData.append('rfc', persona.get('rfcUsuario').value);
        formData.append('email', persona.get('correoUsuario').value);
        formData.append('celular', persona.get('celUsuario').value);
        formData.append('id_persona', id_persona);
        //formData.append('clave_elector', persona.get('claveElector').value);
        formData.append('jwt', jwt);
        if (fechaN == null) {
            formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
        }
        else {
            formData.append('fecha_nacimiento', fechaN);
        }
        return this._httpClient.post(this.url + 'admin/personas/edita.php', formData);
    };
    EncabezadoPersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EncabezadoPersonaService);
    return EncabezadoPersonaService;
}());



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



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~administracion-alumno-dashboard-dashboard-module~adminis~3db08277.js.map