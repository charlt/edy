(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-reportes-reportes-module"],{

/***/ "./src/app/administracion/reportes/reportes-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/reportes/reportes-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ReportesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesRoutingModule", function() { return ReportesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reportes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportes.component */ "./src/app/administracion/reportes/reportes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: ':id',
        component: _reportes_component__WEBPACK_IMPORTED_MODULE_2__["ReportesComponent"]
    }
];
var ReportesRoutingModule = /** @class */ (function () {
    function ReportesRoutingModule() {
    }
    ReportesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportesRoutingModule);
    return ReportesRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/reportes/reportes.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/reportes/reportes.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\" *ngFor=\"let objeto of objetos; let i = index\">\r\n            <div class=\"card cTipo1 text-center\" (click)=\"consultaVista(objeto);\">\r\n              <div class=\"card-body\">\r\n                <h1><i class=\"fa {{objeto.icono}}\"></i></h1>\r\n               <p>{{objeto.nombre}}</p>\r\n              </div>\r\n            </div>\r\n          </div>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n      <div *ngIf=\"tipo == 0\" class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4>Reportes de la plataforma</h4>\r\n            <p>En este apartado podrás encontrar concentrados de información de alumnos,docentes y grupos.\r\n              <br>Para comenzar debes selecciona una categoría</p>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"tipo == 1\" class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4><i class=\"fa {{selectedObjeto.icono}}\"></i> Concentrados de {{selectedObjeto.nombre}}</h4>\r\n          </div>\r\n          <div *ngIf=\"!vistas\" class=\"col-md-12\">\r\n            <p>No existen reportes en esta sección</p>\r\n          </div>\r\n          <div class=\"col-md-4\" *ngFor=\"let vista of vistas\">\r\n            <div class=\"card cTipo1\" (click)=\"seleccionaVista(vista);\">\r\n              <div class=\"card-body text-center\">\r\n                <h5 class=\"card-title\">{{vista.nombre}}</h5>\r\n                <p class=\"texto\">{{vista.descripcion}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"tipo == 2\" class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h5 >{{selectedVista.nombre}}</h5><br>\r\n            <p>{{selectedVista.descripcion}}</p>\r\n            <span *ngIf=\"nivel != 0 &&  nivel !=5\">Selecciona una opción:</span>\r\n            <span *ngIf=\"!(nivel != 0 &&  nivel !=5)\">Da clic en <b>Generar reporte</b> </span>\r\n          </div>\r\n          <div *ngIf=\"nivel == 5\" class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cat_ciclo\">1. Selecciona un ciclo</label>\r\n              <select class=\"form-control\" id=\"cat_ciclo\" [(ngModel)]=\"ciclo_id\" (change)=\"consultaGrupos(ciclo_id)\">\r\n                <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n                <option value=\"{{ciclo.ciclo_id}}\" *ngFor=\"let ciclo of ciclos\">{{ciclo.ciclo_desc}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"nivel == 5\" class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cat_asignatura\">2. Selecciona el grupo</label>\r\n              <select class=\"form-control\" id=\"cat_asignatura\" [(ngModel)]=\"grupo_id\" (change)=\"obtieneURL(grupo_id)\">\r\n                <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n                <option value=\"{{grupo.grupo_id}}\" *ngFor=\"let grupo of grupos\">{{grupo.nombre_grupo}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"nivel == 6\" class=\"col-md-5\">\r\n          <div class=\"form-group\">\r\n            <label for=\"cat_ciclo\">1. Selecciona un ciclo</label>\r\n            <select class=\"form-control\" id=\"cat_ciclo\" [(ngModel)]=\"ciclo_id\" (change)=\"obtieneURL(ciclo_id)\">\r\n              <option value=\"\" hidden disabled>Selecciona una opción</option>\r\n              <option value=\"{{ciclo.ciclo_id}}\" *ngFor=\"let ciclo of ciclos\">{{ciclo.ciclo_desc}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <app-consulta-asignatura  *ngIf=\"nivel == 1 || nivel == 2 || nivel == 3 || nivel == 4 \" [tipo]=\"'medium'\" [nivel]=\"nivel\" (sucessEvent)=\"obtieneURL($event)\"></app-consulta-asignatura><br>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-success pull-right\" (click)=\"obtieneReportes()\">Generar reporte</button>\r\n          </div>\r\n        </div>\r\n        \r\n        <!--div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultInline1\">\r\n                  <label class=\"custom-control-label\" for=\"defaultInline1\">Reporte de alumnos en grupo</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultInline2\">\r\n                  <label class=\"custom-control-label\" for=\"defaultInline2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"defaultInline3\">\r\n                  <label class=\"custom-control-label\" for=\"defaultInline3\">Reporte de alumnos en grupo</label>\r\n                </div>\r\n              </div>\r\n            </div><br>\r\n            <button class=\"btn btn-primary pull-right\">Generar reporte</button>\r\n          </div>\r\n        </div>\r\n      </div-->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/reportes/reportes.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/reportes/reportes.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.cTipo1 {\n  height: 150px;\n  cursor: pointer;\n  margin-top: 10%; }\n\n.texto {\n  margin: 0px;\n  color: black;\n  min-height: 80px;\n  position: relative;\n  width: 100%;\n  bottom: 0px; }\n\n.tituloTipo2 {\n  position: absolute;\n  margin-top: -8%; }\n\n.jumbotron {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcmVwb3J0ZXMvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9yZXBvcnRlcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxccmVwb3J0ZXNcXHJlcG9ydGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0ksV0FBVTtFQUNWLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSwwQkExQmtCO0VBMkJsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQS9Ca0IsRUFnQ3JCOztBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjs7QUFDRDtFQUNJLDBCQXRDa0I7RUF1Q2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQ3BERDtFQUNJLGNBQVk7RUFDWixnQkFBZTtFQUNmLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIscUJBQW9CLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcmVwb3J0ZXMvcmVwb3J0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5jVGlwbzF7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi50ZXh0b3tcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi50aXR1bG9UaXBvMntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC04JTtcclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG4vLyBkaXZ7XHJcbi8vICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/reportes/reportes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/reportes/reportes.component.ts ***!
  \***************************************************************/
/*! exports provided: ReportesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesComponent", function() { return ReportesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reportes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/reportes.service */ "./src/app/administracion/reportes/services/reportes.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _grupo_service_grupo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grupo/service/grupo.service */ "./src/app/administracion/grupo/service/grupo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(_usuarioService, _reporteService, _catalogoService, _gruposService, route) {
        this._usuarioService = _usuarioService;
        this._reporteService = _reporteService;
        this._catalogoService = _catalogoService;
        this._gruposService = _gruposService;
        this.route = route;
        this.tipo = 0;
        this.nivel = 0;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].url;
        this.title = "Consulta de concentrado";
        this._usuarioService.pushBreadcum(this.title, "", 1);
    }
    ReportesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idReporte = this.route.snapshot.params['id'];
        this._reporteService.consultaObjeto(this.idReporte).subscribe(function (response) {
            if (response && response['status']) {
                _this.objetos = response['objetos'];
            }
            else {
                _this.objetos = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.consultaVista = function (objeto) {
        var _this = this;
        this.selectedObjeto = objeto;
        this.tipo = 1;
        this._reporteService.consultaVistas(this.selectedObjeto.objeto_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.vistas = response['vistas'];
            }
            else {
                _this.vistas = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.seleccionaVista = function (vista) {
        var _this = this;
        this.selectedVista = vista;
        this.tipo = 2;
        this.nivel = parseInt(this.selectedVista.nivel);
        if (this.nivel == 5 || this.nivel == 6) {
            this.consultaVista;
            this._catalogoService.consultaCiclo().subscribe(function (response) {
                if (response && response['status']) {
                    _this.ciclos = response['ciclo'];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ReportesComponent.prototype.consultaGrupos = function (idCiclo) {
        var _this = this;
        this._gruposService.consultaGrupoFiltro(2, idCiclo).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupos = response['grupos'];
                console.log(_this.grupos);
            }
            else {
                _this.grupos = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReportesComponent.prototype.obtieneURL = function (event) {
        var url = this.url + this.selectedVista.url_api;
        var nivel = this.selectedVista.nivel;
        var params;
        if (nivel == 2) {
            var idPlanEstudio = event.idPlanEstudio;
            params = '?id_plan_estudios=' + idPlanEstudio;
        }
        if (nivel == 4) {
            var idAsignatura = event.idAsignatura;
            console.log(idAsignatura);
            params = '?id_asignatura=' + idAsignatura;
        }
        if (nivel == 5) {
            var idGrupo = event; //en este caso no se obtiene del filtro de asignaturas
            params = '?id_grupo=' + idGrupo;
        }
        if (nivel == 6) {
            var idCiclo = event; //en este caso no se obtiene del filtro de asignaturas
            params = '?id_ciclo=' + idCiclo;
        }
        this.urlReporte = url + params;
    };
    ReportesComponent.prototype.obtieneReportes = function () {
        if (this.selectedVista.nivel == 0)
            this.urlReporte = this.url + this.selectedVista.url_api;
        window.open(this.urlReporte, '_blank');
    };
    ReportesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.component.html */ "./src/app/administracion/reportes/reportes.component.html"),
            styles: [__webpack_require__(/*! ./reportes.component.scss */ "./src/app/administracion/reportes/reportes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_reportes_service__WEBPACK_IMPORTED_MODULE_3__["ReportesService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _grupo_service_grupo_service__WEBPACK_IMPORTED_MODULE_6__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReportesComponent);
    return ReportesComponent;
}());



/***/ }),

/***/ "./src/app/administracion/reportes/reportes.module.ts":
/*!************************************************************!*\
  !*** ./src/app/administracion/reportes/reportes.module.ts ***!
  \************************************************************/
/*! exports provided: ReportesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportes-routing.module */ "./src/app/administracion/reportes/reportes-routing.module.ts");
/* harmony import */ var _reportes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportes.component */ "./src/app/administracion/reportes/reportes.component.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportesModule = /** @class */ (function () {
    function ReportesModule() {
    }
    ReportesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reportes_component__WEBPACK_IMPORTED_MODULE_3__["ReportesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reportes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportesRoutingModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [_reportes_component__WEBPACK_IMPORTED_MODULE_3__["ReportesComponent"]]
        })
    ], ReportesModule);
    return ReportesModule;
}());



/***/ }),

/***/ "./src/app/administracion/reportes/services/reportes.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/reportes/services/reportes.service.ts ***!
  \**********************************************************************/
/*! exports provided: ReportesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesService", function() { return ReportesService; });
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




var ReportesService = /** @class */ (function () {
    function ReportesService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ReportesService.prototype.consulta = function (id) {
        var params = '?id_reporte=' + id;
        return this._httpClient.get(this.url + 'reportes/administracion/consulta.php' + params);
    };
    ReportesService.prototype.consultaObjeto = function (id) {
        var params = '?id_reporte=' + id;
        return this._httpClient.get(this.url + 'reportes/administracion/consultaObjetos.php' + params);
    };
    ReportesService.prototype.consultaVistas = function (id) {
        var params = '?id_objeto=' + id;
        return this._httpClient.get(this.url + 'reportes/administracion/consultaVistas.php' + params);
    };
    ReportesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportesService);
    return ReportesService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-reportes-reportes-module.js.map