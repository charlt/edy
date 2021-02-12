(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-grupo-grupo-module"],{

/***/ "./src/app/administracion/alumno/historial/historial.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/historial/historial.service.ts ***!
  \**********************************************************************/
/*! exports provided: HistorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialService", function() { return HistorialService; });
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



var HistorialService = /** @class */ (function () {
    function HistorialService(httpClient) {
        this.httpClient = httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    HistorialService.prototype.getHistorial = function (id_alumno) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id_alumno', id_alumno);
        return this.httpClient.get(this.url + 'controlEscolar/historial/consultaAlumno.php', { params: params });
    };
    HistorialService.prototype.catCicloEstatusHistorial = function () {
        return this.httpClient.get(this.url + 'catalogosCE/cicloEstatusHistorial.php');
    };
    HistorialService.prototype.modificaHistorial = function (form, id_alumno, id) {
        var formData = new FormData();
        console.log(form);
        formData.append('id_orden_asignatura', form.orden_asignatura_id);
        formData.append('id_ciclo', form.id_ciclo);
        formData.append('id_alumno', id_alumno);
        formData.append('id_estatus_historial', form.id_estatus_historial);
        formData.append('calificacion', form.calificacion);
        formData.append('materia_id', null);
        if (form.situacion_reprobatoria_id)
            formData.append('situacion_reprobatoria_id', form.situacion_reprobatoria_id);
        if (id == 0) {
            return this.httpClient.post(this.url + 'controlEscolar/historial/crea.php', formData);
        }
        else if (id == 1) {
            formData.append('id_historial', form.id_historial);
            return this.httpClient.post(this.url + 'controlEscolar/historial/edita.php', formData);
        }
    };
    HistorialService.prototype.eliminaHistorial = function (id_historial) {
        var formData = new FormData();
        formData.append('id_historial', id_historial);
        return this.httpClient.post(this.url + 'controlEscolar/historial/elimina.php', formData);
    };
    HistorialService.prototype.consultaHistorial = function (id_historial) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id_historial', id_historial);
        return this.httpClient.get(this.url + 'controlEscolar/historial/consulta.php', { params: params });
    };
    HistorialService.prototype.consultaNoAprobados = function (id_asignatura) {
        var params = '?id_asignatura=' + id_asignatura;
        return this.httpClient.get(this.url + 'controlEscolar/historial/consultaNoAprobados.php' + params);
    };
    HistorialService.prototype.catSituacionReprobatoria = function () {
        return this.httpClient.get(this.url + 'catalogosCE/situacionCalificacionReprobatorias.php');
    };
    HistorialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistorialService);
    return HistorialService;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h4>{{title}}</h4>\r\n  </div>\r\n  <div class=\"col-12\">\r\n      <div class=\"table-responsive\">\r\n      <button (click)=\"open(contentNuevoAlumno,'alumno')\"  class=\"btn btn-success my-3\"><i class=\"fa fa-plus\"></i> Agregar alumno</button>\r\n      <button (click)=\"consultaReprobados(contentNoAprobados)\"  class=\"btn btn-warning my-3\"><i class=\"fa fa-plus\"></i> Buscar alumnos no aprobados</button>\r\n      <table class=\"table table-striped table-bordered\">  \r\n          <tbody>\r\n            <tr>              \r\n              <th>#</th>\r\n              <th>Nombre del alumno</th>\r\n              <th>Clave del alumno</th>\r\n              <th>CURP del alumno</th>\r\n              <th>Tipo</th>\r\n              <th [hidden]=\"tipoAdmin == 0\">Eliminar</th>\r\n            </tr>\r\n            <!-- <tr *ngIf=\"(alumnos | filter: search).length === 0\">\r\n              <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n            </tr> -->\r\n            <tr *ngFor=\"let alumno of _alumnos ; let i = index\" [ngClass]=\"{'alert-danger':alumno.situacion_alumno_id == 2 || alumno.situacion_alumno_id == 3}\">\r\n              <td class=\"text-center\">{{i+1}}</td>\r\n              <td><a [routerLink]=\"['/admin/alumno/dashboard/'+alumno.alumno_id]\">{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</a></td>\r\n              <td>{{alumno.clave_alumno}}</td>\r\n              <td>{{alumno.curp}}</td>\r\n              <td>{{alumno.descripcion_tipo_materia}}</td>\r\n              <td  [hidden]=\"tipoAdmin == 0\" class=\"text-center\"><button class=\"btn btn-danger\" (click)=\"eliminaAlumno(alumno.alumno_id ,i)\"><i class=\"fa fa-trash\"></i></button></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #contentNoAprobados let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Alumnos no aprobados</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"cargandoReprobados\" class=\"col-12\"><i class=\"fa fa-spin fa-spinner\"></i> Cargando alumnos...</div>\r\n      <div *ngIf=\"!cargandoReprobados\" class=\"col-12\">\r\n        <button *ngIf=\" reprobados && reprobados.length\" type=\"button\" class=\"btn btn-success float-right\" (click)=\"guardarRecursamientos()\">Agregar como recursamiento</button>\r\n        <label><input [ngModel]=\"marcados\" (click)=\"marcartodos()\" type=\"checkbox\">Marcar todos</label> \r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let reprobado of reprobados; let i = index\">\r\n          <label><input type=\"checkbox\" [(ngModel)]=\"reprobados[i].selected\" checked=\"true\">{{reprobado.matricula}} - {{reprobado.primer_apellido}} {{reprobado.segundo_apellido}} {{reprobado.nombre}}</label> \r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n    <button *ngIf=\"!cargandoReprobados && reprobados && reprobados.length\" type=\"button\" class=\"btn btn-success\" (click)=\"guardarRecursamientos()\">Agregar como recursamiento</button>\r\n</div>\r\n</ng-template>\r\n\r\n<ng-template #contentNuevoAlumno let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'_modalAlumno' | translate}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <app-buscador-persona [idRol]=\"2\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n        <div *ngIf=\"selectedAlumno\" class=\"row\">          \r\n          <div  class=\"col-12\">\r\n            <div class=\" alert alert-info\">\r\n              <a href=\"javascript:void()\" (click)=\"cambiaPag(selectedAlumno.persona_id)\">\r\n                <h4>{{selectedAlumno.primer_apellido}} {{selectedAlumno.segundo_apellido}} {{selectedAlumno.nombre}}</h4>\r\n                <p> {{selectedAlumno.curp}}</p>\r\n              </a>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"col-12\">\r\n            <label>Selecciona la modalidad</label>\r\n            <select [(ngModel)]=\"idTipoMateria\" class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n              <option [value]=\"_tipoMateria.tipo_materia_id\" *ngFor=\"let _tipoMateria of tipoMateria\">{{_tipoMateria.descripcion_tipo_materia}}</option>\r\n            </select>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"button\" class=\"btn btn-success\" (click)=\"guardarAlumno()\">Guardar</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bajas {\n  background-color: #ffcccc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZ3J1cG8vY29uc3VsdGEtYWx1bW5vcy1hc2lnbmF0dXJhcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcZ3J1cG9cXGNvbnN1bHRhLWFsdW1ub3MtYXNpZ25hdHVyYXNcXGNvbnN1bHRhLWFsdW1ub3MtYXNpZ25hdHVyYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9ncnVwby9jb25zdWx0YS1hbHVtbm9zLWFzaWduYXR1cmFzL2NvbnN1bHRhLWFsdW1ub3MtYXNpZ25hdHVyYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFqYXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ConsultaAlumnosAsignaturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAlumnosAsignaturasComponent", function() { return ConsultaAlumnosAsignaturasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/asignatura-grupo.service */ "./src/app/administracion/grupo/service/asignatura-grupo.service.ts");
/* harmony import */ var _alumno_historial_historial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alumno/historial/historial.service */ "./src/app/administracion/alumno/historial/historial.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaAlumnosAsignaturasComponent = /** @class */ (function () {
    function ConsultaAlumnosAsignaturasComponent(_usuarioService, _modalService, route, _asignaturaGrupoService, _historialService, router
    // private _grupoService: GrupoService
    ) {
        this._usuarioService = _usuarioService;
        this._modalService = _modalService;
        this.route = route;
        this._asignaturaGrupoService = _asignaturaGrupoService;
        this._historialService = _historialService;
        this.router = router;
        this.idTipoMateria = "";
        this.cargandoReprobados = false;
        this.marcados = false;
        this.title = 'Recursamientos y alumnos especiales en la asignatura';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    ConsultaAlumnosAsignaturasComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.idAsignaturaGrupo = this.route.snapshot.paramMap.get('id');
        this.consultaAlumnos();
    };
    ConsultaAlumnosAsignaturasComponent.prototype.cambiaPag = function (id_alumno) {
        var id = id_alumno;
        localStorage.setItem('id_persona', id);
        this.router.navigate(['../admin/alumno']);
        this._modalService.dismissAll();
    };
    ConsultaAlumnosAsignaturasComponent.prototype.consultaReprobados = function (content) {
        var _this = this;
        this.cargandoReprobados = true;
        this._asignaturaGrupoService.consulta(this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupo = response['grupo'];
                _this._historialService.consultaNoAprobados(_this.grupo.asignatura_id).subscribe(function (response) {
                    _this.cargandoReprobados = false;
                    if (response && response['status']) {
                        _this.reprobados = response['reprobados'];
                        _this.marcartodos();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
        this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
            console.log(result);
            if (result == 'save') {
            }
        }, function (reason) {
        });
    };
    ConsultaAlumnosAsignaturasComponent.prototype.guardarRecursamientos = function () {
        console.log(this.reprobados);
        alertify.confirm('Agregar a recursamiento', 'Deseas agregar los alumnos a recursamiento', function () {
            var _this = this;
            this._asignaturaGrupoService.guardarReprobados(this.reprobados, this.idAsignaturaGrupo).subscribe(function (response) {
                if (response && response['status']) {
                    _this._modalService.dismissAll();
                    _this.consultaAlumnos();
                    alertify.success(response['msg']);
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    ConsultaAlumnosAsignaturasComponent.prototype.marcartodos = function () {
        if (!this.marcados) {
            this.reprobados.forEach(function (reprobado) {
                reprobado.selected = true;
            }.bind(this));
            this.marcados = true;
        }
        else {
            this.reprobados.forEach(function (reprobado) {
                reprobado.selected = false;
            }.bind(this));
            this.marcados = false;
        }
    };
    ConsultaAlumnosAsignaturasComponent.prototype.consultaAlumnos = function () {
        var _this = this;
        this._asignaturaGrupoService.consultaAlumnos(this.jwt, this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status'])
                _this._alumnos = response['alumnos'];
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAlumnosAsignaturasComponent.prototype.open = function (content, tipo) {
        if (tipo == 'alumno')
            this.selectedAlumno = null;
        this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
            if (result == 'save') {
            }
        }, function (reason) {
        });
    };
    ConsultaAlumnosAsignaturasComponent.prototype.alumnoSeleccionado = function (event) {
        var _this = this;
        if (event.status) {
            this.selectedAlumno = event.persona;
            this._asignaturaGrupoService.consultaTipoMaterias().subscribe(function (response) {
                if (response && response['status']) {
                    _this.tipoMateria = response['tipoMateria'];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ConsultaAlumnosAsignaturasComponent.prototype.eliminaAlumno = function (id_persona, index) {
        var _this = this;
        this._asignaturaGrupoService.eliminaAlumno(this.jwt, id_persona, this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this._alumnos.splice(index, 1);
                alertify.success(response['msg']);
            }
            else
                alertify.error(response['msg']);
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAlumnosAsignaturasComponent.prototype.guardarAlumno = function () {
        var _this = this;
        if (this.idTipoMateria == '') {
            alertify.error('Debes seleccionar un tipo de recursamiento');
        }
        else {
            if (!this.selectedAlumno) {
                alertify.error('Debes seleccionar un alumno');
            }
            else {
                var alumnoVinculado_1 = 0;
                if (this._alumnos) {
                    this._alumnos.forEach(function (alumno) {
                        if (this.selectedAlumno.persona_id == alumno.alumno_id)
                            alumnoVinculado_1 = 1;
                    }.bind(this));
                }
                if (alumnoVinculado_1 == 1) {
                    alertify.error('Este alumno ya está vinculado al grupo');
                }
                else {
                    this._asignaturaGrupoService.insertaAlumno(this.selectedAlumno, this.idAsignaturaGrupo, this.idTipoMateria).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.consultaAlumnos();
                            _this._modalService.dismissAll();
                            alertify.success(response['msg']);
                        }
                        else {
                            alertify.error(response['msg']);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
    };
    ConsultaAlumnosAsignaturasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-alumnos-asignaturas',
            template: __webpack_require__(/*! ./consulta-alumnos-asignaturas.component.html */ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.html"),
            styles: [__webpack_require__(/*! ./consulta-alumnos-asignaturas.component.scss */ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_4__["AsignaturaGrupoService"],
            _alumno_historial_historial_service__WEBPACK_IMPORTED_MODULE_5__["HistorialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            // private _grupoService: GrupoService
        ])
    ], ConsultaAlumnosAsignaturasComponent);
    return ConsultaAlumnosAsignaturasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h4 *ngIf=\"grupo\">{{title}} {{grupo.grupo}}</h4>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <button *ngIf=\"grupo && !bloquear\" (click)=\"open(contentNuevoAlumno,'alumno')\" class=\"btn btn-success my-3\"><i class=\"fa fa-plus\"></i> {{'nuevoAlumno' | translate}} </button>\r\n        <button *ngIf=\"grupo && bloquear\" disabled=\"true\" class=\"btn btn-success my-3\"><i class=\"fa fa-plus\"></i> {{'nuevoAlumno' | translate}} </button>\r\n        <button class=\"btn btn-success my-3 pull-right\" (click)=\"generaReporteAlumnosGrupo()\">Exportar a excel </button>\r\n\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-striped table-bordered \">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>{{'nombreAlumno' | translate}}</th>\r\n                        <th>{{'claveAlumno' | translate}} </th>\r\n                        <th>{{'curpAlumno' | translate}}</th>\r\n                        <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>\r\n                    </tr>\r\n                    <tr *ngIf=\"alumnos.length === 0\">\r\n                        <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let alumno of alumnos; let i = index;\" [ngClass]=\"{'alert-danger':alumno.situacion_alumno_id == 2 || alumno.situacion_alumno_id == 3}\">\r\n                        <td>{{i+1}}</td>\r\n                        <td><a [routerLink]=\"['/admin/alumno/materias/'+alumno.alumno_id]\">{{alumno.primer_apellido}} {{alumno.segundo_apellido}} {{alumno.nombre}}</a></td>\r\n                        <td>{{alumno.clave_alumno}}</td>\r\n                        <td>{{alumno.curp}}</td>\r\n                        <td [hidden]=\"tipoAdmin == 0\">\r\n                            <button (click)=\"eliminaAlumnoGrupo(alumno.alumno_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #contentNuevoAlumno let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'_modalAlumno' | translate}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <app-buscador-persona [idRol]=\"2\" (consultaExitosa)=\"alumnoSeleccionado($event)\"></app-buscador-persona>\r\n        <div *ngIf=\"selectedAlumno\" class=\"alert alert-info\">\r\n            <a href=\"javascript:void()\" (click)=\"cambiaPag(selectedAlumno.persona_id)\">\r\n                <h4>{{selectedAlumno.primer_apellido}} {{selectedAlumno.segundo_apellido}} {{selectedAlumno.nombre}}</h4>\r\n                <p *ngIf=\"selectedAlumno.matricula\">Matrícula: {{selectedAlumno.matricula}}</p>\r\n            </a>\r\n            <p *ngIf=\"selectedAlumno.carrera\">Carrera: {{selectedAlumno.carrera}}</p>\r\n            <p *ngIf=\"selectedAlumno.orden_jerarquico\">Grado: {{selectedAlumno.orden_jerarquico}}°</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"button\" class=\"btn btn-success\" (click)=\"guardarAlumno()\">Guardar</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bajas {\n  background-color: #ffcccc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZ3J1cG8vY29uc3VsdGEtYWx1bW5vcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcZ3J1cG9cXGNvbnN1bHRhLWFsdW1ub3NcXGNvbnN1bHRhLWFsdW1ub3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9ncnVwby9jb25zdWx0YS1hbHVtbm9zL2NvbnN1bHRhLWFsdW1ub3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFqYXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjY2NjICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ConsultaAlumnosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAlumnosComponent", function() { return ConsultaAlumnosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _service_grupo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/grupo.service */ "./src/app/administracion/grupo/service/grupo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaAlumnosComponent = /** @class */ (function () {
    function ConsultaAlumnosComponent(_usuarioService, _grupoService, route, _modalService, router) {
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this.route = route;
        this._modalService = _modalService;
        this.router = router;
        this.alumnos = [];
        this.bloquear = false;
        this.idGrupo = this.route.snapshot.paramMap.get('id');
        this.title = 'Consulta de alumnos en grupo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].url;
    }
    ConsultaAlumnosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._grupoService.consultaEspecifica(this.idGrupo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupo = response['grupo'][0];
            }
        }, function (error) {
            console.log(error);
        });
        this.consultaAlumnos();
    };
    ConsultaAlumnosComponent.prototype.cambiaPag = function (id_alumno) {
        var id = id_alumno;
        localStorage.setItem('id_persona', id);
        this.router.navigate(['../admin/alumno']);
        this._modalService.dismissAll();
    };
    ConsultaAlumnosComponent.prototype.consultaAlumnos = function () {
        var _this = this;
        this._grupoService.consultaAlumnosGrupo(this.idGrupo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumnos = response['alumnos'];
                var _numAlumnos = _this.alumnos.length;
                var cupo = parseInt(_this.grupo.cupo);
                if (cupo <= _numAlumnos) {
                    _this.bloquear = true;
                }
                else {
                    _this.bloquear = false;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAlumnosComponent.prototype.open = function (content, tipo) {
        if (tipo == 'alumno') {
            this.selectedAlumno = null;
        }
        this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            console.log(result);
            if (result == 'save') {
            }
        }, function (reason) {
        });
    };
    ConsultaAlumnosComponent.prototype.alumnoSeleccionado = function (event) {
        if (event.status) {
            this.selectedAlumno = event.persona;
            console.log(this.selectedAlumno);
        }
    };
    ConsultaAlumnosComponent.prototype.guardarAlumno = function () {
        var _this = this;
        if (!this.selectedAlumno)
            alertify.error('Debes seleccionar un alumno');
        else {
            var alumnoVinculado_1 = 0;
            if (this.alumnos) {
                this.alumnos.forEach(function (alumno) {
                    if (this.selectedAlumno.persona_id == alumno.alumno_id)
                        alumnoVinculado_1 = 1;
                }.bind(this));
            }
            if (alumnoVinculado_1 == 1) {
                alertify.error('Este alumno ya está vinculado al grupo');
            }
            else {
                this._grupoService.agregaAlumnoGrupo(this.selectedAlumno.persona_id, this.idGrupo, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this._modalService.dismissAll();
                        // this.consultaAlumnos();
                        _this.ngOnInit();
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ConsultaAlumnosComponent.prototype.eliminaAlumnoGrupo = function (id, index) {
        alertify.confirm('Eliminar', '¿deseas eliminar este alumno del grupo?', function () {
            var _this = this;
            this._grupoService.eliminaAlumnoGrupo(id, this.idGrupo, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.alumnos.splice(index, 1);
                    alertify.success(response['msg']);
                    _this.consultaAlumnos();
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
    ConsultaAlumnosComponent.prototype.generaReporteAlumnosGrupo = function () {
        var params = '?grupo_id=' + this.idGrupo;
        var urlReporte = this.url + 'reportes/grupos/alumnosRegulares.php' + params;
        window.open(urlReporte, '_blank');
    };
    ConsultaAlumnosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-alumnos',
            template: __webpack_require__(/*! ./consulta-alumnos.component.html */ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.html"),
            styles: [__webpack_require__(/*! ./consulta-alumnos.component.scss */ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _service_grupo_service__WEBPACK_IMPORTED_MODULE_2__["GrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ConsultaAlumnosComponent);
    return ConsultaAlumnosComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h4 *ngIf=\"grupo\">{{title}} {{grupo.grupo}} </h4>\r\n  </div>\r\n  <div class=\"col-12\">\r\n      <button  (click)=\"menuModal(contentNuevaAsignatura,'asignatura')\"  class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'nuevaAsignatura' | translate}} </button><br><br>\r\n      <div class=\"table-responsive\">\r\n          <table class=\"table table-striped table-bordered \">\r\n            <tbody>\r\n              <tr>\r\n                <th>{{'claveAsignatura' | translate}} </th>\r\n                <th>{{'nombreAsignatura' | translate}}</th>\r\n                <th>Editar fechas</th>\r\n                <th>{{'verDocente' | translate}}</th>\r\n                <th>{{'verAlumnosAsignatura' | translate}}</th>\r\n                <th>{{'situacionAsignaturaGrupo' | translate}}</th>\r\n                <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>                                                         \r\n              </tr>\r\n            <tr *ngIf=\"asignaturas.length == 0\">\r\n              <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n            </tr>\r\n              <tr *ngFor=\"let asignatura of asignaturas; let i = index;\">\r\n                <td>{{asignatura.asignatura_clave}}</td>\r\n                <td><a href=\"javascript:void(0)\" [routerLink]=\"['../../calificaciones/' + asignatura.asignatura_grupo_id]\">{{asignatura.asignatura}}</a></td>\r\n                \r\n                <td class=\"text-center\"><button class=\"btn btn-warning\" (click)=\"modalFechas(contentFechas, asignatura.fecha_inicio, asignatura.fecha_fin, asignatura.asignatura_grupo_id)\"><i class=\"fa fa-calendar\"></i></button></td>\r\n                <td class=\"text-center\"><button class=\"btn btn-success\" (click)=\"menuModal(contentDocente,'docente',asignatura.asignatura_grupo_id)\"><i class=\"fa fa-book\"></i></button></td>\r\n                <td class=\"text-center\"><a [routerLink]=\"['../../alumnoAsignatura/'+ asignatura.asignatura_grupo_id]\" class=\"btn btn-success\"><i class=\"fa fa-users\"></i></a></td>\r\n                \r\n                <td class=\"text-center\" [ngClass]=\"{'alert-success': asignatura.situacion_asignatura_grupo_id == 1,'alert-warning': asignatura.situacion_asignatura_grupo_id == 2 || asignatura.situacion_asignatura_grupo_id == 3,'alert-danger': asignatura.situacion_asignatura_grupo_id == 4}\">\r\n                  <p>{{asignatura.situacion_asignatura_grupo_descripcion}}</p>\r\n                  <a *ngIf=\" asignatura.situacion_asignatura_grupo_id != 4\" [routerLink]=\"['../../calculo/'+ asignatura.asignatura_grupo_id+'/2']\" class=\"btn btn-info\" ><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                </td>\r\n                <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\">\r\n                  <button (click)=\"eliminaAsignatura(asignatura.asignatura_grupo_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n                </td>\r\n              </tr>          \r\n          </tbody></table>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #contentFechas let-modal>\r\n    <form [formGroup]=\"fechasForm\" (ngSubmit)=\"actualizaFechas()\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Editar fechas</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"fecha_inicio\"><i class=\"fa fa-calendar\"></i> {{'fmFechaInicio' | translate}}:</label>\r\n          <input formControlName=\"fechaInicio\" class=\"form-control\" id=\"fecha_inicio\" type=\"date\">\r\n        </div>\r\n        <div class=\"form-group\">                               \r\n            <label class=\"control-label\" for=\"fecha_fin\"><i class=\"fa fa-calendar\"></i> {{'fmFechaFin' | translate}}:</label>\r\n            <input formControlName=\"fechaFin\" class=\"form-control\" id=\"fecha_fin\" type=\"date\">\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-success\">Guardar</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n\r\n\r\n<ng-template #contentNuevaAsignatura let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'_seleccionMateria' | translate}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <app-consulta-asignatura [nivel]=\"4\" [tipo]=\"'small'\" (sucessEvent)=\"getAsignatura($event)\"></app-consulta-asignatura>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button  type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n        <button [disabled]=\"guardando\" type=\"button\" class=\"btn btn-success\" (click)=\"guardarAsignatura()\">Guardar</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<ng-template #contentDocente let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">{{'_modalDocente' | translate}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div   *ngIf=\"!editorDocente\" >\r\n          <div *ngIf=\"!docente\" class=\"alert alert-warning text-center\">\r\n            <p>{{'_asignaturaSinDocente' | translate }}</p>\r\n            <button (click)=\"abrirEditorDocente()\" class=\"btn btn-primary\">{{'_agregarDocente' | translate}}</button>\r\n          </div>\r\n          <div  *ngIf=\"docente\" class=\"alert alert-success text-center\" >\r\n          <p>{{'_docente' | translate }}:</p>\r\n            <h4>{{docente.primer_apellido}} {{docente.segundo_apellido}}  {{docente.nombre}}\r\n              <br><small>{{docente.clave_docente}}</small>\r\n            </h4>\r\n            <button (click)=\"abrirEditorDocente()\" class=\"btn btn-primary\">{{'_cambiarDocente' | translate}}</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"editorDocente\">\r\n            <app-buscador-persona [idRol]=\"3\" (consultaExitosa)=\"docenteSeleccionado($event)\"></app-buscador-persona>\r\n            <div *ngIf=\"selectedDocente\" class=\"alert alert-info\">\r\n              <a href=\"javascript:void()\"   (click)=\"cambiaPag(selectedDocente.persona_id)\" >\r\n                <h4>{{selectedDocente.primer_apellido}} {{selectedDocente.segundo_apellido}} {{selectedDocente.nombre}}</h4>\r\n                <p>Clave: {{selectedDocente.clave_profesor}}</p>\r\n              </a>\r\n                <!-- <p> {{selectedDocente.curp}}</p> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('exit')\">Salir</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"guardarDocente()\">Guardar</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2dydXBvL2NvbnN1bHRhLWFzaWduYXR1cmFzL2NvbnN1bHRhLWFzaWduYXR1cmFzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConsultaAsignaturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaAsignaturasComponent", function() { return ConsultaAsignaturasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _service_grupo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/grupo.service */ "./src/app/administracion/grupo/service/grupo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/asignatura-grupo.service */ "./src/app/administracion/grupo/service/asignatura-grupo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsultaAsignaturasComponent = /** @class */ (function () {
    function ConsultaAsignaturasComponent(route, _usuarioService, _grupoService, _modalService, formBuilder, _asignaturaGrupoService, router) {
        this.route = route;
        this._usuarioService = _usuarioService;
        this._grupoService = _grupoService;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this._asignaturaGrupoService = _asignaturaGrupoService;
        this.router = router;
        this.editorDocente = 0;
        this.asignaturas = [];
        this.guardando = false;
        this.idGrupo = this.route.snapshot.paramMap.get('id');
        this.title = 'Consulta de asignaturas en grupo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(ConsultaAsignaturasComponent.prototype, "f", {
        get: function () { return this.fechasForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultaAsignaturasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._grupoService.consultaEspecifica(this.idGrupo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupo = response['grupo'][0];
            }
        }, function (error) {
            console.log(error);
        });
        this.consultaAsignaturas();
        this.fechasForm = this.formBuilder.group({
            fechaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fechaFin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    ConsultaAsignaturasComponent.prototype.cambiaPag = function (id_persona) {
        console.log(id_persona);
        var id = id_persona;
        localStorage.setItem('id_persona', id);
        this.router.navigate(['../admin/docente']);
        this._modalService.dismissAll();
    };
    ConsultaAsignaturasComponent.prototype.consultaAsignaturas = function () {
        var _this = this;
        this._grupoService.consultaAsignatura(this.idGrupo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.asignaturas = response['Asignaturas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAsignaturasComponent.prototype.consultaAsignaturaDocente = function () {
        var _this = this;
        this._grupoService.consultaDocenteAsignatura(this.idAsignaturaGrupoSelected, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.docente = response['docente'][0];
            }
            else {
                _this.docente = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAsignaturasComponent.prototype.actualizaFechas = function () {
        var _this = this;
        this._asignaturaGrupoService.actualizaFechas(this.jwt, this.fechasForm, this.idAsignaturaFechas).subscribe(function (response) {
            if (response && response['status']) {
                _this.consultaAsignaturas();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaAsignaturasComponent.prototype.modalFechas = function (content, fechaInicio, fechaFin, idSelected) {
        // console.log(fechaInicio, fechaFin)
        this.idAsignaturaFechas = idSelected;
        if (fechaInicio && fechaFin && fechaInicio != "0000-00-00 00:00:00" && fechaFin != "0000-00-00 00:00:00") {
            var _fechaInicio = fechaInicio.split(" ")[0];
            var _fechaFin = fechaFin.split(" ")[0];
            this.fechasForm.get('fechaInicio').setValue(_fechaInicio);
            this.fechasForm.get('fechaFin').setValue(_fechaFin);
            this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        }
        else {
            this.fechasForm.get('fechaInicio').setValue(" ");
            this.fechasForm.get('fechaFin').setValue(" ");
            this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        }
    };
    ConsultaAsignaturasComponent.prototype.menuModal = function (content, tipo, id) {
        if (id === void 0) { id = 0; }
        if (tipo == 'asignatura')
            this.idOrdenAsignaturaSelected = null;
        if (tipo == 'docente') {
            this.editorDocente = 0;
            this.idAsignaturaGrupoSelected = id;
            this.selectedDocente = 0;
            this.consultaAsignaturaDocente();
        }
        this.open(content);
    };
    ConsultaAsignaturasComponent.prototype.open = function (content) {
        this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            if (result == 'save') {
            }
        }, function (reason) {
        });
    };
    ConsultaAsignaturasComponent.prototype.abrirEditorDocente = function () {
        this.editorDocente = 1;
    };
    ConsultaAsignaturasComponent.prototype.docenteSeleccionado = function (event) {
        if (event.status) {
            this.selectedDocente = event.persona;
            console.log(this.selectedDocente);
        }
    };
    ConsultaAsignaturasComponent.prototype.getAsignatura = function (event) {
        // console.log(event)
        this.idOrdenAsignaturaSelected = event.idOrdenAsignatura;
    };
    ConsultaAsignaturasComponent.prototype.guardarAsignatura = function () {
        var _this = this;
        if (!this.idOrdenAsignaturaSelected)
            alertify.error('Debes seleccionar una asignatura');
        else {
            var asignaturaVinculada_1 = 0;
            if (this.asignaturas) {
                this.asignaturas.forEach(function (asignatura) {
                    if (this.idOrdenAsignaturaSelected == asignatura.orden_asignatura_id)
                        asignaturaVinculada_1 = 1;
                }.bind(this));
            }
            if (asignaturaVinculada_1 == 1) {
                alertify.error('Esta asignatura ya está vinculada al grupo');
            }
            else {
                this.guardando = true;
                this._grupoService.agregaGrupoAsignatura(this.idOrdenAsignaturaSelected, this.idGrupo, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        alertify.success(response['msg']);
                        _this.consultaAsignaturas();
                        _this._modalService.dismissAll();
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                    _this.guardando = false;
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    ConsultaAsignaturasComponent.prototype.guardarDocente = function () {
        var _this = this;
        if (!this.selectedDocente) {
            alertify.success('No se seleccionó docente');
        }
        else {
            this._grupoService.agregaAsignaturaDocente(this.idAsignaturaGrupoSelected, this.selectedDocente.persona_id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.consultaAsignaturas();
                    _this._modalService.dismissAll();
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ConsultaAsignaturasComponent.prototype.eliminaAsignatura = function (id, index) {
        alertify.confirm('¿deseas eliminar esta asignatura del grupo?', function () {
            var _this = this;
            this._grupoService.eliminaGrupoAsignatura(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.asignaturas.splice(index, 1);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentNuevaAsignatura'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], ConsultaAsignaturasComponent.prototype, "modalSesion", void 0);
    ConsultaAsignaturasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta-asignaturas',
            template: __webpack_require__(/*! ./consulta-asignaturas.component.html */ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.html"),
            styles: [__webpack_require__(/*! ./consulta-asignaturas.component.scss */ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _service_grupo_service__WEBPACK_IMPORTED_MODULE_3__["GrupoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _service_asignatura_grupo_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturaGrupoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsultaAsignaturasComponent);
    return ConsultaAsignaturasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/consulta/consulta.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta/consulta.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n    <h4 class=\"top-buffer\">{{title}}</h4>\r\n    <br>\r\n    <!--div class=\"form-group\" >\r\n            <label class=\"control-label\" for=\"\">1. {{'selectCiclo' | translate}}</label>\r\n            <select class=\"form-control\" (change)=\"consultaGrupo_($event)\" >\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n              <option *ngFor=\"let ciclo of ciclos\" [value]=\"ciclo.ciclo_id\">{{ciclo.ciclo_desc}}</option>\r\n            </select>\r\n          </div-->\r\n    <div>\r\n      <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'nuevoGrupo' | translate}}\r\n      </a>\r\n      <hr>\r\n      <form [formGroup]=\"formConsulta\">\r\n        <div class=\"form-group\">\r\n          <div class=\"custom-control custom-radio custom-control-inline\"\r\n            *ngFor=\"let tipo of tipoConsulta; let i = index;\">\r\n            <input type=\"radio\" [value]=\"tipo.value\" id=\"radio_{{i}}\" formControlName=\"busqueda\"\r\n              class=\"custom-control-input\">\r\n            <label class=\"custom-control-label\" for=\"radio_{{i}}\">{{tipo.label}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"fc.filtro\">\r\n          <select class=\"form-control\" name=\"\" id=\"\" formControlName=\"filtro\">\r\n            <option value=\"\" disabled selected hidden>Selecciona {{datosSelect.opcion}}</option>\r\n            <option [value]=\"select[datosSelect.value]\" *ngFor=\"let select of Selects; let i = index;\">\r\n              {{select[datosSelect.label]}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"fc.busqueda.value == 5\">\r\n          <app-consulta-asignatura [tipo]=\"'large'\" [parentForm]=\"formConsulta\" [nivel]=\"3\"></app-consulta-asignatura>\r\n        </div>\r\n      </form>\r\n      <div class=\"input-group mb-3\" *ngIf=\"bandera\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\"\r\n          aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n        <div class=\"input-group-append\">\r\n          <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n      </div>\r\n      <div class=\" table-responsive\" *ngIf=\"bandera\">\r\n        <table class=\"table table-striped table-bordered \">\r\n          <tbody>\r\n            <tr>\r\n              <th>{{'grupo' | translate}}</th>\r\n              <th>{{'nombreGrupo' | translate}} </th>\r\n              <th>{{'Carrera' | translate}}</th>\r\n              <th>{{'Grado' | translate}}</th>\r\n              <th>{{'Ciclo' | translate}}</th>\r\n              <th>{{'grupoAlumnos' | translate}}</th>\r\n              <th>{{'grupoAsignaturas' | translate}}</th>\r\n              <th>{{'situacionGrupo' | translate}}</th>\r\n              <!-- <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n              <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th> -->\r\n            </tr>\r\n            <tr *ngIf=\"(grupos | filter: search).length === 0\">\r\n              <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n            </tr>\r\n            <tr *ngFor=\"let grupo of grupos | filter:search; let i = index;\">\r\n              <td>{{grupo.grupo}}</td>\r\n              <td>\r\n                <button class=\"btn btn-link m-0 p-0\" (click)=\"mostrarGrupo(modalGrupo, grupo, i)\">{{grupo.nombre_grupo}}</button>\r\n              </td>\r\n              <td>\r\n                <p class=\"my-0\">{{grupo.carrera}}</p>\r\n              </td>\r\n              <td>\r\n                <p class=\"my-0\">{{grupo.grado}}</p>\r\n              </td>\r\n              <td>{{grupo.ciclo_desc}}</td>\r\n              <td class=\"text-center\">\r\n                <a [routerLink]=\"['../consultaAlumnos/'+grupo.grupo_id]\" class=\"btn btn-success\"><i\r\n                    class=\"fa fa-users\"></i></a>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                <a (click)=\"guardaIdGrupo(grupo.grupo_id)\" [routerLink]=\"['../consultaAsignaturas/'+grupo.grupo_id]\"\r\n                  class=\"btn btn-success\"><i class=\"fa fa-book\"></i></a>\r\n              </td>\r\n              <td class=\"text-center\"\r\n                [ngClass]=\"{'alert-success': grupo.situacion_grupo_id == 1,'alert-warning': grupo.situacion_grupo_id == 2 || grupo.situacion_grupo_id == 3,'alert-danger': grupo.situacion_grupo_id == 4 || grupo.situacion_grupo_id == 5}\">\r\n                <p>{{grupo.situacion_grupo_descripcion}}</p>\r\n                <a *ngIf=\" grupo.situacion_grupo_id < 4\" [routerLink]=\"['../calculo/'+ grupo.grupo_id+'/1']\"\r\n                  class=\"btn btn-info\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                <a *ngIf=\" grupo.situacion_grupo_id == 4\" class=\"btn btn-light\" (click)=\"transferir(content, grupo.grupo_id, grupo.grupo,grupo.nombre_grupo,i)\"><i class=\"fa fa-share\"></i></a>\r\n              </td>\r\n              <!-- <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\">\r\n                <a [routerLink]=\"['../editar/'+grupo.grupo_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n              </td>\r\n              <td [hidden]=\"tipoAdmin == 0\">\r\n                <button (click)=\"eliminar(grupo.grupo_id, i)\" class=\"btn btn-danger\"><i\r\n                    class=\"fa fa-trash\"></i></button>\r\n              </td> -->\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content>\r\n  <form [formGroup]=\"grupoForm\" (ngSubmit)=\"enviarInformacion()\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Transferir grupo {{f.clave.value}}</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"nuevoNombre\" name=\"inlineDefaultRadiosExample\" [checked]=\"tipoForm ==1\" (click)=\"cambiaTipo();\">\r\n            <label class=\"custom-control-label\" for=\"nuevoNombre\">Crear nuevo nombre de grupo</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" class=\"custom-control-input\" id=\"mismoNombre\" name=\"inlineDefaultRadiosExample\" [checked]=\"tipoForm ==2\" (click)=\"cambiaTipo();\">\r\n            <label class=\"custom-control-label\" for=\"mismoNombre\">Usar el mismo nombre del grupo</label>\r\n          </div><br><br>\r\n          <div *ngIf=\"tipoForm==1\" class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"clave\">Clave:</label>\r\n                <input formControlName=\"clave\" class=\"form-control\" id=\"clave\" placeholder=\"Clave\" type=\"text\">\r\n                <span class=\"invalidText\" *ngIf=\"f.clave.invalid && f.clave.touched\">\r\n                  Ingresa una clave\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"nombre\">Nombre</label>\r\n                <input formControlName=\"nombre\" class=\"form-control\" id=\"nombre\" placeholder=\"Nombre\" type=\"text\">\r\n                <span class=\"invalidText\" *ngIf=\"f.nombre.invalid && f.nombre.touched\">\r\n                  {{'fmErrText' | translate}}\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group \" rel=\"1\">\r\n            <label class=\"control-label\" for=\"\">Selecciona ciclo donde se transfiere el grupo:</label>\r\n            <select formControlName=\"ciclo\" class=\"form-control\">\r\n              <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n              <option [value]=\"ciclo.ciclo_id\" *ngFor=\"let ciclo of ciclos\">{{ciclo.ciclo_desc}}</option>\r\n            </select>\r\n            <span class=\"invalidText\" *ngIf=\"f.ciclo.invalid && f.ciclo.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div>\r\n          <!--div class=\"form-group \" rel=\"1\">\r\n            \r\n            <label class=\"control-label\" for=\"numMateria\" *ngIf=\"f.validacionReprobadas.value != 1\">Máximo de materias reprobadas permitidas para pasar al siguiente grado:</label>\r\n            <select formControlName=\"numMateria\" class=\"form-control\" *ngIf=\"f.validacionReprobadas.value != 1\">\r\n              <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n            </select>\r\n            <label class=\"control-label\" for=\"validacionReprobadas\">\r\n            <input formControlName=\"validacionReprobadas\"  id=\"validacionReprobadas\"  type=\"checkbox\" value=\"1\">\r\n            No validar materias reprobadas\r\n          </label>\r\n      \r\n            <span class=\"invalidText\" *ngIf=\"f.numMateria.invalid && f.numMateria.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div-->\r\n          <!-- <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"numeroAlumn\">Numero de alumnos por materia:</label>\r\n            <input formControlName=\"numeroAlumn\" class=\"form-control\" id=\"numeroAlumn\" placeholder=\"Numero\"\r\n              type=\"number\">\r\n            <span class=\"invalidText\" *ngIf=\"f.numeroAlumn.invalid && f.numeroAlumn.touched\">\r\n              {{'fmErrText' | translate}}\r\n            </span>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"submit\" class=\"btn btn-success\">Transferir grupo</button>\r\n      <button [disabled]=\"bloquea\" type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cerrar</button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #modalGrupo let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\"></h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <div class=\"container\">\r\n          <h4 class=\"mb-3\"><b>Nombre del grupo: {{grupoSeleccionado.nombre_grupo}}</b></h4>\r\n          <h5 class=\"mb-3\">Clave: {{grupoSeleccionado.grupo}}</h5>\r\n          <p><b>Descripción:</b><br> {{grupoSeleccionado.descripcion}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <div class=\"container border rounded text-primary border-primary pt-2\">\r\n          <p>Ciclo: {{grupoSeleccionado.ciclo_desc}}</p>\r\n          <p>Carrera: {{grupoSeleccionado.carrera}}</p>\r\n          <p>Plan de estudios: {{grupoSeleccionado.plan_estudio}}</p>\r\n          <p>Grado: {{grupoSeleccionado.grado}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 mt-3\" [hidden]=\"tipoAdmin == 0\">\r\n        <button (click)=\"eliminar(grupoSeleccionado.grupo_id)\" class=\"btn btn-danger pull-right\"><i class=\"fa fa-trash\"></i> Eliminar</button>\r\n        <button (click)=\"modal.close()\" [routerLink]=\"['../editar/'+grupoSeleccionado.grupo_id]\" class=\"btn btn-info pull-right mr-2\"><i class=\"fa fa-pencil\"></i> Editar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta/consulta.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta/consulta.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZ3J1cG8vY29uc3VsdGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZ3J1cG8vY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/consulta/consulta.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/grupo/consulta/consulta.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_grupo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/grupo.service */ "./src/app/administracion/grupo/service/grupo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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
    function ConsultaComponent(_usuarioService, _catalogoService, translate, _gruposService, formBuilder, modalService) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.translate = translate;
        this._gruposService = _gruposService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.consultaInicial = 0;
        this.tipoConsulta = [
            { value: 1, label: 'Todos' },
            { value: 2, label: 'Ciclo', funcion: 'consultaCiclo', variable: 'ciclo', descripcion: 'ciclo_desc', valor: 'ciclo_id' },
            { value: 3, label: 'Campus', funcion: 'consultaCampus', variable: 'campus', descripcion: 'campus', valor: 'campus_id' },
            { value: 4, label: 'Asignatura', funcion: 'consultaAsignaturaTabla', variable: 'Asignaturas', descripcion: 'asignatura', valor: 'asignatura_id' },
            { value: 5, label: 'Grado' }
        ];
        this.tipoForm = 1;
        this.bandera = false;
        this.bloquea = false;
        this.title = 'Consulta de grupos';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(ConsultaComponent.prototype, "f", {
        get: function () { return this.grupoForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultaComponent.prototype.ngOnInit = function () {
        this.consultaCatCiclo();
        this.formConsulta = this.formBuilder.group({
            busqueda: [1]
        });
        this.grupoForm = this.formBuilder.group({
            clave: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            ciclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            numMateria: [''],
            validacionReprobadas: ['']
            // numeroAlumn: ['', Val,idators.required],
        });
        this.setValueChanges();
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        /*this._catalogoService.consultaCiclo().subscribe(
      response =>{
          if(response && response['status']){
              this.ciclos = response['ciclo'];
          }
      },error =>{
        console.log(<any>error)
      });*/
        this.consultaGrupos();
    };
    ConsultaComponent.prototype.consultaCatCiclo = function () {
        var _this = this;
        this._catalogoService.consultaCiclo().subscribe(function (response) {
            if (response && response['status']) {
                _this.ciclos = response['ciclo'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.consultaGrado = function (id_plan, orden_jerarquico_id) {
        var _this = this;
        this._catalogoService.consultaGrado(id_plan).subscribe(function (response) {
            if (response && response['status']) {
                var orden = response['ordenJerarquico'];
                var tam = orden.length;
                _this.ordenJerarquico = orden[tam - 1];
                if (orden_jerarquico_id == _this.ordenJerarquico.orden_jerarquico_id) {
                    alertify.error('Este grupo no se puede transferir a un grado mayor');
                    _this.bloquea = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.enviarInformacion = function () {
        var _this = this;
        this.bloquea = true;
        if (this.tipoForm == 2) {
            this.grupoForm.controls.clave.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"]["null"]);
            this.grupoForm.controls.clave.updateValueAndValidity();
            this.grupoForm.controls.nombre.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"]["null"]);
            this.grupoForm.controls.nombre.updateValueAndValidity();
        }
        if (this.grupoForm.invalid) {
            Object.keys(this.grupoForm.controls).forEach(function (controlKey) {
                _this.grupoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._gruposService.tranfiereGrupo(this.grupoForm, this.id_grupo, this.tipoForm).subscribe(function (response) {
            if (response && response['status']) {
                _this.bloquea = false;
                _this.grupos[_this.selectedIndex].situacion_grupo_id = 5;
                _this.modalService.dismissAll();
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
                _this.bloquea = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(ConsultaComponent.prototype, "fc", {
        get: function () { return this.formConsulta.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultaComponent.prototype.setValueChanges = function () {
        var _this = this;
        this.formConsulta.get('busqueda').valueChanges.subscribe(function (tipo) {
            _this.bandera = false;
            _this.tipo = tipo;
            _this.grupos = null;
            if (tipo == 1 || tipo == 5) {
                if (_this.formConsulta.get('filtro'))
                    _this.formConsulta.removeControl('filtro');
            }
            if (tipo != 1 && tipo != 5) {
                if (_this.formConsulta.get('carrera_id'))
                    _this.formConsulta.removeControl('carrera_id');
                if (_this.formConsulta.get('plan_estudio_id'))
                    _this.formConsulta.removeControl('plan_estudio_id');
                if (_this.formConsulta.get('plan_orden_id'))
                    _this.formConsulta.removeControl('plan_orden_id');
                if (!_this.formConsulta.get('filtro')) {
                    _this.formConsulta.addControl('filtro', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''));
                    _this.formConsulta.get('filtro').valueChanges.subscribe(function (filtro) {
                        if (filtro != '')
                            _this.consultaGrupos(_this.tipo, filtro);
                    });
                }
                else {
                    _this.formConsulta.get('filtro').setValue('');
                }
                _this.setSelect(tipo);
            }
            else if (tipo == 5) {
                setTimeout(function () {
                    if (_this.formConsulta.get('plan_orden_id')) {
                        _this.formConsulta.get('plan_orden_id').valueChanges.subscribe(function (id) {
                            if (id != '')
                                _this.consultaGrupos(_this.tipo, id);
                        });
                    }
                }, 100);
            }
            else if (tipo == 1) {
                _this.consultaGrupos();
            }
        });
    };
    ConsultaComponent.prototype.consultaGrupos = function (tipo, filtro) {
        var _this = this;
        if (tipo === void 0) { tipo = 1; }
        if (filtro === void 0) { filtro = ''; }
        this._gruposService.consultaGrupoFiltro(tipo, filtro).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupos = response['grupos'];
                console.log(_this.grupos);
            }
            else {
                _this.grupos = null;
            }
            _this.bandera = true;
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.setSelect = function (tipo) {
        var _this = this;
        this.Selects = undefined;
        var datos = this.setDatos(tipo);
        this._catalogoService[datos.funcion](this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Selects = response[datos.variable];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.setDatos = function (tipo) {
        var datos = this.tipoConsulta.find(function (t) { return t.value == tipo; });
        this.datosSelect = {
            label: datos.descripcion, value: datos.valor,
            opcion: (tipo != 4) ? 'un ' + datos.label.toLowerCase() : 'una ' + datos.label.toLowerCase()
        };
        return { funcion: datos.funcion, variable: datos.variable };
    };
    ConsultaComponent.prototype.eliminar = function (id) {
        var index = this.indexGrupo;
        alertify.confirm(this.translate.instant('MsgEraseGroup'), function () {
            var _this = this;
            this._gruposService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.modalService.dismissAll();
                    _this.grupos.splice(index, 1);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.success(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Operación cancelada');
        });
    };
    ConsultaComponent.prototype.guardaIdGrupo = function (id) {
        if (localStorage.getItem('idGrupo'))
            localStorage.removeItem('idGrupo');
        localStorage.setItem('idGrupo', id);
    };
    ConsultaComponent.prototype.cambiaTipo = function () {
        if (this.tipoForm == 1) {
            this.tipoForm = 2;
        }
        else if (this.tipoForm == 2) {
            this.tipoForm = 1;
        }
    };
    ConsultaComponent.prototype.transferir = function (content, id_grupo, grupo, nombreGrupo, i) {
        this.id_grupo = id_grupo;
        this.grupoForm.controls.clave.setValue(grupo);
        this.grupoForm.controls.nombre.setValue(nombreGrupo);
        this.selectedIndex = i;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
    };
    ConsultaComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    ConsultaComponent.prototype.mostrarGrupo = function (modal, grupo, i) {
        this.indexGrupo = i;
        this.grupoSeleccionado = grupo;
        this.modalService.open(modal, { size: 'lg' });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/grupo/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/grupo/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _service_grupo_service__WEBPACK_IMPORTED_MODULE_4__["GrupoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/form/form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/administracion/grupo/form/form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 animated slideInUp\">\r\n  <h4 class=\"top-buffer\">{{title}}</h4>\r\n  <form [formGroup]=\"grupoForm\" (ngSubmit)=\"enviarInformacion()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"clave_grupo\">{{'claveGrupo' | translate}}</label>\r\n          <input formControlName=\"claveGrupo\" class=\"form-control\" id=\"clave_grupo\"\r\n            placeholder=\"{{'claveGrupo' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.claveGrupo.invalid && f.claveGrupo.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"nombre_grupo\">{{'nombreGrupo' | translate}}</label>\r\n          <input formControlName=\"nombreGrupo\" class=\"form-control\" id=\"nombre_grupo\"\r\n            placeholder=\"{{'nombreGrupo' | translate}}\" type=\"text\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.nombreGrupo.invalid && f.nombreGrupo.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"descripcion_grupo\">{{'descripcion' | translate}} (Opcional)</label>\r\n          <input formControlName=\"descripcion\" class=\"form-control\" id=\"descripcion_grupo\"\r\n            placeholder=\"{{'descripcion' | translate}}\" type=\"text\"  autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.descripcion.invalid && f.descripcion.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"cupo\">{{'cupo' | translate}}</label>\r\n          <input formControlName=\"cupo\" class=\"form-control\" id=\"cupo\" placeholder=\"{{'cupo' | translate}}\"\r\n            type=\"number\" required autocomplete=\"off\">\r\n          <span class=\"invalidText\" *ngIf=\"f.cupo.invalid && f.cupo.touched\">\r\n            {{'fmErrNumber' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group \" rel=\"1\">\r\n          <label class=\"control-label\" for=\"\">{{'Ciclo' | translate}}:</label>\r\n          <select formControlName=\"idCiclo\" class=\"form-control\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"ciclo.ciclo_id\" *ngFor=\"let ciclo of ciclos\">{{ciclo.ciclo_desc}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.idCiclo.invalid && f.idCiclo.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <label>\r\n          <input type=\"checkbox\" formControlName=\"seleccionaCampus\" (change)=\"mostrarCampus()\" value=\"1\">\r\n          Agregar Campus\r\n        </label>\r\n        <div *ngIf=\"_mostrarCampus\" class=\"form-group \" rel=\"1\">\r\n          <label class=\"control-label\" for=\"\">Campus (opcional)</label>\r\n          <select formControlName=\"campus\" class=\"form-control\">\r\n            <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n            <option [value]=\"_campus.campus_id\" *ngFor=\"let _campus of campus\">{{_campus.campus}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.campus.invalid && f.campus.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div><br>\r\n        <button [hidden]=\"tipoAdmin == 0\" *ngIf=\"idGrupo\" type=\"submit\"\r\n          class=\"btn btn-primary pull-right enviar-datos-grupos\">{{'fmSave' | translate}}</button>\r\n      </div>\r\n      <div class=\"col-md-6\" *ngIf=\"!idGrupo\">\r\n        <app-consulta-asignatura *ngIf=\"grupoForm\" [tipo]=\"'small'\" [parentForm]=\"grupoForm\" [nivel]=\"3\">\r\n        </app-consulta-asignatura>\r\n        <br>\r\n        <label *ngIf=\"f.plan_orden_id && f.plan_orden_id.value\">\r\n          <input type=\"checkbox\" formControlName=\"completo\" (change)=\"mostrarAlumnos($event)\">\r\n          {{'guardarconalumnos' |translate}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"f.plan_orden_id && f.plan_orden_id.value && seleccionarAlumnos\" class=\"row mt-3\">\r\n      <div *ngIf=\"alumnos.length\" class=\"col-6\">\r\n        <h5>Selecciona los alumnos que vas a agregar al grupo</h5>\r\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" formArrayName=\"alumnos\"\r\n          *ngFor=\"let item of alumnosArray.controls; let i = index;\">\r\n          <div class=\"col-2\">\r\n            <form [formGroupName]=\"i\">\r\n              <input id=\"alumno_{{i}}\" class=\"form-control\" formControlName=\"idAlumno\" type=\"checkbox\"\r\n                (click)=\"setIdAlumno(i, item)\">\r\n            </form>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <label for=\"alumno_{{i}}\">\r\n              {{alumnos[i].nombre}} {{alumnos[i].primer_apellido}} {{alumnos[i].segundo_apellido}} -\r\n              {{alumnos[i].clave_alumno}}\r\n            </label>\r\n          </div>\r\n        </li>\r\n      </div>\r\n      <div *ngIf=\"!alumnos.length\" class=\"col-6\">\r\n        <div class=\"alert alert-warning\">\r\n          No hay alumnos en el grado que no esten asignados a un grupo\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"asignaturas.length\" class=\"col-6\">\r\n        <h5>Selecciona las asignaturas que vas a agregar al grupo</h5>\r\n        <!-- <div class=\"input-group mb-3\">\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"search\" placeholder=\"{{'SearchInput' | translate}}\" \r\n              aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n            </div>\r\n          </div> -->\r\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" formArrayName=\"asignaturas\"\r\n          *ngFor=\"let item of asignaturasArray.controls | filter: search; let i = index;\">\r\n          <div class=\"col-2\">\r\n            <form [formGroupName]=\"i\">\r\n              <input id=\"grupo_{{i}}\" class=\"form-control\" formControlName=\"idOrdenAsignatura\" type=\"checkbox\"\r\n                (click)=\"setIdOrden(i, item)\">\r\n            </form>\r\n          </div>\r\n          <div class=\"col-10\">\r\n            <label for=\"grupo_{{i}}\">{{asignaturas[i].asignatura}} </label>\r\n          </div>\r\n        </li>\r\n      </div>\r\n      <div *ngIf=\"!asignaturas.length\" class=\"col-6\">\r\n        <div class=\"alert alert-warning\">\r\n          No hay asignaturas en el grado\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!idGrupo\" class=\"row\">\r\n      <div class=\"col-12\">\r\n        <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right enviar-datos-grupos\" [disabled]=\"cargando\">\r\n          <span *ngIf=\"!cargando\">{{'fmSave' | translate}}</span>\r\n          <span *ngIf=\"cargando\"><i class=\"fa fa-spin fa-spinner\"></i> {{'Guardando información' | translate}}</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n  <div class=\"resultado-alta-grupos margin-top\"></div>\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"input-group mb-3\">\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" placeholder=\"{{'SearchInput' | translate}}\" \r\n    aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n  <div class=\"input-group-append\">\r\n    <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"asignaturas\">\r\n<li class=\"list-group-item d-flex justify-content-between align-items-center\" \r\n  *ngFor=\"let item of asignaturas | filter: searchInput; let i = index;\">\r\n  <div class=\"col-2\">\r\n      <input id=\"grupo1_{{i}}\" class=\"form-control\" type=\"checkbox\" (click)=\"verDatos()\" >\r\n  </div>\r\n  <div class=\"col-10\">\r\n    <label for=\"grupo1_{{i}}\">{{asignaturas[i].asignatura}} </label>\r\n  </div>\r\n</li>\r\n</div> -->"

/***/ }),

/***/ "./src/app/administracion/grupo/form/form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/administracion/grupo/form/form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vZ3J1cG8vZm9ybS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9ncnVwby9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/form/form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/grupo/form/form.component.ts ***!
  \*************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _service_grupo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/grupo.service */ "./src/app/administracion/grupo/service/grupo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _plan_estudios_services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../plan-estudios/services/orden-jerarquico.service */ "./src/app/administracion/plan-estudios/services/orden-jerarquico.service.ts");
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
    function FormComponent(formBuilder, _usuarioService, _gruposService, _ordenJerarquicoService, _catalogoService, router, route) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._gruposService = _gruposService;
        this._ordenJerarquicoService = _ordenJerarquicoService;
        this._catalogoService = _catalogoService;
        this.router = router;
        this.route = route;
        this.seleccionarAlumnos = false;
        this._mostrarCampus = false;
        this.cargando = false;
        this.idGrupo = this.route.snapshot.paramMap.get('id');
        if (this.idGrupo)
            this.title = 'Editar grupo';
        else
            this.title = 'Nuevo grupo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(FormComponent.prototype, "f", {
        get: function () { return this.grupoForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        this.grupoForm = this.formBuilder.group({
            claveGrupo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descripcion: [''],
            nombreGrupo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            completo: [0],
            cupo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idCiclo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            seleccionaCampus: [''],
            campus: [''],
            alumnos: this.formBuilder.array([]),
            asignaturas: this.formBuilder.array([]),
            plan_orden_id: [''],
            search: ['']
        });
        this.grupoForm.get('search').valueChanges.subscribe(function (value) {
        });
        this.grupoForm.get('plan_orden_id').valueChanges.subscribe(function (x) {
            if (_this.id_plan_orden && _this.id_plan_orden != _this.grupoForm.get('plan_orden_id').value) {
                _this.grupoForm.get('completo').setValue(false);
                _this.seleccionarAlumnos = false;
            }
        });
        this._catalogoService.consultaCiclo().subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.ciclos = response['ciclo'];
            }
        }, function (error) {
            console.log(error);
        });
        if (this.idGrupo != null) {
            this._gruposService.consultaEspecifica(this.idGrupo, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.grupos = response['grupo'][0];
                    var idCampus = _this.grupos.campus_id ? _this.grupos.campus_id : '';
                    var seleccionaCampus = _this.grupos.campus_id ? '1' : '';
                    _this.mostrarCampus();
                    _this.grupoForm = _this.formBuilder.group({
                        claveGrupo: [_this.grupos.grupo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        nombreGrupo: [_this.grupos.nombre_grupo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        descripcion: [_this.grupos.descripcion, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        campus: [idCampus],
                        seleccionaCampus: [seleccionaCampus],
                        cupo: [_this.grupos.cupo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                        completo: [''],
                        plan_orden_id: [''],
                        idCiclo: [_this.grupos.ciclo_id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormComponent.prototype.mostrarCampus = function () {
        var _this = this;
        if (this._mostrarCampus == true) {
            this._mostrarCampus = false;
        }
        else if (this._mostrarCampus == false) {
            this._mostrarCampus = true;
            this._catalogoService.consultaCampus(this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.campus = response['campus'];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormComponent.prototype.mostrarAlumnos = function (event) {
        var _this = this;
        this.id_plan_orden = this.grupoForm.get('plan_orden_id').value;
        this.limpiarTodosAsignatura();
        this.limpiarTodosAlumno();
        this.asignaturas = [];
        this.alumnos = [];
        if (this.grupoForm.get('completo').value) {
            this._ordenJerarquicoService.consultaAsignatura(this.id_plan_orden, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.asignaturas = response['asignatura'];
                    _this.asignaturas.forEach(function (asignatura, index) {
                        this.agregarAsignatura(asignatura.orden_asignatura_id);
                    }.bind(_this));
                    console.log(_this.grupoForm.value);
                }
                else {
                    _this.asignaturas = [];
                }
            }, function (error) {
                console.log(error);
            });
            this._ordenJerarquicoService.consultaAlumnosSinGrupo(this.id_plan_orden, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.alumnos = response['alumnos'];
                    //this.eliminarAlumno(0);
                    _this.alumnos.forEach(function (alumno) {
                        this.agregarAlumno(alumno.alumno_id);
                    }.bind(_this));
                }
                else {
                    _this.alumnos = [];
                }
                _this.seleccionarAlumnos = true;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.seleccionarAlumnos = false;
        }
    };
    FormComponent.prototype.seleccionaOrden = function () {
    };
    Object.defineProperty(FormComponent.prototype, "asignaturasArray", {
        get: function () {
            return this.grupoForm.get('asignaturas');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "alumnosArray", {
        get: function () {
            return this.grupoForm.get('alumnos');
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.agregarAlumno = function (idAlumno) {
        this.itemsAlumno = this.grupoForm.get('alumnos');
        this.itemsAlumno.push(this.crearAlumno(idAlumno));
    };
    FormComponent.prototype.agregarAsignatura = function (idOrdenAsignatura) {
        this.itemsAsignatura = this.grupoForm.get('asignaturas');
        this.itemsAsignatura.push(this.crearAsignatura(idOrdenAsignatura));
    };
    FormComponent.prototype.crearAlumno = function (idAlumno) {
        return this.formBuilder.group({
            idAlumno: [idAlumno]
        });
    };
    FormComponent.prototype.crearAsignatura = function (idOrdenAsignatura) {
        return this.formBuilder.group({
            idOrdenAsignatura: [idOrdenAsignatura]
        });
    };
    FormComponent.prototype.eliminarAsignatura = function (index) {
        this.itemsAsignatura.removeAt(index);
    };
    FormComponent.prototype.eliminarAlumno = function (index) {
        this.itemsAlumno.removeAt(index);
    };
    FormComponent.prototype.limpiarTodosAlumno = function () {
        this.grupoForm.removeControl('alumnos');
        this.grupoForm.addControl('alumnos', this.formBuilder.array([]));
    };
    FormComponent.prototype.limpiarTodosAsignatura = function () {
        this.grupoForm.removeControl('asignaturas');
        this.grupoForm.addControl('asignaturas', this.formBuilder.array([]));
    };
    FormComponent.prototype.enviarInformacion = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.grupoForm.invalid) {
            Object.keys(this.grupoForm.controls).forEach(function (controlKey) {
                _this.grupoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this.cargando = true;
        this._gruposService.modificaGrupo(this.grupoForm, this.jwt, this.idGrupo).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.router.navigate(['admin/grupo/consulta']);
                alertify.success(response['msg']);
                _this.cargando = false;
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.setIdOrden = function (index, item) {
        var _this = this;
        setTimeout(function () {
            if (item.value.idOrdenAsignatura) {
                var id = _this.asignaturas[index].orden_asignatura_id;
                _this.asignaturasArray.controls[index]['controls']['idOrdenAsignatura'].setValue(id);
            }
        }, 10);
    };
    FormComponent.prototype.setIdAlumno = function (index, item) {
        var _this = this;
        setTimeout(function () {
            if (item.value.idAlumno) {
                var id = _this.alumnos[index].alumno_id;
                _this.alumnosArray.controls[index]['controls']['idAlumno'].setValue(id);
            }
        }, 10);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/grupo/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/grupo/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _service_grupo_service__WEBPACK_IMPORTED_MODULE_4__["GrupoService"],
            _plan_estudios_services_orden_jerarquico_service__WEBPACK_IMPORTED_MODULE_6__["OrdenJerarquicoService"],
            _services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/grupo-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/administracion/grupo/grupo-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: GrupoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoRoutingModule", function() { return GrupoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo.component */ "./src/app/administracion/grupo/grupo.component.ts");
/* harmony import */ var _grupo_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grupo/consulta/consulta.component */ "./src/app/administracion/grupo/consulta/consulta.component.ts");
/* harmony import */ var _grupo_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grupo/form/form.component */ "./src/app/administracion/grupo/form/form.component.ts");
/* harmony import */ var _consulta_alumnos_consulta_alumnos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta-alumnos/consulta-alumnos.component */ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.ts");
/* harmony import */ var _consulta_asignaturas_consulta_asignaturas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta-asignaturas/consulta-asignaturas.component */ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.ts");
/* harmony import */ var _consulta_alumnos_asignaturas_consulta_alumnos_asignaturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component */ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _grupo_component__WEBPACK_IMPORTED_MODULE_2__["GrupoComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _grupo_consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"] },
            { path: 'nuevo', component: _grupo_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'editar/:id', component: _grupo_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'consultaAsignaturas/:id', component: _consulta_asignaturas_consulta_asignaturas_component__WEBPACK_IMPORTED_MODULE_6__["ConsultaAsignaturasComponent"] },
            { path: 'consultaAlumnos/:id', component: _consulta_alumnos_consulta_alumnos_component__WEBPACK_IMPORTED_MODULE_5__["ConsultaAlumnosComponent"] },
            { path: 'alumnoAsignatura/:id', component: _consulta_alumnos_asignaturas_consulta_alumnos_asignaturas_component__WEBPACK_IMPORTED_MODULE_7__["ConsultaAlumnosAsignaturasComponent"] },
            { path: 'calculo/:id1/:id2', loadChildren: './calculo-calificacion/calculo-calificacion.module#CalculoCalificacionModule' },
            { path: 'calificaciones/:id', loadChildren: './calificaciones/calificaciones.module#CalificacionesModule' },
            { path: 'actividad/:id1/:id2', loadChildren: 'src/app/docente/actividad/actividad.module#ActividadDocenteModule' }
        ]
    }
];
var GrupoRoutingModule = /** @class */ (function () {
    function GrupoRoutingModule() {
    }
    GrupoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GrupoRoutingModule);
    return GrupoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/grupo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/administracion/grupo/grupo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/grupo/grupo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/administracion/grupo/grupo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2dydXBvL2dydXBvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/grupo/grupo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/administracion/grupo/grupo.component.ts ***!
  \*********************************************************/
/*! exports provided: GrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoComponent", function() { return GrupoComponent; });
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





var GrupoComponent = /** @class */ (function () {
    function GrupoComponent(_usuarioService, _router, _translate) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Grupo";
        this._usuarioService.pushBreadcum(this.title, '/admin/grupo', 1);
    }
    GrupoComponent.prototype.ngOnInit = function () {
    };
    GrupoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupo',
            template: __webpack_require__(/*! ./grupo.component.html */ "./src/app/administracion/grupo/grupo.component.html"),
            styles: [__webpack_require__(/*! ./grupo.component.scss */ "./src/app/administracion/grupo/grupo.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], GrupoComponent);
    return GrupoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/grupo/grupo.module.ts":
/*!******************************************************!*\
  !*** ./src/app/administracion/grupo/grupo.module.ts ***!
  \******************************************************/
/*! exports provided: GrupoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoModule", function() { return GrupoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo-routing.module */ "./src/app/administracion/grupo/grupo-routing.module.ts");
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupo.component */ "./src/app/administracion/grupo/grupo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/grupo/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/grupo/form/form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _consulta_alumnos_consulta_alumnos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./consulta-alumnos/consulta-alumnos.component */ "./src/app/administracion/grupo/consulta-alumnos/consulta-alumnos.component.ts");
/* harmony import */ var _consulta_asignaturas_consulta_asignaturas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./consulta-asignaturas/consulta-asignaturas.component */ "./src/app/administracion/grupo/consulta-asignaturas/consulta-asignaturas.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/buscadorPersona/buscador-persona.module */ "./src/app/components/buscadorPersona/buscador-persona.module.ts");
/* harmony import */ var _consulta_alumnos_asignaturas_consulta_alumnos_asignaturas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component */ "./src/app/administracion/grupo/consulta-alumnos-asignaturas/consulta-alumnos-asignaturas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var GrupoModule = /** @class */ (function () {
    function GrupoModule() {
    }
    GrupoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_grupo_component__WEBPACK_IMPORTED_MODULE_3__["GrupoComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _consulta_alumnos_consulta_alumnos_component__WEBPACK_IMPORTED_MODULE_9__["ConsultaAlumnosComponent"], _consulta_asignaturas_consulta_asignaturas_component__WEBPACK_IMPORTED_MODULE_10__["ConsultaAsignaturasComponent"], _consulta_alumnos_asignaturas_consulta_alumnos_asignaturas_component__WEBPACK_IMPORTED_MODULE_14__["ConsultaAlumnosAsignaturasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"],
                _grupo_routing_module__WEBPACK_IMPORTED_MODULE_2__["GrupoRoutingModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_12__["ConsultaAsignaturaModule"],
                src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_13__["BuscadorPersonaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"]
            ]
        })
    ], GrupoModule);
    return GrupoModule;
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
//# sourceMappingURL=administracion-grupo-grupo-module.js.map