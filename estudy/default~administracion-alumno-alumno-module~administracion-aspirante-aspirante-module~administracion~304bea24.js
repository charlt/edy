(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~304bea24"],{

/***/ "./src/app/components/persona/persona.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/persona/persona.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col col-xl-12 col-lg-12\">\r\n    <form [formGroup]=\"personaForm\" (ngSubmit)=\"enviarInformacion()\">\r\n      <div class=\"row\">             \r\n        <div class=\"col-md-6\">           \r\n          <div class=\"form-group\">                               \r\n            <label class=\"control-label\">*{{'nombreUsuario' | translate}}</label>\r\n            <input formControlName=\"nombreUsuario\" class=\"form-control\" placeholder=\"{{'nombreUsuario' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n            <span class=\"invalidText\" *ngIf=\"f.nombreUsuario.invalid && f.nombreUsuario.touched\">\r\n                {{'fmErrText' | translate}}\r\n            </span>       \r\n          </div> \r\n                   \r\n          <div class=\"form-group\">                               \r\n              <label class=\"control-label\">*{{'apMatUsuario' | translate}}</label>\r\n              <input formControlName=\"apMatUsuario\" class=\"form-control\" placeholder=\"{{'apMatUsuario' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n              <span class=\"invalidText\" *ngIf=\"f.apMatUsuario.invalid && f.apMatUsuario.touched\">\r\n                  {{'fmErrNumber' | translate}}\r\n              </span>            \r\n          </div>  \r\n          <div class=\"form-group\">                               \r\n            <label class=\"control-label\">*{{'correoUsuario' | translate}}</label>\r\n            <input formControlName=\"correoUsuario\" class=\"form-control\" placeholder=\"{{'correoUsuario' | translate}}\" type=\"email\" required autocomplete=\"off\">\r\n            <span class=\"invalidText\" *ngIf=\"f.correoUsuario.invalid && f.correoUsuario.touched\">\r\n                {{'fmErrEmail' | translate}}\r\n            </span>            \r\n          </div>\r\n          <div class=\"form-group\">                               \r\n            <label class=\"control-label\">*{{'celUsuario' | translate}}</label>\r\n            <input formControlName=\"celUsuario\" class=\"form-control\" placeholder=\"{{'celUsuario' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n            <span class=\"invalidText\" *ngIf=\"f.celUsuario.invalid && f.celUsuario.touched\">\r\n                {{'fmErrNumber' | translate}}\r\n            </span>            \r\n        </div>\r\n        <!--div class=\"form-group\">\r\n          <label class=\"control-label\">*Clave de elector</label>\r\n          <input  class=\"form-control\" formControlName=\"claveElector\" >\r\n          <span class=\"invalidText\" *ngIf=\"f.claveElector.invalid && f.claveElector.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>\r\n          </div-->\r\n          \r\n          <!--button (click)=\"limpiarForm()\" type=\"button\" class=\"btn btn-info pull-left\">Limpiar formulario</button-->\r\n        </div>\r\n        <div class=\"col-md-6\">        \r\n          <div class=\"form-group\">                               \r\n            <label class=\"control-label\">*{{'apPatUsuario' | translate}}</label>\r\n            <input formControlName=\"apPatUsuario\" class=\"form-control\" placeholder=\"{{'apPatUsuario' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n            <span class=\"invalidText\" *ngIf=\"f.apPatUsuario.invalid && f.apPatUsuario.touched\">\r\n                {{'fmErrText' | translate}}\r\n            </span>            \r\n        </div> \r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\"*ngIf=\"tipoForm != 0\">*{{'rfcUsuario' | translate}}</label>\r\n            <label class=\"control-label\"*ngIf=\"tipoForm == 0\">{{'rfcUsuario' | translate}}</label>\r\n            <!--^([A-ZÑ\\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$-->\r\n            <input pattern=\"^([A-ZÑ\\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-ZÑ\\x26]|[0-9])*)?$\"\r\n            type=\"text\" class=\"form-control\" formControlName=\"rfcUsuario\" placeholder=\"{{'rfcUsuario' | translate}}\"\r\n            id=\"rfc\" onKeyUp=\"document.getElementById(this.id).value=document.getElementById(this.id).value.toUpperCase()\">\r\n            <span class=\"invalidText\" *ngIf=\"f.rfcUsuario.invalid && f.rfcUsuario.touched\">\r\n                {{'fmErrRFC' | translate}}\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" *ngIf=\"tipoForm != 0\">*{{'curpUsuario' | translate}}</label>\r\n            <label class=\"control-label\" *ngIf=\"tipoForm == 0\">{{'curpUsuario' | translate}}</label>\r\n            <input pattern=\"^([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)$\"\r\n            type=\"text\" class=\"form-control\" formControlName=\"curpUsuario\" placeholder=\"{{'curpUsuario' | translate}}\"\r\n            id=\"curp\" onKeyUp=\"document.getElementById(this.id).value=document.getElementById(this.id).value.toUpperCase()\" (blur)=\"obtieneFechaN(0)\">\r\n            <span class=\"invalidText\" *ngIf=\"f.curpUsuario.invalid && f.curpUsuario.touched\">\r\n                {{'fmErrCURP' | translate}}\r\n            </span>\r\n          </div> \r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\">{{'fnUsuario' | translate}}</label>\r\n              <input type=\"date\" class=\"form-control\" formControlName=\"fnUsuario\" (blur)=\"obtieneFechaN(1)\">\r\n              <span class=\"invalidText\" *ngIf=\"f.fnUsuario.invalid && f.fnUsuario.touched\">\r\n                  {{'fmErrDate' | translate}}\r\n              </span>\r\n          </div>                                                    \r\n          \r\n          <!-- <div class=\"form-group\">                               \r\n              <label class=\"control-label\">{{'sexoUsuario' | translate}}</label><br>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input formControlName=\"sexoUsuario\" type=\"radio\" id=\"hombre\" name=\"sexoUsuario\" class=\"custom-control-input\" value=\"1\">\r\n                <label class=\"custom-control-label text-dark\" for=\"hombre\">Hombre</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio custom-control-inline\">\r\n                <input formControlName=\"sexoUsuario\" type=\"radio\" id=\"mujer\" name=\"sexoUsuario\" class=\"custom-control-input\" value=\"2\">\r\n                <label class=\"custom-control-label text-dark\" for=\"mujer\">Mujer</label>\r\n              </div>      \r\n              <br>     \r\n              <span class=\"invalidText\" *ngIf=\"f.sexoUsuario.invalid && f.sexoUsuario.touched\">\r\n                  {{'fmOptSelect' | translate}}\r\n              </span>            \r\n          </div> -->\r\n          \r\n          <br>                          \r\n          <button type=\"submit\" class=\"btn btn-success pull-right\">{{'fmSave' | translate}}</button>\r\n        </div>        \r\n\r\n      </div>\r\n    </form>\r\n  </div><br>"

/***/ }),

/***/ "./src/app/components/persona/persona.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/persona/persona.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb25hL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYS9wZXJzb25hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/persona/persona.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/persona/persona.component.ts ***!
  \*********************************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _persona_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persona.service */ "./src/app/components/persona/persona.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_inscripcion_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/inscripcion/services/solicitud.service */ "./src/app/inscripcion/services/solicitud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonaComponent = /** @class */ (function () {
    function PersonaComponent(formBuilder, _personaService, _solicitudService, router, _usuarioService, route, _translate) {
        this.formBuilder = formBuilder;
        this._personaService = _personaService;
        this._solicitudService = _solicitudService;
        this.router = router;
        this._usuarioService = _usuarioService;
        this.route = route;
        this._translate = _translate;
        this.disabled = false;
        this.fecha = " ";
        this.registroExitoso = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._translate.setDefaultLang('es');
        this.idPersona = this.route.snapshot.paramMap.get('id');
    }
    Object.defineProperty(PersonaComponent.prototype, "f", {
        get: function () { return this.personaForm.controls; },
        enumerable: true,
        configurable: true
    });
    PersonaComponent.prototype.ngOnInit = function () {
        if (this.idRol == 2) {
            this.disabled = true;
        }
        this.jwt = this._usuarioService.getJWT();
        this.usuarioRolId = this._usuarioService.getIdentity().rol_id;
        if (this.usuarioRolId == 1) {
            this.personaForm = this.formBuilder.group({
                nombreUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apPatUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apMatUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                fnUsuario: [{ value: '', disabled: this.disabled }],
                correoUsuario: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                celUsuario: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                rfcUsuario: [{ value: '', disabled: this.disabled }],
                curpUsuario: [{ value: '', disabled: this.disabled }],
            });
            if (this.tipoForm == 0) {
                this.personaForm.controls.rfcUsuario.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
                this.personaForm.controls.rfcUsuario.reset();
                this.personaForm.get('rfcUsuario').setValue("");
                this.personaForm.controls.curpUsuario.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
                this.personaForm.controls.curpUsuario.reset();
                this.personaForm.get('curpUsuario').setValue("");
            }
        }
        else {
            this.personaForm = this.formBuilder.group({
                nombreUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apPatUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apMatUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                fnUsuario: [{ value: '', disabled: this.disabled }],
                correoUsuario: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                celUsuario: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                curpUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                rfcUsuario: [{ value: '', disabled: this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
            if (this.tipoForm == 0) {
                this.personaForm.controls.rfcUsuario.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
                this.personaForm.controls.rfcUsuario.reset();
                this.personaForm.get('rfcUsuario').setValue("");
                this.personaForm.controls.curpUsuario.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]["null"]);
                this.personaForm.controls.curpUsuario.reset();
                this.personaForm.get('curpUsuario').setValue("");
            }
        }
        this.consultaPersona();
    };
    PersonaComponent.prototype.ngOnChanges = function () {
        if (this._persona) {
            this.personaForm.get("nombreUsuario").setValue(this._persona.nombre);
            this.personaForm.get("apPatUsuario").setValue(this._persona.primer_apellido);
            this.personaForm.get("apMatUsuario").setValue(this._persona.segundo_apellido);
            // this.personaForm.get("sexoUsuario").setValue(this._persona.sexo_id);
            this.personaForm.get("rfcUsuario").setValue(this._persona.rfc);
            this.personaForm.get("correoUsuario").setValue(this._persona.email);
            this.personaForm.get("curpUsuario").setValue(this._persona.curp);
            this.personaForm.get("fnUsuario").setValue(this._persona.fecha_nacimiento);
            this.personaForm.get("celUsuario").setValue(this._persona.celular);
            //this.personaForm.get("claveElector").setValue(this._persona.clave_elector);
        }
    };
    PersonaComponent.prototype.consultaPersona = function () {
        var _this = this;
        this._solicitudService.consultaPersona(this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.personaConsulta = response['persona'];
                if (_this.personaConsulta) {
                    _this.personaForm.get("nombreUsuario").setValue(_this.personaConsulta.nombre);
                    _this.personaForm.get("apPatUsuario").setValue(_this.personaConsulta.primer_apellido);
                    _this.personaForm.get("apMatUsuario").setValue(_this.personaConsulta.segundo_apellido);
                    // this.personaForm.get("sexoUsuario").setValue(this.personaConsulta.sexo_id);
                    _this.personaForm.get("rfcUsuario").setValue(_this.personaConsulta.rfc);
                    _this.personaForm.get("correoUsuario").setValue(_this.personaConsulta.email);
                    _this.personaForm.get("curpUsuario").setValue(_this.personaConsulta.curp);
                    _this.personaForm.get("fnUsuario").setValue(_this.personaConsulta.fecha_nacimiento);
                    _this.personaForm.get("celUsuario").setValue(_this.personaConsulta.celular);
                    //this.personaForm.get("claveElector").setValue(this.personaConsulta.clave_elector);
                }
                // if(this.personaConsulta.curp != null && this.personaConsulta.fecha_nacimiento == "0000-00-00" || !this.personaConsulta.fecha_nacimiento ){
                if (_this.personaConsulta) {
                    _this.obtieneFechaN(0);
                }
                // }
            }
        }, function (error) {
            console.log(error);
        });
    };
    PersonaComponent.prototype.obtieneFechaN = function (tipo) {
        var dia;
        var mes;
        var _año;
        var año;
        var _curp = this.personaForm.get('curpUsuario').value;
        if (_curp) {
            _año = _curp[4] + _curp[5];
            if (_año <= 20)
                this.año = 20 + _año;
            else
                this.año = 19 + _año;
            this.mes = _curp[6] + _curp[7];
            this.dia = _curp[8] + _curp[9];
        }
        if (tipo == 0) {
            if (this.personaConsulta.fecha_nacimiento == null || this.personaConsulta.fecha_nacimiento == "0000-00-00") {
                this.fecha = this.año + "-" + this.mes + "-" + this.dia;
                this.personaForm.get("fnUsuario").setValue(this.fecha);
            }
            else {
                this.fecha = null;
            }
        }
        else if (tipo == 1) {
            this.fecha = null;
        }
    };
    PersonaComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.personaForm.invalid) {
            Object.keys(this.personaForm.controls).forEach(function (controlKey) {
                _this.personaForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (this.personaForm.get('curpUsuario').value) {
            var sexo = void 0;
            var _curp = this.personaForm.get('curpUsuario').value;
            sexo = _curp[10];
            if (sexo == "M") {
                this.id_sexo = 2;
            }
            else if (sexo == "H") {
                this.id_sexo = 1;
            }
        }
        else if (this.tipoForm == 0) {
            this.id_sexo = 0;
        }
        else
            this.id_sexo = null;
        if (this.personaForm.get("fnUsuario").value == "") {
            this.fecha = this.año + "-" + this.mes + "-" + this.dia;
            this.personaForm.get("fnUsuario").setValue(this.fecha);
        }
        alertify.confirm('', '¿Deseas guardar y terminar?', function () {
            var _this = this;
            this._personaService.modificaPersona(this.personaForm, this.idPersona, this.id_sexo, this.fecha, this.jwt).subscribe(//nuevo usuario
            function (//nuevo usuario
            response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    if (_this.idRol == 1) {
                        _this.router.navigate(['admin/usuario/consulta']);
                    }
                    else {
                        var usuarioRolId = _this._usuarioService.getIdentity();
                        usuarioRolId.nombre = _this.personaForm.get('nombreUsuario').value;
                        usuarioRolId.primer_apellido = _this.personaForm.get('apPatUsuario').value;
                        usuarioRolId.segundo_apellido = _this.personaForm.get('apMatUsuario').value;
                        localStorage.setItem('usuarioRolId', JSON.stringify(usuarioRolId));
                    }
                    _this.registroExitoso.emit({
                        'status': 1, 'idPersona': _this.idPersona
                    }); // se pondrá nuevo id del response 
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
            if (this.personaForm.invalid) {
                return;
            }
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    PersonaComponent.prototype.limpiarForm = function () {
        this.personaForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonaComponent.prototype, "tipoForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonaComponent.prototype, "_persona", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PersonaComponent.prototype, "idPersona", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PersonaComponent.prototype, "idRol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonaComponent.prototype, "registroExitoso", void 0);
    PersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-persona',
            template: __webpack_require__(/*! ./persona.component.html */ "./src/app/components/persona/persona.component.html"),
            styles: [__webpack_require__(/*! ./persona.component.scss */ "./src/app/components/persona/persona.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _persona_service__WEBPACK_IMPORTED_MODULE_2__["PersonaService"],
            src_app_inscripcion_services_solicitud_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], PersonaComponent);
    return PersonaComponent;
}());



/***/ }),

/***/ "./src/app/components/persona/persona.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/persona/persona.module.ts ***!
  \******************************************************/
/*! exports provided: PersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaModule", function() { return PersonaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _persona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persona.component */ "./src/app/components/persona/persona.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PersonaModule = /** @class */ (function () {
    function PersonaModule() {
    }
    PersonaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_persona_component__WEBPACK_IMPORTED_MODULE_2__["PersonaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [_persona_component__WEBPACK_IMPORTED_MODULE_2__["PersonaComponent"]]
        })
    ], PersonaModule);
    return PersonaModule;
}());



/***/ }),

/***/ "./src/app/components/persona/persona.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/persona/persona.service.ts ***!
  \*******************************************************/
/*! exports provided: PersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
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




var PersonaService = /** @class */ (function () {
    function PersonaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PersonaService.prototype.modificaPersona = function (persona, id_persona, id_sexo, fechaN, jwt) {
        var formData = new FormData();
        formData.append('nombre', persona.get('nombreUsuario').value);
        formData.append('primer_apellido', persona.get('apPatUsuario').value);
        formData.append('segundo_apellido', persona.get('apMatUsuario').value);
        formData.append('id_sexo', id_sexo);
        formData.append('email', persona.get('correoUsuario').value);
        formData.append('celular', persona.get('celUsuario').value);
        formData.append('id_persona', id_persona);
        if (persona.get('rfcUsuario').value)
            formData.append('rfc', persona.get('rfcUsuario').value);
        else
            formData.append('rfc', "");
        if (persona.get('curpUsuario').value)
            formData.append('curp', persona.get('curpUsuario').value);
        else
            formData.append('curp', "");
        // fechaN = new Date(fechaN);
        // persona.get('fnUsuario').value = new Date(persona.get('fnUsuario').value)
        console.log(fechaN);
        console.log(persona.get('fnUsuario').value);
        // if(fechaN == 'undefined-undefined-undefined' && persona.get('fnUsuario').value != 'undefined-undefined-undefined'){
        //   formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
        // }else 
        if (fechaN != 'undefined-undefined-undefined' && persona.get('fnUsuario').value == 'undefined-undefined-undefined') {
            formData.append('fecha_nacimiento', fechaN);
        }
        else if (fechaN == 'undefined-undefined-undefined' && persona.get('fnUsuario').value == 'undefined-undefined-undefined') {
            formData.append('fecha_nacimiento', null);
        }
        else {
            formData.append('fecha_nacimiento', persona.get('fnUsuario').value);
        }
        console.log();
        return this._httpClient.post(this.url + 'admin/personas/edita.php', formData);
    };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonaService);
    return PersonaService;
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



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~304bea24.js.map