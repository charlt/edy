(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avance-avance-module"],{

/***/ "./src/app/materia/avance/avance-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/materia/avance/avance-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AvanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceRoutingModule", function() { return AvanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _avance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avance.component */ "./src/app/materia/avance/avance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _avance_component__WEBPACK_IMPORTED_MODULE_2__["AvanceComponent"] },
];
var AvanceRoutingModule = /** @class */ (function () {
    function AvanceRoutingModule() {
    }
    AvanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AvanceRoutingModule);
    return AvanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/materia/avance/avance.component.html":
/*!******************************************************!*\
  !*** ./src/app/materia/avance/avance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 mt-3\">\r\n  <div class=\"alert alert-info text-center my-3 textReporte\">\r\n    En este reporte se muestra el avance correspondiente a las actividades con ponderación: ejercicios autocalificables, actividades de aprendizaje.\r\n    <br>\r\n    <b>Este reporte no indica la calificación definitiva de la materia</b>, sólo muestra el avance de las actividades asignadas por el profesor\r\n  </div>\r\n</div>\r\n<div class=\"col-12\"><br>\r\n  <ngb-tabset class=\"tabset1\">\r\n    <ngb-tab >\r\n      <ng-template ngbTabTitle ><p>Avance de materia</p></ng-template>\r\n        <ng-template ngbTabContent><!---->\r\n          <div class=\"modal-body\">\r\n            <app-historial></app-historial>\r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><p>Avance general</p></ng-template>\r\n        <ng-template ngbTabContent><!---->\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div  class=\" col-12 text-center\">\r\n                <h3 style=\"color: royalblue;\"><b>REPORTE DE AVANCE</b></h3>\r\n                <b>Fecha del reporte</b>\r\n                <p>{{fechaActual}}</p>\r\n              </div>\r\n            </div><br>\r\n          <div class=\"row\">\r\n            <div class=\" col-md-6 alert alert-primary nombre\" role=\"alert\">\r\n              <app-encabezado-persona [idPersona]=\"idPersona\" [idRol]=\"idRol\"></app-encabezado-persona>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button class=\"btn btn-primary pull-right impresion\" (click)=\"imprimir()\">Imprimir</button>\r\n            </div>\r\n          </div>\r\n            <br>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6 text-center\">\r\n                  <!--div class=\"card w-50 tarjetaMateria\">\r\n                      <div class=\"card-body text-center\">\r\n                        <h6 class=\"card-title\">Licenciatura en Educación Familiar</h6>\r\n                        <p class=\"card-text\">Semestre: 4°</p>\r\n                      </div>\r\n                  </div--><br>\r\n                  <div class=\"cont_avance\">\r\n                    <h6><b class=\"avanceGeneral\">Avance de todas las actividades pendientes</b></h6>\r\n                    <div class=\"porcentaje\">{{porcentajeTotal}}%</div>\r\n                      <round-progress class=\"col-sm-5 grafica\"\r\n                          [current]= porcentajeTotal\r\n                          [max]=\"100\"\r\n                          [color]=\"'#45ccce'\"\r\n                          [background]=\"'#eaeaea'\"\r\n                          [radius]=\"100\"\r\n                          [stroke]=\"15\"\r\n                          [semicircle]=\"false\"\r\n                          [rounded]=\"true\"\r\n                          [clockwise]=\"true\"\r\n                          [responsive]=\"false\"\r\n                          [duration]=\"800\"\r\n                          [animation]=\"'easeInOutQuart'\"\r\n                          [animationDelay]=\"0\">\r\n                          </round-progress>\r\n                      <h6 class=\"titulo\"><b>Bitácora de avance</b></h6>\r\n                      <div class=\"col-lg-6 tabla\">\r\n                        <table class=\"table\">\r\n                          <tr>\r\n                            <th>Mes</th>\r\n                            <th>Actividades</th>\r\n                          </tr>\r\n                          <tr *ngFor=\"let mes of meses\">\r\n                            <td>{{mes.mes}}</td>\r\n                            <td class=\"text-center\">{{mes.actividades_mes}}</td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"cont_acceso\">\r\n                    <div class=\"alert alert-primary  accesso pAccesso\" role=\"alert\">Primer acceso: {{fechaPrimer | date: \"dd/MM/yyy\"}}, {{fechaPrimer | date: \"shortTime\"}}</div>\r\n                    <div class=\"alert alert-info  accesso uAccesso\" role=\"alert\"> Último acceso: {{fechaUltim | date: \"dd/MM/yyy\"}},  {{fechaUltim | date: \"shortTime\"}}</div>\r\n                  </div>\r\n                  </div>\r\n              <div class=\"col-lg-6\">\r\n                  <h5 class=\"text-center asignaturasSemestre\"><b>Asignaturas del semestre</b></h5><br>\r\n                  <p class=\"altura\" style=\"visibility: hidden;\">.</p>\r\n                  <div *ngFor=\"let materia of materias\">\r\n                      <h5 class=\"text-center nombreMateria\"><b>{{materia.asignatura}}</b></h5>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <p class=\"pull-right\">{{materia.porcentaje}}%</p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"progress\">\r\n                        <div *ngIf=\"materia.porcentaje >= 66 \" class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{ 'width': materia.porcentaje + '%'}\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>       \r\n                        <div *ngIf=\"materia.porcentaje >= 33 && materia.porcentaje <= 65\" class=\"progress-bar bg-warning\" role=\"progressbar\" [ngStyle]=\"{ 'width': materia.porcentaje + '%'}\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>              \r\n                        <div *ngIf=\"materia.porcentaje >= 0 && materia.porcentaje <= 32\" class=\"progress-bar bg-danger\" role=\"progressbar\"  [ngStyle]=\"{ 'width': materia.porcentaje + '%'}\"  aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=100></div>\r\n                      </div><br>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-4\" >\r\n                            <div class=\" card text-white mb-3 actProm\" >\r\n                                <div class=\"card-body badge-secondary text-center\">\r\n                                  <p class=\"card-text\">Promedio de actividades calificadas</p>\r\n                                  <p>{{materia._promActividades}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"materia.calificacion\" class=\"card text-white mb-3 califActual\" [ngClass]=\"materia.calificacion >= 6 ? 'badge-success' : 'badge-danger'\" style=\"max-width: 18rem;\">\r\n                              <div class=\"card-body text-center\">\r\n                                <p class=\"card-text\">Calificación actual de la asignatura</p>\r\n                                <p class=\"card-text\">{{materia.calificacion}}</p>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-8 text-center textoAct\"><br><br>\r\n                          <p><b>{{materia.contestadas}}</b> de <b>{{materia.total}}</b> actividades entregadas</p>\r\n                          <p *ngIf=\"materia.actividadesSinCalificacion == 1\"><b>{{materia.actividadesSinCalificacion}}</b> actividad pendiente de calificación</p>\r\n                          <p *ngIf=\"materia.actividadesSinCalificacion >= 2 || materia.actividadesSinCalificacion == 0\"><b>{{materia.actividadesSinCalificacion}}</b> actividades pedientes de calificación</p> \r\n                          <p *ngIf=\"materia.incompletas == 1\"><b>{{actInc}}</b> actividad incompleta</p>\r\n                          <p *ngIf=\"materia.incompletas >= 2 || materia.incompletas == 0\"><b>{{materia.incompletas}}</b> actividades incompletas</p>\r\n                          <p *ngIf=\"materia.actividadesBorrador == 1\"><b>{{materia.actividadesBorrador}}</b> actividad en borrador</p> \r\n                          <p *ngIf=\"materia.actividadesBorrador >= 2 || materia.actividadesBorrador == 0\"><b>{{materia.actividadesBorrador}}</b> actividades en borrador</p>       \r\n                        </div>\r\n                      </div>            \r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab >\r\n      <ng-template ngbTabTitle ><p>Archivos subidos</p></ng-template>\r\n        <ng-template ngbTabContent><!---->\r\n          <div class=\"modal-body\">\r\n            <div class=\"input-group mb-3\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\"\r\n                aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n              </div>\r\n            </div>\r\n          <table class=\"table table-bordered table-striped\">\r\n            <tr >\r\n              <th>Asignatura</th>\r\n              <th>Actividad</th>\r\n              <th>Archivo</th>\r\n              <th>Fecha</th>\r\n              <!-- <th></th>\r\n              <th></th> -->\r\n            </tr>\r\n            <tr *ngFor=\"let archivo of archivos| filter:search; let i = index \">\r\n              <td>{{archivo.asignatura}}</td>\r\n              <td>{{archivo.actividad_nombre}}</td>\r\n              <td class=\"text-center\"><app-archivo class=\"archivo\" *ngIf=\"archivo.archivo\" [urlBase]=\"archivo.archivo\"></app-archivo></td>\r\n              <!-- <td>{{archivo.archivo}}</td> -->\r\n              <td class=\"text-center\">{{archivo.fecha_creacion | date: \"dd/MM/yyyy\"}} {{archivo.fecha_creacion | date: \"shortTime\"}}</td>\r\n              <!-- <td></td>\r\n              <td></td> -->\r\n            </tr>\r\n            <tr *ngIf=\"(archivos | filter: search).length === 0\">\r\n              <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n            </tr>\r\n          </table>\r\n          </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/materia/avance/avance.component.scss":
/*!******************************************************!*\
  !*** ./src/app/materia/avance/avance.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.tarjetaMateria {\n  margin-left: 25%; }\n\n.grafica {\n  margin: auto; }\n\n.tabla {\n  position: relative;\n  margin: auto; }\n\n.titulo {\n  position: relative;\n  text-align: center; }\n\n.accesso {\n  margin-left: 90px; }\n\n.porcentaje {\n  position: absolute;\n  left: 50%;\n  top: 140px;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%); }\n\n.asignaturasSemestre {\n  color: royalblue; }\n\n.avanceGeneral {\n  position: relative;\n  margin-top: -5%;\n  text-align: center; }\n\n.cont_acceso {\n  position: absolute;\n  margin-top: 45%;\n  margin-left: -13%;\n  width: 100%; }\n\n@media print {\n  :host ::ng-deep .tabset1 a.nav-link {\n    visibility: hidden;\n    display: none; }\n  .textReporte {\n    display: none; }\n  .nombre {\n    width: 74%;\n    height: 1%; }\n  .impresion {\n    visibility: hidden; }\n  .grafica {\n    margin-top: -26%;\n    margin-left: 0%;\n    width: 40%;\n    height: 40%; }\n  .titulo {\n    position: absolute;\n    width: 200%;\n    left: 250%;\n    top: 0px;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%); }\n  .tabla {\n    position: absolute;\n    width: 200%;\n    left: 250%;\n    top: 50px;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%); }\n  .pAccesso {\n    width: 65%; }\n  .uAccesso {\n    width: 65%; }\n  .asignaturasSemestre {\n    position: relative;\n    margin-top: 2%;\n    visibility: hidden; }\n  .altura {\n    position: relative;\n    margin-top: 68%;\n    visibility: hidden; }\n  .nombreMateria {\n    position: relative;\n    margin-top: 4%; }\n  .tarjetaMateria {\n    margin-top: -10%; }\n  .progress {\n    position: relative; }\n  .progress:before {\n    display: block;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n    border-bottom: 2rem solid #eeeeee; }\n  .progress-bar {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    border-bottom: 2rem solid #337ab7; }\n  .bg-success {\n    border-bottom-color: #1e9131; }\n  .bg-info {\n    border-bottom-color: #5bc0de; }\n  .bg-warning {\n    border-bottom-color: #ebdb05; }\n  .bg-danger {\n    border-bottom-color: #d1090d; }\n  .cont_avance {\n    position: absolute; }\n  .cont_acceso {\n    position: absolute;\n    margin-top: 30%;\n    margin-left: -21%;\n    width: 70%; }\n  .avanceGeneral {\n    position: absolute;\n    margin-top: -35%;\n    margin-left: -24%; }\n  .porcentaje {\n    position: absolute;\n    left: 50%;\n    top: 35px;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%); }\n  .card-body {\n    margin-top: -4%;\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    color: black; }\n  .badge-secondary {\n    border-bottom-color: #646464;\n    border: 2px solid #646464; }\n  .badge-danger {\n    border-bottom-color: #c42a2a;\n    border: 2px solid #c42a2a; }\n  .badge-success {\n    border-bottom-color: #1e9131;\n    border: 2px solid #1e9131; }\n  .actProm {\n    margin-top: 2%;\n    width: 30%; }\n  .califActual {\n    margin-top: 5%;\n    width: 30%; }\n  .textoAct {\n    margin-top: -45%;\n    margin-left: 25%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hdmFuY2UvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhL2F2YW5jZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxhdmFuY2VcXGF2YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFHRDtFQUNJLFdBQVU7RUFDViw0QkFBMkIsRUFDOUI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGdCQUFlO0VBR2Ysb0RBQWdELEVBQ25EOztBQUVEO0VBQ0ksMEJBMUJrQjtFQTJCbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUEvQmtCLEVBZ0NyQjs7QUFFRDtFQUNJLGVBbkNrQixFQW9DckI7O0FBQ0Q7RUFDSSwwQkF0Q2tCO0VBdUNsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsV0FBVSxFQUNiOztBQUVEO0VBQ0ksb0JBQThCO0VBQzlCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUNoREQ7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWSxFQUVmOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGlDQUFnQztFQUNoQyx5Q0FBd0MsRUFDM0M7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBTUQ7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUdEO0VBS0k7SUFDSSxtQkFBa0I7SUFDbEIsY0FBYSxFQUNoQjtFQUVEO0lBQ0ksY0FBYSxFQUNoQjtFQUVEO0lBQ0ksV0FBVTtJQUNWLFdBQVUsRUFDYjtFQUNEO0lBQ0ksbUJBQWlCLEVBQ3BCO0VBQ0Q7SUFDSSxpQkFBZ0I7SUFDaEIsZ0JBQWU7SUFDZixXQUFVO0lBQ1YsWUFBVyxFQUVkO0VBQ0Q7SUFDSSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLFdBQVU7SUFDVixTQUFRO0lBQ1IsaUNBQWdDO0lBQ2hDLHlDQUF3QyxFQUMzQztFQUNEO0lBQ0ksbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxXQUFVO0lBQ1YsVUFBUztJQUNULGlDQUFnQztJQUNoQyx5Q0FBd0MsRUFDM0M7RUFFRDtJQUNJLFdBQVUsRUFDYjtFQUNEO0lBQ0ksV0FBVSxFQUNiO0VBRUQ7SUFDSSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLG1CQUFrQixFQUNyQjtFQUNEO0lBQ0ksbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCO0VBQ0Q7SUFDSSxtQkFBa0I7SUFDbEIsZUFBYyxFQUNqQjtFQUVEO0lBQ0ksaUJBQWdCLEVBQ25CO0VBQ0Q7SUFDSSxtQkFBa0IsRUFDckI7RUFDRDtJQUNJLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLE9BQU07SUFDTixTQUFRO0lBQ1IsVUFBUztJQUNULFFBQU87SUFDUCxXQUFVO0lBQ1Ysa0NBQWlDLEVBQ3BDO0VBQ0Q7SUFDSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFVBQVM7SUFDVCxRQUFPO0lBQ1AsV0FBVTtJQUNWLGtDQUFpQyxFQUNwQztFQUNEO0lBQ0ksNkJBQTRCLEVBQy9CO0VBQ0Q7SUFDSSw2QkFBNEIsRUFDL0I7RUFDRDtJQUNJLDZCQUE0QixFQUMvQjtFQUNEO0lBQ0ksNkJBQTRCLEVBQy9CO0VBRUQ7SUFFSSxtQkFBaUIsRUFDcEI7RUFFRDtJQUVHLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixXQUFVLEVBQ1o7RUFFRDtJQUNJLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCO0VBQ0Q7SUFDSSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFVBQVM7SUFDVCxpQ0FBZ0M7SUFDaEMseUNBQXdDLEVBQzNDO0VBRUQ7SUFDSSxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sVUFBUztJQUNULFFBQU87SUFDUCxXQUFVO0lBQ1YsYUFBWSxFQUNmO0VBQ0Q7SUFDSSw2QkFBNEI7SUFDNUIsMEJBQXlCLEVBQzVCO0VBQ0Q7SUFDSSw2QkFBNEI7SUFDNUIsMEJBQXlCLEVBQzVCO0VBQ0Q7SUFDSSw2QkFBNEI7SUFDNUIsMEJBQXlCLEVBQzVCO0VBQ0Q7SUFDSSxlQUFjO0lBQ2QsV0FBVSxFQUViO0VBQ0Q7SUFDSSxlQUFjO0lBQ2QsV0FBVSxFQUNiO0VBQ0Q7SUFDSSxpQkFBZ0I7SUFDaEIsaUJBQWdCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2F2YW5jZS9hdmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4vLyBkaXZ7XHJcbi8vICAgICBib3JkZXI6IHNvbGlkO1xyXG4vLyB9XHJcbi50YXJqZXRhTWF0ZXJpYXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuLmdyYWZpY2F7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRhYmxhe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG4udGl0dWxve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hY2Nlc3Nve1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuLnBvcmNlbnRhamV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDE0MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5hc2lnbmF0dXJhc1NlbWVzdHJle1xyXG4gICAgY29sb3I6IHJveWFsYmx1ZTtcclxufVxyXG5cclxuLy8gLmNvbnRfYXZhbmNle1xyXG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmF2YW5jZUdlbmVyYWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uY29udF9hY2Nlc297XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA0NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuQG1lZGlhIHByaW50e1xyXG4gICAgLy8gZGl2e1xyXG4gICAgLy8gICAgIGJvcmRlcjogc29saWQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC50YWJzZXQxIGEubmF2LWxpbmsge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0UmVwb3J0ZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub21icmV7XHJcbiAgICAgICAgd2lkdGg6IDc0JTtcclxuICAgICAgICBoZWlnaHQ6IDElO1xyXG4gICAgfVxyXG4gICAgLmltcHJlc2lvbntcclxuICAgICAgICB2aXNpYmlsaXR5OmhpZGRlbjtcclxuICAgIH1cclxuICAgIC5ncmFmaWNhe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHVsb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDIwMCU7XHJcbiAgICAgICAgbGVmdDogMjUwJTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG4gICAgLnRhYmxhe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBsZWZ0OiAyNTAlO1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5wQWNjZXNzb3tcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgfVxyXG4gICAgLnVBY2Nlc3Nve1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFzaWduYXR1cmFzU2VtZXN0cmV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5hbHR1cmF7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDY4JTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubm9tYnJlTWF0ZXJpYXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhcmpldGFNYXRlcmlhe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMCU7XHJcbiAgICB9XHJcbiAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzczpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycmVtIHNvbGlkICNlZWVlZWU7XHJcbiAgICB9XHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnJlbSBzb2xpZCAjMzM3YWI3O1xyXG4gICAgfVxyXG4gICAgLmJnLXN1Y2Nlc3Mge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMxZTkxMzE7XHJcbiAgICB9XHJcbiAgICAuYmctaW5mbyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzViYzBkZTtcclxuICAgIH1cclxuICAgIC5iZy13YXJuaW5nIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWJkYjA1O1xyXG4gICAgfVxyXG4gICAgLmJnLWRhbmdlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2QxMDkwZDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udF9hdmFuY2V7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udF9hY2Nlc297XHJcbiAgICAvLyAgICBib3JkZXI6ICBzb2xpZDsgXHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogLTIxJTtcclxuICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YW5jZUdlbmVyYWx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zNSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNCU7XHJcbiAgICB9XHJcbiAgICAucG9yY2VudGFqZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMzVweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2Utc2Vjb25kYXJ5e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2NDY0NjQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzY0NjQ2NDtcclxuICAgIH1cclxuICAgIC5iYWRnZS1kYW5nZXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2M0MmEyYTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzQyYTJhO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXN1Y2Nlc3N7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlOTEzMTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMWU5MTMxO1xyXG4gICAgfVxyXG4gICAgLmFjdFByb217XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuXHJcbiAgICB9XHJcbiAgICAuY2FsaWZBY3R1YWx7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgIC50ZXh0b0FjdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/materia/avance/avance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/materia/avance/avance.component.ts ***!
  \****************************************************/
/*! exports provided: AvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceComponent", function() { return AvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avance.service */ "./src/app/materia/avance/avance.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AvanceComponent = /** @class */ (function () {
    function AvanceComponent(_avanceService, _usuarioService, _materiaService, router, route) {
        this._avanceService = _avanceService;
        this._usuarioService = _usuarioService;
        this._materiaService = _materiaService;
        this.router = router;
        this.route = route;
        this.promedioTotal = false;
    }
    AvanceComponent.prototype.ngOnInit = function () {
        var array = this.router.url.split('/');
        this.plataforma = array[1];
        this.jwt = this._usuarioService.getJWT();
        // this.selectedMateria = this._materiaService.getSelectedMateria();
        this.selectedMateria = '';
        this.id_materia = this.selectedMateria.materia_id;
        this.identity = this._usuarioService.getIdentity();
        // this.id_usuario = this.identity.usuario_id;    
        this.idRol = this.identity.rol_id;
        this.idPersona = this.identity.persona_id;
        if (this.idRol == 1 || this.idRol == 5) {
            this.idPersona = this.route.snapshot.paramMap.get('id');
            this.idRol = 2;
        }
        this.fechaActualD();
        this.consultaAvanceG();
        this.consultaArchivos();
        // this.consultaFechas();
        // this.consultaBitacora();
        // this.consultaRepMaterias();
    };
    AvanceComponent.prototype.imprimir = function () {
        window.print();
    };
    AvanceComponent.prototype.fechaActualD = function () {
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        var fActual = new Date();
        if (fActual.getMinutes() <= 9) {
            this.fechaActual = diasSemana[fActual.getDay()] + " " + fActual.getDate() + " de " + meses[fActual.getMonth()] + " de " + fActual.getFullYear() + ", " +
                fActual.getHours() + ":0" + fActual.getMinutes();
        }
        else {
            this.fechaActual = diasSemana[fActual.getDay()] + " " + fActual.getDate() + " de " + meses[fActual.getMonth()] + " de " + fActual.getFullYear() + ", " +
                fActual.getHours() + ":" + fActual.getMinutes();
        }
    };
    AvanceComponent.prototype.consultaArchivos = function () {
        var _this = this;
        this._avanceService.consultaArchivosAlumno(this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.archivos = response['archivos'];
                _this.archivos.forEach(function (archivo) {
                    if (archivo.fecha_creacion) {
                        archivo.fecha_creacion = new Date((archivo.fecha_creacion) * 1000);
                    }
                });
                console.log(_this.archivos);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvanceComponent.prototype.consultaAvanceG = function () {
        var _this = this;
        this._avanceService.consultaAvanceGeneral(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.porcentajeTotal = response['porcentaje'];
            }
            _this.id_usuario = response['usuario']['usuario_id'];
            _this.consultaFechas();
            _this.consultaBitacora();
            _this.consultaRepMaterias();
        }, function (error) {
            console.log(error);
        });
    };
    AvanceComponent.prototype.consultaFechas = function () {
        var _this = this;
        this._avanceService.consultaFechasSesion(this.jwt, this.id_usuario).subscribe(function (response) {
            if (response && response['status']) {
                _this.fechaPrimer = response['primer_acceso'];
                _this.fechaUltim = response['ultimo_acceso'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvanceComponent.prototype.consultaBitacora = function () {
        var _this = this;
        this._avanceService.consultaBitacoraMes(this.id_usuario).subscribe(function (response) {
            if (response && response['status']) {
                _this.meses = response['Mes'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvanceComponent.prototype.consultaRepMaterias = function () {
        var _this = this;
        this._avanceService.consultaReporteMaterias(this.id_usuario).subscribe(function (response) {
            if (response && response['status']) {
                _this.materias = response['Materias'];
                _this.materias.forEach(function (actividades) {
                    var _porcentaje = actividades.contestadas / actividades.total * 100;
                    actividades.porcentaje = Math.round(_porcentaje);
                    actividades._promActividades = actividades.promedioActividades.toFixed(2);
                    if (!actividades.porcentaje) {
                        actividades.porcentaje = 0;
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avance',
            template: __webpack_require__(/*! ./avance.component.html */ "./src/app/materia/avance/avance.component.html"),
            styles: [__webpack_require__(/*! ./avance.component.scss */ "./src/app/materia/avance/avance.component.scss")]
        }),
        __metadata("design:paramtypes", [_avance_service__WEBPACK_IMPORTED_MODULE_1__["AvanceService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_3__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AvanceComponent);
    return AvanceComponent;
}());



/***/ }),

/***/ "./src/app/materia/avance/avance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/materia/avance/avance.module.ts ***!
  \*************************************************/
/*! exports provided: AvanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceModule", function() { return AvanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _avance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avance-routing.module */ "./src/app/materia/avance/avance-routing.module.ts");
/* harmony import */ var _avance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avance.component */ "./src/app/materia/avance/avance.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var _historial_historial_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../historial/historial.module */ "./src/app/materia/historial/historial.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AvanceModule = /** @class */ (function () {
    function AvanceModule() {
    }
    AvanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_avance_component__WEBPACK_IMPORTED_MODULE_3__["AvanceComponent"]],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__["ArchivoModule"],
                _historial_historial_module__WEBPACK_IMPORTED_MODULE_7__["HistorialModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_11__["SharedPipesModule"],
                _avance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AvanceRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__["RoundProgressModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__["EncabezadoPersonaModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_10__["LanguageTranslationModule"],
            ]
        })
    ], AvanceModule);
    return AvanceModule;
}());



/***/ }),

/***/ "./src/app/materia/avance/avance.service.ts":
/*!**************************************************!*\
  !*** ./src/app/materia/avance/avance.service.ts ***!
  \**************************************************/
/*! exports provided: AvanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceService", function() { return AvanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvanceService = /** @class */ (function () {
    function AvanceService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AvanceService.prototype.consultaHistorial = function (jwt, id_materia, filtro) {
        var params = '?jwt=' + jwt;
        params += '&id_materia=' + id_materia;
        params += '&filtro=' + filtro;
        return this._httpClient.get(this.url + '/learning/materia/historialActividades.php' + params);
    };
    AvanceService.prototype.consultaAvanceGeneral = function (jwt, id_persona) {
        var params = '?jwt=' + jwt;
        params += '&id_persona=' + id_persona;
        return this._httpClient.get(this.url + '/learning/avance/avanceGeneral.php' + params);
    };
    AvanceService.prototype.consultaArchivosAlumno = function (id_alumno) {
        var params = '?alumno_id=' + id_alumno;
        return this._httpClient.get(this.url + '/learning/materia/consultaArchivosGenerales.php' + params);
    };
    AvanceService.prototype.consultaFechasSesion = function (jwt, id_usuario) {
        var params = '?jwt=' + jwt;
        params += '&id_usuario=' + id_usuario;
        return this._httpClient.get(this.url + '/general/plataforma/consultaAccesos.php' + params);
    };
    AvanceService.prototype.consultaBitacoraMes = function (id_usuario) {
        // var params = '?id_materia='+'';
        //  params += '&jwt='+jwt;
        var params = '?id_usuario=' + id_usuario;
        return this._httpClient.get(this.url + '/learning/avance/bitacoraMes.php' + params);
    };
    AvanceService.prototype.consultaReporteMaterias = function (id_usuario) {
        var params = '?id_usuario=' + id_usuario;
        return this._httpClient.get(this.url + '/learning/avance/reporteMaterias.php' + params);
    };
    AvanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvanceService);
    return AvanceService;
}());



/***/ }),

/***/ "./src/app/materia/historial/historial.component.html":
/*!************************************************************!*\
  !*** ./src/app/materia/historial/historial.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"materias\" class=\"row\">\r\n  <div class=\"col-md-6\">\r\n      <label class=\"control-label\">Selecciona la carrera</label>\r\n      <select [(ngModel)]=\"id_materia\" class=\"form-control\" (ngModelChange)=\"consultaHist()\">\r\n        <option hidden value=\"\" disabled selected>Selecciona una opción</option>\r\n        <option [value]=\"materia.materia_id\" *ngFor=\"let materia of materias\">{{materia.asignatura}}</option>\r\n      </select>\r\n  </div>\r\n</div><br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 mb-3\">\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input checked [value]=\"1\" type=\"radio\" id=\"activas\" name=\"filtro\" (click)=\"consultaHist(1)\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"activas\">Activas</label>\r\n    </div>\r\n    <div class=\"custom-control custom-radio custom-control-inline\">\r\n      <input [value]=\"0\" type=\"radio\" id=\"todas\" name=\"filtro\" (click)=\"consultaHist(0)\" class=\"custom-control-input\">\r\n      <label class=\"custom-control-label\" for=\"todas\">Todas</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <table class=\"table table-bordered\">\r\n    <tr class=\"bg-light\">\r\n      <th>Nombre de actividad</th>\r\n      <th>Calificación</th>\r\n      <th>Intentos</th>\r\n      <th>Estatus de la actividad</th>\r\n      <th>Fecha de entrega</th>\r\n    </tr>\r\n    <tr *ngIf=\"!historial\">\r\n      <td colspan=\"12\" class=\"text-center\">No se encontró información</td>\r\n    </tr>\r\n    <tr [ngClass]=\"actividad.estatus == 1? 'bg-activo': ''\" *ngFor=\"let actividad of historial\">\r\n      <td>{{actividad.actividad_nombre}}</td>\r\n      <td class=\"text-center\">{{actividad.calificacion}}</td>\r\n      <td class=\"text-center\">{{actividad.intento_num}}</td>\r\n      <td><i class=\"fa {{actividad.icono}}\" aria-hidden=\"true\"></i> {{actividad.estatus_actividad}}</td>\r\n      <td>{{actividad.fecha_actualiza | date: \"dd/MM/yyyy\"}}</td>\r\n      <!-- <td>{{actividad.icono}}</td> -->\r\n    </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/historial/historial.component.scss":
/*!************************************************************!*\
  !*** ./src/app/materia/historial/historial.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-activo {\n  background-color: #cce5ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9oaXN0b3JpYWwvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcaGlzdG9yaWFsXFxoaXN0b3JpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2hpc3RvcmlhbC9oaXN0b3JpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctYWN0aXZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2U1ZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/materia/historial/historial.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/materia/historial/historial.component.ts ***!
  \**********************************************************/
/*! exports provided: HistorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComponent", function() { return HistorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _avance_avance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../avance/avance.service */ "./src/app/materia/avance/avance.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistorialComponent = /** @class */ (function () {
    function HistorialComponent(_usuarioService, _materiaService, _avanceService, router, route) {
        this._usuarioService = _usuarioService;
        this._materiaService = _materiaService;
        this._avanceService = _avanceService;
        this.router = router;
        this.route = route;
        this.id_materia = "";
        var array = this.router.url.split('/');
        this.plataforma = array[1];
        // let url = document.location.href.split('/');    
        // if(url[4]) this.url = url[4];
    }
    HistorialComponent.prototype.ngOnInit = function () {
        if (this.plataforma == 'learning') {
            this.alumno_id = this._usuarioService.getIdentity()['alumno'].alumno_id;
            this.consultaMaterias();
        }
        else if (this.plataforma == 'admin' || this.plataforma == 'asesor') {
            this.alumno_id = this.route.snapshot.paramMap.get('id');
            this.consultaMaterias();
        }
        else {
            this.selectedMateria = this._materiaService.getSelectedMateria();
            this.id_materia = this.selectedMateria.materia_id;
            this.consultaHist();
        }
    };
    HistorialComponent.prototype.ngOnChanges = function () {
        this.consultaHist();
    };
    HistorialComponent.prototype.consultaMaterias = function () {
        var _this = this;
        this._materiaService.consultaAlumnoMaterias(this.alumno_id, 3).subscribe(function (response) {
            if (response && response['status']) {
                _this.materias = response['materias'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HistorialComponent.prototype.consultaHist = function (filtro) {
        var _this = this;
        if (filtro === void 0) { filtro = 1; }
        this._avanceService.consultaHistorial('', this.id_materia, filtro).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.historial = response['historial'];
            }
            else {
                _this.historial = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HistorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial',
            template: __webpack_require__(/*! ./historial.component.html */ "./src/app/materia/historial/historial.component.html"),
            styles: [__webpack_require__(/*! ./historial.component.scss */ "./src/app/materia/historial/historial.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_2__["MateriaService"],
            _avance_avance_service__WEBPACK_IMPORTED_MODULE_1__["AvanceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], HistorialComponent);
    return HistorialComponent;
}());



/***/ }),

/***/ "./src/app/materia/historial/historial.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/materia/historial/historial.module.ts ***!
  \*******************************************************/
/*! exports provided: HistorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialModule", function() { return HistorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _historial_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial.component */ "./src/app/materia/historial/historial.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HistorialModule = /** @class */ (function () {
    function HistorialModule() {
    }
    HistorialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_historial_component__WEBPACK_IMPORTED_MODULE_2__["HistorialComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [_historial_component__WEBPACK_IMPORTED_MODULE_2__["HistorialComponent"]]
        })
    ], HistorialModule);
    return HistorialModule;
}());



/***/ })

}]);
//# sourceMappingURL=avance-avance-module.js.map