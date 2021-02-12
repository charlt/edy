(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-avisos-avisos-module"],{

/***/ "./src/app/components/avisos/avisos-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/avisos/avisos-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AvisosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosRoutingModule", function() { return AvisosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _avisos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avisos.component */ "./src/app/components/avisos/avisos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _avisos_component__WEBPACK_IMPORTED_MODULE_2__["AvisosComponent"]
    }
];
var AvisosRoutingModule = /** @class */ (function () {
    function AvisosRoutingModule() {
    }
    AvisosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AvisosRoutingModule);
    return AvisosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/avisos/avisos.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/avisos/avisos.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container mt-3\">\r\n    <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4>{{title}}</h4>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" [ngClass]=\"nuevo == 1 ? 'active':''\" (click)=\"consultaAvisos(1)\" class=\"btn btn-info\">Vigentes</button>\r\n        <button type=\"button\" [ngClass]=\"nuevo == 2 ? 'active':''\" (click)=\"consultaAvisos(2)\"   class=\"btn btn-info\">Otros</button>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"cargandoAvisos\">\r\n      <div class=\"col-12 mt-5\">\r\n        <p><i class=\"fa fa-spin fa-spinner\"></i> Cargando información</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!avisos\">\r\n      <div class=\"col-12 mt-5\">\r\n        <p>No se encontraron avisos</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!cargandoAvisos\">\r\n      <div class=\"col-12\">\r\n        <div class=\"card  mt-5\" *ngFor=\"let aviso of avisos; let i = index\">\r\n          <div class=\"card-header \" [ngClass]=\"!aviso.visto ? 'alert-success' : ''\">\r\n            <p>{{aviso.tipo_descripcion}} <strong>{{aviso.nombre_materia}}</strong></p>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <h5>{{aviso.titulo}}</h5>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <label class=\"form-check-label float-right\" >\r\n                  <input (change)=\"marcarAviso(aviso)\" class=\"form-check-input\" type=\"checkbox\"  [checked]=\"aviso.visto == 1\">\r\n                  Marcar como visto\r\n                </label>\r\n              </div>  \r\n                <div class=\"col-12\">\r\n                  <app-archivo class=\"archivo\" *ngIf=\"aviso.adjunto\" [urlBase]=\"aviso.adjunto\"></app-archivo>\r\n                  <p [innerHTML]=\"aviso.mensaje_html\" ></p>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer text-muted text-center\">\r\n            {{aviso.fecha_inicio  | date: \"dd/MM/yyyy\"}} - {{aviso.fecha_fin  | date: \"dd/MM/yyyy\"}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n</div>      \r\n      "

/***/ }),

/***/ "./src/app/components/avisos/avisos.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/avisos/avisos.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aviso {\n  cursor: pointer;\n  color: #3485f0;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmlzb3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXZpc29zXFxhdmlzb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBYztFQUNkLGVBQWM7RUFDZCwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2aXNvcy9hdmlzb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZpc297XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMzQ4NWYwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/avisos/avisos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/avisos/avisos.component.ts ***!
  \*******************************************************/
/*! exports provided: AvisosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosComponent", function() { return AvisosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _avisos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avisos.service */ "./src/app/components/avisos/avisos.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AvisosComponent = /** @class */ (function () {
    function AvisosComponent(_usuarioService, _avisosService, _sanitizer, _materia, route) {
        this._usuarioService = _usuarioService;
        this._avisosService = _avisosService;
        this._sanitizer = _sanitizer;
        this._materia = _materia;
        this.route = route;
        this.nuevo = 1;
        this.cargandoAvisos = false;
        this.idMateria = null;
        this.title = "Mis Avisos";
        this._usuarioService.pushBreadcum(this.title, "", 1);
        this.tipo = this.route.snapshot.paramMap.get('id');
        if (this.tipo == 2) {
            this.idMateria = this._materia.getSelectedMateria().materia_id;
        }
        this.idRol = this._usuarioService.getIdentity().rol_id;
    }
    AvisosComponent.prototype.ngOnInit = function () {
        this.consultaAvisos(1);
    };
    AvisosComponent.prototype.consultaAvisos = function (nuevo) {
        var _this = this;
        this.nuevo = nuevo;
        this.cargandoAvisos = true;
        this._avisosService.consulta(this.nuevo, this.idMateria, this.idRol).subscribe(function (response) {
            if (response && response['status']) {
                var avisos = response['avisos'];
                avisos.forEach(function (_aviso) {
                    _aviso.visto = parseInt(_aviso.visto);
                    _aviso.mensaje_html = this.htmlProperty(_aviso.mensaje);
                    _aviso.fecha_inicio = _aviso.fecha_inicio ? new Date(_aviso.fecha_inicio * 1000) : null;
                    _aviso.fecha_fin = _aviso.fecha_fin ? new Date(_aviso.fecha_fin * 1000) : null;
                }.bind(_this));
                _this.avisos = avisos;
                _this.cargandoAvisos = false;
            }
            else {
                _this.avisos = null;
                _this.cargandoAvisos = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvisosComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    AvisosComponent.prototype.marcarAviso = function (aviso, index) {
        var _this = this;
        if (aviso.visto == 1) {
            aviso.visto = 0;
        }
        else if (aviso.visto == 0) {
            aviso.visto = 1;
            this._avisosService.cambiaAvisoEstatus(aviso.aviso_id);
        }
        this._avisosService.marcarAvisos(aviso.aviso_id, aviso.tipo, aviso.visto).subscribe(function (response) {
            if (response && response['status']) {
                _this.avisos[index] = aviso.visto;
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    AvisosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avisos',
            template: __webpack_require__(/*! ./avisos.component.html */ "./src/app/components/avisos/avisos.component.html"),
            styles: [__webpack_require__(/*! ./avisos.component.scss */ "./src/app/components/avisos/avisos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _avisos_service__WEBPACK_IMPORTED_MODULE_3__["AvisosService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_4__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AvisosComponent);
    return AvisosComponent;
}());



/***/ }),

/***/ "./src/app/components/avisos/avisos.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/avisos/avisos.module.ts ***!
  \****************************************************/
/*! exports provided: AvisosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosModule", function() { return AvisosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _avisos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avisos-routing.module */ "./src/app/components/avisos/avisos-routing.module.ts");
/* harmony import */ var _avisos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avisos.component */ "./src/app/components/avisos/avisos.component.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AvisosModule = /** @class */ (function () {
    function AvisosModule() {
    }
    AvisosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_avisos_component__WEBPACK_IMPORTED_MODULE_3__["AvisosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _avisos_routing_module__WEBPACK_IMPORTED_MODULE_2__["AvisosRoutingModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_4__["ArchivoModule"],
            ],
            exports: [_avisos_component__WEBPACK_IMPORTED_MODULE_3__["AvisosComponent"]]
        })
    ], AvisosModule);
    return AvisosModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-avisos-avisos-module.js.map