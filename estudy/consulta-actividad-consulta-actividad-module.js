(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulta-actividad-consulta-actividad-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad-routing.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad-routing.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ConsultaActividadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaActividadRoutingModule", function() { return ConsultaActividadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_actividad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-actividad.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _consulta_actividad_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaActividadComponent"]
    }
];
var ConsultaActividadRoutingModule = /** @class */ (function () {
    function ConsultaActividadRoutingModule() {
    }
    ConsultaActividadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultaActividadRoutingModule);
    return ConsultaActividadRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"row\" cdkDropList (cdkDropListDropped)=\"dropActividad($event)\">\r\n        <div  cdkDrag class=\"col-12 alert\" role=\"alert\" *ngFor=\"let actividad of actividades; let j=index\" [ngClass]=\"actividad.total_preguntas == 0 && actividad.tipo_actividad_id == 2 ? 'alert-danger':'alert-actividad'\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <h5  class=\"text-left text-dark\" >\r\n                {{actividad.actividad_nombre}}\r\n                <span *ngIf=\"actividad.unica == 1\" class=\"mx-1 fa fa-road\" style=\"color:red \" title=\"Actividad única\"></span>\r\n                <span *ngIf=\"actividad.metodo_resolver_id == 2\" class=\"mx-1 fa fa-users\" style=\"color:blue \" title=\"{{'_trabajoEquipoActivo' | translate}}\"></span>\r\n                <span *ngIf=\"actividad.aleatorio == 1\" class=\"mx-1 fa fa-random\" style=\"color:orange \" title=\"Aleatoria\"></span>\r\n                <span *ngIf=\"actividad.portafolio == 1\" class=\"mx-1 fa fa-book\" style=\"color:green \" title=\"pertenece al portafolio\"></span>\r\n              </h5>\r\n              <p>{{actividad.tipo_actividad_nombre}}</p>\r\n              <p *ngIf=\"actividad.total_preguntas == 0 && actividad.tipo_actividad_id == 2\"><b>(Debes cargar al menos una pregunta en esta actividad)</b></p>\r\n            </div>\r\n            <div class=\"col-4\" *ngIf=\"actividad.tipo_actividad_id != 5\">\r\n              <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-danger btn-accion\" (click)=\"eliminaActividad(actividad.actividad_id,j)\" ><i class=\"fa fa-trash\" ></i></button>\r\n              <a [hidden]=\"tipoAdmin == 0\" [routerLink]=\"['./edita/'+actividad.actividad_id]\" class=\"btn btn-info btn-accion\" (click)=\"actividad.editar = !actividad.editar\"><i class=\"fa fa-pencil\"></i></a>\r\n              <a [routerLink]=\"['./vista-previa/'+actividad.actividad_id]\" class=\"btn btn-warning btn-accion\" ><i class=\"fa fa-eye\"></i></a>\r\n              <button cdkDragHandle class=\"btn btn-success btn-accion\" [ngClass]=\"actividad.tipo_actividad_id == 4? 'd-none': ''\"><i class=\"fa fa-arrows-alt\" ></i></button>\r\n              <button (click)=\"reasignaCalificacion(actividad)\" class=\"btn btn-light btn-accion\" *ngIf=\"actividad.tipo_actividad_id == 2\"><i class=\"fa fa-edit\" ></i></button>\r\n              <button class=\"btn btn-accion\" [ngClass]=\"{'btn-success': actividad.visible == '1', 'btn-light': actividad.visible == '0'}\" (click)=\"cambiaVisibleActividad(actividad.actividad_id,actividad.visible)\" >\r\n                <i class=\"fa \" [ngClass]=\"{'fa-circle': actividad.visible == '1', 'fa-circle-o': actividad.visible == '0'}\"></i>\r\n                <span *ngIf=\"actividad.visible == '1'\"> Visible</span>\r\n                <span *ngIf=\"actividad.visible == '0'\"> Oculto</span>\r\n\r\n              </button>\r\n            </div>  \r\n            <div  class=\"col-md-12\">\r\n              <a  *ngIf=\"actividad.tipo_actividad_id == 2\" class=\"btn btn-link\" [routerLink]=\"['./preguntas/'+actividad.actividad_id]\">\r\n                <span ><i class=\"fa fa-plus-square\"></i> {{'verPreguntas' | translate}}</span>  \r\n              </a>\r\n            </div>   \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div  class=\"alert col-md-12 alert-actividad\">\r\n          <a [routerLink]=\"['./nuevo']\">\r\n            <h5 class=\"text-center text-dark\"><i class=\"fa fa-plus\"></i> {{'nuevaActividad' | translate}}</h5> \r\n          </a>\r\n        </div>\r\n        <div class=\"alert col-md-12 alert-actividad text-center\">\r\n          <button (click)=\"open(content)\" class=\"btn btn-link m-0 p-0\">\r\n            <h5 class=\"text-dark\"><i class=\"fa fa-plus\"></i> Usar actividad existente</h5> \r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\"><h5>Agregar existente</h5></h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body mx-3\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <form [formGroup]=\"actividadForm\" *ngIf=\"catActividades && actividadForm && !cargando\" \r\n                (ngSubmit)=\"clonarActividad()\">\r\n                <div class=\"form-group\" >\r\n                  <select class=\"form-control\" formControlName=\"id_actividad\">\r\n                    <option value=\"\" selected hidden>Selecciona una opción</option>\r\n                    <option [value]=\"actividad.actividad_id\" *ngFor=\"let actividad of catActividades; let i = index;\">\r\n                      {{actividad.actividad_nombre}}\r\n                    </option>\r\n                  </select>\r\n                  <button type=\"button\" class=\"btn btn-success pull-right mt-3\" type=\"submit\">Clonar actividad</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n\r\n            <div class=\"col-12\" *ngIf=\"!catActividades && !cargando\">\r\n              <div class=\"alert alert-secondary text-center\">\r\n                No se encontraron actividades\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n        </div>\r\n    </ng-template>\r\n      \r\n    "

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n.alert-actividad {\n  text-align: left;\n  padding: 20px;\n  background-color: white; }\n\n.btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n.alert-actividad:hover {\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL2NvbnN1bHRhLWFjdGl2aWRhZC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcY2FyZ2EtYWN0aXZpZGFkZXNcXGFzaWduYXR1cmFcXG1vZHVsb1xcYWN0aXZpZGFkXFxjb25zdWx0YS1hY3RpdmlkYWRcXGNvbnN1bHRhLWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVc7RUFDWCxVQUFRO0VBQ1Isa0JBQWdCLEVBQ25COztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxhQUFXO0VBQ1gsVUFBUTtFQUNSLGtCQUFnQixFQUNuQjs7QUFJRDtFQUdJLG9EQUFnRCxFQUNuRCIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2FjdGl2aWRhZC9jb25zdWx0YS1hY3RpdmlkYWQvY29uc3VsdGEtYWN0aXZpZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1hY2Npb257XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLmFsZXJ0LWFjdGl2aWRhZHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tYWNjaW9ue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB0b3A6MTBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmFsZXJ0LWFjdGl2aWRhZDpob3ZlcntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSAgIHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ConsultaActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaActividadComponent", function() { return ConsultaActividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_modulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/modulo.service */ "./src/app/administracion/carga-actividades/services/modulo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/actividad.service */ "./src/app/administracion/carga-actividades/services/actividad.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_docente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/docente.service */ "./src/app/services/docente.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConsultaActividadComponent = /** @class */ (function () {
    function ConsultaActividadComponent(_actividadService, _moduloService, _usuarioService, route, _location, _modalService, _docenteService, formBuilder) {
        this._actividadService = _actividadService;
        this._moduloService = _moduloService;
        this._usuarioService = _usuarioService;
        this.route = route;
        this._location = _location;
        this._modalService = _modalService;
        this._docenteService = _docenteService;
        this.formBuilder = formBuilder;
        this.cargando = false;
    }
    ConsultaActividadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idModulo = params['id'];
            _this.jwt = _this._usuarioService.getJWT();
            _this.consultaActividades();
            _this.consultaModulo();
        });
        this.identity = this._usuarioService.getIdentity();
        if (this.identity.administrador)
            this.tipoAdmin = this.identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this.idRol = this._usuarioService.getRol().rol_id;
        if (sessionStorage.getItem('idAsignaturaSelected') && this.idRol == 1)
            this.idAsignatura = sessionStorage.getItem('idAsignaturaSelected');
    };
    ConsultaActividadComponent.prototype.consultaModulo = function () {
        var _this = this;
        this._moduloService.consultaModulo(this.idModulo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.modulo = response['modulo'][0];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaActividadComponent.prototype.consultaActividades = function () {
        var _this = this;
        this._moduloService.consultaActividad(this.idModulo, 1, 1).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividades = response['Actividades'];
                console.log(_this.actividades);
            }
            else {
                _this.actividades = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaActividadComponent.prototype.vista_previa_actividad = function (content, idActividad) {
        this.idActividadVistaPrevia = idActividad;
        this.showDynamic = true;
    };
    ConsultaActividadComponent.prototype.dropActividad = function (event) {
        if (this.actividades[event.currentIndex].tipo_actividad_id == 5 || this.actividades[event.previousIndex].tipo_actividad_id == 5) {
            alertify.error('No se puede ordenar el elemento de calificación');
        }
        else {
            var idActividad = this.actividades[event.previousIndex].actividad_id;
            var nuevoOrden = event.currentIndex + 1;
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.actividades, event.previousIndex, event.currentIndex);
            this._actividadService.orden(nuevoOrden, this.idModulo, idActividad, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    alertify.success(response['msg']);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ConsultaActividadComponent.prototype.eliminaActividad = function (id, j) {
        alertify.confirm("¿Deseas eliminar la actividad?", function () {
            var _this = this;
            this._actividadService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.actividades.splice(j, 1);
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
    ConsultaActividadComponent.prototype.cambiaVisibleActividad = function (actividad_id, visto) {
        var title;
        if (visto == 0) {
            visto = 1;
            title = '¿Deseas mostrar esta actividad a los alumnos?';
        }
        else if (visto == 1) {
            visto = 0;
            title = '¿Deseas ocultar esta actividad a los alumnos? Una vez oculta, los alumnos que la hayan contestado no podrán ver su calificación ni mensajes de esta actividad.';
        }
        alertify.confirm('', title, function () {
            var _this = this;
            this._actividadService.cambiaVisto(actividad_id, visto).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                    _this.consultaActividades();
                }
                else {
                    alertify.error(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaActividadComponent.prototype.reasignaCalificacion = function (actividad) {
        var id_actividad = actividad.actividad_id;
        var tipo_calificacion = actividad.tipo_calificacion;
        alertify.confirm('Reasignar calificación', '¿Deseas reasignar la calificación de la actividad?', function () {
            this._actividadService.reasignaCalificacionActividad(id_actividad, tipo_calificacion).subscribe(function (response) {
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
    ConsultaActividadComponent.prototype.open = function (content) {
        var _this = this;
        this.catActividades = null;
        this.actividadForm = null;
        this.cargando = true;
        if (this.idRol == 1) {
            this._actividadService.consultaActividadesCompletas(this.idAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    if (response['actividades'].length > 0) {
                        _this.actividadForm = _this.formBuilder.group({
                            id_actividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
                        });
                        _this.catActividades = response['actividades'];
                    }
                    _this.cargando = false;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.idRol == 3) {
            var idAsignatura = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_id;
            this._docenteService.consultaActividades(this.identity.usuario, idAsignatura).subscribe(function (response) {
                if (response && response['status']) {
                    if (response['actividades'].length > 0) {
                        _this.actividadForm = _this.formBuilder.group({
                            id_actividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]
                        });
                        _this.catActividades = response['actividades'];
                    }
                }
                _this.cargando = false;
            }, function (error) {
                console.log(error);
            });
        }
        this._modalService.open(content, { backdrop: 'static', keyboard: false });
    };
    ConsultaActividadComponent.prototype.clonarActividad = function () {
        var _this = this;
        var id_actividad = this.actividadForm.get('id_actividad').value;
        this._docenteService.clonarActividad(id_actividad, this.idModulo).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaActividades();
                _this._modalService.dismissAll();
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaActividadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-actividad',
            template: __webpack_require__(/*! ./consulta-actividad.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.html"),
            styles: [__webpack_require__(/*! ./consulta-actividad.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_actividad_service__WEBPACK_IMPORTED_MODULE_6__["ActividadService"],
            _services_modulo_service__WEBPACK_IMPORTED_MODULE_1__["ModuloService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            src_app_services_docente_service__WEBPACK_IMPORTED_MODULE_8__["DocenteService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
    ], ConsultaActividadComponent);
    return ConsultaActividadComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ConsultaActividadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaActividadModule", function() { return ConsultaActividadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consulta_actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-actividad-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad-routing.module.ts");
/* harmony import */ var _consulta_actividad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta-actividad.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/consulta-actividad/consulta-actividad.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConsultaActividadModule = /** @class */ (function () {
    function ConsultaActividadModule() {
    }
    ConsultaActividadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_consulta_actividad_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaActividadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consulta_actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsultaActividadRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], ConsultaActividadModule);
    return ConsultaActividadModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/actividad.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/actividad.service.ts ***!
  \********************************************************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
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




var ActividadService = /** @class */ (function () {
    function ActividadService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ActividadService.prototype.vistaArchivo = function (id_actividad, visto, jwt) {
        var formData = new FormData();
        formData.append('id_contenido_actividad', id_actividad);
        formData.append('visto', visto);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/contenidoActividad/modificaContenido.php', formData);
    };
    ActividadService.prototype.consultaActividad = function (id_actividad, jwt) {
        var params = '?jwt=' + jwt;
        params += '&id_actividad=' + id_actividad;
        return this._httpClient.get(this.url + 'learning/actividad/consulta.php' + params);
    };
    ActividadService.prototype.consultaTipoActividad = function () {
        return this._httpClient.get(this.url + 'catalogosLE/tipoActividad.php');
    };
    ActividadService.prototype.consultaImportanciaActividad = function () {
        return this._httpClient.get(this.url + 'catalogosLE/importanciaActividad.php');
    };
    ActividadService.prototype.consultaDificultad = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/dificultad.php' + params);
    };
    ActividadService.prototype.consultaResolucion = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/resolucion.php' + params);
    };
    ActividadService.prototype.elimina = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/actividad/elimina.php' + params);
    };
    ActividadService.prototype.consultaContenido = function (id, jwt) {
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/contenidoActividad/consulta.php' + params);
    };
    ActividadService.prototype.guardaContenido = function (form, id, jwt, id_modulo) {
        var formData = new FormData();
        if (id) {
            formData.append('id_actividad', id);
        }
        formData.append('jwt', jwt);
        formData.append('archivo', form.get('contenido').value);
        formData.append('id_modulo', id_modulo);
        return this._httpClient.post(this.url + 'learning/contenidoActividad/crea.php', formData);
    };
    ActividadService.prototype.eliminaContenido = function (id, jwt) {
        var params = '?id_contenido_actividad=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/contenidoActividad/elimina.php' + params);
    };
    ActividadService.prototype.orden = function (orden_nuevo, id_modulo, id_actividad, jwt) {
        var params = '?orden_nuevo=' + orden_nuevo;
        params += '&id_actividad=' + id_actividad;
        params += '&id_modulo=' + id_modulo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/actividad/orden.php' + params);
    };
    ActividadService.prototype.modificaActividad = function (form, id_modulo, id_actividad, jwt, f_inicio, f_fin) {
        var formData = new FormData();
        var datos = [{ var: 'tipo_calificacion', control: 'tipoEvaluacion' },
            { var: 'numero_mostrado', control: 'bullet' },
            { var: 'shuffle', control: 'aleatorio' },
            { var: 'num_intentos', control: 'numeroIntentos' },
            { var: 'metodo_resolver_id', control: 'resolucion' },
            { var: 'importancia_actividad_id', control: 'importancia' },
            { var: 'ponderacion', control: 'ponderacion' },
            { var: 'unica', control: 'unica' },
            { var: 'portafolio', control: 'portafolio' }];
        datos.forEach(function (dato) {
            formData.append(dato.var, form.get(dato.control) ? form.get(dato.control).value : 0);
        });
        formData.append('actividad_clave', form.get('claveActividad').value);
        formData.append('dificultad_id', form.get('dificultad') ? form.get('dificultad').value : 0);
        formData.append('instruccion', form.get('instruccion').value);
        formData.append('actividad_nombre', form.get('nombreActividad').value);
        formData.append('tipo_actividad_id', form.get('tipoActividad').value);
        formData.append('fecha_inicio', f_inicio);
        formData.append('fecha_fin', f_fin);
        formData.append('modulo_id', id_modulo);
        formData.append('id_rubrica', form.get('idRubrica').value);
        formData.append('zona_horaria', form.get('zonaHoraria').value);
        if (form.get('totalPreguntas')) {
            formData.append('num_total_preguntas', form.get('totalPreguntas').value == true ? form.get('numeroPreguntas').value : '0');
        }
        else {
            formData.append('num_total_preguntas', '0');
        }
        formData.append('num_preguntas_mostrar', "0");
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (id_actividad == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/actividad/crea.php', formData);
        }
        else {
            formData.append('id_actividad', id_actividad);
            return this._httpClient.post(this.url + 'learning/actividad/edita.php', formData);
        }
    };
    ActividadService.prototype.consultaPreguntas = function (id, jwt, tipo) {
        if (tipo === void 0) { tipo = 0; }
        var params = '?id_actividad=' + id;
        params += '&jwt=' + jwt;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/learning/actividad/consultaPreguntas.php' + params);
    };
    ActividadService.prototype.sumaPonderacion = function (id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + '/learning/asignatura/ponderacionTotal.php' + params);
    };
    ActividadService.prototype.consultaActividadesSQA = function (id, jwt) {
        var params = '?id_asignatura=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/asignatura/consultaActividadSQA.php' + params);
    };
    ActividadService.prototype.reasignaCalificacionActividad = function (id_actividad, tipo_calificacion) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('tipo_calificacion', tipo_calificacion);
        return this._httpClient.post(this.url + '/learning/administracion/reasignaCalificacionActividad.php', formData);
    };
    ActividadService.prototype.eliminaImagen = function (url) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('url', url);
        return this._httpClient.get(this.url + '/extras/archivo/elimina_ckeditor.php', { params: params });
    };
    ActividadService.prototype.consultaActividadesCompletas = function (id_asignatura) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id_asignatura', id_asignatura);
        return this._httpClient.get(this.url + '/controlEscolar/asignatura/consultaActividadesCompletas.php', { params: params });
    };
    ActividadService.prototype.cambiaVisto = function (id_actividad, visto) {
        var params = '?id_actividad=' + id_actividad;
        params += '&visible=' + visto;
        return this._httpClient.get(this.url + '/learning/actividad/editaVisible.php' + params);
    };
    ActividadService.prototype.cambiarModulo = function (id_actividad, orden, id_modulo, id_modulo_nuevo) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('orden', orden);
        formData.append('id_modulo', id_modulo);
        formData.append('id_modulo_nuevo', id_modulo_nuevo);
        return this._httpClient.post(this.url + '/learning/actividad/moverModulo.php', formData);
    };
    ActividadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActividadService);
    return ActividadService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/services/modulo.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/modulo.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ModuloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloService", function() { return ModuloService; });
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




var ModuloService = /** @class */ (function () {
    function ModuloService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    ModuloService.prototype.consultaModulo = function (id, jwt) {
        var params = '?id_modulo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/consulta.php' + params);
    };
    ModuloService.prototype.consultaActividad = function (id, preguntas, tipo) {
        var params = '?id_modulo=' + id;
        params += '&tipo=' + tipo; //1 todas las actividades, 2 sólo ejercicios
        if (preguntas == 1) {
            params += '&preguntas=1';
        }
        return this._httpClient.get(this.url + 'learning/modulos/consultaActividades.php' + params);
    };
    ModuloService.prototype.elimina = function (id, jwt) {
        var params = '?id_modulo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/elimina.php' + params);
    };
    ModuloService.prototype.orden = function (orden_nuevo, id_asignatura, id_modulo, jwt) {
        var params = '?orden_nuevo=' + orden_nuevo;
        params += '&id_asignatura=' + id_asignatura;
        params += '&id_modulo=' + id_modulo;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/modulos/orden.php' + params);
    };
    ModuloService.prototype.modificaModulo = function (form, id_modulo, id_asignatura, tipoConsulta) {
        var formData = new FormData();
        formData.append('modulo_nombre', form.get('nombreModulo').value);
        formData.append('modulo_numero', form.get('numeroModulo').value);
        formData.append('porcentaje', form.get('porcentaje').value);
        formData.append('id_asignatura', id_asignatura);
        formData.append('tipo_consulta', tipoConsulta);
        if (form.get('promedio_modulo').value) {
            formData.append('promedio_modulo', '1');
        }
        else {
            formData.append('promedio_modulo', '0');
        }
        var fd = new FormData();
        if (id_modulo == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'learning/modulos/creaModuloAsignatura.php', formData);
        }
        else {
            formData.append('id_modulo', id_modulo);
            return this._httpClient.post(this.url + 'learning/modulos/edita.php', formData);
        }
    };
    ModuloService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ModuloService);
    return ModuloService;
}());



/***/ })

}]);
//# sourceMappingURL=consulta-actividad-consulta-actividad-module.js.map