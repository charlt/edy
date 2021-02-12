(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pregunta-pregunta-module"],{

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PreguntaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaRoutingModule", function() { return PreguntaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pregunta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pregunta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pregunta_component__WEBPACK_IMPORTED_MODULE_2__["PreguntaComponent"],
        children: [
            { path: '', loadChildren: './consulta-pregunta/consulta-pregunta.module#ConsultaPreguntaModule' },
            { path: 'nuevo', loadChildren: './form-pregunta-main/form-pregunta-main.module#FormPreguntaMainModule' },
            { path: 'edita/:id', loadChildren: './form-pregunta-main/form-pregunta-main.module#FormPreguntaMainModule' }
        ]
    }
];
var PreguntaRoutingModule = /** @class */ (function () {
    function PreguntaRoutingModule() {
    }
    PreguntaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PreguntaRoutingModule);
    return PreguntaRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"row alert  alert-actividad\" role=\"alert\" >  \r\n  <div class=\"col-md-9\" *ngIf=\"actividad\">\r\n    <h5 class=\"text-left text-dark\"> \r\n       {{actividad.actividad_nombre}}</h5>\r\n    <p>Actividad del tipo {{actividad.tipo_actividad_nombre}}</p> \r\n    <div  class=\"col-md-12\">\r\n      <a  *ngIf=\"actividad.tipo_actividad_id == 2 || actividad.tipo_actividad_id == 4\" class=\"btn btn-link\" (click)=\"redireccion('preguntas')\">\r\n        <span ><i class=\"fa fa-plus-square\"></i> Mostrar preguntas</span>  \r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <button [hidden]=\"tipoAdmin == 0\" (click)=\"redireccion('edita')\" class=\"btn btn-info btn-accion\"><i class=\"fa fa-pencil\"></i></button>\r\n    <button  (click)=\"redireccion('vista-previa')\" class=\"btn btn-info btn-accion\" class=\"btn btn-warning btn-accion\" ><i class=\"fa fa-eye\"></i></button>\r\n  </div>\r\n  <div class=\"col-md-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-actividad {\n  text-align: left;\n  padding: 20px;\n  background-color: white; }\n\n.btn-accion {\n  float: right;\n  top: 10px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vY2FyZ2EtYWN0aXZpZGFkZXMvYXNpZ25hdHVyYS9tb2R1bG8vYWN0aXZpZGFkL3ByZWd1bnRhL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFkbWluaXN0cmFjaW9uXFxjYXJnYS1hY3RpdmlkYWRlc1xcYXNpZ25hdHVyYVxcbW9kdWxvXFxhY3RpdmlkYWRcXHByZWd1bnRhXFxwcmVndW50YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksYUFBVztFQUNYLFVBQVE7RUFDUixrQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9jYXJnYS1hY3RpdmlkYWRlcy9hc2lnbmF0dXJhL21vZHVsby9hY3RpdmlkYWQvcHJlZ3VudGEvcHJlZ3VudGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5hbGVydC1hY3RpdmlkYWR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idG4tYWNjaW9ue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB0b3A6MTBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PreguntaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaComponent", function() { return PreguntaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actividad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/actividad.service */ "./src/app/administracion/carga-actividades/services/actividad.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreguntaComponent = /** @class */ (function () {
    function PreguntaComponent(_usuarioService, _actividadService, route, router) {
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this.route = route;
        this.router = router;
    }
    PreguntaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.idActividad = this.route.snapshot.parent.params['id'];
        this._actividadService.consultaActividad(this.idActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.actividad = response['actividad'][0];
            }
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    PreguntaComponent.prototype.redireccion = function (url) {
        this.router.navigate([url + '/' + this.idActividad], { relativeTo: this.route.parent.parent });
    };
    PreguntaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pregunta',
            template: __webpack_require__(/*! ./pregunta.component.html */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.html"),
            styles: [__webpack_require__(/*! ./pregunta.component.scss */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_actividad_service__WEBPACK_IMPORTED_MODULE_1__["ActividadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PreguntaComponent);
    return PreguntaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PreguntaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaModule", function() { return PreguntaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pregunta-routing.module */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta-routing.module.ts");
/* harmony import */ var _pregunta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pregunta.component */ "./src/app/administracion/carga-actividades/asignatura/modulo/actividad/pregunta/pregunta.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PreguntaModule = /** @class */ (function () {
    function PreguntaModule() {
    }
    PreguntaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_pregunta_component__WEBPACK_IMPORTED_MODULE_3__["PreguntaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pregunta_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreguntaRoutingModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"]
            ]
        })
    ], PreguntaModule);
    return PreguntaModule;
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



/***/ })

}]);
//# sourceMappingURL=pregunta-pregunta-module.js.map