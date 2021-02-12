(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-pregunta-main-form-pregunta-main-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <form class=\"col\"  [formGroup]=\"preguntaArrastrableForm\" (ngSubmit)=\"enviarInformacionPregunta()\">\r\n  \r\n      <div class=\"container-fluid\"  formArrayName=\"items\" *ngFor=\"let item of preguntaArrastrableForm.get('items')['controls']; let i = index;\">\r\n        <div class=\"row\" [formGroupName]=\"i\">\r\n          <div class=\"col-1\">\r\n            <br>\r\n            <h2 class=\"mt-2 p-1\">{{i + 1}}</h2>\r\n          </div>\r\n          <div class=\"col-10\">\r\n              <label class=\"control-label\" for=\"tipo_pregunta\">{{'textoRespuesta' | translate}}:</label>\r\n              <input class=\"form-control\" formControlName=\"reactivo_desc\">\r\n              <span class=\"invalidText\" *ngIf=\"sf.controls[i].controls.reactivo_desc.invalid && sf.controls[i].controls.reactivo_desc.touched\">\r\n                  {{'fmErrText' | translate}}\r\n              </span>\r\n          </div>\r\n          <div class=\"col-1\">\r\n              <br>\r\n              <i *ngIf=\"i > 0\" class=\"fa fa-times fa-2x mt-2 p-1 cambiaCursor\" (click)=\"eliminarRespuesta(i)\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <button (click)=\"agregarRespuesta()\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-plus-square\"></i> {{'agregarRespuesta' | translate}}</button>\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-success pull-right\">{{'guardarTerminar' | translate}}</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.cambiaCursor:hover {\n  cursor: pointer;\n  color: #dc3545; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tYXJyYXN0YWJsZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9wcmVndW50YS9mb3JtLWFycmFzdGFibGUvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXGNhcmdhLWFjdGl2aWRhZGVzXFxhc2lnbmF0dXJhXFxtb2R1bG9cXGFjdGl2aWRhZFxccHJlZ3VudGFcXGZvcm0tYXJyYXN0YWJsZVxcZm9ybS1hcnJhc3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2hCRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9wcmVndW50YS9mb3JtLWFycmFzdGFibGUvZm9ybS1hcnJhc3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG4uY2FtYmlhQ3Vyc29yOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: FormArrastableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrastableComponent", function() { return FormArrastableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/learning/trPreguntaOpcionMultiple */ "./src/app/models/learning/trPreguntaOpcionMultiple.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_arrastable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/arrastable.service */ "./src/app/administracion/carga-actividades/services/arrastable.service.ts");
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





var FormArrastableComponent = /** @class */ (function () {
    function FormArrastableComponent(formBuilder, _usuarioService, _preguntaArrastrableService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._preguntaArrastrableService = _preguntaArrastrableService;
        this.newPregunta = new src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_2__["TrPreguntaOpcionMultiple"];
        this.preguntas = new Array();
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormArrastableComponent.prototype, "f", {
        get: function () { return this.preguntaArrastrableForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrastableComponent.prototype, "sf", {
        get: function () { return this.preguntaArrastrableForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    FormArrastableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        if (this.idPregunta !== undefined) {
            this._preguntaArrastrableService.consultaRespuestas(this.idPregunta, this.jwt, null).subscribe(function (response) {
                var react = response['reactivos'];
                if (response && response['status'] == '1') {
                    react.forEach(function (reactivo) {
                        this.agregarRespuesta(reactivo.reactivo_desc);
                    }.bind(_this));
                    _this.eliminarRespuesta(react.reactivo_desc == '1');
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.preguntaArrastrableForm = this.formBuilder.group({
            items: this.formBuilder.array([this.crearRespuesta()])
        });
    };
    FormArrastableComponent.prototype.agregarRespuesta = function (reactivo_desc) {
        if (reactivo_desc === void 0) { reactivo_desc = ''; }
        this.items = this.preguntaArrastrableForm.get('items');
        this.items.push(this.crearRespuesta(reactivo_desc));
    };
    FormArrastableComponent.prototype.crearRespuesta = function (reactivo_desc) {
        if (reactivo_desc === void 0) { reactivo_desc = ''; }
        return this.formBuilder.group({
            reactivo_desc: [reactivo_desc, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    FormArrastableComponent.prototype.eliminarRespuesta = function (index) {
        this.items.removeAt(index);
    };
    FormArrastableComponent.prototype.enviarInformacionPregunta = function () {
        var _this = this;
        // console.log(this.preguntaMultipleForm.get('reactivo_desc'));
        if (this.preguntaArrastrableForm.invalid) {
            Object.keys(this.preguntaArrastrableForm.controls).forEach(function (controlKey) {
                _this.preguntaArrastrableForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._preguntaArrastrableService.modificaDragDrop(this.preguntaArrastrableForm, this.idPregunta, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.successEvent.emit({ status: response['status'] });
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormArrastableComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormArrastableComponent.prototype, "successEvent", void 0);
    FormArrastableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-arrastable',
            template: __webpack_require__(/*! ./form-arrastable.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.html"),
            styles: [__webpack_require__(/*! ./form-arrastable.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            src_app_administracion_carga_actividades_services_arrastable_service__WEBPACK_IMPORTED_MODULE_3__["ArrastableService"]])
    ], FormArrastableComponent);
    return FormArrastableComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <form  [formGroup]=\"preguntaForm\" (ngSubmit)=\"enviarInformacionPregunta()\">    \r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">     \r\n              <label class=\"control-label\" for=\"tipo_pregunta\">{{'tipoPregunta' | translate}}:</label>\r\n              <select  formControlName=\"tipoPregunta\"  class=\"form-control\"  >\r\n                <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n                <option  [value]=\"_tipoPregunta.tipo_pregunta_id\" *ngFor=\"let _tipoPregunta of tipoPregunta\">{{_tipoPregunta.tipo_pregunta_nombre}}</option>\r\n              </select>\r\n              <span class=\"invalidText\" *ngIf=\"f.tipoPregunta.invalid && f.tipoPregunta.touched\">\r\n                      {{'fmErrSelect' | translate}}\r\n              </span>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"row\">\r\n          <div class=\"col\" *ngIf=\"f.dificultad\">              \r\n            <div class=\"form-group \">         \r\n                <label class=\"control-label\" for=\"dificultad\">{{'dificultad' | translate}}:</label>\r\n                <select  formControlName=\"dificultad\"  class=\"form-control\"  >\r\n                <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n                <option  [value]=\"_dificultad.dificultad_id\" *ngFor=\"let _dificultad of dificultad\">{{_dificultad.dificultad_nombre}}</option>\r\n                </select>\r\n                <span class=\"invalidText\" *ngIf=\"f.dificultad.invalid && f.dificultad.touched\">\r\n                        {{'fmErrSelect' | translate}}\r\n                </span>\r\n            </div>     \r\n            <div class=\"form-group\">                               \r\n                <input class=\"form-control\" formControlName=\"orden\" placeholder=\"{{'orden' | translate}}\" type=\"number\" hidden>\r\n            </div>        \r\n          </div>\r\n        <div class=\"col\" *ngIf=\"f.ponderacion\" [hidden]=\"actividad.tipo_calificacion != 1\">\r\n          <div class=\"form-group\">                               \r\n            <label class=\"control-label\" for=\"ponderacion\">{{'ponderacion' | translate}} (max: {{ponderacionMax}}%):</label>\r\n            <input class=\"form-control\" formControlName=\"ponderacion\" placeholder=\"{{'ponderacion' | translate}}\" type=\"number\" min=\"0\" max=\"{{ponderacionMax}}\" >\r\n            <span class=\"invalidText\" *ngIf=\"f.ponderacion.invalid && f.ponderacion.touched\">\r\n                (El máximo de ponderación no debe exceder el: {{ponderacionMax}}%) \r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"f.aleatorio\">\r\n        <div class=\"form-group\">        \r\n                  \r\n            <label class=\"control-label\" for=\"aleatorio\">{{'aleatorio' | translate}}:</label>\r\n            <br>\r\n            <label class=\"radio-inline\">\r\n              <input checked type=\"radio\"  formControlName=\"aleatorio\" value=\"1\"/>{{'si' | translate}}\r\n            </label>\r\n            <label class=\"radio-inline\">\r\n              <input  type=\"radio\"  formControlName=\"aleatorio\" value=\"0\"/>{{'no' | translate}}\r\n            </label>\r\n            <br>\r\n            <span class=\"invalidText\" *ngIf=\"f.aleatorio.invalid && f.aleatorio.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"f.retroalimentacion\">\r\n          <div class=\"col\">    \r\n              <label class=\"control-label\" for=\"aleatorio\">{{'retroalimentacion' | translate}}:</label>  \r\n              <textarea class=\"form-control\" formControlName=\"retroalimentacion\" ></textarea>\r\n          </div>\r\n      </div>\r\n\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n          <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right mt-3\">\r\n            <span *ngIf=\"datosPregunta.tipo_pregunta_id\">{{'fmEdit' | translate}}</span>\r\n            <span *ngIf=\"!datosPregunta.tipo_pregunta_id\">{{'fmSave' | translate}}</span>\r\n          </button>\r\n      </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tZGF0b3MtcHJlZ3VudGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tZGF0b3MtcHJlZ3VudGEvZm9ybS1kYXRvcy1wcmVndW50YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: FormDatosPreguntaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDatosPreguntaComponent", function() { return FormDatosPreguntaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/pregunta.service */ "./src/app/administracion/carga-actividades/services/pregunta.service.ts");
/* harmony import */ var src_app_models_learning_trDatosPreguntas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/learning/trDatosPreguntas */ "./src/app/models/learning/trDatosPreguntas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormDatosPreguntaComponent = /** @class */ (function () {
    function FormDatosPreguntaComponent(_usuarioService, formBuilder, _preguntaService) {
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this._preguntaService = _preguntaService;
        this.ponderacionTotal = 100;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormDatosPreguntaComponent.prototype, "f", {
        get: function () { return this.preguntaForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormDatosPreguntaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tipoPregunta, orden; //es necesario declararla con un valor de lo contrario no manda información
        this.ponderacionMax = this.ponderacionTotal;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (this.datosPregunta) { //si existe un valor de actividad tomo el id_actividad para su posterior uso      
            this.idDatosPregunta = this.datosPregunta.datos_pregunta_id;
            this.ponderacion = parseInt(this.datosPregunta.ponderacion);
            tipoPregunta = this.datosPregunta.tipo_pregunta_id;
            this.disableTipoPregunta = true;
        }
        else { //si no sólo declaro actividad como un elemento vacio, es necesario para el funcionamiento del formulario
            this.datosPregunta = new src_app_models_learning_trDatosPreguntas__WEBPACK_IMPORTED_MODULE_4__["TrDatosPreguntas"]();
            tipoPregunta = "";
            this.ponderacion = 0;
            this.disableTipoPregunta = false;
        }
        this.jwt = this._usuarioService.getJWT();
        this.preguntaForm = this.formBuilder.group({
            tipoPregunta: [{ value: tipoPregunta, disabled: this.disableTipoPregunta }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            orden: [orden],
        });
        this._preguntaService.consultaTipoPregunta(this.jwt, '2').subscribe(function (response) {
            if (response && response['status']) {
                _this.tipoPregunta = response['preguntas'];
                if (_this.datosPregunta.tipo_pregunta_id) {
                    _this.generateItems(_this.datosPregunta.tipo_pregunta_id);
                }
                else {
                    _this.valueChanges();
                }
            }
        }, function (error) {
            console.log(error);
        });
        this._preguntaService.consultaDificultad(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.dificultad = response['dificultad'];
            }
        }, function (error) {
            console.log(error);
        });
        //this._actividadService.consultaPreguntas().
        this._preguntaService.sumaPonderacion(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.ponderacionMax = _this.ponderacionTotal - parseInt(response['ponderacionTotal']);
                if (_this.ponderacionMax < 0)
                    _this.ponderacionMax = 0;
                _this.ponderacionMax = (_this.ponderacionMax) + (_this.ponderacion);
            }
        }, function (error) {
            console.log(error);
        });
        this._preguntaService.preguntaEliminada.subscribe(function (response) {
            var ponderacion = parseInt(response['ponderacion']);
            _this.ponderacionMax = _this.ponderacionMax + ponderacion;
        });
    };
    FormDatosPreguntaComponent.prototype.valueChanges = function () {
        var _this = this;
        this.preguntaForm.get('tipoPregunta').valueChanges.subscribe(function (value) {
            _this.deleteControls();
            _this.generateItems(value);
        });
    };
    FormDatosPreguntaComponent.prototype.deleteControls = function () {
        var _this = this;
        var controls = ['dificultad', 'ponderacion', 'aleatorio', 'retroalimentacion'];
        controls.forEach(function (control) {
            if (_this.preguntaForm.get(control)) {
                _this.preguntaForm.removeControl(control);
            }
        });
    };
    FormDatosPreguntaComponent.prototype.generateItems = function (value) {
        var _this = this;
        var pregunta = this.tipoPregunta.find(function (r) { return r.tipo_pregunta_id == value; });
        var dificultad = 1;
        var ponderacion = "0";
        var aleatorio = 1;
        var retroalimentacion = "";
        var validador = 'required';
        if (this.datosPregunta.tipo_pregunta_id) {
            dificultad = this.datosPregunta.dificultad_id;
            ponderacion = this.datosPregunta.ponderacion;
            aleatorio = this.datosPregunta.shuffle;
            retroalimentacion = this.datosPregunta.retroalimentacion;
        }
        if (this.actividad.tipo_calificacion != "1") {
            validador = 'null';
        }
        this.preguntaForm.addControl('ponderacion', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: ponderacion, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
            function (control) { return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(_this.ponderacionMax)(control); }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"][validador]])));
        if (pregunta && pregunta.reactivos == '1') {
            this.preguntaForm.addControl('dificultad', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](dificultad));
            this.preguntaForm.addControl('aleatorio', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](aleatorio, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.preguntaForm.addControl('retroalimentacion', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](retroalimentacion));
        }
    };
    FormDatosPreguntaComponent.prototype.enviarInformacionPregunta = function () {
        var _this = this;
        if (this.preguntaForm.invalid) {
            Object.keys(this.preguntaForm.controls).forEach(function (controlKey) {
                _this.preguntaForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._preguntaService.modificaPregunta(this.preguntaForm, this.idActividad, this.idDatosPregunta, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                var idTipoPregunta_1 = _this.preguntaForm.get('tipoPregunta').value;
                var tipoPregunta = _this.tipoPregunta.find(function (p) { return p.tipo_pregunta_id == idTipoPregunta_1; });
                _this.sucessEvent.emit({
                    'status': response['status'],
                    "idDatosPregunta": response['idDatosPregunta'],
                    "idTipoPregunta": tipoPregunta.tipo_pregunta_id,
                    "reactivos": tipoPregunta.reactivos,
                    "datos": _this.preguntaForm.value
                });
                //si se insertó correctamente se le agrega la asignatura a la asignatura
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_models_learning_trDatosPreguntas__WEBPACK_IMPORTED_MODULE_4__["TrDatosPreguntas"])
    ], FormDatosPreguntaComponent.prototype, "datosPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormDatosPreguntaComponent.prototype, "indexPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormDatosPreguntaComponent.prototype, "idModulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormDatosPreguntaComponent.prototype, "idActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormDatosPreguntaComponent.prototype, "actividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormDatosPreguntaComponent.prototype, "sucessEvent", void 0);
    FormDatosPreguntaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-datos-pregunta',
            template: __webpack_require__(/*! ./form-datos-pregunta.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.html"),
            styles: [__webpack_require__(/*! ./form-datos-pregunta.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_3__["PreguntaService"]])
    ], FormDatosPreguntaComponent);
    return FormDatosPreguntaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form-multiple-texto *ngIf=\"tipo == '1' && bandera\" [numRespuestas]=\"numRespuestas\" [reactivos]=\"reactivos\" [idPregunta]=\"idPregunta\" [idActividad]=\"idActividad\" (successEvent)=\"enviaDatos($event)\"></form-multiple-texto>\r\n<form-multiple-imagen *ngIf=\"tipo == '2' && bandera\" [reactivos]=\"reactivos\"  [idPregunta]=\"idPregunta\" (successEvent)=\"enviaDatos($event)\"></form-multiple-imagen>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tbXVsdGlwbGUvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tbXVsdGlwbGUvZm9ybS1tdWx0aXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: FormMultipleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMultipleComponent", function() { return FormMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/multiple.service */ "./src/app/administracion/carga-actividades/services/multiple.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormMultipleComponent = /** @class */ (function () {
    function FormMultipleComponent(_multipleService, _usuarioService) {
        this._multipleService = _multipleService;
        this._usuarioService = _usuarioService;
        this.bandera = false;
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormMultipleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._multipleService.consultaMultiple(this.idPregunta, this.jwt, null).subscribe(function (response) {
            if (response && response['status']) {
                _this.reactivos = response['reactivos'];
            }
            _this.tipo = response['tipo'];
            _this._multipleService.consultaMateria(_this.jwt, _this.idPregunta).subscribe(function (response) {
                if (response && response['status']) {
                    _this.numRespuestas = response['numero_respuestas'];
                }
                _this.bandera = true;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    FormMultipleComponent.prototype.enviaDatos = function (evt) {
        this.successEvent.emit(evt);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormMultipleComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormMultipleComponent.prototype, "idActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormMultipleComponent.prototype, "successEvent", void 0);
    FormMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-multiple',
            template: __webpack_require__(/*! ./form-multiple.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.html"),
            styles: [__webpack_require__(/*! ./form-multiple.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_2__["MultipleService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], FormMultipleComponent);
    return FormMultipleComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"col\"  [formGroup]=\"preguntaMultipleForm\" > \r\n    <div class=\"container-fluid\"  formArrayName=\"items\" *ngFor=\"let item of preguntaMultipleForm.get('items')['controls']; let i = index;\">\r\n      <form class=\"row\" [formGroupName]=\"i\" (ngSubmit)=\"enviarInformacionPregunta(i)\">\r\n        <div class=\"col-md-1\">\r\n            <input class=\"form-control\" formControlName=\"idReactivo\" type=\"hidden\"  >\r\n            <label class=\"control-label\" for=\"tipo_pregunta\">{{'correcto' | translate}}</label>\r\n          <input class=\"form-control\" formControlName=\"ponderacion\" type=\"checkbox\"  >\r\n        </div>\r\n        <div class=\"col-md-5\" >\r\n            <label class=\"control-label\" for=\"tipo_pregunta\">{{'archivoImagen' | translate}}:</label>\r\n            <div class=\"form-group text-center\">\r\n              <app-file-upload formControlName=\"imagen\"></app-file-upload>\r\n              <div class=\"invalid-feedback\" style=\"display: block\">\r\n                <ng-container *ngIf=\"hasError(i , 'imagen', 'required')\">{{'fmErrfileRequired' | translate}}</ng-container>\r\n                <ng-container *ngIf=\"hasError(i , 'imagen', 'requiredFileType')\">{{'fmErrfileImage' | translate}}</ng-container>\r\n              </div>\r\n            </div>\r\n            <app-archivo *ngIf=\"sf.controls[i].controls.url_imagen.value\" [urlBase]=\"sf.controls[i].controls.url_imagen.value\"></app-archivo>          \r\n            <input type=\"text\" formControlName=\"url_imagen\"  type=\"hidden\">\r\n        </div>  \r\n        <div class=\"col-md-5\">\r\n            <label class=\"control-label\" for=\"tipo_pregunta\">{{'retroalimentacion' | translate}}:</label>\r\n            <textarea class=\"form-control\" formControlName=\"retroalimentacion\"></textarea>\r\n        </div>\r\n        <div class=\"col-md-1 text-center\">\r\n          <br>\r\n            <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"sf.controls[i].invalid\" type=\"submit\" class=\"btn btn-success mt-2\"><i class=\"fa fa-save \" ></i> </button>\r\n            <button [hidden]=\"tipoAdmin == 0\" type=\"button\" class=\"btn btn-danger mt-2\" (click)=\"confirmaRespuesta(i)\"><i class=\"fa fa-trash \"  ></i> </button>\r\n        </div>\r\n\r\n\r\n        \r\n      </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n          <button [hidden]=\"tipoAdmin == 0\" (click)=\"agregarRespuesta()\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-plus\"></i>{{'agregarRespuesta' | translate}}</button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button [hidden]=\"tipoAdmin == 0\" (click)=\"finalizar()\" type=\"button\" \r\n          class=\"btn btn-success pull-right\">{{'Finalizar' | translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tbXVsdGlwbGUvaW1hZ2VuL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9wcmVndW50YS9mb3JtLW11bHRpcGxlL2ltYWdlbi9pbWFnZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenComponent", function() { return ImagenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/learning/trPreguntaOpcionMultiple */ "./src/app/models/learning/trPreguntaOpcionMultiple.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/multiple.service */ "./src/app/administracion/carga-actividades/services/multiple.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImagenComponent = /** @class */ (function () {
    function ImagenComponent(formBuilder, _multipleService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._multipleService = _multipleService;
        this._usuarioService = _usuarioService;
        this.newPregunta = new src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_1__["TrPreguntaOpcionMultiple"];
        this.preguntas = new Array();
        this.checkMultiple = false;
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ImagenComponent.prototype, "f", {
        get: function () { return this.preguntaMultipleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagenComponent.prototype, "sf", {
        get: function () { return this.preguntaMultipleForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    ImagenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.jwt = this._usuarioService.getJWT();
        this.preguntaMultipleForm = this.formBuilder.group({
            items: this.formBuilder.array([this.crearRespuesta()])
        });
        this._multipleService.consultaMultiple(this.idPregunta, this.jwt, null).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.reactivos = response['reactivos'];
                if (response['url_imagen'])
                    _this.urlImagen = response['url_imagen'];
                _this.reactivos.forEach(function (reactivo) {
                    var ponderacion = reactivo.ponderacion == '100' ? true : false;
                    var urlContenido = reactivo.contenido_reactivo != null ? reactivo.contenido_reactivo : null;
                    if (reactivo.contenido_reactivo != null) {
                        this.checkMultiple = true;
                    }
                    console.log(this.checkMultiple);
                    this.agregarRespuesta(reactivo.reactivo_id, ponderacion, reactivo.retroalimentacion, urlContenido);
                }.bind(_this));
                _this.eliminarRespuesta(0);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ImagenComponent.prototype.agregarRespuesta = function (idReactivo, ponderacion, retroalimentacion, url_imagen) {
        if (idReactivo === void 0) { idReactivo = 0; }
        if (ponderacion === void 0) { ponderacion = ''; }
        if (retroalimentacion === void 0) { retroalimentacion = ''; }
        if (url_imagen === void 0) { url_imagen = ''; }
        this.items = this.preguntaMultipleForm.get('items');
        this.items.push(this.crearRespuesta(idReactivo, ponderacion, retroalimentacion, url_imagen));
    };
    ImagenComponent.prototype.crearRespuesta = function (idReactivo, ponderacion, retroalimentacion, url_imagen) {
        if (idReactivo === void 0) { idReactivo = 0; }
        if (ponderacion === void 0) { ponderacion = ''; }
        if (retroalimentacion === void 0) { retroalimentacion = ''; }
        if (url_imagen === void 0) { url_imagen = ''; }
        return this.formBuilder.group({
            idReactivo: [idReactivo],
            ponderacion: [ponderacion],
            retroalimentacion: [retroalimentacion],
            imagen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            url_imagen: [url_imagen]
        });
    };
    ImagenComponent.prototype.eliminarRespuesta = function (index) {
        this.items.removeAt(index);
    };
    ImagenComponent.prototype.confirmaRespuesta = function (id) {
        alertify.confirm('Desea eliminar esta pregunta?', function () {
            var _this = this;
            var idReactivo = this.preguntaMultipleForm.get('items')['controls'][id].get('idReactivo').value;
            this._multipleService.elimina(idReactivo, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.eliminarRespuesta(id);
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
    ImagenComponent.prototype.hasErrorP = function (error) {
        var control = this.preguntaMultipleForm.get('imagen');
        return control.dirty && control.hasError(error);
    };
    ImagenComponent.prototype.hasError = function (index, field, error) {
        var control = this.preguntaMultipleForm.get('items')['controls'][index].get(field);
        return control.dirty && control.hasError(error);
    };
    ImagenComponent.prototype.enviarInformacionPregunta = function (index) {
        var _this = this;
        var form = this.preguntaMultipleForm.get('items')['controls'][index];
        console.log(form);
        this._multipleService.modificaMultipleImagen(form, this.idPregunta, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                alertify.success(response['msg']);
                if (response['idReactivo']) {
                    _this.preguntaMultipleForm.get('items')['controls'][index].get('idReactivo').setValue(response['idReactivo']);
                }
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ImagenComponent.prototype.finalizar = function () {
        this.successEvent.emit({ status: 1 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagenComponent.prototype, "reactivos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImagenComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImagenComponent.prototype, "successEvent", void 0);
    ImagenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-multiple-imagen',
            template: __webpack_require__(/*! ./imagen.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.html"),
            styles: [__webpack_require__(/*! ./imagen.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__["MultipleService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], ImagenComponent);
    return ImagenComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <form class=\"col\" [formGroup]=\"preguntaMultipleForm\" (ngSubmit)=\"enviarInformacionPregunta()\" >\r\n\r\n    <div *ngIf=\"numRespuestas\" class=\"alert alert-warning text-center mt-2 p-3\">\r\n      Esta pregunta ya ha sido contestada por {{numRespuestas}} alumnos, sólo es posible hacer edición\r\n      <br>\r\n      <button  type=\"button\" (click)=\"reasignarCalificacion()\" class=\"btn btn-warning\">Recalcular calificaciones</button>\r\n    </div>\r\n     \r\n    <div class=\"container-fluid mb-3\"  formArrayName=\"items\" *ngFor=\"let item of preguntaMultipleForm.get('items')['controls']; let i = index;\">\r\n      <form class=\"row\" [formGroupName]=\"i\" >\r\n        <div class=\"col-2 pt-7\">\r\n          <br>\r\n            <input class=\"form-control\" formControlName=\"idReactivo\" type=\"hidden\"  >\r\n            <b>{{'Respuesta correcta' | translate}}</b>\r\n            <br>\r\n            <input class=\"form-control\" formControlName=\"ponderacion\" type=\"checkbox\" style=\"display: block;\" >\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <div class=\"row\">\r\n              <div class=\"col-12\" [hidden]=\" checkMultiple\">\r\n                <label class=\"control-label\" for=\"tipo_pregunta\">{{'textoPregunta' | translate}}:</label>\r\n                <!--textarea class=\"form-control\" formControlName=\"respuesta\"></textarea-->\r\n                <ckeditor [config]=\"{\r\n                  toolbar: reactiveEditor,\r\n                  extraPlugins: ['uploadimage','justify'],\r\n                  filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n                  }\"\r\n                  (ready)=\"comienza($event)\" (blur)=\"getData($event,i)\"\r\n                   formControlName=\"respuesta\" name=\"ckeditor\"></ckeditor>\r\n                <span class=\"invalidText\" *ngIf=\"sf.controls[i].controls.respuesta.invalid && sf.controls[i].controls.respuesta.touched\">\r\n                    {{'fmErrText' | translate}}\r\n                </span>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <label><input formControlName=\"checkretro\" type=\"checkbox\"> ¿Agregar retroalimentación?</label>\r\n                <textarea  [hidden]=\"!sf.controls[i].controls.checkretro.value \" class=\"form-control\" formControlName=\"retroalimentacion\" placeholder=\"Agrega tu retroalimentación\"></textarea>\r\n            </div> \r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-1 text-center mt-2 pt-1\">\r\n            <br>\r\n            <button [hidden]=\"tipoAdmin == 0\" *ngIf=\"!numRespuestas && i > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmaEliminaRespuesta(i)\"><i class=\"fa fa-trash\"></i> </button>\r\n            <button [hidden]=\"tipoAdmin == 0\" *ngIf=\"numRespuestas\" type=\"button\" class=\"btn btn-info\" (click)=\"editaReactivo(i)\"><i class=\"fa fa-pencil\"></i> </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div *ngIf=\"noSelectCheckbox\" class=\"alert alert-danger p-3 mt-3\">\r\n      Debes seleccionar al menos un reactivo que sea correcto\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n          <button [hidden]=\"tipoAdmin == 0\" (click)=\"agregarRespuesta()\" type=\"button\" class=\"btn btn-link mt-3\"><i class=\"fa fa-plus\"></i>{{'agregarRespuesta' | translate}}</button>\r\n      </div>\r\n      <div class=\"col\">\r\n          <button [hidden]=\"tipoAdmin == 0\" *ngIf=\"!numRespuestas\" type=\"submit\" \r\n            class=\"btn btn-success pull-right mt-3\" [disabled]=\"preguntaMultipleForm.invalid\">{{'guardarTerminar' | translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tbXVsdGlwbGUvdGV4dG8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tbXVsdGlwbGUvdGV4dG8vdGV4dG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: MultipleTextoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTextoComponent", function() { return MultipleTextoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/learning/trPreguntaOpcionMultiple */ "./src/app/models/learning/trPreguntaOpcionMultiple.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/multiple.service */ "./src/app/administracion/carga-actividades/services/multiple.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_reactiveEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/reactiveEditor */ "./src/app/models/reactiveEditor.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { requiredFileType } from 'src/app/components/file-upload/file.upload.validators';


var MultipleTextoComponent = /** @class */ (function () {
    function MultipleTextoComponent(formBuilder, _multipleService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._multipleService = _multipleService;
        this._usuarioService = _usuarioService;
        this.newPregunta = new src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_1__["TrPreguntaOpcionMultiple"];
        this.preguntas = new Array();
        this.noSelectCheckbox = false;
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reactiveEditor = src_app_models_reactiveEditor__WEBPACK_IMPORTED_MODULE_5__["reactiveEditor"];
    }
    Object.defineProperty(MultipleTextoComponent.prototype, "f", {
        get: function () { return this.preguntaMultipleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextoComponent.prototype, "sf", {
        get: function () { return this.preguntaMultipleForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    MultipleTextoComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.preguntaMultipleForm = this.formBuilder.group({
            items: this.formBuilder.array([this.crearRespuesta()])
        });
        if (this.reactivos) {
            this.reactivos.forEach(function (reactivo) {
                var ponderacion = reactivo.ponderacion == '100' ? true : false;
                this.agregarRespuesta(reactivo.reactivo_id, ponderacion, reactivo.reactivo, reactivo.retroalimentacion);
            }.bind(this));
            this.eliminarRespuesta(0);
        }
        console.log(this.preguntaMultipleForm);
    };
    MultipleTextoComponent.prototype.agregarRespuesta = function (idReactivo, ponderacion, respuesta, retroalimentacion) {
        if (idReactivo === void 0) { idReactivo = 0; }
        if (ponderacion === void 0) { ponderacion = ''; }
        if (respuesta === void 0) { respuesta = ''; }
        if (retroalimentacion === void 0) { retroalimentacion = ''; }
        this.items = this.preguntaMultipleForm.get('items');
        this.items.push(this.crearRespuesta(idReactivo, ponderacion, respuesta, retroalimentacion));
    };
    MultipleTextoComponent.prototype.crearRespuesta = function (idReactivo, ponderacion, respuesta, retroalimentacion) {
        if (idReactivo === void 0) { idReactivo = 0; }
        if (ponderacion === void 0) { ponderacion = ''; }
        if (respuesta === void 0) { respuesta = ''; }
        if (retroalimentacion === void 0) { retroalimentacion = ''; }
        var checkRetro;
        if (retroalimentacion == '') {
            checkRetro = 0;
        }
        else {
            checkRetro = 1;
        }
        return this.formBuilder.group({
            idReactivo: [idReactivo],
            ponderacion: [ponderacion],
            respuesta: [respuesta, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            checkretro: [checkRetro],
            retroalimentacion: [retroalimentacion],
        });
    };
    MultipleTextoComponent.prototype.eliminarRespuesta = function (index) {
        this.items.removeAt(index);
    };
    MultipleTextoComponent.prototype.confirmaEliminaRespuesta = function (id) {
        alertify.confirm('Desea eliminar esta pregunta?', function () {
            this.eliminarRespuesta(id);
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    MultipleTextoComponent.prototype.hasErrorP = function (error) {
        var control = this.preguntaMultipleForm.get('imagen');
        return control.dirty && control.hasError(error);
    };
    MultipleTextoComponent.prototype.hasError = function (index, field, error) {
        var control = this.preguntaMultipleForm.get('items')['controls'][index].get(field);
        return control.dirty && control.hasError(error);
    };
    MultipleTextoComponent.prototype.enviarInformacionPregunta = function () {
        var _this = this;
        var form = this.preguntaMultipleForm;
        var checkbox = 0;
        form.value.items.forEach(function (item) {
            if (item.ponderacion) {
                checkbox++;
            }
        });
        if (checkbox > 0) {
            this._multipleService.modificaMultiple(form, this.idPregunta, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                    _this.noSelectCheckbox = false;
                    _this.successEvent.emit({ status: response['status'] });
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.noSelectCheckbox = true;
        }
    };
    MultipleTextoComponent.prototype.editaReactivo = function (index) {
        alertify.confirm('Editar reactivo', '¿Deseas editar la información de este reactivo?', function () {
            var reactivo = this.preguntaMultipleForm.value.items[index];
            this._multipleService.editaReactivoTexto(this.jwt, reactivo).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    MultipleTextoComponent.prototype.reasignarCalificacion = function () {
        alertify.confirm('Recalcular calificaciones', 'Estás a punto de recalcular las calificaciones de esta actividad con las ponderaciones actuales ¿Deseas continuar?', function () {
            this._multipleService.reasignaCalificacionPreguntaOM(this.idPregunta, this.idActividad).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                }
                else {
                    alertify.error(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    MultipleTextoComponent.prototype.getData = function (event, index) {
        this.preguntaMultipleForm.get('items')['controls'][index].controls['respuesta'].setValue(event.editor.getData());
    };
    MultipleTextoComponent.prototype.comienza = function (event) {
        var url = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        var urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        var jwt = this._usuarioService.getJWT();
        var id = "" + this.idPregunta + "";
        event.editor.on('fileUploadRequest', function (evt) {
            var fileLoader = evt.data.fileLoader, formData = new FormData(), xhr = fileLoader.xhr;
            xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
            //xhr.setRequestHeader('Content-type', "multipart/form-data");
            formData.append('jwt', jwt);
            formData.append('nom_carpeta', 'reactivos_pregunta');
            formData.append('id', id);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            fileLoader.xhr.send(formData);
            evt.stop();
            // Prevented the default behavior.
        }, null, null, 4);
        event.editor.on('fileUploadResponse', function (evt) {
            // Prevent the default response handler.
            evt.stop();
            // Get XHR and response.
            var data = evt.data, xhr = data.fileLoader.xhr, response = xhr.responseText.split('|');
            console.log(response);
            if (response[1]) {
                // An error occurred during upload.          
                data.message = response[1];
                evt.cancel();
            }
            else {
                var msg = JSON.parse(response[0]);
                console.log(response[0]);
                console.log(msg);
                data.url = urlAssets + msg.url;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleTextoComponent.prototype, "reactivos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleTextoComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleTextoComponent.prototype, "numRespuestas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MultipleTextoComponent.prototype, "idActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MultipleTextoComponent.prototype, "successEvent", void 0);
    MultipleTextoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-multiple-texto',
            template: __webpack_require__(/*! ./texto.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.html"),
            styles: [__webpack_require__(/*! ./texto.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__["MultipleService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], MultipleTextoComponent);
    return MultipleTextoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main-routing.module.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main-routing.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: FormPreguntaMainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreguntaMainRoutingModule", function() { return FormPreguntaMainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_pregunta_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-pregunta-main.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _form_pregunta_main_component__WEBPACK_IMPORTED_MODULE_2__["FormPreguntaMainComponent"],
    }];
var FormPreguntaMainRoutingModule = /** @class */ (function () {
    function FormPreguntaMainRoutingModule() {
    }
    FormPreguntaMainRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormPreguntaMainRoutingModule);
    return FormPreguntaMainRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\"  >\r\n  <div class=\"list-group-item\">\r\n    <h4>{{title}} </h4>\r\n    <ngb-tabset #t=\"ngbTabset\">\r\n      <ngb-tab  title=\"{{'DatosPrincipal' | translate }}\" >\r\n          <ng-template ngbTabContent>\r\n              <form-datos-pregunta  *ngIf=\"tokenDatosPregunta\"\r\n              [actividad]=\"actividad\"\r\n              [idActividad]=\"idActividad\"\r\n              [datosPregunta]=\"datosPregunta\"\r\n              (sucessEvent)=\"siguientePregunta($event)\">\r\n            </form-datos-pregunta>\r\n          </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab  id=\"tab-pregunta2\" title=\"{{'DatosContenido' | translate }}\" [disabled]=\"!idDatosPregunta\" >\r\n        <ng-template ngbTabContent>\r\n            <form-pregunta *ngIf=\"tokenDatosPregunta\"\r\n            [datosPregunta]=\"datosPregunta\" \r\n            (sucessEvent)=\"finalizarGuardado($event)\" ></form-pregunta>\r\n        </ng-template>\r\n      </ngb-tab>    \r\n      \r\n      <ngb-tab  id=\"tab-pregunta3\" title=\"{{'DatosEspecifico' | translate }}\" [disabled]=\"!idDatosPregunta || !idPregunta\"  >\r\n          <ng-template ngbTabContent>\r\n              <div *ngIf=\"datosPregunta && datosPregunta.reactivos == '0'\" class=\"row\">\r\n                <div class=\"col\">\r\n                  <br>\r\n                  <h4 class=\"text-center\">Este tipo de pregunta no tiene reactivos.</h4>\r\n                  <br>\r\n                </div>\r\n              </div>\r\n              <form-multiple  [idActividad]=\"idActividad\"  [idPregunta]=\"idPregunta\" *ngIf=\"idTipoPregunta == 2\" (successEvent)=\"reactivosGuardados($event)\"></form-multiple>\r\n              <form-relacion [idPregunta]=\"idPregunta\" *ngIf=\"idTipoPregunta == 3\" (successEvent)=\"reactivosGuardados($event)\"></form-relacion>\r\n              <form-zona-imagenes [idPregunta]=\"idPregunta\" *ngIf=\"idTipoPregunta == 4\" (successEvent)=\"reactivosGuardados($event)\"></form-zona-imagenes>\r\n              <form-arrastable [idPregunta]=\"idPregunta\" *ngIf=\"idTipoPregunta == 5\" (successEvent)=\"reactivosGuardados($event)\"></form-arrastable>\r\n\r\n          </ng-template>\r\n      </ngb-tab>\r\n\r\n    </ngb-tabset>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9wcmVndW50YS9mb3JtLXByZWd1bnRhLW1haW4vZm9ybS1wcmVndW50YS1tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: FormPreguntaMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreguntaMainComponent", function() { return FormPreguntaMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/pregunta.service */ "./src/app/administracion/carga-actividades/services/pregunta.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/actividad.service */ "./src/app/administracion/carga-actividades/services/actividad.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormPreguntaMainComponent = /** @class */ (function () {
    function FormPreguntaMainComponent(_usuarioService, _preguntaService, _route, router, _actividadService) {
        this._usuarioService = _usuarioService;
        this._preguntaService = _preguntaService;
        this._route = _route;
        this.router = router;
        this._actividadService = _actividadService;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.backEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Modulo = new Array();
        this.tokenDatosPregunta = false;
    }
    FormPreguntaMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idDatosPregunta = this._route.snapshot.params['id'];
        this.idActividad = this._route.snapshot.parent.parent.params['id'];
        if (!this.idDatosPregunta) {
            this.title = 'Nueva pregunta';
        }
        this.jwt = this._usuarioService.getJWT();
        this._actividadService.consultaActividad(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
                if (_this.idDatosPregunta) {
                    _this._preguntaService.consulta(_this.idDatosPregunta, _this.jwt).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.datosPregunta = response['pregunta'];
                            _this.idTipoPregunta = _this.datosPregunta.tipo_pregunta_id;
                            _this.idPregunta = _this.datosPregunta.pregunta_id;
                            _this.tokenDatosPregunta = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    _this.ponderacion;
                }
                else {
                    _this.datosPregunta = null;
                    _this.tokenDatosPregunta = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPreguntaMainComponent.prototype.siguientePregunta = function (event) {
        var _this = this;
        if (event.status) {
            var tab_1 = 'tab-pregunta2';
            if (event.idDatosPregunta) {
                this.sucessEvent.emit({ 'status': 1 });
                this.idDatosPregunta = event.idDatosPregunta;
                this.idTipoPregunta = event.idTipoPregunta;
            }
            if (event.datos) {
                var datos = event.datos;
                if (this.datosPregunta) {
                    if (this.datosPregunta.ponderacion)
                        this.datosPregunta.ponderacion = parseFloat(datos.ponderacion).toFixed(2);
                    if (this.datosPregunta.dificultad)
                        this.datosPregunta.dificultad = datos.dificultad;
                    if (this.datosPregunta.aleatorio)
                        this.datosPregunta.aleatorio = datos.aleatorio;
                    if (this.datosPregunta.retroalimentacion)
                        this.datosPregunta.retroalimentacion = datos.retroalimentacion;
                }
                else {
                    this.datosPregunta = {};
                    this.datosPregunta.datos_pregunta_id = event.idDatosPregunta;
                    this.datosPregunta.tipo_pregunta_id = event.idTipoPregunta;
                    this.datosPregunta.ponderacion = parseFloat(datos.ponderacion).toFixed(2);
                    this.datosPregunta.dificultad_id = datos.dificultad;
                    this.datosPregunta.shuffle = datos.aleatorio;
                    this.datosPregunta.retroalimentacion = datos.retroalimentacion;
                    this.datosPregunta.reactivos = event.reactivos;
                }
            }
            setTimeout(function () {
                _this.t.select(tab_1);
            }, 100);
        }
    };
    FormPreguntaMainComponent.prototype.finalizarGuardado = function (event) {
        var _this = this;
        console.log(event);
        if (event.status) {
            if (event.idPregunta) {
                this.idPregunta = event.idPregunta;
            }
            var reactivos = parseInt(this.datosPregunta.reactivos);
            if (reactivos == 1) {
                setTimeout(function () {
                    _this.t.select('tab-pregunta3');
                }, 100);
            }
            else {
                this.router.navigate(['./'], { relativeTo: this._route.parent.parent });
            }
        }
    };
    FormPreguntaMainComponent.prototype.reactivosGuardados = function (evt) {
        this.router.navigate(['./'], { relativeTo: this._route.parent.parent });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('t'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"])
    ], FormPreguntaMainComponent.prototype, "t", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormPreguntaMainComponent.prototype, "sucessEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormPreguntaMainComponent.prototype, "backEvent", void 0);
    FormPreguntaMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-pregunta-main',
            template: __webpack_require__(/*! ./form-pregunta-main.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.html"),
            styles: [__webpack_require__(/*! ./form-pregunta-main.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_4__["PreguntaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_administracion_carga_actividades_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ActividadService"]])
    ], FormPreguntaMainComponent);
    return FormPreguntaMainComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.module.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.module.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: FormPreguntaMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreguntaMainModule", function() { return FormPreguntaMainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_pregunta_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-pregunta-main.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main.component.ts");
/* harmony import */ var _form_datos_pregunta_form_datos_pregunta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-datos-pregunta/form-datos-pregunta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-datos-pregunta/form-datos-pregunta.component.ts");
/* harmony import */ var _form_pregunta_form_pregunta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-pregunta/form-pregunta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.ts");
/* harmony import */ var _form_multiple_form_multiple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-multiple/form-multiple.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/form-multiple.component.ts");
/* harmony import */ var _form_relacion_form_relacion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-relacion/form-relacion.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.ts");
/* harmony import */ var _form_zona_imagenes_form_zona_imagenes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-zona-imagenes/form-zona-imagenes.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.ts");
/* harmony import */ var _form_arrastable_form_arrastable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-arrastable/form-arrastable.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-arrastable/form-arrastable.component.ts");
/* harmony import */ var _form_multiple_texto_texto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form-multiple/texto/texto.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/texto/texto.component.ts");
/* harmony import */ var _form_multiple_imagen_imagen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-multiple/imagen/imagen.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-multiple/imagen/imagen.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _form_pregunta_main_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-pregunta-main-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta-main/form-pregunta-main-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var FormPreguntaMainModule = /** @class */ (function () {
    function FormPreguntaMainModule() {
    }
    FormPreguntaMainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _form_pregunta_main_component__WEBPACK_IMPORTED_MODULE_2__["FormPreguntaMainComponent"],
                _form_datos_pregunta_form_datos_pregunta_component__WEBPACK_IMPORTED_MODULE_3__["FormDatosPreguntaComponent"],
                _form_pregunta_form_pregunta_component__WEBPACK_IMPORTED_MODULE_4__["FormPreguntaComponent"],
                _form_multiple_form_multiple_component__WEBPACK_IMPORTED_MODULE_5__["FormMultipleComponent"],
                _form_relacion_form_relacion_component__WEBPACK_IMPORTED_MODULE_6__["FormRelacionComponent"],
                _form_zona_imagenes_form_zona_imagenes_component__WEBPACK_IMPORTED_MODULE_7__["FormZonaImagenesComponent"],
                _form_arrastable_form_arrastable_component__WEBPACK_IMPORTED_MODULE_8__["FormArrastableComponent"],
                _form_multiple_texto_texto_component__WEBPACK_IMPORTED_MODULE_9__["MultipleTextoComponent"],
                _form_multiple_imagen_imagen_component__WEBPACK_IMPORTED_MODULE_10__["ImagenComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_pregunta_main_routing_module__WEBPACK_IMPORTED_MODULE_18__["FormPreguntaMainRoutingModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_13__["FileUploadModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_14__["ArchivoModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_17__["LanguageTranslationModule"]
            ]
        })
    ], FormPreguntaMainModule);
    return FormPreguntaMainModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"preguntaForm\" (ngSubmit)=\"enviarInformacionPregunta()\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n        <label class=\"control-label\" for=\"nombre_ciclo\"> {{'instruccion' | translate}}:</label>\r\n        <!-- <ckeditor   [config]=\"{allowedContent : true }\"  formControlName=\"instruccion\"  name=\"ckeditor\"></ckeditor><br>     -->\r\n        <ckeditor [config]=\"{\r\n            allowedContent : true,\r\n            extraPlugins: 'uploadimage',\r\n            filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n          }\"   \r\n          formControlName=\"instruccion\" name=\"ckeditor\"\r\n          (ready)=\"comienza($event)\"></ckeditor>\r\n        <span class=\"invalidText\" *ngIf=\"f.instruccion.invalid && f.instruccion.touched\">\r\n          {{'fmErrText' | translate}}\r\n        </span>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"tipo_pregunta\">{{'contenidoPedagogico' | translate}}:</label>\r\n              <app-file-upload formControlName=\"contenido\" ></app-file-upload>\r\n              <div class=\"invalid-feedback\" style=\"display: block\">\r\n                <ng-container *ngIf=\"hasError( 'required')\">{{'fmErrfileRequired' | translate}}</ng-container>\r\n                <ng-container *ngIf=\"hasError( 'requiredFileType')\">{{'fmErrfileDocument' | translate}}</ng-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div>\r\n                <app-archivo *ngIf=\"contenidoPregunta.contenido\" [urlBase]=\"contenidoPregunta.contenido\"></app-archivo>\r\n              </div>\r\n              <div>\r\n                <button [hidden]=\"tipoAdmin == 0\" *ngIf=\"contenidoPregunta.contenido\" class=\"btn btn-danger\" type=\"button\" (click)=\"eliminaContenido()\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\r\n              </div>\r\n          </div>         \r\n        </div>\r\n        <div class=\"col-md-12\" *ngIf=\"idTipoPregunta == '11'\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"tipo_pregunta\">{{'numArchivos' | translate}}:</label>\r\n            <select class=\"form-control\"  formControlName=\"numArchivos\">\r\n              <option value=\"1\"> 1 </option>\r\n              <option value=\"2\"> 2 </option>\r\n              <option value=\"3\"> 3 </option>\r\n              <option value=\"4\"> 4 </option>\r\n              <option value=\"5\"> 5 </option>\r\n          </select>\r\n            <span class=\"invalidText\" *ngIf=\"f.numArchivos.invalid && f.numArchivos.touched\">\r\n                {{'fmErrText' | translate}}\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"tipo_pregunta\">{{'idFormato' | translate}}:</label>\r\n              <select class=\"form-control\"  formControlName=\"idFormato\">\r\n                <option  [value]=\"_formato.cat_formato_id\" *ngFor=\"let _formato of formato\">{{_formato.tipo_formato}} ( {{_formato.tipo_extension}} )</option>\r\n            </select>\r\n              <span class=\"invalidText\" *ngIf=\"f.idFormato.invalid && f.idFormato.touched\">\r\n                  {{'fmErrText' | translate}}\r\n              </span>\r\n            </div>\r\n        </div>\r\n        <!--div class=\"col-md-12\" *ngIf=\"idTipoPregunta == '2'\">\r\n            <label class=\"control-label\" for=\"tipo_pregunta\">{{'tipo' | translate}}:</label>\r\n                <div class=\"form-group\">                          \r\n              <label class=\"radio-inline\">\r\n                <input  type=\"radio\"  formControlName=\"tipo\" value=\"1\" />{{'texto' | translate}}\r\n              </label>\r\n              <label class=\"radio-inline\">\r\n                <input  type=\"radio\"  formControlName=\"tipo\" value=\"2\"/>{{'imagen' | translate}}\r\n              </label>\r\n              <br>\r\n              <span class=\"invalidText\" *ngIf=\"f.tipo.invalid && f.tipo.touched\">\r\n                {{'fmErrSelect' | translate}}\r\n              </span>\r\n            </div>\r\n          </div-->\r\n        <div class=\"col-md-12\" *ngIf=\"idTipoPregunta == '5'\">\r\n          <label class=\"control-label\" for=\"tipo_pregunta\">{{'orientacion' | translate}}:</label>\r\n              <div class=\"form-group\">                          \r\n            <label class=\"radio-inline\">\r\n              <input checked type=\"radio\"  formControlName=\"orientacion\" value=\"1\"/>{{'Vertical' | translate}}\r\n            </label>\r\n            <label class=\"radio-inline\">\r\n              <input  type=\"radio\"  formControlName=\"orientacion\" value=\"0\"/>{{'Horizontal' | translate}}\r\n            </label>\r\n            <br>\r\n            <span class=\"invalidText\" *ngIf=\"f.orientacion.invalid && f.orientacion.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\" *ngIf=\"idTipoPregunta == '6'\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <p><b>{{'_primeraPregunta' | translate}}</b></p>\r\n            <div class=\"form-group\" >\r\n              <ckeditor [config]=\"{toolbar: simpleEditor}\" formControlName=\"pregunta1\" name=\"pregunta1\" id=\"pregunta1\"></ckeditor>\r\n            </div>\r\n            <!-- <div  *ngIf=\"edicion\" class=\" alert alert-info\" [innerHTML]=\"pregunta1\" >\r\n            </div> -->\r\n          </div>\r\n          \r\n          <div class=\"col-md-4\">\r\n              <p><b>{{'_segundaPregunta' | translate}}</b></p>\r\n            <div class=\"form-group\">\r\n              <ckeditor [config]=\"{toolbar: simpleEditor}\" formControlName=\"pregunta2\" name=\"pregunta2\" id=\"pregunta2\"></ckeditor>\r\n            </div>\r\n            <!-- <div  *ngIf=\"edicion\" class=\"alert alert-info\" [innerHTML]=\"pregunta2\" >\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p><b>{{'_terceraPregunta' | translate}}</b></p>\r\n            <div class=\"form-group\" >\r\n              <ckeditor [config]=\"{toolbar: simpleEditor}\" formControlName=\"pregunta3\" name=\"pregunta3\" id=\"pregunta3\"></ckeditor>\r\n            </div>\r\n            <!-- <div *ngIf=\"edicion\" class=\"alert alert-info\" [innerHTML]=\"pregunta3\" >                \r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <button  [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right mt-2\">{{'fmSave' | translate}} <i *ngIf=\"cargando\" class=\"fa fa-spin fa-spinner\" aria-hidden=\"true\"></i></button>\r\n          </div>\r\n          </div>\r\n</form>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tcHJlZ3VudGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tcHJlZ3VudGEvZm9ybS1wcmVndW50YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: FormPreguntaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPreguntaComponent", function() { return FormPreguntaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/pregunta.service */ "./src/app/administracion/carga-actividades/services/pregunta.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_learning_trPregunta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/learning/trPregunta */ "./src/app/models/learning/trPregunta.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/simpleEditor */ "./src/app/models/simpleEditor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormPreguntaComponent = /** @class */ (function () {
    function FormPreguntaComponent(formBuilder, _preguntaService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._preguntaService = _preguntaService;
        this._usuarioService = _usuarioService;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contenidoPregunta = new src_app_models_learning_trPregunta__WEBPACK_IMPORTED_MODULE_5__["TrPregunta"]();
        this.simpleEditor = src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_7__["simpleEditor"];
    }
    Object.defineProperty(FormPreguntaComponent.prototype, "f", {
        get: function () { return this.preguntaForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormPreguntaComponent.prototype.hasError = function (error) {
        var control = this.preguntaForm.get('contenido');
        return control.dirty && control.hasError(error);
    };
    FormPreguntaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idDatosPregunta = this.datosPregunta.datos_pregunta_id;
        this.idTipoPregunta = this.datosPregunta.tipo_pregunta_id;
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        var elements = {
            instruccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contenido: ['', Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_2__["requiredFileType"])(0)]
        };
        if (this.idTipoPregunta == '2') {
            elements['tipo'] = ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        }
        if (this.idTipoPregunta == '5') {
            elements['orientacion'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        }
        if (this.idTipoPregunta == '6') {
            elements['pregunta1'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
            elements['pregunta2'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
            elements['pregunta3'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        }
        /*if(this.idTipoPregunta == '7'){
          
          
           elements['momento'] = ['',Validators.required];
           
        }*/
        if (this.idTipoPregunta == '11') {
            elements['numArchivos'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
            elements['idFormato'] = [this.formato, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        }
        this._preguntaService.consultaFormatos(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.formato = response['formatos'];
            }
        });
        this.preguntaForm = this.formBuilder.group(elements);
        this.consultaPregunta();
    };
    FormPreguntaComponent.prototype.consultaPregunta = function () {
        var _this = this;
        this._preguntaService.consultaContenidoPregunta(this.idDatosPregunta, this.idTipoPregunta, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.contenidoPregunta = response['pregunta'][0];
                _this.idPregunta = _this.contenidoPregunta.pregunta_id;
                _this.preguntaForm.get('instruccion').setValue(_this.contenidoPregunta.pregunta);
                if (_this.idTipoPregunta == '2') {
                    _this.preguntaForm.get('tipo').setValue("1");
                }
                /*    if(this.idTipoPregunta == '7'){
                      
                      this.preguntaForm.get('momento').setValue(this.contenidoPregunta.momento);
                   }*/
                if (_this.idTipoPregunta == '11') {
                    _this.preguntaForm.get('numArchivos').setValue(_this.contenidoPregunta.num_archivos);
                    _this.preguntaForm.get('idFormato').setValue(_this.contenidoPregunta.cat_formato_id);
                }
                if (_this.idTipoPregunta == '5') {
                    _this.preguntaForm.get('orientacion').setValue(_this.contenidoPregunta.orientacion);
                }
                if (_this.idTipoPregunta == '6') {
                    _this.preguntaForm.get('pregunta1').setValue(_this.contenidoPregunta.pregunta1);
                    _this.preguntaForm.get('pregunta2').setValue(_this.contenidoPregunta.pregunta2);
                    _this.preguntaForm.get('pregunta3').setValue(_this.contenidoPregunta.pregunta3);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPreguntaComponent.prototype.eliminaContenido = function () {
        var _this = this;
        this._preguntaService.eliminaArchivo(this.jwt, this.idPregunta, this.idTipoPregunta).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                console.log(response);
                _this.consultaPregunta();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPreguntaComponent.prototype.enviarInformacionPregunta = function () {
        var _this = this;
        this.cargando = true;
        if (this.preguntaForm.invalid) {
            this.cargando = false;
            Object.keys(this.preguntaForm.controls).forEach(function (controlKey) {
                _this.preguntaForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._preguntaService.modificaContenidoPregunta(this.preguntaForm, this.idDatosPregunta, this.idPregunta, this.idTipoPregunta, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.cargando = false;
                alertify.success(response['msg']);
                _this.sucessEvent.emit({
                    'status': response['status'],
                    'idPregunta': response['idPregunta']
                }); //si se insertó correctamente se le agrega la asignatura a la asignatura
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormPreguntaComponent.prototype.comienza = function (event) {
        var self = this;
        var url = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        var urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        var jwt = this.jwt;
        var idDatosPregunta = this.idDatosPregunta;
        event.editor.on('fileUploadRequest', function (evt) {
            var fileLoader = evt.data.fileLoader, formData = new FormData(), xhr = fileLoader.xhr;
            xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
            //xhr.setRequestHeader('Content-type', "multipart/form-data");
            formData.append('jwt', jwt);
            formData.append('id', idDatosPregunta);
            formData.append('nom_carpeta', 'pregunta');
            formData.append('file', fileLoader.file, fileLoader.fileName);
            fileLoader.xhr.send(formData);
            evt.stop();
            // Prevented the default behavior.
        }, null, null, 4);
        event.editor.on('fileUploadResponse', function (evt) {
            // Prevent the default response handler.
            evt.stop();
            // Get XHR and response.
            var data = evt.data, xhr = data.fileLoader.xhr, response = xhr.responseText.split('|');
            if (response[1]) {
                // An error occurred during upload.          
                data.message = response[1];
                evt.cancel();
            }
            else {
                var msg = JSON.parse(response[0]);
                setTimeout(function () {
                    self.getData(event);
                    console.log(self.preguntaForm.value);
                }, 10);
                data.url = urlAssets + msg.url;
            }
        });
    };
    FormPreguntaComponent.prototype.getData = function (event) {
        this.preguntaForm.controls['instruccion'].setValue(event.editor.getData());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormPreguntaComponent.prototype, "datosPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormPreguntaComponent.prototype, "sucessEvent", void 0);
    FormPreguntaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-pregunta',
            template: __webpack_require__(/*! ./form-pregunta.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.html"),
            styles: [__webpack_require__(/*! ./form-pregunta.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-pregunta/form-pregunta.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_administracion_carga_actividades_services_pregunta_service__WEBPACK_IMPORTED_MODULE_3__["PreguntaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], FormPreguntaComponent);
    return FormPreguntaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <br>\r\n    <p>{{ 'instruccionRelacion' | translate }}</p>\r\n  </div>    \r\n</div> \r\n<form class=\"row\"  [formGroup]=\"preguntaMultipleForm\" (ngSubmit)=\"enviarInformacionPregunta()\">\r\n  <div class=\"container-fluid\"  formArrayName=\"items\" *ngFor=\"let item of preguntaMultipleForm.get('items')['controls']; let i = index;\">\r\n    \r\n    <div class=\"row\" [formGroupName]=\"i\">\r\n      <div class=\"col-12\">\r\n        <p>Escribe la pregunta con su respectiva respuesta <b>Sólo puedes relacionar una respuesta por pregunta</b></p>\r\n      </div>\r\n      <div class=\"col\">\r\n          <label class=\"control-label\" for=\"tipo_pregunta\">{{i+1}} - {{'Pregunta' | translate}}: </label>\r\n          <!--input class=\"form-control\" formControlName=\"columna_a\"-->\r\n          <ckeditor [config]=\"{\r\n            toolbar: reactiveEditor,\r\n            extraPlugins: ['uploadimage','justify'],\r\n            filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n            }\"\r\n            (ready)=\"comienza($event)\" (blur)=\"getData($event,i)\"\r\n             formControlName=\"columna_a\" name=\"columna_a\"></ckeditor>\r\n          <span class=\"invalidText\" *ngIf=\"sf.controls[i].controls.columna_a.invalid && sf.controls[i].controls.columna_a.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>\r\n      </div>\r\n      <div class=\"col\">\r\n          <label class=\"control-label\" for=\"tipo_pregunta\">{{'Respuesta' | translate}}:</label>\r\n          <!--input class=\"form-control\" formControlName=\"columna_b\"-->\r\n          <ckeditor [config]=\"{\r\n            toolbar: reactiveEditor,\r\n            extraPlugins: ['uploadimage','justify'],\r\n            filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n            }\"\r\n            (ready)=\"comienza($event)\" (blur)=\"getData($event,i)\"\r\n             formControlName=\"columna_b\" name=\"columna_b\"></ckeditor>\r\n          <span class=\"invalidText\" *ngIf=\"sf.controls[i].controls.columna_b.invalid && sf.controls[i].controls.columna_b.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>\r\n      </div>\r\n      <div class=\"col-1\">\r\n          <br>\r\n          <i *ngIf=\"i > 0\" class=\"fa fa-times fa-2x cambiaCursor pt-2 mt-1\" (click)=\"eliminarRespuesta(i)\" ></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n      <button (click)=\"agregarRespuesta()\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-plus-square\"></i> {{'agregarRespuesta' | translate}}</button>\r\n  </div>\r\n    <div class=\"col-12\">\r\n      <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"preguntaMultipleForm.invalid\">{{'guardarTerminar' | translate}}</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.cambiaCursor:hover {\n  color: #dc3545;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tcmVsYWNpb24vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9hY3RpdmlkYWQvcHJlZ3VudGEvZm9ybS1yZWxhY2lvbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcY2FyZ2EtYWN0aXZpZGFkZXNcXGFzaWduYXR1cmFcXG1vZHVsb1xcYWN0aXZpZGFkXFxwcmVndW50YVxcZm9ybS1yZWxhY2lvblxcZm9ybS1yZWxhY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNoQkQ7RUFDSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9hY3RpdmlkYWQvcHJlZ3VudGEvZm9ybS1yZWxhY2lvbi9mb3JtLXJlbGFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG4uY2FtYmlhQ3Vyc29yOmhvdmVye1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: FormRelacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRelacionComponent", function() { return FormRelacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/learning/trPreguntaOpcionMultiple */ "./src/app/models/learning/trPreguntaOpcionMultiple.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_relacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/relacion.service */ "./src/app/administracion/carga-actividades/services/relacion.service.ts");
/* harmony import */ var src_app_models_reactiveEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/reactiveEditor */ "./src/app/models/reactiveEditor.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormRelacionComponent = /** @class */ (function () {
    function FormRelacionComponent(formBuilder, _usuarioService, _relacionService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._relacionService = _relacionService;
        this.newPregunta = new src_app_models_learning_trPreguntaOpcionMultiple__WEBPACK_IMPORTED_MODULE_2__["TrPreguntaOpcionMultiple"];
        this.preguntas = new Array();
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reactiveEditor = src_app_models_reactiveEditor__WEBPACK_IMPORTED_MODULE_5__["reactiveEditor"];
    }
    Object.defineProperty(FormRelacionComponent.prototype, "f", {
        get: function () { return this.preguntaMultipleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormRelacionComponent.prototype, "sf", {
        get: function () { return this.preguntaMultipleForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    FormRelacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (this.idPregunta !== undefined) {
            this._relacionService.consultaRelacion(this.idPregunta, this.jwt).subscribe(function (response) {
                var react = response['reactivos'];
                if (response && response['status'] == '1') {
                    react.forEach(function (reactivo) {
                        this.agregarRespuesta(reactivo.columna_a_desc, reactivo.columna_b_desc);
                    }.bind(_this));
                    _this.eliminarRespuesta(react.columna_a_respuesta == '1');
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.preguntaMultipleForm = this.formBuilder.group({
            items: this.formBuilder.array([this.crearRespuesta()])
        });
    };
    FormRelacionComponent.prototype.agregarRespuesta = function (columna_a, columna_b) {
        if (columna_a === void 0) { columna_a = ''; }
        if (columna_b === void 0) { columna_b = ''; }
        this.items = this.preguntaMultipleForm.get('items');
        this.items.push(this.crearRespuesta(columna_a, columna_b));
    };
    FormRelacionComponent.prototype.crearRespuesta = function (columna_a, columna_b) {
        if (columna_a === void 0) { columna_a = ''; }
        if (columna_b === void 0) { columna_b = ''; }
        return this.formBuilder.group({
            columna_a: [columna_a, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            columna_b: [columna_b, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    FormRelacionComponent.prototype.eliminarRespuesta = function (index) {
        this.items.removeAt(index);
    };
    FormRelacionComponent.prototype.enviarInformacionPregunta = function () {
        var _this = this;
        // console.log(this.preguntaMultipleForm.get('items'));
        if (this.preguntaMultipleForm.invalid) {
            Object.keys(this.preguntaMultipleForm.controls).forEach(function (controlKey) {
                _this.preguntaMultipleForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._relacionService.modificaRelacion(this.preguntaMultipleForm, this.idPregunta, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.successEvent.emit({ 'status': response['status'], "idPregunta": _this.idPregunta }); //si se insertó correctamente se le agrega la asignatura a la asignatura
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormRelacionComponent.prototype.comienza = function (event) {
        var url = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        var urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        var jwt = this._usuarioService.getJWT();
        var id = "" + this.idPregunta + "";
        event.editor.on('fileUploadRequest', function (evt) {
            var fileLoader = evt.data.fileLoader, formData = new FormData(), xhr = fileLoader.xhr;
            xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
            //xhr.setRequestHeader('Content-type', "multipart/form-data");
            formData.append('jwt', jwt);
            formData.append('nom_carpeta', 'reactivos_pregunta');
            formData.append('id', id);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            fileLoader.xhr.send(formData);
            evt.stop();
            // Prevented the default behavior.
        }, null, null, 4);
        event.editor.on('fileUploadResponse', function (evt) {
            // Prevent the default response handler.
            evt.stop();
            // Get XHR and response.
            var data = evt.data, xhr = data.fileLoader.xhr, response = xhr.responseText.split('|');
            console.log(response);
            if (response[1]) {
                // An error occurred during upload.          
                data.message = response[1];
                evt.cancel();
            }
            else {
                var msg = JSON.parse(response[0]);
                console.log(response[0]);
                console.log(msg);
                data.url = urlAssets + msg.url;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormRelacionComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormRelacionComponent.prototype, "successEvent", void 0);
    FormRelacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-relacion',
            template: __webpack_require__(/*! ./form-relacion.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.html"),
            styles: [__webpack_require__(/*! ./form-relacion.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-relacion/form-relacion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_administracion_carga_actividades_services_relacion_service__WEBPACK_IMPORTED_MODULE_4__["RelacionService"]])
    ], FormRelacionComponent);
    return FormRelacionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n        <!-- <div class=\"row\"> -->\r\n        <form [formGroup]=\"inputForm\" (ngSubmit)=\"enviarRespuestas()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label>{{'Labelimagen' | translate }}</label>\r\n                <app-file-upload formControlName=\"imagen\" ></app-file-upload>\r\n                <div class=\"invalid-feedback\" style=\"display: block\">\r\n                  <ng-container *ngIf=\"hasError( 'required')\">{{'fmErrfileRequired' | translate}}</ng-container>\r\n                  <ng-container *ngIf=\"hasError( 'requiredFileType')\">{{'fmErrfileImage' | translate}}</ng-container>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div formArrayName=\"items\" *ngFor=\"let item of inputForm.get('items')['controls']; let i = index;\">\r\n            <div class=\"row\" [formGroupName]=\"i\">\r\n              <div class=\"col-10\">\r\n                <div class=\"form-group \">\r\n                  <label>{{'respuestaZona' | translate}} {{i + 1}}</label><br>\r\n                  <input formControlName=\"input\" class=\"form-control\" placeholder=\"Ingresa respuesta\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-1\">\r\n                  <div class=\"form-group \">\r\n                    <label>{{'color' | translate}}:</label><br>\r\n                    <input formControlName=\"color\" placeholder=\"Ingresa respuesta\" type=\"color\" class=\"mt-2\">\r\n                  </div>\r\n                </div>\r\n              <div class=\"col-1\">\r\n                  <br>\r\n                  <i *ngIf=\"i > 0\" class=\"fa fa-times fa-2x cambiaCursor pt-2 mt-1\" (click)=\"deleteItem(i)\"></i>        \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <button type=\"button\" class=\"btn btn-link\" (click)=\"addItem(0)\"><i class=\"fa fa-plus-square\"></i> Agregar</button> \r\n            </div>\r\n            <div class=\"col-12\">\r\n              <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"inputForm.invalid\" type=\"submit\" class=\"btn btn-success pull-right\">Enviar</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n    <div class=\"row container-cards\" *ngIf=\"showCards\">\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 mt-3\" *ngFor=\"let respuesta of respuestas; let i = index\">\r\n              <div class=\"card text-black p-2\" [style.borderColor]=\"respuesta.color\">\r\n                <div class=\"row\">\r\n                <div class=\"col-1 mt-3\">\r\n                    <h3>{{i + 1}}</h3>\r\n                </div>       \r\n                <div class=\"col\" disabled>     \r\n                  <blockquote class=\" mb-0\">\r\n                    <small>{{respuesta.input}}</small>\r\n                  </blockquote>\r\n                </div>            \r\n                </div>\r\n              </div> \r\n            </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-center\">\r\n      <div class=\"col\">\r\n        <canvas #myCanvas id=\"canvas\" (mousedown)=\"mouseDown($event)\" (mouseup)=\"mouseUp($event)\" [hidden]=\"hideCanvas\"></canvas>\r\n      </div>\r\n    </div>  \r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button [hidden]=\"hideCanvas || tipoAdmin == 0\" class=\"btn btn-danger btn-lg\" type=\"button\" (click)=\"cleanCanvas()\">Borrar</button>   \r\n        <button [hidden]=\"hideCanvas || tipoAdmin == 0\" class=\"btn btn-primary btn-lg pull-right\" type=\"button\" (click)=\"guardarCanvas()\">Guardar</button>         \r\n      </div>    \r\n    </div> \r\n    <br>\r\n    <div class=\"row justify-content-md-center\">\r\n        <canvas #myImage ></canvas>\r\n      <!-- <img #myImage [src]=\"imgURL\" [hidden]=\"hideImage\" alt=\"Imagen\"> -->\r\n    </div>\r\n      \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n#canvas {\n  cursor: crosshair; }\n\n.container-cards {\n  margin-bottom: 10px; }\n\n.cambiaCursor:hover {\n  cursor: pointer;\n  color: #dc3545; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tem9uYS1pbWFnZW5lcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9wcmVndW50YS9mb3JtLXpvbmEtaW1hZ2VuZXMvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXGNhcmdhLWFjdGl2aWRhZGVzXFxhc2lnbmF0dXJhXFxtb2R1bG9cXGFjdGl2aWRhZFxccHJlZ3VudGFcXGZvcm0tem9uYS1pbWFnZW5lc1xcZm9ybS16b25hLWltYWdlbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2ZEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL2Zvcm0tem9uYS1pbWFnZW5lcy9mb3JtLXpvbmEtaW1hZ2VuZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL2Zvcm1zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4jY2FudmFze1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn1cclxuLmNvbnRhaW5lci1jYXJkc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNhbWJpYUN1cnNvcjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: FormZonaImagenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormZonaImagenesComponent", function() { return FormZonaImagenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_zona_imagenes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/zona-imagenes.service */ "./src/app/administracion/carga-actividades/services/zona-imagenes.service.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormZonaImagenesComponent = /** @class */ (function () {
    function FormZonaImagenesComponent(_usuarioService, _zonaImagenesService, formBuilder) {
        this._usuarioService = _usuarioService;
        this._zonaImagenesService = _zonaImagenesService;
        this.formBuilder = formBuilder;
        this.width = 0;
        this.height = 0;
        this.drag = false;
        this.showContainer = true;
        this.showCards = false;
        this.hideCanvas = true;
        this.hideImage = true;
        this.arrayCanvas = [];
        this.arrayRespuestas = [];
        this.bandera = 0;
        this.flag = true;
        this.successEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormZonaImagenesComponent.prototype, "f", {
        get: function () { return this.inputForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormZonaImagenesComponent.prototype, "sf", {
        get: function () { return this.inputForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    FormZonaImagenesComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        this.canvas = this.myCanvas.nativeElement;
        this.inputForm = this.formBuilder.group({
            imagen: ['', [Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_3__["requiredFileType"])(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            items: this.formBuilder.array([this.createItem(0)])
        });
        this.getDatos();
        this.indexRespuestas = 0;
    };
    FormZonaImagenesComponent.prototype.getDatos = function () {
        var _this = this;
        this._zonaImagenesService.consultaZonaImagenes(this.idPregunta, this.jwt, 0).subscribe(function (response) {
            if (response && response['status']) {
                _this.reactivos = response['reactivos'];
                _this.respuestas = _this.reactivos;
                _this.datosImagen = response['contenidoPregunta'];
                _this.inputForm.get('imagen').clearValidators();
                _this.inputForm.get('imagen').updateValueAndValidity();
                _this.deleteItem(0);
                for (var i = 0; i < _this.reactivos.length; i++) {
                    _this.addItem(_this.reactivos[i].color, _this.reactivos[i].reactivo_desc);
                    _this.respuestas[i]['input'] = _this.reactivos[i].reactivo_desc;
                }
                _this.seleccion = _this.reactivos.length;
                _this.preview(1, '');
            }
        }, function (error) {
            console.log(error);
        });
    };
    // getRandomColor() {
    //   var letters = 'BCDEF'.split('');
    //   var color = '#';
    //   for (var i = 0; i < 6; i++ ) {
    //       color += letters[Math.floor(Math.random() * letters.length)];
    //   }
    //   return color;
    // }
    FormZonaImagenesComponent.prototype.createItem = function (id, text) {
        if (text === void 0) { text = ''; }
        var color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_5__["randomColor"])();
        if (id != 0) {
            color = id;
        }
        return this.formBuilder.group({
            input: [text, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            color: color,
            posX: [],
            posY: [],
            ancho: [],
            alto: []
        });
    };
    FormZonaImagenesComponent.prototype.addItem = function (id, text) {
        if (text === void 0) { text = ''; }
        this.items = this.inputForm.get('items');
        this.items.push(this.createItem(id, text));
    };
    FormZonaImagenesComponent.prototype.deleteItem = function (index) {
        this.items = this.inputForm.get('items');
        this.items.removeAt(index);
    };
    FormZonaImagenesComponent.prototype.hasError = function (error) {
        var control = this.inputForm.get('imagen');
        return control.dirty && control.hasError(error);
    };
    FormZonaImagenesComponent.prototype.enviarRespuestas = function () {
        var _this = this;
        //this.showDrop = true;
        //this.showContainer = false;
        this.flag = true;
        if (this.inputForm.get('imagen').value) {
            this.preview(0, this.inputForm.get('imagen').value);
        }
        else {
            this.preview(2, '');
        }
        setTimeout(function () {
            if (_this.bandera == 1) {
                _this.respuestas = _this.inputForm.value.items;
                _this.seleccion = _this.inputForm.value.items.length;
                _this.cleanCanvas();
                alertify.success('Paso 1 completado').dismissOthers();
            }
        }, 100);
    };
    FormZonaImagenesComponent.prototype.guardarCanvas = function () {
        if (this.indexRespuestas == this.seleccion) {
            this.flag = false;
            //this.hideCanvas = true;
            //this.showCards = true;
            //this.hideImage = false;
            //this.drawSelections();
            alertify.confirm('¿Deseas guardar los elementos con su correspondiente imagen?', function () {
                var _this = this;
                this._zonaImagenesService.modificaZona(this.inputForm, this.width, this.height, this.idPregunta, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.selecciones = 0;
                        alertify.success(response['msg']).dismissOthers();
                        _this.successEvent.emit({ status: response['status'] });
                    }
                    else {
                        alertify.success(response['msg']).dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Cancel').dismissOthers();
            });
        }
        else {
            alertify.error('El número de selecciones debe coincidir con el número de respuestas');
        }
    };
    FormZonaImagenesComponent.prototype.drawSelections = function () {
        var ClientRect = this.myImage.nativeElement.getBoundingClientRect();
        for (var i = 0; i < this.arrayCanvas.length; i++) {
            this.x = Math.round(ClientRect.left) + this.arrayCanvas[i].pointX;
            this.y = Math.round(ClientRect.top) + this.arrayCanvas[i].pointY;
            this.w = this.arrayCanvas[i].width;
            this.h = this.arrayCanvas[i].height;
            var ctx = this.myImage.nativeElement.getContext('2d');
            ctx.restore();
            ctx.lineWidth = 15;
            ctx.strokeStyle = 'rgba(255, 0, 0, 0)';
            ctx.strokeRect(this.x, this.y, this.w, this.h);
            //ctx.stroke();
            ctx.save();
            ctx.clip();
        }
    };
    FormZonaImagenesComponent.prototype.preview = function (id, evt) {
        var _this = this;
        var image = evt;
        var canvas = this.myCanvas.nativeElement;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (id == 0) {
            this.imgFile = image;
            this.size = image.size;
            var reader_1 = new FileReader;
            reader_1.onload = function () {
                _this.imgURL = reader_1.result;
                var img = new Image();
                img.onload = function () {
                    if (img.width > 800) {
                        _this.imgURL = null;
                        _this.bandera = 0;
                        _this.hideCanvas = true;
                        _this.showCards = false;
                        _this.inputForm.controls['imagen'].setErrors({ 'incorrect': true });
                        alertify.error("Ancho máximo de la imagen es de 800px").dismissOthers();
                    }
                    else {
                        _this.bandera = 1;
                        _this.showCards = true;
                        _this.width = img.width;
                        _this.height = img.height;
                        canvas.width = img.width;
                        canvas.height = img.height;
                        canvas.style.background = "url(" + _this.imgURL + ")";
                        _this.hideCanvas = false;
                        // context.drawImage(img, 0 , 0);       
                    }
                };
                img.src = reader_1.result.toString(); // This is the data URL
            };
            reader_1.readAsDataURL(image);
        }
        else if (id != 0) {
            this.bandera = 1;
            this.showCards = true;
            this.width = this.datosImagen.imagen_ancho;
            this.height = this.datosImagen.imagen_alto;
            canvas.width = this.datosImagen.imagen_ancho;
            canvas.height = this.datosImagen.imagen_alto;
            canvas.style.background = "url(" + this.url + this.datosImagen.imagen + ")";
            this.hideCanvas = false;
            if (id == 1) {
                this.respuestas.forEach(function (r) {
                    _this.arrayCanvas.push({ pointX: r.posicion_x, pointY: r.posicion_y, width: r.ancho, height: r.alto, color: r.color });
                    _this.drawRectangleSelected(r);
                });
            }
        }
        // this.imgType.nativeElement.value = ""; 
    };
    FormZonaImagenesComponent.prototype.mouseDown = function (evt) {
        if (this.seleccion > 0 && this.flag) {
            var ClientRect = this.canvas.getBoundingClientRect();
            this.x = Math.round(evt.clientX - ClientRect.left);
            this.y = Math.round(evt.clientY - ClientRect.top);
            this.drag = true;
        }
        else {
            alertify.error('No puedes hacer más selecciones').dismissOthers();
        }
    };
    FormZonaImagenesComponent.prototype.mouseUp = function (evt) {
        var ClientRect = this.canvas.getBoundingClientRect();
        if (this.drag) {
            this.w = Math.round(evt.clientX - ClientRect.left) - this.x;
            this.h = Math.round(evt.clientY - ClientRect.top) - this.y;
            var randomHsl = Math.random() * 360;
            this.drag = false;
            // console.log(this.inputForm.get('items')['controls'][this.indexRespuestas].get('color').value)
            var color = this.inputForm.get('items')['controls'][this.indexRespuestas].get('color').value;
            this.inputForm.get('items')['controls'][this.indexRespuestas].get('posX').setValue(this.x);
            this.inputForm.get('items')['controls'][this.indexRespuestas].get('posY').setValue(this.y);
            this.inputForm.get('items')['controls'][this.indexRespuestas].get('ancho').setValue(this.w);
            this.inputForm.get('items')['controls'][this.indexRespuestas].get('alto').setValue(this.h);
            this.drawRectangle(evt, color);
            this.arrayCanvas.push({ pointX: this.x, pointY: this.y, width: this.w, height: this.h, color: 'hsla(' + randomHsl + ', 100%, 50%, 1)' });
            this.indexRespuestas++;
            if (this.indexRespuestas == this.seleccion) {
                this.flag = false;
                alertify.success('Se ha alcanzado el límite de selecciones').dismissOthers();
            }
        }
    };
    FormZonaImagenesComponent.prototype.drawRectangle = function (evt, color, id) {
        if (id === void 0) { id = 0; }
        var ctx = this.canvas.getContext('2d');
        ctx.clearRect(this.x, this.y, this.w, this.h);
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.setLineDash([6]);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    };
    FormZonaImagenesComponent.prototype.drawRectangleSelected = function (data) {
        this.x = data.posicion_x;
        this.y = data.posicion_y;
        this.w = data.ancho;
        this.h = data.alto;
        this.inputForm.get('items')['controls'][this.indexRespuestas].get('posX').setValue(this.x);
        this.inputForm.get('items')['controls'][this.indexRespuestas].get('posY').setValue(this.y);
        this.inputForm.get('items')['controls'][this.indexRespuestas].get('ancho').setValue(this.w);
        this.inputForm.get('items')['controls'][this.indexRespuestas].get('alto').setValue(this.h);
        this.drawRectangle(data, data.color);
        this.indexRespuestas++;
        if (this.indexRespuestas == this.seleccion) {
            this.flag = false;
            // alertify.success('Se ha alcanzado el límite de selecciones').dismissOthers();
        }
    };
    FormZonaImagenesComponent.prototype.cleanCanvas = function () {
        var _this = this;
        var canvas = this.myCanvas.nativeElement;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.arrayCanvas = [];
        this.indexRespuestas = 0;
        this.flag = true;
        this.inputForm.get('items').value.forEach(function (value, i) {
            _this.inputForm.get('items')['controls'][i].get('posX').setValue(null);
            _this.inputForm.get('items')['controls'][i].get('posY').setValue(null);
            _this.inputForm.get('items')['controls'][i].get('ancho').setValue(null);
            _this.inputForm.get('items')['controls'][i].get('alto').setValue(null);
        });
    };
    FormZonaImagenesComponent.prototype.getColor = function (color) {
        this.color = color;
        this.drag = true;
    };
    FormZonaImagenesComponent.prototype.drawCircle = function (evt) {
        if (this.drag) {
            //  var canvas = <HTMLCanvasElement> document.getElementById('canvas');
            var imageCanvas = this.myImage.nativeElement;
            var ClientRect = imageCanvas.getBoundingClientRect();
            var x = Math.round(evt.clientX - ClientRect.left);
            var y = Math.round(evt.clientY - ClientRect.top);
            var ctx = imageCanvas.getContext('2d');
            ctx.beginPath();
            ctx.setLineDash([0]);
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.stroke();
            this.drag = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myCanvas"),
        __metadata("design:type", Object)
    ], FormZonaImagenesComponent.prototype, "myCanvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myImage"),
        __metadata("design:type", Object)
    ], FormZonaImagenesComponent.prototype, "myImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormZonaImagenesComponent.prototype, "idPregunta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormZonaImagenesComponent.prototype, "successEvent", void 0);
    FormZonaImagenesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-zona-imagenes',
            template: __webpack_require__(/*! ./form-zona-imagenes.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.html"),
            styles: [__webpack_require__(/*! ./form-zona-imagenes.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/form-zona-imagenes/form-zona-imagenes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_carga_actividades_services_zona_imagenes_service__WEBPACK_IMPORTED_MODULE_4__["ZonaImagenesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormZonaImagenesComponent);
    return FormZonaImagenesComponent;
}());



/***/ }),

/***/ "./src/app/components/file-upload/file.upload.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/file-upload/file.upload.validators.ts ***!
  \******************************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");

function requiredFileType(type) {
    return function (control) {
        var archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__["Archivo"];
        var tipoArchivos;
        if (type == 0) {
            type = archivo.length - 1;
            tipoArchivos = archivo[type].formatos;
        }
        else {
            tipoArchivos = archivo[type].formatos;
        }
        var file = control.value;
        if (file) {
            var archivo_1 = file.name.split('.');
            var longitud = archivo_1.length;
            var extension = file.name.split('.')[longitud - 1].toLowerCase();
            if (tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/models/learning/trDatosPreguntas.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/learning/trDatosPreguntas.ts ***!
  \*****************************************************/
/*! exports provided: TrDatosPreguntas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrDatosPreguntas", function() { return TrDatosPreguntas; });
var TrDatosPreguntas = /** @class */ (function () {
    function TrDatosPreguntas() {
        this.nuevaPregunta = false;
        this.editar = false;
        this.valor = "";
        this.calificacion = null;
        this.incompleto = false;
    }
    return TrDatosPreguntas;
}());



/***/ }),

/***/ "./src/app/models/learning/trPregunta.ts":
/*!***********************************************!*\
  !*** ./src/app/models/learning/trPregunta.ts ***!
  \***********************************************/
/*! exports provided: TrPregunta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrPregunta", function() { return TrPregunta; });
var TrPregunta = /** @class */ (function () {
    function TrPregunta() {
    }
    return TrPregunta;
}());



/***/ }),

/***/ "./src/app/models/learning/trPreguntaOpcionMultiple.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/learning/trPreguntaOpcionMultiple.ts ***!
  \*************************************************************/
/*! exports provided: TrPreguntaOpcionMultiple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrPreguntaOpcionMultiple", function() { return TrPreguntaOpcionMultiple; });
var TrPreguntaOpcionMultiple = /** @class */ (function () {
    function TrPreguntaOpcionMultiple() {
    }
    return TrPreguntaOpcionMultiple;
}());



/***/ }),

/***/ "./src/app/models/reactiveEditor.ts":
/*!******************************************!*\
  !*** ./src/app/models/reactiveEditor.ts ***!
  \******************************************/
/*! exports provided: reactiveEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveEditor", function() { return reactiveEditor; });
var reactiveEditor = [
    ['Styles', 'Format', 'Font', 'FontSize'],
    //['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Image', 'Table', '-', 'TextColor', 'BGColor'],
    //['Format','Font','FontSize'],
    ['Italic']
];


/***/ }),

/***/ "./src/app/models/simpleEditor.ts":
/*!****************************************!*\
  !*** ./src/app/models/simpleEditor.ts ***!
  \****************************************/
/*! exports provided: simpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleEditor", function() { return simpleEditor; });
var simpleEditor = [
    //['Styles''Format''Font','FontSize'],
    //['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
    //['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    //['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor']
    ['Format', 'Font', 'FontSize'],
    ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Outdent', 'Indent', '-', 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Table', 'Link', 'Smiley', 'TextColor', 'BGColor']
];


/***/ })

}]);
//# sourceMappingURL=form-pregunta-main-form-pregunta-main-module.js.map