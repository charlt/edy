(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrera-carrera-module"],{

/***/ "./src/app/administracion/alumno/carrera/carrera-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/alumno/carrera/carrera-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CarreraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraRoutingModule", function() { return CarreraRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carrera_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrera.component */ "./src/app/administracion/alumno/carrera/carrera.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _carrera_component__WEBPACK_IMPORTED_MODULE_2__["CarreraComponent"],
    }];
var CarreraRoutingModule = /** @class */ (function () {
    function CarreraRoutingModule() {
    }
    CarreraRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CarreraRoutingModule);
    return CarreraRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/carrera/carrera.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/carrera/carrera.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <button class=\"btn btn-success\" (click)=\"open(content)\">Agregar carrera</button>\r\n    <hr>\r\n    <table class=\"table table-bordered table-striped\">\r\n      <tr>\r\n        <th>Alumno</th>\r\n        <th>Carrera</th>\r\n        <th>Grado</th>\r\n        <th>Campus</th>\r\n        <th>Elimina</th>\r\n      </tr>\r\n      <tr *ngFor=\"let oferta of ofertas; let i = index\">\r\n        <td>{{oferta.nombre}} {{oferta.primer_apellido}} {{oferta.segundo_apellido}}</td>\r\n        <td>{{oferta.carrera}}</td>\r\n        <td>{{oferta.orden_jerarquico_descripcion}}</td>\r\n        <td>{{oferta.campus}}</td>\r\n        <td [hidden]=\"tipoAdmin == 0\" class=\"text-center\"><button class=\"btn btn-danger\"\r\n            (click)=\"elimina(i, oferta.plan_orden_id, oferta.alumno_id)\"><i class=\"fa fa-trash\"\r\n              aria-hidden=\"true\"></i></button></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Cambiar carrera</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"planOrdenForm\">\r\n      <app-consulta-asignatura [nivel]=\"3\" [parentForm]=\"planOrdenForm\" [tipo]=\"'small'\"></app-consulta-asignatura>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\" for=\"nivel_estudios\">{{'SelectCampus' | translate}}</label>\r\n          <select formControlName=\"campus\" class=\"form-control\" >\r\n              <option  [value]=\"_campus.campus_id\" *ngFor=\"let _campus of campus\">{{_campus.campus}}</option>\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.campus.invalid && f.campus.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n          </span>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button [hidden]=\"tipoAdmin == 0\" type=\"button\" id=\"_modal\" class=\"btn btn-outline-dark\"\r\n      (click)=\"close()\">Salir</button>\r\n    <button [hidden]=\"tipoAdmin == 0\" type=\"button\" class=\"btn btn-success\" (click)=\"cambiaOferta()\">Guardar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/alumno/carrera/carrera.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/alumno/carrera/carrera.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NhcnJlcmEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL2NhcnJlcmEvY2FycmVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/carrera/carrera.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/alumno/carrera/carrera.component.ts ***!
  \********************************************************************/
/*! exports provided: CarreraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraComponent", function() { return CarreraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alumno.service */ "./src/app/administracion/alumno/services/alumno.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarreraComponent = /** @class */ (function () {
    function CarreraComponent(_usuarioService, route, _alumnoService, _modalService, formBuilder, _alumnosService, _catalogosService) {
        this._usuarioService = _usuarioService;
        this.route = route;
        this._alumnoService = _alumnoService;
        this._modalService = _modalService;
        this.formBuilder = formBuilder;
        this._alumnosService = _alumnosService;
        this._catalogosService = _catalogosService;
        this.title = "Carreras";
        this._usuarioService.pushBreadcum('Carrera', '/admin/alumno', 2);
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(CarreraComponent.prototype, "f", {
        get: function () { return this.planOrdenForm.controls; },
        enumerable: true,
        configurable: true
    });
    CarreraComponent.prototype.ngOnInit = function () {
        this.idAlumno = this.route.snapshot.params['id'];
        this.planOrdenForm = this.formBuilder.group({
            campus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        var identity = JSON.parse(localStorage.getItem('identity'));
        this.tipoAdmin = identity.administrador.edicion;
        this.consulta();
        this.consultaCampus();
    };
    CarreraComponent.prototype.consultaCampus = function () {
        var _this = this;
        this._catalogosService.consultaCampus('').subscribe(function (response) {
            if (response && response['status']) {
                console.log(response);
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    CarreraComponent.prototype.consulta = function () {
        var _this = this;
        this._alumnoService.consultaAlumnoCarrera(this.idAlumno).subscribe(function (response) {
            if (response && response['status']) {
                _this.ofertas = response['ofertas'];
            }
        });
    };
    CarreraComponent.prototype.cambiaOferta = function () {
        var _this = this;
        if (this.planOrdenForm.invalid) {
            return;
        }
        var id_plan_orden = this.planOrdenForm.get('plan_orden_id').value;
        var campus_id = this.planOrdenForm.get('campus').value;
        this._alumnosService.insertaOferta(this.idAlumno, id_plan_orden, campus_id).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this._modalService.dismissAll();
                _this.consulta();
                _this.planOrdenForm.get('carrera_id').setValue('');
            }
        }, function (error) {
            console.log(error);
        });
    };
    CarreraComponent.prototype.close = function () {
        this._modalService.dismissAll();
        var id = this.planOrdenForm.get('carrera_id').value;
        if (id) {
            this.planOrdenForm.reset();
        }
    };
    CarreraComponent.prototype.elimina = function (index, plan_orden_id, alumno_id) {
        alertify.confirm('', '¿Deseas eliminar la carrera del alumno?', function () {
            var _this = this;
            this._alumnosService.eliminaOferta(plan_orden_id, alumno_id).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']);
                    _this.ofertas.splice(index, 1);
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    CarreraComponent.prototype.open = function (content) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title'
        };
        this._modalService.open(content, ngbModalOptions);
    };
    CarreraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carrera',
            template: __webpack_require__(/*! ./carrera.component.html */ "./src/app/administracion/alumno/carrera/carrera.component.html"),
            styles: [__webpack_require__(/*! ./carrera.component.scss */ "./src/app/administracion/alumno/carrera/carrera.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_alumno_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_6__["CatalogoService"]])
    ], CarreraComponent);
    return CarreraComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/carrera/carrera.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/alumno/carrera/carrera.module.ts ***!
  \*****************************************************************/
/*! exports provided: CarreraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarreraModule", function() { return CarreraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carrera_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrera-routing.module */ "./src/app/administracion/alumno/carrera/carrera-routing.module.ts");
/* harmony import */ var _carrera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrera.component */ "./src/app/administracion/alumno/carrera/carrera.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { SharedPipesModule } from '../../../shared';



var CarreraModule = /** @class */ (function () {
    function CarreraModule() {
    }
    CarreraModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_carrera_component__WEBPACK_IMPORTED_MODULE_3__["CarreraComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _carrera_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarreraRoutingModule"],
                // SharedPipesModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_5__["ConsultaAsignaturaModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"]
            ]
        })
    ], CarreraModule);
    return CarreraModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/services/alumno.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/alumno/services/alumno.service.ts ***!
  \******************************************************************/
/*! exports provided: AlumnoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoService", function() { return AlumnoService; });
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




var AlumnoService = /** @class */ (function () {
    function AlumnoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.activaConsulta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AlumnoService.prototype.consultaEspNotas = function (id_alumno) {
        var params = '?alumno_id=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/alumno/consultaNotasAlumno.php' + params);
    };
    AlumnoService.prototype.consultaAlumnoCarrera = function (id_alumno) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/consultaOfertaAlumno.php' + params);
    };
    AlumnoService.prototype.insertaOferta = function (id_alumno, id_plan_orden, campus_id) {
        var formData = new FormData();
        formData.append('alumno_id', id_alumno);
        formData.append('id_plan_orden', id_plan_orden);
        formData.append('campus_id', campus_id);
        return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/agregaOferta.php', formData);
    };
    AlumnoService.prototype.eliminaOferta = function (id_plan_orden, id_alumno) {
        var params = '?id_plan_orden=' + id_plan_orden;
        params += '&alumno_id=' + id_alumno;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/eliminaOferta.php' + params);
    };
    AlumnoService.prototype.consultaTicketsHeader = function (id_ticket) {
        var params = '?id_ticket=' + id_ticket;
        // params += '&id_rol=' + 2;
        return this._httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php' + params);
    };
    AlumnoService.prototype.consultaAccesos = function (id_persona) {
        var params = '?id_persona=' + id_persona;
        return this._httpClient.get(this.url + 'general/usuario/consultaAccesos.php' + params);
    };
    AlumnoService.prototype.consultaTicketAlumno = function (id_persona, id_rol) {
        var params = '?id_persona=' + id_persona;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + 'general/tickets/consultaUsuario.php' + params);
    };
    AlumnoService.prototype.consultaEspecifica = function (id, jwt) {
        var params = '?id_alumno=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
    };
    AlumnoService.prototype.elimina = function (id, jwt) {
        var params = '?id_alumno=' + id;
        return this._httpClient.get(this.url + 'controlEscolar/alumno/elimina.php' + params);
    };
    AlumnoService.prototype.modificaAlumnoOld = function (alumno, jwt, id_alumno) {
        var formData = new FormData();
        // console.log(alumno)
        formData.append('alumno_nombre', alumno.get('nombreAlumno').value);
        formData.append('alumno_primer_apellido', alumno.get('apPatAlumno').value);
        formData.append('alumno_segundo_apellido', alumno.get('apMatAlumno').value);
        formData.append('clave_alumno', alumno.get('claveAlumno').value);
        formData.append('sexo_id', alumno.get('sexoAlumno').value);
        formData.append('fecha_nacimiento', alumno.get('nacimientoAlumno').value);
        formData.append('correo', alumno.get('correoAlumno').value);
        formData.append('telefono_1', alumno.get('tel1Alumno').value);
        formData.append('telefono_2', alumno.get('tel2Alumno').value);
        formData.append('celular', alumno.get('celularAlumno').value);
        formData.append('rfc', alumno.get('rfcAlumno').value);
        formData.append('curp', alumno.get('curpAlumno').value);
        formData.append('cedula_profesional', alumno.get('cedulaAlumno').value);
        var fd = new FormData();
        if (id_alumno == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
        }
        else {
            formData.append('alumno_id', id_alumno);
            return this._httpClient.post(this.url + 'controlEscolar/alumno/edita.php', formData);
        }
    };
    AlumnoService.prototype.consultaAlumno = function (jwt, id_rol, busqueda, min, max, tipoForm) {
        var params = '?busqueda=' + busqueda;
        params += '&tipo_busqueda=' + tipoForm;
        params += '&id_rol=' + id_rol;
        params += '&min=' + min;
        params += '&max=' + max;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/busqueda_alumno.php' + params);
    };
    AlumnoService.prototype.consultaCurp = function (curp, jwt) {
        var params = '?curp=' + curp;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta_curp.php' + params);
    };
    AlumnoService.prototype.consultaCedula = function (id_alumno, jwt) {
        var params = '?id_alumno=' + id_alumno;
        return this._httpClient.get(this.url + '/controlEscolar/alumno/consulta.php' + params);
    };
    AlumnoService.prototype.modificaAlumno = function (cedulaForm, jwt, id) {
        var formData = new FormData();
        formData.append('cedula_profesional', '');
        formData.append('clave_alumno', cedulaForm.get('clave').value);
        formData.append('id_persona', id);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/alumno/creaSimple.php', formData);
    };
    AlumnoService.prototype.cambiaOferta = function (jwt, id_plan_orden, alumno_id) {
        var params = '?id_plan_orden=' + id_plan_orden;
        params += '&alumno_id=' + alumno_id;
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/cambiaOferta.php' + params);
    };
    AlumnoService.prototype.getTotalAlumnos = function (jwt) {
        return this._httpClient.get(this.url + 'controlEscolar/alumno/totalAlumnos.php');
    };
    AlumnoService.prototype.getMatricula = function (jwt) {
        return this._httpClient.get(this.url + 'controlEscolar/matricula/consulta.php');
    };
    AlumnoService.prototype.getSituacion = function (jwt) {
        return this._httpClient.get(this.url + 'catalogosCE/situacionAlumno.php');
    };
    AlumnoService.prototype.creaAlumno = function (jwt, form) {
        var formData = new FormData();
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], name_1 = _a[0], value = _a[1];
            if (name_1 == 'envia_correo') {
                if (value == false || value == 'false') {
                    value = 0;
                }
                else if (value == true || value == 'true') {
                    value = 1;
                }
            }
            formData.append(name_1, value);
        }
        formData.append('nombre_usuario', '');
        formData.append('password', '');
        return this._httpClient.post(this.url + 'controlEscolar/alumno/crea.php', formData);
    };
    AlumnoService.prototype.cambiaSituacion = function (form, id_alumno, id_area) {
        var formData = new FormData();
        formData.append('estatus', form.situacion);
        formData.append('id_alumno', id_alumno);
        formData.append('id_area', id_area);
        formData.append('observacion', form.observacion ? form.observacion : '');
        return this._httpClient.post(this.url + 'controlEscolar/administracionAlumno/cambiaSituacionAlumno.php', formData);
    };
    AlumnoService.prototype.rollBack = function (id_usuario) {
        var formData = new FormData();
        formData.append('id_usuario', id_usuario);
        return this._httpClient.post(this.url + 'controlEscolar/alumno/rollbackAspirante.php', formData);
    };
    AlumnoService.prototype.getPendientes = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this._httpClient.get(this.url + 'controlEscolar/pendientes/alumnos.php', { params: params });
    };
    AlumnoService.prototype.busquedaFiltro = function (filtros, inicio, fin) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('min', inicio)
            .set('max', fin);
        filtros.forEach(function (filtro) {
            params = params.set(filtro.key, filtro.value);
        });
        return this._httpClient.get(this.url + 'controlEscolar/alumno/busquedaAlumnoFiltro.php', { params: params });
    };
    AlumnoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlumnoService);
    return AlumnoService;
}());



/***/ })

}]);
//# sourceMappingURL=carrera-carrera-module.js.map