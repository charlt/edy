(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-docente-module"],{

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

/***/ "./src/app/administracion/avisos-admin/avisos-admin.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/avisos-admin/avisos-admin.service.ts ***!
  \*********************************************************************/
/*! exports provided: AvisosAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosAdminService", function() { return AvisosAdminService; });
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




var AvisosAdminService = /** @class */ (function () {
    function AvisosAdminService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AvisosAdminService.prototype.eliminaSwitchAviso = function (switch_aviso_id) {
        var params = '?switch_aviso_id=' + switch_aviso_id;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/eliminaAvisosSwitch.php' + params);
    };
    AvisosAdminService.prototype.consulta = function (tipo) {
        var params = '?tipo=' + tipo;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consulta.php' + params);
    };
    AvisosAdminService.prototype.consultaAviso = function (id_aviso) {
        var params = '?id_aviso=' + id_aviso;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consultaEspecifica.php' + params);
    };
    AvisosAdminService.prototype.consultaDireccion = function (id_aviso) {
        var params = '?aviso_id=' + id_aviso;
        return this._httpClient.get(this.url + '/controlEscolar/avisosAdmin/consultaSwitchAviso.php' + params);
    };
    AvisosAdminService.prototype.modificaAvisos = function (aviso, id_persona, id_aviso, archivo) {
        var formData = new FormData();
        formData.append('titulo', aviso.get('tituloAviso').value);
        formData.append('mensaje', aviso.get('mensaje').value);
        formData.append('fecha_inicio', aviso.get('fechaInicio').value);
        formData.append('fecha_fin', aviso.get('fechaFin').value);
        formData.append('id_administrador', id_persona);
        // formData.append('id_asignatura_grupo', idAsignaturaGrupo);
        if (archivo)
            formData.append('contenido', archivo);
        formData.append('id_importancia_aviso', aviso.get('importancia').value);
        var fd = new FormData();
        if (id_aviso == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/crea.php', formData);
        }
        else {
            formData.append('id_aviso', id_aviso);
            return this._httpClient.post(this.url + 'controlEscolar/avisosAdmin/edita.php', formData);
        }
    };
    AvisosAdminService.prototype.eliminaAviso = function (id_aviso) {
        var params = '?id_aviso=' + id_aviso;
        return this._httpClient.get(this.url + 'controlEscolar/avisosAdmin/elimina.php' + params);
    };
    AvisosAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvisosAdminService);
    return AvisosAdminService;
}());



/***/ }),

/***/ "./src/app/docente/components/header/header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/docente/components/header/header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\" [style.background-color]=\"universidad.color\">\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item active\" *ngIf=\"flagConferencia\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"open(modalConferencia)\"><span class=\"badge badge-success\">Ver clase en linea</span></a>\r\n            </li>\r\n            <li li class=\"nav-item dropdown iz\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-bell-o\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                    <span *ngIf=\"totalNotificaciones >= 1\" class=\"badge badge-success\">{{totalNotificaciones}}</span>\r\n                    <span *ngIf=\"!totalNotificaciones\" class=\"badge badge-secondary\">0</span>\r\n                </a>\r\n                <div *ngIf=\"totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 320px;\"\r\n                    ngbDropdownMenu>\r\n                    <div ngbTooltip=\"{{notificacion.titulo}}\" *ngFor=\"let notificacion of notificaciones\" (click)=\"abrirNotificacion(notificacion);\">\r\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item py-0 my-0\">\r\n                            <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                            <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                        </a>\r\n                        <li class=\"dropdown-divider\"></li>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"!totalNotificaciones\" class=\"dropdown-menu-right notification\" style=\"width: 323px;\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        <b>Sin notificaciones pendientes</b>\r\n                    </a><hr>\r\n                    <div style=\"text-align: center;\">\r\n                        <a href=\"javascript:void()\" [routerLink]=\"['/docente/avisos']\">Ir a avisos</a>\r\n                    </div>\r\n                </div>\r\n\r\n            </li>\r\n            <li ngbDropdown class=\"d-inline-block nav-item btn_retro\">\r\n                <a href=\"javascript:void(0)\" (click)=\"consultaNombreRetros(); consultaRetros()\" class=\"nav-link notificacion\" placement=\"bottom\" ngbTooltip=\"Retroalimentaciones\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-exchange\"></i>\r\n                    <span *ngIf=\"totalRetros >= 1\" class=\"badge badge-success\">{{totalRetros}}</span>\r\n                    <span *ngIf=\"!totalRetros\" class=\"badge badge-secondary\">0</span>                     \r\n                </a>\r\n                <div ngbDropdownMenu style=\"width: 300px;\">\r\n                    <div *ngIf=\"retroalimentaciones\">\r\n                        <div *ngFor=\"let nombreRetro of nombresRetros\">\r\n                            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"nuevoLink(nombreRetro.actividad_id, nombreRetro.materia_id );\">\r\n                                <b>\r\n                                    {{nombreRetro.primer_apellido}} {{nombreRetro.segundo_apellido}} {{nombreRetro.nombre}}\r\n                                </b>\r\n                                <p class=\"contenido\">{{nombreRetro.num_retros}} retroalimentación(es) nueva(s)</p>\r\n                            </a>\r\n                            <li class=\"dropdown-divider\"></li>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"!totalRetros || totalRetros == 0\">\r\n                        <button class=\"dropdown-item\"><b>{{'_sinMensajes' | translate }}</b></button><hr>\r\n                    </div>\r\n                    <div style=\"text-align: center;\">\r\n                        <a href=\"javascript:void()\" [routerLink]=\"['/docente/bandeja-retro']\">Ir a bandeja de retroalimentaciones</a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li ngbDropdown class=\"d-inline-block nav-item btn_msg\">\r\n                <!-- <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle placement=\"bottom\" ngbTooltip=\"Mensajes\">\r\n                   <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                   <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                   <span *ngIf=\"!numMensajes\" class=\"badge badge-secondary\">0</span> \r\n               </a> -->\r\n               <a href=\"javascript:void(0)\" (click)=\"consultaMsjAlumnos()\" class=\"nav-link notificacion\" placement=\"bottom\" ngbTooltip=\"Mensajes\" ngbDropdownToggle>\r\n                   <i class=\"fa fa-envelope\"></i>\r\n                   <span *ngIf=\"numMensajes >= 1\" class=\"badge badge-success\">{{numMensajes}}</span>\r\n                   <span *ngIf=\"!numMensajes\" class=\"badge badge-secondary\">0</span>                     \r\n               </a>\r\n               <div ngbDropdownMenu style=\"width: 300px;\">\r\n                   <div *ngIf=\"numMensajes\">\r\n                       <div *ngFor=\"let mensaje of mensajes\">\r\n                           <button class=\"dropdown-item\" (click)=\"openMensajeria(modalMensajeria, mensaje.materia_id)\">\r\n                               <b>\r\n                                   {{mensaje.primer_apellido}} {{mensaje.segundo_apellido}} {{mensaje.nombre}}\r\n                               </b>\r\n                               <p class=\"contenido\">{{mensaje.num_mensajes}} mensaje(s) nuevo(s)</p>\r\n                           </button>\r\n                           <li class=\"dropdown-divider\"></li>\r\n                       </div>\r\n                   </div>\r\n                   <div *ngIf=\"numMensajes == 0\">\r\n                       <button class=\"dropdown-item\"><b>{{'_sinMensajes' | translate }}</b></button><hr>\r\n                       <div class=\"text-center\">\r\n                           <a href=\"javascript:void(0)\" [routerLink]=\"['bandeja-mensajes']\">Ver mensajes</a>\r\n                       </div>\r\n                   </div>\r\n               </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown user-menu btn_name\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <app-logotipo-usuario [iniciales]=\"nombre\" [ancho]=\"25\" [alto]=\"25\" [tamLetra]=\"15\" [color]=\"colorLogo\"></app-logotipo-usuario>\r\n                        {{identity.nombre + ' ' + identity.primer_apellido }}       \r\n                </a>\r\n                <div class=\"dropdown-menu  dropdown-menu-left \" ngbDropdownMenu  >\r\n                    <a [routerLink]=\"['./perfil']\" [routerLinkActive]=\"['router-link-active']\" class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <ng-template #modalMensajeria let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" >\r\n                    <app-mensajeria [activo]=\"0\" [idMateria]=\"idMateria\"></app-mensajeria>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #modalConferencia let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Clase en curso </h4>\r\n        </div>\r\n        <div class=\"modal-body m-3\">\r\n            <div *ngIf=\"selectedConferencia\" class=\"row\">\r\n                <div class=\"col text-center\">\r\n                    <h5><b>{{selectedConferencia.nombre}}</b></h5>\r\n                    <p>{{selectedConferencia.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}} - {{selectedConferencia.fecha_fin | date: 'dd/MM/yyyy hh:mm a'}}</p>\r\n                    <p class=\"mt-4\"> Para iniciar tu clase en línea, debes ingresar por el siguiente link:</p>\r\n                    \r\n                    <button [disabled]=\"cargandoConferencia\" (click)=\"acceder_sala(selectedConferencia, 0)\" class=\"btn btn-lg btn-success \">\r\n                        <i class=\"fa fa-spin fa-spinner\" *ngIf=\"cargandoConferencia\"></i> Acceder a sala\r\n                    </button>\r\n                    <button [disabled]=\"cerrandoConferencia\" (click)=\"cerrarSala(selectedConferencia)\" class=\"btn btn-lg btn-light\">\r\n                        <i class=\"fa fa-spin fa-spinner\" *ngIf=\"cerrandoConferencia\"></i> Terminar clase\r\n                    </button>\r\n                    <br>\r\n                    <small>(Debes habilitar la opción de ventanas emergentes) {{tipoVideoconferencia}}</small>\r\n                    <p *ngIf=\"urlMeet\">No puedes acceder? da clic <a href=\"{{urlMeet}}\" > es este vínculo.</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click'); flagModal = false\">Salir</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #contentObligatorio let-modal>\r\n        <div class=\"modal-body p-5 text-center\">\r\n            <h5>Tienes notificaciones en tu plataforma:</h5>\r\n            <div  *ngFor=\"let notificacion of notificacionesObligatorias\" >\r\n                <a class=\"btn btn-primary mt-3\" (click)=\"modal.close(); abrirNotificacion(notificacion);\" href=\"javascript:void()\">\r\n                    <p class=\"contenido m-0 p-0\"><b>{{notificacion.tipo_descripcion}}</b></p>\r\n                    <small *ngIf=\"notificacion.nombre_materia\">{{notificacion.nombre_materia}}</small>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-template #contentEmergente let-modal>\r\n        <div class=\"modal-header alert-info\">\r\n            <h5>Tienes un aviso de la escuela</h5>\r\n\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body px-5 text-center\">\r\n            <div class=\"container border rounded py-3 mt-2\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <label class=\"form-check-label float-right\" >\r\n                            <input (change)=\"marcarAviso(notificacionesEmergentes)\" [checked]=\"notificacionesEmergentes.visto == 1\" class=\"form-check-input\" type=\"checkbox\">\r\n                            Marcar como visto\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                        <app-archivo class=\"archivo\" *ngIf=\"notificacionesEmergentes.adjunto\" [urlBase]=\"notificacionesEmergentes.adjunto\"></app-archivo>\r\n                        <h5>{{notificacionesEmergentes.titulo}}</h5>\r\n                        <div [innerHTML]=\"notificacionesEmergentes.mensaje\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n        </div>\r\n    </ng-template>\r\n</nav>  "

/***/ }),

/***/ "./src/app/docente/components/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/docente/components/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar .navbar-brand {\n  color: #fff; }\n\n:host .navbar .nav-item > a {\n  color: #eee; }\n\n:host .navbar .nav-item > a:hover {\n    color: #fff; }\n\n:host .navbar .user-menu {\n  min-width: 200px;\n  text-align: right; }\n\n:host .navbar .user-menu > a {\n  overflow-x: hidden; }\n\n:host .notification {\n  width: 100px; }\n\n:host .messages {\n  width: 300px; }\n\n:host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n\n:host .messages .media:last-child {\n      border-bottom: none; }\n\n:host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n\n:host .messages .media-body .small {\n    margin: 0; }\n\n:host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.contenido {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9jb21wb25lbnRzL2hlYWRlci9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxkb2NlbnRlXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R0E7RUFJWSxZQUFXLEVBQ2Q7O0FBTFQ7RUFPWSxZQUFXLEVBSWQ7O0FBWFQ7SUFTZ0IsWUFBVyxFQUNkOztBQVZiO0VBYVksaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNwQjs7QUFmVDtFQWlCWSxtQkFBa0IsRUFDckI7O0FBbEJUO0VBcUJRLGFBQVksRUFFZjs7QUF2Qkw7RUF5QlEsYUFBWSxFQXFCZjs7QUE5Q0w7SUEyQlksOEJBQTZCO0lBQzdCLGtCQUFpQixFQUlwQjs7QUFoQ1Q7TUE4QmdCLG9CQUFtQixFQUN0Qjs7QUEvQmI7SUFtQ2dCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25COztBQXJDYjtJQXVDZ0IsVUFBUyxFQUNaOztBQXhDYjtJQTBDZ0IsZ0JBQWU7SUFDZixVQUFTLEVBQ1o7O0FBS2I7RUFDSSxpQkFBZTtFQUNmLG9CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDksIDEzOSk7XHJcbi8vIDpob3N0IHtcclxuLy8gICAgIC5uYXZiYXIge1xyXG4vLyAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuLy8gICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuLy8gICAgICAgICAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAudXNlci1tZW51e1xyXG4vLyAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLnVzZXItbWVudT5he1xyXG4vLyAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLm5vdGlmaWNhdGlvbntcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAubWVzc2FnZXMge1xyXG4vLyAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuLy8gICAgICAgICAubWVkaWEge1xyXG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbi8vICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5tZWRpYS1ib2R5IHtcclxuLy8gICAgICAgICAgICAgaDUge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAuc21hbGwge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC5sYXN0IHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmNvbnRlbmlkbyB7XHJcbi8vICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbi8vICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuLy8gfVxyXG5cclxuLy8gLm5vdGlmaWNhY2lvbiB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5ub3RpZmljYWNpb24gLmJhZGdlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNXB4O1xyXG4vLyAgICAgcmlnaHQ6IDE1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuYnRuX3JldHJve1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDY4MHB4O1xyXG4vLyB9XHJcbi8vIC5idG5fbXNne1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbi8vIH1cclxuLy8gLmJ0bl9uYW1le1xyXG4vLyAgIG1hcmdpbi10b3A6IDBweDtcclxuLy8gfVxyXG4vLyAuY29sbGFwc2Vze1xyXG4vLyAgICAgZGlzcGxheTogY29udGVudHM7XHJcbi8vIH1cclxuXHJcbi8vICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICAgLmJ0bl9yZXRyb3tcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtMzFweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnRuX21zZ3tcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtNDJweDtcclxuLy8gICB9XHJcbi8vICAgLmJ0bl9uYW1le1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTQ0cHg7XHJcbi8vIH1cclxuLy8gLm5vdGlmaWNhY2lvbiAuYmFkZ2Uge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiAxcHg7XHJcbi8vICAgICByaWdodDogMjM1cHg7XHJcbi8vICAgICBwYWRkaW5nOiAycHg7XHJcbi8vICAgfVxyXG4vLyAgIC5kcm9wZG93bi1tZW51e1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDksIDEzOSk7XHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1tZW51e1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXItbWVudT5he1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdGlmaWNhdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VzIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVkaWEtYm9keSB7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFzdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW5pZG8ge1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/docente/components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/docente/components/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_universidad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var src_app_services_timing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/timing */ "./src/app/services/timing.ts");
/* harmony import */ var src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plataforma.service */ "./src/app/services/plataforma.service.ts");
/* harmony import */ var _video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../video-conferencia/services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
/* harmony import */ var src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/administracion/avisos-admin/avisos-admin.service */ "./src/app/administracion/avisos-admin/avisos-admin.service.ts");
/* harmony import */ var src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/avisos/avisos.service */ "./src/app/components/avisos/avisos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { timer  } from 'rxjs';








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, _usuarioService, router, modalService, _videoConferenciaService, _plataformaService, _avisosAdminService, _avisosService) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.modalService = modalService;
        this._videoConferenciaService = _videoConferenciaService;
        this._plataformaService = _plataformaService;
        this._avisosAdminService = _avisosAdminService;
        this._avisosService = _avisosService;
        this.numMensajes = 0;
        this.toggleAlumnos = false;
        this.flagConferencia = false;
        this.flagModal = true;
        this.cargandoConferencia = false;
        this.cerrandoConferencia = false;
        this.notificacionesObligatorias = [];
        this.notificacionesEmergentes = [];
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_5__["GLOBAL"].urlAssets;
        this.universidad = _services_universidad__WEBPACK_IMPORTED_MODULE_6__["universidad"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        this.id_usuario = identity.usuario_id;
        //cálcula el tiempo de sesión restante
        this.pushRightClass = 'push-right';
        this.identity = this._usuarioService.getIdentity();
        this.nombre = this.identity.nombre;
        this.colorLogo = this.identity.color;
        this.selectedRol = this._usuarioService.getRol();
        this.numMensajes = 0;
        this.consultaMensajes();
        this.consultaRetros();
        this.consultaNombreRetros();
        this.getConferenciaActiva(0);
        this.getNotificaciones();
        this._videoConferenciaService.mostrarUsuarioConferencia.subscribe(function (event) {
            _this.getConferenciaActiva(1);
        });
        this.interval = setInterval(function () {
            _this.getConferenciaActiva(0);
        }, 60000);
    };
    HeaderComponent.prototype.consultaConferenciaActiva = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        // tipoVideoConferencia = 1 -> Crear Meet Zoom
        // tipoVideoConferencia = 2 -> Asignar url de redireccion    
        if (this.videoconferenciaActiva['url_meet'] != null && this.videoconferenciaActiva['url_meet'] != undefined &&
            this.videoconferenciaActiva['url_meet'] != "") {
            this.tipoVideoConferencia = 2;
            this._videoConferenciaService.consultaConferencia(this.jwt, this.videoconferenciaActiva['videoconferencia_id']).subscribe(function (response) {
                if (response && response['status'] == 1) {
                    response['videoconferencia'].fecha_inicio = new Date(response['videoconferencia'].fecha_inicio * 1000);
                    response['videoconferencia'].fecha_fin = new Date(response['videoconferencia'].fecha_fin * 1000);
                    _this.selectedConferencia = response['videoconferencia'];
                    _this.urlMeet = _this.videoconferenciaActiva['url_meet'];
                    _this.conferenciaActiva();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.tipoVideoConferencia = 1;
            this._videoConferenciaService.semaforoConferencia(this.jwt).subscribe(function (response) {
                if (response && response['status'] == 1) {
                    response['conferencia'].fecha_inicio = new Date(response['conferencia'].fecha_inicio * 1000);
                    response['conferencia'].fecha_fin = new Date(response['conferencia'].fecha_fin * 1000);
                    _this.selectedConferencia = response['conferencia'];
                    _this.conferenciaActiva();
                    //this.acceder_sala(this.selectedConferencia, 1);
                }
                else if (response['status'] == 2) {
                    alertify.error(response['msg']);
                }
                // if (id == 0) {
                //this.interval = setInterval(() => {                    
                // this.getConferenciaActiva();
                //}, 30000)
                // }
            }, function (error) {
                console.log(error);
            });
        }
    };
    HeaderComponent.prototype.getConferenciaActiva = function (tipo) {
        var _this = this;
        // if (!this.flagConferencia) {
        this.videoconferenciaActiva = undefined;
        this._plataformaService.conferenciasActivasDocente(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.videoconferenciaActiva = response['videoconferencias'][0];
                _this.consultaConferenciaActiva(1);
                var ngbModalOptions = {
                    backdrop: 'static',
                    keyboard: false,
                    windowClass: 'modal-xl'
                };
                if (_this.flagModal || tipo == 1) {
                    _this.modalService.open(_this.modalConferencia, ngbModalOptions).result.then(function (result) {
                    }, function (reason) {
                    });
                    _this.flagModal = false;
                }
            }
            else {
                _this.flagConferencia = false;
            }
        }, function (error) {
            console.log(error);
        });
        // }
    };
    HeaderComponent.prototype.consultaNombreRetros = function () {
        var _this = this;
        this._plataformaService.consultaNomRetro(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nombresRetros = response['retroalimentaciones'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.nuevoLink = function (actividad_id, materia_id) {
        this.router.navigate(['docente/actividad/' + actividad_id + '/' + materia_id]);
        localStorage.setItem('identModal', '1');
    };
    HeaderComponent.prototype.getNotificaciones = function () {
        var _this = this;
        this._plataformaService.consultaNotificaciones(3).subscribe(function (response) {
            if (response && response['status']) {
                _this.notificaciones = response['notificacion'];
                _this.totalNotificaciones = _this.notificaciones.length;
                var notificacionObligatoria = void 0, notificacionEmergente = void 0;
                for (var _i = 0, _a = _this.notificaciones; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if ((item['tipo'] == '3' && item['importancia_aviso_id'] == '2') ||
                        (item['tipo'] == '6' && item['importancia_aviso_id'] == '2') ||
                        (item['tipo'] == '5' && item['obligatorio'] == '1')) {
                        _this.notificacionesObligatorias.push(item);
                        notificacionObligatoria = 1;
                    }
                    else if (item['tipo'] == '6' && item['importancia_aviso_id'] == '3') {
                        _this.notificacionesEmergentes.push(item);
                        notificacionEmergente = 1;
                    }
                }
                if (notificacionObligatoria)
                    _this.abrirObligatorio();
                if (notificacionEmergente) {
                    _this._avisosAdminService.consultaAviso(_this.notificacionesEmergentes[0]['aviso_id']).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.notificacionesEmergentes = response['aviso'][0];
                            _this.modalService.open(_this.modalEmergente, { size: 'lg' });
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
            else {
                _this.notificaciones = undefined;
                _this.totalNotificaciones = undefined;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.abrirNotificacion = function (notificacion) {
        if (notificacion['tipo'] == 1)
            this.router.navigateByUrl('/docente/tickets/' + notificacion['ticket_id']);
        else if (notificacion['tipo'] == 6)
            this.router.navigateByUrl('/docente/avisos');
    };
    HeaderComponent.prototype.abrirObligatorio = function () {
        this.modalService.open(this.modalObligatorio);
    };
    HeaderComponent.prototype.marcarAviso = function (aviso) {
        if (aviso.visto == 1) {
            aviso.visto = 0;
        }
        else if (aviso.visto == 0) {
            aviso.visto = 1;
        }
        this._avisosService.marcarAvisos(aviso.aviso_id, aviso.tipo, aviso.visto).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaRetros = function () {
        var _this = this;
        this._plataformaService.consultaRetrosDocente(this.jwt, this.id_usuario).subscribe(function (response) {
            if (response && response['status']) {
                _this.totalRetros = response['totalRetroalimentaciones'];
                _this.retroalimentaciones = response['retroalimentaciones'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaMensajes = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this._plataformaService.consultamsjAlumnos(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.numMensajes = response['numero_mensajes'];
            }
            if (id == 0) {
                _this.intervalDocente = setInterval(function () {
                    _this.consultaMensajes(1);
                }, src_app_services_timing__WEBPACK_IMPORTED_MODULE_7__["Timing"].docente);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.conferenciaActiva = function () {
        // let ngbModalOptions: NgbModalOptions = {
        //     backdrop : 'static',
        //     keyboard : false,
        //     windowClass: 'modal-xl'
        // };
        // if (!this.flagConferencia) {
        //     this.flagConferencia = true;
        //     this.modalService.open(this.modalConferencia,ngbModalOptions).result.then((result) => {
        //         }, (reason) => {
        //     });
        // }
        this.flagConferencia = true;
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this._usuarioService.guardaFechaUltSesion(this.identity.usuario_id).subscribe(function (response) {
            if (response && response['status']) {
                console.log('funciona');
            }
        }, function (error) {
            console.log(error);
        });
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('selectedAsignaturaGrupo');
        sessionStorage.removeItem('idAsignaturaGrupo');
    };
    HeaderComponent.prototype.open = function (content) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false,
            windowClass: 'modal-xl'
        };
        this.modalService.open(content, ngbModalOptions).result.then(function (result) {
        }, function (reason) {
        });
    };
    //   seleccionaConferencia(conferencia){
    //     this.selectedConferencia = conferencia
    //   }
    HeaderComponent.prototype.acceder_sala = function (videoconferencia, ident) {
        var _this = this;
        if (this.tipoVideoConferencia == 2) {
            window.open(this.urlMeet, "_blank");
        }
        else if (this.tipoVideoConferencia == 1) {
            this.cargandoConferencia = true;
            this._videoConferenciaService.creaMeet(videoconferencia.videoconferencia_id).subscribe(function (response) {
                var meeting = response;
                _this.cargandoConferencia = false;
                _this.urlMeet = meeting['start_url'];
                if (ident == 0)
                    window.open(_this.urlMeet, "_blank");
            }, function (error) {
                _this.cargandoConferencia = false;
                console.log(error);
            });
        }
    };
    HeaderComponent.prototype.cerrarSala = function (videoconferencia) {
        var _this = this;
        this.cerrandoConferencia = true;
        this._videoConferenciaService.cierraMeet(videoconferencia.videoconferencia_id).subscribe(function (response) {
            if (response && response['status']) {
                _this.cerrandoConferencia = false;
                _this._videoConferenciaService.salaCerrada.emit(videoconferencia);
                alertify.success(response['msg']).dismissOthers();
                _this.modalService.dismissAll();
                _this.flagConferencia = false;
            }
        }, function (error) {
            _this.cerrandoConferencia = false;
            console.log(error);
        });
    };
    HeaderComponent.prototype.consultaMsjAlumnos = function () {
        var _this = this;
        this.mensajes = null;
        this.toggleAlumnos = true;
        this._plataformaService.consultamsjAlumnosDetalles(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.mensajes = response['mensajes'];
            }
            else {
                _this.mensajes = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.openMensajeria = function (content, id_materia) {
        this.idMateria = id_materia;
        this.modalService.open(content, { windowClass: 'modal-xl' });
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    Object.defineProperty(HeaderComponent.prototype, "value", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalConferencia'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], HeaderComponent.prototype, "modalConferencia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentObligatorio'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], HeaderComponent.prototype, "modalObligatorio", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentEmergente'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalRef"])
    ], HeaderComponent.prototype, "modalEmergente", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-docente',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/docente/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/docente/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _video_conferencia_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_9__["VideoConferenciaService"],
            src_app_services_plataforma_service__WEBPACK_IMPORTED_MODULE_8__["PlataformaService"],
            src_app_administracion_avisos_admin_avisos_admin_service__WEBPACK_IMPORTED_MODULE_10__["AvisosAdminService"],
            src_app_components_avisos_avisos_service__WEBPACK_IMPORTED_MODULE_11__["AvisosService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/docente/components/sidebar/sidebar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/docente/components/sidebar/sidebar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n  <div class=\"list-group\">\r\n      <a routerLink=\"home\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item  text-center\">\r\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\"><img  [src]=\"universidad.logoDark\" width=\"70%\"><br> </a> <!--width=\"200px\"-->\r\n      </a>\r\n      <a *ngIf=\"btnReturn\" (click)=\"vistaAdministrador()\" class=\"list-group-item text-center\">\r\n        <p class=\"_hover\"><i class=\"fa fa-reply\"></i>Regresar al administrador</p>\r\n      </a>\r\n      <a  class=\"list-group-item\">\r\n      <i class=\"fa fa-fw fa-user\"></i>&nbsp;\r\n      <span>{{rol.rol}}</span>\r\n  </a>\r\n  <form [formGroup]=\"FormAG\" *ngIf=\"Asignaturas && FormAG\" class=\"list-group-item px-3\" style=\"background-color: #222;\">\r\n    <select formControlName=\"asignatura_grupo_id\" class=\"form-control text-light\" style=\"background-color: #222;\">\r\n        <option value=\"\" [selected]=\"'selected'\" disabled hidden>Selecciona un grupo</option>\r\n        <option [value]=\"asignatura.asignatura_grupo_id\" *ngFor=\"let asignatura of Asignaturas\">{{asignatura.asignatura}}</option>\r\n    </select>\r\n  </form>\r\n  <span  *ngIf=\"idAsignaturaGrupo\" >\r\n   <div *ngFor=\"let privilegio of privilegiosDocente\">\r\n        <a class=\"list-group-item _hover\" *ngIf=\"privilegio['type'] == 'button'\" (click)=\"privilegio['function']? this[privilegio.function]() : false\"> \r\n           <i [className]=\"'fa ' + privilegio['icon']\"></i>\r\n           <span>{{ privilegio.label | translate }}</span>\r\n        </a>\r\n        <a class=\"list-group-item _hover\" *ngIf=\"privilegio['type'] == 'router'\" [routerLink]=\"[privilegio['url']]\"> \r\n            <i [className]=\"'fa ' + privilegio['icon']\"></i>\r\n            <span>{{ privilegio.label | translate }}</span>\r\n         </a>\r\n        \r\n      <!-- <div class=\"nested-menu\" *ngIf=\"!privilegio.url || privilegio.url == ''\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass(privilegio.i)\">\r\n              <i class=\"fa {{privilegio.icon}}\"></i>\r\n              <span>{{ privilegio.label | translate }}</span>\r\n          </a> -->\r\n          <!-- <li class=\"nested\" [class.expand]=\"showMenu === privilegio.i\">\r\n              <ul class=\"submenu\">\r\n                  <li *ngFor=\"let subprivilegio of privilegio.sub_privilegios\">\r\n                      <a [routerLink]=\"['../' + subprivilegio.url]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa {{subprivilegio.icono}}\"></i>&nbsp;\r\n                          <span>{{ subprivilegio.privilegio }}</span>\r\n                      </a>\r\n                  </li>                \r\n              </ul>\r\n          </li> -->\r\n      <!-- </div>\r\n      <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url + '/' + privilegio.id]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw {{privilegio.icon}}\"></i>&nbsp;\r\n          <span>{{ privilegio.label | translate }}</span>\r\n      </a> -->\r\n  </div>\r\n</span>\r\n\r\n  <!-- <div *ngFor=\"let privilegio of privilegios\">\r\n      <div class=\"nested-menu\" *ngIf=\"!privilegio.url || privilegio.url == ''\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass(privilegio.privilegio)\">\r\n              <i class=\"fa {{privilegio.icono}}\"></i>\r\n              <span>{{ privilegio.privilegio }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === privilegio.privilegio\">\r\n              <ul class=\"submenu\">\r\n                  <li *ngFor=\"let subprivilegio of privilegio.sub_privilegios\">\r\n                      <a [routerLink]=\"['../' + subprivilegio.url]\" [routerLinkActive]=\"['router-link-active']\" href=\"javascript:void(0)\">\r\n                          <i class=\"fa {{subprivilegio.icono}}\"></i>&nbsp;\r\n                          <span>{{ subprivilegio.privilegio }}</span>\r\n                      </a>\r\n                  </li>                \r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a *ngIf=\"privilegio.url\" [routerLink]=\"['../' + privilegio.url]\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw {{privilegio.icono}}\"></i>&nbsp;\r\n          <span>{{ privilegio.privilegio }}</span>\r\n      </a>\r\n  </div>        -->\r\n      <!--a [routerLink]=\"['../admin/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n          <span>{{ 'Charts' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-table\"></i>&nbsp;\r\n          <span>{{ 'Tables' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\r\n          <span>{{ 'Forms' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Element' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\r\n          <span>{{ 'Bootstrap Grid' | translate }}</span>\r\n      </a>\r\n      <a [routerLink]=\"['../admin/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-th-list\"></i>&nbsp;\r\n          <span>{{ 'Component' | translate }}</span>\r\n      </a>\r\n      <div class=\"nested-menu\">\r\n          <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n              <i class=\"fa fa-plus\"></i>&nbsp;\r\n              <span>{{ 'Menu' | translate }}</span>\r\n          </a>\r\n          <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n              <ul class=\"submenu\">\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"javascript:void(0)\">\r\n                          <i class=\"fa fa-monument\"></i>&nbsp;\r\n                          <span>{{ 'Submenu' | translate }}</span>\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </li>\r\n      </div>\r\n      <a [routerLink]=\"['../admin/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n          <i class=\"fa fa-file-o\"></i>&nbsp;\r\n          <span>{{ 'Blank Page' | translate }}</span>\r\n      </a>\r\n      <a href=\"http://www.strapui.com/\" class=\"list-group-item\">\r\n          <i class=\"fa fa-caret-down\"></i>&nbsp;\r\n          <span>{{ 'More Themes' | translate }}</span>\r\n      </a-->\r\n\r\n      <div class=\"header-fields\">\r\n          <!--a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n              <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n          </a-->\r\n          <!--div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                  <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                              {{ 'English' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                              {{ 'French' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                              {{ 'Urdu' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                              {{ 'Spanish' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                              {{ 'Italian' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                              {{ 'Farsi' | translate }}\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                              {{ 'German' | translate }}\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div-->\r\n          <div class=\"nested-menu\">\r\n              <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                  <span><i class=\"fa fa-user\"></i>&nbsp; {{identity.nombre + ' ' + identity.primer_apellido }}</span>\r\n              </a>\r\n              <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['./perfil']\">\r\n                              <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                      \r\n                      <li>\r\n                          <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                              <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n      <i class=\"fa fa-fw fa-angle-double-{{collapsed?'right':'left'}}\"></i>&nbsp;\r\n      <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/docente/components/sidebar/sidebar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/docente/components/sidebar/sidebar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1031;\n  top: 0px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none;\n    white-space: initial; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n  .form-control, .form-control:focus {\n  border-color: white;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #222; }\n  ._hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9jb21wb25lbnRzL3NpZGViYXIvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcZG9jZW50ZVxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGNBQWE7RUFDYixTQUFRO0VBQ1IsWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLHVCQWIwQjtFQWMxQixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLHFCQUFvQjtFQUNwQixvQkFBbUI7RUFLbkIsaUNBQWdDLEVBa0ZuQztFQXZHRDtJQXlCWSxpQkExQmtCO0lBMkJsQixVQUFTO0lBQ1QsaUJBQWdCO0lBQ2hCLFlBQVc7SUFDWCxzQkFBcUI7SUFDckIscUJBQW9CLEVBSXZCO0VBbENUO01BZ0NnQixtQkFBa0IsRUFDckI7RUFqQ2I7SUFvQ1ksb0JBQWdEO0lBQ2hELFlBQVcsRUFDZDtFQXRDVDtJQXdDWSxvQkFBZ0Q7SUFDaEQsWUFBVyxFQUNkO0VBMUNUO0lBNENZLGtCQUFpQixFQUtwQjtFQWpEVDtNQStDZ0IsK0NBQThDLEVBQ2pEO0VBaERiO0lBcURZLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2Y7RUF2RFQ7SUF5RFksZ0JBQWU7SUFDZixhQUFZO0lBQ1osaUJBQWdCLEVBbUJuQjtFQTlFVDtNQTZEZ0IsWUFBVztNQUNYLHNCQUFxQjtNQUNyQixpQkFBZ0I7TUFDaEIsaUJBakVjLEVBd0VqQjtFQXZFYjtRQWtFb0IsbUJBQWtCO1FBQ2xCLGVBQWM7UUFDZCx3QkFBdUI7UUFDdkIsa0JBQWlCLEVBQ3BCO0VBdEVqQjs7TUEwRWdCLFlBQVc7TUFDWCxjQUFhO01BQ2IscUJBQW9CLEVBQ3ZCO0VBN0ViO0lBZ0ZZLG9CQUFnRCxFQUNuRDtFQWpGVDtJQW1GWSxrQkFBaUI7SUFDakIsYUFBWSxFQWlCZjtFQXJHVDtNQXVGb0IsaUJBQWdCO01BQ2hCLHVCQXpGVTtNQTBGViw0QkFBMkIsRUFPOUI7RUFoR2pCO1FBMkZ3QixZQUFXLEVBQ2Q7RUE1RnJCO1FBOEZ3QixZQUFXLEVBQ2Q7RUEvRnJCO01Ba0dvQixvQkFBZ0QsRUFDbkQ7RUFNakI7RUFFUSxnQkFBZSxFQUNsQjtFQUhMO0VBS1Esc0JBQXFCLEVBQ3hCO0VBTkw7RUFRUSxjQUFhO0VBQ2IsVUFBUyxFQUNaO0VBVkw7RUFhWSxlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLGFBQVksRUFRZjtFQXZCVDtJQWtCb0IsWUFBVztJQUNYLGNBQWE7SUFDYixlQUFjLEVBQ2pCO0VBS2pCO0VBQ0k7SUFDSSxVQUFTO0lBQ1QsVUFBUyxFQUNaLEVBQUE7RUFFTDtFQUNJO0lBQ0kseUJBQXdCLEVBQzNCLEVBQUE7RUFFTDtFQUNJO0lBQ0ksY0FBYSxFQUNoQixFQUFBO0VBR0w7RUFDSSxXQUFVLEVBQ2I7RUFFRDtFQUNJLHdDQUF3RDtFQUN4RCxtQkFBa0IsRUFDckI7RUFFRDtFQUNJLG1CQUFrQjtFQUNsQix3Q0FBd0QsRUFDM0Q7RUFFRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFVBQVM7RUFDVCxZQUFXO0VBQ1gsb0JBQW1CO0VBUW5CLDJCQUEwQjtFQUsxQixpQ0FBZ0MsRUFDbkM7RUFyQkQ7SUFTUSxnQkFBZSxFQUNsQjtFQVZMO0lBWVEsb0JBQWdEO0lBQ2hELFlBQVcsRUFDZDtFQVNMO0VBQ0ksWUFBVyxFQUlkO0VBTEQ7SUFHUSxjQUFhLEVBQ2hCO0VBR0w7RUFDSSxvQkFBbUI7RUFDbkIsV0FBVTtFQUlWLCtEQUF5RCxFQUM1RDtFQUVEO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAzMTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMjM1cHg7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDsgXHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIzNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggIzIyMjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggIzIyMjtcclxufVxyXG5cclxuLl9ob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/docente/components/sidebar/sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/docente/components/sidebar/sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/asignatura/services/asignatura.service */ "./src/app/administracion/asignatura/services/asignatura.service.ts");
/* harmony import */ var src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/docente/grupo/services/grupo.service */ "./src/app/docente/grupo/services/grupo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, _usuarioService, router, _asignaturaService, _grupoService, formBuilder) {
        var _this = this;
        this.translate = translate;
        this._usuarioService = _usuarioService;
        this.router = router;
        this._asignaturaService = _asignaturaService;
        this._grupoService = _grupoService;
        this.formBuilder = formBuilder;
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_5__["universidad"];
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_4__["GLOBAL"].urlAssets;
        this.btnReturn = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (sessionStorage.getItem('tmp_jwt'))
            this.btnReturn = true;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.id_docente = this.identity.persona_id;
        if (this.identity.docente) {
            this.edicion_contenido = parseInt(this.identity.docente.edicion_contenido);
        }
        else {
            this.edicion_contenido = 0;
        }
        this.rol = this._usuarioService.getRol();
        this.privilegios = this._usuarioService.getPrivilege();
        this.subscription = this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var array = val.url.split('/');
                _this.location = array[2];
                if (_this.location === 'grupo') {
                    if (sessionStorage.getItem('idAsignaturaGrupo'))
                        sessionStorage.removeItem('idAsignaturaGrupo');
                    _this.idAsignaturaGrupo = array[3];
                    sessionStorage.setItem('idAsignaturaGrupo', _this.idAsignaturaGrupo);
                    _this.consulta(1);
                    // }else if (this.location === 'home') {              
                    //   this.consulta();
                    // }else if (this.location !== 'grupo' && this.location !== 'home' 
                    //   && this.location !== 'encuesta-docente' && this.location !== 'expediente') {
                    //   this.consulta(2);
                    // }  
                }
                else if (_this.location !== 'grupo') {
                    if (_this.location !== 'home') {
                        _this.idAsignaturaGrupo = sessionStorage.getItem('idAsignaturaGrupo');
                    }
                    else {
                        sessionStorage.removeItem('idAsignaturaGrupo');
                        localStorage.removeItem('selectedAsignaturaGrupo');
                        _this.idAsignaturaGrupo = null;
                    }
                    _this.consulta(1);
                    // this.consulta();
                }
                // else if (this.location !== 'grupo' && this.location !== 'home' 
                //   && this.location !== 'encuesta-docente' && this.location !== 'expediente') {
                //   this.consulta(2);
                // }       
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = true;
        this.showMenu = '';
        this.pushRightClass = '';
        this.toggleCollapsed();
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        // console.log(this.collapsed);
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('jwt');
        localStorage.removeItem('privilege');
        localStorage.removeItem('selectedRol');
        localStorage.removeItem('expirationDate');
    };
    SidebarComponent.prototype.consulta = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (!this.Asignaturas) {
            this._asignaturaService.consultaAsignaturas(this.id_docente).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Asignaturas = response['Asignaturas'];
                    _this.FormAG = _this.formBuilder.group({
                        asignatura_grupo_id: ['']
                    });
                    _this.FormAG.get('asignatura_grupo_id').valueChanges.subscribe(function (value) {
                        _this.setAsignaturaGrupo(value);
                        _this.router.navigate(['docente/grupo/' + value + '/4']);
                    });
                    if (id == 1) {
                        _this.setAsignaturaGrupo(_this.idAsignaturaGrupo);
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.setAsignaturaGrupo(this.idAsignaturaGrupo);
        }
        // else {  
        // this.setAsignaturaGrupo(this.idAsignaturaGrupo);
        // if (id == 1) {
        //   this.FormAG.get('asignatura_grupo_id').setValue(this.idAsignaturaGrupo);
        //   this.setAsignaturaGrupo(this.idAsignaturaGrupo);
        // }else if (id == 2) {
        //   this.setAsignaturaGrupo(this.idAsignaturaGrupo);                
        // }
        // }
    };
    SidebarComponent.prototype.setAsignaturaGrupo = function (value) {
        var _this = this;
        this.idAsignaturaGrupo = value;
        setTimeout(function () {
            _this.FormAG.get('asignatura_grupo_id').setValue(_this.idAsignaturaGrupo ? _this.idAsignaturaGrupo : '', { emitEvent: false });
        }, 1);
        if (!this.privilegiosDocente) {
            this._grupoService.consultaPrivilegiosDocente().subscribe(function (response) {
                if (response && response['status']) {
                    _this.privilegiosDocente = response['privilegios'];
                    if (!_this.edicion_contenido) {
                        _this.privilegiosDocente = _this.privilegiosDocente.filter(function (p) { return p.i != "1"; });
                    }
                    if (_this.idAsignaturaGrupo)
                        _this.setIdAsignaturaGrupo();
                }
                else {
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            if (this.idAsignaturaGrupo)
                this.setIdAsignaturaGrupo();
        }
    };
    SidebarComponent.prototype.setIdAsignaturaGrupo = function () {
        var _this = this;
        this._grupoService.consultaAsignaturaGrupo(this.idAsignaturaGrupo).subscribe(function (response) {
            _this.asignaturaGrupo = response['grupo'];
            localStorage.setItem('selectedAsignaturaGrupo', JSON.stringify(_this.asignaturaGrupo));
            if (!_this.asignaturaGrupo.asignatura_id && !_this.idAsignaturaGrupo) {
                _this.router.navigate(['/docente/authDocente']);
            }
            _this.privilegiosDocente.forEach(function (privilegio) {
                if (privilegio['id'] != null) {
                    var lastIndex = privilegio['url'].lastIndexOf('/');
                    privilegio['url'] = privilegio['url'].substring(0, lastIndex + 1);
                    privilegio['url'] = privilegio['url'] + _this.idAsignaturaGrupo;
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    SidebarComponent.prototype.vistaContenido = function () {
        if (this.edicion_contenido == 1) {
            this.router.navigate(['/docente/modulosAsignaturaGrupo/' + this.idAsignaturaGrupo]);
        }
        else {
            this.router.navigate(['/docente/contenido-asignatura/' + this.grupo.asignatura_id]);
        }
    };
    SidebarComponent.prototype.vistaAlumno = function () {
        var _this = this;
        this._grupoService.changeMenu.emit({ menu: 1 });
        // this.router.navigate(['/docente/vista-alumno/1']);
        this._grupoService.seleccionaMateriaDummy(this.idAsignaturaGrupo, this.jwt).then(function (data) {
            _this.router.navigate(['/materia/']);
        });
    };
    SidebarComponent.prototype.calculoCalificacion = function () {
        this.router.navigate(['/docente/calculo/' + this.idAsignaturaGrupo + '/2']);
    };
    SidebarComponent.prototype.vistaAdministrador = function () {
        localStorage.removeItem('jwt');
        localStorage.removeItem('identity');
        localStorage.setItem('jwt', sessionStorage.getItem('tmp_jwt'));
        localStorage.setItem('identity', sessionStorage.getItem('tmp_identity'));
        sessionStorage.removeItem('tmp_jwt');
        sessionStorage.removeItem('tmp_identity');
        this.router.navigate(['admin/docente/consulta']);
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-docente',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/docente/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/docente/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_administracion_asignatura_services_asignatura_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturaService"],
            src_app_docente_grupo_services_grupo_service__WEBPACK_IMPORTED_MODULE_7__["GrupoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/docente/docente-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/docente/docente-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DocenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteRoutingModule", function() { return DocenteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docente.component */ "./src/app/docente/docente.component.ts");
/* harmony import */ var _administracion_alumno_accesos_accesos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../administracion/alumno/accesos/accesos.component */ "./src/app/administracion/alumno/accesos/accesos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _docente_component__WEBPACK_IMPORTED_MODULE_2__["DocenteComponent"],
        children: [
            { path: 'accesos/:id', component: _administracion_alumno_accesos_accesos_component__WEBPACK_IMPORTED_MODULE_3__["AccesosComponent"] },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: '../docente/dashboard/dashboard.module#DashboardModule' },
            //{ path: 'asistencia',loadChildren: '../docente/asistencia/asistencia.module#AsistenciaModule' },
            { path: 'grupo/:id/:id2', loadChildren: '../docente/grupo/grupo.module#GrupoModule' },
            { path: 'calculo/:id1/:id2', loadChildren: '../administracion/grupo/calculo-calificacion/calculo-calificacion.module#CalculoCalificacionModule' },
            { path: 'actividad/:id1/:id2', loadChildren: '../docente/actividad/actividad.module#ActividadDocenteModule' },
            { path: 'actividadSQA/:id1/:id2', loadChildren: '../docente/actividad-sqa/actividad-sqa.module#ActividadSQAModule' },
            { path: 'avisos/:id', loadChildren: '../docente/avisos-docente/avisos-docente.module#AvisosDocenteModule' },
            { path: 'notas/:id', loadChildren: '../docente/notas/notas.module#NotasModule' },
            { path: 'notas/:id/:id2', loadChildren: '../docente/notas/notas.module#NotasModule' },
            { path: 'retroalimentacion/:id/:id2', loadChildren: '../docente/retroalimentacion/retroalimentacion.module#RetroalimentacionModule' },
            { path: 'notas/:id/:id2', loadChildren: '../docente/notas/notas.module#NotasModule' },
            { path: 'perfil', loadChildren: '../master/perfil/perfil.module#PerfilModule' },
            { path: 'objetivos-actividad/:id', loadChildren: '../docente/objetivos-actividad/objetivos-actividad.module#ObjetivosActividadModule' },
            { path: 'correccion', loadChildren: '../docente/correccion/correccion.module#CorreccionModule' },
            { path: 'mensajeria/:id', loadChildren: '../docente/mensajeria/mensajeria.module#MensajeriaModule' },
            { path: 'auth/:id_a/:cv_g', loadChildren: '../docente/auth/auth.module#AuthModule' },
            { path: 'video-conferencia', loadChildren: '../docente/video-conferencia/video-conferencia.module#VideoConferenciaModule' },
            { path: 'bandeja-retro', loadChildren: '../docente/bandeja-retroalimentacion/bandeja-retroalimentacion.module#BandejaRetroalimentacionModule' },
            { path: 'bandeja-mensajes', loadChildren: '../docente/bandeja-mensajes/bandeja-mensajes.module#BandejaMensajesModule' },
            { path: 'modulosAsignaturaGrupo/:id', loadChildren: '../administracion/carga-actividades/asignatura/modulo/modulo.module#ModuloModule' },
            { path: 'contenido-asignatura/:id', loadChildren: '../administracion/carga-actividades/asignatura/asignatura.module#AsignaturaModule' },
            { path: 'seguimiento-examen/:id', loadChildren: '../docente/seguimiento-examen/seguimiento-examen.module#SeguimientoExamenModule' },
            { path: 'modulo/:id', loadChildren: '../administracion/carga-actividades/asignatura/modulo/modulo.module#ModuloModule' },
            { path: 'reportes/:id', loadChildren: '../docente/reportes/reportes.module#ReportesModule' },
            { path: 'asistencia-alumno/:id', loadChildren: '../docente/asistencia-alumno/asistencia-alumno.module#AsistenciaAlumnoModule' },
            { path: 'horario/:id', loadChildren: '../docente/horario/horario.module#HorarioModule' },
            { path: 'expediente', loadChildren: 'src/app/administracion/docente/expediente-docente/expediente-docente.module#ExpedienteDocenteModule' },
            { path: 'encuesta-docente/:id_ag', loadChildren: 'src/app/administracion/encuesta/encuesta.module#EncuestaModule' },
            { path: 'avisos', loadChildren: 'src/app/components/avisos/avisos.module#AvisosModule' },
            { path: 'tickets', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
            { path: 'tickets/:id', loadChildren: 'src/app/learning/tickets/tickets.module#TicketsModule' },
            { path: 'dashboard/:id', loadChildren: '../administracion/alumno/dashboard/dashboard.module#DashboardModule' }
            // { path: 'alumno/accesos/:id', loadChildren: '../administracion/alumno/alumno.module#AlumnoModule'},
        ]
    }
];
var DocenteRoutingModule = /** @class */ (function () {
    function DocenteRoutingModule() {
    }
    DocenteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocenteRoutingModule);
    return DocenteRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/docente.component.html":
/*!************************************************!*\
  !*** ./src/app/docente/docente.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-docente></app-header-docente>\r\n<app-sidebar-docente (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar-docente>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <app-page-header [breadcum]=\"breadcum\" ></app-page-header>\r\n    <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/docente/docente.component.scss":
/*!************************************************!*\
  !*** ./src/app/docente/docente.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxkb2NlbnRlXFxkb2NlbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0kseUNBQXdDLEVBQzNDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksNEJBQTJCLEVBQzlCLEVBQUE7O0FBRUw7RUFDSTtJQUNJLDJCQUEwQjtJQUMxQiw0QkFBMkIsRUFDOUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvZG9jZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29sbGFwc2VkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/docente/docente.component.ts":
/*!**********************************************!*\
  !*** ./src/app/docente/docente.component.ts ***!
  \**********************************************/
/*! exports provided: DocenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteComponent", function() { return DocenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocenteComponent = /** @class */ (function () {
    function DocenteComponent(_usuarioService, _router) {
        this._usuarioService = _usuarioService;
        this._router = _router;
    }
    DocenteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breadcum = this._usuarioService.getBreadcum();
        this._router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // console.log(event.url);
                _this.breadcum = _this._usuarioService.getBreadcum();
            }
        });
    };
    DocenteComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    DocenteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-docente',
            template: __webpack_require__(/*! ./docente.component.html */ "./src/app/docente/docente.component.html"),
            styles: [__webpack_require__(/*! ./docente.component.scss */ "./src/app/docente/docente.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocenteComponent);
    return DocenteComponent;
}());



/***/ }),

/***/ "./src/app/docente/docente.module.ts":
/*!*******************************************!*\
  !*** ./src/app/docente/docente.module.ts ***!
  \*******************************************/
/*! exports provided: DocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocenteModule", function() { return DocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_modules_layout_docente_layout_docente_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/layout-docente/layout-docente.module */ "./src/app/shared/modules/layout-docente/layout-docente.module.ts");
/* harmony import */ var _docente_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docente-routing.module */ "./src/app/docente/docente-routing.module.ts");
/* harmony import */ var _docente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docente.component */ "./src/app/docente/docente.component.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _administracion_alumno_alumno_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../administracion/alumno/alumno.module */ "./src/app/administracion/alumno/alumno.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ObjetivosActividadComponent } from './objetivos-actividad/objetivos-actividad.component';
var DocenteModule = /** @class */ (function () {
    function DocenteModule() {
    }
    DocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_docente_component__WEBPACK_IMPORTED_MODULE_5__["DocenteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _docente_routing_module__WEBPACK_IMPORTED_MODULE_4__["DocenteRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _shared_modules_layout_docente_layout_docente_module__WEBPACK_IMPORTED_MODULE_3__["LayoutDocenteModule"],
                _administracion_alumno_alumno_module__WEBPACK_IMPORTED_MODULE_8__["AlumnoModule"]
            ],
            providers: [
                _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
            ]
        })
    ], DocenteModule);
    return DocenteModule;
}());



/***/ }),

/***/ "./src/app/services/universidad.ts":
/*!*****************************************!*\
  !*** ./src/app/services/universidad.ts ***!
  \*****************************************/
/*! exports provided: universidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "universidad", function() { return universidad; });
var universidad = {
    color: "#292f33",
    logo: "assets/images/logo.png",
    logoDark: "assets/images/logoWhite.png",
    nombre: "Casa Lamm"
};


/***/ }),

/***/ "./src/app/shared/modules/layout-docente/layout-docente.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/modules/layout-docente/layout-docente.module.ts ***!
  \************************************************************************/
/*! exports provided: LayoutDocenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDocenteModule", function() { return LayoutDocenteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _docente_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../docente/components/header/header.component */ "./src/app/docente/components/header/header.component.ts");
/* harmony import */ var _docente_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../docente/components/sidebar/sidebar.component */ "./src/app/docente/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/logotipo-usuario/logotipo-usuario.module */ "./src/app/components/logotipo-usuario/logotipo-usuario.module.ts");
/* harmony import */ var src_app_docente_mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/docente/mensajeria/mensajeria.module */ "./src/app/docente/mensajeria/mensajeria.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutDocenteModule = /** @class */ (function () {
    function LayoutDocenteModule() {
    }
    LayoutDocenteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_docente_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _docente_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"],
                _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_7__["ArchivoModule"],
                src_app_components_logotipo_usuario_logotipo_usuario_module__WEBPACK_IMPORTED_MODULE_8__["LogotipoUsuarioModule"],
                src_app_docente_mensajeria_mensajeria_module__WEBPACK_IMPORTED_MODULE_9__["MensajeriaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            exports: [
                _docente_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _docente_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ]
        })
    ], LayoutDocenteModule);
    return LayoutDocenteModule;
}());



/***/ })

}]);
//# sourceMappingURL=docente-docente-module.js.map