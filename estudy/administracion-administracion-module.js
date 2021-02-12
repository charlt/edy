(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-administracion-module"],{

/***/ "./src/app/administracion/administracion-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/administracion-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdministracionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionRoutingModule", function() { return AdministracionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administracion.component */ "./src/app/administracion/administracion.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _administracion_component__WEBPACK_IMPORTED_MODULE_2__["AdministracionComponent"],
        children: [
            //{ path: 'estadisticas', loadChildren: '../administracion/estadisticas/estadisticas.module#EstadisticasModule'},
            //{ path: 'documentos', loadChildren: '../administracion/documentos/documentos.module#DocumentosModule'},
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: '../administracion/dashboard/dashboard.module#DashboardModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'forms', loadChildren: './form/form.module#FormModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'carrera', loadChildren: '../administracion/carrera/carrera.module#CarreraModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'plan-estudios', loadChildren: '../administracion/plan-estudios/plan-estudios.module#PlanEstudiosModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'ciclo', loadChildren: '../administracion/ciclo/ciclo.module#CicloModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'grupo', loadChildren: '../administracion/grupo/grupo.module#GrupoModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'alumno', loadChildren: '../administracion/alumno/alumno.module#AlumnoModule' },
            { path: 'asignatura', loadChildren: '../administracion/asignatura/asignatura.module#AsignaturaModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule' },
            { path: 'manejador-correo', loadChildren: '../administracion/manejador-correo/manejador-correo.module#ManejadorCorreoModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'usuario', loadChildren: '../administracion/usuario/usuario.module#UsuarioModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'carga', loadChildren: '../administracion/carga-actividades/carga-actividades.module#CargaActividadesModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'rol', loadChildren: '../administracion/rol/rol.module#RolModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'lista-correo', loadChildren: '../administracion/lista-correo/lista-correo.module#ListaCorreoModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'privilegio', loadChildren: '../administracion/privilegios/privilegios.module#PrivilegiosModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'institucion', loadChildren: '../administracion/institucion/institucion.module#InstitucionModule', canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["PrivilegiosGuard"]] },
            { path: 'aspirante', loadChildren: '../administracion/aspirante/aspirante.module#AspiranteModule' },
            { path: 'rubricas', loadChildren: '../administracion/rubricas/rubricas.module#RubricasModule' },
            { path: 'pagos-alumno', loadChildren: '../administracion/pagos/alumnos/alumnos.module#PagosAlumnosModule' },
            { path: 'pagos', loadChildren: '../administracion/pagos/catalogo-pagos/catalogo-pagos.module#CatalogoPagosModule' },
            { path: 'suscripcion', loadChildren: '../administracion/pagos/suscripcion/suscripcion.module#SuscripcionModule' },
            { path: 'solicitud-pagos', loadChildren: '../administracion/pagos/solicitud/solicitud-pagos.module#SolicitudPagosModule' },
            { path: 'docente', loadChildren: '../administracion/docente/docente.module#DocenteModule' },
            { path: 'reportes', loadChildren: '../administracion/reportes/reportes.module#ReportesModule' },
            { path: 'encuesta', loadChildren: '../administracion/encuesta/encuesta.module#EncuestaModule' },
            { path: 'videoconferencia', loadChildren: './videoconferencia/videoconferencia.module#VideoconferenciaModule' },
            { path: 'migracion', loadChildren: './migracion/migracion.module#MigracionModule' },
            { path: 'expediente', loadChildren: './admin-expediente/admin-expediente.module#AdminExpedienteModule' },
            { path: 'tickets', loadChildren: './tickets/tickets.module#TicketsModule' },
            { path: 'avisos', loadChildren: './avisos-admin/avisos-admin.module#AvisosAdminModule' },
            { path: 'matriculacion/:id', loadChildren: './matriculacion/matriculacion.module#MatriculacionModule' },
            { path: 'descuentos', loadChildren: '../administracion/pagos/descuentos/descuentos.module#DescuentosModule' },
            { path: 'calendario', loadChildren: 'src/app/administracion/calendario/calendario.module#CalendarioModule' }
        ]
    }
];
var AdministracionRoutingModule = /** @class */ (function () {
    function AdministracionRoutingModule() {
    }
    AdministracionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdministracionRoutingModule);
    return AdministracionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/administracion.component.html":
/*!**************************************************************!*\
  !*** ./src/app/administracion/administracion.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <app-page-header  [breadcum]=\"breadcum\" ></app-page-header>\r\n    <router-outlet  ></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/administracion/administracion.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/administracion/administracion.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXGFkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0kseUNBQXdDLEVBQzNDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLDJCQUEwQjtJQUMxQiw0QkFBMkIsRUFDOUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FkbWluaXN0cmFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/administracion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/administracion/administracion.component.ts ***!
  \************************************************************/
/*! exports provided: AdministracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionComponent", function() { return AdministracionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdministracionComponent = /** @class */ (function () {
    function AdministracionComponent(_usuarioService, _router) {
        this._usuarioService = _usuarioService;
        this._router = _router;
    }
    AdministracionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcum = this._usuarioService.getBreadcum();
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // console.log(event.url);
                _this.breadcum = _this._usuarioService.getBreadcum();
            }
        });
    };
    AdministracionComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    AdministracionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administracion',
            template: __webpack_require__(/*! ./administracion.component.html */ "./src/app/administracion/administracion.component.html"),
            styles: [__webpack_require__(/*! ./administracion.component.scss */ "./src/app/administracion/administracion.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdministracionComponent);
    return AdministracionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/administracion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/administracion/administracion.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministracionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionModule", function() { return AdministracionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/layout/layout.module */ "./src/app/shared/modules/layout/layout.module.ts");
/* harmony import */ var _administracion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administracion-routing.module */ "./src/app/administracion/administracion-routing.module.ts");
/* harmony import */ var _administracion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administracion.component */ "./src/app/administracion/administracion.component.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdministracionModule = /** @class */ (function () {
    function AdministracionModule() {
    }
    AdministracionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _administracion_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdministracionRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _shared_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]
            ],
            providers: [
                _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
            ],
            declarations: [_administracion_component__WEBPACK_IMPORTED_MODULE_5__["AdministracionComponent"]]
        })
    ], AdministracionModule);
    return AdministracionModule;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-administracion-module.js.map