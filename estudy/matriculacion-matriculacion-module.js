(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["matriculacion-matriculacion-module"],{

/***/ "./src/app/administracion/aspirante/services/aspirante.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/aspirante/services/aspirante.service.ts ***!
  \************************************************************************/
/*! exports provided: AspiranteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspiranteService", function() { return AspiranteService; });
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




var AspiranteService = /** @class */ (function () {
    function AspiranteService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AspiranteService.prototype.consultaSolicitud = function (jwt) {
        // var params = '?jwt='+jwt;
        // params += '&id='+ id_persona;
        return this._httpClient.get(this.url + '/seguimiento/reportes/solicitud.php');
    };
    AspiranteService.prototype.totalAspirantes = function (tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?tipo=' + tipo;
        params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        return this._httpClient.get(this.url + '/seguimiento/administracion/totalAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaEspecifica = function (id_persona) {
        var params = '?id=' + id_persona;
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAspirante.php' + params);
    };
    AspiranteService.prototype.elimina = function (jwt, id) {
        var params = '?aspirante_id=' + id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/elimina.php' + params);
    };
    AspiranteService.prototype.matriculaAspirante = function (id, jwt) {
        var params = '?id_aspirante=' + id;
        return this._httpClient.get(this.url + '/controlEscolar/administracionAlumno/matriculaAspirante.php' + params);
    };
    AspiranteService.prototype.editaValidacion = function (id_persona, validador) {
        var params = '?persona_id=' + id_persona;
        params += '&validador=' + validador;
        return this._httpClient.get(this.url + '/seguimiento/administracion/cambiaValidacionAdmin.php' + params);
    };
    AspiranteService.prototype.consultaAspirantes = function (jwt, contenido, inicio, limite, tipo, carrera_id, fecha_inicio, fecha_fin) {
        var params = '?limit_final=' + limite;
        if (contenido != null) {
            params += '&busqueda=' + contenido;
        }
        if (carrera_id)
            params += '&carrera_id=' + carrera_id;
        if (fecha_inicio)
            params += '&fecha_inicio=' + fecha_inicio;
        if (fecha_fin)
            params += '&fecha_fin=' + fecha_fin;
        params += '&limit_inicio=' + inicio;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + '/seguimiento/administracion/consultaAspirantes.php' + params);
    };
    AspiranteService.prototype.consultaAlumno = function () {
        return this._httpClient.get(this.url + '/seguimiento/aspirante/consultaAlumno.php');
    };
    AspiranteService.prototype.editaEstatusAspirante = function (id_aspirante, situacion_aspirante_id) {
        var formData = new FormData();
        formData.append('aspirante_id', id_aspirante);
        formData.append('situacion_aspirante_id', situacion_aspirante_id);
        return this._httpClient.post(this.url + 'seguimiento/aspirante/editaEstatus.php', formData);
    };
    AspiranteService.prototype.editaCarrera = function (aspirante_id, carrera_id) {
        var params = '?id_aspirante=' + aspirante_id;
        params += '&id_carrera=' + carrera_id;
        return this._httpClient.get(this.url + '/seguimiento/administracion/modificaCarrera.php' + params);
    };
    AspiranteService.prototype.registroAspirante = function (jwt, id_aspirante) {
        var formData = new FormData();
        formData.append('id_persona', id_aspirante);
        formData.append('clave_aspirante', id_aspirante);
        formData.append('carrera_id', '0');
        // formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/perfil/registroAspirante.php', formData);
    };
    AspiranteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AspiranteService);
    return AspiranteService;
}());



/***/ }),

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

/***/ "./src/app/administracion/matriculacion/matriculacion-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/matriculacion/matriculacion-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MatriculacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatriculacionRoutingModule", function() { return MatriculacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _matriculacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matriculacion.component */ "./src/app/administracion/matriculacion/matriculacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _matriculacion_component__WEBPACK_IMPORTED_MODULE_2__["MatriculacionComponent"],
    }
];
var MatriculacionRoutingModule = /** @class */ (function () {
    function MatriculacionRoutingModule() {
    }
    MatriculacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MatriculacionRoutingModule);
    return MatriculacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/matriculacion/matriculacion.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/matriculacion/matriculacion.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>{{title}}</h4>\r\n    <form [formGroup]=\"matriculacionForm\" (ngSubmit)=\"enviarInformacion()\">\r\n      <div *ngIf=\"carrera\" class=\"alert alert-info\">\r\n        <label>El aspirante seleccionó</label>\r\n        <h4>{{carrera}}</h4>\r\n      </div>\r\n      <!-- Default unchecked -->\r\n    <div class=\"custom-control custom-checkbox\">\r\n      <input formControlName=\"check\" type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUnchecked\">\r\n      <label class=\"custom-control-label\" for=\"defaultUnchecked\">Deseas agregar el nuevo alumno a un grupo?</label>\r\n    </div>\r\n    <app-consulta-asignatura *ngIf=\"f.check.value\" [nivel]=\"3\" [tipo]=\"'small'\" (sucessEvent)=\"obtieneGrado($event)\" [parentForm]=\"matriculacionForm\"></app-consulta-asignatura>\r\n      <div *ngIf=\"f.check.value\" class=\"form-group\">\r\n        <label class=\"control-label\" for=\"grupo\"><b>Grupo</b></label>\r\n        <select formControlName=\"grupo\" class=\"form-control\">\r\n          <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}} </option>\r\n          <option [value]=\"grupo.grupo_id\" *ngFor=\"let grupo of grupos\">{{grupo.nombre_grupo}} ({{grupo.grupo}})\r\n          </option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.grupo.invalid && f.grupo.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div>\r\n      <div class=\"custom-control custom-checkbox\">\r\n        <input formControlName=\"checkMatricula\" type=\"checkbox\" class=\"custom-control-input\" id=\"defaultUncheckedMatricula\">\r\n        <label class=\"custom-control-label\" for=\"defaultUncheckedMatricula\">¿Deseas agregar la matrícula manualmente ?</label>\r\n      </div>\r\n      <div  *ngIf=\"f.checkMatricula.value\"  class=\"form-group\">\r\n        <label class=\"control-label\" for=\"matricula\"><b> Matricula</b></label>\r\n        <input formControlName=\"matricula\" class=\"form-control\" id=\"nombre_ciclo\" placeholder=\"Matricula\" type=\"text\">\r\n        <span class=\"invalidText\" *ngIf=\"f.matricula.invalid && f.matricula.touched\">Introduce una matricula</span>\r\n      </div>\r\n      <div class=\"custom-control custom-checkbox\">\r\n        <input formControlName=\"campus\" type=\"checkbox\" class=\"custom-control-input\" id=\"campus\">\r\n        <label class=\"custom-control-label\" for=\"campus\">¿Deseas agregar a campus?</label>\r\n      </div>\r\n      <div *ngIf=\"f.campus.value\" class=\"form-group\">\r\n        <label class=\"control-label\" for=\"selectCampus\"><b>Campus</b></label>\r\n        <select formControlName=\"selectCampus\" class=\"form-control\" (click)=\"consultaCampus()\">\r\n          <option hidden value=\"\" disabled selected>{{'fmOptSelect' | translate}}</option>\r\n          <option [value]=\"campi.campus_id\" *ngFor=\"let campi of campus\">{{campi.campus}}</option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.grupo.invalid && f.grupo.touched\">\r\n          {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div><br>\r\n      <button class=\"btn btn-success pull-right\" type=\"submit\" [disabled]=\"loading\"><i *ngIf=\"loading\" class=\"fa fa-spin fa-spinner\"></i>Guardar información</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/matriculacion/matriculacion.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/administracion/matriculacion/matriculacion.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbWF0cmljdWxhY2lvbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9tYXRyaWN1bGFjaW9uL21hdHJpY3VsYWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/matriculacion/matriculacion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/administracion/matriculacion/matriculacion.component.ts ***!
  \*************************************************************************/
/*! exports provided: MatriculacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatriculacionComponent", function() { return MatriculacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_matriculacion_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/matriculacion-service.service */ "./src/app/administracion/matriculacion/services/matriculacion-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../encuesta/services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
/* harmony import */ var _aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../aspirante/services/aspirante.service */ "./src/app/administracion/aspirante/services/aspirante.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MatriculacionComponent = /** @class */ (function () {
    function MatriculacionComponent(_usuarioService, formBuilder, _matriculaService, route, router, _catalogoService, _encuestaService, _aspiranteService) {
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this._matriculaService = _matriculaService;
        this.route = route;
        this.router = router;
        this._catalogoService = _catalogoService;
        this._encuestaService = _encuestaService;
        this._aspiranteService = _aspiranteService;
        this.title = 'Matriculación de aspirante';
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    Object.defineProperty(MatriculacionComponent.prototype, "f", {
        get: function () { return this.matriculacionForm.controls; },
        enumerable: true,
        configurable: true
    });
    MatriculacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id_aspirante = this.route.snapshot.params['id'];
        this.consultaCampus();
        this.matriculacionForm = this.formBuilder.group({
            grupo: [''],
            matricula: [''],
            campus: [false],
            check: [false],
            checkMatricula: [false],
            selectCampus: []
        });
        this._aspiranteService.consultaEspecifica(this.id_aspirante).subscribe(function (response) {
            if (response && response['status']) {
                _this.carrera = response['aspirante'].carrera;
            }
        }, function (error) {
            console.log(error);
        });
    };
    // guardaAlumnoGrupo(){
    //   let id_grupo = this.matriculacionForm.get('grupo').value;
    //   this._grupoService.agregaAlumnoGrupo(this.id_aspirante, id_grupo, '').subscribe(response => {
    //     if (response && response['status']){
    //       alertify.success(response['msg']);
    //     }else{
    //       alertify.error(response['msg']);
    //     }
    //   },error =>{
    //     console.log(<any>error);
    //   });
    // }
    MatriculacionComponent.prototype.obtieneGrado = function (event) {
        var _this = this;
        this.grupos = null;
        this.idOrdenJerarquico = event.idOrdenJerarquico;
        this._encuestaService.consultaGrupo(this.idOrdenJerarquico).subscribe(function (response) {
            if (response && response['status']) {
                _this.grupos = response['grupos'];
            }
            else {
                _this.grupos = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    MatriculacionComponent.prototype.enviarInformacion = function () {
        var _this = this;
        this.loading = true;
        if (this.matriculacionForm.invalid) {
            Object.keys(this.matriculacionForm.controls).forEach(function (controlKey) {
                _this.matriculacionForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (!this.matriculacionForm.get('check').value) {
            this._matriculaService.guardaMatriculacion(this.id_aspirante, this.matriculacionForm).subscribe(function (response) {
                if (response && response['status']) {
                    if (_this.matriculacionForm.get('grupo').value && _this.matriculacionForm.get('check').value) {
                        _this._agregaAlumno();
                        // this.guardaAlumnoGrupo();
                    }
                    _this.cambiaEstatusAspirante();
                    _this.router.navigate(['admin/aspirante']);
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
            var guarda_1;
            var _grupo_1 = null;
            if (this.matriculacionForm.get('grupo').value) {
                _grupo_1 = this.matriculacionForm.get('grupo').value;
                this.grupos.forEach(function (grupo) {
                    if (_grupo_1 == grupo.grupo_id) {
                        if (grupo.orden_jerarquico_id == 1) {
                            guarda_1 = true;
                        }
                        else {
                            guarda_1 = false;
                        }
                    }
                });
            }
            else {
                if (this.idOrdenJerarquico == 1) {
                    guarda_1 = true;
                }
                else {
                    alertify.error('Selecciona primer grado');
                }
            }
            if (guarda_1) {
                this._matriculaService.guardaMatriculacion(this.id_aspirante, this.matriculacionForm).subscribe(function (response) {
                    if (response && response['status']) {
                        if (_this.matriculacionForm.get('grupo').value && _this.matriculacionForm.get('check').value) {
                            _this._agregaAlumno();
                            // this.guardaAlumnoGrupo();
                        }
                        _this.cambiaEstatusAspirante();
                        alertify.success(response['msg']);
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else if (_grupo_1 && guarda_1) {
                alertify.error('Solo puedes seleccionar grupos de primer grado ');
            }
        }
    };
    MatriculacionComponent.prototype._agregaAlumno = function () {
        var _this = this;
        this._matriculaService.agregaAlumno(this.id_aspirante, this.matriculacionForm).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.cambiaEstatusAspirante();
                _this.router.navigate(['admin/aspirante']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MatriculacionComponent.prototype.consultaCampus = function () {
        var _this = this;
        this._catalogoService.consultaCampus('').subscribe(function (response) {
            if (response && response['status']) {
                _this.campus = response['campus'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    MatriculacionComponent.prototype.cambiaEstatusAspirante = function () {
        var _this = this;
        this._aspiranteService.editaEstatusAspirante(this.id_aspirante, 2).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.loading = false;
            }
            else {
                alertify.success(response['msg']);
                _this.loading = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], MatriculacionComponent.prototype, "switchForm", void 0);
    MatriculacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matriculacion',
            template: __webpack_require__(/*! ./matriculacion.component.html */ "./src/app/administracion/matriculacion/matriculacion.component.html"),
            styles: [__webpack_require__(/*! ./matriculacion.component.scss */ "./src/app/administracion/matriculacion/matriculacion.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_matriculacion_service_service__WEBPACK_IMPORTED_MODULE_3__["MatriculacionServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"],
            _encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__["EncuestaService"],
            _aspirante_services_aspirante_service__WEBPACK_IMPORTED_MODULE_7__["AspiranteService"]])
    ], MatriculacionComponent);
    return MatriculacionComponent;
}());



/***/ }),

/***/ "./src/app/administracion/matriculacion/matriculacion.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/matriculacion/matriculacion.module.ts ***!
  \**********************************************************************/
/*! exports provided: MatriculacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatriculacionModule", function() { return MatriculacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _matriculacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matriculacion-routing.module */ "./src/app/administracion/matriculacion/matriculacion-routing.module.ts");
/* harmony import */ var _matriculacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matriculacion.component */ "./src/app/administracion/matriculacion/matriculacion.component.ts");
/* harmony import */ var src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/consultaAsignatura/consulta-asignatura.module */ "./src/app/components/consultaAsignatura/consulta-asignatura.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MatriculacionModule = /** @class */ (function () {
    function MatriculacionModule() {
    }
    MatriculacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_matriculacion_component__WEBPACK_IMPORTED_MODULE_3__["MatriculacionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _matriculacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["MatriculacionRoutingModule"],
                src_app_components_consultaAsignatura_consulta_asignatura_module__WEBPACK_IMPORTED_MODULE_4__["ConsultaAsignaturaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_6__["LanguageTranslationModule"]
            ]
        })
    ], MatriculacionModule);
    return MatriculacionModule;
}());



/***/ }),

/***/ "./src/app/administracion/matriculacion/services/matriculacion-service.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/matriculacion/services/matriculacion-service.service.ts ***!
  \****************************************************************************************/
/*! exports provided: MatriculacionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatriculacionServiceService", function() { return MatriculacionServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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




var MatriculacionServiceService = /** @class */ (function () {
    function MatriculacionServiceService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    MatriculacionServiceService.prototype.agregaAlumno = function (id_aspirante, formMatricula) {
        var formData = new FormData();
        formData.append('id_alumno', id_aspirante);
        formData.append('id_grupo', formMatricula.get('grupo').value);
        formData.append('id_campus', formMatricula.get('selectCampus').value);
        var fd = new FormData();
        return this._httpClient.post(this.url + 'controlEscolar/grupo/agregaAlumno.php', formData);
    };
    MatriculacionServiceService.prototype.guardaMatriculacion = function (id_aspirante, formMatricula) {
        var params = '?id_aspirante=' + id_aspirante;
        if (formMatricula.get('selectCampus').value) {
            params += '&id_campus=' + formMatricula.get('selectCampus').value;
        }
        if (formMatricula.get('matricula').value) {
            params += '&matricula=' + formMatricula.get('matricula').value;
        }
        else {
            params += '&matricula=';
        }
        return this._httpClient.get(this.url + 'controlEscolar/administracionAlumno/matriculaAspirante.php' + params);
    };
    MatriculacionServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MatriculacionServiceService);
    return MatriculacionServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=matriculacion-matriculacion-module.js.map