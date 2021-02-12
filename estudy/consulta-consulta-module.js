(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consulta-consulta-module"],{

/***/ "./src/app/administracion/asignatura/services/asignatura.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/asignatura/services/asignatura.service.ts ***!
  \**************************************************************************/
/*! exports provided: AsignaturaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaService", function() { return AsignaturaService; });
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




var AsignaturaService = /** @class */ (function () {
    function AsignaturaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AsignaturaService.prototype.consultaMateriasPlan = function (id) {
        var params = '?id_plan_estudio=' + id;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaAsignatura.php' + params);
    };
    AsignaturaService.prototype.guardaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('archivo', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/editarContenido.php', formData);
    };
    AsignaturaService.prototype.eliminaContenido = function (contenido, id_asignatura) {
        var formData = new FormData();
        formData.append('url_contenido', contenido);
        formData.append('id_asignatura', id_asignatura);
        return this._httpClient.post(this.url + 'admin/asignaturas/eliminaContenido.php', formData);
    };
    AsignaturaService.prototype.consultaEspecificaAsign = function (jwt, id_asignatura) {
        var params = '?id_asignatura=' + id_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consulta.php' + params);
    };
    AsignaturaService.prototype.excel = function (file, jwt) {
        var formData = new FormData();
        formData.append('excel', file);
        formData.append('columna', '7');
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'extras/consultaexcel.php', formData);
    };
    AsignaturaService.prototype.consulta = function (jwt, id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/consulta.php' + params);
    };
    AsignaturaService.prototype.elimina = function (id) {
        var params = '?id_asignatura=' + id;
        return this._httpClient.get(this.url + 'admin/asignaturas/elimina.php' + params);
    };
    AsignaturaService.prototype.consultaModulo = function (id, tipo, jwt) {
        var params = '?id_asignatura=' + id;
        params += '&tipo=' + tipo;
        return this._httpClient.get(this.url + 'learning/asignatura/consultaModulos.php' + params);
    };
    AsignaturaService.prototype.consultaOrden = function (id) {
        var params = '?id_plan_estudio=' + id;
        // params += '&tipo='+tipo;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    AsignaturaService.prototype.insertaPlanOrdenAsignatura = function (id_plan_orden, id_asignatura, Asignatura, origen) {
        var formData = new FormData();
        if (id_plan_orden) {
            formData.append('id_plan_orden', id_plan_orden);
        }
        else {
            formData.append('id_plan_orden', null);
        }
        if (id_asignatura)
            formData.append('id_asignatura', id_asignatura);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        formData.append('origen', origen);
        if (origen == 1 || origen == 2) {
            return this._httpClient.post(this.url + 'admin/asignaturas/insertaPlanOrdenAsignatura.php', formData);
        }
        else if (origen == 3) {
            //nuevo componente de asignatura
            return this._httpClient.post(this.url + 'admin/asignaturas/clonarAsignatura.php', formData);
        }
    };
    AsignaturaService.prototype.modificaAsignatura = function (Asignatura, jwt, id_asignatura) {
        var formData = new FormData();
        //formData.append('carrera', planEstudio.get('carreraAsignatura').value);
        formData.append('asignatura_clave', Asignatura.get('claveAsignatura').value);
        formData.append('asignatura', Asignatura.get('nombreAsignatura').value);
        formData.append('creditos', Asignatura.get('creditosAsignatura').value);
        formData.append('tipo_asignatura_id', Asignatura.get('tipoAsignatura').value);
        formData.append('id_asignatura_padre', Asignatura.get('asignaturaPlan').value);
        // formData.append('orden_jerarquico', Asignatura.get('gradoAsignatura').value);
        // formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        // formData.append('orden_jerarquico', '1');
        // console.log(Asignatura.get('gradoAsignatura').value);
        if (Asignatura.get('planEstudio').value) {
            formData.append('plan_estudio_id', Asignatura.get('planEstudio').value);
        }
        else {
            formData.append('plan_estudio_id', null);
        }
        if (Asignatura.get('gradoAsignatura').value) {
            formData.append('orden_jerarquico_id', Asignatura.get('gradoAsignatura').value);
        }
        else {
            formData.append('orden_jerarquico_id', null);
        }
        if (Asignatura.get('califMax').value) {
            formData.append('calif_max', Asignatura.get('califMax').value);
        }
        else {
            formData.append('calif_max', null);
        }
        if (Asignatura.get('califMin').value) {
            formData.append('calif_min', Asignatura.get('califMin').value);
        }
        else {
            formData.append('calif_min', null);
        }
        if (!id_asignatura) {
            return this._httpClient.post(this.url + 'admin/asignaturas/crea.php', formData);
        }
        else {
            formData.append('id_asignatura', id_asignatura);
            return this._httpClient.post(this.url + 'admin/asignaturas/edita.php', formData);
        }
    };
    AsignaturaService.prototype.insertaEditor = function (idAsignatura, columna, tex, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignatura);
        formData.append('columna', columna);
        formData.append('tex', tex);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaPresentacion.php', formData);
    };
    AsignaturaService.prototype.imagen = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagen.php', formData);
    };
    AsignaturaService.prototype.imagenPrevia = function (idAsignaturaSelected, imgFile, jwt) {
        var formData = new FormData();
        formData.append('id_asignatura', idAsignaturaSelected);
        formData.append('imagen', imgFile);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'admin/asignaturas/editaImagenPrevia.php', formData);
    };
    AsignaturaService.prototype.consultaAsignaturas = function (id_docente) {
        var params = '?id_docente=' + id_docente;
        return this._httpClient.get(this.url + 'controlEscolar/docente/consultaAsignaturas.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasTroncoComun = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/consultaAsignaturasTronco.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturaGrupo = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/asignatura/consultaGrupos.php' + params);
    };
    AsignaturaService.prototype.consultaAsignaturasAdminDummy = function (id_orden_asignatura) {
        var params = '?id_orden_asignatura=' + id_orden_asignatura;
        return this._httpClient.get(this.url + 'controlEscolar/materia/consultaAdministradorDummy.php' + params);
    };
    AsignaturaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsignaturaService);
    return AsignaturaService;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ConsultaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaRoutingModule", function() { return ConsultaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"]
    }
];
var ConsultaRoutingModule = /** @class */ (function () {
    function ConsultaRoutingModule() {
    }
    ConsultaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsultaRoutingModule);
    return ConsultaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div  class=\"container-modulo\" ><!-- cdkDropList (cdkDropListDropped)=\"dropModulo($event)\" -->\r\n    <!--  cdkDrag  -->\r\n    <div class=\"alert  row   alert-modulo alert-info\" role=\"alert\" *ngFor=\"let modulo of modulos; let i = index \">\r\n      <div class=\"col-md-9\">\r\n          <h4 class=\"text-left\" (click)=\"consulta_actividad(modulo.modulo_id)\" style=\"cursor:pointer\">{{modulo.modulo_nombre}}</h4>\r\n          <p *ngIf=\"!modulo.grupo_id && modulo.fecha_inicio && modulo.fecha_fin && modulo.fecha_inicio != '0000-00-00 00:00:00' && modulo.fecha_fin != '0000-00-00 00:00:00'\">\r\n              {{ 'Periodo' | translate }}: {{modulo.fecha_inicio | date : \"dd/MM/yyyy\"}} -\r\n              {{modulo.fecha_fin | date: \"dd/MM/yyyy\"}}\r\n          </p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <button [hidden]=\"tipoAdmin == 0\"class=\"btn btn-danger btn-accion\" (click)=\"eliminaModulo(modulo.modulo_id, i)\" ><i class=\"fa fa-trash\" ></i></button>\r\n        <button [hidden]=\"tipoAdmin == 0\" class=\"btn btn-info btn-accion \" (click)=\"modulo.editar = !modulo.editar\"><i class=\"fa fa-pencil\"></i></button>\r\n        <!--button *ngIf=\"!modulo.grupo_id\"  cdkDragHandle class=\"btn btn-success btn-accion\"><i class=\"fa fa-arrows-alt\" ></i></button-->\r\n      </div>\r\n      <div  *ngIf=\"modulo.editar\" class=\"col-md-12 text-dark\" >\r\n          <form-modulo [idAsignatura]=\"idAsignatura\" [modulo]=\"modulo\" (sucessEvent)=\"getmodificaModulos($event)\" [indexModulo]=\"modulos.length\"></form-modulo>\r\n      </div>\r\n      <div  class=\"col-md-12\">\r\n        <a  class=\"btn btn-link\"  (click)=\"consulta_actividad(modulo.modulo_id)\">\r\n          <span ><i class=\"fa fa-plus-square\"></i> {{'verActividades' | translate}}</span>  \r\n        </a>\r\n      </div>    \r\n      \r\n    </div>\r\n    <div *ngIf=\"!modulos || !modulos.length\" class=\"alert  row alert-modulo alert-info text-center\" role=\"alert\">\r\n      <div class=\"col-12\">\r\n        <h4 *ngIf=\"tipoConsulta == 1 || tipoConsulta == 3\">No hay Bloques cargados</h4>\r\n        <h4 *ngIf=\"tipoConsulta == 2\">No hay Bloques cargados por docentes en grupo</h4>\r\n        \r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"tipoConsulta == 1 || tipoConsulta == 3\" class=\"row alert alert-info text-center\" >\r\n      <div *ngIf=\"!nuevoModulo\" class=\"col-md-12\"  >        \r\n          <h5 style=\"cursor:pointer\" (click)=\"nuevoModulo = !nuevoModulo\" ><i class=\"fa fa-plus\"></i> {{'nuevaSeccion' | translate}}</h5>\r\n      </div>\t\t\r\n      <div *ngIf=\"nuevoModulo\"  class=\"col-md-12\"  >\r\n          <div class=\"alert alert-info\">\r\n            <button class=\"btn btn-light btn-accion \"  (click)=\"nuevoModulo = false\"><i class=\"fa fa-times\"></i></button>\r\n            <h4 class=\"control-label  \" >{{'nuevaSeccion' | translate}}</h4>\r\n            <form-modulo [idAsignatura]=\"idAsignatura\" (sucessEvent)=\"getmodificaModulo($event)\" [porcentaje]=\"idAsignatura.porcentaje\" \r\n             [indexModulo]=\"totalModulosAsignatura + 1\"\r\n             [tipoConsulta]=\"tipoConsulta\"\r\n             ></form-modulo>\r\n          </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n.container-modulo {\n  padding: 20px; }\n\n.alert-modulo:hover {\n  box-shadow: 1.25px 1.23px 2.5px 0px rgba(0, 0, 0, 0.75); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vY29uc3VsdGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9jb25zdWx0YS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2NhcmdhLWFjdGl2aWRhZGVzL2FzaWduYXR1cmEvbW9kdWxvL2NvbnN1bHRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxjYXJnYS1hY3RpdmlkYWRlc1xcYXNpZ25hdHVyYVxcbW9kdWxvXFxjb25zdWx0YVxcY29uc3VsdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDcEREO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2REO0VBQ0ksYUFBVztFQUNYLFVBQVE7RUFDUixrQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBR0ksd0RBQW9ELEVBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iLCJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmJ0bi1hY2Npb257XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4uY29udGFpbmVyLW1vZHVsb3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5hbGVydC1tb2R1bG86aG92ZXJ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEuMjVweCAxLjIzcHggMi41cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEuMjVweCAxLjIzcHggMi41cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAxLjI1cHggMS4yM3B4IDIuNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/modulo.service */ "./src/app/administracion/carga-actividades/services/modulo.service.ts");
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
    function ConsultaComponent(_usuarioService, _asignaturaService, _moduloService, route, _router) {
        this._usuarioService = _usuarioService;
        this._asignaturaService = _asignaturaService;
        this._moduloService = _moduloService;
        this.route = route;
        this._router = _router;
        this.ponderacionAsignatura = 100;
        this.nuevoModulo = false;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.idAsignatura = this.route.snapshot.parent.parent.parent.parent.params['id'];
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        if (this._router.url.includes('/modulos/')) {
            this.tipoConsulta = 1;
            this.title = 'Bloques en asignatura';
        }
        else if (this._router.url.includes('/modulosGrupo/')) {
            this.tipoConsulta = 2;
            this.title = 'Bloques en Grupo';
        }
        else if (this._router.url.includes('/modulosAsignaturaGrupo/')) {
            this.tipoConsulta = 3;
            this.title = 'Bloques en Grupo';
            // idAsignatura es idAsignaturaGrupo
            this.idAsignatura = this.route.snapshot.parent.parent.params['id'];
        }
        // this.jwt = this._usuarioService.getJWT();
        this.consultaModulos();
    };
    ConsultaComponent.prototype.cambiaConsulta = function (tipo) {
        this.tipoConsulta = tipo;
        this.consultaModulos();
    };
    ConsultaComponent.prototype.consultaModulos = function () {
        var _this = this;
        this.totalModulosAsignatura = 0;
        this._asignaturaService.consultaModulo(this.idAsignatura, this.tipoConsulta, this.jwt).subscribe(function (response) {
            // console.log(response)
            if (response && response['status']) {
                _this.ponderacionAsignatura = 100;
                _this.modulos = response['modulos'];
                _this.modulos.forEach(function (modulo) {
                    modulo.verActividades = false;
                    if (!modulo.grupo_id)
                        this.totalModulosAsignatura++;
                }.bind(_this));
            }
            else {
                _this.modulos = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.dropModulo = function (event) {
        var idModulo = this.modulos[event.previousIndex].modulo_id;
        var nuevoOrden = event.currentIndex + 1;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.modulos, event.previousIndex, event.currentIndex);
        this._moduloService.orden(nuevoOrden, this.idAsignatura, idModulo, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.getmodificaModulo = function (event) {
        if (event.status) {
            this.consultaModulos();
            this.nuevoModulo = false;
        }
    };
    ConsultaComponent.prototype.eliminaModulo = function (id, index) {
        alertify.confirm('¿Deseas eliminar el Bloque con todas sus actividades?', function () {
            var _this = this;
            this._moduloService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.modulos.splice(index, 1);
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
    ConsultaComponent.prototype.consulta_actividad = function (idModulo) {
        //this._router.navigate(['actividades/'+idModulo]);
        this._router.navigate(['./actividades/' + idModulo], { relativeTo: this.route.parent.parent });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturaService"],
            src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_5__["ModuloService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ConsultaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaModule", function() { return ConsultaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta-routing.module.ts");
/* harmony import */ var _consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/consulta/consulta.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _form_modulo_form_modulo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-modulo/form-modulo.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConsultaModule = /** @class */ (function () {
    function ConsultaModule() {
    }
    ConsultaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"], _form_modulo_form_modulo_component__WEBPACK_IMPORTED_MODULE_7__["FormModuloComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consulta_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsultaRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            ]
        })
    ], ConsultaModule);
    return ConsultaModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<form   class=\"col-md-12\" [formGroup]=\"moduloForm\" (ngSubmit)=\"enviarInfoModulo()\">\r\n\t\t<div class=\"form-group \">\r\n\t\t <div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"form-group container-modulo\">\r\n\t\t\t\t\t<label class=\"control-label\" for=\"nombre_modulo\">{{'NombreModulo' | translate}}</label>\r\n\t\t\t\t\t<input class=\"form-control\"  formControlName=\"nombreModulo\"  placeholder=\"{{'NombreSeleccion' | translate}}\" type=\"text\" required>\r\n\t\t\t\t\t<span class=\"invalidText\" *ngIf=\"f.nombreModulo.invalid && f.nombreModulo.touched\">\r\n\t\t\t\t\t\t{{'fmErrModuloName' | translate}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"form-group container-modulo\">\r\n\t\t\t\t\t<label class=\"control-label\" for=\"numero_modulo\">{{'NumeroModulo' | translate}}</label>\r\n\t\t\t\t\t<input class=\"form-control\"  formControlName=\"numeroModulo\"  placeholder=\"{{'NumeroSeleccion' | translate}}\" type=\"number\">\r\n\t\t\t\t\t<span class=\"invalidText\" *ngIf=\"f.numeroModulo.invalid && f.numeroModulo.touched\">\r\n\t\t\t\t\t\t{{'fmErrField' | translate}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\"  [hidden]=\"idModulo\" >\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-6 mt-3\">\r\n\t\t\t\t\t\t\t<input formControlName=\"promedio_modulo\" type=\"checkbox\" class=\"custom-control-input \" id=\"promedio_modulo\" name=\"promedio_modulo\">\r\n\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"promedio_modulo\">¿Deseas promediar por Bloque?</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"f.promedio_modulo.value\" class=\"col-6 mt-3\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"porcentaje\">Ponderación del Bloque</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\"  formControlName=\"porcentaje\"  placeholder=\"Ingresa el valor que tiene en la asignatura\" type=\"number\">\r\n\t\t\t\t\t\t\t<span class=\"invalidText\" *ngIf=\"f.porcentaje.invalid && f.porcentaje.touched\">\r\n\t\t\t\t\t\t\t\t{{'fmErrField' | translate}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-primary pull-right guardar-modulo\">{{'fmSave' | translate}}</button>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</form>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.container-modulo {\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vZm9ybS1tb2R1bG8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9mb3JtLW1vZHVsby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhZG1pbmlzdHJhY2lvblxcY2FyZ2EtYWN0aXZpZGFkZXNcXGFzaWduYXR1cmFcXG1vZHVsb1xcZm9ybS1tb2R1bG9cXGZvcm0tbW9kdWxvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2ZEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vZm9ybS1tb2R1bG8vZm9ybS1tb2R1bG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwic3JjL2FwcC9zaGFyZWQvc3R5bGVzL2Zvcm1zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyLW1vZHVsb3tcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FormModuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModuloComponent", function() { return FormModuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/modulo.service */ "./src/app/administracion/carga-actividades/services/modulo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormModuloComponent = /** @class */ (function () {
    function FormModuloComponent(formBuilder, _usuarioService, _moduloService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._moduloService = _moduloService;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FormModuloComponent.prototype, "f", {
        get: function () { return this.moduloForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormModuloComponent.prototype.ngOnInit = function () {
        console.log(this.modulo);
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        var numeroModulo;
        var nombre;
        var numero;
        var porcentaje;
        numeroModulo = this.indexModulo;
        if (this.modulo) {
            this.idModulo = this.modulo.modulo_id;
            nombre = this.modulo.modulo_nombre;
            numero = this.modulo.modulo_numero;
            porcentaje = this.modulo.porcentaje;
        }
        else {
            this.idModulo = null;
            nombre = "";
            numero = numeroModulo;
            porcentaje = 0;
        }
        this.moduloForm = this.formBuilder.group({
            nombreModulo: [nombre, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numeroModulo: [{ "value": numero, disabled: true }],
            promedio_modulo: [true],
            porcentaje: [porcentaje]
        });
    };
    FormModuloComponent.prototype.enviarInfoModulo = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.moduloForm.invalid) {
            Object.keys(this.moduloForm.controls).forEach(function (controlKey) {
                _this.moduloForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this._moduloService.modificaModulo(this.moduloForm, this.idModulo, this.idAsignatura, this.tipoConsulta).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                _this.sucessEvent.emit({
                    'status': response['status'], "idAsignatura": _this.idAsignatura
                });
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormModuloComponent.prototype, "idAsignatura", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormModuloComponent.prototype, "indexModulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormModuloComponent.prototype, "modulo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormModuloComponent.prototype, "porcentaje", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormModuloComponent.prototype, "tipoConsulta", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormModuloComponent.prototype, "sucessEvent", void 0);
    FormModuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-modulo',
            template: __webpack_require__(/*! ./form-modulo.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.html"),
            styles: [__webpack_require__(/*! ./form-modulo.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/form-modulo/form-modulo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_administracion_carga_actividades_services_modulo_service__WEBPACK_IMPORTED_MODULE_3__["ModuloService"]])
    ], FormModuloComponent);
    return FormModuloComponent;
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
//# sourceMappingURL=consulta-consulta-module.js.map