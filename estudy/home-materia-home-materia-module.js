(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-materia-home-materia-module"],{

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

/***/ "./src/app/materia/home-materia/home-materia-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/materia/home-materia/home-materia-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HomeMateriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMateriaRoutingModule", function() { return HomeMateriaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_materia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-materia.component */ "./src/app/materia/home-materia/home-materia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_materia_component__WEBPACK_IMPORTED_MODULE_2__["HomeMateriaComponent"] },
];
var HomeMateriaRoutingModule = /** @class */ (function () {
    function HomeMateriaRoutingModule() {
    }
    HomeMateriaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeMateriaRoutingModule);
    return HomeMateriaRoutingModule;
}());



/***/ }),

/***/ "./src/app/materia/home-materia/home-materia.component.html":
/*!******************************************************************!*\
  !*** ./src/app/materia/home-materia/home-materia.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row  flex-row d-flex  justify-content-center align-items-end\">\r\n      <a\r\n      *ngIf=\"seriacionActividad && seriacionActividad.length && materia.validacion == '1'\"\r\n      [routerLink]=\"['/materia/actividad/' + seriacionActividad[0]]\" \r\n       class=\"btn btn-comenzar-asignatura btn-lg btn-success\"> Comenzar la asignatura</a>\r\n      <img [src]=\"urlImg\" width=\"100%\">\r\n      <div class=\"col-12\" *ngIf=\"Calificaciones\">\r\n        <ul class=\"list-group pull-right w-50\" style=\"margin-top: -35%;\">\r\n          <li class=\"list-group-item bg-light text-center\">Mis calificaciones</li>\r\n          <li class=\"list-group-item\" *ngFor=\"let calificacion of Calificaciones; let i = index\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <p class=\"my-0 py-0\">{{calificacion.actividad_nombre}}</p>\r\n              <p class=\"my-0 py-0\">{{calificacion.calificacion}}</p>\r\n            </div>\r\n          </li>\r\n        </ul> \r\n      </div>\r\n      \r\n      <div class=\"col-4 text-center\">\r\n        <div *ngIf=\"materia.validacion == '0'\"  style=\"max-height: 155px; margin-top: -190px\"  class=\"alert\" [ngClass]=\"materia.calificacion >= 6? 'alert-success': 'alert-danger'\">\r\n          <h4 class=\"font-weight-bold mb-0\">{{materia.descripcion_estatus_materia}} </h4>\r\n          <h1 class=\"font-weight-bold\">{{materia.calificacion}} </h1>\r\n          <p class=\"font-weight-bold mb-0\">Calificación</p>\r\n        </div>\r\n      </div>\r\n    </div><br>\r\n\r\n    \r\n    <div class=\"row justify-content-center text-center\" *ngIf=\"!materia.activa && materia.validacion == '1'\">\r\n      <div  style=\"margin-top: -20%; position: absolute; height: 125px\"  class=\"alert alert-danger text-center\">\r\n        <h1><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></h1>\r\n        <p>\r\n          <span  *ngIf=\"materia.estado == 2\">Esta materia inicia el día {{materia.fecha_inicio | date: \"dd/MM/yyyy\"}} </span>   \r\n          <span *ngIf=\"materia.estado == 3\" >Esta materia se cerró el día {{materia.fecha_fin | date: \"dd/MM/yyyy\"}} </span>\r\n        </p>estatus\r\n      </div >\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <ngb-tabset>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><p>Bienvenida</p></ng-template>\r\n                <ng-template ngbTabContent><!---->\r\n                  <div class=\"modal-body\">\r\n                    <div [innerHTML]=\"bienvenida_desc\"></div>\r\n                    <div class=\"text-center\">\r\n                      <a *ngIf=\"url_contenido\" download href=\"{{url_contenido}}\">\r\n                        <i class=\"fa fa-book fa-4x\" aria-hidden=\"true\"></i><p>Descargar contenido de la asignatura</p>\r\n                      </a>\r\n                    </div>\r\n                     <!-- <app-archivo [urlBase]=\"materia.url_contenido\"></app-archivo>   -->\r\n                  </div>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab *ngIf=\"materia.objetivos_desc\">\r\n              <ng-template ngbTabTitle><p>Objetivos</p></ng-template>\r\n                <ng-template ngbTabContent ><!---->\r\n                  <div class=\"modal-body\">\r\n                    <div [innerHTML]=\"objetivos_desc\"></div>\r\n                  </div>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><p>Evaluación</p></ng-template>\r\n                <ng-template ngbTabContent><!---->\r\n                  <div class=\"modal-body\" >\r\n                    <div [innerHTML]=\"evaluacion_desc\"></div> \r\n                    <app-objetivos-actividad *ngIf=\"asignatura_id\"  [id_asignatura]=\"asignatura_id\"></app-objetivos-actividad> \r\n                  </div>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab *ngIf=\"materia.bibliografia_desc\">\r\n              <ng-template ngbTabTitle><p>Bibliografía</p></ng-template>\r\n                <ng-template ngbTabContent ><!---->\r\n                  <div class=\"modal-body\">\r\n                    <div [innerHTML]=\"bibliografia_desc\"></div>  \r\n                  </div>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n      <div class=\"align col-md-3 p-2\">\r\n        <div *ngIf=\"docente\" class=\"text-center\">\r\n          <br>\r\n          <!-- <p><b>Docente en línea</b></p> -->\r\n          <p *ngIf=\"docente\"><b>Docente</b></p>\r\n            <app-logotipo-usuario *ngIf=\"docente && !docente.url_perfil\" [iniciales]=\"docente.nombre\" [ancho]=\"130\" [alto]=\"130\" [tamLetra]=\"85\" [color]=\"docente.color\"></app-logotipo-usuario>\r\n          <div *ngIf=\"docente && docente.url_perfil\">\r\n            <img [src]=\"docente.url_perfil\" width=\"60%\">\r\n            <!-- <img src=\"https://cdn1.iconfinder.com/data/icons/avatar-3/512/Teacher-512.png\"> -->\r\n          </div>\r\n          <h5 *ngIf=\"materia\">{{docente.nombre}} {{docente.primer_apellido}} {{docente.segundo_apellido}}</h5> \r\n          <div *ngIf=\"docente.url_curriculum\">\r\n            <a class=\"btn btn-primary\" href=\"{{urlCurriculum}}\" target=\"_blank\">Ver currículum</a>\r\n          </div>  \r\n          <!-- <p class=\"bg-success text-white\">Ver semblanza</p> -->\r\n          <!--p><a><i class=\"fa fa-envelope\"></i> Enviar mensaje</a></p-->\r\n          <!-- <p><i class=\"fa fa-desktop\"></i> Próxima sesión en línea: <br> Noviembre 16, 2019 18:00 hrs</p> -->\r\n        </div>\r\n        <div class=\"card mt-3\" *ngIf=\"Videoconferencias\">\r\n          <div class=\"card-header text-center\">\r\n            <i class=\"fa fa-bell\"></i> Clases en curso\r\n          </div>\r\n          <div class=\"list-group list-group-flush\">\r\n            <a *ngFor=\"let item of Videoconferencias\" class=\"list-group-item list-group-item-action\">\r\n              <div class=\"d-flex w-100 justify-content-between\">\r\n                <p class=\"mb-1 pb-1 font-weight-bold\">{{item.nombre}}</p>\r\n              </div>\r\n              <small class=\"font-weight-light\">{{item.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}}</small>\r\n              <a *ngIf=\"item.usuario_zoom_id\" class=\"btn btn-success pull-right text-white mt-2\" (click)=\"consultaVideoConferencia(item)\">Entrar a clase</a>\r\n              <b  *ngIf=\"!item.usuario_zoom_id\" class=\"pull-right\">Abre el  {{item.fecha_inicio | date:'dd/MM/yyyy hh:mm a'}}</b>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div> \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <img width=\"100%\" [src]=\"urlCurriculum\" alt=\"\">\r\n</ng-template>\r\n\r\n<ng-template #modalConferencia let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Videoconferencia</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body m-3\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n        <div class=\"text-center\">\r\n            <h5><b>Elige como quieres unirte a la videoconferencia: </b></h5>\r\n            <p><b>{{conferencia.nombre}}</b></p>\r\n            <p class=\"mb-0\">Hora de inicio: {{conferencia.fecha_inicio | date:'dd/MM/yyyy hh:mm a'}}</p>\r\n            <p class=\"mt-0\">Hora de finalización: {{conferencia.fecha_fin | date:'dd/MM/yyyy hh:mm a'}}</p>\r\n            <hr>\r\n            <p>Para abrir desde el navegador web da click en el siguiente botón: </p>\r\n            <button class=\"btn btn-primary btn-lg\" (click)=\"videoConferencia(0)\">\r\n                Abrir web\r\n            </button>\r\n            <hr>\r\n            <p class=\"mt-3\">Para abrir desde la aplicación de zoom da click en el siguiente botón: </p>\r\n            <button class=\"btn btn-primary btn-lg\" (click)=\"videoConferencia(1)\">\r\n                Abrir Zoom\r\n            </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/materia/home-materia/home-materia.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/materia/home-materia/home-materia.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-comenzar-asignatura {\n  position: absolute;\n  display: block;\n  margin: auto;\n  margin-top: 20px; }\n\n.logo {\n  margin-left: 19%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9ob21lLW1hdGVyaWEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcaG9tZS1tYXRlcmlhXFxob21lLW1hdGVyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2hvbWUtbWF0ZXJpYS9ob21lLW1hdGVyaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNvbWVuemFyLWFzaWduYXR1cmF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmxvZ297XHJcbiAgICBtYXJnaW4tbGVmdDogMTklO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/materia/home-materia/home-materia.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/materia/home-materia/home-materia.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeMateriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMateriaComponent", function() { return HomeMateriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../docente/video-conferencia/services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeMateriaComponent = /** @class */ (function () {
    function HomeMateriaComponent(_materiaService, _usuarioService, _sanitizer, _conferenciaService, modalService) {
        this._materiaService = _materiaService;
        this._usuarioService = _usuarioService;
        this._sanitizer = _sanitizer;
        this._conferenciaService = _conferenciaService;
        this.modalService = modalService;
        this.fechaValidaInicio = false;
        this.fechaValidaFin = false;
        this.sinFecha = true;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets;
        this.urlZoom = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets + '/assets/zoom/';
        this.urlLeave = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets + '/estudy/';
    }
    HomeMateriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'home-materia' });
        this.inicializaHome();
        this._materiaService.materiaActualizada.subscribe(function (response) {
            _this.inicializaHome();
        });
    };
    HomeMateriaComponent.prototype.inicializaHome = function () {
        this.jwt = this._usuarioService.getJWT();
        this.materia = this._materiaService.getSelectedMateria();
        if (this.materia.url_contenido)
            this.url_contenido = this.url + this.materia.url_contenido;
        else
            this.url_contenido = null;
        this.docente = this._materiaService.getSelectedMateria().docente;
        if (this.docente)
            this.urlCurriculum = this.url + this.docente.url_curriculum;
        this.materia_id = this.materia.materia_id;
        //  console.log(this.materia);
        //  console.log(this.docente);
        if (this.docente) {
            this.docente.url_perfil = this.docente.url_perfil ? this.url + this.docente.url_perfil : null;
        }
        // if (!this.materia){ 
        //   this.router.navigate(['materia/auth']);
        // }
        this.asignatura_id = this.materia.asignatura_id;
        this.actualizaInfoMateria();
    };
    HomeMateriaComponent.prototype.actualizaInfoMateria = function () {
        this.materia = this._materiaService.getSelectedMateria();
        this.materia_id = this.materia_id;
        this.seriacionActividad = this._materiaService.getSeriacionActividad();
        this.bibliografia_desc = this.htmlProperty(this.materia.bibliografia_desc);
        this.evaluacion_desc = this.htmlProperty(this.materia.evaluacion_desc);
        this.objetivos_desc = this.htmlProperty(this.materia.objetivos_desc);
        this.bienvenida_desc = this.htmlProperty(this.materia.bienvenida_desc);
        if (this.materia.url_imagen) {
            this.urlImg = this.url + this.materia.url_imagen;
        }
        else {
            this.urlImg = "assets/images/learning/bannermateria.jpeg";
        }
        this.consultaConferenciaMateria();
        this.consultaCalificaciones();
    };
    HomeMateriaComponent.prototype.consultaConferenciaMateria = function () {
        var _this = this;
        this._conferenciaService.consultaConferenciasMateria(this.jwt, this.materia_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.Videoconferencias = response['conferencias'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeMateriaComponent.prototype.consultaCalificaciones = function () {
        var _this = this;
        this._materiaService.getCalificaciones(this.materia_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.Calificaciones = response['calificaciones'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomeMateriaComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    HomeMateriaComponent.prototype.videoConferencia = function (id) {
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this._conferenciaService.insertaAcceso(this.jwt, this.conferencia.videoconferencia_id, this.identity.persona_id).subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
        if (id == 0) {
            localStorage.setItem('docente', JSON.stringify(this.conferencia));
            localStorage.setItem('urlLeave', JSON.stringify(this.urlLeave));
            localStorage.setItem('passwordZoom', JSON.stringify(this.passwordZoom));
            var newTab = window.open('', '_blank');
            newTab.location.href = 'assets/zoom/';
        }
        else if (id == 1) {
            var url = this.urlZoom;
            var newTab = window.open(url, '_blank');
        }
    };
    HomeMateriaComponent.prototype.consultaVideoConferencia = function (conferencia) {
        var _this = this;
        this.conferencia = conferencia;
        this._conferenciaService.consultaMeet(conferencia.videoconferencia_id).subscribe(function (response) {
            console.log(response);
            _this.modalConferencia;
            _this.urlZoom = response['join_url'];
            if (response['password']) {
                _this.passwordZoom = response['password'];
            }
            else {
                _this.passwordZoom = '';
            }
            _this.modalService.open(_this.modalConferencia, { size: "lg" });
        }, function (error) {
            alertify.error('No se puede acceder a la videoconferencia');
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalConferencia'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeMateriaComponent.prototype, "modalConferencia", void 0);
    HomeMateriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-materia',
            template: __webpack_require__(/*! ./home-materia.component.html */ "./src/app/materia/home-materia/home-materia.component.html"),
            styles: [__webpack_require__(/*! ./home-materia.component.scss */ "./src/app/materia/home-materia/home-materia.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__["MateriaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _docente_video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_5__["VideoConferenciaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], HomeMateriaComponent);
    return HomeMateriaComponent;
}());



/***/ }),

/***/ "./src/app/materia/home-materia/home-materia.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/materia/home-materia/home-materia.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeMateriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeMateriaModule", function() { return HomeMateriaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_materia_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-materia-routing.module */ "./src/app/materia/home-materia/home-materia-routing.module.ts");
/* harmony import */ var _home_materia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-materia.component */ "./src/app/materia/home-materia/home-materia.component.ts");
/* harmony import */ var src_app_docente_objetivos_actividad_objetivos_actividad_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/docente/objetivos-actividad/objetivos-actividad.module */ "./src/app/docente/objetivos-actividad/objetivos-actividad.module.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeMateriaModule = /** @class */ (function () {
    function HomeMateriaModule() {
    }
    HomeMateriaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_home_materia_component__WEBPACK_IMPORTED_MODULE_4__["HomeMateriaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_materia_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeMateriaRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                src_app_docente_objetivos_actividad_objetivos_actividad_module__WEBPACK_IMPORTED_MODULE_5__["ObjetivosActividadModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_6__["LogotipoUsuarioModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__["ArchivoModule"]
            ], exports: [
                _home_materia_component__WEBPACK_IMPORTED_MODULE_4__["HomeMateriaComponent"]
            ]
        })
    ], HomeMateriaModule);
    return HomeMateriaModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-materia-home-materia-module.js.map