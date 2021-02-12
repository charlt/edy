(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-dashboard-dashboard-module~dashboard-docente-dashboard-docente-module"],{

/***/ "./src/app/components/graficas-persona/graficas-persona.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/graficas-persona/graficas-persona.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-encabezado-persona *ngIf=\"flag\" [idPersona]=\"idPersona\" [idRol]=\"idRol\"></app-encabezado-persona>\r\n<div class=\"row\" >\r\n  <div class=\"col-md-12\">  \r\n    <p *ngIf=\"idRol == 2 && persona\" ><b>Teléfono:</b> {{persona.celular}}</p>\r\n    <p *ngIf=\"idRol == 2 && persona\" ><b>Correo:</b> {{persona.email}}</p>\r\n    <div style=\"display: block\">\r\n      <div class=\"container boder rounded p-2\">\r\n        <canvas height=\"100\" *ngIf=\"show\" baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\r\n          [legend]=\"barChartLegend\" [chartType]=\"barChartType\" [colors]=\"chartColors\">\r\n        </canvas>\r\n      </div>\r\n      <div *ngIf=\"Accesos == null && !loading && !show\" class=\"container border rounded py-4 px-5 text-center\">\r\n        <h4>No se encontró información</h4>\r\n      </div>\r\n      <div *ngIf=\"loading\" class=\"container border rounded py-4 px-5 text-center\">\r\n        <h4><i class=\"fa fa-spin fa-spinner fa-lg\"></i> Cargando información</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form class=\"row\" [formGroup]=\"searchForm\" (ngSubmit)=\"buscarAccesos()\" *ngIf=\"flag\">\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\">Mes</label>\r\n      <select formControlName=\"month\" class=\"form-control\">\r\n        <option value=\"\" selected disabled hidden>Selecciona un mes</option>\r\n        <option [value]=\"i+1\" *ngFor=\"let month of months; let i = index;\">{{month}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label\">Año</label>\r\n      <select formControlName=\"year\" class=\"form-control\">\r\n        <option value=\"\" selected disabled hidden>Selecciona un año</option>\r\n        <option [value]=\"year\" *ngFor=\"let year of years; let i = index;\">{{year}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 mt-2\">\r\n    <button class=\"btn btn-primary pull-right\" [disabled]=\"searchForm.invalid\">Buscar</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/graficas-persona/graficas-persona.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/graficas-persona/graficas-persona.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFmaWNhcy1wZXJzb25hL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhZmljYXMtcGVyc29uYS9ncmFmaWNhcy1wZXJzb25hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/graficas-persona/graficas-persona.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/graficas-persona/graficas-persona.component.ts ***!
  \***************************************************************************/
/*! exports provided: GraficasPersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficasPersonaComponent", function() { return GraficasPersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _graficas_persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graficas-persona.service */ "./src/app/components/graficas-persona/graficas-persona.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_rol_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rol.service */ "./src/app/services/rol.service.ts");
/* harmony import */ var _encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../encabezado-persona/encabezado-persona.service */ "./src/app/components/encabezado-persona/encabezado-persona.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GraficasPersonaComponent = /** @class */ (function () {
    function GraficasPersonaComponent(_usuarioService, 
    // private _alumnosService: AlumnoService,
    route, _graficasService, formBuilder, _rolService, __encabezadoService) {
        this._usuarioService = _usuarioService;
        this.route = route;
        this._graficasService = _graficasService;
        this.formBuilder = formBuilder;
        this._rolService = _rolService;
        this.__encabezadoService = __encabezadoService;
        this.years = [2020, 2021, 2022, 2023, 2024, 2025];
        this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        this.Accesos = [];
        this.show = false;
        this.loading = false;
        this.flag = false;
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true,
            scales: {
                xAxes: [{ stacked: true }],
                yAxes: [{ stacked: true, ticks: { beginAtZero: true, stepSize: 2 } }]
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.chartColors = [{ backgroundColor: [], borderColor: [] }];
        // this.title= "Consulta de accesos";
        // this._usuarioService.pushBreadcum('Alumnos','/admin/alumno',1);
        // this._usuarioService.pushBreadcum(this.title,"",2); 
    }
    GraficasPersonaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._rolService.consultaRol(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.idRol = response['roles'][0]['rol_id'];
                var fecha = new Date();
                var mes = fecha.getMonth();
                var anio = fecha.getFullYear();
                _this.searchForm = _this.formBuilder.group({
                    month: [mes, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    year: [anio, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                });
                _this.buscarAccesos();
                if (_this.idRol == 2) {
                    _this.consultaPersona();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    GraficasPersonaComponent.prototype.consultaPersona = function () {
        var _this = this;
        this.__encabezadoService.consultaPersona(this.idPersona, 2).subscribe(function (response) {
            if (response && response['status']) {
                _this.persona = response['persona'];
                console.log(_this.persona);
            }
        }, function (error) {
            console.log(error);
        });
    };
    GraficasPersonaComponent.prototype.buscarAccesos = function () {
        var _this = this;
        this.Accesos = [];
        this.show = false;
        this.loading = true;
        this.barChartLabels = [];
        this.barChartData = [];
        this.month = this.searchForm.get('month').value;
        var year = this.searchForm.get('year').value;
        this._graficasService.consultaAccesosMes(this.idPersona, this.month, year).subscribe(function (response) {
            if (response && response['status']) {
                _this.Accesos = response['registros'];
                _this.setDatos();
                _this.loading = false;
            }
            else {
                _this.Accesos = null;
                _this.loading = false;
            }
            _this.flag = true;
        }, function (error) {
            console.log(error);
        });
    };
    GraficasPersonaComponent.prototype.setDatos = function () {
        var _this = this;
        var datos = [];
        this.chartColors[0]['backgroundColor'] = [];
        this.chartColors[0]['borderColor'] = [];
        this.Accesos.forEach(function (acceso) {
            var color = "hsla(" + ~~(360 * Math.random()) + "," + (25 + 70 * Math.random()) + "%," +
                (70 + 10 * Math.random()) + "%,1)";
            _this.barChartLabels.push('Día: ' + acceso.dia);
            datos.push(acceso.accesos);
            _this.chartColors[0]['backgroundColor'].push(color);
            _this.chartColors[0]['borderColor'].push(color);
        });
        console.log(this.chartColors);
        this.barChartData.push({ data: datos, label: "Accesos en el mes de " + this.months[parseInt(this.month) - 1] });
        this.show = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasPersonaComponent.prototype, "idPersona", void 0);
    GraficasPersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'graficas-persona',
            template: __webpack_require__(/*! ./graficas-persona.component.html */ "./src/app/components/graficas-persona/graficas-persona.component.html"),
            styles: [__webpack_require__(/*! ./graficas-persona.component.scss */ "./src/app/components/graficas-persona/graficas-persona.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _graficas_persona_service__WEBPACK_IMPORTED_MODULE_3__["GraficasPersonaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_rol_service__WEBPACK_IMPORTED_MODULE_5__["RolService"],
            _encabezado_persona_encabezado_persona_service__WEBPACK_IMPORTED_MODULE_6__["EncabezadoPersonaService"]])
    ], GraficasPersonaComponent);
    return GraficasPersonaComponent;
}());



/***/ }),

/***/ "./src/app/components/graficas-persona/graficas-persona.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/graficas-persona/graficas-persona.module.ts ***!
  \************************************************************************/
/*! exports provided: GraficasPersonaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficasPersonaModule", function() { return GraficasPersonaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graficas_persona_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graficas-persona.component */ "./src/app/components/graficas-persona/graficas-persona.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GraficasPersonaModule = /** @class */ (function () {
    function GraficasPersonaModule() {
    }
    GraficasPersonaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_graficas_persona_component__WEBPACK_IMPORTED_MODULE_3__["GraficasPersonaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_5__["EncabezadoPersonaModule"]
            ],
            exports: [_graficas_persona_component__WEBPACK_IMPORTED_MODULE_3__["GraficasPersonaComponent"]]
        })
    ], GraficasPersonaModule);
    return GraficasPersonaModule;
}());



/***/ }),

/***/ "./src/app/components/graficas-persona/graficas-persona.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/graficas-persona/graficas-persona.service.ts ***!
  \*************************************************************************/
/*! exports provided: GraficasPersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficasPersonaService", function() { return GraficasPersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficasPersonaService = /** @class */ (function () {
    function GraficasPersonaService(httpClient) {
        this.httpClient = httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    GraficasPersonaService.prototype.consultaAccesosMes = function (id_persona, mes, anio) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_persona', id_persona)
            .set('mes', mes)
            .set('', anio);
        return this.httpClient.get(this.url + 'general/usuario/consultaAccesosMes.php', { params: params });
    };
    GraficasPersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GraficasPersonaService);
    return GraficasPersonaService;
}());



/***/ }),

/***/ "./src/app/services/rol.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rol.service.ts ***!
  \*****************************************/
/*! exports provided: RolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolService", function() { return RolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolService = /** @class */ (function () {
    function RolService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    RolService.prototype.consultaRol = function (jwt, id_persona) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('jwt', jwt).set('id_persona', id_persona);
        return this._httpClient.get(this.url + 'general/usuarioRol/consulta.php', { params: params });
    };
    RolService.prototype.setDatos = function (jwt, id_persona, id_usuario, id_rol, clave_usuario, tipo) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('id_persona', id_persona);
        formData.append('id_usuario', id_usuario);
        formData.append('id_rol', id_rol);
        formData.append('clave_usuario', clave_usuario);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'general/usuarioRol/elimina.php', formData);
        }
        else if (tipo == 1) {
            return this._httpClient.post(this.url + 'general/usuarioRol/crea.php', formData);
        }
    };
    RolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RolService);
    return RolService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-dashboard-dashboard-module~dashboard-docente-dashboard-docente-module.js.map