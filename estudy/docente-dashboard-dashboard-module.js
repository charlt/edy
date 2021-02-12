(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-dashboard-dashboard-module"],{

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

/***/ "./src/app/docente/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/docente/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/docente/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            { path: 'encuesta/:id/:id2', loadChildren: '../../components/encuestas/encuestas.module#EncuestasModule' },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/docente/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!cargando && alert\" class=\"alert alert-danger text-center\" role=\"alert\">\r\n  Aún no cuentas con una materia asignada.\r\n</div>\r\n<div *ngIf=\"cargando && !alert\">\r\n  <div><i class=\"fa fa-spin fa-spinner\" style=\"margin-left: 45%; margin-top: 20%;\"></i><h5 style=\"margin-left: 28%;\">{{'TiempoEspera' | translate}}</h5></div>\r\n</div>\r\n\r\n<table *ngIf=\"!cargando && !alert\" class=\"table table-bordered\" >\r\n  <thead>\r\n    <tr>\r\n      <th colspan=\"9\">\r\n        <button type=\"button\" class=\"btn float-right\" \r\n        [routerLink]=\"['/docente/bandeja-mensajes']\"\r\n        ><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> Bandeja de mensajes</button>\r\n        <button type=\"button\" class=\"btn float-right\" \r\n        [routerLink]=\"['/docente/bandeja-retro']\"\r\n        ><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> Bandeja de Retroalimentaciones</button>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <th scope=\"col\">Grado</th>\r\n      <th scope=\"col\">Asignatura</th>\r\n      <th scope=\"col\">Clave grupo</th>\r\n      <th scope=\"col\">Nombre del grupo</th>\r\n      <th scope=\"col\">Act. pendientes</th>\r\n      <th scope=\"col\">Mensajes</th>\r\n      <th scope=\"col\">Retroalimentaciones</th>\r\n      <th scope=\"col\">Estado de la materia</th>\r\n      <th scope=\"col\">Actividad más antigua</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let _asignaturaGrupo of asignaturaGrupo\">\r\n    <tr>\r\n      <td>{{_asignaturaGrupo.orden_jerarquico_descripcion}}</td>\r\n      <td><a [routerLink]=\"['/docente/grupo/'+_asignaturaGrupo.asignatura_grupo_id+'/4']\" (click)=\"seleccionaGrupo(_asignaturaGrupo)\">{{_asignaturaGrupo.asignatura}}</a></td>\r\n      <td>{{_asignaturaGrupo.grupo}}</td>\r\n      <td>{{_asignaturaGrupo.nombre_grupo}}</td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn \"\r\n          [ngClass]=\"{'btn-danger' : _asignaturaGrupo.actividades_pendientes > 10, 'btn-warning' : _asignaturaGrupo.actividades_pendientes > 5 ,'btn-primary' : _asignaturaGrupo.actividades_pendientes <= 5}\" \r\n          [routerLink]=\"['/docente/grupo/'+_asignaturaGrupo.asignatura_grupo_id+'/1']\" (click)=\"seleccionaGrupo(_asignaturaGrupo)\">\r\n          <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i> {{_asignaturaGrupo.actividades_pendientes}}</button>\r\n      </td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn \" \r\n        [routerLink]=\"['/docente/grupo/'+_asignaturaGrupo.asignatura_grupo_id+'/2']\" (click)=\"seleccionaGrupo(_asignaturaGrupo)\"\r\n        [ngClass]=\"{'btn-danger' : _asignaturaGrupo.mensaje > 10, 'btn-warning' : _asignaturaGrupo.mensaje > 5 ,'btn-primary' : _asignaturaGrupo.mensaje <= 5}\"\r\n        ><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> {{_asignaturaGrupo.mensaje}}</button></td>\r\n      <td>\r\n        <button type=\"button\" class=\"btn btn-primary\" \r\n        [routerLink]=\"['/docente/grupo/'+_asignaturaGrupo.asignatura_grupo_id+'/3']\" (click)=\"seleccionaGrupo(_asignaturaGrupo)\"\r\n        [ngClass]=\"{'btn-danger' : _asignaturaGrupo.retroalimentacion > 10, 'btn-warning' : _asignaturaGrupo.retroalimentacion > 5 ,'btn-primary' : _asignaturaGrupo.retroalimentacion <= 5}\"\r\n        ><i class=\"fa fa-comments\"></i>  {{_asignaturaGrupo.retroalimentacion}}</button></td>\r\n      <td [ngClass]=\"{'alert-danger' : _asignaturaGrupo.situacion_asignatura_grupo_id == 4, 'alert-warning' : _asignaturaGrupo.situacion_asignatura_grupo_id == 3 || _asignaturaGrupo.situacion_asignatura_grupo_id == 2,'alert-success' : _asignaturaGrupo.situacion_asignatura_grupo_id == 1}\">\r\n        <b>{{_asignaturaGrupo.situacion_asignatura_grupo_descripcion}}</b><br>\r\n        <small  *ngIf=\"_asignaturaGrupo.activa == 1\">\r\n          <span *ngIf=\"_asignaturaGrupo.estado == 1\" > Cierra el  {{_asignaturaGrupo.fecha_fin | date: \"dd/MM/yyyy\"}} </span>   \r\n          <span *ngIf=\"_asignaturaGrupo.estado == 0\" > Sin fecha de cierre </span>\r\n        </small>\r\n        <small *ngIf=\"_asignaturaGrupo.activa == 0\">\r\n          <span  *ngIf=\"_asignaturaGrupo.estado == 2\"> Abre el  {{_asignaturaGrupo.fecha_inicio | date: \"dd/MM/yyyy\"}} </span>   \r\n          <span *ngIf=\"_asignaturaGrupo.estado == 3\" > Cerró el  {{_asignaturaGrupo.fecha_fin | date: \"dd/MM/yyyy\"}} </span>\r\n        </small>   \r\n      </td>\r\n      <td>\r\n        <span *ngIf=\"_asignaturaGrupo.actividad_antigua\" >\r\n        <a [routerLink]=\"['/docente/actividad/'+_asignaturaGrupo.actividad_antigua.actividad_id+'/'+_asignaturaGrupo.actividad_antigua.materia_id]\" >{{_asignaturaGrupo.actividad_antigua.fecha_actividad | date: 'dd/MM/yyyy'}} </a>\r\n        </span>\r\n        <span *ngIf=\"!_asignaturaGrupo.actividad_antigua\" >\r\n          Sin pendientes\r\n        </span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<ng-template #modalEncuesta let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Encuesta</h4>\r\n    <button *ngIf=\"Encuestas[0].obligatorio == '0'\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body my-3 mx-2 text-center\">\r\n      <p>Antes de continuar, ayúdanos a contestar el siguiente cuestionario</p>\r\n      <a class=\"btn btn-lg btn-primary mb-3\" [routerLink]=\"['encuesta/' + idEncuesta + '/' + idSwitchEncuesta]\">Ir al cuestionario</a>\r\n      <router-outlet></router-outlet> \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button *ngIf=\"Encuestas[0].obligatorio == '0'\" type=\"button\" class=\"btn btn-light\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/docente/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/docente/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9kYXNoYm9hcmQvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcZG9jZW50ZVxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/docente/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/docente/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
/* harmony import */ var src_app_administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/encuesta/services/encuesta.service */ "./src/app/administracion/encuesta/services/encuesta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_usuarioService, _asignaturaService, _fechaService, route, _encuestaService, modalService) {
        this._usuarioService = _usuarioService;
        this._asignaturaService = _asignaturaService;
        this._fechaService = _fechaService;
        this.route = route;
        this._encuestaService = _encuestaService;
        this.modalService = modalService;
        this.cargando = true;
        this.alert = false;
        this.title = 'Mis grupos';
        this._usuarioService.pushBreadcum(this.title, "/docente/home", 1);
        this._usuarioService.removeBreadcum(2);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.identity = localStorage.getItem('identity');
        this.identity = JSON.parse(this.identity);
        this.id_docente = this.identity.docente.docente_id;
        this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                var asignaturas = response['Asignaturas'];
                asignaturas.forEach(function (asignatura) {
                    var arreglo = this._fechaService.validaVigencia(asignatura.fecha_inicio, asignatura.fecha_fin, 1);
                    asignatura.fecha_inicio = new Date(asignatura.fecha_inicio * 1000);
                    asignatura.fecha_fin = new Date(asignatura.fecha_fin * 1000);
                    asignatura.activa = arreglo[0];
                    asignatura.estado = arreglo[1];
                }.bind(_this));
                _this.asignaturaGrupo = asignaturas;
                _this.cargando = false;
            }
            else {
                _this.cargando = false;
                _this.alert = true;
            }
        }, function (error) {
            console.log(error);
        });
        this.consultaEncuesta();
    };
    DashboardComponent.prototype.consultaEncuesta = function () {
        var _this = this;
        this._encuestaService.consultaEncuestaAlumno().subscribe(function (response) {
            if (response && response['status']) {
                _this.Encuestas = response['encuesta'];
                _this.idEncuesta = _this.Encuestas[0]['encuesta_id'];
                _this.idSwitchEncuesta = _this.Encuestas[0]['switch_encuesta_id'];
                _this.modalService.open(_this.modalEncuesta, { backdrop: 'static', keyboard: false, size: 'lg' });
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.seleccionaGrupo = function (asignaturaGrupo) {
        localStorage.setItem('selectedAsignaturaGrupo', JSON.stringify(asignaturaGrupo));
        this.setBreadcum(asignaturaGrupo.nombre_grupo, asignaturaGrupo.asignatura_grupo_id);
    };
    DashboardComponent.prototype.setBreadcum = function (title, id_grupo) {
        this.title = title;
        var url = "/docente/grupo/" + id_grupo + '/4';
        this._usuarioService.pushBreadcum(this.title, url, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])
    ], DashboardComponent.prototype, "myModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("modalEncuesta"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "modalEncuesta", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/docente/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/docente/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturaService"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_5__["FechaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_administracion_encuesta_services_encuesta_service__WEBPACK_IMPORTED_MODULE_6__["EncuestaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/docente/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/docente/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/docente/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/docente/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=docente-dashboard-dashboard-module.js.map