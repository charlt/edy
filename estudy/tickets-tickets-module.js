(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tickets-tickets-module"],{

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

/***/ "./src/app/administracion/tickets/tickets-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/administracion/tickets/tickets-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TicketsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsRoutingModule", function() { return TicketsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets.component */ "./src/app/administracion/tickets/tickets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _tickets_component__WEBPACK_IMPORTED_MODULE_2__["TicketsComponent"] }
];
var TicketsRoutingModule = /** @class */ (function () {
    function TicketsRoutingModule() {
    }
    TicketsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TicketsRoutingModule);
    return TicketsRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/tickets/tickets.component.html":
/*!***************************************************************!*\
  !*** ./src/app/administracion/tickets/tickets.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div *ngIf=\"!EstatusTickets\" class=\"container border rounded text-center p-4\">\r\n      <h5>No se encontraron tickets abiertos</h5>\r\n    </div>\r\n    <ngb-tabset #tabset=\"ngbTabset\" (tabChange)=\"getTab($event.nextId)\" *ngIf=\"EstatusTickets\">\r\n      <ngb-tab [id]=\"'tab-'+ i\" title=\"{{ item.estatus_ticket | titlecase }} ({{item.total}})\" *ngFor=\"let item of EstatusTickets; let i = index;\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"table-responsive mt-3\">\r\n            <table class=\"table table-border\">\r\n              <thead class=\"bg-light\">\r\n                <tr>\r\n                  <th>Asunto del ticket</th>\r\n                  <th>Descripción</th>\r\n                  <th>Nombre alumno</th>\r\n                  <th>Tipo de ticket</th>\r\n                  <th>\r\n                    <span *ngIf=\"item.estatus_ticket_id != 4\">Responder</span>\r\n                    <span *ngIf=\"item.estatus_ticket_id == 4\">Ver ticket</span>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let ticket of Tickets; let j = index;\">\r\n                  <td>{{ticket.asunto_ticket}}</td>\r\n                  <td>{{ticket.descripcion_ticket}}</td>\r\n                  <td>{{ticket.primer_apellido}} {{ticket.segundo_apellido}} {{ticket.nombre}}</td>\r\n                  <td>{{ticket.tipo_ticket}}</td>\r\n                  <td>\r\n                    <button *ngIf=\"item.estatus_ticket_id != 4\" class=\"btn btn-primary\" (click)=\"open(content, ticket)\"><i class=\"fa fa-ticket\"></i></button>\r\n                    <button *ngIf=\"item.estatus_ticket_id == 4\" class=\"btn btn-primary\" (click)=\"open(content, ticket)\"><i class=\"fa fa-eye\"></i></button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-body p-3\">\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"container p-4 border rounded\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body py-1\">\r\n              <h5 class=\"modal-title mt-2\" id=\"modal-basic-title\"> {{selected.asunto_ticket}}</h5>\r\n              <p>{{selected.descripcion_ticket}}</p>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"py-2\" *ngIf=\"Respuestas\">\r\n            <b>Respuestas:</b>\r\n            <div *ngFor=\"let respuesta of Respuestas\">\r\n              <div class=\"alert\" [ngClass]=\"(idRol == 1 && (respuesta.rol_id == 2 || respuesta.rol_id == 4))? \r\n                'alert-secondary': (idRol == 1 && respuesta.rol_id == 1)? 'alert-primary' : ''\" role=\"alert\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 my-0 py-0\">\r\n                    <small class=\"m-0 p-0 pull-right\">{{respuesta.fecha_creacion | date: 'dd/MM/yyyy hh:mm a'}}</small>\r\n                  </div>\r\n                  <div class=\"col-12 my-0 py-0\">\r\n                    <p class=\"m-0 p-0\">{{respuesta.texto}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [ngClass]=\"!Respuestas? 'pt-2': ''\">\r\n            <form *ngIf=\"idEstatus != 4 && ticketsForm\" [formGroup]=\"ticketsForm\" (ngSubmit)=\"guardaRespuesta()\">\r\n                <div class=\"form-group\">\r\n                  <textarea formControlName=\"texto\" placeholder=\"Escribe texto\" class=\"form-control\" rows=\"3\"></textarea>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"cerrarTicket()\" [disabled]=\"ticketsForm.invalid\"><i class=\"fa fa-minus-square \"></i> Cerrar ticket</button>\r\n                <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" [disabled]=\"ticketsForm.invalid\" class=\"btn btn-success pull-right\">Enviar respuesta</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/administracion/tickets/tickets.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/administracion/tickets/tickets.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/tickets/tickets.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/administracion/tickets/tickets.component.ts ***!
  \*************************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios/tickets.service */ "./src/app/administracion/tickets/servicios/tickets.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(_ticketsService, modalService, formBuilder, _usuarioService) {
        this._ticketsService = _ticketsService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
    }
    TicketsComponent.prototype.ngOnInit = function () {
        this.idRol = this._usuarioService.getRol().rol_id;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.conteoTickets();
    };
    TicketsComponent.prototype.conteoTickets = function (id, tab) {
        var _this = this;
        if (id === void 0) { id = 0; }
        if (tab === void 0) { tab = 0; }
        this.EstatusTickets = undefined;
        this._ticketsService.getConteoTickets().subscribe(function (response) {
            if (response && response['status']) {
                _this.EstatusTickets = response['tickets'];
                _this.getTab('tab-' + tab);
                if (id = 1)
                    _this.modalService.dismissAll();
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.getTab = function (id) {
        var _this = this;
        var array = id.split('tab-');
        this.activeTab = parseInt(array[1]);
        this.idEstatus = this.EstatusTickets[this.activeTab]['estatus_ticket_id'];
        this._ticketsService.consultaTicket(this.idEstatus).subscribe(function (response) {
            if (response && response['status']) {
                _this.Tickets = response['ticket'];
                setTimeout(function () {
                    _this.tabset.select(id);
                }, 1);
            }
            else {
                _this.Tickets = null;
            }
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(TicketsComponent.prototype, "f", {
        get: function () { return this.ticketsForm.controls; },
        enumerable: true,
        configurable: true
    });
    TicketsComponent.prototype.open = function (content, ticket) {
        var _this = this;
        this.selected = ticket;
        this.Respuestas = undefined;
        if (!this.ticketsForm && this.idEstatus != 4) {
            this.ticketsForm = this.formBuilder.group({
                texto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
        else if (this.ticketsForm && this.idEstatus != 4) {
            this.ticketsForm.get('texto').setValue('');
        }
        this._ticketsService.consultaRespuestas(this.selected['ticket_id']).subscribe(function (response) {
            if (response && response['status']) {
                _this.Respuestas = response['Respuestas'];
            }
            _this.modalService.open(content, { keyboard: false, size: 'lg', backdrop: 'static' });
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.guardaRespuesta = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        var form = this.ticketsForm.value;
        this._ticketsService.guardarRespuesta(this.selected['ticket_id'], form).subscribe(function (response) {
            if (response && response['status']) {
                if (id == 0) {
                    _this.conteoTickets(1, _this.activeTab);
                    alertify.success(response['msg']).dismissOthers();
                }
                else if (id == 1) {
                    _this._ticketsService.cerrarTicket(_this.selected['ticket_id']).subscribe(function (response) {
                        if (response && response['status']) {
                            _this.conteoTickets(1, _this.activeTab);
                            alertify.success(response['msg']).dismissOthers();
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsComponent.prototype.cerrarTicket = function () {
        alertify.confirm('Cerrar ticket', "\u00BFDeseas cerrar el ticket?", function () {
            this.guardaRespuesta(1);
        }.bind(this), function () {
            alertify.error('Cancelado').dismissOthers();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", Object)
    ], TicketsComponent.prototype, "tabset", void 0);
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/administracion/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.scss */ "./src/app/administracion/tickets/tickets.component.scss")]
        }),
        __metadata("design:paramtypes", [_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/administracion/tickets/tickets.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/administracion/tickets/tickets.module.ts ***!
  \**********************************************************/
/*! exports provided: TicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModule", function() { return TicketsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-routing.module */ "./src/app/administracion/tickets/tickets-routing.module.ts");
/* harmony import */ var _tickets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets.component */ "./src/app/administracion/tickets/tickets.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TicketsModule = /** @class */ (function () {
    function TicketsModule() {
    }
    TicketsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tickets_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            exports: [_tickets_component__WEBPACK_IMPORTED_MODULE_3__["TicketsComponent"]]
        })
    ], TicketsModule);
    return TicketsModule;
}());



/***/ })

}]);
//# sourceMappingURL=tickets-tickets-module.js.map