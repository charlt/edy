(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-actividad-form-actividad-module"],{

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

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: FormActividadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActividadRoutingModule", function() { return FormActividadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_actividad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-actividad.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _form_actividad_component__WEBPACK_IMPORTED_MODULE_2__["FormActividadComponent"]
    }
];
var FormActividadRoutingModule = /** @class */ (function () {
    function FormActividadRoutingModule() {
    }
    FormActividadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormActividadRoutingModule);
    return FormActividadRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div   class=\"row alert  alert-actividad\" role=\"alert\" >  \r\n  <div *ngIf=\"idActividad && actividad\" class=\"col-md-9\">\r\n    \r\n    <h5 class=\"text-left text-dark\">  \r\n       {{actividad.actividad_nombre}}</h5>\r\n    <p>Actividad del tipo {{actividad.tipo_actividad_nombre}}</p> \r\n    <button  *ngIf=\"actividad.tipo_actividad == 2\"  class=\"btn btn-info btn-sm\"  (click)=\"redireccion('preguntas')\">\r\n      <span ><i class=\"fa fa-plus-square\"></i> Mostrar preguntas</span>  \r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"idActividad && actividad\" class=\"col-md-3\">\r\n    \r\n\r\n    <button  *ngIf=\"idActividad\"  [disabled]=\"disablePreview\" (click)=\"openModulo(modalModulo)\" class=\"btn btn-primary btn-accion\" placement=\"top\" ngbTooltip=\"Cambiar actividad de Bloque\"><i class=\"fa fa-mail-forward\"></i></button>\r\n    <button [disabled]=\"disablePreview\" (click)=\"redireccion('edita')\" class=\"btn btn-info btn-accion\"  placement=\"top\" ngbTooltip=\"Editar la actividad\"><i class=\"fa fa-pencil\"></i></button>\r\n    <button [disabled]=\"disablePreview\" (click)=\"redireccion('vista-previa')\" class=\"btn btn-info btn-accion\" class=\"btn btn-warning btn-accion\" placement=\"top\" ngbTooltip=\"Vista previa de la actividad, para poder contestar y editar\" ><i class=\"fa fa-eye\"></i></button>\r\n  </div>\r\n  <div *ngIf=\"!idActividad\" class=\"col-md-12\">\r\n    \r\n    <h4 class=\"text-left text-dark\">{{title}}</h4>\r\n    \r\n  </div>\r\n\r\n<form  class=\"col-md-12\" [formGroup]=\"actividadForm\" (ngSubmit)=\"enviarInformacionActividad()\">\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\">{{'nombreActividad' | translate}}:</label>\r\n      <input formControlName=\"nombreActividad\" class=\"form-control\"  placeholder=\"{{'nombreActividad' | translate}}\" type=\"text\" (blur)=\"generaClaveAsign()\">\r\n      <span class=\"invalidText\" *ngIf=\"f.nombreActividad.invalid && f.nombreActividad.touched\">\r\n        {{'fmErrName' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"form-group\">                               \r\n      <label class=\"control-label\">{{'claveActividad' | translate}}:</label>\r\n      <input formControlName=\"claveActividad\" class=\"form-control\"  placeholder=\"{{'claveActividad' | translate}}\" type=\"text\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.claveActividad.invalid && f.claveActividad.touched\">\r\n        {{'fmErrKey' | translate}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n\r\n    <!-- <div class=\"form-group\">                               \r\n      <label class=\"control-label\" >{{'FechaInicio' | translate}}:</label>\r\n      <input formControlName=\"fechaInicio\" class=\"form-control\"  placeholder=\"{{'fechaInicio' | translate}}\" type=\"datetime-local\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.fechaInicio.invalid && f.fechaInicio.touched\">\r\n        {{'fmErrDate' | translate}}\r\n      </span>\r\n    </div>  -->\r\n  <div class=\"row mt-2 pl-3\" >\r\n    <div class=\"col-6\">\r\n      <input formControlName=\"fecha\" type=\"checkbox\" class=\"custom-control-input\" id=\"fecha\" name=\"fecha\">\r\n      <label class=\"custom-control-label\" for=\"fecha\"> {{'Agregar una fecha específica a esta actividad' | translate}}</label>\r\n    </div>\r\n    <div class=\"col-6\" [hidden]=\"!f.fecha.value\">\r\n      <input formControlName=\"hora\" type=\"checkbox\" class=\"custom-control-input\" id=\"hora\" name=\"hora\">\r\n      <label class=\"custom-control-label\" for=\"hora\"> {{'Agregar una hora específica a esta actividad' | translate}}</label>\r\n    </div>\r\n  </div>\r\n    <div class=\"row mt-2\" [hidden]=\"!f.fecha.value\">\r\n   \r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\" >\r\n        <label class=\"control-label\">Fecha inicio:</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"AAAA-MM-DD\"\r\n                     name=\"dp\" formControlName=\"fechaInicio\" [footerTemplate]=\"footerTemplate_1\" ngbDatepicker #d_1=\"ngbDatepicker\"\r\n                     [placement]=\"'bottom'\">\r\n              <div class=\"input-group-append\">\r\n                <button #buttonEl class=\"btn btn-outline-primary calendar\" (click)=\"d_1.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n              </div>\r\n        </div>\r\n        <ng-template #footerTemplate_1>\r\n          <hr class=\"my-0\">\r\n          <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"setData(1, today); d_1.close()\">Hoy</button>\r\n          <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d_1.close()\">Cerrar</button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\" [hidden]=\"!f.hora.value\">\r\n        <label class=\"control-label\">Hora inicio:</label>\r\n        <ngb-timepicker formControlName=\"horaInicio\" [meridian]=\"meridian\"></ngb-timepicker>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row mt-7\" [hidden]=\"!f.fecha.value\">\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n        <label class=\"control-label\">Fecha fin:</label>\r\n      \r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"AAAA-MM-DD\"\r\n                     name=\"dp\" formControlName=\"fechaFin\" [footerTemplate]=\"footerTemplate_2\" ngbDatepicker #d_2=\"ngbDatepicker\"\r\n                     [placement]=\"'bottom'\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-primary calendar\" (click)=\"d_2.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n              </div>\r\n        </div>\r\n        <ng-template #footerTemplate_2>\r\n          <hr class=\"my-0\">\r\n          <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"setData(2, today); d_2.close()\">Hoy</button>\r\n          <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d_2.close()\">Cerrar</button>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\" [hidden]=\"!f.hora.value\">\r\n        <label class=\"control-label\">Hora fin:</label>\r\n        <ngb-timepicker formControlName=\"horaFin\" [meridian]=\"meridian\"></ngb-timepicker>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"form-group\">                               \r\n      <label class=\"control-label\" >{{'FechaFin' | translate}}:</label>\r\n      <input formControlName=\"fechaFin\" class=\"form-control\"  placeholder=\"{{'fechaFin' | translate}}\" type=\"datetime-local\" >\r\n      <span class=\"invalidText\" *ngIf=\"f.fechaFin.invalid && f.fechaFin.touched\">\r\n        {{'fmErrDate' | translate}}\r\n      </span>\r\n    </div> -->\r\n  </div>\r\n</div><br>\r\n    <div  class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group text-center\">\r\n          <label class=\"control-label\" >{{'contenidoPedagogico' | translate}}:</label>\r\n          <app-file-upload formControlName=\"contenido\" (change)=\"guardarBorrador()\"></app-file-upload>\r\n          <div class=\"invalid-feedback\" style=\"display: block\">\r\n            <ng-container *ngIf=\"hasError('required')\">{{'fmErrfileRequired' | translate}}</ng-container>\r\n            <ng-container *ngIf=\"hasError('requiredFileType')\">{{'fmErrfileDocument' | translate}}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"row\" *ngFor=\"let _contenidoActividad of contenidoActividad; let i=index;\">\r\n          <div class=\"col-md-12 alert alert-primary archivo\" role=\"alert\">\r\n            <div class=\"pull-right\">\r\n              <button *ngIf=\"_contenidoActividad.visto == 0 || !_contenidoActividad.visto\" type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"vistaArchivo(_contenidoActividad.contenido_actividad_id,i,_contenidoActividad.visto)\"><i class=\"fa fa-eye-slash\"></i></button>\r\n              <button *ngIf=\"_contenidoActividad.visto == 1\" type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"vistaArchivo(_contenidoActividad.contenido_actividad_id,i,_contenidoActividad.visto)\"><i class=\"fa fa-eye\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"openModal(content, _contenidoActividad.url_contenido)\"><i class=\"fa fa-code\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"eliminarContenido(_contenidoActividad.contenido_actividad_id,i)\"><i class=\"fa fa-trash\"></i></button>\r\n            </div>\r\n            <div>\r\n              <app-archivo *ngIf=\"_contenidoActividad.url_contenido && !_contenidoActividad.url_contenido\" [urlBase]=\"_contenidoActividad.url_contenido\"></app-archivo>                  \r\n              <app-archivo *ngIf=\"_contenidoActividad.url_contenido && _contenidoActividad.url_contenido\" [urlBase]=\"_contenidoActividad.url_contenido\" [nombre]=\"_contenidoActividad.nombre\"></app-archivo>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p *ngIf=\"cargando\"><i class=\"fa fa-spin fa-spinner\" aria-hidden=\"true\"></i> Cargando archivo, por favor espere...</p>\r\n      </div>\r\n    </div>\r\n      <!-- #### -->\r\n      <ng-template #content let-modal>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Documento</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <textarea name=\"textarea\" rows=\"5\" cols=\"94\"><div class=\"row text-center\">\r\n            <a class=\"btn btn-link\" href=\"{{urlArchivo}}\"><h2><i class=\"fa fa-file-o\"></i></h2> <p>Descargar contenido académico</p></a>\r\n            </div></textarea>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Cerrar</button>\r\n        </div>\r\n      </ng-template>\r\n      <!--####-->\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-sm\">\r\n        <div class=\"form-group\">                               \r\n            <label class=\"control-label\" for=\"fecha_inicio\">{{'instruccion' | translate}}:</label>            \r\n            <!-- <ckeditor [config]=\"{allowedContent : true }\"  formControlName=\"instruccion\" name=\"ckeditor\"></ckeditor><br> -->\r\n            <ckeditor [config]=\"{\r\n              allowedContent : true,\r\n              extraPlugins: ['uploadimage','justify'],\r\n              toolbar: adminEditor,\r\n              filebrowserUploadUrl: 'http://plataforma.estudy.com/apiestudy/extras/archivo/carga_ckeditor.php'\r\n              }\"\r\n              formControlName=\"instruccion\" name=\"ckeditor\"\r\n              (ready)=\"comienza($event)\" (click)=\"btnSource($event)\" (blur)=\"getData($event)\"></ckeditor>\r\n            <span class=\"invalidText\" *ngIf=\"f.instruccion.invalid && f.instruccion.touched\">\r\n                {{'fmErrText' | translate}}\r\n           </span>\r\n        </div> \r\n    </div>\r\n  </div>\r\n\r\n  <!-- ##### -->\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\">\r\n      <div class=\"form-group\">         \r\n        <label class=\"control-label\" for=\"\">{{'tipoActividad' | translate}}:</label>\r\n        <select  formControlName=\"tipoActividad\"  class=\"form-control\"  >\r\n          <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n          <option  [value]=\"_tipoActividad.tipo_actividad_id\" *ngFor=\"let _tipoActividad of tipoActividad\">{{_tipoActividad.tipo_actividad_nombre}}</option>\r\n        </select>\r\n        <span class=\"invalidText\" *ngIf=\"f.tipoActividad.invalid && f.tipoActividad.touched\">\r\n                {{'fmErrSelect' | translate}}\r\n        </span>\r\n      </div>\r\n      <!-- #### -->\r\n      <div>\r\n        <div *ngIf=\"f.tipoEvaluacion\">\r\n          <label class=\"control-label\" for=\"nombre_ciclo\">{{'modoCalificacion' | translate}}:</label>\r\n          <div class=\"row mt-1\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio1\" name=\"tipoEvaluacion\" formControlName=\"tipoEvaluacion\" value=\"2\" (click)=\"mostrar_rubrica()\">\r\n                <label class=\"custom-control-label\" for=\"radio1\" >{{'Rubrica' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio2\" name=\"tipoEvaluacion\" formControlName=\"tipoEvaluacion\" value=\"1\">\r\n                <label class=\"custom-control-label\" for=\"radio2\" >{{'PonderacionManual' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio3\" name=\"tipoEvaluacion\" formControlName=\"tipoEvaluacion\" value=\"3\">\r\n                <label class=\"custom-control-label\" for=\"radio3\" >{{'PonderacionAutomatica' | translate}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoEvaluacion.invalid && f.tipoEvaluacion.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n          <div *ngIf=\"f.tipoEvaluacion.value == 2\" class=\"form-group alert alert-info\" >      \r\n              <label class=\"control-label  \" for=\"nombre_ciclo\">{{'_seleccionRubrica' | translate}}:</label>\r\n              <a *ngIf=\"idRol == 1\" [routerLink]=\"['/admin/rubricas/']\"> Crear rúbrica</a>\r\n            <select   formControlName=\"idRubrica\" class=\"form-control\"  >rubricas\r\n              <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n              <option  [value]=\"rubrica.rubrica_id\" *ngFor=\"let rubrica of rubricas\">{{rubrica.desc_rubrica}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"f.bullet && idRol == 1\">\r\n          <label class=\"control-label mt-3\" for=\"nombre_ciclo\">{{'SelectFormList' | translate}}: </label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio4\" name=\"bullet\" formControlName=\"bullet\" value=\"2\">\r\n                <label class=\"custom-control-label\" for=\"radio4\" >{{'letra' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio4.1\" name=\"bullet\" formControlName=\"bullet\" value=\"1\">\r\n                <label class=\"custom-control-label\" for=\"radio4.1\" >{{'numero' | translate}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.bullet.invalid && f.bullet.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n\r\n        <div *ngIf=\"f.aleatorio && idRol == 1\">\r\n          <label class=\"control-label\" for=\"nombre_ciclo\">{{'aleatorio' | translate}}:</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio5\" name=\"aleatorio\" formControlName=\"aleatorio\" value=\"1\">\r\n                <label class=\"custom-control-label\" for=\"radio5\" >{{'Si' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio6\" name=\"aleatorio\" formControlName=\"aleatorio\" value=\"0\">\r\n                <label class=\"custom-control-label\" for=\"radio6\" >{{'No' | translate}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.aleatorio.invalid && f.aleatorio.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"f.numeroIntentos\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label  \" for=\"nombre_ciclo\">{{'numeroIntentos' | translate}}:</label>\r\n            <input class=\"form-control\" formControlName=\"numeroIntentos\" placeholder=\"{{'numeroIntentos' | translate}}\" type=\"number\" >\r\n            <span class=\"invalidText\" *ngIf=\"f.numeroIntentos.invalid && f.numeroIntentos.touched\">\r\n              {{'fmErrNumber' | translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"form-group\" *ngIf=\"f.resolucion && idRol == 1\">\r\n          <label class=\"control-label\" for=\"\">{{'resolucion' | translate}}:</label>\r\n          <select  formControlName=\"resolucion\"  class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            <option  [value]=\"_resolucion.metodo_resolver_id\" *ngFor=\"let _resolucion of resolucion\">{{_resolucion.metodo_resolver}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoActividad.invalid && f.tipoActividad.touched\">\r\n              {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"f.ponderacion  && f.unica.value == '0' && idRol == 1\">\r\n          <label class=\"control-label\" for=\"\">{{'Ponderación en la asignatura' | translate}} <!--(máx: {{ponderacionMax}}%)-->:</label>\r\n          <div class=\"form-group\">                               \r\n            <input  formControlName=\"ponderacion\"  class=\"form-control\"  type=\"number\">    \r\n            <span class=\"invalidText\" *ngIf=\"f.tipoActividad.invalid && f.tipoActividad.touched\">\r\n                {{'fmErrSelect' | translate}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"f.ponderacion && idRol == 1 \">\r\n          <label><input formControlName=\"unica\" [checked]=\"f.unica.value =='1' \" type=\"checkbox\"> Actividad única en la asignatura</label>\r\n          <span class=\"invalidText\" *ngIf=\"f.unica.invalid && f.unica.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"f.dificultad && idRol == 1\">\r\n          <label class=\"control-label\" for=\"\">{{'dificultad' | translate}}:</label>\r\n          <select  formControlName=\"dificultad\"  class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            <option  [value]=\"_dificultad.dificultad_id\" *ngFor=\"let _dificultad of dificultad\">{{_dificultad.dificultad_nombre}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoActividad.invalid && f.tipoActividad.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span> \r\n        </div>\r\n        <div class=\"form-group mt-2\" *ngIf=\"f.portafolio && idRol == 1\">\r\n          <label class=\"control-label  \" for=\"nombre_ciclo\">{{'Portafolio' | translate}}:</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio7\" name=\"portafolio\" formControlName=\"portafolio\" value=\"1\">\r\n                <label class=\"custom-control-label\" for=\"radio7\" >{{'Si' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio8\" name=\"portafolio\" formControlName=\"portafolio\" value=\"0\">\r\n                <label class=\"custom-control-label\" for=\"radio8\" >{{'No' | translate}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.portafolio.invalid && f.portafolio.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"f.importancia && idRol == 1\">\r\n          <label class=\"control-label\" for=\"\">{{'Importancia' | translate}}:</label>\r\n          <select  formControlName=\"importancia\"  class=\"form-control\"  >\r\n            <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n            <option  [value]=\"_importanciaActividad.importancia_actividad_id\" *ngFor=\"let _importanciaActividad of importanciaActividad\">{{_importanciaActividad.importancia_actividad_nombre}}</option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.importancia.invalid && f.importancia.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span> \r\n        </div>\r\n\r\n        <div class=\"form-group mt-2\" *ngIf=\"f.final && idRol == 1\">\r\n          <label class=\"control-label  \" for=\"nombre_ciclo\">{{'Evaluación de actividad en la asignatura' | translate}}:</label>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio9\" formControlName=\"final\" value=\"0\">\r\n                <label class=\"custom-control-label\" for=\"radio9\" >{{'Normal' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio10\" formControlName=\"final\" value=\"1\">\r\n                <label class=\"custom-control-label\" for=\"radio10\" >{{'Final' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"custom-control custom-radio\" (click)=\"alertUnica()\">\r\n                <input type=\"radio\" class=\"custom-control-input\" id=\"radio11\" formControlName=\"final\" value=\"2\">\r\n                <label class=\"custom-control-label\" for=\"radio11\" >{{'Extraordinario' | translate}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.final.invalid && f.final.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div>\r\n\r\n        <!--div class=\"form-group\" *ngIf=\"f.totalPreguntas\">\r\n          <label class=\"control-label\" for=\"nombre_ciclo\">{{'Elegir ' | translate}}:</label>\r\n          <div class=\"row\">\r\n            <div class=\"col mt-3\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input formControlName=\"totalPreguntas\" type=\"checkbox\" class=\"custom-control-input\" id=\"totalPreguntas\" name=\"totalPreguntas\">\r\n                <label class=\"custom-control-label\" for=\"totalPreguntas\">{{'¿Deseas el cálculo de ponderación automático?' | translate}}</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"f.numeroPreguntas\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'Total de preguntas en actividad' | translate}}</label>\r\n                <input class=\"form-control\" formControlName=\"numeroPreguntas\" type=\"number\" >\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"invalidText\" *ngIf=\"f.portafolio.invalid && f.portafolio.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div-->\r\n    </div>\r\n    <div class=\"col-12 mt-3\" *ngIf=\"errorFecha\">\r\n      <div class=\"alert alert-danger\">\r\n        No puedes cargar horas solamente, debes asignar una fecha\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-2\">\r\n      <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"mt-2 btn btn-primary pull-right guardar-ciclo\">{{'fmSave' | translate}}</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n<ng-template #modalModulo let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-body\">\r\n      <h4>Cambiar actividad de Bloque</h4>\r\n      <select  [(ngModel)]=\"idModuloNuevo\" class=\"form-control\"  >\r\n        <option hidden value=\"\" disabled  selected>{{'fmOptSelect' | translate}} </option>\r\n        <option  [value]=\"modulo.modulo_id\" *ngFor=\"let modulo of modulos\">{{modulo.modulo_nombre}}</option>\r\n      </select>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"c('Close click')\">Cerrar</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"c('Close click'); moverBloque()\">Mover de bloque</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.ajs-message {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #31708f; }\n\n.alert-actividad {\n  text-align: left;\n  padding: 20px;\n  background-color: white; }\n\n.btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL2Zvcm0tYWN0aXZpZGFkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL2Zvcm0tYWN0aXZpZGFkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxjYXJnYS1hY3RpdmlkYWRlc1xcYXNpZ25hdHVyYVxcbW9kdWxvXFxhY3RpdmlkYWRcXGZvcm0tYWN0aXZpZGFkXFxmb3JtLWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUFlLGVBQWM7RUFBRywwQkFBeUI7RUFBRyxzQkFBcUIsRUFBSTs7QUFFckY7RUFDSSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGFBQVc7RUFDWCxVQUFRO0VBQ1Isa0JBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL2Zvcm0tYWN0aXZpZGFkL2Zvcm0tYWN0aXZpZGFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcInNyYy9hcHAvc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLmFqcy1tZXNzYWdlIHsgY29sb3I6ICMzMTcwOGY7ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3OyAgYm9yZGVyLWNvbG9yOiAjMzE3MDhmOyB9XHJcblxyXG4uYWxlcnQtYWN0aXZpZGFke1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuLWFjY2lvbntcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: FormActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActividadComponent", function() { return FormActividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/learning/trActividad */ "./src/app/models/learning/trActividad.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/actividad.service */ "./src/app/administracion/carga-actividades/services/actividad.service.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_models_adminEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/adminEditor */ "./src/app/models/adminEditor.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_administracion_rubricas_services_rubricas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/administracion/rubricas/services/rubricas.service */ "./src/app/administracion/rubricas/services/rubricas.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
/* harmony import */ var src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/administracion/asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FormActividadComponent = /** @class */ (function () {
    function FormActividadComponent(formBuilder, _usuarioService, _actividadService, _rubricaService, modalService, config, _fechaService, _asignaturaService, calendar, route, router, _location) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this._rubricaService = _rubricaService;
        this.modalService = modalService;
        this.config = config;
        this._fechaService = _fechaService;
        this._asignaturaService = _asignaturaService;
        this.calendar = calendar;
        this.route = route;
        this.router = router;
        this._location = _location;
        this.ponderacionTotal = 100;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.botonFuente = false;
        this.modulosActivos = [];
        this.adminEditor = src_app_models_adminEditor__WEBPACK_IMPORTED_MODULE_6__["adminEditor"];
        this.today = this.calendar.getToday();
        this.meridian = true;
        this.errorFecha = false;
        this.disablePreview = false;
        config.spinners = false;
    }
    Object.defineProperty(FormActividadComponent.prototype, "f", {
        get: function () { return this.actividadForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormActividadComponent.prototype, "sf", {
        get: function () { return this.actividadForm.controls.items; },
        enumerable: true,
        configurable: true
    });
    // log(val) { console.log(val); }
    FormActividadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].urlAssets;
        var identity = this._usuarioService.getIdentity();
        this.jwt = this._usuarioService.getJWT();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.idActividad = this.route.snapshot.parent.params['id'];
        this.idModulo = this.route.snapshot.parent.parent.params['id'];
        this.idAsignatura = this.route.snapshot.parent.parent.parent.parent.parent.parent.params['id'];
        this.idRol = parseInt(this._usuarioService.getRol().rol_id);
        this.actividadForm = this.formBuilder.group({
            claveActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombreActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoActividad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instruccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contenido: ['', Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(0)],
            fecha: [false],
            hora: [false],
            fechaInicio: [''],
            fechaFin: [''],
            horaInicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]['null']],
            horaFin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]['null']],
            idRubrica: [0],
            zonaHoraria: new Date().getTimezoneOffset() / 60
        });
        if (this.idActividad) {
            this._actividadService.consultaActividad(this.idActividad, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.actividad = response['actividad'][0];
                    _this.inicializaActividad();
                    _this.consultaTipoActividad(_this.actividad.tipo_actividad_id);
                    _this.consultaPonderacion(_this.actividad.ponderacion);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.actividad = new src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_2__["TrActividad"]();
            this.title = "Crear nueva actividad";
            this.consultaTipoActividad(null);
            this.consultaPonderacion(null);
        }
        this._actividadService.consultaDificultad(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.dificultad = response['dificultad'];
            }
        }, function (error) {
            console.log(error);
        });
        this._actividadService.consultaResolucion(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.resolucion = response['metodos'];
            }
        }, function (error) {
            console.log(error);
        });
        this._actividadService.consultaImportanciaActividad().subscribe(function (response) {
            if (response && response['status']) {
                _this.importanciaActividad = response['actividades'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.consultaPonderacion = function (ponderacionActual) {
        var _this = this;
        this._actividadService.sumaPonderacion(this.idAsignatura).subscribe(function (response) {
            if (response['status']) {
                _this.ponderacionMax = _this.ponderacionTotal - parseInt(response['ponderacionTotal']);
                if (_this.ponderacionMax < 0)
                    _this.ponderacionMax = 0;
                if (ponderacionActual) {
                    _this.ponderacionMax = _this.ponderacionMax + parseInt(ponderacionActual);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.consultaTipoActividad = function (id_tipo_actividad) {
        var _this = this;
        this._actividadService.consultaTipoActividad().subscribe(function (response) {
            if (response && response['status']) {
                _this.tipoActividad = response['actividades'];
                if (_this.idRol != 1) {
                    var array = _this.tipoActividad.map(function (a) { return a.tipo_actividad_id; });
                }
                _this.valueChanges();
                if (id_tipo_actividad) {
                    _this.generateItems(id_tipo_actividad);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.openModulo = function (content) {
        var _this = this;
        this.idModuloNuevo = '';
        var tipo, idAsignatura;
        if (this.idRol == 1) {
            idAsignatura = this.idAsignatura;
            tipo = 1;
        }
        else {
            idAsignatura = this.route.snapshot.parent.parent.parent.parent.params['id'];
            tipo = 3;
        }
        this._asignaturaService.consultaModulo(idAsignatura, tipo, null).subscribe(function (response) {
            if (response && response['status']) {
                var modulos = response['modulos'];
                _this.modulos = modulos.filter(function (modulo) {
                    console.log(modulo.modulo_id);
                    console.log(this.idModulo);
                    return modulo.modulo_id != this.idModulo;
                }.bind(_this));
            }
            else {
                _this.modulos = [];
            }
        }, function (error) {
            console.log(error);
            _this.modulos = [];
        });
        this.modalService.open(content, { size: 'sm' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    FormActividadComponent.prototype.moverBloque = function () {
        var _this = this;
        this._actividadService.cambiarModulo(this.idActividad, this.actividad.orden, this.idModulo, this.idModuloNuevo).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success('Actividad movida exitosamente');
                _this._location.back();
            }
            else {
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.inicializaActividad = function () {
        var _this = this;
        var shuffle;
        var tipoActividad, dificultad, resolucion; //es necesario declararla con un valor de lo contrario no manda información
        this.ponderacionMax = this.ponderacionTotal;
        var _fechaInicio = '';
        var _fechaFin = '';
        var _horaInicio = '';
        var _horaFin = '';
        if (this.actividad) { //si existe un valor de actividad tomo el id_actividad para su posterior uso
            if (this.actividad.fecha_inicio) {
                var Inicio = new Date(this.actividad.fecha_inicio * 1000);
                _fechaInicio = { year: Inicio.getFullYear(), month: Inicio.getMonth() + 1, day: Inicio.getDate() };
                _horaInicio = { hour: Inicio.getHours(), minute: Inicio.getMinutes(), second: Inicio.getSeconds() };
                this.actividadForm.get('fecha').setValue(true);
                if (Inicio.getHours() != 0 || Inicio.getMinutes() != 0) {
                    this.actividadForm.get('hora').setValue(true);
                }
            }
            if (this.actividad.fecha_fin) {
                var Fin = new Date(this.actividad.fecha_fin * 1000);
                _fechaFin = { year: Fin.getFullYear(), month: Fin.getMonth() + 1, day: Fin.getDate() };
                _horaFin = { hour: Fin.getHours(), minute: Fin.getMinutes(), second: Fin.getSeconds() };
            }
            this.idActividad = this.actividad.actividad_id;
            tipoActividad = this.actividad.tipo_actividad_id;
            dificultad = this.actividad.dificultad_id;
            resolucion = this.actividad.metodo_resolver_id;
            this.ponderacion = parseInt(this.actividad.ponderacion);
            shuffle = this.actividad.aleatorio ? this.actividad.aleatorio : 0;
        }
        else { //si no sólo declaro actividad como un elemento vacio, es necesario para el funcionamiento del formulario
            this.actividad = new src_app_models_learning_trActividad__WEBPACK_IMPORTED_MODULE_2__["TrActividad"]();
            tipoActividad = "";
            dificultad = 1;
            resolucion = 1;
            shuffle = 0;
            this.ponderacion = 0;
        }
        if (this.actividad.tipo_calificacion == '2') {
            this.mostrar_rubrica();
        }
        this.actividadForm.get('nombreActividad').setValue(this.actividad.actividad_nombre);
        this.actividadForm.get('claveActividad').setValue(this.actividad.actividad_clave);
        this.actividadForm.get('tipoActividad').setValue(tipoActividad);
        this.actividadForm.get('instruccion').setValue(this.actividad.instruccion);
        this.actividadForm.get('contenido').setValue('');
        this.actividadForm.get('fechaInicio').setValue(_fechaInicio);
        this.actividadForm.get('fechaFin').setValue(_fechaFin);
        this.actividadForm.get('horaInicio').setValue(_horaInicio);
        this.actividadForm.get('horaFin').setValue(_horaFin);
        this.actividadForm.get('idRubrica').setValue(this.actividad.rubrica_id);
        this._actividadService.consultaContenido(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.contenidoActividad = response['contenido'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.vistaArchivo = function (id, index, _visto) {
        this.contenidoActividad[index].visto = _visto;
        if (this.contenidoActividad[index].visto == 0 || !this.contenidoActividad[index].visto) {
            this.contenidoActividad[index].visto = 1;
        }
        else if (this.contenidoActividad[index].visto == 1) {
            this.contenidoActividad[index].visto = 0;
        }
        this._actividadService.vistaArchivo(id, this.contenidoActividad[index].visto, this.jwt).subscribe(function (response) {
            //   if(response && response['status']){
            //   console.log(response);   
            // }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.valueChanges = function () {
        var _this = this;
        this.actividadForm.get('tipoActividad').valueChanges.subscribe(function (value) {
            _this.deleteControls();
            _this.generateItems(value);
        });
    };
    FormActividadComponent.prototype.generateItems = function (value) {
        var selected = this.tipoActividad.find(function (r) { return r.tipo_actividad_id == value; });
        var a = this.actividad;
        var aleatorio = a.aleatorio ? a.aleatorio : '0';
        var controls;
        if (value == '2') {
            var total_preguntas = this.actividad.num_total_preguntas;
            if (parseInt(total_preguntas) > 0)
                total_preguntas = true;
            else if (parseInt(total_preguntas) == 0 || !total_preguntas)
                total_preguntas = false;
            controls = [{ control: 'tipoEvaluacion', value: a.tipo_calificacion ? a.tipo_calificacion : '3', show: selected.tipo_evaluacion },
                { control: 'bullet', value: a.numero_mostrado ? a.numero_mostrado : '1', show: selected.bullet },
                { control: 'aleatorio', value: aleatorio, show: selected.aleatorio },
                { control: 'numeroIntentos', value: a.num_intentos ? a.num_intentos : 1, show: selected.num_intentos },
                { control: 'resolucion', value: a.metodo_resolver_id ? a.metodo_resolver_id : '0', show: selected.metodo_resolucion },
                { control: 'importancia', value: a.importancia_actividad_id ? a.importancia_actividad_id : '1', show: selected.importancia_actividad },
                { control: 'ponderacion', value: this.ponderacion ? this.ponderacion : 0, show: selected.ponderacion },
                { control: 'unica', value: a.unica ? a.unica : '0', show: selected.unica },
                { control: 'portafolio', value: a.portafolio ? a.portafolio : '0', show: selected.portafolio },
            ];
            /*if (total_preguntas) {
              controls.push({ control: 'numeroPreguntas', value: a.num_total_preguntas, show: '1' })
            }*/
        }
        else {
            controls = [{ control: 'tipoEvaluacion', value: a.tipo_calificacion, show: selected.tipo_evaluacion },
                { control: 'bullet', value: a.numero_mostrado, show: selected.bullet },
                { control: 'aleatorio', value: aleatorio, show: selected.aleatorio },
                { control: 'numeroIntentos', value: a.num_intentos, show: selected.num_intentos },
                { control: 'resolucion', value: a.metodo_resolver_id, show: selected.metodo_resolucion },
                { control: 'importancia', value: a.importancia_actividad_id, show: selected.importancia_actividad },
                { control: 'ponderacion', value: this.ponderacion, show: selected.ponderacion },
                { control: 'unica', value: a.unica, show: selected.unica },
                { control: 'portafolio', value: a.portafolio, show: selected.portafolio },
            ];
        }
        this.addControls(controls);
    };
    FormActividadComponent.prototype.deleteControls = function () {
        var _this = this;
        var controls = ['tipoEvaluacion', 'bullet', 'aleatorio', 'numeroIntentos', 'resolucion', 'ponderacion',
            'unica', 'importancia', 'portafolio',];
        controls.forEach(function (control) {
            if (_this.actividadForm.get(control)) {
                _this.actividadForm.removeControl(control);
            }
        });
    };
    FormActividadComponent.prototype.addControls = function (controls) {
        var _this = this;
        controls.forEach(function (data) {
            if (data.control == 'ponderacion' && data.show == '1') {
                _this.actividadForm.addControl(data.control, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), function (control) { return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(_this.ponderacionMax)(control); }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])));
            }
            else if (data.show == '1') {
                _this.actividadForm.addControl(data.control, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"]['required']));
            }
        });
        /*if (this.actividadForm.get('totalPreguntas')) {
          this.actividadForm.get('totalPreguntas').valueChanges.subscribe(value => {
            if (value) this.actividadForm.addControl('numeroPreguntas', new FormControl('', Validators.required));
            else this.actividadForm.removeControl('numeroPreguntas');
          })
        }        */
    };
    FormActividadComponent.prototype.generaClaveAsign = function () {
        var nombre = this.actividadForm.get('nombreActividad').value;
        var palabras = nombre.split(' ');
        var iniciales = '';
        var clave;
        palabras.forEach(function (_palabra) {
            iniciales = iniciales + _palabra.substr(0, 1);
        });
        clave = iniciales.toUpperCase();
        this.actividadForm.get('claveActividad').setValue(clave);
    };
    FormActividadComponent.prototype.openModal = function (content, urlArchivo) {
        this.modalService.open(content, { size: 'lg' });
        // let _url = urlArchivo.splice(0,1);
        // console.log(_url);
        this.urlArchivo = this.urlAssets + urlArchivo;
    };
    FormActividadComponent.prototype.verDatos = function () {
        console.log(this.actividadForm.value);
    };
    FormActividadComponent.prototype.guardarBorrador = function () {
        var _this = this;
        this.cargando = true;
        this._actividadService.guardaContenido(this.actividadForm, this.idActividad, this.jwt, this.idModulo).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                if (response['id_actividad'])
                    _this.idActividad = response['id_actividad'];
                _this._actividadService.consultaContenido(_this.idActividad, _this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.contenidoActividad = response['contenido'];
                        _this.cargando = false;
                    }
                }, function (error) {
                    console.log(error);
                });
                _this.sucessEvent.emit({
                    'status': response['status'],
                    'idPregunta': response['idPregunta']
                }); //si se insertó correctamente se le agrega la asignatura a la asignatura
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.eliminarContenido = function (id, index) {
        alertify.confirm('¿Deseas eliminar el contenido?', function () {
            var _this = this;
            this._actividadService.eliminaContenido(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.contenidoActividad.splice(index, 1);
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
    FormActividadComponent.prototype.hasError = function (error) {
        var control = this.actividadForm.get('contenido');
        return control.dirty && control.hasError(error);
    };
    FormActividadComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    FormActividadComponent.prototype.setData = function (id, data) {
        if (id == 1) {
            this.actividadForm.get('fechaInicio').setValue(data);
        }
        else {
            this.actividadForm.get('fechaFin').setValue(data);
        }
    };
    FormActividadComponent.prototype.enviarInformacionActividad = function (id, url) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (url === void 0) { url = ''; }
        if (id == 1)
            this.disablePreview = true;
        this.actividadForm.get('fechaInicio').setErrors(null);
        this.actividadForm.get('fechaFin').setErrors(null);
        if (this.actividadForm.invalid) {
            Object.keys(this.actividadForm.controls).forEach(function (controlKey) {
                _this.actividadForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (!this.botonFuente) {
            // let boton = document.getElementById(this.idCKeditor);
            // console.log(this.idCKeditor);
            // boton.click();
            // }   
            var form = this.actividadForm.value;
            if (((!form.fechaInicio || form.fechaInicio == '') && (form.horaInicio != '' && form.horaInicio)) ||
                ((!form.fechaFin || form.fechaFin == '') && (form.horaFin != '' && form.horaFin))) {
                this.errorFecha = true;
            }
            else {
                this.errorFecha = false;
                var fInicio = void 0, fFin = void 0;
                if (!form.fecha || ((form.fechaInicio == '' || !form.fechaInicio) && (form.horaInicio == '' || !form.horaInicio)))
                    fInicio = '0000-00-00 00:00:00';
                else if (!form.hora || ((form.fechaInicio != '' && form.fechaInicio) && (form.horaInicio == '' || !form.fechaInicio)))
                    fInicio = this._fechaService.formatoFecha(form.fechaInicio, '', 1) + ' 00:00:00';
                else if ((form.fechaInicio == '' || !form.fechaInicio) && (form.horaInicio != '' && form.horaInicio))
                    fInicio = '0000-00-00 ' + this._fechaService.formatoFecha('', form.horaInicio, 2);
                else if ((form.fechaInicio != '' && form.fechaInicio) && (form.horaInicio != '' && form.horaInicio))
                    fInicio = this._fechaService.formatoFecha(form.fechaInicio, form.horaInicio, 0);
                if (!form.fecha || ((form.fechaFin == '' || !form.fechaFin) && (form.horaFin == '' || !form.horaFin)))
                    fFin = '0000-00-00 00:00:00';
                else if (!form.hora || ((form.fechaFin != '' && form.fechaFin) && (form.horaFin == '' || !form.fechaFin)))
                    fFin = this._fechaService.formatoFecha(form.fechaFin, '', 1) + ' 23:59:00';
                else if ((form.fechaFin == '' || !form.fechaFin) && (form.horaFin != '' && form.horaFin))
                    fFin = '0000-00-00 ' + this._fechaService.formatoFecha('', form.horaFin, 2);
                else if ((form.fechaFin != '' && form.fechaFin) && (form.horaFin != '' && form.horaFin))
                    fFin = this._fechaService.formatoFecha(form.fechaFin, form.horaFin, 0);
                this._actividadService.modificaActividad(this.actividadForm, this.idModulo, this.idActividad, this.jwt, fInicio, fFin).subscribe(function (response) {
                    if (response && response['status']) {
                        if (!_this.idActividad)
                            _this.idActividad = response['idActividad'];
                        if (_this.actividadForm.get('tipoActividad').value == "2" && id == 0) {
                            _this.router.navigate(['./preguntas/' + _this.idActividad + '/nuevo'], { relativeTo: _this.route.parent.parent });
                        }
                        else if (_this.actividadForm.get('tipoActividad').value != "2" && id == 0) {
                            _this._location.back();
                        }
                        else if (id == 1) {
                            _this.router.navigate(['./' + url + '/' + _this.idActividad], { relativeTo: _this.route.parent.parent });
                        }
                        alertify.success(response['msg']);
                    }
                    else {
                        alertify.error(response['msg']);
                    }
                    _this.disablePreview = false;
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            alertify.error("Para guardar los cambios da click de nuevo en el botón Fuente HTML").dismissOthers();
        }
    };
    FormActividadComponent.prototype.mostrar_rubrica = function () {
        var _this = this;
        this._rubricaService.catalogo(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.rubricas = response['rubricas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormActividadComponent.prototype.comienza = function (event) {
        var self = this;
        var url = src_app_services_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].url;
        var urlAssets = src_app_services_global__WEBPACK_IMPORTED_MODULE_7__["GLOBAL"].urlAssets;
        var jwt = this.jwt;
        var idModulo = "" + this.idModulo + "";
        event.editor.on('key', function (evt) {
            var myEditor = this;
            //if delete or backspace pressed
            if ((evt.data.keyCode in { 8: 1, 46: 1 })) {
                //get the last element
                var lastElement = myEditor.elementPath().lastElement, 
                // lastElementName = lastElement.getName(),
                lastElementNode = lastElement.$; //native DOM object
                //see what properties the node has
                var src = lastElementNode.getAttribute("src");
                if (src) {
                    var array = src.split("assets");
                    var url = 'assets' + array[1];
                    self._actividadService.eliminaImagen(url).subscribe(function (response) {
                        if (response && response['status'])
                            alertify.success(response['msg']).dismissOthers();
                        else
                            alertify.error(response['msg']).dismissOthers();
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        });
        event.editor.on('fileUploadRequest', function (evt) {
            var fileLoader = evt.data.fileLoader, formData = new FormData(), xhr = fileLoader.xhr;
            xhr.open('POST', url + 'extras/archivo/carga_ckeditor.php', true);
            //xhr.setRequestHeader('Content-type', "multipart/form-data");
            formData.append('jwt', jwt);
            formData.append('nom_carpeta', 'modulo');
            formData.append('id', idModulo);
            formData.append('file', fileLoader.file, fileLoader.fileName);
            fileLoader.xhr.send(formData);
            evt.stop();
            // Prevented the default behavior.
        }, null, null, 4);
        event.editor.on('fileUploadResponse', function (evt) {
            // Prevent the default response handler.
            evt.stop();
            // Get XHR and response.
            var data = evt.data, xhr = data.fileLoader.xhr, response = xhr.responseText.split('|');
            if (response[1]) {
                // An error occurred during upload.          
                data.message = response[1];
                evt.cancel();
            }
            else {
                var msg = JSON.parse(response[0]);
                // console.log(response[0])
                // console.log(msg);
                setTimeout(function () {
                    self.getData(event);
                }, 10);
                data.url = urlAssets + msg.url;
            }
        });
    };
    FormActividadComponent.prototype.getData = function (event) {
        this.actividadForm.controls['instruccion'].setValue(event.editor.getData());
    };
    FormActividadComponent.prototype.btnSource = function (evt) {
        // this.modulosActivos = [];
        // let numero = 0;
        // this.modulo.forEach(mod => {
        //   if (mod.actividades) {
        //     for (let i = 0; i < mod.actividades.length; i++) {
        //       if (mod.actividades[i].editar) {
        //         this.modulosActivos.push(numero)
        //         numero++;
        //       }          
        //     }
        //   }
        // });
        // console.log(this.modulosActivos)
        var parent = evt.target.classList;
        if (parent[1]) {
            var sourceBtn = parent[1].substr(0, 18);
            if (sourceBtn === "cke_button__source") {
                this.botonFuente = !this.botonFuente;
                // if (this.botonFuente) {
                //   alertify.error("Para guardar los cambios da click de nuevo en el botón Fuente HTML").dismissOthers();
                // }else{
                //   alertify.success("Es posible guardar la información").dismissOthers();
                // }
            }
            // if (this.modulosActivos.length == 1) {
            //   this.idCKeditor = document.getElementsByClassName(parent[1])[0].id;
            // }
            // console.log(this.idCKeditor)
            // console.log(this.indexActividad)
            // console.log(document.getElementsByClassName(parent[1]))
            // console.log(div)
        }
    };
    FormActividadComponent.prototype.redireccion = function (url) {
        this.enviarInformacionActividad(1, url);
    };
    FormActividadComponent.prototype.alertUnica = function () {
        alertify.warning("Esta forma de evaluación reemplaza todas las calificaciones de las actividades anteriores").dismissOthers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormActividadComponent.prototype, "sucessEvent", void 0);
    FormActividadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-actividad',
            template: __webpack_require__(/*! ./form-actividad.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.html"),
            styles: [__webpack_require__(/*! ./form-actividad.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_4__["ActividadService"],
            src_app_administracion_rubricas_services_rubricas_service__WEBPACK_IMPORTED_MODULE_8__["RubricasService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTimepickerConfig"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_12__["FechaService"],
            src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_13__["AsignaturaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbCalendar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]])
    ], FormActividadComponent);
    return FormActividadComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FormActividadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActividadModule", function() { return FormActividadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-actividad-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad-routing.module.ts");
/* harmony import */ var _form_actividad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-actividad.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/form-actividad/form-actividad.component.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FormActividadModule = /** @class */ (function () {
    function FormActividadModule() {
    }
    FormActividadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_form_actividad_component__WEBPACK_IMPORTED_MODULE_3__["FormActividadComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _form_actividad_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormActividadRoutingModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_4__["LanguageTranslationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__["ArchivoModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
            ]
        })
    ], FormActividadModule);
    return FormActividadModule;
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

/***/ "./src/app/administracion/rubricas/services/rubricas.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/administracion/rubricas/services/rubricas.service.ts ***!
  \**********************************************************************/
/*! exports provided: RubricasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubricasService", function() { return RubricasService; });
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




var RubricasService = /** @class */ (function () {
    function RubricasService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    RubricasService.prototype.consulta = function (jwt, id_rubrica) {
        var params = "?id_rubrica=" + id_rubrica;
        params += "&jwt=" + jwt;
        return this._httpClient.get(this.url + 'learning/rubrica/consulta.php' + params);
    };
    RubricasService.prototype.creaHorizontal = function (id_rubrica, form, jwt) {
        var formData = new FormData();
        formData.append('id_rubrica', id_rubrica);
        form.horizontales.forEach(function (horizontal) {
            formData.append('elemento_desc[]', horizontal.texto);
        });
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/rubrica/cargaElemento.php', formData);
    };
    RubricasService.prototype.creaVertical = function (id_rubrica, form, jwt) {
        var formData = new FormData();
        formData.append('id_rubrica', id_rubrica);
        form.verticales.forEach(function (vertical) {
            formData.append('categoria_desc[]', vertical.texto);
        });
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/rubrica/cargaCategorias.php', formData);
    };
    RubricasService.prototype.creaRubrica = function (jwt, form) {
        var formData = new FormData();
        formData.append('id_actividad', '1');
        formData.append('descripcion_rubrica', form.titulo);
        formData.append('numero_elementos', form.selectHorizontal);
        formData.append('numero_categorias', form.selectVertical);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/rubrica/crea.php', formData);
    };
    RubricasService.prototype.consultaHorizontal = function (id_rubrica, jwt) {
        var params = "?id_rubrica=" + id_rubrica;
        params += "&jwt=" + jwt;
        return this._httpClient.get(this.url + 'learning/rubrica/consultaElemento.php' + params);
    };
    RubricasService.prototype.consultaVertical = function (id_rubrica, jwt) {
        var params = "?id_rubrica=" + id_rubrica;
        params += "&jwt=" + jwt;
        return this._httpClient.get(this.url + 'learning/rubrica/consultaCategoria.php' + params);
    };
    RubricasService.prototype.consultaRespuestas = function (id_rubrica, jwt) {
        var params = "?id_rubrica=" + id_rubrica;
        params += "&jwt=" + jwt;
        return this._httpClient.get(this.url + 'learning/celdaRubricas/consulta.php' + params);
    };
    RubricasService.prototype.guardaCelda = function (jwt, id_horizontal, id_vertical, textarea, input) {
        var formData = new FormData();
        formData.append('id_elemento', id_horizontal);
        formData.append('id_categoria', id_vertical);
        formData.append('celda', textarea);
        formData.append('respuesta_valor', input);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/celdaRubricas/crea.php', formData);
    };
    RubricasService.prototype.editaCelda = function (jwt, id_respuesta, textarea, input) {
        var formData = new FormData();
        formData.append('id_respuesta', id_respuesta);
        formData.append('celda', textarea);
        formData.append('respuesta_valor', input);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/celdaRubricas/edita.php', formData);
    };
    RubricasService.prototype.catalogo = function (jwt) {
        var params = "?jwt=" + jwt;
        return this._httpClient.get(this.url + 'catalogosLE/rubrica.php' + params);
    };
    RubricasService.prototype.eliminaRubrica = function (id_rubrica, jwt) {
        var params = "?jwt=" + jwt;
        params += '&id_rubrica=' + id_rubrica;
        return this._httpClient.get(this.url + 'learning/rubrica/elimina.php' + params);
    };
    RubricasService.prototype.guardaTotalCelda = function (jwt, datos, id_materia_fecha_actividad) {
        var formData = new FormData();
        formData.append('id_categoria', datos.categoria_id);
        formData.append('id_respuesta', datos.respuesta_id);
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        formData.append('docente_valor', datos.valor);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/celdaRubricas/respuestaDocente.php', formData);
    };
    RubricasService.prototype.guardarRubrica = function (jwt, id_materia_fecha_actividad) {
        var params = "?jwt=" + jwt;
        params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        return this._httpClient.get(this.url + 'learning/fechaActividad/guardarCalificacionRubrica.php' + params);
    };
    RubricasService.prototype.consultaAlumno = function (id_rubrica, id_materia_fecha_actividad, jwt) {
        var params = "?id_rubrica=" + id_rubrica;
        params += "&jwt=" + jwt;
        params += "&id_materia_fecha_actividad=" + id_materia_fecha_actividad;
        return this._httpClient.get(this.url + 'learning/celdaRubricas/consultaAlumno.php' + params);
    };
    RubricasService.prototype.creaRubricaJson = function (jwt, rubrica) {
        var formData = new FormData();
        formData.append('rubrica', JSON.stringify(rubrica));
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/rubrica/cargaRubricaJson.php', formData);
    };
    RubricasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RubricasService);
    return RubricasService;
}());



/***/ }),

/***/ "./src/app/components/file-upload/file.upload.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/file-upload/file.upload.validators.ts ***!
  \******************************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");

function requiredFileType(type) {
    return function (control) {
        var archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__["Archivo"];
        var tipoArchivos;
        if (type == 0) {
            type = archivo.length - 1;
            tipoArchivos = archivo[type].formatos;
        }
        else {
            tipoArchivos = archivo[type].formatos;
        }
        var file = control.value;
        if (file) {
            var archivo_1 = file.name.split('.');
            var longitud = archivo_1.length;
            var extension = file.name.split('.')[longitud - 1].toLowerCase();
            if (tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/models/adminEditor.ts":
/*!***************************************!*\
  !*** ./src/app/models/adminEditor.ts ***!
  \***************************************/
/*! exports provided: adminEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminEditor", function() { return adminEditor; });
var adminEditor = [
    { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
    { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
    { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
    { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
    '/',
    { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'] },
    { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
    { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
    { name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
    '/',
    { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
    { name: 'colors', items: ['TextColor', 'BGColor'] },
    { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
    { name: 'about', items: ['About'] }
];


/***/ }),

/***/ "./src/app/models/learning/trActividad.ts":
/*!************************************************!*\
  !*** ./src/app/models/learning/trActividad.ts ***!
  \************************************************/
/*! exports provided: TrActividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrActividad", function() { return TrActividad; });
var TrActividad = /** @class */ (function () {
    function TrActividad() {
        this.mostrarPreguntas = false;
        this.nuevaPregunta = false;
    }
    return TrActividad;
}());



/***/ })

}]);
//# sourceMappingURL=form-actividad-form-actividad-module.js.map