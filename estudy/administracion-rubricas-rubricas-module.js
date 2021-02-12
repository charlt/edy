(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-rubricas-rubricas-module"],{

/***/ "./src/app/administracion/rubricas/consulta/consulta.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/rubricas/consulta/consulta.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h4>{{title}}</h4>\r\n    <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> Nueva rúbrica</a>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-striped table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th>{{ '_nombreRubrica' | translate }}</th>\r\n            <th [hidden]=\"tipoAdmin == 0\">{{ 'Edit' | translate }}</th> \r\n            <th [hidden]=\"tipoAdmin == 0\">{{ 'Erase' | translate }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngIf=\"(Rubricas | filter: search).length === 0\">\r\n            <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n          </tr>  \r\n          <tr *ngFor=\"let rubrica of Rubricas | filter:search; let i = index;\">\r\n            <td>{{ rubrica.desc_rubrica }}</td>\r\n            <td [hidden]=\"tipoAdmin == 0\"><a [routerLink]=\"['../editar/'+rubrica.rubrica_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n            <td [hidden]=\"tipoAdmin == 0\"><button (click)=\"eliminarRubrica(rubrica.rubrica_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></td>      \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/administracion/rubricas/consulta/consulta.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/administracion/rubricas/consulta/consulta.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3J1YnJpY2FzL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/rubricas/consulta/consulta.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/administracion/rubricas/consulta/consulta.component.ts ***!
  \************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_rubricas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rubricas.service */ "./src/app/administracion/rubricas/services/rubricas.service.ts");
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
    function ConsultaComponent(_usuarioService, _rubricasService) {
        this._usuarioService = _usuarioService;
        this._rubricasService = _rubricasService;
        this.title = 'Consulta de rúbricas';
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.consulta();
    };
    ConsultaComponent.prototype.consulta = function () {
        var _this = this;
        this._rubricasService.catalogo(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Rubricas = response['rubricas'];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminarRubrica = function (id_rubrica, index) {
        alertify.confirm('Eliminar rúbrica', '¿Deseas eliminar la rúbrica?', function () {
            var _this = this;
            this._rubricasService.eliminaRubrica(id_rubrica, this.jwt).subscribe(function (response) {
                if (response && response['estatus']) {
                    _this.Rubricas.splice(index, 1);
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/rubricas/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/rubricas/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_rubricas_service__WEBPACK_IMPORTED_MODULE_2__["RubricasService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/rubricas/form/form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/administracion/rubricas/form/form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!Rubrica && idRubrica != 0 && bandera\">\r\n  <div class=\"col-12\">\r\n    <form [formGroup]=\"rubricaForm\" (ngSubmit)=\"enviarRespuestas()\">\r\n      <div class=\"form-group mb-3\">\r\n        <label class=\"control-label\">¿Cuál es el título de la rúbrica?</label>\r\n        <input class=\"form-control\" formControlName=\"titulo\" type=\"text\">          \r\n      </div> \r\n      <div *ngFor=\"let form of Datos; let i = index;\">\r\n        <div class=\"row col\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label mt-2\">{{form.label}}</label>\r\n          </div> \r\n          <div class=\"ml-3\">\r\n            <select class=\"form-control\" formControlName=\"{{form.select}}\">\r\n              <option *ngFor=\"let item of [].constructor(form.num); let j = index;\" [value]=\"j+1\">{{j+1}}</option>\r\n            </select>\r\n          </div>\r\n        </div> \r\n        <div formArrayName=\"{{form.type}}\" class=\"mt-2\"\r\n          *ngFor=\"let item of rubricaForm.get(form.type).controls; let k = index;\">\r\n          <div [formGroupName]=\"k\" class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">{{form.text}} {{k+1}}</span>\r\n                </div>\r\n                <input formControlName=\"texto\" type=\"text\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">{{form.text_2}} {{k+1}}</span>\r\n                </div>\r\n                <input formControlName=\"porcentaje\" type=\"number\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>  \r\n      </div>\r\n      <div *ngIf=\"!bandera_c\" class=\"alert alert-danger\">\r\n        La suma de la filas debe ser igual a 100%\r\n      </div>\r\n      <div *ngIf=\"!bandera_e\" class=\"alert alert-danger\">\r\n        El valor máximo de las columnas no debe de superar el 100%\r\n      </div>\r\n      <button [hidden]=\"tipoAdmin == 0\" type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"rubricaForm.invalid\">Guardar información</button>\r\n    </form>    \r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"Rubrica && idRubrica && bandera\">\r\n  <div class=\"row mb-2\">\r\n    <div class=\"col-md-8\">\r\n      <h4 class=\"top-buffer\">{{Rubrica.desc_rubrica}}</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"table-responsive\">\r\n    <form [formGroup]=\"tablaForm\">\r\n      <table class=\"table table-border\" formArrayName=\"Datos\">\r\n        <thead>\r\n          <tr class=\"bg-light\">\r\n            <th scope=\"col\">Categorías</th>\r\n            <!-- Horizontales = Elementos -->\r\n            <!-- Verticales = Categorías -->\r\n            <th scope=\"col\" *ngFor=\"let elemento of Horizontales; let i = index\">{{elemento.elemento_desc}}</th>\r\n            <th scope=\"col\">Total</th>\r\n          </tr> \r\n        </thead>\r\n        <div *ngFor=\"let fila of tablaForm.get('Datos').controls; let i=index; let l=last;\"\r\n          [formGroupName]=\"i\" style=\"display: table-row-group;\">\r\n          <div div style=\"display: table-row;\">\r\n            <th class=\"align-middle\">{{Verticales[i].categoria_desc}}</th>\r\n            <td *ngFor=\"let columna of fila.controls; let j = index\" [formGroupName]=\"j\">\r\n              <textarea formControlName=\"texto\" class=\"form-control\" rows=\"5\" placeholder=\"Descripción\">{{columna.controls.texto.value.length}}</textarea>\r\n            </td>\r\n            <td></td>\r\n          </div>\r\n          <div style=\"display: table-row;\" class=\"text-center\">\r\n            <td class=\"align-middle\">Equivalencia</td>\r\n            <td *ngFor=\"let columna of fila.controls; let j = index\" [formGroupName]=\"j\">\r\n              <input type=\"number\" class=\"form-control\" formControlName=\"equivalencia\" [value]=\"columna.controls.equivalencia.value\">\r\n              <button type=\"button\" \r\n                class=\"btn btn-success btn-sm btn-block mt-1\" [disabled]=\"formArray['controls'][i]['controls'][j].invalid\"\r\n                (click)=\"guardarCelda(i,j)\">Enviar</button>\r\n              <!-- <button *ngIf=\"columna.controls.texto.value != ''\" type=\"button\" \r\n                class=\"btn btn-primary btn-sm btn-block mt-1\" [disabled]=\"formArray['controls'][i]['controls'][j].invalid\">Editar</button> -->\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <div class=\"container p-0 m-0 text-center\">{{Verticales[i].porcentaje}}%</div>\r\n            </td>\r\n          </div>\r\n        </div>\r\n        <div style=\"display: table-row;\">\r\n          <td>Total</td>\r\n          <td *ngFor=\"let columna of Horizontales; let j = index\">\r\n            <div class=\"container p-0 m-0 text-center\">{{columna.porcentaje}}%</div>\r\n          </td>\r\n          <td>\r\n          </td>\r\n        </div>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <div *ngIf=\"Rubrica && idRubrica && bandera\">\r\n  <div class=\"container\" id=\"rubrica_{{idRespuesta}}\">\r\n    <div>\r\n    <br>\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-md-8\">\r\n        <h4 class=\"top-buffer\">{{Rubrica.desc_rubrica}}</h4>\r\n      </div> -->\r\n      <!-- <div class=\"col-md-4\">\r\n        <div class=\"mr-3\">\r\n          <img style=\"display: none\" class=\"pull-right\" *ngIf=\"imgURL\" [src]=\"imgURL\" width=\"50%\" id=\"urlRubrica_{{idRespuesta}}\">\r\n        </div>\r\n      </div> -->\r\n    <!-- </div>\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\" *ngIf=\"Horizontales && Verticales && bandera\">\r\n        <thead>\r\n          <tr class=\"bg-light\">\r\n            <th scope=\"col\">Categorías</th> -->\r\n            <!-- Horizontales = Elementos -->\r\n            <!-- <th scope=\"col\" *ngFor=\"let elemento of Horizontales; let i = index\">{{elemento.elemento_desc}} <p class=\"small\">({{elemento.porcentaje}}%)</p></th> -->\r\n            <!-- <th scope=\"col\" *ngFor=\"let elemento of Horizontales; let i = index\">{{elemento.elemento_desc}}</th>\r\n            <th scope=\"col\">Total</th>\r\n          </tr> \r\n        </thead> -->\r\n        <!-- Verticales = Categorías -->\r\n        <!-- <div *ngFor=\"let categoria of Verticales; let i = index\" style=\"display: table-row-group;\">\r\n          <div style=\"display: table-row;\"> -->\r\n            <!-- <th class=\"align-middle\">{{categoria.categoria_desc}} <p>({{categoria.porcentaje}}%)</p></th> -->\r\n            <!-- <th class=\"align-middle\">{{categoria.categoria_desc}}</th>\r\n            <td *ngFor=\"let horizontal of Horizontales; let j = index\">\r\n              <textarea *ngIf=\"!getTexto(categoria.categoria_id, horizontal.elemento_id)\" id=\"text_{{i}}_{{j}}\" class=\"form-control rounded-0\" rows=\"5\" placeholder=\"Descripción\"></textarea>\r\n              <textarea *ngIf=\"getTexto(categoria.categoria_id, horizontal.elemento_id).editar\" class=\"form-control\" id=\"text_{{i}}_{{j}}\" rows=\"5\">{{getTexto(categoria.categoria_id, horizontal.elemento_id).celda}}</textarea>\r\n              <div *ngIf=\"getTexto(categoria.categoria_id, horizontal.elemento_id) && !getTexto(categoria.categoria_id, horizontal.elemento_id).editar\" class=\"container p-0 m-0\">\r\n                {{getTexto(categoria.categoria_id, horizontal.elemento_id).celda}}\r\n              </div>\r\n            </td>\r\n            <td></td>\r\n          </div>\r\n          <div style=\"display: table-row;\">\r\n            <td class=\"align-middle\">Equivalencia</td>\r\n            <td *ngFor=\"let elemento of Horizontales; let j = index\" class=\"text-center\">\r\n              {{Porcentajes[i][j]}}%\r\n              <div *ngIf=\"!getTexto(categoria.categoria_id, elemento.elemento_id) || getTexto(categoria.categoria_id, elemento.elemento_id).editar\"> -->\r\n                <!-- <input id=\"equivalencia_{{i}}_{{j}}\" type=\"number\" class=\"form-control form-control-sm\" placeholder=\"Ponderación\"> -->\r\n                <!-- <button class=\"btn btn-success btn-sm mt-1 btn-block\" (click)=\"guardarDatos(i, j, elemento.elemento_id, categoria.categoria_id)\">\r\n                  Enviar\r\n                </button>\r\n              </div>\r\n              <div *ngIf=\"getTexto(categoria.categoria_id, elemento.elemento_id) && !getTexto(categoria.categoria_id, elemento.elemento_id).editar\"> -->\r\n                <!-- <div class=\"form-control form-control-sm\">\r\n                  {{getTexto(categoria.categoria_id, elemento.elemento_id).valor}}%\r\n                </div> -->\r\n                <!-- <button class=\"btn btn-primary btn-sm btn-block mt-1\" (click)=\"editaRespuesta(categoria.categoria_id, elemento.elemento_id)\">Editar</button>\r\n              </div>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <div class=\"container p-0 m-0 text-center\">{{categoria.porcentaje}}%</div> -->\r\n              <!-- <div class=\"container p-0 m-0 text-center\" *ngIf=\"getMayor(categoria.categoria_id)\">\r\n                {{getMayor(categoria.categoria_id)}}%\r\n              </div> -->\r\n            <!-- </td>\r\n          </div>\r\n        </div>\r\n  \r\n        <div style=\"display: table-row;\">\r\n          <td>Total</td>\r\n          <td *ngFor=\"let elemento of Horizontales; let j = index\">\r\n            <div class=\"container p-0 m-0 text-center\">{{elemento.porcentaje}}%</div> -->\r\n            <!-- <div class=\"container p-0 m-0 text-center\" *ngIf=\"getTotalColumna(elemento.elemento_id)\"\r\n              [ngClass]=\"getTotalColumna(elemento.elemento_id) > 100? 'text-danger': ''\">\r\n              {{getTotalColumna(elemento.elemento_id)}}%\r\n            </div> -->\r\n          <!-- </td>\r\n          <td> -->\r\n            <!-- <div class=\"container p-0 m-0 text-center\" *ngIf=\"getTotal()\" [ngClass]=\"getTotal() > 100? 'text-danger': ''\">\r\n              {{getTotal()}}%\r\n            </div> -->\r\n          <!-- </td>\r\n        </div>\r\n      </table>\r\n    </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  </div> -->"

/***/ }),

/***/ "./src/app/administracion/rubricas/form/form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/administracion/rubricas/form/form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vcnVicmljYXMvZm9ybS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9ydWJyaWNhcy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/rubricas/form/form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/administracion/rubricas/form/form.component.ts ***!
  \****************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_rubricas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rubricas.service */ "./src/app/administracion/rubricas/services/rubricas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormComponent = /** @class */ (function () {
    function FormComponent(_usuarioService, formBuilder, _rubricasService, router, route) {
        this._usuarioService = _usuarioService;
        this.formBuilder = formBuilder;
        this._rubricasService = _rubricasService;
        this.router = router;
        this.route = route;
        this.Datos = [
            { label: 'Número de columnas', select: 'selectHorizontal', type: 'horizontales', text: 'Columna', num: 6, text_2: 'Porcentaje' },
            { label: 'Número de filas', select: 'selectVertical', type: 'verticales', text: 'Fila', num: 6, text_2: 'Porcentaje' }
        ];
        this.respuestas = [];
        this.bandera = false;
        this.idActividad = 1;
        this.idMateriaFechaActividad = 19;
        this.bandera_e = true;
        this.bandera_c = true;
        this.idRubrica = parseInt(this.route.snapshot.paramMap.get('id'));
        if (!this.idRubrica)
            this.title = 'Nueva rúbrica';
        else
            this.title = 'Editar rúbrica';
        this._usuarioService.pushBreadcum(this.title, '', 2);
    }
    FormComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        if (!this.idRubrica)
            this.setForm();
        else
            this.consultaDatos();
        this.tablaForm = this.formBuilder.group({
            Datos: this.formBuilder.array([])
        });
    };
    // initRows() {
    //   return this.formBuilder.group({
    //     name: [""]
    //   });
    // }
    // addNewRow() {
    //   this.formArr.push(this.initRows());
    // }
    // deleteRow(index: number) {
    //   this.formArr.removeAt(index);
    // }
    FormComponent.prototype.setForm = function () {
        this.rubricaForm = this.formBuilder.group({
            titulo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectHorizontal: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectVertical: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            horizontales: this.formBuilder.array([this.createItem()]),
            verticales: this.formBuilder.array([this.createItem()])
        });
        this.valueChanges();
    };
    FormComponent.prototype.createItem = function () {
        return this.formBuilder.group({
            texto: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            porcentaje: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FormComponent.prototype.valueChanges = function () {
        var _this = this;
        this.rubricaForm.get('selectHorizontal').valueChanges.subscribe(function (val) {
            _this.numItems(parseInt(val), 'itemHorizontal', 'horizontales');
        });
        this.rubricaForm.get('selectVertical').valueChanges.subscribe(function (val) {
            _this.numItems(parseInt(val), 'itemVertical', 'verticales');
        });
        this.bandera = true;
    };
    FormComponent.prototype.addItem = function (itemType, type) {
        this[itemType] = this.rubricaForm.get(type);
        this[itemType].push(this.createItem());
    };
    FormComponent.prototype.deleteItem = function (itemType, type) {
        this[itemType] = this.rubricaForm.get(type);
        this[itemType].removeAt(this[itemType].length - 1);
    };
    FormComponent.prototype.numItems = function (value, itemType, type) {
        var items = this.rubricaForm.get(type).value.length;
        var longitud;
        if (value < items) {
            longitud = items - value;
            for (var i = 0; i < longitud; i++) {
                this.deleteItem(itemType, type);
            }
        }
        else if (value > items) {
            longitud = value - items;
            for (var i = 0; i < longitud; i++) {
                this.addItem(itemType, type);
            }
        }
    };
    Object.defineProperty(FormComponent.prototype, "formArray", {
        get: function () {
            return this.tablaForm.get("Datos");
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.createData = function (texto, equivalencia) {
        return this.formBuilder.group({
            texto: [texto, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            equivalencia: [equivalencia, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    FormComponent.prototype.getText = function (id_cat, id_elem) {
        var respuestaFiltrada = this.respuestas.find(function (res) {
            return res.categoria_id == id_cat && res.elemento_id == id_elem;
        });
        if (respuestaFiltrada)
            return respuestaFiltrada.celda;
        else
            return '';
    };
    FormComponent.prototype.consulta = function () {
        var _this = this;
        this._rubricasService.consultaHorizontal(this.idRubrica, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Horizontales = response['elementos'];
                _this._rubricasService.consultaVertical(_this.idRubrica, _this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.Verticales = response['categorias'];
                        _this.Porcentajes = new Array(_this.Verticales.length);
                        for (var i = 0; i < _this.Porcentajes.length; i++) {
                            _this.Porcentajes[i] = new Array(_this.Horizontales.length);
                            for (var j = 0; j < _this.Porcentajes[i].length; j++) {
                                var equivalencia = (_this.Verticales[i].porcentaje / 100) * _this.Horizontales[j].porcentaje;
                                _this.Porcentajes[i][j] = equivalencia;
                            }
                        }
                        console.log(_this.Horizontales, _this.Verticales);
                        _this.consultaRespuestas();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.consultaDatos = function () {
        var _this = this;
        this._rubricasService.consulta(this.jwt, this.idRubrica).subscribe(function (response) {
            if (response && response['status']) {
                _this.Rubrica = response['rubrica'];
                _this.idRubrica = _this.Rubrica.rubrica_id;
                _this.consulta();
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.consultaRespuestas = function () {
        var _this = this;
        this._rubricasService.consultaRespuestas(this.idRubrica, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.respuestas = response['respuesta'];
                _this.respuestas.forEach(function (respuesta) {
                    respuesta.editar = 0;
                });
            }
            var _loop_1 = function (i) {
                _this.formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]));
                var _loop_2 = function (j) {
                    var respuesta = _this.respuestas.find(function (r) { return r.categoria_id == _this.Verticales[i].categoria_id
                        && r.elemento_id == _this.Horizontales[j].elemento_id; });
                    var equivalencia = respuesta ? respuesta.valor : (_this.Verticales[i].porcentaje / 100) * _this.Horizontales[j].porcentaje;
                    var texto = _this.getText(_this.Verticales[i].categoria_id, _this.Horizontales[j].elemento_id);
                    _this.formArray.at(i).push(_this.createData(texto, equivalencia));
                };
                for (var j = 0; j < _this.Horizontales.length; j++) {
                    _loop_2(j);
                }
            };
            for (var i = 0; i < _this.Verticales.length; i++) {
                _loop_1(i);
            }
            _this.bandera = true;
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.enviarRespuestas = function () {
        var _this = this;
        this.bandera_e = true;
        this.bandera_c = false;
        // let suma_e = 0;
        var suma_c = 0;
        this.rubricaForm.value.horizontales.forEach(function (elemento) {
            if (elemento.porcentaje > 100)
                _this.bandera_e = false;
            // if (i > 0) suma_e += elemento.porcentaje;
        });
        // if (suma_e > this.rubricaForm.value.horizontales[0].porcentaje) this.bandera_e = false;
        this.rubricaForm.value.verticales.forEach(function (categoria) {
            suma_c += categoria.porcentaje;
        });
        // if (suma_c > this.rubricaForm.value.horizontales[0].porcentaje) this.bandera_c = false;
        if (suma_c > 100 || suma_c < 100)
            this.bandera_c = false;
        else if (suma_c == 100)
            this.bandera_c = true;
        if (this.bandera_e && this.bandera_c) {
            this._rubricasService.creaRubricaJson(this.jwt, this.rubricaForm.value).subscribe(function (response) {
                if (response && response['status']) {
                    _this.idRubrica = response['id_rubrica'];
                    _this.bandera = false;
                    _this.consultaDatos();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormComponent.prototype.guardarCelda = function (i, j) {
        var datos = this.formArray['controls'][i]['controls'][j].value;
        var texto = datos.texto;
        var porcentaje = datos.equivalencia;
        var categoria_id = this.Verticales[i].categoria_id;
        var elemento_id = this.Horizontales[j].elemento_id;
        var dato = this.respuestas.find(function (res) {
            return res.categoria_id == categoria_id && res.elemento_id == elemento_id;
        });
        if (dato == undefined) {
            this._rubricasService.guardaCelda(this.jwt, elemento_id, categoria_id, texto, porcentaje).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this._rubricasService.editaCelda(this.jwt, dato.respuesta_id, texto, porcentaje).subscribe(function (response) {
                if (response && response['status']) {
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    FormComponent.prototype.guardarDatos = function (i, j, id_horizontal, id_vertical) {
        var _this = this;
        var textarea = document.getElementById('text_' + i + '_' + j).value;
        var valor = this.Porcentajes[i][j];
        if (textarea.length) {
            var dato = this.respuestas.find(function (res) {
                return res.categoria_id == id_vertical && res.elemento_id == id_horizontal;
            });
            if (dato == undefined) {
                this._rubricasService.guardaCelda(this.jwt, id_horizontal, id_vertical, textarea, valor).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.consultaRespuestas();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this._rubricasService.editaCelda(this.jwt, dato.respuesta_id, textarea, valor).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.consultaRespuestas();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            alertify.error("Ingresa todos los campos").dismissOthers();
        }
    };
    FormComponent.prototype.getTexto = function (id_cat, id_elem) {
        var respuestaFiltrada = this.respuestas.find(function (res) {
            return res.categoria_id == id_cat && res.elemento_id == id_elem;
        });
        if (respuestaFiltrada)
            return respuestaFiltrada;
        else
            return false;
    };
    FormComponent.prototype.getMayor = function (id_categoria) {
        var datos = this.respuestas.filter(function (r) { return r.categoria_id == id_categoria; }).map(function (d) { return parseInt(d.valor); });
        var mayor = 0;
        for (var i = 0; i < datos.length; i++) {
            if (datos[i] > mayor)
                mayor = datos[i];
        }
        if (mayor > 0)
            return mayor;
        return false;
    };
    FormComponent.prototype.getTotal = function () {
        var _this = this;
        var arreglo = new Array(this.Verticales.length);
        this.Verticales.map(function (vertical, index) {
            var valores = _this.respuestas.filter(function (r) { return r.categoria_id == vertical.categoria_id; }).map(function (d) { return parseInt(d.valor); });
            if (valores.length > 0) {
                var mayor = 0;
                for (var i = 0; i < valores.length; i++) {
                    if (valores[i] > mayor)
                        mayor = valores[i];
                }
                arreglo[index] = mayor;
            }
        });
        var total = 0;
        for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
            var valor = arreglo_1[_i];
            if (valor)
                total += valor;
        }
        if (total > 0)
            return total;
        return false;
    };
    FormComponent.prototype.getTotalColumna = function (id_elemento) {
        var datos = this.respuestas.filter(function (r) { return r.elemento_id == id_elemento; }).map(function (d) { return parseInt(d.valor); });
        var total = 0;
        for (var _i = 0, datos_1 = datos; _i < datos_1.length; _i++) {
            var valor = datos_1[_i];
            total += valor;
        }
        if (total > 0)
            return total;
        return false;
    };
    FormComponent.prototype.editaRespuesta = function (id_cat, id_elem) {
        var respuesta = this.respuestas.find(function (res) { return res.categoria_id == id_cat && res.elemento_id == id_elem; });
        respuesta.editar = 1;
    };
    FormComponent.prototype.verDatos = function () {
        console.log(this.formArray.value);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/administracion/rubricas/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/administracion/rubricas/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_rubricas_service__WEBPACK_IMPORTED_MODULE_3__["RubricasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/administracion/rubricas/rubricas-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/administracion/rubricas/rubricas-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RubricasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubricasRoutingModule", function() { return RubricasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/rubricas/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/rubricas/form/form.component.ts");
/* harmony import */ var _rubricas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rubricas.component */ "./src/app/administracion/rubricas/rubricas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _rubricas_component__WEBPACK_IMPORTED_MODULE_4__["RubricasComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] },
            { path: 'nuevo', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
            { path: 'editar/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
        ]
    }
];
var RubricasRoutingModule = /** @class */ (function () {
    function RubricasRoutingModule() {
    }
    RubricasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RubricasRoutingModule);
    return RubricasRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/rubricas/rubricas.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/rubricas/rubricas.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/rubricas/rubricas.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/administracion/rubricas/rubricas.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL3J1YnJpY2FzL3J1YnJpY2FzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/administracion/rubricas/rubricas.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/administracion/rubricas/rubricas.component.ts ***!
  \***************************************************************/
/*! exports provided: RubricasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubricasComponent", function() { return RubricasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RubricasComponent = /** @class */ (function () {
    function RubricasComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = "Rúbricas";
        this._usuarioService.pushBreadcum(this.title, '/admin/rubricas', 1);
    }
    RubricasComponent.prototype.ngOnInit = function () {
    };
    RubricasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rubricas',
            template: __webpack_require__(/*! ./rubricas.component.html */ "./src/app/administracion/rubricas/rubricas.component.html"),
            styles: [__webpack_require__(/*! ./rubricas.component.scss */ "./src/app/administracion/rubricas/rubricas.component.scss")],
            animations: [Object(src_app_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], RubricasComponent);
    return RubricasComponent;
}());



/***/ }),

/***/ "./src/app/administracion/rubricas/rubricas.module.ts":
/*!************************************************************!*\
  !*** ./src/app/administracion/rubricas/rubricas.module.ts ***!
  \************************************************************/
/*! exports provided: RubricasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubricasModule", function() { return RubricasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rubricas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rubricas-routing.module */ "./src/app/administracion/rubricas/rubricas-routing.module.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/rubricas/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/administracion/rubricas/form/form.component.ts");
/* harmony import */ var _rubricas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rubricas.component */ "./src/app/administracion/rubricas/rubricas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RubricasModule = /** @class */ (function () {
    function RubricasModule() {
    }
    RubricasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_rubricas_component__WEBPACK_IMPORTED_MODULE_5__["RubricasComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _rubricas_routing_module__WEBPACK_IMPORTED_MODULE_2__["RubricasRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_8__["LanguageTranslationModule"]
            ]
        })
    ], RubricasModule);
    return RubricasModule;
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

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=administracion-rubricas-rubricas-module.js.map