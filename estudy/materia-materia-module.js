(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materia-materia-module"],{

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

/***/ "./src/app/materia/components/header/header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/materia/components/header/header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\" [style.background-color]=\"universidad.color\">\r\n    <div class=\"nav-item dropdown row\" ngbDropdown>\r\n        <div class=\"btn-success regreso back\">\r\n        <a class=\"btn col\" (click)=\"regresoPag()\"><i class=\"fa fa-reply\"></i></a>\r\n        </div>\r\n            <a *ngIf=\"rol.rol_id != '3'\" class=\"nav-link mat\" title=\"{{selectedMateria.asignatura}}\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                {{selectedMateria.asignatura}}<br>\r\n                \r\n                <small  *ngIf=\"selectedMateria.activa == 1\">\r\n                    <span *ngIf=\"selectedMateria.estado == 1\" > Cierra el  {{selectedMateria.fecha_fin | date: \"dd/MM/yyyy\"}} </span>   \r\n                    <span *ngIf=\"selectedMateria.estado == 0\" > Sin fecha de cierre </span>\r\n                </small>\r\n                <small *ngIf=\"selectedMateria.activa == 0\">\r\n                    <span  *ngIf=\"selectedMateria.estado == 2\"> Abre el  {{selectedMateria.fecha_inicio | date: \"dd/MM/yyyy\"}} </span>   \r\n                    <span *ngIf=\"selectedMateria.estado == 3\" > Cerró el  {{selectedMateria.fecha_fin | date: \"dd/MM/yyyy\"}} </span>\r\n                </small>\r\n            </a>\r\n        \r\n            <div *ngIf=\"rol.rol_id == '3'\" class=\"pt-3 nav-link text-white\" style=\"margin-top: 4px\">\r\n                {{selectedMateria.asignatura}} \r\n                <small>({{'_vistaProfesor' | translate }}) </small>\r\n            </div>\r\n            <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\r\n                <li class=\"media  dropdown-materia\" *ngFor=\"let materia of materias; let i = index\" (click)=\"cambiaMateria(materia.materia_id)\">\r\n                    <img *ngIf=\"materia.url_imagen_previa\" class=\"d-flex align-self-center mr-3\"\r\n                        src=\"{{materia.url_imagen_previa}}\" style=\"width: 20%;\" height=\"20%\">\r\n                        <div class=\"media-body\">\r\n                        <h5 class=\"mt-0 mb-1\">{{materia.asignatura}}</h5>\r\n                        <p class=\"small text-muted\" *ngIf=\"materia.activa == 1\">\r\n                            <span *ngIf=\"materia.estado == 1\" > Cierra el  {{materia.fecha_fin | date: \"dd/MM/yyyy\"}} </span>   \r\n                            <span *ngIf=\"materia.estado == 0\" > Sin fecha de cierre </span>\r\n                        </p>\r\n                        <p class=\"small text-muted\" *ngIf=\"materia.activa == 0\">\r\n                            <span  *ngIf=\"materia.estado == 2\"> Abre el  {{materia.fecha_inicio | date: \"dd/MM/yyyy\"}} </span>   \r\n                            <span *ngIf=\"materia.estado == 3\" > Cerró el  {{materia.fecha_fin | date: \"dd/MM/yyyy\"}} </span>\r\n                        </p>\r\n                    </div>\r\n                </li>\r\n            </ul>  \r\n    </div>\r\n    <div class=\"nav-item dropdown row hide\" ngbDropdown>\r\n    <ul class=\"hnav\">\r\n        <li class=\"nav-item\">\r\n        <a placement=\"bottom\" ngbTooltip=\"Mensajeria\" \r\n        [routerLink]=\"['mensajes/'+idMateria]\">\r\n                <i class=\"fa fa-envelope nav-link mt-1 badge-wrapper\">\r\n                <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                <span *ngIf=\"!numMensajes\" class=\"badge badge-secondary\">0</span>\r\n            </i>\r\n        </a>\r\n      </li>\r\n      <li li class=\"nav-item dropdown iz\" ngbDropdown >\r\n        <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"Retroalimentación\">\r\n            <i class=\"fa fa-exchange\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n            <span *ngIf=\"numRetros >= 1\" class=\"badge badge-success\">{{numRetros}}</span>\r\n            <span *ngIf=\"!numRetros\" class=\"badge badge-secondary\">0</span> \r\n        </a>\r\n        <div *ngIf=\"numRetros\" class=\"dropdown-menu-right notification\" style=\"width: 300px;\" ngbDropdownMenu>\r\n           <div *ngFor=\"let mensajeRetro of mensajesRetros\">\r\n                <a href=\"javascript:void(0)\" class=\"dropdown-item\" [routerLink]=\"['./actividad/'+ mensajeRetro.actividad_id]\">\r\n                   <b>- {{mensajeRetro.actividad_nombre}}</b>\r\n                   <p class=\"contenido\">{{mensajeRetro.texto}}</p>\r\n                </a><li class=\"dropdown-divider\"></li>\r\n            </div> \r\n        </div>\r\n        <div *ngIf=\"!numRetros\" class=\"dropdown-menu-right notification\" style=\"width: 323px;\" ngbDropdownMenu>\r\n                 <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                <b>{{'HederRetroalimentacion' | translate }}</b>\r\n                 </a>\r\n         </div>\r\n    </li>\r\n        <li class=\"nav-item\">\r\n           <a placement=\"bottom\" ngbTooltip=\"Avisos\" [routerLink]=\"['/materia/avisos/2']\" >\r\n               <i class=\"nav-link  mt-1 fa fa-bell-o badge-wrapper\" aria-hidden=\"true\">\r\n                    <span *ngIf=\"_numAviso >= 1\" class=\"badge badge-success\">{{_numAviso}}</span>\r\n                    <span *ngIf=\"_numAviso == 0 \" class=\"badge badge-secondary\">{{_numAviso}}</span>\r\n            </i></a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <!--form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >\r\n        </form-->\r\n        <ul class=\"navbar-nav ml-auto avan\">\r\n                <li class=\"nav-item nav-progress \" >\r\n                        <a href=\"javascript:void(0)\" class=\"nav-link mt-1\" [routerLink]=\"['./avance']\">\r\n                            <small>Avance: {{porcentaje}}%</small>\r\n                            <div class=\"progress\" style=\"height:10px\"> \r\n                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{'width': porcentaje + '%' , 'height': '10px'}\" aria-valuenow=\"porcentaje\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <!--li class=\"nav-item d-none d-xl-block\">\r\n                <a\r\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\r\n                    class=\"nav-link btn mt-1\" role=\"button\"\r\n                    style=\"padding: .375rem 1rem !important;border-color: #999;\"\r\n                >\r\n                    {{ 'Download Now' | translate }}\r\n                </a>\r\n            </li--> &nbsp;\r\n\r\n          <li class=\"nav-item\">\r\n            <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openModalMensaje(contentModal)\"><i class=\"fa fa-envelope\"></i> Enviar mensaje</button> -->\r\n            <a placement=\"bottom\" ngbTooltip=\"Mensajeria\" \r\n            [routerLink]=\"['mensajes/'+idMateria]\">\r\n                    <i [ngClass]=\"docenteActivo ? 'fa-user-circle-o' : 'fa-envelope'\" class=\"fa  nav-link mt-1 badge-wrapper\" >\r\n                    <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                    <span *ngIf=\"!numMensajes && docenteActivo\"  class=\"badge badge-success\">en linea</span>\r\n                    <span *ngIf=\"!numMensajes && !docenteActivo\" class=\"badge badge-secondary\">0</span>\r\n                </i>\r\n            </a>\r\n          </li>\r\n        <li li class=\"nav-item dropdown \" ngbDropdown >\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"Retroalimentación\">\r\n                <i class=\"fa fa-exchange\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                <span *ngIf=\"numRetros >= 1\" class=\"badge badge-success\">{{numRetros}}</span>\r\n                <span *ngIf=\"!numRetros\" class=\"badge badge-secondary\">0</span> \r\n            </a>\r\n            <div *ngIf=\"numRetros\" class=\"dropdown-menu-right notification\" style=\"width: 300px;\" ngbDropdownMenu>\r\n               <div *ngFor=\"let mensajeRetro of mensajesRetros\">\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"nuevoLink(mensajeRetro.actividad_id)\">\r\n                       <b>- {{mensajeRetro.actividad_nombre}}</b>\r\n                       <p class=\"contenido\">{{mensajeRetro.texto}}</p>\r\n                    </a><li class=\"dropdown-divider\"></li>\r\n                </div>\r\n                <div style=\"text-align: center;\">\r\n                    <a href=\"javascript:void()\" [routerLink]=\"['../learning/bandeja-retro/'+idMateria]\">Ir a bandeja de retroalimentaciones</a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!numRetros\" class=\"dropdown-menu-right notification\" style=\"width: 323px;\" ngbDropdownMenu>\r\n                     <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        <b>{{'HederRetroalimentacion' | translate }}</b>\r\n                     </a><hr>\r\n                     <div style=\"text-align: center;\">\r\n                        <a href=\"javascript:void()\" [routerLink]=\"['../learning/bandeja-retro/'+idMateria]\">Ir a bandeja de retroalimentaciones</a>\r\n                    </div>\r\n             </div>\r\n        </li>\r\n            <li class=\"nav-item\">\r\n               <a placement=\"bottom\" id=\"modalBtn\" ngbTooltip=\"Avisos\" [routerLink]=\"['/materia/avisos/2']\">\r\n                   <i class=\"nav-link  mt-1 fa fa-bell-o badge-wrapper\" aria-hidden=\"true\">\r\n                        <span *ngIf=\"_numAviso >= 1\" class=\"badge badge-success\">{{_numAviso}}</span>\r\n                        <span *ngIf=\"_numAviso == 0 \" class=\"badge badge-secondary\">{{_numAviso}}</span>\r\n                </i></a>\r\n            </li>\r\n            <li class=\"nav-item dropdown user-menu\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle >\r\n                    <app-logotipo-usuario [iniciales]=\"nombre\" [ancho]=\"25\" [alto]=\"25\"  [tamLetra]=\"15\" [color]=\"color\"></app-logotipo-usuario>\r\n                    {{identity.nombre + ' ' + identity.primer_apellido }}       \r\n                                                \r\n                    <!-- <i class=\"fa fa-user\"></i>  -->\r\n                   \r\n                </a>\r\n                <div class=\"dropdown-menu  dropdown-menu-left \" ngbDropdownMenu  >\r\n                    <!--a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\r\n                    </a-->\r\n                    <!--a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\r\n                    </a-->\r\n                    <a [routerLink]=\"['./perfil']\" [routerLinkActive]=\"['router-link-active']\" class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            \r\n        </ul>\r\n    </div>\r\n    <!--ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Avisos</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div *ngIf=\"_numAviso\">\r\n                <div *ngFor=\"let aviso of avisos\">\r\n                    <span class=\"nav-link mt-1 badge badge-success  badge-sm pull-right\">{{'_caduca' | translate}} {{aviso.fecha_fin | date: \"dd/MM/yyyy\"}}</span>\r\n                    <h5>{{aviso.titulo }}</h5> \r\n                    <div class=\"form-check\">\r\n                        <input (change)=\"marcarAviso(aviso.avisos_grupo_id)\" class=\"form-check-input\" type=\"checkbox\" id=\"autoSizingCheck2\" [value]=\"aviso.avisos_grupo_id\">\r\n                        <label class=\"form-check-label\" for=\"autoSizingCheck2\">\r\n                        Marcar como visto\r\n                        </label>\r\n                    </div>\r\n                    <p [innerHTML]=\"aviso.mensaje\"></p>\r\n                    <app-archivo class=\"archivo\" *ngIf=\"aviso.adjunto\" [urlBase]=\"aviso.adjunto\"></app-archivo><hr class=\"new1\">\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"_numAviso == 0\">\r\n                <span>No tienes avisos</span>\r\n            </div>\r\n            <a [routerLink]=\"['/materia/avisos/2']\" (click)=\"c('Close click')\">Ver todos los avisos</a>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cerrar</button>\r\n        </div>\r\n</ng-template-->\r\n    <!--Scroll to top-->\r\n    <button [ngClass]=\"{'show-scroll': showScroll}\" (click)=\"scrollToTop()\" class=\"buttons scroll-to-top\">\r\n        <i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\r\n    </button>\r\n</nav>  "

/***/ }),

/***/ "./src/app/materia/components/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/materia/components/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar .navbar-brand {\n  color: #fff; }\n\n:host .navbar .nav-link {\n  max-width: 600px; }\n\n:host .navbar .nav-item > a {\n  color: #eee; }\n\n:host .navbar .nav-item > a:hover {\n    color: #fff; }\n\n:host .navbar .nav-text {\n  width: 250px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  word-wrap: break-word; }\n\n:host .navbar .nav-progress {\n  width: 350px; }\n\n:host .navbar .user-menu {\n  min-width: 200px;\n  text-align: right; }\n\n:host .navbar .user-menu > a {\n  overflow-x: hidden; }\n\n:host .notification {\n  width: 100px; }\n\n:host .messages {\n  width: 300px; }\n\n:host .messages .media:hover {\n    color: white;\n    cursor: pointer; }\n\n:host .messages .media:hover .small {\n      color: white; }\n\n:host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n\n:host .messages .media:last-child {\n      border-bottom: none; }\n\n:host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n\n:host .messages .media-body .small {\n    margin: 0; }\n\n:host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.regreso {\n  width: 44px;\n  height: 35px;\n  margin-top: 15px;\n  margin-left: 10px; }\n\nhr.new1 {\n  border-top: 1px solid rgba(117, 116, 116, 0.884); }\n\n.badge-wrapper {\n  position: relative; }\n\n.contenido {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.hide {\n  display: none; }\n\n.hnav {\n  display: flex;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.iz {\n  margin: 0px -25px 0px -25px; }\n\n@media (max-width: 768px) {\n  .hide {\n    display: contents; }\n  .hnav {\n    display: flex;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-left: 65px; } }\n\n.buttons {\n  background: rgba(149, 151, 151, 0.938);\n  color: white;\n  padding: 20px;\n  border: none;\n  cursor: pointer;\n  cursor: hand;\n  border-radius: 5px; }\n\n.scroll-to-top {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all .2s ease-in-out; }\n\n.show-scroll {\n  opacity: 0.7;\n  transition: all .2s ease-in-out; }\n\n.clock {\n  position: relative; }\n\n.clock .tiempo {\n  display: none; }\n\n.clock:hover .tiempo {\n  display: initial; }\n\n@media (max-width: 1200px) {\n  .back {\n    width: 65px;\n    height: 35px;\n    margin-left: 20px; }\n  .mat {\n    margin-left: -6px;\n    font-size: 12px; }\n  .avan {\n    margin-top: -16px;\n    width: 230px; }\n  .nav-link {\n    max-width: 450px;\n    font-size: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9jb21wb25lbnRzL2hlYWRlci9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUlZLFlBQVcsRUFDZDs7QUFMVDtFQU9ZLGlCQUFnQixFQUNuQjs7QUFSVDtFQVdZLFlBQVcsRUFJZDs7QUFmVDtJQWFnQixZQUFXLEVBQ2Q7O0FBZGI7RUFpQlksYUFBVztFQUNYLGlCQUFlO0VBQ2Ysb0JBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFDSixFQUFDOztBQXRCVDtFQXdCWSxhQUFZLEVBQ2Y7O0FBekJUO0VBMkJZLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDcEI7O0FBN0JUO0VBK0JZLG1CQUFrQixFQUNyQjs7QUFoQ1Q7RUFtQ1EsYUFBWSxFQUVmOztBQXJDTDtFQXVDUSxhQUFZLEVBK0JmOztBQXRFTDtJQTBDWSxhQUFZO0lBQ1osZ0JBQWMsRUFLakI7O0FBaERUO01BOENnQixhQUFXLEVBQ2Q7O0FBL0NiO0lBbURZLDhCQUE2QjtJQUM3QixrQkFBaUIsRUFJcEI7O0FBeERUO01Bc0RnQixvQkFBbUIsRUFDdEI7O0FBdkRiO0lBMkRnQixnQkFBZTtJQUNmLGlCQUFnQixFQUNuQjs7QUE3RGI7SUErRGdCLFVBQVMsRUFDWjs7QUFoRWI7SUFrRWdCLGdCQUFlO0lBQ2YsVUFBUyxFQUNaOztBQUliO0VBQ0ksWUFBVTtFQUNWLGFBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQ0osRUFBQzs7QUFDRDtFQUNJLGlEQUFnRCxFQUNqRDs7QUFFRDtFQUNFLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGlCQUFlO0VBQ2Ysb0JBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFFSSxjQUFhO0VBR2IsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0UsNEJBQTJCLEVBQzVCOztBQUNEO0VBQ0k7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUVJLGNBQWE7SUFHYixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCLEVBQUE7O0FBR0w7RUFDSSx1Q0FBc0M7RUFDdEMsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osZ0JBQWM7RUFBRSxhQUFZO0VBQzVCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVO0VBQ1YsZ0NBQStCLEVBQ2xDOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGdDQUErQixFQUNsQzs7QUFJSDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSTtJQUNJLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCLEVBQ3BCO0VBQ0Q7SUFDSSxrQkFBaUI7SUFFakIsZ0JBQWUsRUFDbEI7RUFDRDtJQUNJLGtCQUFpQjtJQUFFLGFBQVksRUFDbEM7RUFDRDtJQUNJLGlCQUFnQjtJQUNoQixnQkFBZSxFQUNsQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzA3NUM4QjtcclxuOmhvc3Qge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LXRleHR7XHJcbiAgICAgICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdvcmQtd3JhcDpicmVhay13b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtcHJvZ3Jlc3N7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItbWVudXtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VyLW1lbnU+YXtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub3RpZmljYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC5tZWRpYTpob3ZlcntcclxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc21hbGx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVkaWEtYm9keSB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJlZ3Jlc297XHJcbiAgICB3aWR0aDo0NHB4O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHhcclxufVxyXG5oci5uZXcxIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDExNywgMTE2LCAxMTYsIDAuODg0KTtcclxuICB9XHJcblxyXG4gIC5iYWRnZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29udGVuaWRvIHtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhuYXZ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLml6e1xyXG4gIG1hcmdpbjogMHB4IC0yNXB4IDBweCAtMjVweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oaWRle1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG4gICAgLmhuYXZ7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAxNTEsIDE1MSwgMC45MzgpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjpwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JvbGwtdG8tdG9wIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuc2hvdy1zY3JvbGwge1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbi5jbG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jbG9jayAudGllbXBvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9jazpob3ZlciAudGllbXBvIHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbn1cclxuIFxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7IFxyXG4gICAgLmJhY2t7XHJcbiAgICAgICAgd2lkdGg6IDY1cHg7IFxyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5tYXR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7IFxyXG4gICAgICAgIC8vd2lkdGg6IDE4MHB4OyBcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuYXZhbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDsgd2lkdGg6IDIzMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/materia/components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/materia/components/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _models_learning_trMateria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/learning/trMateria */ "./src/app/models/learning/trMateria.ts");
/* harmony import */ var _services_universidad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_timing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/timing */ "./src/app/services/timing.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, _usuarioService, router, _materiaService, 
    //private _avisosService: AvisosService,
    _actividadService, _plataformaService, modalService, location) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this._materiaService = _materiaService;
        this._actividadService = _actividadService;
        this._plataformaService = _plataformaService;
        this.modalService = modalService;
        this.location = location;
        this.mostrarRetros = false;
        this.msgDocenteLinea = 0;
        this.selectedMateria = new _models_learning_trMateria__WEBPACK_IMPORTED_MODULE_4__["TrMateria"]();
        this.showScrollHeight = 300;
        this.hideScrollHeight = 10;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_9__["GLOBAL"].urlAssets;
        this.universidad = _services_universidad__WEBPACK_IMPORTED_MODULE_5__["universidad"];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.onWindowScroll = function () {
        if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
            this.showScroll = true;
        }
        else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
            this.showScroll = false;
        }
    };
    HeaderComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.nombre = this.identity.nombre;
        this.color = this.identity.color;
        this.selectedMateria = this._materiaService.getSelectedMateria();
        if (this._materiaService.getSelectedMateria().docente) {
            this.idUsuarioDocente = this._materiaService.getSelectedMateria().docente.usuario_id;
        }
        this.materias = this._materiaService.getMaterias();
        this.idMateria = this.selectedMateria.materia_id;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
        };
        this.intervalD = setInterval(function () {
            _this.docente();
        }, src_app_services_timing__WEBPACK_IMPORTED_MODULE_10__["Timing"].materia);
        this.consultaAvance();
        this.consultaNumAvisos();
        //this.consultaAvisos();
        this.consultaMensajes();
        this.consultaRetros();
        this._actividadService.actividadCompletada.subscribe(function (response) {
            //this.actualizaInfoMateria();
            _this.consultaAvance();
        });
        var now = new Date();
        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
    };
    HeaderComponent.prototype.nuevoLink = function (actividad_id) {
        localStorage.setItem('identModal', '1');
        this.router.navigate(['materia/actividad/' + actividad_id]);
    };
    HeaderComponent.prototype.docente = function () {
        var _this = this;
        this._plataformaService.consultamsjDocente(this.jwt, this.idUsuarioDocente, this.idMateria).subscribe(function (response) {
            if (response) {
                _this.docenteActivo = parseInt(response['activo']);
                if (_this.docenteActivo == 1 && _this.msgDocenteLinea == 0) {
                    alertify.success('Docente en línea');
                    _this.msgDocenteLinea = 1;
                }
                _this.numMensajes = response['numMensajes'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaRetros = function () {
        var _this = this;
        this._materiaService.consultaRetros(this.jwt, this.idMateria).subscribe(function (response) {
            if (response && response['status']) {
                _this.numRetros = response['totalMensajes'];
                _this.mensajesRetros = response['mensajes'];
                console.log(_this.mensajesRetros);
            }
            else {
                _this.numRetros = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.redireccionamiento = function (url) {
        this.router.navigate(['./actividad/' + url]);
    };
    HeaderComponent.prototype.mostrarMsgRetros = function () {
        if (!this.mostrarRetros)
            this.mostrarRetros = true;
        else
            this.mostrarRetros = false;
    };
    HeaderComponent.prototype.consultaMensajes = function () {
        var _this = this;
        this._materiaService.consultaNumMensajes(this.jwt, this.idMateria).subscribe(function (response) {
            if (response && response['status']) {
                _this.numMensajes = response['totalMensajes'];
            }
            else {
                _this.numMensajes = null;
            }
            _this.identModal = localStorage.getItem('identModal');
            localStorage.removeItem('identModal');
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaNumAvisos = function () {
        var _this = this;
        this._materiaService.consultaNumAvisos(this.jwt, this.idMateria).subscribe(function (response) {
            if (response && response['status']) {
                var _numAviso = response['numAviso'][0];
                _this._numAviso = _numAviso.num_avisos;
            }
            else {
                _this._numAviso = null;
            }
            console.log(_this._numAviso);
        }, function (error) {
            console.log(error);
        });
    };
    /*consultaAvisos(){
        let nuevos= 1;
        this.idMateria
        let importante = false
        this._materiaService.consultaAvisos(this.idMateria).subscribe(
            response =>{
                if (response && response['status']){
                    let _avisos = response['aviso'];
                    _avisos.forEach(_aviso => {
                        if (_aviso.importancia_aviso_id == "2") {
                            importante = true;
                        }

                        
                        _aviso.fecha_inicio = new Date(_aviso.fecha_inicio*1000);
                        _aviso.fecha_fin = new Date(_aviso.fecha_fin*1000);
                        
                    });
                    this.avisos = _avisos;
                    console.log(this.avisos);
                    
                    if(importante){
                        this.abreAvisos(this.modalAvisos);
                        // this._materiaService.marcarVisto().subscribe()
                    }
                }
            },error =>{
              console.log(<any>error)
          });
    }*/
    /*abreAvisos(content){
        
        this.openModalAvisos(content)
    }*/
    HeaderComponent.prototype.regresoPag = function () {
        if (this.rol.rol_id == "2") {
            this.router.navigate(['/learning/materia']);
        }
        else if (this.rol.rol_id == "3") {
            this.router.navigate(['/docente/home']);
        }
        else {
            this.location.back();
        }
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(function (response) {
            if (response && response['status']) {
            }
        }, function (error) {
            console.log(error);
        });
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
    };
    HeaderComponent.prototype.open = function (content) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'modal-xl'
        };
        this.modalService.open(content, ngbModalOptions).result.then(function (result) {
        }, function (reason) {
        });
    };
    HeaderComponent.prototype.openModalAvisos = function (content) {
        var ngbModalOptions = { windowClass: 'modal-xl' };
        this.modalService.open(content, ngbModalOptions).result.then(function (result) {
        }, function (reason) {
        });
    };
    HeaderComponent.prototype.cambiaMateria = function (id) {
        var _this = this;
        this._materiaService.seleccionaMateria(id, this.jwt).then(function (materia) {
            _this.consultaNumAvisos();
            //this.consultaAvisos();
            _this.consultaMensajes();
            _this.consultaRetros();
            _this.selectedMateria = materia;
            _this.consultaAvance();
            _this._materiaService.cambioMateria();
            _this.router.navigate(['/materia/']);
        });
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.consultaAvance = function () {
        var _this = this;
        this._materiaService.consultaAvance(this.selectedMateria.materia_id, this.selectedMateria.asignatura_id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.porcentaje = response['porcentaje'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalD);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "modalAvisos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentModalM'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "modalMensajes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/materia/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/materia/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_8__["MateriaService"],
            _actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_7__["ActividadService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_11__["PlataformaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/materia/components/sidebar/sidebar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/materia/components/sidebar/sidebar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"./home\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item pl-4\" >\r\n            <span><i class=\"fa fa-home\"></i> Inicio</span>\r\n        </a>\r\n        <div *ngFor=\"let modulo of modulos; let i = index\">\r\n            <div class=\"nested-menu\">\r\n                <div>\r\n                    <a class=\"list-group-item\" (click)=\"addExpandClass(i)\" style=\"box-shadow: -8px 0px #0000006e;\">\r\n                        <i *ngIf=\"modulo.desplegarAct\" class=\"fa fa-plus\" style=\"margin-left: 12px;\"></i>\r\n                        <span class=\"sombra\"><i *ngIf=\"!modulo.desplegarAct\" class=\"fa fa-minus\" style=\"margin-left: 12px;\"></i></span>\r\n                        <span>{{ modulo.modulo_nombre }}</span>\r\n                    </a>\r\n                </div>\r\n                <li class=\"nested\" [class.expand]=\"!modulo.desplegarAct\">\r\n                    <ul class=\"submenu\">\r\n                        <li *ngFor=\"let actividad of modulo.actividades\">\r\n                            <a [class.disabled]=\"disabled ? true : null\" [ngClass]=\"actividad.estatus_actividad_id == 1 ? 'alert-warning' : ''\"  [routerLink]=\"['./actividad' + '/' + actividad.actividad_id]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                                <span>\r\n                                    <i  title=\"{{actividad.estatus_actividad}}\"  class=\"fa {{actividad.icono}}\" ></i>\r\n                                    {{ actividad.actividad_nombre }} </span>\r\n                            </a>\r\n                            \r\n                        </li>                \r\n                    </ul>\r\n                </li>\r\n            </div>\r\n        </div>        \r\n    </div>\r\n\r\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n        <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\r\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n    </div>\r\n    \r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/materia/components/sidebar/sidebar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/materia/components/sidebar/sidebar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*fondo*/\n.sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 80px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: white;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n.sidebar .list-group a.list-group-item {\n    background: #F4F4F4;\n    padding: 10px;\n    border: 0;\n    border-radius: 0;\n    color: #075C8B;\n    font-weight: bold;\n    text-decoration: none;\n    white-space: initial; }\n.sidebar .list-group a.list-group-item .sombra {\n      -webkit-box-shadow: -10px 0px 0px #075C8B;\n      -moz-box-shadow: 2px 2px 5px #999;\n      margin-left: 0px;\n      display: initial; }\n.sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px;\n      background-color: #99999959;\n      border-radius: 50%;\n      width: 25px;\n      height: 25px;\n      padding: 5px 6px; }\n.sidebar .list-group a.list-group-item a.router-link-active {\n      color: white;\n      background: #3e5684; }\n.sidebar .list-group a:hover {\n    background: #075C8B;\n    color: #fff; }\n.sidebar .list-group a.router-link-active {\n    background: white;\n    color: #075C8B; }\n.sidebar .list-group .header-fields {\n    padding-top: 10px; }\n.sidebar .list-group .header-fields .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n.sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n.sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n.sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: white; }\n.sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n.sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n.sidebar .sidebar-dropdown .panel-title:hover {\n    background: #f2f2f2;\n    border-left: 2px solid black; }\n.sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: white;\n      border: 0 solid transparent; }\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #dbc1c1; }\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #f2f2f2; }\n.nested-menu .list-group-item {\n  cursor: pointer; }\n.nested-menu .nested {\n  list-style-type: none; }\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  font-weight: bold;\n  margin-left: -41px; }\n.nested-menu .expand ul.submenu li a {\n    color: #3e5684;\n    display: block;\n    padding: 6px;\n    margin: 10px;\n    margin-left: 15px;\n    font-size: 14px;\n    white-space: initial; }\n.nested-menu .expand ul.submenu li a.router-link-active {\n    color: white;\n    background: #3e5684; }\n.nested-menu .expand ul.submenu li a:hover {\n    background: white;\n    color: #999;\n    font-weight: bold;\n    text-decoration: none; }\n.nested-menu .expand ul.submenu li .aWarning {\n    color: #075C8B;\n    display: block;\n    background: #fff3cd;\n    padding: 6px;\n    margin: 10px;\n    font-size: 14px;\n    white-space: initial; }\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 115px;\n    left: 0px; } }\n@media print {\n  .sidebar {\n    display: none !important; } }\n@media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n::-webkit-scrollbar {\n  width: 8px;\n  scrollbar-color: dark; }\n::-webkit-scrollbar-track {\n  border-radius: 3px; }\n::-webkit-scrollbar-thumb {\n  border-radius: 3px; }\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n.toggle-button i {\n    font-size: 23px; }\n.toggle-button:hover {\n    background: #f2f2f2;\n    color: #fff; }\n.collapsed {\n  width: 50px; }\n.collapsed span {\n    display: none; }\na.disabled {\n  pointer-events: none;\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9jb21wb25lbnRzL3NpZGViYXIvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBaUMsU0FBUztBQUUxQztFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWE7RUFDYixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHdCQWQyQjtFQWUzQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFLbkIsaUNBQWdDLEVBNEduQztBQWpJRDtJQXlCWSxvQkFBbUI7SUFDbkIsY0FBWTtJQUVaLFVBQVM7SUFDVCxpQkFBZ0I7SUFFaEIsZUFBYztJQUNkLGtCQUFpQjtJQUNqQixzQkFBcUI7SUFDckIscUJBQW9CLEVBb0J2QjtBQXREVDtNQXFDZ0IsMENBQXlDO01BQzdDLGtDQUFpQztNQUNqQyxpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBQ2Y7QUF6Q2I7TUEyQ2dCLG1CQUFrQjtNQUNsQiw0QkFBMkI7TUFDM0IsbUJBQWtCO01BQ2xCLFlBQVc7TUFDWCxhQUFZO01BQ1osaUJBQWdCLEVBQ25CO0FBakRiO01BbURnQixhQUFZO01BQ1osb0JBQTRCLEVBQy9CO0FBckRiO0lBeURZLG9CQUFtQjtJQUNuQixZQUFXLEVBRWQ7QUE1RFQ7SUFnRVksa0JBQWlCO0lBQ2pCLGVBQWMsRUFDakI7QUFsRVQ7SUFvRVksa0JBQWlCLEVBS3BCO0FBekVUO01BdUVnQiwrQ0FBOEMsRUFDakQ7QUF4RWI7SUE2RVksb0JBQW1CO0lBQ25CLGFBQVksRUFDZjtBQS9FVDtJQWlGWSxnQkFBZTtJQUNmLGFBQVk7SUFDWixpQkFBZ0IsRUFvQm5CO0FBdkdUO01BcUZnQixZQUFXO01BQ1gsc0JBQXFCO01BQ3JCLGlCQUFnQjtNQUNoQixrQkExRmUsRUFpR2xCO0FBL0ZiO1FBMEZvQixtQkFBa0I7UUFDbEIsZUFBYztRQUNkLHdCQUF1QjtRQUN2QixrQkFBaUIsRUFDcEI7QUE5RmpCOztNQWtHZ0IsWUFBVztNQUNYLGNBQWE7TUFDYixxQkFBb0IsRUFDdkI7QUFyR2I7SUF5R1ksb0JBQWdEO0lBQ2hELDZCQUE0QixFQUMvQjtBQTNHVDtJQTZHWSxpQkFBZ0I7SUFDaEIsYUFBWSxFQWlCZjtBQS9IVDtNQWlIb0IsaUJBQWdCO01BQ2hCLHdCQXBIVztNQXFIWCw0QkFBMkIsRUFPOUI7QUExSGpCO1FBcUh3QixlQUF5QixFQUM1QjtBQXRIckI7UUF3SHdCLFlBQVcsRUFDZDtBQXpIckI7TUE0SG9CLG9CQUFnRCxFQUNuRDtBQU1qQjtFQUVRLGdCQUFlLEVBQ2xCO0FBSEw7RUFLUSxzQkFBcUIsRUFDeEI7QUFOTDtFQVFRLGNBQWE7RUFDYixVQUFTLEVBQ1o7QUFWTDtFQWFZLGVBQWM7RUFDZCxzQkFBcUI7RUFDckIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFpQ3JCO0FBbERUO0lBb0JvQixlQUF1QjtJQUN2QixlQUFjO0lBRWQsYUFBVztJQUNYLGFBQVc7SUFDWCxrQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixxQkFBb0IsRUFDdkI7QUE1QmpCO0lBOEJvQixhQUFZO0lBQ1osb0JBQTRCLEVBQy9CO0FBaENqQjtJQWtDb0Isa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsc0JBQW9CLEVBQ3ZCO0FBdENqQjtJQXlDb0IsZUFBYztJQUNkLGVBQWM7SUFDZCxvQkFBbUI7SUFDbkIsYUFBVztJQUNYLGFBQVc7SUFDWCxnQkFBZTtJQUNmLHFCQUFvQixFQUN2QjtBQU1qQjtFQUNJO0lBQ0ksV0FBVTtJQUNWLFVBQVMsRUFDWixFQUFBO0FBRUw7RUFDSTtJQUNJLHlCQUF3QixFQUMzQixFQUFBO0FBRUw7RUFDSTtJQUNJLGNBQWEsRUFDaEIsRUFBQTtBQUdMO0VBQ0ksV0FBVTtFQUNWLHNCQUFxQixFQUN4QjtBQUVEO0VBRUksbUJBQWtCLEVBQ3JCO0FBRUQ7RUFDSSxtQkFBa0IsRUFFckI7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFVBQVM7RUFDVCxZQUFXO0VBQ1gsb0JBQW1CO0VBUW5CLDJCQUEwQjtFQUsxQixpQ0FBZ0MsRUFDbkM7QUFyQkQ7SUFTUSxnQkFBZSxFQUNsQjtBQVZMO0lBWVEsb0JBQWdEO0lBQ2hELFlBQVcsRUFDZDtBQVNMO0VBQ0ksWUFBVyxFQUlkO0FBTEQ7SUFHUSxjQUFhLEVBQ2hCO0FBSUw7RUFDSSxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLypmb25kbyovXHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgYS5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luOjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAvL2NvbG9yOiAgcmdiKDU4LCAxNzUsIDE3Mik7IC8qdGV4dG8qL1xyXG4gICAgICAgICAgICBjb2xvcjogIzA3NUM4QjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnNvbWJyYXtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMHB4IDBweCAjMDc1QzhCOyAgXHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzk5OTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTU5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig2MiwgODYsIDEzMikgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQ6cmdiKDU4LCAxNzUsIDE3Mik7IC8qc29icmVwb3NzaW9uIG1vdXNlKi9cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA3NUM4QjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZDpyZ2IoNTgsIDE3NSwgMTcyKTsgLypzb2JyZXBvc3Npb24gbW91c2UqL1xyXG4gICAgICAgICAgICAvL2NvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwNzVDOEI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXItZmllbGRzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaWRlYmFyLWRyb3Bkb3duIHtcclxuICAgICAgICAqOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlcixcclxuICAgICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIxOSwgMTkzLCAxOTMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQxcHg7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjIsIDg2LCAxMzIpIDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQ6ICByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig2MiwgODYsIDEzMikgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYVdhcm5pbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb2xvcjogXHQjYjg5NzNkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDc1QzhCO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XHQjZmZmM2NkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZWFkZXItZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IGRhcms7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgXHJcbn1cclxuXHJcbi50b2dnbGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyMzZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjk7XHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbGxhcHNlZCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/materia/components/sidebar/sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/components/sidebar/sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_materia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, _usuarioService, _materiaService, _actividadService, router) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this._materiaService = _materiaService;
        this._actividadService = _actividadService;
        this.router = router;
        this.disabled = false;
        this.actividadesCargadas = null;
        this.contenidosCargados = null;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._materiaService.actividadesCargadas.subscribe(function (response) {
            setTimeout(function () {
                if (response['componente'] == 'main') {
                    if (response['cargado'] != undefined && response['cargado'] == false)
                        _this.disabled = true;
                    else if (response['cargado'] == undefined && response['actividad']) {
                        if (response['actividad']['tipo_actividad_id'] == 1)
                            _this.disabled = false;
                    }
                    else if (response['cargado'] == true && response['actividad'] == undefined) {
                        _this.disabled = false;
                    }
                }
                else if (response['componente'] == 'home-materia' || response['componente'] == 'actividad'
                    || response['componente'] == 'portafolio') {
                    if (response['cargado'])
                        _this.disabled = false;
                }
            }, 1);
        });
        this.asignatura = this._materiaService.getSelectedMateria();
        this.modulos = this._materiaService.getModulos();
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.rol = this._usuarioService.getRol();
        this.privilegios = this._usuarioService.getPrivilege();
        // this.modulos.forEach(modulo => {
        //     modulo.actividades.forEach(actividad => {
        //         console.log(actividad);
        //         if (actividad.estatus_actividad_id == 1) {
        //             this.router.navigate(['../actividad/' + actividad.actividad_id]);
        //             break;
        //         }
        //     });
        // });
        var array = this.router.url.split('/');
        var location = array[2];
        if (location === 'home') {
            var bandera = false;
            for (var _i = 0, _a = this.modulos; _i < _a.length; _i++) {
                var modulo = _a[_i];
                for (var _b = 0, _c = modulo.actividades; _b < _c.length; _b++) {
                    var actividad = _c[_b];
                    if (actividad.estatus_actividad_id == 1) {
                        bandera = true;
                        console.log(this.router.url);
                        this.router.navigate(['/materia/actividad/' + actividad.actividad_id]);
                        break;
                    }
                }
                if (bandera)
                    break;
            }
        }
        this._materiaService.materiaActualizada.subscribe(function (response) {
            _this.modulos = _this._materiaService.getModulos();
            console.log(_this.modulos);
        });
        this._actividadService.actividadCompletada.subscribe(function (response) {
            var selectedMateria = _this._materiaService.getSelectedMateria();
            _this._materiaService.consultaMenu(_this.jwt, selectedMateria.asignatura_grupo_id, selectedMateria.materia_id).subscribe(function (response) {
                if (response && response['status']) {
                    localStorage.setItem('modulos', JSON.stringify(response['modulo']));
                    _this.modulos = response['modulo'];
                }
            }, function (error) {
                console.log(error);
            });
        });
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.idAsignatura = this.asignatura.asignatura_id;
        this._actividadService.actividadCompletada.subscribe(function (response) {
            //this.actualizaInfoMateria();
            _this.modulos = _this._materiaService.getModulos();
        });
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (i) {
        if (!this.modulos[i].desplegarAct) {
            this.modulos[i].desplegarAct = 1;
        }
        else {
            this.modulos[i].desplegarAct = 0;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/materia/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/materia/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _services_materia_service__WEBPACK_IMPORTED_MODULE_4__["MateriaService"],
            _actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ActividadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/materia/materia-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/materia/materia-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MateriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaRoutingModule", function() { return MateriaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materia.component */ "./src/app/materia/materia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _materia_component__WEBPACK_IMPORTED_MODULE_2__["MateriaComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'seleccion', loadChildren: './seleccion-materia/seleccion-materia.module#SeleccionMateriaModule' },
            { path: 'home', loadChildren: './home-materia/home-materia.module#HomeMateriaModule' },
            { path: 'actividad/:id', loadChildren: './actividad/main/main.module#MainActividadModule' },
            { path: 'portafolio', loadChildren: './actividad/portafolio-evidencias/portafolio-evidencias.module#PortafolioEvidenciasModule' },
            { path: 'avance', loadChildren: './avance/avance.module#AvanceModule' },
            { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule' },
            { path: 'mensajes/:id', loadChildren: '../docente/mensajeria/mensajeria.module#MensajeriaModule' },
            { path: 'avisos/:id', loadChildren: '../components/avisos/avisos.module#AvisosModule' }
        ]
    }
];
var MateriaRoutingModule = /** @class */ (function () {
    function MateriaRoutingModule() {
    }
    MateriaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MateriaRoutingModule);
    return MateriaRoutingModule;
}());



/***/ }),

/***/ "./src/app/materia/materia.component.html":
/*!************************************************!*\
  !*** ./src/app/materia/materia.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"show\"></app-header>\r\n<app-sidebar *ngIf=\"show\" (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\" >\r\n    <router-outlet  ></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/materia/materia.component.scss":
/*!************************************************!*\
  !*** ./src/app/materia/materia.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 84px;\n  margin-left: 235px;\n  padding: 0px 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxtYXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0kseUNBQXdDLEVBQzNDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLDJCQUEwQjtJQUMxQiw0QkFBMkIsRUFDOUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvbWF0ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogODRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNvbGxhcHNlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/materia/materia.component.ts":
/*!**********************************************!*\
  !*** ./src/app/materia/materia.component.ts ***!
  \**********************************************/
/*! exports provided: MateriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaComponent", function() { return MateriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MateriaComponent = /** @class */ (function () {
    function MateriaComponent(router) {
        this.router = router;
        this.show = true;
    }
    MateriaComponent.prototype.ngOnInit = function () {
        var urlArray = this.router.url.split('/');
        if (urlArray[2] === 'video-conferencia') {
            this.show = false;
        }
    };
    MateriaComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    MateriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-materia',
            template: __webpack_require__(/*! ./materia.component.html */ "./src/app/materia/materia.component.html"),
            styles: [__webpack_require__(/*! ./materia.component.scss */ "./src/app/materia/materia.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MateriaComponent);
    return MateriaComponent;
}());



/***/ }),

/***/ "./src/app/materia/materia.module.ts":
/*!*******************************************!*\
  !*** ./src/app/materia/materia.module.ts ***!
  \*******************************************/
/*! exports provided: MateriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaModule", function() { return MateriaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _materia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materia-routing.module */ "./src/app/materia/materia-routing.module.ts");
/* harmony import */ var _materia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materia.component */ "./src/app/materia/materia.component.ts");
/* harmony import */ var _shared_modules_layout_materia_layout_materia_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modules/layout-materia/layout-materia.module */ "./src/app/shared/modules/layout-materia/layout-materia.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { BasicLoginComponent} from '../components/basic-login/basic-login.component'
var MateriaModule = /** @class */ (function () {
    function MateriaModule() {
    }
    MateriaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_materia_component__WEBPACK_IMPORTED_MODULE_3__["MateriaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _materia_routing_module__WEBPACK_IMPORTED_MODULE_2__["MateriaRoutingModule"],
                _shared_modules_layout_materia_layout_materia_module__WEBPACK_IMPORTED_MODULE_4__["LayoutMateriaModule"],
            ], exports: [
                _materia_component__WEBPACK_IMPORTED_MODULE_3__["MateriaComponent"]
            ]
        })
    ], MateriaModule);
    return MateriaModule;
}());



/***/ }),

/***/ "./src/app/models/datosGenerales/catAsignatura.ts":
/*!********************************************************!*\
  !*** ./src/app/models/datosGenerales/catAsignatura.ts ***!
  \********************************************************/
/*! exports provided: CatAsignaturas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatAsignaturas", function() { return CatAsignaturas; });
var CatAsignaturas = /** @class */ (function () {
    function CatAsignaturas() {
    }
    return CatAsignaturas;
}());



/***/ }),

/***/ "./src/app/models/learning/trMateria.ts":
/*!**********************************************!*\
  !*** ./src/app/models/learning/trMateria.ts ***!
  \**********************************************/
/*! exports provided: TrMateria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrMateria", function() { return TrMateria; });
/* harmony import */ var _datosGenerales_catAsignatura__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datosGenerales/catAsignatura */ "./src/app/models/datosGenerales/catAsignatura.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TrMateria = /** @class */ (function (_super) {
    __extends(TrMateria, _super);
    function TrMateria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrMateria;
}(_datosGenerales_catAsignatura__WEBPACK_IMPORTED_MODULE_0__["CatAsignaturas"]));



/***/ }),

/***/ "./src/app/services/plataforma.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/plataforma.service.ts ***!
  \************************************************/
/*! exports provided: PlataformaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaService", function() { return PlataformaService; });
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




var PlataformaService = /** @class */ (function () {
    function PlataformaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.listenTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenEncuesta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PlataformaService.prototype.cambiaAvisoEncuestaEstatus = function (encuesta_id) {
        this.change.emit(encuesta_id);
    };
    PlataformaService.prototype.consultaNomRetro = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaRetrosDocente = function (jwt, id_docente) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjDocente = function (jwt, id_docente, id_materia) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/notificaciones/onlineDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/numMensajesAlumno.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnosDetalles = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/mensajeriaAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaConferenciasActivas = function () {
        return this._httpClient.get(this.url + '/learning/notificaciones/consultaConferenciasAlumno.php');
    };
    PlataformaService.prototype.conferenciasActivasDocente = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/consultaConferenciasActivas.php' + params);
    };
    PlataformaService.prototype.verNotificacionBloqueo = function (id, id_rol) {
        var params = '?id_persona=' + id;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/general/tickets/consultaBloqueo.php' + params);
    };
    PlataformaService.prototype.consultaTicket = function () {
        return this._httpClient.get(this.url + 'general/tickets/notificacionTicket.php');
    };
    PlataformaService.prototype.consultaNotificaciones = function (idRol) {
        if (idRol == "2" || idRol == "4") {
            return this._httpClient.get(this.url + 'learning/notificaciones/general.php');
        }
        else if (idRol == "3") {
            return this._httpClient.get(this.url + 'controlEscolar/notificaciones/general.php');
        }
    };
    PlataformaService.prototype.consultaJWT = function (matricula, rol) {
        var formData = new FormData();
        formData.append('rol', rol);
        formData.append('clave', matricula);
        return this._httpClient.post(this.url + 'general/auth_clave.php', formData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlataformaService.prototype, "change", void 0);
    PlataformaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlataformaService);
    return PlataformaService;
}());



/***/ }),

/***/ "./src/app/services/universidad.ts":
/*!*****************************************!*\
  !*** ./src/app/services/universidad.ts ***!
  \*****************************************/
/*! exports provided: universidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "universidad", function() { return universidad; });
var universidad = {
    color: "#292f33",
    logo: "assets/images/logo.png",
    logoDark: "assets/images/logoWhite.png",
    nombre: "Casa Lamm"
};


/***/ }),

/***/ "./src/app/shared/modules/layout-materia/layout-materia.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/modules/layout-materia/layout-materia.module.ts ***!
  \************************************************************************/
/*! exports provided: LayoutMateriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutMateriaModule", function() { return LayoutMateriaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materia_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../materia/components/header/header.component */ "./src/app/materia/components/header/header.component.ts");
/* harmony import */ var _materia_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../materia/components/sidebar/sidebar.component */ "./src/app/materia/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutMateriaModule = /** @class */ (function () {
    function LayoutMateriaModule() {
    }
    LayoutMateriaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_materia_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _materia_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
                _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__["ArchivoModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_8__["LogotipoUsuarioModule"],
            ],
            exports: [
                _materia_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _materia_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ]
        })
    ], LayoutMateriaModule);
    return LayoutMateriaModule;
}());



/***/ })

}]);
//# sourceMappingURL=materia-materia-module.js.map