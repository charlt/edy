(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-alumno-signup-alumno-module"],{

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


/***/ }),

/***/ "./src/app/signup-alumno/signup-alumno-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/signup-alumno/signup-alumno-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SignupAlumnoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAlumnoRoutingModule", function() { return SignupAlumnoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_alumno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-alumno.component */ "./src/app/signup-alumno/signup-alumno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _signup_alumno_component__WEBPACK_IMPORTED_MODULE_2__["SignupAlumnoComponent"] }
];
var SignupAlumnoRoutingModule = /** @class */ (function () {
    function SignupAlumnoRoutingModule() {
    }
    SignupAlumnoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupAlumnoRoutingModule);
    return SignupAlumnoRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup-alumno/signup-alumno.component.html":
/*!************************************************************!*\
  !*** ./src/app/signup-alumno/signup-alumno.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenido\" id=\"particles-js\"></div><!-- /.particles div -->\r\n  <div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <div class=\"col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12\">\r\n          <div class=\"card mt-3\">\r\n            <div class=\"card-header ml-4 mr-4 bg-white text-center\">\r\n              <div class=\"text-center\">\r\n                <img [src]=\"universidad.logo\" width=\"200px\">\r\n              </div>\r\n              <h4 class=\"mt-4 mb-4\">Registro </h4>\r\n            </div>\r\n            <div class=\"card-body ml-4 mr-4 mt-2 mb-3\">\r\n              <div *ngIf=\"paso == 1\">\r\n                <form [formGroup]=\"matriculaForm\" (ngSubmit)=\"enviarMatricula()\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input_matricula\">Matrícula / correo</label>\r\n                    <input formControlName=\"matricula\" type=\"text\" class=\"form-control\" id=\"input_matricula\" placeholder=\"Matrícula\">\r\n                  </div>\r\n                  <button class=\"btn btn-success btn-block mt-3\" type=\"submit\" [disabled]=\"matriculaForm.invalid\">Verificar matrícula</button>\r\n                  <div *ngIf=\"showAlert\" class=\"alert alert-danger text-center mt-3\">No se encontró la matrícula</div>\r\n                </form>\r\n                <form class=\"mt-3\" *ngIf=\"flag\" [formGroup]=\"signupForm\" (ngSubmit)=\"enviarDatos()\">\r\n                  <div *ngFor=\"let item of Data; let i = index;\" class=\"mt-2\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"input_{{i}}\">{{item['label']}}</label>\r\n                      <input [formControlName]=\"item['control']\" name=\"{{item['control']}}\"\r\n                      onKeyUp=\"if(document.getElementById(this.id).name == 'curp'){document.getElementById(this.id).value=document.getElementById(this.id).value.toUpperCase()}\"\r\n                      [type]=\"item['type']\" class=\"form-control bg-white\" id=\"input_{{i}}\" [placeholder]=\"item['label']\">\r\n                      <p class=\"p-0 m-0\"><span *ngIf=\"item['error'] && sF[item['control']].invalid && sF[item['control']].touched\" class=\"invalidText\">\r\n                        {{ item['error'] | translate }}\r\n                      </span></p>\r\n                      <span *ngIf=\"item['label'] == 'CURP'\"><a  href=\"https://www.gob.mx/curp/\" target=\"_blank\" style=\"font-size: small\">¿No tienes tu CURP? Da clic aquí</a></span>\r\n                    </div>\r\n                  </div>\r\n                  <button class=\"btn btn-success btn-block mt-3\" type=\"submit\" [disabled]=\"signupForm.invalid\">Guardar información</button>\r\n                </form>\r\n              </div>\r\n              <div *ngIf=\"paso == 2\">\r\n                <div *ngIf=\"alumnoValidado ==1\" class=\"alert alert-success text-center\">\r\n                    <h4><i class=\"fa fa-check\"></i></h4>\r\n                    <p>Tu información ya ha sido actualizada exitosamente</p>\r\n                </div>\r\n                <div>\r\n                  \r\n                  <p>¡Haz completado tu registro exitosamente! La información para acceder es la siguiente: </p>\r\n                  <p> <b>Usuario: </b> {{usuario}} </p>\r\n                  <p> <b>Password: </b> {{password}} </p>\r\n                  <p>Da clic en el botón para acceder a tu plataforma</p>\r\n                </div>\r\n                <button class=\"btn btn-primary btn-block mt-3\" (click)=\"ingresoPlataforma()\">Ingresar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup-alumno/signup-alumno.component.scss":
/*!************************************************************!*\
  !*** ./src/app/signup-alumno/signup-alumno.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#particles-js {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #292f33;\n  background: linear-gradient(to right, #120024 0%, #292f33, #234953 63%, #21505c 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#020024', endColorstr='#21505c',GradientType=1 ); }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWFsdW1uby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xccGFydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAtYWx1bW5vL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBa0I7RUFHbEIsc0ZBQXNGO0VBQ3RGLG9IQUFtSCxFQUN0SDs7QUNSRDtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1hbHVtbm8vc2lnbnVwLWFsdW1uby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYXJ0aWNsZXMtanMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiMyOTJmMzM7IFxyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzEyMDAyNCAgMCUsIzI5MmYzMyAgMzAlLCAjMjM0OTUzICA2MyUsICMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMxMjAwMjQgIDAlLCMyOTJmMzMgIDMwJSwgIzIzNDk1MyAgNjMlLCMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEyMDAyNCAgMCUsIzI5MmYzMyAsIzIzNDk1MyAgNjMlLCMyMTUwNWMgIDEwMCUpOyBcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDIwMDI0JywgZW5kQ29sb3JzdHI9JyMyMTUwNWMnLEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuIiwiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/signup-alumno/signup-alumno.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/signup-alumno/signup-alumno.component.ts ***!
  \**********************************************************/
/*! exports provided: SignupAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAlumnoComponent", function() { return SignupAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var _models_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/particles */ "./src/app/models/particles.ts");
/* harmony import */ var _services_externos_otros_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/externos/otros-login.service */ "./src/app/services/externos/otros-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupAlumnoComponent = /** @class */ (function () {
    function SignupAlumnoComponent(formBuilder, _usuarioService, router, _otrosLoginService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this.router = router;
        this._otrosLoginService = _otrosLoginService;
        this.flag = false;
        this.Data = [
            { label: 'Nombre', control: 'nombre', required: 'null', type: 'text', disabled: true },
            { label: 'Primer apellido', control: 'primer_apellido', required: 'null', type: 'text', disabled: true },
            { label: 'Segundo apellido', control: 'segundo_apellido', required: 'null', type: 'text', disabled: true },
            {
                label: 'Correo electrónico', control: 'email', required: 'required', type: 'email', disabled: false,
                pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: 'fmErrNumber'
            },
            {
                label: 'CURP', control: 'curp', required: 'required', type: 'text', disabled: false,
                pattern: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
                error: 'fmErrCURP'
            },
            { label: 'Teléfono', control: 'celular', required: 'required', type: 'number', disabled: false, error: 'fmErrNumber' },
        ];
        this.showAlert = false;
        this.paso = 1;
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__["universidad"];
    }
    SignupAlumnoComponent.prototype.ngOnInit = function () {
        this.matriculaForm = this.formBuilder.group({
            matricula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        particlesJS("particles-js", _models_particles__WEBPACK_IMPORTED_MODULE_6__["particles"]);
        this.getIpOs();
        this.navegador = this.browser();
    };
    Object.defineProperty(SignupAlumnoComponent.prototype, "sF", {
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupAlumnoComponent.prototype.enviarMatricula = function () {
        var _this = this;
        this.flag = false;
        this.matriculaForm.setErrors({ invalid: true });
        this.matricula = this.matriculaForm.get('matricula').value;
        this.signupForm = this.formBuilder.group({});
        this._usuarioService.consultaUsuarioPrimeraVez(this.matricula).subscribe(function (response) {
            if (response && response['status']) {
                _this.showAlert = false;
                console.log(response);
                _this.persona = response['persona'];
                _this.idPersona = _this.persona['persona_id'];
                _this.idRol = response['persona'].rol_id;
                _this.alumnoValidado = parseInt(response['usuarioActualizado']);
                if (_this.alumnoValidado == 1) {
                    _this.paso = 1;
                    // console.log('response!');
                    // console.log(response)
                    _this.usuario = response['persona'].usuario;
                    _this.password = response['persona'].clave;
                }
                _this.Data.forEach(function (item) {
                    if (item.pattern) {
                        _this.signupForm.addControl(item['control'], new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: item['disabled'] }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][item['required']], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(item['pattern'])])));
                    }
                    else {
                        _this.signupForm.addControl(item['control'], new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: item['disabled'] }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][item['required']]));
                    }
                    _this.signupForm.get(item['control']).setValue(_this.persona[item['control']]);
                    _this.signupForm.get(item['control']).markAsTouched({ onlySelf: true });
                });
                _this.flag = true;
            }
            else {
                _this.showAlert = true;
                setTimeout(function () {
                    _this.showAlert = false;
                }, 3000);
            }
        }, function (error) {
            console.log(error);
        });
    };
    SignupAlumnoComponent.prototype.enviarDatos = function () {
        var _this = this;
        var color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_3__["randomColor"])();
        this.signupForm.setErrors({ incorrect: true });
        this.usuario = this.signupForm.get('email').value;
        var Form = this.signupForm.value;
        for (var i = 0; i < 3; i++) {
            Form[this.Data[i]['control']] = this.persona[this.Data[i]['control']];
        }
        var data = { rfc: '', fecha_nacimiento: '', id_sexo: 0, id_persona: this.persona['persona_id'], matricula: this.matricula, color: color, id_rol: this.persona['rol_id'] };
        var formData = Object.entries(data);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var _a = formData_1[_i], name_1 = _a[0], value = _a[1];
            Form[name_1] = value;
        }
        Form = Object.entries(Form);
        this._usuarioService.recuperaUsuario(Form).subscribe(function (response) {
            if (response && response['status']) {
                console.log(response);
                _this.datosAlumno = Form;
                _this.usuario = response['usuario'];
                _this.password = response['password'];
                alertify.success(response['msg']).dismissOthers();
                _this.paso = 2;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SignupAlumnoComponent.prototype.ingresoPlataforma = function () {
        var _this = this;
        // localStorage.setItem('openpage', Date.now().toString());
        if (this.os && this.navegador) {
            this._usuarioService.generateJWTid(this.idPersona, this.idRol).subscribe(function (response) {
                var jwt = response['jwt'];
                var identity = JSON.stringify(response['user']);
                if (response && response['status']) {
                    _this._usuarioService.guardarAcceso(jwt, _this.ipAddress, _this.os, _this.navegador).subscribe(function (response) {
                        console.log(response);
                        if (response && response['status']) {
                            localStorage.setItem('jwt', jwt);
                            localStorage.setItem('identity', identity);
                            _this.router.navigate(['/learning/home']);
                            console.log(response);
                            // alertify.success(this.bienvenida)
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    // } 
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    SignupAlumnoComponent.prototype.getIpOs = function () {
        var _this = this;
        this._otrosLoginService.getIPAddress().subscribe(function (response) {
            _this.ipAddress = response['ip'];
            if (navigator.appVersion.indexOf("Win") != -1)
                _this.os = "Windows";
            if (navigator.appVersion.indexOf("Mac") != -1)
                _this.os = "MacOS";
            if (navigator.appVersion.indexOf("X11") != -1)
                _this.os = "UNIX";
            if (navigator.appVersion.indexOf("Linux") != -1)
                _this.os = "Linux";
            if (navigator.appVersion.indexOf("Android") != -1)
                _this.os = "Android";
        });
    };
    SignupAlumnoComponent.prototype.browser = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null)
            M.splice(1, 1, tem[1]);
        return M.join(' ');
    };
    SignupAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-alumno',
            template: __webpack_require__(/*! ./signup-alumno.component.html */ "./src/app/signup-alumno/signup-alumno.component.html"),
            styles: [__webpack_require__(/*! ./signup-alumno.component.scss */ "./src/app/signup-alumno/signup-alumno.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_externos_otros_login_service__WEBPACK_IMPORTED_MODULE_7__["OtrosLoginService"]])
    ], SignupAlumnoComponent);
    return SignupAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/signup-alumno/signup-alumno.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/signup-alumno/signup-alumno.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupAlumnoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAlumnoModule", function() { return SignupAlumnoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-alumno-routing.module */ "./src/app/signup-alumno/signup-alumno-routing.module.ts");
/* harmony import */ var _signup_alumno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-alumno.component */ "./src/app/signup-alumno/signup-alumno.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SignupAlumnoModule = /** @class */ (function () {
    function SignupAlumnoModule() {
    }
    SignupAlumnoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_signup_alumno_component__WEBPACK_IMPORTED_MODULE_3__["SignupAlumnoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupAlumnoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ],
            exports: [_signup_alumno_component__WEBPACK_IMPORTED_MODULE_3__["SignupAlumnoComponent"]]
        })
    ], SignupAlumnoModule);
    return SignupAlumnoModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-alumno-signup-alumno-module.js.map