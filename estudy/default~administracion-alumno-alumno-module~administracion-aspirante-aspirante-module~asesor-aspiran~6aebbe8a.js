(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~asesor-aspiran~6aebbe8a"],{

/***/ "./src/app/administracion/tickets/servicios/tickets.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/administracion/tickets/servicios/tickets.service.ts ***!
  \*********************************************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
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



var TicketsService = /** @class */ (function () {
    function TicketsService(httpClient) {
        this.httpClient = httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    TicketsService.prototype.getConteoTickets = function () {
        return this.httpClient.get(this.url + 'controlEscolar/tickets/conteoEstatusTicket.php');
    };
    TicketsService.prototype.consultaTipoTicket = function () {
        return this.httpClient.get(this.url + '/catalogosCE/consultaTipoTiket.php');
    };
    TicketsService.prototype.consultaTicket = function (id_estatus) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_estatus_ticket', id_estatus);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaPorEstatus.php', { params: params });
    };
    TicketsService.prototype.consultaPorTicket = function (id_ticket) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_ticket', id_ticket);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaTicket.php', { params: params });
    };
    TicketsService.prototype.consultaRespuestas = function (id_ticket) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('id_ticket', id_ticket);
        return this.httpClient.get(this.url + 'controlEscolar/tickets/consultaRespuestas.php', { params: params });
    };
    TicketsService.prototype.guardarRespuesta = function (id_ticket, form) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        formData.append('texto', form.texto);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/creaRespuesta.php', formData);
    };
    TicketsService.prototype.guardaTicketCorreccion = function (form, idPersona, idRol, idRolUsuario) {
        var formData = new FormData();
        formData.append('asunto_ticket', form.asunto);
        formData.append('descripcion_ticket', form.mensaje);
        formData.append('id_tipo_ticket', form.tipoTicket);
        if (idRol == 1) {
            formData.append('id_persona', idPersona);
            formData.append('id_rol', idRolUsuario);
            formData.append('id_area', '1');
            formData.append('id_rol_admin', idRol);
            return this.httpClient.post(this.url + 'controlEscolar/tickets/crearNotificacion.php', formData);
        }
        else if (idRol == 2) {
            return this.httpClient.post(this.url + 'controlEscolar/tickets/crearTicket.php', formData);
        }
    };
    TicketsService.prototype.ticketVisto = function (id_ticket) {
        var params = '?id_ticket=' + id_ticket;
        return this.httpClient.get(this.url + 'general/tickets/ticketVisto.php' + params);
    };
    TicketsService.prototype.cerrarTicket = function (id_ticket) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/cerrarTicket.php', formData);
    };
    TicketsService.prototype.eliminarTicket = function (id_ticket) {
        var formData = new FormData();
        formData.append('id_ticket', id_ticket);
        return this.httpClient.post(this.url + 'controlEscolar/tickets/eliminarTicket.php', formData);
    };
    TicketsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TicketsService);
    return TicketsService;
}());



/***/ }),

/***/ "./src/app/inscripcion/documentos/documentos-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/inscripcion/documentos/documentos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosRoutingModule", function() { return DocumentosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documentos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos.component */ "./src/app/inscripcion/documentos/documentos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _documentos_component__WEBPACK_IMPORTED_MODULE_2__["DocumentosComponent"] }
];
var DocumentosRoutingModule = /** @class */ (function () {
    function DocumentosRoutingModule() {
    }
    DocumentosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocumentosRoutingModule);
    return DocumentosRoutingModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/documentos/documentos.component.html":
/*!******************************************************************!*\
  !*** ./src/app/inscripcion/documentos/documentos.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\" *ngIf=\"pasoActual <= 1 && idRol != 1\">\r\n  <div class=\"alert alert-danger text-center\" role=\"alert\">\r\n    Para continuar, debes terminar el bloque anterior.\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"pasoActual > 1 || idRol == 1\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h4>{{title}}</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <div class=\"alert alert-warning\">\r\n            <strong>¡Importante!</strong>\r\n          </div>\r\n          <p>\r\n            Deberás escanear cada uno de los documentos solicitados\r\n          </p>\r\n          <ul>\r\n            <li type=\"disc\">En caso de que el documento contenga dos o más caras, se deberán unir en <b>un sólo archivo</b> <a href=\"javascript:void(0)\" (click)=\"open(content)\" style=\"color: royalblue;\">[ver tutorial]</a>.</li>\r\n            <li type=\"disc\">En caso de que los documentos requeridos se encuentren en trámite, deberas presentar la constancia del trámite y  <b>una carta compromiso</b>, cuyo formato podrá ser descargado en el siguiente icono</li>\r\n          </ul>\r\n          <div class=\"row  text-center mb-3\">\r\n            <!--div class=\"col-md-6\">\r\n              <a href=\"assets/layout/inscripcion/cartacompromiso.pdf\" download=\"Carta compromiso\" target=\"_blank\">                \r\n                <i class=\"fa fa-file-text-o fa-2x\" aria-hidden=\"true\"></i><br>\r\n                Formato de carta compromiso\r\n              </a>\r\n                \r\n            </div-->\r\n            <div class=\"col-md-6\">\r\n              <a href=\"javascript:void(0)\" (click)=\"open(content)\">                \r\n                <i class=\"fa fa-lightbulb-o fa-2x\" aria-hidden=\"true\"></i><br> Ver tutorial para unir archivos\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n        \r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"col-md-12\">\r\n          <div class=\"alert alert-danger\">\r\n              <strong>Cuida que tus escaneos No contengan estos errores!</strong> \r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <a href=\"assets/images/inscripcion/TITULO.jpg\" target=\"_blank\">  \r\n            <img src=\"assets/images/inscripcion/TITULO.jpg\" width=\"140px\" height=\"50%\"></a>\r\n            <a href=\"assets/images/inscripcion/ACTA_DE_NACIMIENTO.jpg\" target=\"_blank\">  \r\n              <img src=\"assets/images/inscripcion/ACTA_DE_NACIMIENTO.jpg\" width=\"140px\" height=\"50%\"></a>\r\n        </div>\r\n          <div class=\"col-md-6\">\r\n              <a href=\"assets/images/inscripcion/ACTA_DE_NACIMIENTO2.png\" target=\"_blank\">  \r\n                <img src=\"assets/images/inscripcion/ACTA_DE_NACIMIENTO2.png\" width=\"140px\" height=\"50%\"></a>\r\n                <a href=\"assets/images/inscripcion/CERTIFICADO.jpg\" target=\"_blank\">  \r\n                  <img src=\"assets/images/inscripcion/CERTIFICADO.jpg\" width=\"140px\" height=\"50%\"></a>\r\n          </div>\r\n        </div>\r\n        \r\n    </div>\r\n  </div>\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\" style=\"background-color: #002144;color: white;\">\r\n          <h4 class=\"modal-title\">Cómo unir imágenes en un solo archivo          </h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-12\">\r\n            <p>Selecciona cualquiera de las siguientes opciones:</p>\r\n          </div>\r\n          <div class=\"col-6 text-center\">\r\n            <button class=\"btn btn-info\" (click)=\"tipoTutorial=1\">Unir imágenes con Office Word 2010</button>\r\n          </div>\r\n          <div class=\"col-6 text-center\">\r\n            <button class=\"btn btn-info\" (click)=\"tipoTutorial=2\">Unir imágenes con  Adobe PDF</button>            \r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"tipoTutorial == 1\" class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <h4>Unir imágenes con Office Word 2010</h4>\r\n          <ngb-carousel >\r\n            <ng-template ngbSlide *ngFor=\"let imagen of [].constructor(15); let i = index;\">\r\n              <div class=\"picsum-img-wrapper\">\r\n                <img src=\"assets/images/inscripcion/tutorial/Paso {{i+1}}_Inscripcion.jpg\" style=\"width: 100%;\" alt=\"Random first slide\">\r\n              </div>\r\n            </ng-template>\r\n          </ngb-carousel>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"tipoTutorial == 2\" class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <h4>Unir imágenes con  Adobe PDF</h4>\r\n          <ngb-carousel >\r\n            <ng-template ngbSlide *ngFor=\"let imagen of [].constructor(4); let i = index\">\r\n              <div class=\"picsum-img-wrapper\">\r\n                <img src=\"assets/images/inscripcion/tutorial/Paso {{i+1}}_Inscripcion_2opcion.jpg\" style=\"width: 100%;\" alt=\"Random first slide\">\r\n              </div>\r\n            </ng-template>\r\n          </ngb-carousel>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Salir</button>\r\n      </div>\r\n  </ng-template>\r\n\r\n<div class=\"row\" *ngIf=\"bandera\">\r\n  <div class=\"col-12 mt-2\" >\r\n    <div class=\"row\" *ngIf=\"idRol == 1\">\r\n      <div class=\"col-6\">\r\n        <button class=\"btn btn-primary\" [routerLink]=\"[urlRedirect + aspiranteId]\">\r\n          <i class=\"fa fa-ticket\" aria-hidden=\"true\"></i> Enviar notificación</button>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <button *ngIf=\"idRolUsuario == 4\" class=\"btn btn-success pull-right\" (click)=\"enviaCorreo()\" [disabled]=\"btnCorreo\">\r\n          <span *ngIf=\"!btnCorreo\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Enviar correo</span>\r\n          <span *ngIf=\"btnCorreo\"><i class=\"fa fa-spinner fa-pulse\"></i> Enviando correo</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3\">\r\n      <div class=\"col-12\">\r\n        <span (click)=\"setEtiqueta(0, undefined)\" class=\"badge mr-1 p-2\" \r\n          [ngClass]=\"filtroEtiqueta == 0? 'badge-success': 'badge-secondary'\" style=\"cursor: pointer;\">Todos</span>\r\n        <span placement=\"top\" ngbTooltip=\"{{etiqueta.descripcion}}\" (click)=\"setEtiqueta(etiqueta.id_etiqueta, i)\" *ngFor=\"let etiqueta of Etiquetas; let i = index\" class=\"badge mr-1 p-2\" \r\n          [ngClass]=\"etiqueta.activa? 'badge-success': 'badge-secondary'\" style=\"cursor: pointer;\">{{etiqueta.nombre}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-12 mt-3\">\r\n    <div class=\"table-responsive\">\r\n      <form [formGroup]=\"archivoForm\" *ngIf=\"archivoForm\">\r\n        <table class=\"table border border-right-0 border-left-0\">\r\n          <thead class=\"bg-light\">\r\n            <tr>\r\n              <th style=\"width:30%\">Documento</th>\r\n              <th>Estado</th>\r\n              <th>Subir archivo</th>\r\n            </tr>\r\n          </thead>\r\n          <div formArrayName=\"archivos\" style=\"display: table-row-group;\">\r\n            <div [formGroupName]=\"i\" *ngFor=\"let archivo of archivoForm.get('archivos').controls; let i = index\" \r\n               [ngClass]=\"[Documentos[i].estado_documento_id == '2'? 'enviado' : '',\r\n               Documentos[i].estado_documento_id == '3'? 'verificado' : '', Documentos[i].estado_documento_id == '6'? 'correccion' : '' ]\" \r\n               style=\"display: table-row;\">\r\n                <td  style=\"width:30%\">\r\n                  <b><span *ngIf=\"Documentos[i].obligatorio == '1'\"> * </span>{{Documentos[i].nombre_documento}}</b><br>\r\n                  <small>{{Documentos[i].documento_desc}}</small>\r\n                  <br>\r\n                  <span class=\"badge badge-success mt-2 mr-1 p-2\" *ngIf=\"idEtiqueta != undefined\">{{Etiquetas[idEtiqueta].nombre}}</span>\r\n                </td>\r\n\r\n                <td class=\"align-middle\">\r\n                  <select name=\"select_estado\" formControlName=\"estado\" class=\"form-control\">\r\n                    <option value=\"\" selected disabled hidden>Selecciona una opción</option>\r\n                    <option [value]=\"estado.estado_documento_id\" *ngFor=\"let estado of estadoDocumento; let j = index;\">\r\n                      {{estado.nombre_documento}}\r\n                    </option>\r\n                  </select>\r\n                  <textarea formControlName=\"correccion\" *ngIf=\"Documentos[i].estado_documento_id == '6' \r\n                    && archivo.controls.correccion\" class=\"form-control mt-1\"></textarea>\r\n                  <button (click)=\"guardarCorreccion(i)\" type=\"button\" *ngIf=\"Documentos[i].estado_documento_id == '6' && idRol == 1\" class=\"btn btn-success pull-right btn-sm mt-2\"\r\n                    [disabled]=\"(archivo.controls.correccion && archivo.controls.correccion.invalid) || disabledBtn1[i]\">Guardar</button>\r\n                </td>\r\n                \r\n                <td class=\"align-middle\">\r\n                  <div *ngIf=\"(Documentos[i].estado_documento_id == null || Documentos[i].estado_documento_id == '6' ||\r\n                    (Documentos[i].estado_documento_id == '4' && idRol != 1))\">\r\n                    <app-file-upload (change)=\"verificarDocumento(i)\" formControlName=\"file\"></app-file-upload>\r\n                    <small *ngIf=\"archivo.controls.file.invalid && archivo.controls.touched.value == true\" class=\"text-danger\">Tipo de documento inválido</small>\r\n                    <button [disabled]=\"archivo.controls.file.invalid || disabledBtn[i]\" (click)=\"guardarArchivo(i)\" type=\"button\" class=\"btn btn-success btn-sm pull-right mt-2\"><i *ngIf=\"disabledBtn[i]\" class=\"fa fa-spin fa-spinner\"></i> Guardar</button>\r\n                  </div>\r\n                  <div *ngIf=\"(Documentos[i].estado_documento_id != null && Documentos[i].estado_documento_id != '6' && Documentos[i].estado_documento_id != '4') || \r\n                    (Documentos[i].estado_documento_id == '4' && idRol == 1)\" class=\"form-control pt-0 pb-0 px-2\">\r\n                    <div class=\"form-row p-0 mt-3\">\r\n                      <div [ngClass]=\"idRol == 1? 'col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12' : 'col-12'\">\r\n                        <app-archivo *ngIf=\"Documentos[i].url\" [urlBase]=\"Documentos[i].url\"></app-archivo>\r\n                      </div>\r\n                      <div *ngIf=\"idRol == 1\" class=\"col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 text-center mb-2\">\r\n                        <button (click)=\"eliminaDocumento(i)\" class=\"btn btn-danger\"><i class=\"fa fa-times\"></i></button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n            </div>\r\n          </div>\r\n          <tr *ngIf=\"Documentos.length == 0\">\r\n            <td class=\"text-center\" colspan=\"12\">No se encontró información</td>\r\n          </tr>\r\n        </table>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<ng-template #contentDocumentos let-modal>\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title ml-2\"><b>Documentación enviada exitosamente</b></h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body ml-3 mr-3\">\r\n    <p>Se hará la validación de los documentos enviados, una vez completado te enviaremos un  correo indicando el siguiente proceso.</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/inscripcion/documentos/documentos.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/inscripcion/documentos/documentos.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".enviado {\n  background-color: #d1ecf1; }\n\n.verificado {\n  background-color: #d4edda; }\n\n.correccion {\n  background-color: #fff3cd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vZG9jdW1lbnRvcy9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxpbnNjcmlwY2lvblxcZG9jdW1lbnRvc1xcZG9jdW1lbnRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL2RvY3VtZW50b3MvZG9jdW1lbnRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnZpYWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxufVxyXG4udmVyaWZpY2Fkb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XHJcbn1cclxuLmNvcnJlY2Npb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/inscripcion/documentos/documentos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/inscripcion/documentos/documentos.component.ts ***!
  \****************************************************************/
/*! exports provided: DocumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosComponent", function() { return DocumentosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_documentos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/documentos.service */ "./src/app/inscripcion/services/documentos.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_solicitud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/solicitud.service */ "./src/app/inscripcion/services/solicitud.service.ts");
/* harmony import */ var src_app_administracion_tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/administracion/tickets/servicios/tickets.service */ "./src/app/administracion/tickets/servicios/tickets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentosComponent = /** @class */ (function () {
    function DocumentosComponent(_documentosService, _usuarioService, formBuilder, modalService, _solicitudService, _ticketsService) {
        this._documentosService = _documentosService;
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this._solicitudService = _solicitudService;
        this._ticketsService = _ticketsService;
        this.breadcum = [];
        this.bandera = false;
        this.tipoTutorial = 0;
        this.disabled = false;
        this.disabledBtn = [];
        this.disabledBtn1 = [];
        this.tipo = 0;
        this.urlRedirect = '/admin/alumno/ticket-expediente/';
        this.btnCorreo = false;
        this.filtroEtiqueta = 0;
        this.title = "Documentos";
        this._usuarioService.pushBreadcum(this.title, "", 1);
        this._usuarioService.removeBreadcum(2);
    }
    DocumentosComponent.prototype.ngOnInit = function () {
        this.idRol = parseInt(this._usuarioService.getRol().rol_id);
        if (this.idRol == 1) {
            this.disabled = true;
        }
        else if (this.idRol == 4 || this.idRol == 2 || this.idRol == 3) {
            this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
        }
        this.jwt = this._usuarioService.getJWT();
        if (this.idRolUsuario == 3) {
            this.tipo = 1;
            this.urlRedirect = '/admin/docente/ticket-expediente/';
        }
        else if (this.idRolUsuario == 4) {
            this.tipo = 0;
            this.urlRedirect = '/admin/aspirante/ticket-expediente/';
        }
        this.consulta(0);
        this.getEtiquetas();
    };
    DocumentosComponent.prototype.consulta = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this.Documentos = undefined;
        this.archivoForm = undefined;
        this._documentosService.consultaDocumentos(this.jwt, this.aspiranteId, this.tipo, this.filtroEtiqueta).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.Documentos = response['documentos'];
                if (_this.idRol == 4) {
                    var bandera_1 = true;
                    _this.Documentos.forEach(function (documento) {
                        if (documento.estado_documento_id == null && documento.expediente_id == null)
                            bandera_1 = false;
                    });
                    if (bandera_1)
                        _this.open(_this.modalDocumentos);
                }
                if (!id) {
                    _this.archivoForm = _this.formBuilder.group({
                        archivos: _this.formBuilder.array([])
                    });
                    if (!_this.estadoDocumento)
                        _this.getCatalogoEstado();
                    else
                        _this.addItem();
                }
            }
            else {
                _this.Documentos = [];
                _this.archivoForm = _this.formBuilder.group({
                    archivos: _this.formBuilder.array([])
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.getEtiquetas = function () {
        var _this = this;
        this._documentosService.consultaEtiquetas().subscribe(function (response) {
            if (response && response['status']) {
                _this.Etiquetas = response['etiquetas'];
                _this.Etiquetas['activa'] = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.setEtiqueta = function (id, index) {
        for (var i_1 = 0; i_1 < this.Etiquetas.length; i_1++) {
            if (this.Etiquetas[i_1].activa)
                this.Etiquetas[i_1].activa = false;
        }
        var i = this.Etiquetas.map(function (e) { return e.id_etiqueta; }).indexOf(id);
        if (i > -1)
            this.Etiquetas[i]['activa'] = true;
        this.filtroEtiqueta = id;
        this.idEtiqueta = index;
        this.consulta(0);
    };
    DocumentosComponent.prototype.getCatalogoEstado = function () {
        var _this = this;
        this._documentosService.catalogoEstadoDocumentos(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.estadoDocumento = response['estadoDocumento'];
                if (_this.idRolUsuario != 3) {
                    _this.consultaPasos();
                }
                else {
                    _this.pasoActual = 2;
                    _this.addItem();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.consultaPasos = function () {
        var _this = this;
        this._solicitudService.consultaAvance(this.jwt, this.aspiranteId).subscribe(function (response) {
            if (response && response['status']) {
                _this.pasoActual = response['pasoActual'];
                _this.addItem();
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.createItem = function (estado) {
        if (estado === void 0) { estado = ''; }
        return this.formBuilder.group({
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            estado: { value: estado, disabled: !this.disabled },
            touched: false
        });
    };
    DocumentosComponent.prototype.addItem = function () {
        var _this = this;
        this.Documentos.map(function (documento, i) {
            _this.archivos = _this.archivoForm.get('archivos');
            var idEstadoDocumento = documento.estado_documento_id != null ? documento.estado_documento_id : '1';
            _this.archivos.push(_this.createItem(idEstadoDocumento));
            _this.disabledBtn.push(false);
            _this.disabledBtn1.push(false);
            if (_this.idRol == 1) {
                _this.archivoForm["controls"].archivos["controls"][i].controls['estado'].valueChanges.subscribe(function (value) {
                    var id_expediente = _this.Documentos[i]['expediente_id'];
                    var id_documento = _this.Documentos[i]['documento_id'];
                    if (value != '6') {
                        if (id_expediente)
                            _this.validarDocumento(value, id_expediente, id_documento, _this.aspiranteId, i);
                        if (_this.archivoForm["controls"].archivos["controls"][i].controls['correccion']) {
                            _this.archivoForm["controls"].archivos["controls"][i].removeControl('correccion');
                        }
                    }
                    else {
                        _this.Documentos[i].estado_documento_id = value;
                        _this.addTextArea(value, i, documento.expediente_desc);
                        _this.disabledBtn[i] = false;
                    }
                });
            }
            if (documento.estado_documento_id == '6') {
                _this.addTextArea('6', i, documento.expediente_desc);
            }
        });
        this.bandera = true;
    };
    DocumentosComponent.prototype.validarDocumento = function (value, id_expediente, id_documento, id_persona, index, descripcion) {
        var _this = this;
        if (descripcion === void 0) { descripcion = ''; }
        this.disabledBtn1[index] = true;
        this._documentosService.validarDocumento(value, id_expediente, id_documento, id_persona, descripcion, this.tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.Documentos[index].estado_documento_id = value;
                alertify.success(response['msg']).dismissOthers();
                if (value == 6)
                    _this.guardaTicketCorreccion(index, descripcion);
            }
            else {
                // alertify.error(response['msg']).dismissOthers();
            }
            _this.disabledBtn1[index] = false;
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.guardaTicketCorreccion = function (index, descripcion) {
        var Form = {
            asunto: this.Documentos[index]['nombre_documento'],
            mensaje: descripcion,
            tipoTicket: 3
        };
        this._ticketsService.guardaTicketCorreccion(Form, this.aspiranteId, this.idRol, this.idRolUsuario).subscribe(function (response) {
            if (response && response['status']) {
                // alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.addTextArea = function (id, index, value) {
        if (id == '6') {
            this.archivoForm["controls"].archivos["controls"][index].addControl('correccion', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: value, disabled: !this.disabled }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
        }
    };
    DocumentosComponent.prototype.guardarCorreccion = function (index) {
        var value = this.archivoForm.controls.archivos['controls'][index].value.estado;
        var text = this.archivoForm.controls.archivos['controls'][index].value.correccion;
        var id_expediente = this.Documentos[index].expediente_id;
        var id_documento = this.Documentos[index].documento_id;
        this.validarDocumento(value, id_expediente, id_documento, this.aspiranteId, index, text);
    };
    DocumentosComponent.prototype.guardarArchivo = function (index) {
        var _this = this;
        this.disabledBtn[index] = true;
        var file = this.archivoForm.controls.archivos['controls'][index].value.file;
        var id = this.Documentos[index].documento_id;
        var url = this.Documentos[index].url;
        var funcion = 'guardarDocumento';
        if (url) {
            funcion = 'editarDocumento';
            id = {
                id_expediente: this.Documentos[index].expediente_id,
                id_documento: this.Documentos[index].documento_id
            };
        }
        this._documentosService[funcion](this.jwt, file, id, this.aspiranteId, this.tipo).subscribe(function (response) {
            if (response && response['status']) {
                _this.consulta(0);
                // this.archivoForm.controls.archivos['controls'][index].controls.estado.setValue('2');
                _this.disabledBtn[index] = false;
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                _this.disabledBtn[index] = false;
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.verificarDocumento = function (index) {
        var file = this.archivoForm.controls.archivos['controls'][index].value.file;
        var valido = this.tipoArchivos(file);
        this.archivoForm.controls.archivos['controls'][index].controls.touched.setValue(true);
        if (valido) {
            this.archivoForm.controls.archivos['controls'][index].controls.file.setErrors(null);
        }
        else {
            this.archivoForm.controls.archivos['controls'][index].controls.file.setErrors({ 'incorrect': true });
        }
    };
    DocumentosComponent.prototype.tipoArchivos = function (file) {
        var tipoArchivos = ['png', 'jpg', 'jpeg', 'gif', 'doc', 'docx', 'pdf', 'odt'];
        var index = file.name.lastIndexOf('.');
        var extension = file.name.substring(index + 1).toLowerCase();
        if (tipoArchivos.indexOf(extension) == -1) {
            return false;
        }
        return true;
    };
    DocumentosComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-md' });
    };
    DocumentosComponent.prototype.enviaCorreo = function () {
        var _this = this;
        this.btnCorreo = true;
        this._documentosService.enviaCorreoDocumentacion(this.jwt, this.aspiranteId).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
            _this.btnCorreo = false;
        }, function (error) {
            console.log(error);
        });
    };
    DocumentosComponent.prototype.eliminaDocumento = function (index) {
        var documento = this.Documentos[index];
        alertify.confirm('Eliminar documento', "\u00BFDeseas eliminar el documento?", function () {
            var _this = this;
            this._documentosService.eliminaDocumento(documento.expediente_id, documento.url, this.tipo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.consulta();
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
        }).set('labels', { ok: 'Sí', cancel: 'No' });
        console.log(this.Documentos[index]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentosComponent.prototype, "aspiranteId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DocumentosComponent.prototype, "idRolUsuario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentDocumentos'),
        __metadata("design:type", Object)
    ], DocumentosComponent.prototype, "modalDocumentos", void 0);
    DocumentosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentos',
            template: __webpack_require__(/*! ./documentos.component.html */ "./src/app/inscripcion/documentos/documentos.component.html"),
            styles: [__webpack_require__(/*! ./documentos.component.scss */ "./src/app/inscripcion/documentos/documentos.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_documentos_service__WEBPACK_IMPORTED_MODULE_1__["DocumentosService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_solicitud_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudService"],
            src_app_administracion_tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_6__["TicketsService"]])
    ], DocumentosComponent);
    return DocumentosComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/documentos/documentos.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/inscripcion/documentos/documentos.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosModule", function() { return DocumentosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _documentos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos-routing.module */ "./src/app/inscripcion/documentos/documentos-routing.module.ts");
/* harmony import */ var _documentos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentos.component */ "./src/app/inscripcion/documentos/documentos.component.ts");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DocumentosModule = /** @class */ (function () {
    function DocumentosModule() {
    }
    DocumentosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_documentos_component__WEBPACK_IMPORTED_MODULE_3__["DocumentosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _documentos_routing_module__WEBPACK_IMPORTED_MODULE_2__["DocumentosRoutingModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_5__["ArchivoModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"]
            ],
            exports: [_documentos_component__WEBPACK_IMPORTED_MODULE_3__["DocumentosComponent"]]
        })
    ], DocumentosModule);
    return DocumentosModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/services/documentos.service.ts":
/*!************************************************************!*\
  !*** ./src/app/inscripcion/services/documentos.service.ts ***!
  \************************************************************/
/*! exports provided: DocumentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosService", function() { return DocumentosService; });
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




var DocumentosService = /** @class */ (function () {
    function DocumentosService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    DocumentosService.prototype.consultaDocumentos = function (jwt, id_aspirante, tipo, filtro) {
        var params = '?jwt=' + jwt;
        params += '&filtro=' + filtro;
        if (tipo == 0) {
            params += '&id_aspirante=' + id_aspirante;
            return this._httpClient.get(this.url + 'seguimiento/aspirante/consultaDocumentos.php' + params);
        }
        else {
            params += '&id_persona=' + id_aspirante;
            return this._httpClient.get(this.url + 'controlEscolar/docente/consultaDocumentos.php' + params);
        }
    };
    DocumentosService.prototype.catalogoEstadoDocumentos = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogoSG/estadoDocumento.php' + params);
    };
    DocumentosService.prototype.guardarDocumento = function (jwt, file, id_documento, id_persona, tipo) {
        var formData = new FormData();
        formData.append('id_documento', id_documento);
        formData.append('documento', file);
        formData.append('id_persona', id_persona);
        formData.append('jwt', jwt);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/aspirante/guardarDocumento.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'controlEscolar/docente/guardarDocumento.php', formData);
        }
    };
    DocumentosService.prototype.editarDocumento = function (jwt, file, id, id_persona, tipo) {
        var formData = new FormData();
        formData.append('expediente_id', id.id_expediente);
        formData.append('id_documento', id.id_documento);
        formData.append('id_persona', id_persona);
        formData.append('documento', file);
        formData.append('jwt', jwt);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/aspirante/editarDocumento.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'controlEscolar/docente/editarDocumento.php', formData);
        }
    };
    DocumentosService.prototype.validarDocumento = function (id_estado_documento, id_expediente, id_documento, id_persona, descripcion, tipo) {
        var formData = new FormData();
        formData.append('id_estado_documento', id_estado_documento);
        if (id_expediente) {
            formData.append('id_expediente', id_expediente);
        }
        formData.append('id_documento', id_documento);
        formData.append('id_persona', id_persona);
        formData.append('expediente_desc', descripcion);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/administracion/validarDocumento.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'controlEscolar/docente/validarDocumento.php', formData);
        }
    };
    DocumentosService.prototype.enviaCorreoDocumentacion = function (jwt, id_persona) {
        var formData = new FormData();
        formData.append('id_persona', id_persona);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'seguimiento/administracion/documentacionCompleta.php', formData);
    };
    DocumentosService.prototype.eliminaDocumento = function (id_expediente, url, tipo) {
        var formData = new FormData();
        formData.append('id_expediente', id_expediente);
        formData.append('url_documento', url);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/administracion/eliminaDocumento.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'controlEscolar/docente/eliminaDocumento.php', formData);
        }
    };
    DocumentosService.prototype.consultaEtiquetas = function () {
        // var params = '?jwt=' + jwt
        return this._httpClient.get(this.url + 'seguimiento/administracion/consultaEtiquetas.php');
    };
    DocumentosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentosService);
    return DocumentosService;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~asesor-aspiran~6aebbe8a.js.map