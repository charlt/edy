(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~docente-actividad-actividad-module~docente-actividad-sqa-actividad-sqa-module~docente-notas-~8158d2e8"],{

/***/ "./src/app/docente/notas/notas-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/docente/notas/notas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasRoutingModule", function() { return NotasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas.component */ "./src/app/docente/notas/notas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _notas_component__WEBPACK_IMPORTED_MODULE_2__["NotasComponent"]
    }
];
var NotasRoutingModule = /** @class */ (function () {
    function NotasRoutingModule() {
    }
    NotasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotasRoutingModule);
    return NotasRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/notas/notas.component.html":
/*!****************************************************!*\
  !*** ./src/app/docente/notas/notas.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n<div class=\"col-md-6\">\r\n  <h5 *ngIf=\"alumno\">Notas de {{alumno.nombre}} {{alumno.primer_apellido}} {{alumno.segundo_apellido}}  </h5>\r\n  <h4 *ngIf=\"actividad\" class=\"text-info\">{{actividad.actividad_nombre}}</h4>\r\n  \r\n    <div class=\"form-group\" >\r\n      <ckeditor [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\" [(ngModel)]=\"texto\" name=\"notas\" id=\"notas\"></ckeditor>\r\n    </div>\r\n    <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"enviar(texto)\">Enviar</button>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"col-md-6 \">\r\n      <h4>Mis notas</h4>\r\n      <div class=\"alert alert-secondary\" role=\"alert\" *ngIf=\"!nota\" >\r\n        No tienes notas de este alumno\r\n      </div>\r\n        <div class=\"alert alert-secondary\" role=\"alert\" *ngFor=\"let _nota of nota; let i = index \" >\r\n            <button class=\"btn btn-light btn-accion pull-right btn-sm\" (click)=\"eliminaNotas(_nota.nota_id,i)\"><i class=\"fa fa-times\"></i></button>\r\n            <p [innerHtml]=\"_nota.texto\"></p> \r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/docente/notas/notas.component.scss":
/*!****************************************************!*\
  !*** ./src/app/docente/notas/notas.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvbm90YXMvbm90YXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/docente/notas/notas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/docente/notas/notas.component.ts ***!
  \**************************************************/
/*! exports provided: NotasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasComponent", function() { return NotasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_notas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/notas.service */ "./src/app/docente/notas/services/notas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frontEstudy_src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../frontEstudy/src/app/models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/materia/actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotasComponent = /** @class */ (function () {
    function NotasComponent(_usuarioService, _notasService, _actividadService, _materiaService, route) {
        this._usuarioService = _usuarioService;
        this._notasService = _notasService;
        this._actividadService = _actividadService;
        this._materiaService = _materiaService;
        this.route = route;
        this.idNota = null;
        this.simpleEditor = _frontEstudy_src_app_models_simpleEditor__WEBPACK_IMPORTED_MODULE_4__["simpleEditor"];
        this.title = 'Mis notas';
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.idMateria = this.route.snapshot.params['id'];
        this.idActividad = this.route.snapshot.params['id2'];
    }
    NotasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.identity = this._usuarioService.getIdentity();
        this.idDocente = this.identity.persona_id;
        this._notasService.consultaNotas(this.idMateria, this.idDocente).subscribe(function (response) {
            if (response && response['status']) {
                _this.nota = response['notas'];
            }
        }, function (error) {
            console.log(error);
        });
        this._materiaService.consultaAlumno(this.idMateria, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.alumno = response['alumno'];
            }
        }, function (error) {
            console.log(error);
        });
        this._actividadService.consulta(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
            }
        });
    };
    NotasComponent.prototype.enviar = function (texto) {
        var _this = this;
        if (texto != undefined) {
            if (texto != '') {
                this._notasService.enviar(this.idActividad, this.idMateria, this.idDocente, this.texto, this.idNota).subscribe(function (response) {
                    if (response && response['status']) {
                        _this._notasService.consultaNotas(_this.idMateria, _this.idDocente).subscribe(function (response) {
                            if (response && response['status']) {
                                _this.nota = response['notas'];
                            }
                        });
                        if (response['idNota']) {
                            _this.idNota = response['idNota'];
                        }
                        alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                    }
                    else {
                        alertify.error('Error al enviar').dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    NotasComponent.prototype.eliminaNotas = function (id, index) {
        var _this = this;
        this._notasService.elimina(id, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.nota.splice(index, 1);
                alertify.success(response['msg']);
            }
            else {
                alertify.success(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    NotasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notas',
            template: __webpack_require__(/*! ./notas.component.html */ "./src/app/docente/notas/notas.component.html"),
            styles: [__webpack_require__(/*! ./notas.component.scss */ "./src/app/docente/notas/notas.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_notas_service__WEBPACK_IMPORTED_MODULE_2__["NotasService"],
            src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_5__["ActividadService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_6__["MateriaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NotasComponent);
    return NotasComponent;
}());



/***/ }),

/***/ "./src/app/docente/notas/notas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/docente/notas/notas.module.ts ***!
  \***********************************************/
/*! exports provided: NotasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasModule", function() { return NotasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas-routing.module */ "./src/app/docente/notas/notas-routing.module.ts");
/* harmony import */ var _notas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notas.component */ "./src/app/docente/notas/notas.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotasModule = /** @class */ (function () {
    function NotasModule() {
    }
    NotasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notas_component__WEBPACK_IMPORTED_MODULE_3__["NotasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notas_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotasRoutingModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            exports: [_notas_component__WEBPACK_IMPORTED_MODULE_3__["NotasComponent"]]
        })
    ], NotasModule);
    return NotasModule;
}());



/***/ }),

/***/ "./src/app/docente/notas/services/notas.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/docente/notas/services/notas.service.ts ***!
  \*********************************************************/
/*! exports provided: NotasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasService", function() { return NotasService; });
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




var NotasService = /** @class */ (function () {
    function NotasService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    NotasService.prototype.consultaNotas = function (materia_id, docente_id) {
        var params = '?id_materia=' + materia_id;
        params += '&id_docente=' + docente_id;
        return this._httpClient.get(this.url + '/learning/notas/consulta.php' + params);
    };
    NotasService.prototype.enviar = function (actividad_id, materia_id, docente_id, texto, nota_id) {
        if (nota_id === void 0) { nota_id = null; }
        var formData = new FormData();
        if (actividad_id) {
            formData.append('actividad_id', actividad_id);
        }
        formData.append('materia_id', materia_id);
        formData.append('docente_id', docente_id);
        formData.append('texto', texto);
        if (!nota_id) {
            return this._httpClient.post(this.url + 'learning/notas/crea.php', formData);
        }
    };
    NotasService.prototype.elimina = function (id, jwt) {
        var params = '?id_nota=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/notas/elimina.php' + params);
    };
    NotasService.prototype.consultaNotasMateria = function (materia_id, docente_id, jwt) {
        var params = '?id_materia=' + materia_id;
        params += '&id_docente=' + docente_id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/notas/notasMateria.php' + params);
    };
    NotasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotasService);
    return NotasService;
}());



/***/ })

}]);
//# sourceMappingURL=default~docente-actividad-actividad-module~docente-actividad-sqa-actividad-sqa-module~docente-notas-~8158d2e8.js.map