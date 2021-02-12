(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscripcion-dashboard-dashboard-module"],{

/***/ "./src/app/inscripcion/dashboard/dashboard-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/inscripcion/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/inscripcion/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/inscripcion/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  \r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xs-12\">\r\n    <h3 class=\"text-center\">¡Bienvenido a {{universidad.nombre}}!</h3>\r\n    <p class=\"text-center\">Estás a un paso de comenzar tus estudios en {{universidad.nombre}}.\r\n      Sigue los pasos en el orden que se marca para completar tu inscripción:</p>\r\n  </div>\r\n</div>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-2 col-md-12 col-xs-12 text-center\">\r\n      <h4 *ngIf=\"pasoActual == 0\"><strong>1.</strong> Información de inscripción</h4>\r\n      <h4 *ngIf=\"pasoActual == 1\"><strong>2.</strong> Acepta los términos</h4>\r\n      <h4 *ngIf=\"pasoActual == 2\"><strong>3.</strong> Sube tus documentos</h4>\r\n      <h4 *ngIf=\"pasoActual == 3\"><strong>4.</strong> Pago en línea</h4>\r\n      <h4 *ngIf=\"pasoActual == 4\"><i class=\"fa fa-check fa-2x\" style=\"color:green\"></i><br> Registro exitoso</h4>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\" [routerLink]=\"['/inscripcion/solicitud']\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 arrow-container\">\r\n          <div class=\"arrow-4\"></div>    \r\n        </div>\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-center cursor\">\r\n            <p *ngIf=\"pasoActual\" class=\"pasos \" >\r\n              <span >{{paso1.completados}} de {{paso1.totales}}</span>\r\n            </p>\r\n              <round-progress class=\"grafica\"\r\n              [current]= \"porcentajePaso1\"\r\n              [max]=\"100\"\r\n              [color]=\"colorPaso1\"\r\n              [background]=\"'#eaeaea'\"\r\n              [radius]=\"55\"\r\n              [stroke]=\"10\"\r\n              [semicircle]=\"false\"\r\n              [rounded]=\"true\"\r\n              [clockwise]=\"true\"\r\n              [responsive]=\"false\"\r\n              [duration]=\"800\"\r\n              [animation]=\"'easeInOutQuart'\"\r\n              [animationDelay]=\"0\"></round-progress>    \r\n            </div>\r\n            <div class=\"col-lg-3 col-xs-12 col-sm-12\">\r\n            </div>\r\n            <div class=\"col-lg-9 col-xs-12 col-sm-12 text-center\">\r\n              <p>1. Solicitud</p>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\" [routerLink]=\"['/inscripcion/terminos']\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 arrow-container\">\r\n          <div class=\"arrow-4\"></div>    \r\n        </div>\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-center cursor\">\r\n              <p class=\"pasos \" >\r\n                <span *ngIf=\"pasoActual == 0\"><i class=\"fa fa-lock fa-2x\" aria-hidden=\"true\"></i></span>\r\n                <span *ngIf=\"pasoActual > 0\">{{paso2.completados}} de {{paso2.totales}}</span>\r\n              </p>\r\n              <round-progress class=\"grafica\"\r\n              [current]= \"porcentajePaso2\"\r\n              [max]=\"100\"\r\n              [color]=\"colorPaso2\"\r\n              [background]=\"'#eaeaea'\"\r\n              [radius]=\"55\"\r\n              [stroke]=\"10\"\r\n              [semicircle]=\"false\"\r\n              [rounded]=\"true\"\r\n              [clockwise]=\"true\"\r\n              [responsive]=\"false\"\r\n              [duration]=\"800\"\r\n              [animation]=\"'easeInOutQuart'\"\r\n              [animationDelay]=\"0\"></round-progress> \r\n            </div>\r\n            <div class=\"col-lg-3 col-xs-12 col-sm-12\">\r\n            </div>\r\n            <div class=\"col-lg-9 col-xs-12 col-sm-12 text-center\">\r\n              <p>2. Términos</p>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\" [routerLink]=\"['/inscripcion/documentos']\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 arrow-container\">\r\n          <div class=\"arrow-4\"></div>    \r\n        </div>\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-center cursor\">\r\n            <p class=\"pasos \" >\r\n              <span *ngIf=\"pasoActual <= 1\"><i class=\"fa fa-lock fa-2x\" aria-hidden=\"true\"></i></span>\r\n              <span *ngIf=\"pasoActual > 1\">{{paso3.completados}} de {{paso3.totales}}</span>\r\n            </p>\r\n              <round-progress class=\"grafica\"\r\n              [current]= \"porcentajePaso3\"\r\n              [max]=\"100\"\r\n              [color]=\"colorPaso3\"\r\n              [background]=\"'#eaeaea'\"\r\n              [radius]=\"55\"\r\n              [stroke]=\"10\"\r\n              [semicircle]=\"false\"\r\n              [rounded]=\"true\"\r\n              [clockwise]=\"true\"\r\n              [responsive]=\"false\"\r\n              [duration]=\"800\"\r\n              [animation]=\"'easeInOutQuart'\"\r\n              [animationDelay]=\"0\"></round-progress>    \r\n            </div>\r\n            <div class=\"col-lg-3 col-xs-12 col-sm-12\">\r\n            </div>\r\n            <div class=\"col-lg-9 col-xs-12 col-sm-12 text-center\">\r\n              <p>3.Documentos</p>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-2 col-md-12 col-sm-12 col-xs-12\" [routerLink]=\"['/inscripcion/pagos']\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 arrow-container\">\r\n          <div class=\"arrow-4\"></div>    \r\n        </div>\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-center cursor\">\r\n            <p class=\"pasos \" >\r\n              <span *ngIf=\"pasoActual <= 2\"><i class=\"fa fa-lock fa-2x\" aria-hidden=\"true\"></i></span>\r\n              <span *ngIf=\"pasoActual > 2\">{{paso4.completados}} de {{paso4.totales}}</span> <!--paso 4-->\r\n            </p>\r\n              <round-progress class=\"grafica\"\r\n              [current]= \"porcentajePaso4\"\r\n              [max]=\"100\"\r\n              [color]=\"colorPaso4\"\r\n              [background]=\"'#eaeaea'\"\r\n              [radius]=\"55\"\r\n              [stroke]=\"10\"\r\n              [semicircle]=\"false\"\r\n              [rounded]=\"true\"\r\n              [clockwise]=\"true\"\r\n              [responsive]=\"false\"\r\n              [duration]=\"800\"\r\n              [animation]=\"'easeInOutQuart'\"\r\n              [animationDelay]=\"0\"></round-progress>    \r\n            </div>\r\n            <div class=\"col-lg-3 col-xs-12 col-sm-12\">\r\n            </div>\r\n            <div class=\"col-lg-9 col-xs-12 col-sm-12 text-center\">\r\n              <p>4.Pago en línea</p>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n    <!--div class=\"col-lg-1 col-xs-12\">\r\n    <i class=\"fa fa-lock fa-3x textGraf\" aria-hidden=\"true\"></i>\r\n    <round-progress class=\"grafica\" [routerLink]=\"['/inscripcion/terminos']\"\r\n      [current]= 25\r\n\r\n      [max]=\"100\"\r\n      [color]=\"'#45ccce'\"\r\n      [background]=\"'#eaeaea'\"\r\n      [radius]=\"55\"\r\n      [stroke]=\"10\"\r\n      [semicircle]=\"false\"\r\n      [rounded]=\"true\"\r\n      [clockwise]=\"true\"\r\n      [responsive]=\"false\"\r\n      [duration]=\"800\"\r\n      [animation]=\"'easeInOutQuart'\"\r\n      [animationDelay]=\"0\"></round-progress>\r\n      <p class=\"text-center textoPasoPc\">2. Términos</p>\r\n      <p class=\"textoPaso\">2. Términos</p>\r\n    </!--div>\r\n  <div class=\"col-lg-1 col-xs-12 text-center\">\r\n    <div class=\"arrow-4\"></div>\r\n  </div>\r\n  <div class=\"col-lg-1 col-xs-12\">\r\n    <i class=\"fa fa-lock fa-3x textGraf\" aria-hidden=\"true\"></i>\r\n    <round-progress class=\"grafica\" [routerLink]=\"['/inscripcion/documentos']\"\r\n        [current]= 27\r\n        [max]=\"100\"\r\n        [color]=\"'#45ccce'\"\r\n        [background]=\"'#eaeaea'\"\r\n        [radius]=\"55\"\r\n        [stroke]=\"10\"\r\n        [semicircle]=\"false\"\r\n        [rounded]=\"true\"\r\n        [clockwise]=\"true\"\r\n        [responsive]=\"false\"\r\n        [duration]=\"800\"\r\n        [animation]=\"'easeInOutQuart'\"\r\n        [animationDelay]=\"0\"></round-progress>\r\n        <p class=\"text-center textoPasoPc\">3. Documentos</p>        \r\n    <p class=\"textoPaso\">3. Documentos</p>\r\n  </div>\r\n  <div class=\"col-lg-1 col-xs-12 text-center\">\r\n    <div class=\"arrow-4\"></div>\r\n  </div>\r\n  <div class=\"col-lg-1 col-xs-12\">\r\n    <i class=\"fa fa-lock fa-3x textGraf\" aria-hidden=\"true\"></i>\r\n    <round-progress class=\"grafica\" [routerLink]=\"['/inscripcion/pagos']\"\r\n        [current]= 27\r\n        [max]=\"100\"\r\n        [color]=\"'#45ccce'\"\r\n        [background]=\"'#eaeaea'\"\r\n        [radius]=\"55\"\r\n        [stroke]=\"10\"\r\n        [semicircle]=\"false\"\r\n        [rounded]=\"true\"\r\n        [clockwise]=\"true\"\r\n        [responsive]=\"false\"\r\n        [duration]=\"800\"\r\n        [animation]=\"'easeInOutQuart'\"\r\n        [animationDelay]=\"0\"></round-progress>\r\n        <p class=\"text-center textoPasoPc\">4. Pago en línea</p>        \r\n    <p class=\"textoPaso\">4. Pago en línea</p>\r\n  </div>\r\n  </div-->\r\n\r\n<br><br>\r\n<!--button class=\"btn btn-info pull-right\" (click)=\"open(content)\"><i class=\"fa fa-envelope\"></i> Contacto </!--button>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\" style=\"background-color: #002144;color: white;\">\r\n        <h4 class=\"modal-title\">Contacto</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template-->\r\n\r\n<!--button class=\"btn btn-info pull-right modal_tit\" (click)=\"open(content)\">\r\n  <i class=\"fa fa-envelope\"></i> Contacto </!--button>\r\n      <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n          <div class=\"modal-header modal_tit\">\r\n              <h4 class=\"modal-title\">Contacto</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Cualquier duda contáctanos por cualquiera de los siguientes medios:</p>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n                      <div class=\"table tabla_panel\">\r\n                        <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify;\">\r\n                          <i class=\"fa fa-envelope fa-2x\"></i>\r\n                          <a href=\"mailto:no-replay@unisant.mx\" style=\"line-height: 30px\"> educacion@unisant.edu.mx</a>\r\n                        </div>\r\n                        <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify;\">\r\n                          <i class=\"fa fa-phone fa-2x\"> </i>\r\n                          <a href=\"tel:+528004610267\" style=\"line-height: 30px\"> 8004610267</a>\r\n                          \r\n                        </div>\r\n                        <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify;\">\r\n                            <i class=\"fa fa-facebook fa-2x\"> </i>\r\n                            <a target=\"_blank\" href=\"https://www.facebook.com/pages/Universidad-Santander/196598600360183?fref=ts\"> Facebook</a>\r\n                        </div>\r\n                        <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify;\">\r\n                            <i class=\"fa fa-twitter fa-2x\"></i>\r\n                            <a target=\"_blank\" href=\"https://twitter.com/unisant\"> Twitter</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>        \r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n          </div>\r\n      </ng-template-->\r\n\r\n      <!--modal principal-->\r\n<!--div class=\"container\">\r\n<div class=\"row\">\r\n  <div class=\"col-md-5 col-xs-12\">\r\n    <div class=\"panel-heading modal_tit\">\r\n      <div style=\"padding: 10px 10px 10px 20px\">\r\n        <h6 class=\"panel-title\" >\r\n          <i class=\"fa fa-comments fa-2x\" style=\"color:white\"></i>\r\n          Contacto\r\n        </h6>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"table tabla_panel\">\r\n          <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify; border: solid 2px rgb(241, 241, 242); \">\r\n          Cualquier duda contáctanos por cualquiera de los siguientes medios:\r\n          </div>\r\n          <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify; border: solid 2px rgb(241, 241, 242);\">\r\n            <i class=\"fa fa-envelope fa-2x\"></i>\r\n            <a href=\"mailto:no-replay@unisant.mx\" style=\"line-height: 30px\"> educacion@unisant.edu.mx</a>\r\n          </div>\r\n          <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify; border: solid 2px rgb(241, 241, 242);\">\r\n            <i class=\"fa fa-phone fa-2x\"> </i>\r\n            <a href=\"tel:+528004610267\" style=\"line-height: 30px\"> 8004610267</a>\r\n            \r\n          </div>\r\n          <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify; border: solid 2px rgb(241, 241, 242);\">\r\n              <i class=\"fa fa-facebook fa-2x\"> </i>\r\n              <a target=\"_blank\" href=\"https://www.facebook.com/pages/Universidad-Santander/196598600360183?fref=ts\"> Facebook</a>\r\n          </div>\r\n          <div class=\"tabla_uni\" style=\"padding: 10px 20px; text-align: justify; border: solid 2px rgb(241, 241, 242);\">\r\n              <i class=\"fa fa-twitter fa-2x\"></i>\r\n              <a target=\"_blank\" href=\"https://twitter.com/unisant\"> Twitter</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div-->"

/***/ }),

/***/ "./src/app/inscripcion/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/inscripcion/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n#particles-js {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #292f33;\n  background: linear-gradient(to right, #120024 0%, #292f33, #234953 63%, #21505c 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#020024', endColorstr='#21505c',GradientType=1 ); }\n\n:host {\n  display: block; }\n\n@media only screen and (max-width: 768px) {\n  #particles-js {\n    /* For mobile phones: */\n    position: absolute;\n    height: 100%;\n    max-width: 100%;\n    z-index: 1; } }\n\n.formulario {\n  margin-top: -4%; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: transparent;\n  background-image: url('background_alpha.png');\n  background-size: 100% 150%;\n  text-align: center;\n  color: #000;\n  padding: 4em 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n    color: #000;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #000;\n    box-shadow: none; }\n\n.login-page input.ng-dirty.ng-invalid {\n    border-bottom: 2px solid red;\n    box-shadow: none; }\n\n.login-page input.ng-dirty.ng-valid {\n    border-bottom: 2px solid green;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(0, 0, 0, 0.8);\n    background: transparent;\n    border: 2px solid rgba(0, 0, 0, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: black;\n    border: 2px solid black;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 30px; }\n\n.login-page h1 small {\n      color: rgba(0, 0, 0, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(0, 0, 0, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(0, 0, 0, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 10px 0px; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n.login-page .logo {\n    width: 320px; }\n\n@media only screen and (max-width: 768px) {\n    .login-page {\n      /* For mobile phones: */ }\n      .login-page div {\n        background-color: #fff;\n        z-index: 1;\n        margin-left: -1px;\n        margin-top: 5px; }\n      .login-page .logo {\n        width: 220px; } }\n\n.login-page .footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: rgba(36, 31, 31, 0.8);\n    color: white;\n    text-align: center; }\n\n.login-page .strong {\n    color: honeydew; }\n\n.cursor {\n  cursor: pointer; }\n\n.modal-xl .modal-lg {\n  max-width: 90%; }\n\n.arrow-container {\n  padding: 0px; }\n\n.arrow-4 {\n  position: absolute;\n  margin-top: 40px;\n  height: 30px;\n  width: 30px;\n  border: 8px solid;\n  border-color: #3333ff\r #3333ff\r transparent\r transparent;\n  transform: rotate(45deg); }\n\n.grafica {\n  margin: 0px;\n  padding: 0px; }\n\n.arrow-4:before, .arrow-4:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: 5px solid; }\n\n.arrow-4:before {\n  border-color: #3333ff\r transparent\r transparent\r #3333ff;\n  display: block;\n  top: -1px;\n  right: 0px;\n  transform-origin: top right;\n  transform: rotate(45deg); }\n\n.arrow-4:after {\n  border-color: transparent\r #3333ff\r #3333ff\r transparent;\n  top: 0px;\n  right: -1px;\n  transform-origin: top right;\n  transform: rotate(-45deg); }\n\n.pasos {\n  position: absolute;\n  z-index: 2;\n  padding-top: 40px;\n  text-align: center; }\n\n.modal_tit {\n  background-color: #002144;\n  color: white; }\n\n.icon_dash {\n  text-align: center;\n  font-size: 50px;\n  color: royalblue;\n  margin-top: -10px; }\n\n.text_dash {\n  text-align: center;\n  font-size: 17px;\n  color: royalblue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vZGFzaGJvYXJkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zY3JpcGNpb24vZGFzaGJvYXJkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxwYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2NyaXBjaW9uL2Rhc2hib2FyZC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2NyaXBjaW9uL2Rhc2hib2FyZC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxpbnNjcmlwY2lvblxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luc2NyaXBjaW9uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFD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QkFBeUIsRUFBQTs7QUNpSjFCO0VEOUlBLG1CQUFVO0VBQ1QsV0FBVTtFQUFVLGtCQUFlO0VBQUUsbUJBQWdCLEVBQUE7O0FDbUp0RDtFRGpKQSwwQkFBVTtFQUNULGFBQVksRUFBQTs7QUNvSmI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBRTs7QUFFdEI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvaW5zY3JpcGNpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIiNwYXJ0aWNsZXMtanMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiMyOTJmMzM7IFxyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzEyMDAyNCAgMCUsIzI5MmYzMyAgMzAlLCAjMjM0OTUzICA2MyUsICMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMxMjAwMjQgIDAlLCMyOTJmMzMgIDMwJSwgIzIzNDk1MyAgNjMlLCMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEyMDAyNCAgMCUsIzI5MmYzMyAsIzIzNDk1MyAgNjMlLCMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDIwMDI0JywgZW5kQ29sb3JzdHI9JyMyMTUwNWMnLEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vc2hhcmVkL3N0eWxlcy9wYXJ0aWNsZXMuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG59XHJcbiNwYXJ0aWNsZXMtanMgeyAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9IFxyXG59XHJcbi5mb3JtdWxhcmlve1xyXG4gICAgbWFyZ2luLXRvcDogLTQlO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvX2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRfYWxwaGEucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogNGVtIDNlbTtcclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1sZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgaW5wdXQubmctZGlydHkubmctdmFsaWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3VuZGVkLWJ0biB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICB9XHJcbiAgICAucm91bmRlZC1idG46aG92ZXIsXHJcbiAgICAucm91bmRlZC1idG46Zm9jdXMsXHJcbiAgICAucm91bmRlZC1idG46YWN0aXZlLFxyXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICB3aWR0aDozMjBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmxvZ297XHJcbiAgICAgICAgICAgIHdpZHRoOjIyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIC5idG5fZ3JlZW57XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDojMEM4OTc3OyovXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmdiKDAsMzMsNjgpO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDMxLCAzMSwwLjgpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIC5zdHJvbmd7XHJcbiAgICAgICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbi5jdXJzb3J7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwteGwgLm1vZGFsLWxnIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbi5hcnJvdy1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5hcnJvdy00IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblx0aGVpZ2h0OiAzMHB4OyB3aWR0aDogMzBweDtcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkO1xyXG4gICAgXHJcblx0Ym9yZGVyLWNvbG9yOiBcclxuICAgICAgICAjMzMzM2ZmXHJcblx0XHQjMzMzM2ZmXHJcblx0XHR0cmFuc3BhcmVudFxyXG5cdFx0dHJhbnNwYXJlbnQ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcclxufVxyXG4uZ3JhZmljYXtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5cclxuLmFycm93LTQ6YmVmb3JlLCAuYXJyb3ctNDphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGhlaWdodDogMDsgd2lkdGg6IDA7XHJcblx0Ym9yZGVyOiA1cHggc29saWQ7XHRcclxufVxyXG5cclxuLmFycm93LTQ6YmVmb3JlIHtcclxuXHRib3JkZXItY29sb3I6XHJcbiAgICAgICAgIzMzMzNmZlxyXG5cdFx0dHJhbnNwYXJlbnRcclxuXHRcdHRyYW5zcGFyZW50XHJcblx0XHQjMzMzM2ZmO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRvcDogLTFweDsgcmlnaHQ6IDBweDtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcclxufVxyXG5cclxuLmFycm93LTQ6YWZ0ZXIge1xyXG5cdGJvcmRlci1jb2xvcjpcclxuXHRcdHRyYW5zcGFyZW50XHJcblx0XHQjMzMzM2ZmXHJcblx0XHQjMzMzM2ZmXHJcblx0XHR0cmFuc3BhcmVudDtcclxuXHR0b3A6IDBweDsgcmlnaHQ6IC0xcHg7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5wYXNvc3tcclxuIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBcclxuICAgIHBhZGRpbmctdG9wOjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsX3RpdHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyMTQ0O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaWNvbl9kYXNoe1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiA1MHB4OyBjb2xvcjogcm95YWxibHVlOyBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4udGV4dF9kYXNoe1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxN3B4OyAgY29sb3I6IHJveWFsYmx1ZTtcclxufVxyXG4iLCIuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxuXG4uaW52YWxpZFRleHQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cblxuLmNhcmQtZXN0dWR5IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uY2FyZC1lc3R1ZHk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTsgfVxuXG4uYWxlcnQtZXN0dWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNTc5OTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5oZWFkZXItZXN0dWR5IHtcbiAgY29sb3I6ICMxZTU3OTk7IH1cblxuLmljb24tZXN0dWR5IHtcbiAgY29sb3I6ICMxZTU3OTk7IH1cblxuLmJ0bi1lc3R1ZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU1Nzk5O1xuICBjb2xvcjogd2hpdGU7IH1cblxuOjpuZy1kZWVwIC5tb2RhbC14bCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHdpZHRoOiA4MCU7IH1cblxuLmZvbmRvIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwJTsgfVxuXG4jcGFydGljbGVzLWpzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjkyZjMzO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTIwMDI0IDAlLCAjMjkyZjMzIDMwJSwgIzIzNDk1MyA2MyUsICMyMTUwNWMgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMxMjAwMjQgMCUsICMyOTJmMzMgMzAlLCAjMjM0OTUzIDYzJSwgIzIxNTA1YyAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTIwMDI0IDAlLCAjMjkyZjMzLCAjMjM0OTUzIDYzJSwgIzIxNTA1YyAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMjAwMjQnLCBlbmRDb2xvcnN0cj0nIzIxNTA1YycsR3JhZGllbnRUeXBlPTEgKTsgfVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3BhcnRpY2xlcy1qcyB7XG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTsgfSB9XG5cbi5mb3JtdWxhcmlvIHtcbiAgbWFyZ2luLXRvcDogLTQlOyB9XG5cbi5sb2dpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZF9hbHBoYS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiA0ZW0gM2VtOyB9XG4gIC5sb2dpbi1wYWdlIC5jb2wtbGctNCB7XG4gICAgcGFkZGluZzogMDsgfVxuICAubG9naW4tcGFnZSAuaW5wdXQtbGcge1xuICAgIGhlaWdodDogNDZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gIC5sb2dpbi1wYWdlIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cbiAgLmxvZ2luLXBhZ2UgaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5sb2dpbi1wYWdlIGlucHV0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAubG9naW4tcGFnZSAucm91bmRlZC1idG4ge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwIDI1cHg7IH1cbiAgLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmhvdmVyLFxuICAubG9naW4tcGFnZSAucm91bmRlZC1idG46Zm9jdXMsXG4gIC5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4gIC5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAubG9naW4tcGFnZSBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4OyB9XG4gICAgLmxvZ2luLXBhZ2UgaDEgc21hbGwge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgfVxuICAubG9naW4tcGFnZSAuZm9ybS1ncm91cCB7XG4gICAgcGFkZGluZzogOHB4IDA7IH1cbiAgICAubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7IH1cbiAgICAubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIC8qIEZpcmVmb3ggMTgtICovXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpICFpbXBvcnRhbnQ7IH1cbiAgICAubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAvKiBGaXJlZm94IDE5KyAqL1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50OyB9XG4gICAgLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDsgfVxuICAubG9naW4tcGFnZSAuZm9ybS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDsgfVxuICAubG9naW4tcGFnZSAudXNlci1hdmF0YXIge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyB9XG4gIC5sb2dpbi1wYWdlIC5sb2dvIHtcbiAgICB3aWR0aDogMzIwcHg7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dpbi1wYWdlIHtcbiAgICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqLyB9XG4gICAgICAubG9naW4tcGFnZSBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4OyB9XG4gICAgICAubG9naW4tcGFnZSAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAyMjBweDsgfSB9XG4gIC5sb2dpbi1wYWdlIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCAzMSwgMzEsIDAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubG9naW4tcGFnZSAuc3Ryb25nIHtcbiAgICBjb2xvcjogaG9uZXlkZXc7IH1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubW9kYWwteGwgLm1vZGFsLWxnIHtcbiAgbWF4LXdpZHRoOiA5MCU7IH1cblxuLmFycm93LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDsgfVxuXG4uYXJyb3ctNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyOiA4cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzMzMzNmZlxyICMzMzMzZmZcciB0cmFuc3BhcmVudFxyIHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cblxuLmdyYWZpY2Ege1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4OyB9XG5cbi5hcnJvdy00OmJlZm9yZSwgLmFycm93LTQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyOiA1cHggc29saWQ7IH1cblxuLmFycm93LTQ6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzMzM2ZmXHIgdHJhbnNwYXJlbnRcciB0cmFuc3BhcmVudFxyICMzMzMzZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XG5cbi5hcnJvdy00OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxyICMzMzMzZmZcciAjMzMzM2ZmXHIgdHJhbnNwYXJlbnQ7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTFweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XG5cbi5wYXNvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubW9kYWxfdGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjE0NDtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5pY29uX2Rhc2gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHJveWFsYmx1ZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7IH1cblxuLnRleHRfZGFzaCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogcm95YWxibHVlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/inscripcion/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/inscripcion/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solicitud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/solicitud.service */ "./src/app/inscripcion/services/solicitud.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_universidad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/universidad */ "./src/app/services/universidad.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_usuarioService, _solicitudService, modalService) {
        this._usuarioService = _usuarioService;
        this._solicitudService = _solicitudService;
        this.modalService = modalService;
        this.colorPaso1 = "#ffcc00";
        this.colorPaso2 = "#ffcc00";
        this.colorPaso3 = "#ffcc00";
        this.colorPaso4 = "#ffcc00";
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_4__["universidad"];
        this.title = "Página principal";
        this._usuarioService.pushBreadcum(this.title, '/inscripcion/home', 1);
        this._usuarioService.removeBreadcum(2);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.idAspirante = parseInt(this._usuarioService.getIdentity().persona_id);
        this.consultaPasos();
    };
    DashboardComponent.prototype.consultaPasos = function () {
        var _this = this;
        this._solicitudService.consultaAvance(this.jwt, this.idAspirante).subscribe(function (response) {
            if (response && response['status']) {
                _this.pasoActual = response['pasoActual'];
                _this.paso1 = response['paso1'];
                _this.paso2 = response['paso2'];
                _this.paso3 = response['paso3'];
                _this.paso4 = response['paso4'];
                var _porcentajePaso1 = (_this.paso1.completados * 100) / _this.paso1.totales;
                _this.porcentajePaso1 = Math.floor(_porcentajePaso1);
                if (_this.paso1.finalizado == 1) {
                    _this.colorPaso1 = "#009900";
                }
                var _porcentajePaso2 = (_this.paso2.completados * 100) / _this.paso2.totales;
                _this.porcentajePaso2 = Math.floor(_porcentajePaso2);
                if (_this.paso2.finalizado == 1) {
                    _this.colorPaso2 = "#009900";
                }
                var _porcentajePaso3 = (_this.paso3.completados * 100) / _this.paso3.totales;
                _this.porcentajePaso3 = Math.floor(_porcentajePaso3);
                if (_this.paso3.finalizado == 1) {
                    _this.colorPaso3 = "#009900";
                }
                var _porcentajePaso4 = (_this.paso4.completados * 100) / _this.paso4.totales;
                _this.porcentajePaso4 = Math.floor(_porcentajePaso4);
                if (_this.paso4.finalizado == 1) {
                    _this.colorPaso4 = "#009900";
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-md' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/inscripcion/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/inscripcion/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_solicitud_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/inscripcion/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/inscripcion/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/inscripcion/dashboard/dashboard.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_4__["RoundProgressModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/services/solicitud.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/inscripcion/services/solicitud.service.ts ***!
  \***********************************************************/
/*! exports provided: SolicitudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudService", function() { return SolicitudService; });
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




var SolicitudService = /** @class */ (function () {
    function SolicitudService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    SolicitudService.prototype.consultaFormularios = function (jwt, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/consultaFormulario.php' + params);
    };
    SolicitudService.prototype.consultaAvance = function (jwt, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/pasos.php' + params);
    };
    SolicitudService.prototype.consultaPersona = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'admin/personas/consulta.php' + params);
    };
    SolicitudService.prototype.actualizaInfoPersonal = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/actualizaInfoPersonal.php' + params);
    };
    SolicitudService.prototype.guardaAsesorPersona = function (asesor) {
        var formData = new FormData();
        formData.append('id_asesor', asesor ? asesor.persona_id : null);
        return this._httpClient.post(this.url + 'seguimiento/asesor/guardaAlumno.php', formData);
    };
    SolicitudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SolicitudService);
    return SolicitudService;
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


/***/ })

}]);
//# sourceMappingURL=inscripcion-dashboard-dashboard-module.js.map