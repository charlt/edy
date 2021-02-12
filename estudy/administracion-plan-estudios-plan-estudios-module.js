(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-plan-estudios-plan-estudios-module"],{

/***/ "./src/app/administracion/plan-estudios/consulta/consulta.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/consulta/consulta.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n      <h4 class=\"top-buffer\">{{title}}</h4>\r\n      <br>\r\n      <a  [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'NewSyllabus' | translate}}</a>\r\n      <hr>\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n            </div>\r\n          </div>        \r\n          <div class=\" table-responsive\">\r\n            <table class=\"table table-striped table-bordered \">\r\n              <tbody><tr>\r\n                <th>{{'KeySyllabus' | translate}}</th>\r\n                <th>{{'NameSyllabus' | translate}} </th>\r\n                <th>{{'PeriodSyllabus' | translate}}</th>\r\n                <th>{{'TypePeriod' | translate}}</th>\r\n                <th>{{'CareerSyllabus' | translate}}</th>  \r\n                <!--th>{{'NumberRVOE' | translate}}</th-->    \r\n                <th>{{'RVOE' | translate}}</th>\r\n                <!--th>{{'MinScore' | translate}}</th>\r\n                <th>{{'MaxScore' | translate}}</th-->            \r\n                <th>{{'ResponsibleCURP' | translate}}</th>\r\n                <th>{{'CheckSyllabus' | translate}}</th>\r\n                <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n                <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>                                      \r\n              </tr>\r\n              <tr *ngIf=\"(planEstudios | filter: search).length === 0\">\r\n                <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n              </tr>\r\n                <tr *ngFor=\"let planEstudio of planEstudios | filter:search\">\r\n                  <td>{{planEstudio.plan_estudio_clave}}</td>\r\n                  <td>{{planEstudio.plan_estudio}}</td>\r\n                  <td>{{planEstudio.total_periodos}}</td>\r\n                  <td>{{planEstudio.periodo}}</td>\r\n                  <td>{{planEstudio.carrera}}</td>\r\n                  <!--td>{{planEstudio.no_rvoe}}</td-->\r\n                  <td>{{planEstudio.rvoe}}</td>\r\n                  <!--td>{{planEstudio.calif_min}}</td>\r\n                  <td>{{planEstudio.calif_max}}</td-->\r\n                  <td>{{planEstudio.curp_responsable}}</td>\r\n                  <td>\r\n                    <a  [routerLink]=\"['../vistaGeneral/'+planEstudio.plan_estudio_id+'/'+planEstudio.carrera_id]\" class=\"btn btn-warning\"><i class=\"fa fa-eye\"></i></a>\r\n                  </td>\r\n                  <td [hidden]=\"tipoAdmin == 0\">\r\n                    <a  [routerLink]=\"['../editar/'+planEstudio.plan_estudio_id+'/'+planEstudio.carrera_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n                  </td>\r\n                  <td [hidden]=\"tipoAdmin == 0\">\r\n                    <button (click)=\"eliminar(planEstudio.plan_estudio_id)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                  </td>\r\n                </tr>          \r\n            </tbody></table>\r\n          </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/consulta/consulta.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/consulta/consulta.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BsYW4tZXN0dWRpb3MvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/consulta/consulta.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/consulta/consulta.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plan-estudios.service */ "./src/app/administracion/plan-estudios/services/plan-estudios.service.ts");
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
    function ConsultaComponent(translate, _planEstudiosService, _catalogoService, _usuarioService) {
        this.translate = translate;
        this._planEstudiosService = _planEstudiosService;
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this.title = 'Consulta de plan de estudios';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaPlanEstudios(this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.planEstudios = response['planEstudio'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm("Eliminar", this.translate.instant('MsgEraseSyllabus'), function () {
            var _this = this;
            this._planEstudiosService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.planEstudios.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancel');
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/plan-estudios/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/plan-estudios/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_3__["PlanEstudiosService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_4__["CatalogoService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12  nuevaAsignatura\">\r\n    <form [formGroup]=\"ordenJerarquicoForm\" (ngSubmit)=\"enviarInformacion()\">\r\n       \r\n     <div class=\"row\">   \r\n\r\n         <div class=\"col-md-12\">\r\n              <div class=\"form-group\">                               \r\n                  <label class=\"control-label  \">{{'NombreOrdenJerarquico' | translate}}:</label>\r\n                  <input formControlName=\"ordenJerarquico\" class=\"form-control\"  placeholder=\"{{'NombreOrdenJerarquico' | translate}}\" type=\"text\" >\r\n                  <span class=\"invalidText\" *ngIf=\"f.ordenJerarquico.invalid && f.ordenJerarquico.touched\">\r\n                      {{'fmErrName' | translate}}\r\n                  </span>\r\n          </div>\r\n              <div class=\"form-group\">                               \r\n                      <label class=\"control-label  \" for=\"nombre_asignatura\">{{'DescripcionOrdenJerarquico' | translate}}:</label>\r\n                      <input formControlName=\"ordenJerarquicoDescripcion\" class=\"form-control\"  placeholder=\"{{'DescripcionOrdenJerarquico' | translate}}\" type=\"text\">\r\n                      <span class=\"invalidText\" *ngIf=\"f.ordenJerarquicoDescripcion.invalid && f.ordenJerarquicoDescripcion.touched\" >\r\n                              {{'fmErrDescription' | translate}}\r\n                      </span>\r\n              </div>\r\n         </div>\r\n      </div>                     \r\n        <button  [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right enviar-datos-asignaturas\">{{'fmSave' | translate}}</button>           \r\n    </form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy9mb3JtLW9yZGVuLWplcmFycXVpY28vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy9mb3JtLW9yZGVuLWplcmFycXVpY28vZm9ybS1vcmRlbi1qZXJhcnF1aWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FormOrdenJerarquicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormOrdenJerarquicoComponent", function() { return FormOrdenJerarquicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/orden-jerarquico.service */ "./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormOrdenJerarquicoComponent = /** @class */ (function () {
    function FormOrdenJerarquicoComponent(formBuilder, _usuarioService, _ordenJerarquicoService, router, route) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._ordenJerarquicoService = _ordenJerarquicoService;
        this.router = router;
        this.route = route;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormOrdenJerarquicoComponent.prototype, "f", {
        get: function () { return this.ordenJerarquicoForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormOrdenJerarquicoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (this.idOrdenJerarquico === undefined)
            this.idOrdenJerarquico = null;
        this.jwt = this._usuarioService.getJWT();
        this.ordenJerarquicoForm = this.formBuilder.group({
            ordenJerarquico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ordenJerarquicoDescripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this._ordenJerarquicoService.consultaCatOrdenJerarquico(this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                //this.ordenJerarquico;
            }
        }, function (error) {
            console.log(error);
        });
        if (this.idOrdenJerarquico) {
            this._ordenJerarquicoService.consultaOrdenJerarquico(this.idOrdenJerarquico, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.ordenJerarquico = response['orden'][0];
                    _this.ordenJerarquicoForm.get('ordenJerarquico').setValue(_this.ordenJerarquico.orden_jerarquico);
                    _this.ordenJerarquicoForm.get('ordenJerarquicoDescripcion').setValue(_this.ordenJerarquico.orden_jerarquico_descripcion);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormOrdenJerarquicoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.ordenJerarquicoForm.invalid) {
            Object.keys(this.ordenJerarquicoForm.controls).forEach(function (controlKey) {
                _this.ordenJerarquicoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        // this._ordenJerarquicoService.modificaOrdenJerarquico(this.ordenJerarquicoForm ,this.idOrdenJerarquico, this.jwt ).subscribe(
        //  response =>{
        //    console.log(response)
        //      if(response && response['status']){
        //        this.sucessEvent.emit(response['idOrdenJerarquico']);//si se insertó correctamente se le agrega la asignatura a la asignatura
        //        alertify.success(response['msg'])
        //      }else{
        //       this.sucessEvent.emit(response['idOrdenJerarquico']); //si no se devuelve un id igual a 0
        //        alertify.error(response['msg'])
        //      }
        //  },error =>{
        //    console.log(<any>error)
        //  });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormOrdenJerarquicoComponent.prototype, "sucessEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormOrdenJerarquicoComponent.prototype, "idOrdenJerarquico", void 0);
    FormOrdenJerarquicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-orden-jerarquico',
            template: __webpack_require__(/*! ./form-orden-jerarquico.component.html */ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.html"),
            styles: [__webpack_require__(/*! ./form-orden-jerarquico.component.scss */ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_2__["OrdenJerarquicoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FormOrdenJerarquicoComponent);
    return FormOrdenJerarquicoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/nuevo/nuevo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 plan-estudios  \">\r\n<form [formGroup]=\"planEstudiosForm\" (ngSubmit)=\"enviarInformacion()\" >\r\n  <h4 class=\"top-buffer\">{{title}}</h4>\r\n <div class=\"row\"> \r\n  <div class=\"col-md 6\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"clave_plan_estudios\">{{'KeySyllabus' | translate}}:</label>\r\n    <input  formControlName=\"clavePlan\" class=\"form-control\" id=\"clave_plan_estudios\" placeholder=\"{{'KeySyllabus' | translate}}\" type=\"text\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.clavePlan.invalid && f.clavePlan.touched\">\r\n        {{'fmErrKey' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"nombre_plan_estudios\">{{'NameSyllabus' | translate}}</label>\r\n    <input  formControlName=\"nombrePlan\" class=\"form-control\" id=\"nombre_plan_estudios\" placeholder=\"{{'NameSyllabus' | translate}}\" type=\"text\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.nombrePlan.invalid && f.nombrePlan.touched\">\r\n        {{'fmErrName' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"periodos_plan_estudios\">{{'PeriodSyllabus' | translate}}</label>\r\n    <input  formControlName=\"periodosEstudios\" class=\"form-control\" id=\"periodos_plan_estudios\" placeholder=\"{{'PeriodSyllabus' | translate}}\" type=\"number\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.periodosEstudios.invalid && f.periodosEstudios.touched\">\r\n        {{'fmErrField' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group cat_tipo_periodos\">\r\n    <label class=\"control-label\" for=\"tipo_periodos\">{{'TypePeriod' | translate}}</label>   \r\n    <select   formControlName=\"catPeriodos\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"periodo.tipo_periodo_id\" *ngFor=\"let periodo of periodos\">{{periodo.periodo}}</option>\r\n    </select>\r\n    <span class=\"invalidText\" *ngIf=\"f.catPeriodos.invalid && f.catPeriodos.touched\">\r\n      {{'fmErrSelect' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group cat_tipo_periodos\">\r\n    <label class=\"control-label\" for=\"tipo_periodos\">{{'TypeSyllabus' | translate}}</label>   \r\n    <select   formControlName=\"catTipoPlan\"  class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"catTipoPlan.tipo_plan_estudio_id\" *ngFor=\"let catTipoPlan of tipoPlan\">{{catTipoPlan.tipo_plan_estudio}}</option>\r\n    </select>\r\n    <span class=\"invalidText\" *ngIf=\"f.catTipoPlan.invalid && f.catTipoPlan.touched\">\r\n      {{'fmErrSelect' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group repo_carrera\">\r\n    <label class=\"control-label\" for=\"consulta_carrera\">{{'SelectCareerSyllabus' | translate}}</label>\r\n    <select   formControlName=\"catCarreras\"  class=\"form-control\" >\r\n      <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n      <option  [value]=\"carrera.carrera_id\" *ngFor=\"let carrera of carreras\">{{carrera.carrera}}</option>\r\n    </select>\r\n    <span class=\"invalidText\" *ngIf=\"f.catCarreras.invalid && f.catCarreras.touched\">\r\n        {{'fmErrSelect' | translate}}\r\n    </span>\r\n  </div>                             \r\n</div>\r\n<div class=\"col-md 6\">\r\n  <!--div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"nRVOE\">{{'NumberRVOE' | translate}}</label>\r\n    <input  min=\"0\" class=\"form-control\" formControlName=\"nRVOE\" placeholder=\"{{'NumberRVOE' | translate}}\" type=\"number\">\r\n    <span class=\"invalidText\" *ngIf=\"f.nRVOE.invalid && f.nRVOE.touched\">\r\n        {{'fmErrField' | translate}}\r\n    </span>\r\n  </div-->\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"RVOE\">{{'RVOE' | translate}}</label>\r\n    <input class=\"form-control\" formControlName=\"RVOE\" placeholder=\"{{'RVOE' | translate}}\" type=\"text\">\r\n    <!-- <span class=\"invalidText\" *ngIf=\"f.RVOE.invalid && f.RVOE.touched\">\r\n        {{'fmErrField' | translate}}\r\n    </span> -->\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"CMin\">{{'MinScore' | translate}}</label>\r\n    <input min=\"0\" max=\"10\" class=\"form-control\" formControlName=\"cMin\" placeholder=\"{{'MinScore' | translate}}\" type=\"number\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.cMin.invalid && f.cMin.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"CMax\">{{'MinCredits' | translate}}</label>\r\n    <input  min=\"0\" max=\"10\"  class=\"form-control\" formControlName=\"minCredits\" placeholder=\"{{'MaxScore' | translate}}\" type=\"number\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.minCredits.invalid && f.minCredits.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"CMax\">{{'MaxCredits' | translate}}</label>\r\n    <input  min=\"0\" max=\"10\"  class=\"form-control\" formControlName=\"totalCredits\" placeholder=\"{{'MaxScore' | translate}}\" type=\"number\" required>\r\n    <span class=\"invalidText\" *ngIf=\"f.totalCredits.invalid && f.totalCredits.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"CURP\">{{'ResponsibleCURP' | translate}}</label>\r\n    <input  pattern=\"^([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)$\"\r\n    type=\"text\"  class=\"form-control\" formControlName=\"CURP\" placeholder=\"{{'ResponsibleCURP' | translate}}\">\r\n    <span class=\"invalidText\" *ngIf=\"f.CURP.invalid && f.CURP.touched\">\r\n        {{'fmErrCURP' | translate}}\r\n    </span>\r\n    <div class=\"resultado-curp\"></div>\r\n  </div>\r\n  \r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\" for=\"minimoMateriasGrado\">Ingresa el mínimo de materias para pasar al siguiente grado</label>\r\n    <input type=\"number\"  class=\"form-control\" formControlName=\"minimoMateriasGrado\" placeholder=\"Ingresa un número\">\r\n    <span class=\"invalidText\" *ngIf=\"f.minimoMateriasGrado.invalid && f.minimoMateriasGrado.touched\">\r\n        {{'fmErrNumber' | translate}}\r\n    </span>\r\n  </div> \r\n  <br>\r\n  <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right guardar-plan-estudios\">{{'fmSave' | translate}}</button>\r\n</div>              \r\n  <div class=\"col-md-12\">                  \r\n  <div class=\"resultados_plan_estudios margin-top\"></div>\r\n</div>\r\n</div>\r\n</form>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/nuevo/nuevo.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy9udWV2by9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wbGFuLWVzdHVkaW9zL251ZXZvL251ZXZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/nuevo/nuevo.component.ts ***!
  \***********************************************************************/
/*! exports provided: NuevoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoComponent", function() { return NuevoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/plan-estudios.service */ "./src/app/administracion/plan-estudios/services/plan-estudios.service.ts");
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






var NuevoComponent = /** @class */ (function () {
    function NuevoComponent(formBuilder, _catalogoService, _usuarioService, _planEstudiosService, router, route) {
        this.formBuilder = formBuilder;
        this._catalogoService = _catalogoService;
        this._usuarioService = _usuarioService;
        this._planEstudiosService = _planEstudiosService;
        this.router = router;
        this.route = route;
        this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
        this.idCarrera = this.route.snapshot.paramMap.get('id2');
        if (this.idPlanEstudios)
            this.title = 'Editar elemento';
        else
            this.title = 'Nuevo elemento';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(NuevoComponent.prototype, "f", {
        get: function () { return this.planEstudiosForm.controls; },
        enumerable: true,
        configurable: true
    });
    NuevoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaCarrera(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.carreras = response['carreras'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogoService.consultatipoPeriodo(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.periodos = response['periodos'];
            }
        }, function (error) {
            console.log(error);
        });
        this._catalogoService.consultatipoPlanEstudios(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.tipoPlan = response['tipoPlan'];
            }
        }, function (error) {
            console.log(error);
        });
        this.planEstudiosForm = this.formBuilder.group({
            clavePlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombrePlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            periodosEstudios: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            RVOE: [''],
            cMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            minCredits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            totalCredits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CURP: [''],
            catCarreras: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            catPeriodos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            catTipoPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            minimoMateriasGrado: ['']
        });
        if (this.idPlanEstudios != null && this.idCarrera != null) {
            this._planEstudiosService.consultaEspecifica(this.idPlanEstudios, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.planEstudios = response['planEstudio'][0];
                    _this.planEstudiosForm = _this.formBuilder.group({
                        nombrePlan: [_this.planEstudios.plan_estudio, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        clavePlan: [_this.planEstudios.plan_estudio_clave, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        periodosEstudios: [_this.planEstudios.total_periodos, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        RVOE: [_this.planEstudios.rvoe],
                        cMin: [_this.planEstudios.minima_aprobatoria, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        totalCredits: [_this.planEstudios.total_creditos, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        minCredits: [_this.planEstudios.minima_creditos, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        CURP: [_this.planEstudios.curp_responsable],
                        catCarreras: [_this.idCarrera, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        catPeriodos: [_this.planEstudios.tipo_periodo_id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        catTipoPlan: [_this.planEstudios.tipo_plan_estudio_id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        minimoMateriasGrado: [_this.planEstudios.minimo_materias_grado]
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NuevoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.planEstudiosForm.invalid) {
            Object.keys(this.planEstudiosForm.controls).forEach(function (controlKey) {
                _this.planEstudiosForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._planEstudiosService.modificaPlanEstudios(this.planEstudiosForm, this.idPlanEstudios).subscribe(function (response) {
            if (response && response['status']) {
                _this.router.navigate(['admin/plan-estudios/consulta']);
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo',
            template: __webpack_require__(/*! ./nuevo.component.html */ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo.component.scss */ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_4__["PlanEstudiosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], NuevoComponent);
    return NuevoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/plan-estudios-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/plan-estudios-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PlanEstudiosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudiosRoutingModule", function() { return PlanEstudiosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_estudios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-estudios.component */ "./src/app/administracion/plan-estudios/plan-estudios.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/plan-estudios/consulta/consulta.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.ts");
/* harmony import */ var _vista_general_vista_general_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vista-general/vista-general.component */ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _plan_estudios_component__WEBPACK_IMPORTED_MODULE_2__["PlanEstudiosComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"] },
            { path: 'vistaGeneral/:id/:id2', component: _vista_general_vista_general_component__WEBPACK_IMPORTED_MODULE_5__["VistaGeneralComponent"] },
            { path: 'editar/:id/:id2', component: _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_4__["NuevoComponent"] }
        ]
    }
];
var PlanEstudiosRoutingModule = /** @class */ (function () {
    function PlanEstudiosRoutingModule() {
    }
    PlanEstudiosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PlanEstudiosRoutingModule);
    return PlanEstudiosRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/plan-estudios.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/plan-estudios.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/plan-estudios.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/plan-estudios.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9wbGFuLWVzdHVkaW9zL3BsYW4tZXN0dWRpb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/plan-estudios.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/plan-estudios.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlanEstudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudiosComponent", function() { return PlanEstudiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanEstudiosComponent = /** @class */ (function () {
    function PlanEstudiosComponent(_usuarioService, translate) {
        this._usuarioService = _usuarioService;
        this.translate = translate;
        this.translate.setDefaultLang('es');
        this.title = "Planes de estudios";
        this._usuarioService.pushBreadcum(this.title, '/admin/plan-estudios', 1);
    }
    PlanEstudiosComponent.prototype.ngOnInit = function () {
    };
    PlanEstudiosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-estudios',
            template: __webpack_require__(/*! ./plan-estudios.component.html */ "./src/app/administracion/plan-estudios/plan-estudios.component.html"),
            styles: [__webpack_require__(/*! ./plan-estudios.component.scss */ "./src/app/administracion/plan-estudios/plan-estudios.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], PlanEstudiosComponent);
    return PlanEstudiosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/plan-estudios.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/plan-estudios.module.ts ***!
  \**********************************************************************/
/*! exports provided: PlanEstudiosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudiosModule", function() { return PlanEstudiosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _plan_estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-estudios-routing.module */ "./src/app/administracion/plan-estudios/plan-estudios-routing.module.ts");
/* harmony import */ var _plan_estudios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-estudios.component */ "./src/app/administracion/plan-estudios/plan-estudios.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/plan-estudios/consulta/consulta.component.ts");
/* harmony import */ var _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo/nuevo.component */ "./src/app/administracion/plan-estudios/nuevo/nuevo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vista_general_vista_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vista-general/vista-general.component */ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.ts");
/* harmony import */ var src_app_shared_modules_institucion_institucion_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/institucion/institucion.module */ "./src/app/shared/modules/institucion/institucion.module.ts");
/* harmony import */ var _form_orden_jerarquico_form_orden_jerarquico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-orden-jerarquico/form-orden-jerarquico.component */ "./src/app/administracion/plan-estudios/form-orden-jerarquico/form-orden-jerarquico.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _asignatura_edicion_edicion_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../asignatura/edicion/edicion.module */ "./src/app/administracion/asignatura/edicion/edicion.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var PlanEstudiosModule = /** @class */ (function () {
    function PlanEstudiosModule() {
    }
    PlanEstudiosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _plan_estudios_component__WEBPACK_IMPORTED_MODULE_3__["PlanEstudiosComponent"],
                _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaComponent"],
                _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_6__["NuevoComponent"],
                _vista_general_vista_general_component__WEBPACK_IMPORTED_MODULE_8__["VistaGeneralComponent"],
                _nuevo_nuevo_component__WEBPACK_IMPORTED_MODULE_6__["NuevoComponent"],
                _form_orden_jerarquico_form_orden_jerarquico_component__WEBPACK_IMPORTED_MODULE_10__["FormOrdenJerarquicoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_14__["LanguageTranslationModule"],
                _plan_estudios_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlanEstudiosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedPipesModule"],
                src_app_shared_modules_institucion_institucion_module__WEBPACK_IMPORTED_MODULE_9__["InstitucionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__["NgxFileDropModule"],
                _asignatura_edicion_edicion_module__WEBPACK_IMPORTED_MODULE_15__["EdicionModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_16__["ConsultaAsignaturaModule"]
            ]
        })
    ], PlanEstudiosModule);
    return PlanEstudiosModule;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/services/plan-estudios.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/services/plan-estudios.service.ts ***!
  \********************************************************************************/
/*! exports provided: PlanEstudiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudiosService", function() { return PlanEstudiosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlanEstudiosService = /** @class */ (function () {
    function PlanEstudiosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PlanEstudiosService.prototype.consulta = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/admin/planEstudios/consulta.php' + params);
    };
    PlanEstudiosService.prototype.consultaEspecifica = function (id, jwt) {
        var params = '?id_plan_estudios=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/admin/planEstudios/consulta.php' + params);
    };
    PlanEstudiosService.prototype.elimina = function (id, jwt) {
        var params = '?id_plan_estudios=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'admin/planEstudios/elimina.php' + params);
    };
    PlanEstudiosService.prototype.consultaOrdenJerarquico = function (id, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_plan_estudio=' + id;
        return this._httpClient.get(this.url + '/admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    PlanEstudiosService.prototype.modificaPlanEstudios = function (planEstudio, id_plan_estudios) {
        var formData = new FormData();
        console.log(planEstudio);
        formData.append('plan_estudio_clave', planEstudio.get('clavePlan').value);
        formData.append('plan_estudio', planEstudio.get('nombrePlan').value);
        formData.append('no_rvoe', '0');
        formData.append('rvoe', planEstudio.get('RVOE').value);
        formData.append('grado', planEstudio.get('periodosEstudios').value);
        formData.append('minima_creditos', planEstudio.get('minCredits').value);
        formData.append('total_creditos', planEstudio.get('totalCredits').value);
        formData.append('total_periodos', planEstudio.get('periodosEstudios').value);
        formData.append('minima_aprobatoria', planEstudio.get('cMin').value);
        formData.append('tipo_periodo_id', planEstudio.get('catPeriodos').value);
        formData.append('id_carrera', planEstudio.get('catCarreras').value);
        formData.append('tipo_plan_estudio_id', planEstudio.get('catTipoPlan').value);
        formData.append('curp_responsable', planEstudio.get('CURP').value);
        formData.append('minimo_materias_grado', planEstudio.get('minimoMateriasGrado').value);
        var fd = new FormData();
        if (id_plan_estudios == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'admin/planEstudios/crea.php', formData);
        }
        else {
            formData.append('id_plan_estudios', id_plan_estudios);
            return this._httpClient.post(this.url + 'admin/planEstudios/edita.php', formData);
        }
    };
    PlanEstudiosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlanEstudiosService);
    return PlanEstudiosService;
}());



/***/ }),

/***/ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/vista-general/vista-general.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 plan-estudios  \">\r\n    <h4 class=\"top-buffer\">{{title}}</h4>  \r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 text-center\">\r\n    <h5>{{carrera.carrera}}</h5>\r\n    <h4>{{planEstudios.plan_estudio}}</h4>\r\n  </div>    \r\n</div>\r\n<div class=\"col-md-12 m-0 px-1\">\r\n  <div class=\"container\">\r\n    <span class=\"badge bg-normal text-white\">Regular</span> \r\n    <span class=\"badge bg-tronco text-white ml-2\">Tronco común</span>\r\n  </div>\r\n</div>\r\n<div class=\"row plan-container\" >\r\n  <div class=\"col-md-12\" >\r\n    <div class=\"row orden_jerarquico alert-secondary \" *ngFor=\"let _ordenJerarquico of ordenJerarquico; let i = index;\">\r\n      <div class=\"col-md-1 d-flex card-orden-jerarquico \" >\r\n        <p class=\"text-center align-self-center\"><b>{{_ordenJerarquico.orden_jerarquico_descripcion}}</b>\r\n          <br>\r\n          <i *ngIf=\"i == ordenJerarquico.length - 1\" class=\"fa fa-accion fa-trash\" (click)=\"eliminaOrdenJerarquico(_ordenJerarquico.plan_orden_id)\" ></i></p>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\" *ngFor=\"let _asignatura of _ordenJerarquico.asignaturas\" >\r\n            <div class=\"card text-white  mb-3 card-asignatura\" [ngClass]=\"[_asignatura.tipo_asignatura_id == '6' ? 'bg-tronco' : 'bg-normal']\" role=\"alert\">\r\n              <i class=\"fa fa-accion fa-pencil fa-edita\" (click)=\"open(content,_ordenJerarquico.plan_orden_id,_asignatura.asignatura_id)\"></i>\r\n              <i class=\"fa fa-accion fa-trash fa-elimina\" (click)=\"eliminaAsignatura(_asignatura.orden_asignatura_id)\" ></i>\r\n              <div class=\"card-body\" (click)=\"consultaAsignatura(_asignatura.asignatura_id, _asignatura.orden_asignatura_id)\">\r\n                <p>{{_asignatura.asignatura}}</p>\r\n                <p class=\"mb-0\"><b>Créditos:</b> {{_asignatura.creditos}}</p>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"alert card-asignatura nuevo\" (click)=\"open(content2,_ordenJerarquico.plan_orden_id,null)\"  role=\"alert\">\r\n              <p><i class=\"fa fa-plus\"  ></i> <br> Nueva asignatura</p>\r\n            </div>\r\n          </div>      \r\n          <div class=\"col-md-3\">\r\n            <div class=\"alert  card-asignatura nuevo\" (click)=\"open3(modalTroncoComun,_ordenJerarquico.plan_orden_id)\"  role=\"alert\">\r\n              <p><i class=\"fa fa-sitemap\"  ></i> <br>Agregar asignatura existente</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>         \r\n    </div>\r\n    <div *ngIf=\"ordenJerarquico.length < 10\" class=\"row orden_jerarquico nuevo text-center\" (click)=\"nuevoOrden()\">\r\n      <div class=\"col-md-12\">\r\n        <p><i class=\"fa fa-plus\"></i> <br> Nuevo grado</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Editar asignatura</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-edicion [id_asignatura]=\"idAsignaturaSelected\" [tipo]=\"1\"></app-edicion>\r\n  </div>\r\n</ng-template>\r\n<ng-template #content2 let-c=\"close\" let-d=\"dismiss\" class=\"modal-lg\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Nueva asignatura</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <ngb-tabset>\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><p>Principal</p></ng-template>\r\n          <ng-template ngbTabContent><!---->\r\n            <div class=\"modal-body\">\r\n              <app-form (sucessEvent)=\"getInsertAsignatura($event)\"  [idAsignatura]=\"idAsignaturaSelected\" [tipoForm]=\"1\" [idPlanOrdenSelected]=\"idPlanOrdenSelected\"></app-form>\r\n            </div>\r\n          </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</ng-template>\r\n<ng-template #modalTroncoComun let-c=\"close\" let-d=\"dismiss\" class=\"modal-lg\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Agregar asignatura existente</h4>    \r\n  </div>\r\n  <div class=\"modal-body mx-4 mb-3\">\r\n    <app-consulta-asignatura [nivel]=\"4\" [tipo]=\"'small'\" (sucessEvent)=\"getDatos($event)\"></app-consulta-asignatura>\r\n    <div class=\"row mt-3\">\r\n      \r\n      <div class=\"col-12\">\r\n        <label>5. Selecciona una acción</label>\r\n      </div>\r\n      <div class=\"col-6 text-center\">\r\n        <button class=\"btn\" [ngClass]=\"tipoCopia == 2 ? ' btn-info' : '' \" (click)=\"tipoCopia=2\">\r\n          <i class=\"fa fa-external-link\"></i>\r\n          Tomar como referencia\r\n        </button>\r\n      </div>\r\n      <div class=\"col-6 text-center\">\r\n        \r\n        <button class=\"btn\" [ngClass]=\"tipoCopia == 3 ? 'btn-warning' : '' \"  (click)=\"tipoCopia=3\">\r\n          <i class=\"fa fa-copy\"></i>\r\n          Hacer una copia\r\n        </button>    \r\n      </div>\r\n      <div class=\"col-12 mt-3\">\r\n        <div class=\"alert alert-info\" *ngIf=\"tipoCopia == 2\">\r\n          <p><b>Tomar como referencia</b><br>\r\n            La misma asignatura se ocupa en ambos planes de estudios\r\n          </p>\r\n        </div>\r\n        <div class=\"alert alert-warning\" *ngIf=\"tipoCopia == 3\">\r\n          <p><b>Hacer una copia</b><br>\r\n            Se realiza un clon de la asignatura. \r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"(tipoCopia != 2 && tipoCopia != 3 ) || cargandoAsignatura\" class=\"btn btn-success pull-right mt-3\" (click)=\"guardarAsignaturaExistente()\"><i *ngIf=\"cargandoAsignatura\" class=\"fa fa-spin fa-spinner\"></i> Guardar información</button>\r\n  </div>\r\n</ng-template>\r\n<!--ng-template #content1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Nuevo Grado</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-form-orden-jerarquico  (sucessEvent)=\"getInsertOrden($event)\"  [idOrdenJerarquico]=\"idOrdenJerarquicoSelected\"></app-form-orden-jerarquico>\r\n  </div>\r\n</ng-template-->"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/vista-general/vista-general.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.plan-container {\n  margin: 20px;\n  padding: 20px;\n  border: 2px solid black; }\n\n.orden_jerarquico {\n  padding: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n::ng-deep .xlModal .modal-dialog {\n  max-width: 1000px; }\n\n.card-orden-jerarquico .fa-accion {\n  display: none;\n  position: absolute;\n  font-size: 18px;\n  margin: 5px; }\n\n:hover > .card-orden-jerarquico .fa-accion {\n    display: inline; }\n\n.card-orden-jerarquico .fa-edita {\n  left: 0px; }\n\n.card-orden-jerarquico .fa-elimina {\n  right: 0px; }\n\n.card-asignatura {\n  font-size: 12px;\n  height: 100px;\n  text-align: center;\n  cursor: pointer; }\n\n.card-asignatura .fa-accion {\n    display: none;\n    position: absolute;\n    font-size: 18px;\n    margin: 5px; }\n\n:hover > .card-asignatura .fa-accion {\n      display: inline; }\n\n.card-asignatura .fa-edita {\n    left: 0px; }\n\n.card-asignatura .fa-elimina {\n    right: 0px; }\n\n.orden_jerarquico.nuevo {\n  border: 2px dashed black; }\n\n.card-asignatura.nuevo {\n  border: 2px dashed black; }\n\n.bg-normal {\n  background-color: var(--blue); }\n\n.bg-tronco {\n  background-color: var(--indigo); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy92aXN0YS1nZW5lcmFsL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy92aXN0YS1nZW5lcmFsL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcGxhbi1lc3R1ZGlvcy92aXN0YS1nZW5lcmFsL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxwbGFuLWVzdHVkaW9zXFx2aXN0YS1nZW5lcmFsXFx2aXN0YS1nZW5lcmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ1pEO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUdEO0VBQ0ksV0FBVTtFQUNWLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksZ0JBQWU7RUFHZixvREFBZ0QsRUFDbkQ7O0FBRUQ7RUFDSSwwQkExQmtCO0VBMkJsQixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxlQS9Ca0IsRUFnQ3JCOztBQUVEO0VBQ0ksZUFuQ2tCLEVBb0NyQjs7QUFDRDtFQUNJLDBCQXRDa0I7RUF1Q2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxvQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQ2hERDtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDdEI7O0FBRUE7RUFDRyxrQkFBaUIsRUFDbEI7O0FBRUg7RUFFUSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsWUFBVyxFQUlkOztBQUhHO0lBQ0ksZ0JBQWUsRUFDbEI7O0FBUlQ7RUFXUSxVQUFRLEVBQ1g7O0FBWkw7RUFjUSxXQUFTLEVBQ1o7O0FBR0w7RUFDSSxnQkFBZTtFQUNmLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsZ0JBQWMsRUFtQmpCOztBQXZCRDtJQVNRLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixZQUFXLEVBSWQ7O0FBSEc7TUFDSSxnQkFBZSxFQUNsQjs7QUFmVDtJQWtCUSxVQUFRLEVBQ1g7O0FBbkJMO0lBcUJRLFdBQVMsRUFDWjs7QUFHTDtFQUNJLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNJLHlCQUF3QixFQUMzQjs7QUFFRDtFQUNJLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGdDQUErQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3BsYW4tZXN0dWRpb3MvdmlzdGEtZ2VuZXJhbC92aXN0YS1nZW5lcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiXHJcblxyXG4kc2Nob29sLWNvbG9yOiAjMWU1Nzk5O1xyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSAgIHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7IFxyXG59XHJcblxyXG4uYWxlcnQtZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcblxyXG4uaWNvbi1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcbi5idG4tZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC14bCAubW9kYWwtZGlhbG9nIHsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mb25kbyB7IFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7IFxyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuXHJcblxyXG4ucGxhbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW46MjBweDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2sgO1xyXG59XHJcblxyXG4ub3JkZW5famVyYXJxdWljb3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuIDo6bmctZGVlcCAueGxNb2RhbCAubW9kYWwtZGlhbG9ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuLmNhcmQtb3JkZW4tamVyYXJxdWljb3tcclxuICAgIC5mYS1hY2Npb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIDpob3ZlciA+ICYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7ICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmEtZWRpdGF7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgICAuZmEtZWxpbWluYXtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWFzaWduYXR1cmF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC5mYS1hY2Npb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIDpob3ZlciA+ICYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7ICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmEtZWRpdGF7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgICAuZmEtZWxpbWluYXtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlbl9qZXJhcnF1aWNvLm51ZXZve1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG59XHJcbi5jYXJkLWFzaWduYXR1cmEubnVldm97XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgYmxhY2s7XHJcbn1cclxuXHJcbi5iZy1ub3JtYWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLmJnLXRyb25jb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/plan-estudios/vista-general/vista-general.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VistaGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VistaGeneralComponent", function() { return VistaGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/plan-estudios.service */ "./src/app/administracion/plan-estudios/services/plan-estudios.service.ts");
/* harmony import */ var _carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../carrera/services/carrera.service */ "./src/app/administracion/carrera/services/carrera.service.ts");
/* harmony import */ var _models_datosGenerales_catCarreras__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/datosGenerales/catCarreras */ "./src/app/models/datosGenerales/catCarreras.ts");
/* harmony import */ var _models_datosGenerales_catPlanEstudios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/datosGenerales/catPlanEstudios */ "./src/app/models/datosGenerales/catPlanEstudios.ts");
/* harmony import */ var src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/docente/grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var _services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/orden-jerarquico.service */ "./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var VistaGeneralComponent = /** @class */ (function () {
    function VistaGeneralComponent(route, _usuarioService, _grupoService, _planEstudiosService, _asignaturaService, _carreraService, _ordenJerarquicoService, modalService, _router) {
        this.route = route;
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this._planEstudiosService = _planEstudiosService;
        this._asignaturaService = _asignaturaService;
        this._carreraService = _carreraService;
        this._ordenJerarquicoService = _ordenJerarquicoService;
        this.modalService = modalService;
        this._router = _router;
        this.ordenJerarquico = new Array();
        this.carrera = new _models_datosGenerales_catCarreras__WEBPACK_IMPORTED_MODULE_5__["CatCarreras"]();
        this.planEstudios = new _models_datosGenerales_catPlanEstudios__WEBPACK_IMPORTED_MODULE_6__["CatPlanEstudios"]();
        this.urlImagen = [];
        this.urlImagenPrevia = [];
        this.idAsignaturaTronco = "";
        this.estado = 0;
        this.btnDisabled = true;
        this.tipoCopia = 0;
        this.cargandoAsignatura = false;
        this.title = 'Vista de plan de estudios';
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.urlG = _services_global__WEBPACK_IMPORTED_MODULE_11__["GLOBAL"].urlAssets;
    }
    VistaGeneralComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.idPlanEstudios = this.route.snapshot.paramMap.get('id');
        this.idCarrera = this.route.snapshot.paramMap.get('id2');
        this._carreraService.consulta(this.idCarrera, this.jwt).subscribe(function (response) {
            // console.log(response)    
            if (response && response['status']) {
                _this.carrera = response['carreras'][0];
            }
        }, function (error) {
            console.log(error);
        });
        this._planEstudiosService.consultaEspecifica(this.idPlanEstudios, this.jwt).subscribe(function (response) {
            // console.log(response)    
            if (response && response['status']) {
                _this.planEstudios = response['planEstudio'][0];
            }
        }, function (error) {
            console.log(error);
        });
        this._planEstudiosService.consultaOrdenJerarquico(this.idPlanEstudios, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.ordenJerarquico = response['ordenJerarquico']; //url            
                _this.ordenJerarquico.forEach(function (_asignaturas) {
                    _asignaturas.asignaturas.forEach(function (asignaturas2) {
                        _this.urlImagen.push({ id: asignaturas2.asignatura_id, url: asignaturas2.url_imagen });
                        _this.urlImagenPrevia.push({ id: asignaturas2.asignatura_id, url: asignaturas2.url_imagen_previa });
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    VistaGeneralComponent.prototype.open = function (content, idPlanOrden, idAsignatura) {
        this.idPlanOrdenSelected = idPlanOrden;
        this.tipoCopia = 1;
        this.idAsignaturaSelected = idAsignatura;
        this.modalReference = this.modalService.open(content, { windowClass: "xlModal" });
        /*let resImagen = this.urlImagen.filter(resultado => resultado.id == idAsignatura);
        if(resImagen[0].url  !== null){
          this.imgURL = this.urlG + resImagen[0].url
        }else {
          this.imgURL = "";
        }
        let imgPreviaUrl = this.urlImagenPrevia.filter(res => res.id == idAsignatura);
        if(imgPreviaUrl[0].url  !== null){
          this.imgURLPrevia = this.urlG + imgPreviaUrl[0].url
        }else {
          this.imgURLPrevia = "";
        }*/
    };
    VistaGeneralComponent.prototype.open3 = function (content, idPlanOrden) {
        this.idPlanOrdenSelected = idPlanOrden;
        this.tipoCopia = 0;
        this.modalReference = this.modalService.open(content, { windowClass: "sm" });
        /*this._asignaturaService.consultaAsignaturasTroncoComun(this.jwt).subscribe(response =>{
          console.log(response);
          if(response && response['status']){
            this.asignaturasTronco = response['asignaturas'];
            
          }
        },error =>{
          console.log(error)
        });*/
    };
    // guardarAsignaturaTronco(){
    //   if(this.idAsignaturaTronco != ""){
    //     this._asignaturaService.insertaPlanOrdenAsignatura( this.idPlanOrdenSelected, this.idAsignaturaTronco, this.jwt).subscribe(
    //       response =>{
    //         if(response && response['status']){
    //           alertify.success(response['msg'])
    //           this.refreshPlanEstudio(this.idPlanEstudios)
    //         }else{
    //           alertify.error(response['msg'])
    //         }
    //       },error =>{
    //         console.log(<any>error)
    //       });
    //   }else{
    //     alertify.error('Debes seleccionar una asignatura')
    //   }
    // }
    VistaGeneralComponent.prototype.refreshPlanEstudio = function (idPlanEstudios) {
        var _this = this;
        this._planEstudiosService.consultaOrdenJerarquico(idPlanEstudios, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.ordenJerarquico = response['ordenJerarquico'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    VistaGeneralComponent.prototype.getInsertAsignatura = function ($event) {
        var idAsignatura = $event;
        // if(idAsignatura){//al entrar a  la función damos por entendido que existe 
        // this._asignaturaService.insertaPlanOrdenAsignatura( this.idPlanOrdenSelected, idAsignatura, this.tipoCopia).subscribe(
        //   response =>{
        //     if(response && response['status']){
        //       alertify.success(response['msg'])
        this.refreshPlanEstudio(this.idPlanEstudios);
        //     }else{
        //       alertify.error(response['msg'])
        //     }
        //   },error =>{
        //     console.log(<any>error)
        //   });
        // }else{
        //   this.refreshPlanEstudio(this.idPlanEstudios)
        // }
        this.modalReference.close();
    };
    VistaGeneralComponent.prototype.consultaAsignatura = function (asignatura_id, orden_asignatura_id) {
        console.log(asignatura_id, orden_asignatura_id);
        this._router.navigate(['/admin/carga/asignatura/' + asignatura_id + '/' + orden_asignatura_id + '/modulos/consulta']);
    };
    VistaGeneralComponent.prototype.editaAsignatura = function () {
        console.log('vamo a editar');
    };
    VistaGeneralComponent.prototype.eliminaAsignatura = function (idOrdenAsignatura) {
        alertify.confirm('', '¿Deseas eliminar la asignatura del plan de estudios?', function () {
            var _this = this;
            this._ordenJerarquicoService.eliminaAsignatura(idOrdenAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.refreshPlanEstudio(_this.idPlanEstudios);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    VistaGeneralComponent.prototype.nuevoOrden = function () {
        alertify.confirm('', '¿Deseas agregar un nuevo grado?', function () {
            var _this = this;
            this._ordenJerarquicoService.agregaOrdenJerarquico(this.idPlanEstudios, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.refreshPlanEstudio(_this.idPlanEstudios);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    VistaGeneralComponent.prototype.eliminaOrdenJerarquico = function (idPlanOrden) {
        alertify.confirm('', '¿Deseas eliminar el contenido?', function () {
            var _this = this;
            this._ordenJerarquicoService.elimina(idPlanOrden).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.refreshPlanEstudio(_this.idPlanEstudios);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    VistaGeneralComponent.prototype.showFormAsignatura = function () {
        alert('');
    };
    VistaGeneralComponent.prototype.getDatos = function (evt) {
        if (evt.change)
            this.idAsignaturaExistente = undefined;
        else if (evt.idAsignatura) {
            this.idAsignaturaExistente = evt.idAsignatura;
        }
        // console.log(evt);
    };
    VistaGeneralComponent.prototype.guardarAsignaturaExistente = function () {
        var _this = this;
        if (this.idAsignaturaExistente) {
            this.cargandoAsignatura = true;
            this._asignaturaService.insertaPlanOrdenAsignatura(this.idPlanOrdenSelected, this.idAsignaturaExistente, '', this.tipoCopia).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.refreshPlanEstudio(_this.idPlanEstudios);
                    _this.modalService.dismissAll();
                }
                else {
                    alertify.error(response['msg']);
                }
                _this.cargandoAsignatura = false;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error('Debes seleccionar una asignatura');
        }
    };
    VistaGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vista-general',
            template: __webpack_require__(/*! ./vista-general.component.html */ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.html"),
            styles: [__webpack_require__(/*! ./vista-general.component.scss */ "./src/app/administracion/plan-estudios/vista-general/vista-general.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"],
            _services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_3__["PlanEstudiosService"],
            _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_9__["AsignaturaService"],
            _carrera_services_carrera_service__WEBPACK_IMPORTED_MODULE_4__["CarreraService"],
            _services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_10__["OrdenJerarquicoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VistaGeneralComponent);
    return VistaGeneralComponent;
}());



/***/ }),

/***/ "./src/app/models/datosGenerales/catCarreras.ts":
/*!******************************************************!*\
  !*** ./src/app/models/datosGenerales/catCarreras.ts ***!
  \******************************************************/
/*! exports provided: CatCarreras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatCarreras", function() { return CatCarreras; });
var CatCarreras = /** @class */ (function () {
    function CatCarreras() {
    }
    return CatCarreras;
}());



/***/ }),

/***/ "./src/app/models/datosGenerales/catPlanEstudios.ts":
/*!**********************************************************!*\
  !*** ./src/app/models/datosGenerales/catPlanEstudios.ts ***!
  \**********************************************************/
/*! exports provided: CatPlanEstudios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatPlanEstudios", function() { return CatPlanEstudios; });
var CatPlanEstudios = /** @class */ (function () {
    function CatPlanEstudios() {
    }
    return CatPlanEstudios;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-plan-estudios-plan-estudios-module.js.map