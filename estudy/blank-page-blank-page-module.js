(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"],{

/***/ "./src/app/administracion/blank-page/blank-page-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/blank-page/blank-page-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: BlankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function() { return BlankPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/administracion/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_2__["BlankPageComponent"]
    }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/blank-page/blank-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/blank-page/blank-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-plan-estudio [title]=\"titulo\" (planEstudioId)=\"getId($event)\"></app-plan-estudio> -->\r\n<!-- <form-generator></form-generator> -->\r\n<!-- <ngb-tabset type=\"pills\">\r\n  <ngb-tab id=\"CE\">\r\n    <div><ng-template ngbTabTitle>\r\n      <b>Control escolar</b>\r\n    </ng-template></div>\r\n  <ng-template ngbTabContent>\r\n    <div class=\"rell\">\r\n      <p>Contenido <br>\r\n         Control escolar\r\n      </p>\r\n    </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab id=\"MAT\">\r\n    <ng-template ngbTabTitle><b>Materias</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div class=\"rell\">\r\n       <p>Contenido  <br>\r\n        Materias\r\n     </p>\r\n    </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab id=\"GPO\">\r\n    <ng-template ngbTabTitle><b>Grupos</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div class=\"rell\">\r\n      <p>Contenido  <br>\r\n        Grupos\r\n     </p>\r\n    </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab id=\"ALU\">\r\n    <ng-template ngbTabTitle><b>Alumnos</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div class=\"rell\">\r\n      <p>Contenido  <br>\r\n        Alumnos\r\n     </p>\r\n    </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset> -->\r\n<h4>Semaforización de comportamientos no permitidos</h4>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <p>\r\n      10 pts = buena conducta (verde)<br>\r\n      5 pts = regular (amarillo)<br>\r\n      0 pts = mala conducta (rojo)\r\n    </p>\r\n  </div>\r\n  <div class=\"col-md-2\">\r\n    <div class=\"row semaforo\">\r\n      <div class=\"col-md-4 text-center\">\r\n        <div class=\"circulo off\"></div>\r\n        <div class=\"circulo off\"></div>\r\n        <div class=\"circulo red\"></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\" style=\"display: flex; align-items: center; justify-content: center;\">\r\n      <button class=\"btn\" type=\"submit\" (click)=\"decrementar()\">\r\n        <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r\n      </button>&nbsp;\r\n      <input class=\"puntos\" type=\"text\" value=\"{{contador}}\" placeholder=\"10\" disabled size=\"5px\">\r\n      &nbsp;puntos&nbsp;\r\n      <button class=\"btn\" type=\"submit\" (click)=\"incrementar()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/blank-page/blank-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/blank-page/blank-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.rell {\n  border: 1px solid #d9e2d9f5;\n  border-radius: 0px 0px 10px 10px;\n  padding: 10px 15px; }\n\n.semaforo {\n  border-right: 2px solid #393541;\n  border-left: 2px solid #393541;\n  border-radius: 10px;\n  height: 75px;\n  padding: 10px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.circulo {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\n.off {\n  background: radial-gradient(rgba(0, 0, 0, 0.5) 5%, #676d73 25%, #818182 70%); }\n\n.green {\n  background: radial-gradient(rgba(149, 199, 149, 0.9) 5%, #7cc57c 25%, #5cb85c 70%); }\n\n.red {\n  background: radial-gradient(rgba(224, 134, 131, 0.9) 5%, #de6562 25%, #d9534f 70%); }\n\n.yellow {\n  background: radial-gradient(rgba(226, 193, 145, 0.9) 5%, #efb15a 25%, #f0ad4e 70%); }\n\n.btn {\n  width: 30px;\n  height: 30px;\n  background-color: #007bff85;\n  padding: 5px;\n  border-radius: 50px;\n  font-size: 12px;\n  border: 2px solid rgba(153, 153, 153, 0.6); }\n\n.puntos {\n  text-align: center;\n  border-radius: 8px;\n  border: 1px solid rgba(53, 144, 158, 0.7); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYmxhbmstcGFnZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2JsYW5rLXBhZ2UvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXGJsYW5rLXBhZ2VcXGJsYW5rLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDcEREO0VBQ0ksNEJBQTJCO0VBQzNCLGlDQUFnQztFQUNoQyxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxnQ0FBdUM7RUFDdkMsK0JBQXNDO0VBQ3RDLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFHWixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSw2RUFBNEUsRUFDL0U7O0FBQ0Q7RUFDSSxtRkFBa0YsRUFDckY7O0FBQ0Q7RUFDSSxtRkFBa0YsRUFDckY7O0FBQ0Q7RUFDSSxtRkFBa0YsRUFDckY7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsMkNBQXVDLEVBQzFDOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQiwwQ0FBeUMsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9ibGFuay1wYWdlL2JsYW5rLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5yZWxse1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTJkOWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5zZW1hZm9yb3tcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYig1NywgNTMsIDY1KTsgXHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYig1NywgNTMsIDY1KTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIGhlaWdodDogNzVweDsgXHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXJjdWxvIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4ub2Zme1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSA1JSwgIzY3NmQ3MyAyNSUsICM4MTgxODIgNzAlKTsgXHJcbn1cclxuLmdyZWVue1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMTQ5LCAxOTksIDE0OSwgMC45KSA1JSwgIzdjYzU3YyAyNSUsICM1Y2I4NWMgNzAlKTsgICAgXHJcbn1cclxuLnJlZHtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyNCwgMTM0LCAxMzEsIDAuOSkgNSUsICNkZTY1NjIgMjUlLCAjZDk1MzRmIDcwJSk7XHJcbn1cclxuLnllbGxvd3tcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyNiwgMTkzLCAxNDUsIDAuOSkgNSUsICNlZmIxNWEgMjUlLCAjZjBhZDRlIDcwJSk7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY4NTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE1MywxNTMsMTUzLDAuNik7XHJcbn1cclxuLnB1bnRvc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MywgMTQ0LCAxNTgsIDAuNyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/blank-page/blank-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/administracion/blank-page/blank-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
        this.contador = 10;
    }
    BlankPageComponent.prototype.incrementar = function () {
        this.contador++;
        //condicion de colores
    };
    BlankPageComponent.prototype.decrementar = function () {
        this.contador--;
        //condicion de colores
    };
    BlankPageComponent.prototype.ngOnInit = function () {
        /*this.titulo = "Componente plan de estudios"*/
    };
    BlankPageComponent.prototype.getId = function (idPlan) {
        console.log(idPlan);
    };
    BlankPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! ./blank-page.component.html */ "./src/app/administracion/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/administracion/blank-page/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/administracion/blank-page/blank-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/blank-page/blank-page.module.ts ***!
  \****************************************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page-routing.module */ "./src/app/administracion/blank-page/blank-page-routing.module.ts");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/administracion/blank-page/blank-page.component.ts");
/* harmony import */ var _components_plan_estudio_plan_estudio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/plan-estudio/plan-estudio.module */ "./src/app/components/plan-estudio/plan-estudio.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"], _components_plan_estudio_plan_estudio_module__WEBPACK_IMPORTED_MODULE_4__["PlanEstudioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
            declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=blank-page-blank-page-module.js.map