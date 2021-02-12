(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~blank-page-blank-page-module~inscripcion-terminos-terminos-module"],{

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

/***/ "./src/app/components/plan-estudio/plan-estudio.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/plan-estudio/plan-estudio.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"planEstudios\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n        <!--h5>{{carrera.carrera}}</h5>\r\n        <h4>{{planEstudios.plan_estudio}}</h4-->\r\n          <h4>Plan de estudios</h4>\r\n    </div>    \r\n  </div>\r\n  <div class=\"row plan-container\" >\r\n    <div class=\"col-md-12\" >\r\n      <div class=\"row orden_jerarquico alert-secondary\" *ngFor=\"let _ordenJerarquico of ordenJerarquico\">\r\n        <div class=\"col-md-1 d-flex card-orden-jerarquico\">\r\n          <p class=\"text-center align-self-center\"><b>{{_ordenJerarquico.orden_jerarquico_descripcion}}</b>\r\n            <br>\r\n            <!-- <i class=\"fa fa-accion fa-trash\" (click)=\"eliminaOrdenJerarquico(_ordenJerarquico.orden_jerarquico_id)\" ></i></p> -->\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\" *ngFor=\"let _asignatura of _ordenJerarquico.asignaturas\">\r\n              <div class=\"card text-white mb-3 card-asignatura hover\" role=\"alert\" \r\n                (click)=\"asignaturaId(_asignatura.asignatura_id)\">\r\n                <!-- <i class=\"fa fa-accion fa-pencil fa-edita\"></i>\r\n                <i class=\"fa fa-accion fa-trash fa-elimina\"></i> -->\r\n                <div class=\"card-body\">\r\n                  <p>{{_asignatura.asignatura}}</p>\r\n                  <!--p class=\"mb-0\"><b>Creditos:</b> {{_asignatura.creditos}}</p-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-md-3\">\r\n              <div class=\"alert card-asignatura nuevo\" role=\"alert\">\r\n                <p><i class=\"fa fa-plus\"></i><br>Nueva asignatura</p>\r\n              </div>\r\n            </div>       -->\r\n          </div>\r\n        </div>         \r\n      </div>\r\n      <!-- <div class=\"row orden_jerarquico nuevo text-center\">\r\n        <div class=\"col-md-12\">\r\n          <p><i class=\"fa fa-plus\"></i> <br> Nuevo grado</p>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/plan-estudio/plan-estudio.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/plan-estudio/plan-estudio.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.plan-container {\n  margin: 20px;\n  padding: 20px;\n  border: 2px solid black; }\n\n.orden_jerarquico {\n  padding: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.card-orden-jerarquico .fa-accion {\n  display: none;\n  position: absolute;\n  font-size: 18px;\n  margin: 5px; }\n\n:hover > .card-orden-jerarquico .fa-accion {\n    display: inline; }\n\n.card-orden-jerarquico .fa-edita {\n  left: 0px; }\n\n.card-orden-jerarquico .fa-elimina {\n  right: 0px; }\n\n.card-asignatura {\n  background-color: #007bff;\n  border-color: #007bff;\n  font-size: 12px;\n  height: 100px;\n  text-align: center;\n  cursor: default; }\n\n.card-asignatura .fa-accion {\n    display: none;\n    position: absolute;\n    font-size: 18px;\n    margin: 5px; }\n\n:hover > .card-asignatura .fa-accion {\n      display: inline; }\n\n.card-asignatura .fa-edita {\n    left: 0px; }\n\n.card-asignatura .fa-elimina {\n    right: 0px; }\n\n.card-asignatura:hover {\n  background-color: #007bff;\n  border-color: #007bff; }\n\n.orden_jerarquico.nuevo {\n  border: 2px dashed black; }\n\n.card-asignatura.nuevo {\n  border: 2px dashed black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGFuLWVzdHVkaW8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYW4tZXN0dWRpby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwbGFuLWVzdHVkaW9cXHBsYW4tZXN0dWRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFFUSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsWUFBVyxFQUlkOztBQUhHO0lBQ0ksZ0JBQWUsRUFDbEI7O0FBUlQ7RUFXUSxVQUFRLEVBQ1g7O0FBWkw7RUFjUSxXQUFTLEVBQ1o7O0FBR0w7RUFHSSwwQkFBeUI7RUFDekIsc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixnQkFBZSxFQWlCbEI7O0FBekJEO0lBV1EsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLFlBQVcsRUFJZDs7QUFIRztNQUNJLGdCQUFlLEVBQ2xCOztBQWpCVDtJQW9CUSxVQUFRLEVBQ1g7O0FBckJMO0lBdUJRLFdBQVMsRUFDWjs7QUFFTDtFQUNJLDBCQUF5QjtFQUN6QixzQkFBcUIsRUFDeEI7O0FBR0Q7RUFDSSx5QkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSx5QkFBd0IsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYW4tZXN0dWRpby9wbGFuLWVzdHVkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLnBsYW4tY29udGFpbmVye1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrIDtcclxufVxyXG5cclxuLm9yZGVuX2plcmFycXVpY297XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLW9yZGVuLWplcmFycXVpY297XHJcbiAgICAuZmEtYWNjaW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICA6aG92ZXIgPiAmIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lOyAgIFxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmZhLWVkaXRhe1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgfVxyXG4gICAgLmZhLWVsaW1pbmF7XHJcbiAgICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1hc2lnbmF0dXJhe1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xyXG4gICAgLy9ib3JkZXItY29sb3I6ICM5NDk0OTQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDs7XHJcbiAgICBcclxuICAgIC5mYS1hY2Npb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIDpob3ZlciA+ICYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7ICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZmEtZWRpdGF7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgICAuZmEtZWxpbWluYXtcclxuICAgICAgICByaWdodDowcHg7XHJcbiAgICB9XHJcbn1cclxuLmNhcmQtYXNpZ25hdHVyYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcblxyXG4ub3JkZW5famVyYXJxdWljby5udWV2b3tcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBibGFjaztcclxufVxyXG4uY2FyZC1hc2lnbmF0dXJhLm51ZXZve1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/plan-estudio/plan-estudio.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/plan-estudio/plan-estudio.component.ts ***!
  \*******************************************************************/
/*! exports provided: PlanEstudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudioComponent", function() { return PlanEstudioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _administracion_plan_estudios_services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../administracion/plan-estudios/services/plan-estudios.service */ "./src/app/administracion/plan-estudios/services/plan-estudios.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlanEstudioComponent = /** @class */ (function () {
    function PlanEstudioComponent(_usuarioService, _planEstudiosService) {
        this._usuarioService = _usuarioService;
        this._planEstudiosService = _planEstudiosService;
        this.planEstudioId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PlanEstudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this._usuarioService.getBreadcum();
        this._usuarioService.pushBreadcum(this.title, "", 1);
        this._planEstudiosService.consultaEspecifica(this.idPlanEstudios, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.planEstudios = response['planEstudio'][0];
            }
        }, function (error) {
            console.log(error);
        });
        this._planEstudiosService.consultaOrdenJerarquico(this.idPlanEstudios, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.ordenJerarquico = response['ordenJerarquico'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    PlanEstudioComponent.prototype.asignaturaId = function (idPlanEstudio) {
        this.planEstudioId.emit(idPlanEstudio);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlanEstudioComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlanEstudioComponent.prototype, "idPlanEstudios", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlanEstudioComponent.prototype, "planEstudioId", void 0);
    PlanEstudioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-estudio',
            template: __webpack_require__(/*! ./plan-estudio.component.html */ "./src/app/components/plan-estudio/plan-estudio.component.html"),
            styles: [__webpack_require__(/*! ./plan-estudio.component.scss */ "./src/app/components/plan-estudio/plan-estudio.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _administracion_plan_estudios_services_plan_estudios_service__WEBPACK_IMPORTED_MODULE_2__["PlanEstudiosService"]])
    ], PlanEstudioComponent);
    return PlanEstudioComponent;
}());



/***/ }),

/***/ "./src/app/components/plan-estudio/plan-estudio.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/plan-estudio/plan-estudio.module.ts ***!
  \****************************************************************/
/*! exports provided: PlanEstudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanEstudioModule", function() { return PlanEstudioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _plan_estudio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-estudio.component */ "./src/app/components/plan-estudio/plan-estudio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanEstudioModule = /** @class */ (function () {
    function PlanEstudioModule() {
    }
    PlanEstudioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_plan_estudio_component__WEBPACK_IMPORTED_MODULE_2__["PlanEstudioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _plan_estudio_component__WEBPACK_IMPORTED_MODULE_2__["PlanEstudioComponent"]
            ]
        })
    ], PlanEstudioModule);
    return PlanEstudioModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~blank-page-blank-page-module~inscripcion-terminos-terminos-module.js.map