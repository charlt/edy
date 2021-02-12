(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-carrera-carrera-module"],{

/***/ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carrera/campus-carrera/campus-carrera.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-6\">              \r\n      <form [formGroup]=\"campusCarreraForm\" (ngSubmit)=\"enviarInformacion()\" >\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nivel_estudios\">{{'SelectCampus' | translate}}</label>\r\n          <select formControlName=\"campus\" class=\"form-control\" >\r\n              <option  [value]=\"_campus.campus_id\" *ngFor=\"let _campus of campus\">{{_campus.campus}}</option>\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.campus.invalid && f.campus.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n          </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nivel_estudios\">{{'SelectCareer' | translate}}</label>\r\n          <select formControlName=\"carrera\" class=\"form-control\" >\r\n              <option  [value]=\"carrera.carrera_id\" *ngFor=\"let carrera of carreras\">{{carrera.carrera}}</option>\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.carrera.invalid && f.carrera.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n          </span>\r\n      </div>              \r\n      <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"campusCarreraForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right guardar-plan-estudios\">{{'fmSave' | translate}}</button>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/carrera/campus-carrera/campus-carrera.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FycmVyYS9jYW1wdXMtY2FycmVyYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJyZXJhL2NhbXB1cy1jYXJyZXJhL2NhbXB1cy1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/carrera/campus-carrera/campus-carrera.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CampusCarreraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusCarreraComponent", function() { return CampusCarreraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_carrera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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






var CampusCarreraComponent = /** @class */ (function () {
    function CampusCarreraComponent(formBuilder, _usuarioService, _carreraService, _catalogosService, router) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._carreraService = _carreraService;
        this._catalogosService = _catalogosService;
        this.router = router;
        this.title = 'Vinculación de carrera y campus';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(CampusCarreraComponent.prototype, "f", {
        get: function () { return this.campusCarreraForm.controls; },
        enumerable: true,
        configurable: true
    });
    CampusCarreraComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogosService.consultaCarrera(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogosService.consultaCampus(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                console.log(response);
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
        this.campusCarreraForm = this.formBuilder.group({
            campus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            carrera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    CampusCarreraComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.campusCarreraForm.invalid) {
            return;
        }
        this._carreraService.vinculaCarreraCampus(this.campusCarreraForm, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/carrera/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    CampusCarreraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campus-carrera',
            template: __webpack_require__(/*! ./campus-carrera.component.html */ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.html"),
            styles: [__webpack_require__(/*! ./campus-carrera.component.scss */ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_carrera_service__WEBPACK_IMPORTED_MODULE_2__["CarreraService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_3__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CampusCarreraComponent);
    return CampusCarreraComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/carrera-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/carrera/carrera-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CarreraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraRoutingModule", function() { return CarreraRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carrera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrera.component */ "./src/app/administracion/carrera/carrera.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/carrera/consulta/consulta.component.ts");
/* harmony import */ var _form_carrera_form_carrera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-carrera/form-carrera.component */ "./src/app/administracion/carrera/form-carrera/form-carrera.component.ts");
/* harmony import */ var _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-campus/form-campus.component */ "./src/app/administracion/carrera/form-campus/form-campus.component.ts");
/* harmony import */ var _campus_carrera_campus_carrera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campus-carrera/campus-carrera.component */ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _carrera_component__WEBPACK_IMPORTED_MODULE_2__["CarreraComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevaCarrera', component: _form_carrera_form_carrera_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'editaCarrera/:id', component: _form_carrera_form_carrera_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'formCampus', component: _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_5__["FormCampusComponent"] },
            { path: 'campusCarrera', component: _campus_carrera_campus_carrera_component__WEBPACK_IMPORTED_MODULE_6__["CampusCarreraComponent"] },
            { path: 'nuevoCampus', component: _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_5__["FormCampusComponent"] },
            { path: 'editaCampus/:id', component: _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_5__["FormCampusComponent"] }
        ]
    }
];
var CarreraRoutingModule = /** @class */ (function () {
    function CarreraRoutingModule() {
    }
    CarreraRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CarreraRoutingModule);
    return CarreraRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/carrera.component.html":
/*!***************************************************************!*\
  !*** ./src/app/administracion/carrera/carrera.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carrera/carrera.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/administracion/carrera/carrera.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcnJlcmEvY2FycmVyYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/carrera/carrera.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/carrera/carrera.component.ts ***!
  \*************************************************************/
/*! exports provided: CarreraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraComponent", function() { return CarreraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarreraComponent = /** @class */ (function () {
    function CarreraComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Campus y carreras";
        this._usuarioService.pushBreadcum(this.title, '/admin/carrera', 1);
    }
    CarreraComponent.prototype.ngOnInit = function () {
    };
    CarreraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrera',
            template: __webpack_require__(/*! ./carrera.component.html */ "./src/app/administracion/carrera/carrera.component.html"),
            styles: [__webpack_require__(/*! ./carrera.component.scss */ "./src/app/administracion/carrera/carrera.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], CarreraComponent);
    return CarreraComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/carrera.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/administracion/carrera/carrera.module.ts ***!
  \**********************************************************/
/*! exports provided: CarreraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraModule", function() { return CarreraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carrera_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrera-routing.module */ "./src/app/administracion/carrera/carrera-routing.module.ts");
/* harmony import */ var _carrera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrera.component */ "./src/app/administracion/carrera/carrera.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/carrera/consulta/consulta.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_carrera_form_carrera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-carrera/form-carrera.component */ "./src/app/administracion/carrera/form-carrera/form-carrera.component.ts");
/* harmony import */ var _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-campus/form-campus.component */ "./src/app/administracion/carrera/form-campus/form-campus.component.ts");
/* harmony import */ var _campus_carrera_campus_carrera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campus-carrera/campus-carrera.component */ "./src/app/administracion/carrera/campus-carrera/campus-carrera.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CarreraModule = /** @class */ (function () {
    function CarreraModule() {
    }
    CarreraModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_carrera_component__WEBPACK_IMPORTED_MODULE_3__["CarreraComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _form_carrera_form_carrera_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _form_campus_form_campus_component__WEBPACK_IMPORTED_MODULE_7__["FormCampusComponent"], _campus_carrera_campus_carrera_component__WEBPACK_IMPORTED_MODULE_8__["CampusCarreraComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"],
                _carrera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarreraRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], CarreraModule);
    return CarreraModule;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/consulta/consulta.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/carrera/consulta/consulta.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-6 col-lg-12\">\r\n      <div class=\"card mb-3\">\r\n          <div class=\"card-header\">\r\n            {{'Campus' | translate}}\r\n          </div>\r\n          <div class=\"card-body table-responsive\">\r\n                <a  [routerLink]=\"['../nuevoCampus']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>{{'NewCampus' | translate}}</a>\r\n              <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                      <th>{{'TbKey' | translate}}</th>\r\n                      <th>{{'TbName' | translate}}</th>\r\n                      <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n                      <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let sCampus of campus; let i = index\">\r\n                        <td>{{sCampus.campus_clave}}</td>\r\n                        <td>{{sCampus.campus}}</td>\r\n                        <td [hidden]=\"tipoAdmin == 0\">\r\n                            <a  [routerLink]=\"['../editaCampus/'+sCampus.campus_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n                        </td>\r\n                        <td [hidden]=\"tipoAdmin == 0\">\r\n                            <button (click)=\"eliminarCampus(sCampus.campus_id, i )\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n      </div>\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n            {{'Careers' | translate}}\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n            <a  [routerLink]=\"['../nuevaCarrera']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>{{'NewCareer' | translate}}</a>\r\n            <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'TbKey' | translate}}</th>\r\n                    <th>{{'TbName' | translate}}</th>\r\n                    <th>{{'TbEducationalLevel' | translate}}</th>\r\n                    <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n                    <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let carrera of carreras; let i = index\">\r\n                    <td>{{carrera.carrera_clave}}</td>\r\n                    <td>{{carrera.carrera}}</td>\r\n                    <td>{{carrera.nivel_estudios}}</td>\r\n                    <td [hidden]=\"tipoAdmin == 0\">\r\n                        <a  [routerLink]=\"['../editaCarrera/'+carrera.carrera_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n                    </td>\r\n                    <td [hidden]=\"tipoAdmin == 0\">\r\n                        <button (click)=\"eliminarCarrera(carrera.carrera_id, i )\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col col-xl-6 col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                {{'CampusCareers' | translate}}\r\n            </div>\r\n            <div class=\"card-body table-responsive\">\r\n                <a  [routerLink]=\"['../campusCarrera']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>{{'LinkCampusCareerBtn' | translate}}</a>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>{{'Campus' | translate}}</th>\r\n                        <th>{{'Careers' | translate}}</th>\r\n                        <th>{{'Erase' | translate}}</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let _carreraCampus of carreraCampus; let i = index\">\r\n                        <td>{{_carreraCampus.campus}}</td>\r\n                        <td>{{_carreraCampus.carrera}}</td>\r\n                        \r\n                        <td>\r\n                            <button [hidden]=\"tipoAdmin == 0\" (click)=\"desvincularCampusCarrera(_carreraCampus.carrera_id,_carreraCampus.campus_id,i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carrera/consulta/consulta.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/carrera/consulta/consulta.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcnJlcmEvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/carrera/consulta/consulta.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/carrera/consulta/consulta.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_carrera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultaComponent = /** @class */ (function () {
    function ConsultaComponent(translate, _carreraService, _usuarioService, _catalogosService) {
        this.translate = translate;
        this._carreraService = _carreraService;
        this._usuarioService = _usuarioService;
        this._catalogosService = _catalogosService;
        this.title = 'Consulta de carreras y campus';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this._catalogosService.consultaCarrera(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
            }
        }, function (error) {
            console.log(error);
        });
        this._carreraService.consultaCarreraCampus(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.carreraCampus = response['inter'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogosService.consultaCampus(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminarCampus = function (id_campus, index) {
        console.log(id_campus);
        alertify.confirm(this.translate.instant('MsgEraseCampus'), function () {
            var _this = this;
            this._carreraService.eliminaCampus(id_campus, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.campus.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this));
    };
    ConsultaComponent.prototype.eliminarCarrera = function (id_carrera, index) {
        alertify.confirm(this.translate.instant('MsgEraseCareer'), function () {
            var _this = this;
            this._carreraService.eliminaCarrera(id_carrera, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.carreras.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this));
    };
    ConsultaComponent.prototype.desvincularCampusCarrera = function (id_carrera, id_campus, index) {
        alertify.confirm(this.translate.instant('MsgUnLinkCareerCampus'), function () {
            var _this = this;
            this._carreraService.desvinculaCarreraCampus(id_carrera, id_campus, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.carreraCampus.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this));
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/carrera/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/carrera/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_carrera_service__WEBPACK_IMPORTED_MODULE_3__["CarreraService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/form-campus/form-campus.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-campus/form-campus.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-6 carreras\">              \r\n    <form [formGroup]=\"campusForm\" *ngIf=\"campusForm\" (ngSubmit)=\"enviarInformacion()\" >\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\">{{'KeyCampus' | translate}}</label>\r\n        <input formControlName=\"claveCampus\" class=\"form-control\" placeholder=\"{{'KeyCampus' | translate}}\" type=\"text\" required=\"\">\r\n        <span class=\"invalidText\" *ngIf=\"f.claveCampus.invalid && f.claveCampus.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nombre_carrera\">{{'NameCampus' | translate}}</label>\r\n        <input formControlName=\"nombreCampus\" class=\"form-control\" placeholder=\"{{'NameCampus' | translate}}\" type=\"text\" required=\"\">\r\n        <span class=\"invalidText\" *ngIf=\"f.nombreCampus.invalid && f.nombreCampus.touched\">\r\n            {{'fmErrField' | translate}}\r\n        </span>\r\n      </div> \r\n      <div class=\"form-group my-2\">\r\n        <div class=\"form-check form-check-inline\">\r\n          <input formControlName=\"online\" class=\"form-check-input\" type=\"checkbox\" id=\"checkboxOnline\">\r\n          <label class=\"form-check-label\" for=\"checkboxOnline\">Campus online</label>\r\n        </div>\r\n      </div>   \r\n      <div class=\"form-group\">\r\n        <label>{{'Tipo de campus' | translate}}</label>\r\n        <select class=\"form-control\" formControlName=\"tipoCampus\">\r\n          <option value=\"\" hidden>Selecciona una opción</option>\r\n          <option [value]=\"tipo.tipo_campus_id\" *ngFor=\"let tipo of catTipoCampus; let i = index;\">{{tipo.tipo_campus}}</option>\r\n        </select>\r\n      </div>         \r\n      <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"campusForm.invalid\" type=\"submit\" class=\"btn btn-primary pull-right guardar-plan-estudios mt-2\">{{'fmSave' | translate}}</button>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carrera/form-campus/form-campus.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-campus/form-campus.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FycmVyYS9mb3JtLWNhbXB1cy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJyZXJhL2Zvcm0tY2FtcHVzL2Zvcm0tY2FtcHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/carrera/form-campus/form-campus.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-campus/form-campus.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormCampusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCampusComponent", function() { return FormCampusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _services_carrera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormCampusComponent = /** @class */ (function () {
    function FormCampusComponent(formBuilder, router, route, _usuarioService, _catalogoService, _carreraService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this._carreraService = _carreraService;
        this.idCampus = this.route.snapshot.paramMap.get('id');
        if (this.idCampus)
            this.title = 'Editar campus';
        else
            this.title = 'Nuevo campus';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(FormCampusComponent.prototype, "f", {
        get: function () { return this.campusForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormCampusComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaNivelEstudios(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nivelEstudios = response['nivelEstudios'];
                console.log(_this.nivelEstudios);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.idCampus != null) {
            this._carreraService.consultaCampus(this.idCampus, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.campus = response['campus'][0];
                    _this.setFormulario();
                    _this.consultaTipoCampus();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.setFormulario();
            this.consultaTipoCampus();
        }
    };
    // this.campusForm = this.formBuilder.group({
    //   claveCampus: [this.campus.campus_clave, Validators.required],
    //   nombreCampus: [this.campus.campus, Validators.required],
    // });
    FormCampusComponent.prototype.setFormulario = function () {
        var c = this.campus;
        var online;
        if (c)
            c.online == 1 ? online = true : false;
        this.campusForm = this.formBuilder.group({
            claveCampus: [c ? c.campus_clave : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nombreCampus: [c ? c.campus : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            online: [online],
            tipoCampus: [c ? c.tipo_campus_id : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    FormCampusComponent.prototype.consultaTipoCampus = function () {
        var _this = this;
        this._carreraService.consultaTipoCampus().subscribe(function (response) {
            if (response && response['status']) {
                _this.catTipoCampus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormCampusComponent.prototype.enviarInformacion = function () {
        // stop here if form is invalid
        var _this = this;
        this._carreraService.modificaCampus(this.campusForm, this.jwt, this.idCampus).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/carrera/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        // if (this.campusForm.invalid) {
        //  return;
        // }
    };
    FormCampusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-campus',
            template: __webpack_require__(/*! ./form-campus.component.html */ "./src/app/administracion/carrera/form-campus/form-campus.component.html"),
            styles: [__webpack_require__(/*! ./form-campus.component.scss */ "./src/app/administracion/carrera/form-campus/form-campus.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"],
            _services_carrera_service__WEBPACK_IMPORTED_MODULE_5__["CarreraService"]])
    ], FormCampusComponent);
    return FormCampusComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carrera/form-carrera/form-carrera.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-carrera/form-carrera.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-md-6 carreras\">\r\n    <form [formGroup]=\"carreraForm\" (ngSubmit)=\"enviarInformacion()\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"clave_carrera\">{{'KeyCareer' | translate}}</label>\r\n        <input formControlName=\"claveCarrera\" class=\"form-control\" id=\"clave_carrera\"\r\n          placeholder=\"{{'KeyCareer' | translate}}\" type=\"text\" required=\"\">\r\n        <span class=\"invalidText\" *ngIf=\"f.claveCarrera.invalid && f.claveCarrera.touched && !repetida\">\r\n          {{'fmErrClave' | translate}}\r\n        </span>\r\n        <span class=\"invalidText\" *ngIf=\"f.claveCarrera.invalid && f.claveCarrera.touched && repetida\">\r\n          Clave ya registrada\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nombre_carrera\">{{'NameCareer' | translate}}</label>\r\n        <input formControlName=\"nombreCarrera\" class=\"form-control\" id=\"nombre_carrera\"\r\n          placeholder=\"{{'NameCareer' | translate}}\" type=\"text\" required=\"\">\r\n        <span class=\"invalidText\" *ngIf=\"f.nombreCarrera.invalid && f.nombreCarrera.touched\">\r\n          {{'fmErrField' | translate}}\r\n        </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nivel_estudios\">{{'SelectEducationalLevel' | translate}}</label>\r\n        <select formControlName=\"nivelEstudios\" class=\"form-control\" id=\"nivel_estudios\">\r\n          <option [value]=\"nivelEstudio.nivel_estudios_id\" *ngFor=\"let nivelEstudio of nivelEstudios\">\r\n            {{nivelEstudio.nivel_estudios}}</option>\r\n          <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.nivelEstudios.invalid && f.nivelEstudios.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div><br>\r\n      <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"carreraForm.invalid\" type=\"submit\"\r\n        class=\"btn btn-primary pull-right guardar-plan-estudios\">{{'fmSave' | translate}}</button>\r\n      <br>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carrera/form-carrera/form-carrera.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-carrera/form-carrera.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FycmVyYS9mb3JtLWNhcnJlcmEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FycmVyYS9mb3JtLWNhcnJlcmEvZm9ybS1jYXJyZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/carrera/form-carrera/form-carrera.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/carrera/form-carrera/form-carrera.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _services_carrera_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, router, route, _usuarioService, _catalogoService, _carreraService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this._carreraService = _carreraService;
        this.repetida = false;
        this.idCarrera = this.route.snapshot.paramMap.get('id');
        if (this.idCarrera)
            this.title = 'Editar carrera';
        else
            this.title = 'Nueva Carrera';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.carreraForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        this.consultaCarreras();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaNivelEstudios(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nivelEstudios = response['nivelEstudios'];
            }
        }, function (error) {
            console.log(error);
        });
        this.carreraForm = this.formBuilder.group({
            claveCarrera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nombreCarrera: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nivelEstudios: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (this.idCarrera != null) {
            this._carreraService.consulta(this.idCarrera, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.carrera = response['carreras'][0];
                    _this.carreraForm.get("claveCarrera").setValue(_this.carrera.carrera_clave);
                    _this.carreraForm.get("nombreCarrera").setValue(_this.carrera.carrera);
                    _this.carreraForm.get("nivelEstudios").setValue(_this.carrera.nivel_estudios_id);
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.carreraForm.get('claveCarrera').valueChanges.subscribe(function (value) {
            if (_this.carreraForm.get('claveCarrera').value) {
                _this.carreraRepetida();
            }
            else {
                _this.carreraForm.get('claveCarrera').setErrors({ invalid: true });
                _this.repetida = false;
            }
        });
    };
    FormComponent.prototype.carreraRepetida = function () {
        var _this = this;
        var clave = this.carreraForm.get('claveCarrera').value;
        this.carreras.forEach(function (carrera) {
            if (clave == carrera.carrera_clave) {
                _this.repetida = true;
                _this.carreraForm.get('claveCarrera').setErrors({ invalid: true });
            }
        });
    };
    FormComponent.prototype.consultaCarreras = function () {
        var _this = this;
        this._catalogoService.consultaCarrera(this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.carreras = response['carreras'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.enviarInformacion = function () {
        // stop here if form is invalid
        var _this = this;
        this._carreraService.modificaCarrera(this.carreraForm, this.jwt, this.idCarrera, this.id_nivel_estudios).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/carrera/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
        if (this.carreraForm.invalid) {
            return;
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-carrera',
            template: __webpack_require__(/*! ./form-carrera.component.html */ "./src/app/administracion/carrera/form-carrera/form-carrera.component.html"),
            styles: [__webpack_require__(/*! ./form-carrera.component.scss */ "./src/app/administracion/carrera/form-carrera/form-carrera.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"],
            _services_carrera_service__WEBPACK_IMPORTED_MODULE_5__["CarreraService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=administracion-carrera-carrera-module.js.map