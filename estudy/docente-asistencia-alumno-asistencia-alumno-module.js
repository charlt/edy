(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-asistencia-alumno-asistencia-alumno-module"],{

/***/ "./src/app/docente/asistencia-alumno/asistencia-alumno-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/asistencia-alumno-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AsistenciaAlumnoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaAlumnoRoutingModule", function() { return AsistenciaAlumnoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asistencia_alumno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asistencia-alumno.component */ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _asistencia_alumno_component__WEBPACK_IMPORTED_MODULE_2__["AsistenciaAlumnoComponent"] },
];
var AsistenciaAlumnoRoutingModule = /** @class */ (function () {
    function AsistenciaAlumnoRoutingModule() {
    }
    AsistenciaAlumnoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AsistenciaAlumnoRoutingModule);
    return AsistenciaAlumnoRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/asistencia-alumno.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <button class=\"btn btn-success\" (click)=\"openModal(content, '1')\"><i class=\"fa fa-plus\"></i> Nueva clase</button>\r\n    <hr>\r\n    <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n      <thead class=\"thead-gray\">\r\n        <tr>\r\n          <th class=\"text-center\">#</th>\r\n          <th class=\"static tamT\" scope=\"col\">Nombre</th>\r\n          <th class=\"tituloActividad first-col\">Matricula</th>\r\n          <th style=\"text-align: center;\" *ngFor=\"let clase of clases; let i = index\"><span class=\"texto\"><a href=\"javascript:void(0)\" (click)=\"consultaEsp(clase.clase_id)\"><i class=\"fa fa-pencil font\" aria-hidden=\"true\" ></i></a> {{clase.fecha_clase | date: \"dd/MM/yyyy\"}}</span></th> \r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let _alumno of alumnos; let j = index\">\r\n          <td class=\"text-center align-middle\">{{j + 1}}</td>\r\n          <td class=\"align-middle static tam\">\r\n            {{_alumno.primer_apellido}}\r\n            {{_alumno.segundo_apellido}}\r\n            {{_alumno.nombre}}\r\n          </td>\r\n          <td class=\"text-right align-middle\">{{_alumno.clave_alumno}}</td>\r\n          <td *ngFor=\"let clase of clases; let i = index\">\r\n            <div style=\"display: flex; justify-content: center;\" class=\"container\"> \r\n              <div class=\"round\">\r\n                <input [(ngModel)]=\"alumnoAsistencia[i][j]\" id=\"{{_alumno.alumno_id}}.{{clase.clase_id}}\"  type=\"checkbox\" (click)=\"modificaAsistencia(_alumno.persona_id, clase.clase_id)\">\r\n                <label for=\"{{_alumno.alumno_id}}.{{clase.clase_id}}\"></label>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  </div>\r\n</div>\r\n<ng-template #content let-modal>\r\n  <form [formGroup]=\"claseForm\" (ngSubmit)=\"enviarInformacion()\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\"> Nueva clase</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label  \" for=\"nombre_clase\">Nombre de la clase</label>\r\n            <input formControlName=\"nombreClase\" class=\"form-control\" id=\"nombre_clase\" placeholder=\"Nombre de la clase\"\r\n              type=\"text\" required>\r\n            <span class=\"invalidText\" *ngIf=\"f.nombreClase.invalid && f.nombreClase.touched\">\r\n              Ingresa un nombre\r\n            </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label  \" for=\"descClase\">Descripción de la clase (opcional)</label>\r\n            <input formControlName=\"descClase\" class=\"form-control\" id=\"descClase\" placeholder=\"Descipción de la clase\"\r\n              type=\"text\">\r\n            <span class=\"invalidText\" *ngIf=\"f.descClase.invalid && f.descClase.touched\">\r\n              Ingresa una descripción\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"fechaClase\"><i class=\"fa fa-calendar\"></i> Fecha de la clase</label>\r\n            <input formControlName=\"fechaClase\" class=\"form-control\" id=\"fechaClase\" type=\"date\">\r\n            <span class=\"invalidText\" *ngIf=\"f.fechaClase.invalid && f.fechaClase.touched\">\r\n              Ingresa una fecha\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\r\n      <button type=\"button\" id=\"_modal\" class=\"btn btn-outline-dark\" (click)=\"close()\">Salir</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<!-- <p style=\"transform:rotate(-90deg);\"></p> -->"

/***/ }),

/***/ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/asistencia-alumno.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.round {\n  position: relative; }\n\n.round label {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 20px; }\n\n.round label:after {\n  border: 2px solid #fff;\n  border-top: none;\n  border-right: none;\n  content: \"\";\n  height: 6px;\n  left: 2px;\n  opacity: 0;\n  position: absolute;\n  top: 5px;\n  transform: rotate(-45deg);\n  width: 12px; }\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: #1385ff;\n  border-color: #007bff; }\n\n.round input[type=\"checkbox\"]:checked + label:after {\n  opacity: 1; }\n\n.texto {\n  -ms-writing-mode: tb-lr;\n      writing-mode: vertical-lr;\n  transform: rotate(180deg); }\n\n.font {\n  transform: rotate(90deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9hc2lzdGVuY2lhLWFsdW1uby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvY2VudGUvYXNpc3RlbmNpYS1hbHVtbm8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcZG9jZW50ZVxcYXNpc3RlbmNpYS1hbHVtbm9cXGFzaXN0ZW5jaWEtYWx1bW5vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2hCRDtFQUNJLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFFBQU87RUFDUCxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFlBQVcsRUFDWjs7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsVUFBUztFQUNULFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLDBCQUF5QjtFQUN6QixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBQ0Usd0JBQXlCO01BQXpCLDBCQUF5QjtFQUN6QiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSx5QkFBd0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2FzaXN0ZW5jaWEtYWx1bW5vL2FzaXN0ZW5jaWEtYWx1bW5vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuLnJvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnJvdW5kIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucm91bmQgbGFiZWw6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAucm91bmQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzEzODVmZjtcclxuICAgIGJvcmRlci1jb2xvcjogICMwMDdiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAudGV4dG97XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIC5mb250e1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/asistencia-alumno.component.ts ***!
  \**************************************************************************/
/*! exports provided: AsistenciaAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaAlumnoComponent", function() { return AsistenciaAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_asistencia_alumno_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/asistencia-alumno.service */ "./src/app/docente/asistencia-alumno/services/asistencia-alumno.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AsistenciaAlumnoComponent = /** @class */ (function () {
    function AsistenciaAlumnoComponent(_usuarioService, _asistenciaAlumnoService, _grupoService, route, _modalService, formBuilder) {
        this._usuarioService = _usuarioService;
        this._asistenciaAlumnoService = _asistenciaAlumnoService;
        this._grupoService = _grupoService;
        this.route = route;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this.pagina = 1;
        this.paginacion = 50;
        this.alumnoAsistencia = [];
        this.title = 'Asistencia';
        this._usuarioService.pushBreadcum(this.title, '', 1);
    }
    Object.defineProperty(AsistenciaAlumnoComponent.prototype, "f", {
        get: function () { return this.claseForm.controls; },
        enumerable: true,
        configurable: true
    });
    AsistenciaAlumnoComponent.prototype.ngOnInit = function () {
        this.fechaActual = new Date();
        this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
        this.consultaAlumnos();
        var d = this.fechaActual.getDate();
        if (d <= 9) {
            this.dia = '0' + d.toString();
        }
        else {
            this.dia = d.toString();
        }
        var m = this.fechaActual.getMonth() + 1;
        if (m <= 9) {
            this.mes = '0' + m.toString();
        }
        else {
            this.mes = m.toString();
        }
        var año = this.fechaActual.getFullYear().toString();
        var fecha = año + '-' + this.mes + '-' + this.dia;
        this.fechaActual = fecha;
        this.claseForm = this.formBuilder.group({
            nombreClase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descClase: [''],
            fechaClase: [this.fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    AsistenciaAlumnoComponent.prototype.modificaAsistencia = function (persona_id, clase_id) {
        this._asistenciaAlumnoService.creaInasistencia(persona_id, clase_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissAll();
            }
            else {
                alertify.error(response['msg']).dismissAll();
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaAlumnoComponent.prototype.consultaClase = function () {
        var _this = this;
        this._asistenciaAlumnoService.consultaClases(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.clases = response['clases'];
                _this.clases.forEach(function (clase, i) {
                    if (!_this.alumnoAsistencia[i])
                        _this.alumnoAsistencia[i] = [];
                    clase.fecha_clase = new Date((clase.fecha_clase) * 1000);
                    _this.alumnos.forEach(function (alumno, j) {
                        if (!_this.alumnoAsistencia[i][j])
                            _this.alumnoAsistencia[i][j] = true;
                        clase.inasistencia.forEach(function (inasistencia, k) {
                            if (inasistencia.persona_id == alumno.persona_id) {
                                _this.alumnoAsistencia[i][j] = false;
                            }
                        });
                    });
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaAlumnoComponent.prototype.consultaEsp = function (clase_id) {
        var _this = this;
        this.id_clase = clase_id;
        this._asistenciaAlumnoService.consultaEspecifica(this.id_clase).subscribe(function (response) {
            if (response && response['status']) {
                _this.clase = response['clase'];
                _this.clase.fecha_clase = new Date((_this.clase.fecha_clase) * 1000);
                _this.claseForm.get('nombreClase').setValue(_this.clase.nombre_clase);
                if (_this.clase.desc_clase != 'null') {
                    _this.claseForm.get('descClase').setValue(_this.clase.desc_clase);
                }
                else {
                    _this.claseForm.get('descClase').setValue('');
                }
                _this.clase.fecha_clase = new Date(_this.clase.fecha_clase);
                var d = _this.clase.fecha_clase.getDate();
                var dia = void 0;
                if (dia <= 9) {
                    dia = '0' + d.toString();
                }
                else {
                    dia = d.toString();
                }
                var m = _this.clase.fecha_clase.getMonth() + 1;
                var mes = void 0;
                if (m <= 9) {
                    mes = '0' + m.toString();
                }
                else {
                    mes = m.toString();
                }
                var año = _this.clase.fecha_clase.getFullYear().toString();
                var fecha = año + '-' + mes + '-' + dia;
                _this.claseForm.get('fechaClase').setValue(fecha);
                _this.openModal(_this.modal, 0);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaAlumnoComponent.prototype.consultaAlumnos = function () {
        var _this = this;
        // this.cargandoGrupo = true;
        var ini = (this.pagina - 1) * this.paginacion;
        var fin = this.pagina * this.paginacion;
        var tipoConsulta = 4;
        var idAsignatura = '';
        this._grupoService.consultaAlumnos(this.idAsignaturaGrupo, idAsignatura, tipoConsulta, ini, fin).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumnos = response['Alumnos'];
                _this.consultaClase();
            }
            else {
                _this.alumnos = null;
            }
            // this.cargandoGrupo = false;
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaAlumnoComponent.prototype.enviarInformacion = function (tipo) {
        var _this = this;
        var guarda = true;
        if (this.claseForm.invalid) {
            Object.keys(this.claseForm.controls).forEach(function (controlKey) {
                _this.claseForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        var _fecha = new Date(this.claseForm.get('fechaClase').value);
        var _dia = _fecha.getDate() + 1;
        var _mes = _fecha.getMonth();
        var _año = _fecha.getFullYear();
        if (!this.id_clase) {
            if (this.clases) {
                this.clases.forEach(function (clase) {
                    var diaClase = clase.fecha_clase.getDate();
                    var mesClase = clase.fecha_clase.getMonth();
                    var añoClase = clase.fecha_clase.getFullYear();
                    if (_dia == diaClase && _mes == mesClase && _año == añoClase) {
                        _this.claseForm.get('fechaClase').setErrors({ invalid: true });
                        guarda = false;
                    }
                });
            }
        }
        else {
            this.clases.forEach(function (clase) {
                var diaClase = clase.fecha_clase.getDate();
                var mesClase = clase.fecha_clase.getMonth();
                var añoClase = clase.fecha_clase.getFullYear();
                var diaClaseOld = _this.clase.fecha_clase.getDate();
                var mesClaseOld = _this.clase.fecha_clase.getMonth();
                var añoClaseOld = _this.clase.fecha_clase.getFullYear();
                if (_dia == diaClaseOld && _mes == mesClaseOld && _año == añoClaseOld) {
                    guarda = true;
                }
                else if (_dia == diaClase && _mes == mesClase && _año == añoClase) {
                    _this.claseForm.get('fechaClase').setErrors({ invalid: true });
                    guarda = false;
                }
            });
        }
        if (guarda == true) {
            this._asistenciaAlumnoService.creaClase(this.claseForm, this.idAsignaturaGrupo, this.id_clase).subscribe(function (response) {
                if (response && response['status']) {
                    _this.consultaClase();
                    _this.close();
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alertify.error('Fecha ya asignada a otra clase');
        }
    };
    AsistenciaAlumnoComponent.prototype.openModal = function (content, tipo) {
        if (tipo == 1) {
            this.claseForm.get('nombreClase').setValue('Clase ' + this.dia + '/' + this.mes);
            this.claseForm.get('fechaClase').setValue(this.fechaActual);
            this._modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
        }
        else {
            this._modalService.open(content, { size: 'lg', backdrop: 'static', keyboard: false });
        }
    };
    AsistenciaAlumnoComponent.prototype.close = function () {
        this._modalService.dismissAll();
        this.claseForm.get('nombreClase').setValue('');
        // this.claseForm.get('fechaClase').setValue('')
        this.claseForm.reset();
        this.id_clase = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalRef"])
    ], AsistenciaAlumnoComponent.prototype, "modal", void 0);
    AsistenciaAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asistencia-alumno',
            template: __webpack_require__(/*! ./asistencia-alumno.component.html */ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.html"),
            styles: [__webpack_require__(/*! ./asistencia-alumno.component.scss */ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_asistencia_alumno_service__WEBPACK_IMPORTED_MODULE_4__["AsistenciaAlumnoService"],
            _grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_2__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], AsistenciaAlumnoComponent);
    return AsistenciaAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/docente/asistencia-alumno/asistencia-alumno.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/asistencia-alumno.module.ts ***!
  \***********************************************************************/
/*! exports provided: AsistenciaAlumnoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaAlumnoModule", function() { return AsistenciaAlumnoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asistencia_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asistencia-alumno-routing.module */ "./src/app/docente/asistencia-alumno/asistencia-alumno-routing.module.ts");
/* harmony import */ var _asistencia_alumno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia-alumno.component */ "./src/app/docente/asistencia-alumno/asistencia-alumno.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AsistenciaAlumnoModule = /** @class */ (function () {
    function AsistenciaAlumnoModule() {
    }
    AsistenciaAlumnoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_asistencia_alumno_component__WEBPACK_IMPORTED_MODULE_3__["AsistenciaAlumnoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _asistencia_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__["AsistenciaAlumnoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"]
            ]
        })
    ], AsistenciaAlumnoModule);
    return AsistenciaAlumnoModule;
}());



/***/ }),

/***/ "./src/app/docente/asistencia-alumno/services/asistencia-alumno.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/asistencia-alumno/services/asistencia-alumno.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AsistenciaAlumnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaAlumnoService", function() { return AsistenciaAlumnoService; });
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




var AsistenciaAlumnoService = /** @class */ (function () {
    function AsistenciaAlumnoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AsistenciaAlumnoService.prototype.consultaClases = function (idAsignaturaGrupo) {
        var params = '?id_asignatura_grupo=' + idAsignaturaGrupo;
        return this._httpClient.get(this.url + 'controlEscolar/asistencia/consultaClases.php' + params);
    };
    AsistenciaAlumnoService.prototype.consultaEspecifica = function (clase_id) {
        var params = '?id_clase=' + clase_id;
        return this._httpClient.get(this.url + 'controlEscolar/asistencia/consulta.php' + params);
    };
    AsistenciaAlumnoService.prototype.creaClase = function (aviso, idAsignaturaGrupo, id_clase) {
        var formData = new FormData();
        formData.append('nombre_clase', aviso.get('nombreClase').value);
        formData.append('desc_clase', aviso.get('descClase').value);
        formData.append('fecha_clase', aviso.get('fechaClase').value);
        formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        if (id_clase == null) {
            return this._httpClient.post(this.url + 'controlEscolar/asistencia/creaClase.php', formData);
        }
        else {
            formData.append('id_clase', id_clase);
            return this._httpClient.post(this.url + 'controlEscolar/asistencia/editaClase.php', formData);
        }
    };
    AsistenciaAlumnoService.prototype.creaInasistencia = function (id_persona, id_clase) {
        var formData = new FormData();
        formData.append('id_persona', id_persona);
        formData.append('id_clase', id_clase);
        return this._httpClient.post(this.url + 'controlEscolar/asistencia/creaInasistencia.php', formData);
    };
    AsistenciaAlumnoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsistenciaAlumnoService);
    return AsistenciaAlumnoService;
}());



/***/ })

}]);
//# sourceMappingURL=docente-asistencia-alumno-asistencia-alumno-module.js.map