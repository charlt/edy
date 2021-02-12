(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~0587432d"],{

/***/ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/administracion/alumno/tickets-alumno/tickets-alumno-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: TicketsAlumnoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsAlumnoRoutingModule", function() { return TicketsAlumnoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_alumno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-alumno.component */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _tickets_alumno_component__WEBPACK_IMPORTED_MODULE_2__["TicketsAlumnoComponent"] }
];
var TicketsAlumnoRoutingModule = /** @class */ (function () {
    function TicketsAlumnoRoutingModule() {
    }
    TicketsAlumnoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TicketsAlumnoRoutingModule);
    return TicketsAlumnoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <app-encabezado-persona *ngIf=\"idRol == 1\" [idPersona]=\"idPersona\" [idRol]=\"idRolPersona\"></app-encabezado-persona>\r\n    <button *ngIf=\"idRol == 1\" class=\"btn btn-link pull-right\" [routerLink]=\"['../../consulta-ticket/'+ idPersona]\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> Otros tickets de alumno</button>\r\n    \r\n    <h4 *ngIf=\"idRol == 2\" class=\"m-3\" >Envíar nuevo ticket</h4>\r\n    <h4 *ngIf=\"idRol == 1\" class=\"m-3\" >Envíar notificación</h4>\r\n    <form *ngIf=\"bandera\" [formGroup]=\"ticketForm\" (ngSubmit)=\"enviarInformacion()\" class=\"alert alert-primary\" role=\"alert\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n        <div class=\"form-group\">                               \r\n          <label class=\"control-label\" for=\"asunto\">Asunto</label>\r\n          <input formControlName=\"asunto\" class=\"form-control\" id=\"asunto\" type=\"text\" placeholder=\"Asunto\">\r\n          <span class=\"invalidText\" *ngIf=\"f.asunto.invalid && f.asunto.touched\">\r\n              {{'fmErrText' | translate}}\r\n          </span>\r\n        </div> \r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"mensaje\">Mensaje</label>\r\n          <textarea formControlName=\"mensaje\" class=\"form-control\" id=\"mensaje\" rows=\"5\" maxlength=\"1000\"></textarea>\r\n          <span class=\"invalidText\" *ngIf=\"f.mensaje.invalid && f.mensaje.touched\">\r\n            {{'fmErrText' | translate}}\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Tipo del ticket</label>\r\n          <select formControlName=\"tipoTicket\" class=\"form-control form-control-md\">\r\n            <option hidden value=\"\" disabled selected>Selecciona una opción</option>\r\n            <option [value]=\"ticket.tipo_ticket_id\" *ngFor=\"let ticket of tiposTicket\">{{ticket.tipo_ticket}}\r\n            </option>\r\n          </select>\r\n          <span class=\"invalidText\" *ngIf=\"f.tipoTicket.invalid && f.tipoTicket.touched\">\r\n            {{'fmErrSelect' | translate}}\r\n          </span>\r\n        </div><br>\r\n        <div class=\"fom-group\">\r\n          <button class=\"btn btn-primary enviar pull-right\" type=\"submit\" [disabled]=\"enviando\">\r\n            <span *ngIf=\"!enviando\">Enviar</span>\r\n            <span *ngIf=\"enviando\"><i class=\"fa fa-spinner fa-spin\"></i> Enviando</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vYWx1bW5vL3RpY2tldHMtYWx1bW5vL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL2FsdW1uby90aWNrZXRzLWFsdW1uby90aWNrZXRzLWFsdW1uby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TicketsAlumnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsAlumnoComponent", function() { return TicketsAlumnoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tickets/servicios/tickets.service */ "./src/app/administracion/tickets/servicios/tickets.service.ts");
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





var TicketsAlumnoComponent = /** @class */ (function () {
    function TicketsAlumnoComponent(route, router, formBuilder, _ticketsService, _usuarioService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this._ticketsService = _ticketsService;
        this._usuarioService = _usuarioService;
        this.bandera = false;
        this.enviando = false;
    }
    Object.defineProperty(TicketsAlumnoComponent.prototype, "f", {
        get: function () { return this.ticketForm.controls; },
        enumerable: true,
        configurable: true
    });
    TicketsAlumnoComponent.prototype.ngOnInit = function () {
        this.plataforma = this.router.url.split('/')[2];
        if (this.plataforma == 'alumno')
            this.idRolPersona = 2;
        else if (this.plataforma == 'docente')
            this.idRolPersona = 3;
        else if (this.plataforma == 'aspirante')
            this.idRolPersona = 4;
        this.idRol = this._usuarioService.getRol().rol_id;
        this.ticketForm = this.formBuilder.group({
            mensaje: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // tipoTicket: ['', Validators.required],
            asunto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.idRol == 1) {
            this.idPersona = this.route.snapshot.params['id'];
        }
        else if (this.idRol == 2) {
            this.idPersona = this._usuarioService.getIdentity().persona_id;
        }
        this.consultaTiposTicket();
    };
    TicketsAlumnoComponent.prototype.consultaTiposTicket = function () {
        var _this = this;
        this._ticketsService.consultaTipoTicket().subscribe(function (response) {
            if (response && response['status']) {
                _this.tiposTicket = [];
                if (_this.idRol == 1) {
                    var array = _this.router.url.split('/');
                    _this.component = array[3];
                    if (_this.component === 'ticket') {
                        _this.setTiposTicket(response['tickets']);
                        _this.ticketForm.addControl('tipoTicket', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                    }
                    else if (_this.component === 'ticket-expediente') {
                        _this.tiposTicket = [];
                        var ticket = response['tickets'].find(function (t) { return t.tipo_ticket == 'Expediente incompleto'; });
                        _this.tiposTicket.push(ticket);
                        _this.ticketForm.addControl('tipoTicket', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: ticket.tipo_ticket_id, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                    }
                }
                else if (_this.idRol == 2) {
                    _this.component = 'alumno';
                    _this.tiposTicket = [];
                    _this.setTiposTicket(response['tickets']);
                    _this.ticketForm.addControl('tipoTicket', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                }
                _this.bandera = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsAlumnoComponent.prototype.setTiposTicket = function (tickets) {
        var _this = this;
        tickets.filter(function (t) { return t.rol_id == _this.idRol; }).map(function (ticket) {
            _this.tiposTicket.push(ticket);
        });
    };
    TicketsAlumnoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.ticketForm.invalid) {
            Object.keys(this.ticketForm.controls).forEach(function (controlKey) {
                _this.ticketForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        this.enviando = true;
        this._ticketsService.guardaTicketCorreccion(this.ticketForm.getRawValue(), this.idPersona, this.idRol, this.idRolPersona).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']);
                if (_this.component === 'ticket')
                    _this.router.navigate(['/admin/' + _this.plataforma + '/consulta-ticket/' + _this.idPersona]);
                else if (_this.component === 'ticket-expediente')
                    _this.router.navigate(['/admin/' + _this.plataforma + '/expediente/' + _this.idPersona]);
                else if (_this.component === 'alumno') {
                    if (localStorage.getItem('prevUrl'))
                        _this.router.navigate([localStorage.getItem('prevUrl')]);
                    else
                        _this.router.navigate(['/learning/home']);
                }
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TicketsAlumnoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets-alumno',
            template: __webpack_require__(/*! ./tickets-alumno.component.html */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.html"),
            styles: [__webpack_require__(/*! ./tickets-alumno.component.scss */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _tickets_servicios_tickets_service__WEBPACK_IMPORTED_MODULE_3__["TicketsService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], TicketsAlumnoComponent);
    return TicketsAlumnoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/alumno/tickets-alumno/tickets-alumno.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TicketsAlumnoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsAlumnoModule", function() { return TicketsAlumnoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tickets_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-alumno-routing.module */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno-routing.module.ts");
/* harmony import */ var _tickets_alumno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets-alumno.component */ "./src/app/administracion/alumno/tickets-alumno/tickets-alumno.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/encabezado-persona/encabezado-persona.module */ "./src/app/components/encabezado-persona/encabezado-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TicketsAlumnoModule = /** @class */ (function () {
    function TicketsAlumnoModule() {
    }
    TicketsAlumnoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_3__["TicketsAlumnoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tickets_alumno_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketsAlumnoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                src_app_components_encabezado_persona_encabezado_persona_module__WEBPACK_IMPORTED_MODULE_6__["EncabezadoPersonaModule"]
            ],
            exports: [_tickets_alumno_component__WEBPACK_IMPORTED_MODULE_3__["TicketsAlumnoComponent"]]
        })
    ], TicketsAlumnoModule);
    return TicketsAlumnoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~administracion-alumno-alumno-module~administracion-aspirante-aspirante-module~administracion~0587432d.js.map