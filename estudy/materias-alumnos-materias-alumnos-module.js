(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materias-alumnos-materias-alumnos-module"],{

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MateriasAlumnosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasAlumnosRoutingModule", function() { return MateriasAlumnosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materias_alumnos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materias-alumnos.component */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _materias_alumnos_component__WEBPACK_IMPORTED_MODULE_2__["MateriasAlumnosComponent"]
    }
];
var MateriasAlumnosRoutingModule = /** @class */ (function () {
    function MateriasAlumnosRoutingModule() {
    }
    MateriasAlumnosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MateriasAlumnosRoutingModule);
    return MateriasAlumnosRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h4>{{title}}</h4>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <app-encabezado-persona [idPersona]=\"idAlumno\" [idRol]=\"'2'\"></app-encabezado-persona>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <!-- <button class=\"btn btn-success\" (click)=\"agregarMateria(content)\">Agregar asignatura</button><br> -->\r\n        <div class=\"btn-group\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"agregarMateria(content)\">Agregar asignatura</button><br>\r\n            <button type=\"button\" class=\"btn btn-secondary\" [ngClass]=\"tipoConsulta == 1 ? 'active':''\" (click)=\"_tipoConsulta(1);\">Activas</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" [ngClass]=\"tipoConsulta == 2 ? 'active':''\" (click)=\"_tipoConsulta(2);\">Inactivas</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" [ngClass]=\"tipoConsulta == 3 ? 'active':''\" (click)=\"_tipoConsulta(3);\">Todas</button>\r\n        </div>\r\n        <table class=\"table table-striped  table-bordered\" style=\"margin-top: 1%;\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Nombre</th>\r\n                    <th>Grupo</th>\r\n                    <th>Tipo</th>\r\n                    <th>Estatus</th>\r\n                    <th>Calificación</th>\r\n                    <th>Reiniciar materia</th>\r\n                    <th>Eliminar</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody *ngIf=\"materias\">\r\n                <tr *ngFor=\"let materia of materias\">\r\n                    <td>{{materia.asignatura}}</td>\r\n                    <td><a href=\"javascript:void()\"\r\n                            [routerLink]=\"['../../../../../../admin/grupo/calificaciones/'+materia.asignatura_grupo_id]\">{{materia.nombre_grupo}}</a>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"form-group \" rel=\"1\">\r\n                            <select class=\"form-control\" [(ngModel)]=\"materia.tipo_materia_id\" (change)=\"cambiaTipoMateria(materia.tipo_materia_id, materia.materia_id)\">\r\n                                <option hidden value='' disabled>Selecciona una opción</option>\r\n                                <option [value]=\"tipo.tipo_materia_id\" *ngFor=\"let tipo of tiposMaterias\">{{tipo.descripcion_tipo_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"form-group \" rel=\"1\">\r\n                            <select class=\"form-control\" [(ngModel)]=\"materia.estatus_materia_id\"\r\n                                (change)=\"cambiaEstatus(materia.materia_id, materia.estatus_materia_id)\">\r\n                                <option hidden value='so' disabled>Selecciona una opción</option>\r\n                                <option [value]=\"estatus.estatus_materia_id\" *ngFor=\"let estatus of _estatus\">\r\n                                    {{estatus.descripcion_estatus_materia}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </td>\r\n                    <td class=\"text-center\">{{materia.calificacion}}</td>\r\n                    <td class=\"text-center\"><button class=\"btn btn-primary\"\r\n                            (click)=\"reiniciarMateria(materia.materia_id)\"><i class=\"fa fa-refresh\"\r\n                                aria-hidden=\"true\"></i></button></td>\r\n                    <td class=\"text-center\"><button class=\"btn btn-danger\" (click)=\"eliminar(materia.materia_id)\"><i\r\n                                class=\"fa fa-trash\" aria-hidden=\"true\"></i></button></td>\r\n                </tr>\r\n            </tbody>\r\n            <tbody *ngIf=\"!materias\">\r\n                <tr>\r\n                    <td colspan=\"20\" class=\"text-center p-3\">\r\n                        <span>No se encontró información</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <app-consulta-asignatura [nivel]=\"4\" [tipo]=\"'small'\" (sucessEvent)=\"obtieneAsignatura($event)\">\r\n            </app-consulta-asignatura>\r\n            <div *ngIf=\"grupos && guarda\" class=\"form-group \" rel=\"1\">\r\n                <label class=\"control-label\" for=\"\">5. Grupo</label>\r\n                <select class=\"form-control\" [(ngModel)]=\"asignatura_grupo_id\">\r\n                    <option value=\"\" hidden disabled selected>Selecciona una opción</option>\r\n                    <option [value]=\"grupo.asignatura_grupo_id\" *ngFor=\"let grupo of grupos\">{{grupo.grupo}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button [disabled]=\"!asignatura_grupo_id || !guarda\" type=\"button\" class=\"btn btn-success\"\r\n                (click)=\"guardarAsignatura()\">Guardar</button>\r\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Salir</button>\r\n        </div>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boton {\n  margin-top: 2.3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL21hdGVyaWFzLWFsdW1ub3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXGFsdW1ub1xcbWF0ZXJpYXMtYWx1bW5vc1xcbWF0ZXJpYXMtYWx1bW5vcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby9tYXRlcmlhcy1hbHVtbm9zL21hdGVyaWFzLWFsdW1ub3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90b257XHJcbiAgICBtYXJnaW4tdG9wOiAyLjMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MateriasAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasAlumnosComponent", function() { return MateriasAlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _materias_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materias-alumnos.service */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _grupo_service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../grupo/service/asignatura-grupo.service */ "./src/app/administracion/grupo/service/asignatura-grupo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MateriasAlumnosComponent = /** @class */ (function () {
    function MateriasAlumnosComponent(_usuarioService, _materiasAlumnosService, route, _modalService, _catalogoService, _asignaturaGrupoService) {
        this._usuarioService = _usuarioService;
        this._materiasAlumnosService = _materiasAlumnosService;
        this.route = route;
        this._modalService = _modalService;
        this._catalogoService = _catalogoService;
        this._asignaturaGrupoService = _asignaturaGrupoService;
        this.tipoEstatus = 'so';
        this.aviso = 'Sin fechas asignadas';
        this.asignatura_grupo_id = "";
        this.guarda = false;
        this.tipoConsulta = 3;
        this.title = "Consulta de asignaturas";
        this._usuarioService.pushBreadcum(this.title, "materiasAlumno", 1);
    }
    MateriasAlumnosComponent.prototype.ngOnInit = function () {
        this.idAlumno = this.route.snapshot.params['id'];
        this.consultaEstatus();
        this.consultaMaterias();
        this.consultaTipoMateria();
    };
    MateriasAlumnosComponent.prototype.consultaTipoMateria = function () {
        var _this = this;
        this._asignaturaGrupoService.consultaTipoMaterias().subscribe(function (response) {
            if (response && response['status']) {
                _this.tiposMaterias = response['tipoMateria'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.cambiaTipoMateria = function (tipo_materia_id, materia_id) {
        this._asignaturaGrupoService.cambiaTipoMateria(tipo_materia_id, materia_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.consultaEstatus = function () {
        var _this = this;
        this._catalogoService.consultaEstatusMateria().subscribe(function (response) {
            if (response && response['status']) {
                _this._estatus = response['estatus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.cambiaEstatus = function (id_materia, id_estatus) {
        this._materiasAlumnosService.cambiaEstatusMaterias(id_materia, id_estatus).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else
                alertify.error(response['msg']);
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.consultaMaterias = function () {
        var _this = this;
        this.materias = '';
        if (this.materias)
            this.materias = null;
        this._materiasAlumnosService.consultaMaterias(this.idAlumno, this.tipoConsulta).subscribe(function (response) {
            if (response && response['status']) {
                _this.materias = response['materias'];
                _this.materias.forEach(function (_materia) {
                    if (_materia.fecha_inicio && _materia.fecha_fin) {
                        _materia.fecha_inicio = new Date(_materia.fecha_inicio * 1000);
                        _materia.fecha_fin = new Date(_materia.fecha_fin * 1000);
                    }
                    else {
                        _materia.fecha_fin = null;
                        _materia.fecha_inicio = null;
                    }
                    if (!_materia.calificacion)
                        _materia.calificacion = "S/C";
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.reiniciarMateria = function (materia_id) {
        alertify.confirm('', '¿Deseas reiniciar la materia?', function () {
            this._materiasAlumnosService.reiniciarMateria(materia_id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    MateriasAlumnosComponent.prototype.eliminar = function (materia_id) {
        alertify.confirm('', '¿Deseas eliminar la materia?', function () {
            var _this = this;
            this._materiasAlumnosService.eliminaMateria(materia_id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.consultaMaterias(_this.idAlumno);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    MateriasAlumnosComponent.prototype.consutaGrupo = function () {
        var _this = this;
        this._materiasAlumnosService.consultaGrupo(this.idOrdenAsignatura).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupos = response['grupos'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent.prototype.agregarMateria = function (content) {
        this._modalService.open(content, { backdrop: 'static', keyboard: false, size: 'lg' });
    };
    MateriasAlumnosComponent.prototype._tipoConsulta = function (tipo) {
        this.tipoConsulta = tipo;
        this.consultaMaterias();
    };
    MateriasAlumnosComponent.prototype.close = function () {
        this._modalService.dismissAll();
        this.grupos = "";
        this.asignatura_grupo_id = "";
    };
    MateriasAlumnosComponent.prototype.obtieneAsignatura = function (event) {
        var _this = this;
        this.idOrdenAsignatura = event.idOrdenAsignatura;
        this.asignaturaSelected = event.idAsignatura;
        if (this.asignaturaSelected) {
            if (this.materias && this.materias.length) {
                this.materias.forEach(function (materia) {
                    if (_this.asignaturaSelected == materia.asignatura_id) {
                        _this.guarda = false;
                        alertify.error('Materia ya asignada a este alumno');
                    }
                    else {
                        _this.guarda = true;
                    }
                });
            }
            else {
                this.guarda = true;
            }
        }
        this.grupos = [];
        this.consutaGrupo();
    };
    MateriasAlumnosComponent.prototype.guardarAsignatura = function () {
        var _this = this;
        this._materiasAlumnosService.agregaMateria(this.idAlumno, this.asignatura_grupo_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaMaterias();
                _this._modalService.dismissAll();
                alertify.success(response['msg']);
            }
            else
                alertify.error(response['msg']);
        }, function (error) {
            console.log(error);
        });
    };
    MateriasAlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-materias-alumnos',
            template: __webpack_require__(/*! ./materias-alumnos.component.html */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.html"),
            styles: [__webpack_require__(/*! ./materias-alumnos.component.scss */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _materias_alumnos_service__WEBPACK_IMPORTED_MODULE_2__["MateriasAlumnosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _grupo_service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturaGrupoService"]])
    ], MateriasAlumnosComponent);
    return MateriasAlumnosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/administracion/alumno/materias-alumnos/materias-alumnos.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MateriasAlumnosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriasAlumnosModule", function() { return MateriasAlumnosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _materias_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materias-alumnos-routing.module */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos-routing.module.ts");
/* harmony import */ var _materias_alumnos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./materias-alumnos.component */ "./src/app/administracion/alumno/materias-alumnos/materias-alumnos.component.ts");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MateriasAlumnosModule = /** @class */ (function () {
    function MateriasAlumnosModule() {
    }
    MateriasAlumnosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_materias_alumnos_component__WEBPACK_IMPORTED_MODULE_3__["MateriasAlumnosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _materias_alumnos_routing_module__WEBPACK_IMPORTED_MODULE_2__["MateriasAlumnosRoutingModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_4__["EncabezadoPersonaModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_5__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], MateriasAlumnosModule);
    return MateriasAlumnosModule;
}());



/***/ })

}]);
//# sourceMappingURL=materias-alumnos-materias-alumnos-module.js.map