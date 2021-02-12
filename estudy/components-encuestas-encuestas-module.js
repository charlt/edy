(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-encuestas-encuestas-module"],{

/***/ "./src/app/administracion/encuesta/services/encuesta.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/encuesta/services/encuesta.service.ts ***!
  \**********************************************************************/
/*! exports provided: EncuestaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaService", function() { return EncuestaService; });
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



var EncuestaService = /** @class */ (function () {
    function EncuestaService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    EncuestaService.prototype.consultaListaEncuestas = function (id_rol, id_asignatura_grupo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_rol', id_rol)
            .set('id_asignatura_grupo', id_asignatura_grupo);
        return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/listaEncuestas.php', { params: params });
    };
    EncuestaService.prototype.consultaSwitchEncuesta = function (id_encuesta, id_switch_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('encuesta_id', id_encuesta)
            .set('id_switch_encuesta', id_switch_encuesta);
        return this._httpClient.get(this.url + 'seguimiento/encuesta/consultaSwitchEncuesta.php', { params: params });
    };
    EncuestaService.prototype.guardaEncuesta = function (id_persona, form) {
        var formData = new FormData();
        formData.append('id_persona', id_persona);
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], key = _a[0], value = _a[1];
            formData.append(key, value);
        }
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/crea.php', formData);
    };
    EncuestaService.prototype.guardaPreguntas = function (form, id_encuesta) {
        var formData = new FormData();
        formData.append('preguntas', JSON.stringify(form));
        formData.append('id_encuesta', id_encuesta);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaCampo.php', formData);
    };
    EncuestaService.prototype.consultaPreguntas = function (id_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('encuesta_id', id_encuesta);
        return this._httpClient.get(this.url + 'seguimiento/administracionEncuesta/consultaReactivos.php', { params: params });
    };
    EncuestaService.prototype.guardaReactivos = function (form, id_encuesta) {
        var formData = new FormData();
        formData.append('preguntas', JSON.stringify(form));
        formData.append('encuesta_id', id_encuesta);
        console.log(form);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaReactivos.php', formData);
    };
    EncuestaService.prototype.consultaGrupo = function (id_plan_orden) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_plan_orden', id_plan_orden);
        return this._httpClient.get(this.url + 'controlEscolar/ordenJerarquico/consultaGrupos.php', { params: params });
    };
    EncuestaService.prototype.consultaAsignatura = function (id_grupo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_grupo', id_grupo);
        return this._httpClient.get(this.url + '/controlEscolar/grupo/consultaAsignaturas.php', { params: params });
    };
    EncuestaService.prototype.guardaInformacion = function (variable, id, id_encuesta, id_rol, inicio, fin, tipoForm, idAviso) {
        var formData = new FormData();
        formData.append('encuesta_id', id_encuesta);
        formData.append('id_rol', id_rol);
        if (variable && id) {
            formData.append(variable, id);
        }
        if (tipoForm != 1) {
            formData.append('fecha_inicio', inicio);
            formData.append('fecha_fin', fin);
            return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/creaSwitch.php', formData);
        }
        else if (tipoForm == 1) {
            formData.append('id_aviso', idAviso);
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/creaSwitch.php', formData);
        }
    };
    EncuestaService.prototype.consultaEncuestaAlumno = function () {
        return this._httpClient.get(this.url + '/seguimiento/encuesta/alumno/consultaEncuesta.php');
    };
    EncuestaService.prototype.eliminaEncuesta = function (id_encuesta) {
        var formData = new FormData();
        formData.append('id_encuesta', id_encuesta);
        return this._httpClient.post(this.url + 'seguimiento/administracionEncuesta/elimina.php', formData);
    };
    EncuestaService.prototype.consultaEstadísticas = function (id_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_encuesta', id_encuesta);
        return this._httpClient.get(this.url + '/seguimiento/administracionEncuesta/consultaEstadistica.php', { params: params });
    };
    EncuestaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EncuestaService);
    return EncuestaService;
}());



/***/ }),

/***/ "./src/app/components/encuestas/encuestas-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/encuestas/encuestas-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: EncuestasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasRoutingModule", function() { return EncuestasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _encuestas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuestas.component */ "./src/app/components/encuestas/encuestas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _encuestas_component__WEBPACK_IMPORTED_MODULE_2__["EncuestasComponent"] }
];
var EncuestasRoutingModule = /** @class */ (function () {
    function EncuestasRoutingModule() {
    }
    EncuestasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EncuestasRoutingModule);
    return EncuestasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/encuestas/encuestas.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/encuestas/encuestas.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <div class=\"container text-center\">\r\n      <h4>Tienes una encuesta pendiente</h4>\r\n      <button class=\"btn btn-primary mt-2\">Ir a encuestas</button>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"row text-left\">\r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <div *ngIf=\"encuesta\" class=\"col-md-6 alert alert-success\" role=\"alert\">\r\n      <p > {{asignaturaEncuesta}}</p>\r\n      <p *ngIf=\"docenteEncuesta\"> <b>Docente:</b> {{docenteEncuesta}}</p>\r\n      \r\n    </div>\r\n    <div class=\"container pt-4 pl-4 pr-4 border border border-right-0 rounded\" *ngIf=\"bandera\">\r\n      <div class=\"mb-3\">\r\n        <h4 [innerHTML]=Formulario.titulo></h4>\r\n        <div [innerHTML]=Formulario.instruccion></div>\r\n        <p class=\"mt-3\"><b>Los campos con (*) son obligatorios.</b></p>\r\n      </div>\r\n      <form [formGroup]=\"encuestasForm\" (submit)=\"guardarEncuesta()\" class=\"mb-5 row\">\r\n        <div formArrayName=\"preguntas\" [ngClass]=\"[encuestasForm.get('preguntas').controls.length > 5? 'col-6': 'col-12',\r\n          pregunta.controls.campo_encuesta_id? '' : 'd-none']\"\r\n          *ngFor=\"let pregunta of encuestasForm.get('preguntas').controls; let i = index;\">\r\n          <div [formGroupName]=\"i\">\r\n            <div *ngIf=\"pregunta.controls.campo_encuesta_id\">\r\n              <label> <span *ngIf=\"pregunta.controls.id\">{{ pregunta.controls.id.value }}. </span>\r\n                <span *ngIf=\"pregunta.controls.obligatorio.value == '1'\"> * </span>\r\n                {{pregunta.controls.pregunta.value}}\r\n              </label>\r\n    \r\n              <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'text' || pregunta.controls.tipo.value == 'number'\" >\r\n                <input placeholder=\"{{pregunta.controls.descripcion.value}}\" formControlName=\"respuesta\" type=\"{{pregunta.controls.tipo.value}}\" id=\"p_{{pregunta.controls.campo_encuesta_id.value}}\" class=\"form-control\">\r\n              </div>\r\n    \r\n              <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'radio'\">\r\n                <div *ngFor=\"let reactivo of pregunta.controls.reactivos.controls; let j = index\">\r\n                  <input formControlName=\"respuesta\" [value]=\"reactivo.controls.texto.value\" class=\"ml-2\" type=\"radio\" id=\"r_{{reactivo.controls.id_reactivo.value}}\">\r\n                  <span class=\"ml-2 form-check-label\" attr.for=\"r_{{reactivo.controls.id_reactivo.value}}\">{{reactivo.controls.texto.value}}</span>\r\n                </div>\r\n                <input *ngIf=\"pregunta.controls.otro\" formControlName=\"otro\" class=\"form-control mt-2\" type=\"text\" placeholder=\"Escribe tu respuesta\">\r\n              </div>\r\n    \r\n              <div class=\"form-group ml-2\" *ngIf=\"pregunta.controls.tipo.value == 'checkbox'\">\r\n                <div [formArrayName]=\"'reactivos'\">\r\n                  <div *ngFor=\"let reactivo of pregunta.controls.respuesta.controls.reactivos.controls; let k = index\" [formGroup]=\"reactivo\">\r\n                    <input type=\"checkbox\" formControlName=\"checkbox\" id=\"{{reactivo.controls.id_reactivo.value}}\">\r\n                    <span class=\"ml-2 form-check-label\" attr.for=\"{{reactivo.controls.id_reactivo.value}}\">{{reactivo.controls.texto.value}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'select'\">\r\n                <select class=\"form-control\" formControlName=\"respuesta\">\r\n                  <option hidden value=\"\" disabled  selected>{{pregunta.controls.descripcion.value}}</option>\r\n                  <option *ngFor=\"let opcion of pregunta.controls.reactivos.controls\" [value]=\"opcion.controls.texto.value\">{{opcion.controls.texto.value}}</option>\r\n                </select>\r\n                <input *ngIf=\"pregunta.controls.otro\" formControlName=\"otro\" class=\"form-control mt-2\" type=\"text\" placeholder=\"Escribe tu respuesta\">\r\n              </div>\r\n\r\n              <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'textarea'\" >\r\n                <textarea placeholder=\"{{pregunta.controls.descripcion.value}}\" formControlName=\"respuesta\" id=\"t_{{pregunta.controls.campo_encuesta_id.value}}\" rows=\"4\" class=\"form-control\"></textarea>\r\n              </div>\r\n    \r\n              <span *ngIf=\"( ( pregunta.dirty || pregunta.touched ) && pregunta.invalid ) && pregunta.controls.obligatorio.value == 1\" class=\"text-danger\">\r\n                {{pregunta.controls.mensaje_error.value}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"col-12\">\r\n          <button type=\"button\" class=\"btn btn-light mt-3\" (click)=\"editarInformacion()\" *ngIf=\"contestado\">Editar</button>\r\n          <button type=\"submit\" class=\"btn btn-success pull-right mt-3\" [disabled]=\"encuestasForm.invalid || contestado\">Guardar información</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/encuestas/encuestas.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/encuestas/encuestas.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbmN1ZXN0YXMvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbmN1ZXN0YXMvZW5jdWVzdGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/encuestas/encuestas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/encuestas/encuestas.component.ts ***!
  \*************************************************************/
/*! exports provided: EncuestasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasComponent", function() { return EncuestasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _encuestas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuestas.service */ "./src/app/components/encuestas/encuestas.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/administracion/encuesta/services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EncuestasComponent = /** @class */ (function () {
    // @Output() success = new EventEmitter<any>();
    function EncuestasComponent(_encuestasService, formBuilder, _usuarioServe, route, location, modalService, _encuestaService, _plataformaService, router) {
        this._encuestasService = _encuestasService;
        this.formBuilder = formBuilder;
        this._usuarioServe = _usuarioServe;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this._encuestaService = _encuestaService;
        this._plataformaService = _plataformaService;
        this.router = router;
        this.bandera = false;
        this.Items = ['item', 'item', 'item', 'item', 'item', 'item', 'item'];
        this.editar = false;
        this.contestado = 0;
    }
    EncuestasComponent.prototype.ngOnInit = function () {
        this.idEncuesta = parseInt(this.route.snapshot.paramMap.get('id'));
        this.switch_encuesta_id = parseInt(this.route.snapshot.paramMap.get('id2'));
        this.idPersona = this._usuarioServe.getIdentity().persona_id;
        this.idRol = parseInt(this._usuarioServe.getRol().rol_id);
        this.bandera = false;
        this.editar = false;
        this.consultaFormulario();
        this.consultaEspecifica();
    };
    EncuestasComponent.prototype.consultaEspecifica = function () {
        var _this = this;
        this._encuestaService.consultaSwitchEncuesta(this.idEncuesta, this.switch_encuesta_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.encuesta = response['encuesta'];
                var asignatura = _this.encuesta[0].asignatura;
                if (asignatura) {
                    _this.asignaturaEncuesta = asignatura;
                }
                else {
                    _this.asignaturaEncuesta = _this.encuesta;
                }
                var nombreDocente = _this.encuesta[0].nombre;
                var primerApDocente = _this.encuesta[0].primer_apellido;
                var segundoApDocente = _this.encuesta[0].segundo_apellido;
                if (nombreDocente) {
                    _this.docenteEncuesta = nombreDocente + ' ' + primerApDocente + ' ' + segundoApDocente;
                }
                // console.log(this.encuesta);
            }
        });
    };
    EncuestasComponent.prototype.consultaFormulario = function () {
        var _this = this;
        this._encuestasService.consultaFormulario(this.idEncuesta, this.switch_encuesta_id, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.Formulario = response['encuesta'];
                _this.encuestasForm = _this.formBuilder.group({
                    titulo: _this.Formulario.titulo,
                    instruccion: _this.Formulario.instruccion,
                    // preguntas: this.formBuilder.array([])
                    preguntas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](_this.Formulario[0].map(function (item) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}); }))
                });
                _this.consultaContestado();
            }
            else {
                _this.bandera = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    EncuestasComponent.prototype.consultaContestado = function () {
        var _this = this;
        this._encuestasService.getContestado(this.idPersona, this.idEncuesta, this.switch_encuesta_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.contestado = 1;
            }
            else {
                _this.contestado = 0;
            }
            _this.addItem();
        }, function (error) {
            console.log(error);
        });
    };
    EncuestasComponent.prototype.addItem = function () {
        var _this = this;
        this.Formulario[0].forEach(function (pregunta) {
            if (pregunta.campo_encuesta_padre_id == null && pregunta.condicional == null) {
                _this.generateItem(pregunta);
            }
        });
        this.setIndex();
        this.bandera = true;
        // this.cargado.emit(true);    
    };
    EncuestasComponent.prototype.generateItem = function (pregunta) {
        var _this = this;
        var i = this.Formulario[0].map(function (e) { return e.campo_encuesta_id; }).indexOf(pregunta.campo_encuesta_id);
        this.datos = this.encuestasForm.get('preguntas');
        this.datos.removeAt(i);
        this.datos.insert(i, this.createItem(pregunta));
        var tipoValidacion = "null";
        var Respuesta = pregunta.tipo == 'checkbox' ? [] : '';
        var Deshabilitado = false;
        var Eliminar = true;
        if (pregunta.obligatorio == "1") {
            tipoValidacion = "required";
        }
        if (pregunta.respuesta.length > 0 && pregunta.tipo != 'checkbox') {
            Respuesta = pregunta.respuesta[0].respuesta;
            if (!this.editar) {
                Deshabilitado = true;
            }
        }
        else if (pregunta.respuesta.length > 0 && pregunta.tipo == 'checkbox') {
            Respuesta = pregunta.respuesta;
            if (!this.editar) {
                Deshabilitado = true;
            }
        }
        // if (this.idRol == 1) {
        //   Deshabilitado = true;
        // }          
        if (pregunta.tipo != 'radio' && pregunta.tipo != 'checkbox') {
            if (pregunta.tipo == 'text' && pregunta.regex) {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(pregunta.regex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]
                ]));
                this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
            }
            else {
                this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]));
            }
            // if (pregunta.obligatorio) {
            //   this.encuestasForm["controls"].preguntas["controls"][i].controls.respuesta.setValidators(Validators.required);
            //   this.encuestasForm["controls"].preguntas["controls"][i].controls.respuesta.updateValueAndValidity();      
            // }
        }
        if (pregunta.reactivos) {
            this.encuestasForm["controls"].preguntas["controls"][i].addControl('reactivos', this.formBuilder.array([]), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]));
            pregunta.reactivos.forEach(function (reactivo) {
                _this.datos.controls[i]["controls"].reactivos.push(_this.createReactive(reactivo, pregunta.campo_encuesta_id));
            });
            if (pregunta.campo_encuesta_padre_id != null && pregunta.condicional != null) {
                Eliminar = false;
            }
            if (pregunta.tipo == 'select') {
                if (Respuesta == "" || this.editar)
                    this.valueChanges(i, Eliminar);
                else if (Respuesta != "")
                    this.setValues(Respuesta, i);
            }
            if (pregunta.tipo == 'radio') {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]);
                this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
                if (Respuesta == "" || this.editar) {
                    this.valueChanges(i, Eliminar);
                }
                else if (Respuesta != "") {
                    this.setValues(Respuesta, i);
                }
            }
            else if (pregunta.tipo == 'checkbox') {
                this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuesta', this.createArrayCheckbox(pregunta.reactivos, tipoValidacion, pregunta.campo_encuesta_id, Respuesta, Deshabilitado));
            }
            // this.encuestasForm["controls"].preguntas["controls"][i].addControl('respuestaCheckbox', this.formBuilder.group({
            //   valores: this.createArrayCheckbox()
            // }));
        }
    };
    EncuestasComponent.prototype.createItem = function (datos) {
        return this.formBuilder.group({
            campo_encuesta_id: datos.campo_encuesta_id,
            pregunta: datos.pregunta,
            descripcion: datos.descripcion,
            tipo: datos.tipo,
            obligatorio: datos.obligatorio,
            mensaje_error: datos.mensaje_error,
            campo_encuesta_padre_id: datos.campo_encuesta_padre_id,
            condicional: datos.condicional
        });
    };
    EncuestasComponent.prototype.createReactive = function (datos, campo_id) {
        return this.formBuilder.group({
            id_reactivo: datos.id_reactivo,
            texto: datos.texto,
            campo_encuesta_id: campo_id
        });
    };
    EncuestasComponent.prototype.valueChanges = function (i, eliminar) {
        var _this = this;
        if (eliminar === void 0) { eliminar = true; }
        this.encuestasForm["controls"].preguntas["controls"][i].get('respuesta').valueChanges.subscribe(function (value) {
            _this.setValues(value, i, eliminar);
            _this.setIndex();
        });
        if (this.editar) {
            var value = this.encuestasForm["controls"].preguntas["controls"][i].get('respuesta').value;
            this.setValues(value, i, eliminar);
        }
    };
    EncuestasComponent.prototype.deleteItem = function (pregunta) {
        this.datos = this.encuestasForm.get('preguntas');
        var i = this.Formulario[0].map(function (e) { return e.campo_encuesta_id; }).indexOf(pregunta.campo_encuesta_id);
        this.datos.removeAt(i);
        this.datos.insert(i, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}));
    };
    EncuestasComponent.prototype.setValues = function (respuesta, i, eliminar) {
        var _this = this;
        if (eliminar === void 0) { eliminar = false; }
        var reactivosValue = this.encuestasForm["controls"].preguntas["controls"][i].get('reactivos').value.slice();
        if (respuesta.trim().toLowerCase() == 'otro' || respuesta.trim().toLowerCase() == 'otra') {
            this.encuestasForm["controls"].preguntas["controls"][i]
                .addControl('otro', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        }
        else {
            if (this.encuestasForm["controls"].preguntas["controls"][i].get('otro')) {
                this.encuestasForm["controls"].preguntas["controls"][i].removeControl('otro');
            }
        }
        var selected = reactivosValue.find(function (res) { return res.texto == respuesta; });
        var reactiveChild = this.Formulario[0].filter(function (res) {
            return res.campo_encuesta_padre_id == selected.campo_encuesta_id && res.condicional == selected.id_reactivo;
        });
        var toEliminate;
        if (!eliminar) {
            toEliminate = this.encuestasForm.get('preguntas').value.filter(function (res) {
                return res.campo_encuesta_padre_id == selected.campo_encuesta_id && res.condicional != selected.id_reactivo;
            });
        }
        else if (eliminar) {
            toEliminate = this.encuestasForm.get('preguntas').value.filter(function (res) {
                return res.campo_encuesta_padre_id != null && res.condicional != null && res.campo_encuesta_padre_id == selected.campo_formulario_id;
            });
        }
        if (toEliminate && toEliminate.length > 0) {
            toEliminate.forEach(function (reactivo) {
                _this.deleteItem(reactivo);
            });
        }
        if (reactiveChild && reactiveChild.length > 0) {
            reactiveChild.forEach(function (reactivo) {
                _this.generateItem(reactivo);
            });
        }
    };
    EncuestasComponent.prototype.createArrayCheckbox = function (inputs, tipoValidacion, idPregunta, respuestas, disabled) {
        var _this = this;
        var checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](inputs.map(function (item) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id_reactivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.id_reactivo),
            texto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.texto),
            checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: getSelected(item.texto), disabled: disabled })
        }); }));
        function getSelected(item) {
            var dato = respuestas.find(function (res) { return res.respuesta == item; });
            if (dato) {
                return true;
            }
            return false;
        }
        var hiddenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.mapItems(checkboxGroup.value), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]);
        checkboxGroup.valueChanges.subscribe(function (valor) {
            hiddenControl.setValue(_this.mapItems(valor, idPregunta));
        });
        return this.formBuilder.group({
            reactivos: checkboxGroup,
            seleccionados: hiddenControl
        });
    };
    EncuestasComponent.prototype.mapItems = function (items, idPregunta) {
        if (idPregunta === void 0) { idPregunta = 0; }
        var selectedItems = items.filter(function (item) { return item.checkbox; }).map(function (item) {
            return ({ id_reactivo: item.id_reactivo, texto: item.texto, campo_encuesta_id: idPregunta });
        });
        return selectedItems.length ? selectedItems : null;
    };
    EncuestasComponent.prototype.guardarEncuesta = function () {
        alertify.confirm('Mensaje de la plataforma', '¿Deseas guardar la información?', function () {
            var _this = this;
            this.encuestasForm.setErrors({ 'invalid': true });
            var form = this.encuestasForm.get('preguntas').value;
            var Formulario = [];
            form.forEach(function (val) {
                if (val.campo_encuesta_id) {
                    if (val.otro) {
                        val.respuesta = val.otro;
                    }
                    Formulario.push(val);
                }
            });
            this._encuestasService.enviaEncuesta(Formulario, this.idEncuesta, this.switch_encuesta_id, this.editar).subscribe(function (response) {
                if (response && response['status']) {
                    // this.success.emit(true);
                    _this._plataformaService.cambiaAvisoEncuestaEstatus(_this.idEncuesta);
                    alertify.success(response['msg']).dismissOthers();
                    _this.router.navigate(['learning/home']);
                    _this.modalService.dismissAll();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    EncuestasComponent.prototype.editarInformacion = function () {
        this.editar = true;
        this.contestado = 0;
        this.addItem();
    };
    EncuestasComponent.prototype.setIndex = function () {
        var _this = this;
        var index = 1;
        this.encuestasForm.get('preguntas')['controls'].forEach(function (pregunta, i) {
            if (Object.entries(pregunta['controls']).length > 0) {
                _this.encuestasForm.get('preguntas')['controls'][i].removeControl('id');
                _this.encuestasForm.get('preguntas')['controls'][i].addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](index));
                index++;
            }
        });
    };
    EncuestasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encuestas',
            template: __webpack_require__(/*! ./encuestas.component.html */ "./src/app/components/encuestas/encuestas.component.html"),
            styles: [__webpack_require__(/*! ./encuestas.component.scss */ "./src/app/components/encuestas/encuestas.component.scss")]
        }),
        __metadata("design:paramtypes", [_encuestas_service__WEBPACK_IMPORTED_MODULE_2__["EncuestasService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            src_app_administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_7__["EncuestaService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__["PlataformaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EncuestasComponent);
    return EncuestasComponent;
}());



/***/ }),

/***/ "./src/app/components/encuestas/encuestas.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/encuestas/encuestas.module.ts ***!
  \**********************************************************/
/*! exports provided: EncuestasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasModule", function() { return EncuestasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encuestas-routing.module */ "./src/app/components/encuestas/encuestas-routing.module.ts");
/* harmony import */ var _encuestas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuestas.component */ "./src/app/components/encuestas/encuestas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EncuestasModule = /** @class */ (function () {
    function EncuestasModule() {
    }
    EncuestasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_encuestas_component__WEBPACK_IMPORTED_MODULE_3__["EncuestasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _encuestas_routing_module__WEBPACK_IMPORTED_MODULE_2__["EncuestasRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_encuestas_component__WEBPACK_IMPORTED_MODULE_3__["EncuestasComponent"]]
        })
    ], EncuestasModule);
    return EncuestasModule;
}());



/***/ }),

/***/ "./src/app/components/encuestas/encuestas.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/encuestas/encuestas.service.ts ***!
  \***********************************************************/
/*! exports provided: EncuestasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasService", function() { return EncuestasService; });
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



var EncuestasService = /** @class */ (function () {
    function EncuestasService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    EncuestasService.prototype.consultaFormulario = function (id_encuesta, id_switch_encuesta, id_persona) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_encuesta', id_encuesta)
            .set('id_switch_encuesta', id_switch_encuesta)
            .set('id_persona', id_persona);
        return this._httpClient.get(this.url + 'seguimiento/encuesta/consulta.php', { params: params });
    };
    EncuestasService.prototype.enviaEncuesta = function (form, id_encuesta, id_switch_encuesta, editar) {
        var formData = new FormData();
        formData.append('encuesta_id', id_encuesta);
        formData.append('switch_encuesta_id', id_switch_encuesta);
        form.forEach(function (pregunta) {
            if (pregunta.tipo == "checkbox") {
                pregunta.respuesta.seleccionados.forEach(function (respuesta) {
                    formData.append('campo_encuesta_id[]', respuesta.campo_encuesta_id);
                    formData.append('respuesta[]', respuesta.texto);
                });
            }
            else {
                formData.append('campo_encuesta_id[]', pregunta.campo_encuesta_id);
                formData.append('respuesta[]', pregunta.respuesta);
            }
        });
        if (!editar) {
            return this._httpClient.post(this.url + 'seguimiento/encuesta/guardarRespuesta.php', formData);
        }
        return this._httpClient.post(this.url + 'seguimiento/encuesta/editaRespuesta.php', formData);
    };
    EncuestasService.prototype.getContestado = function (id_persona, id_encuesta, id_switch_encuesta) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_persona', id_persona)
            .set('id_encuesta', id_encuesta)
            .set('id_switch_encuesta', id_switch_encuesta);
        return this._httpClient.get(this.url + 'seguimiento/encuesta/consultaRespuesta.php', { params: params });
    };
    EncuestasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EncuestasService);
    return EncuestasService;
}());



/***/ }),

/***/ "./src/app/services/plataforma.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/plataforma.service.ts ***!
  \************************************************/
/*! exports provided: PlataformaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaService", function() { return PlataformaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlataformaService = /** @class */ (function () {
    function PlataformaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.listenTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenEncuesta = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PlataformaService.prototype.cambiaAvisoEncuestaEstatus = function (encuesta_id) {
        this.change.emit(encuesta_id);
    };
    PlataformaService.prototype.consultaNomRetro = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaRetrosDocente = function (jwt, id_docente) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/notificaciones/retroalimentacionesDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjDocente = function (jwt, id_docente, id_materia) {
        var params = '?jwt=' + jwt;
        params += '&id_docente=' + id_docente;
        params += '&id_materia=' + id_materia;
        return this._httpClient.get(this.url + 'learning/notificaciones/onlineDocente.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/numMensajesAlumno.php' + params);
    };
    PlataformaService.prototype.consultamsjAlumnosDetalles = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/mensajeriaAlumnoNombre.php' + params);
    };
    PlataformaService.prototype.consultaConferenciasActivas = function () {
        return this._httpClient.get(this.url + '/learning/notificaciones/consultaConferenciasAlumno.php');
    };
    PlataformaService.prototype.conferenciasActivasDocente = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + '/controlEscolar/notificaciones/consultaConferenciasActivas.php' + params);
    };
    PlataformaService.prototype.verNotificacionBloqueo = function (id, id_rol) {
        var params = '?id_persona=' + id;
        params += '&id_rol=' + id_rol;
        return this._httpClient.get(this.url + '/general/tickets/consultaBloqueo.php' + params);
    };
    PlataformaService.prototype.consultaTicket = function () {
        return this._httpClient.get(this.url + 'general/tickets/notificacionTicket.php');
    };
    PlataformaService.prototype.consultaNotificaciones = function (idRol) {
        if (idRol == "2" || idRol == "4") {
            return this._httpClient.get(this.url + 'learning/notificaciones/general.php');
        }
        else if (idRol == "3") {
            return this._httpClient.get(this.url + 'controlEscolar/notificaciones/general.php');
        }
    };
    PlataformaService.prototype.consultaJWT = function (matricula, rol) {
        var formData = new FormData();
        formData.append('rol', rol);
        formData.append('clave', matricula);
        return this._httpClient.post(this.url + 'general/auth_clave.php', formData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PlataformaService.prototype, "change", void 0);
    PlataformaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlataformaService);
    return PlataformaService;
}());



/***/ })

}]);
//# sourceMappingURL=components-encuestas-encuestas-module.js.map