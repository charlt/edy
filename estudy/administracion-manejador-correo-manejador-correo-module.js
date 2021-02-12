(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administracion-manejador-correo-manejador-correo-module"],{

/***/ "./src/app/administracion/manejador-correo/consulta/consulta.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/consulta/consulta.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n    <h4 class=\"top-buffer\">{{title}}</h4>\r\n    <br>\r\n    <a  [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> {{'nuevoCorreo' | translate}} </a>\r\n    <hr>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"{{'SearchInput' | translate}}\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n      <div class=\"input-group-append\">\r\n        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n      </div>\r\n    </div>        \r\n      <div class=\" table-responsive\">\r\n        <table class=\"table table-striped table-bordered\">\r\n          <tbody><tr>\r\n            <th>{{'asuntoCorreo' | translate}}</th>\r\n            <th>{{'cuerpoCorreo' | translate}} </th>\r\n            <th [hidden]=\"tipoAdmin == 0\">{{'Edit' | translate}}</th>\r\n            <th [hidden]=\"tipoAdmin == 0\">{{'Erase' | translate}}</th>   \r\n            <th>{{'enviaCorreo' | translate}}</th>\r\n          </tr>\r\n          <tr *ngIf=\"(correos | filter: search).length === 0\">\r\n              <td colspan=\"12\" class=\"text-center\">{{'trNotFound' | translate}}</td>\r\n          </tr>\r\n            <tr *ngFor=\"let correo of correos | filter:search; let i = index;\">\r\n              <td><div id=\"correo\">{{correo.correo_subject}}</div></td>\r\n              <td><div id=\"correo\" [innerHTML]=\"correo.correo_body\" \r\n                (click)=\"open(content, correo.correo_body, correo.correo_subject, 1, correo.correo_id)\"></div></td>\r\n              <td [hidden]=\"tipoAdmin == 0\">\r\n                <a [routerLink]=\"['../editar/'+correo.correo_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a>\r\n              </td>\r\n              <td [hidden]=\"tipoAdmin == 0\">\r\n                <button (click)=\"eliminar(correo.correo_id, i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\r\n              </td>\r\n              <td>\r\n                <button (click)=\"open(content, '', correo.correo_subject, 2, correo.correo_id)\" class=\"btn btn-success\" type=\"button\"><i class=\"fa fa-send\"></i></button>\r\n              </td>                  \r\n            </tr>          \r\n        </tbody></table>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{asuntoCorreo}}</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div *ngIf=\"modal == 1\" [innerHTML]=\"textoCorreo\"></div>\r\n\r\n        <div *ngIf=\"modal == 2\">\r\n          <div class=\"container\" align=\"center\">\r\n            <div [innerHTML]=\"textoCorreo\"></div>\r\n            <form [formGroup]=\"grupoForm\" (ngSubmit)=\"enviarCorreo()\" >\r\n              <div class=\"form-group\">\r\n                <select formControlName=\"catGrupos\" class=\"form-control\" (change)=\"verLista()\">\r\n                    <option hidden value=\"\" disabled selected>{{'seleccionaGrupo' | translate}}</option>\r\n                    <option [value]=\"grupo.grupo_correo_id\" *ngFor=\"let grupo of grupos\">{{grupo.grupo_correo}}</option>\r\n                </select>\r\n                <span class=\"invalidText\" *ngIf=\"f.catGrupos.invalid && f.catGrupos.touched\">\r\n                  {{'fmErrSelectGroup' | translate}}\r\n                </span>\r\n              </div>  \r\n              <br>\r\n              <button [disabled]=\"grupoForm.invalid || btnEnviar\" *ngIf=\"listaUsuarios\" class=\"btn btn-primary btn-lg\" type=\"submit\"><i *ngIf=\"btnEnviar\" class=\"fa fa-spin fa-spinner\"></i> {{'enviaCorreo' | translate}}</button>\r\n              <hr>\r\n              <div class=\"table-responsive\" *ngIf=\"listaUsuarios\">\r\n                <table class=\"table table-striped table-bordered\">\r\n                  <tbody><tr>\r\n                    <th>{{'TbName' | translate}}</th>\r\n                    <th>{{'Mail' | translate}} </th>\r\n                    <th>{{'tipoUsuario' | translate}}</th>\r\n                  </tr>\r\n                    <tr *ngFor=\"let usuario of listaUsuarios; let i = index;\">\r\n                      <td>{{usuario.nombre}}</td>\r\n                      <td>{{usuario.email}}</td>                               \r\n                      <td>{{usuario.usuario_id}}</td>                       \r\n                    </tr>          \r\n                </tbody></table>\r\n              </div>                  \r\n              <button [disabled]=\"grupoForm.invalid || btnEnviar\" class=\"btn btn-primary btn-lg\" type=\"submit\"><i *ngIf=\"btnEnviar\" class=\"fa fa-spin fa-spinner\"></i> {{'enviaCorreo' | translate}}</button>\r\n            </form>         \r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/consulta/consulta.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/consulta/consulta.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n#correo {\n  overflow: auto;\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbWFuZWphZG9yLWNvcnJlby9jb25zdWx0YS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL21hbmVqYWRvci1jb3JyZW8vY29uc3VsdGEvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcYWRtaW5pc3RyYWNpb25cXG1hbmVqYWRvci1jb3JyZW9cXGNvbnN1bHRhXFxjb25zdWx0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFrQixFQUNsQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxzQkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQixFQUNuQjs7QUNmRDtFQUNJLGVBQWE7RUFDYixjQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9tYW5lamFkb3ItY29ycmVvL2NvbnN1bHRhL2NvbnN1bHRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiNjb3JyZW8ge1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGhlaWdodDoxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/consulta/consulta.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/consulta/consulta.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_correo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/correo.service */ "./src/app/administracion/manejador-correo/services/correo.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ConsultaComponent(_usuarioService, _catalogoService, translate, _correoService, modalService, formBuilder, router) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.translate = translate;
        this._correoService = _correoService;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.breadcrum = [];
        this.btnEnviar = false;
        this.title = 'Consulta';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    Object.defineProperty(ConsultaComponent.prototype, "f", {
        get: function () { return this.grupoForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this._catalogoService.consultaCorreo(this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.correos = response['correo'];
            }
        }, function (error) {
            console.log(error);
        });
        this.grupoForm = this.formBuilder.group({
            catGrupos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    ConsultaComponent.prototype.eliminar = function (id, index) {
        alertify.confirm(this.translate.instant('MsgEraseEmail'), function () {
            var _this = this;
            this._correoService.elimina(id, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    _this.correos.splice(index, 1);
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
        console.log("Borrar");
    };
    ConsultaComponent.prototype.open = function (content, body, asunto, modal, id_correo) {
        var _this = this;
        this.modal = modal;
        this.idCorreo = id_correo;
        if (this.modal == 1) {
            this.textoCorreo = body;
            this.asuntoCorreo = asunto;
        }
        else if (this.modal == 2) {
            this.textoCorreo = '<p>Selecciona a quienes serán enviados estos correos</p><p>En esta parte sólo se pueden enviar correos a cierto grupo de alumnos</p>';
            this.asuntoCorreo = 'Enviar correo: ' + asunto;
            this._catalogoService.consultaListaCorreo(this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.grupos = response['grupos'];
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsultaComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ConsultaComponent.prototype.enviarCorreo = function () {
        var _this = this;
        if (this.grupoForm.invalid) {
            Object.keys(this.grupoForm.controls).forEach(function (controlKey) {
                _this.grupoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        console.log(this.grupoForm.get('catGrupos').value, this.idCorreo);
        this.btnEnviar = true;
        this._correoService.enviarCorreo(this.idCorreo, this.jwt, this.grupoForm).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.modalService.dismissAll();
                _this.btnEnviar = false;
                alertify.success(response['msg']);
            }
            else {
                alertify.error(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.verLista = function () {
        var _this = this;
        var idGrupo = this.grupoForm.get('catGrupos').value;
        this.listaUsuarios = "";
        this._correoService.consultaLista(idGrupo, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.listaUsuarios = response['alumnos'];
            }
            else {
                _this.listaUsuarios = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/administracion/manejador-correo/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/administracion/manejador-correo/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _services_correo_service__WEBPACK_IMPORTED_MODULE_4__["CorreoService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \r\n<div class=\"col-md-12\">\r\n  <div class=\"row\">  \r\n    <div class=\"container\">                 \r\n      <div class=\"col-md-12\">\r\n        <form (ngSubmit)=\"enviarInformacion()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">{{'asuntoCorreo' | translate}}</label>\r\n            <input class=\"form-control\" type=\"text\">\r\n          </div>        \r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'copiaCorreo' | translate}}</label>\r\n                <input class=\"form-control\" type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'ocultaCorreo' | translate}}</label>\r\n                <input class=\"form-control\" type=\"text\">\r\n              </div> \r\n            </div>                           \r\n          </div>   \r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">{{'cuerpoCorreo' | translate}}</label>\r\n            <!-- <ckeditor [editor]=\"Editor\" [(ngModel)]=\"model.editorData\" (change)=\"datosEditor($event)\" name=\"ckeditor\"></ckeditor><br>    -->\r\n            <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"buttonDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n          </div>   \r\n        </form> \r\n      </div>\r\n    </div>       \r\n  </div>        \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmFjaW9uL21hbmVqYWRvci1jb3JyZW8vZWRpdGEtY29ycmVvL2VkaXRhLWNvcnJlby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditaCorreoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditaCorreoComponent", function() { return EditaCorreoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

var EditaCorreoComponent = /** @class */ (function () {
    //  public Editor = ClassicEditor;
    function EditaCorreoComponent(_usuarioService, _catalogoService) {
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this.breadcrum = [];
        this.estado = 0;
        this.buttonDisabled = false;
        this.title = 'Editar correo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.institucion = this._usuarioService.getRol();
    }
    EditaCorreoComponent.prototype.ngOnInit = function () {
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.model = {
            editorData: this.institucion.institucion + '<p><strong>LIGALIGA</strong></p><p><strong>USERUSER</strong></p><p><strong>PASSPASS</strong></p><br>'
        };
        /*this._catalogoService.consultaAlumno(this.jwt, '0,50').subscribe(
          response =>{
            console.log(response)
              if(response && response['status']){
                this.alumnos = response['alumno'];
                // this.alumnos.forEach(alumno => {
                //   console.log(alumno.alumno_id, alumno.alumno_nombre)
                // });
                console.log(response['alumno'].alumno_id)
              }
          },error =>{
            console.log(<any>error)
          });*/
    };
    /*datosEditor( { editor }: ChangeEvent ) {
      this.data = editor.getData();
      this.model.editorData = this.data;
      this.estado = 1;
      this.buttonDisabled = false;
    } */
    EditaCorreoComponent.prototype.enviarInformacion = function () {
        if (this.estado == 1) {
            console.log(this.data);
        }
        else {
            this.buttonDisabled = true;
            alertify.error("Debes editar el documento");
        }
    };
    EditaCorreoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edita-correo',
            template: __webpack_require__(/*! ./edita-correo.component.html */ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.html"),
            styles: [__webpack_require__(/*! ./edita-correo.component.scss */ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"]])
    ], EditaCorreoComponent);
    return EditaCorreoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/manejador-correo-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/manejador-correo-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ManejadorCorreoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejadorCorreoRoutingModule", function() { return ManejadorCorreoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manejador_correo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manejador-correo.component */ "./src/app/administracion/manejador-correo/manejador-correo.component.ts");
/* harmony import */ var _nuevo_correo_nuevo_correo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo-correo/nuevo-correo.component */ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/manejador-correo/consulta/consulta.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _manejador_correo_component__WEBPACK_IMPORTED_MODULE_2__["ManejadorCorreoComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_4__["ConsultaComponent"] },
            { path: 'nuevo', component: _nuevo_correo_nuevo_correo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoCorreoComponent"] },
            { path: 'editar/:id', component: _nuevo_correo_nuevo_correo_component__WEBPACK_IMPORTED_MODULE_3__["NuevoCorreoComponent"] }
        ]
    }
];
var ManejadorCorreoRoutingModule = /** @class */ (function () {
    function ManejadorCorreoRoutingModule() {
    }
    ManejadorCorreoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManejadorCorreoRoutingModule);
    return ManejadorCorreoRoutingModule;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/manejador-correo.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/manejador-correo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/manejador-correo.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/manejador-correo.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbWFuZWphZG9yLWNvcnJlby9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzdHJhY2lvbi9tYW5lamFkb3ItY29ycmVvL21hbmVqYWRvci1jb3JyZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRzY2hvb2wtY29sb3I6ICMxZTU3OTk7XHJcblxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1ICAgcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTsgXHJcbn1cclxuXHJcbi5hbGVydC1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuXHJcbi5pY29uLWVzdHVkeXtcclxuICAgIGNvbG9yOiAkc2Nob29sLWNvbG9yXHJcbn1cclxuLmJ0bi1lc3R1ZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nob29sLWNvbG9yO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1vZGFsLXhsIC5tb2RhbC1kaWFsb2cgeyBcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmZvbmRvIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/manejador-correo.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/manejador-correo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManejadorCorreoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejadorCorreoComponent", function() { return ManejadorCorreoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManejadorCorreoComponent = /** @class */ (function () {
    function ManejadorCorreoComponent(_usuarioService, _translate) {
        this._usuarioService = _usuarioService;
        this._translate = _translate;
        this._translate.setDefaultLang('es');
        this.title = "Administrador de correos";
        this._usuarioService.pushBreadcum(this.title, '/admin/manejador-correo', 1);
    }
    ManejadorCorreoComponent.prototype.ngOnInit = function () {
    };
    ManejadorCorreoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manejador-correo',
            template: __webpack_require__(/*! ./manejador-correo.component.html */ "./src/app/administracion/manejador-correo/manejador-correo.component.html"),
            styles: [__webpack_require__(/*! ./manejador-correo.component.scss */ "./src/app/administracion/manejador-correo/manejador-correo.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ManejadorCorreoComponent);
    return ManejadorCorreoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/manejador-correo.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/manejador-correo.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManejadorCorreoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManejadorCorreoModule", function() { return ManejadorCorreoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manejador_correo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manejador-correo-routing.module */ "./src/app/administracion/manejador-correo/manejador-correo-routing.module.ts");
/* harmony import */ var _manejador_correo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manejador-correo.component */ "./src/app/administracion/manejador-correo/manejador-correo.component.ts");
/* harmony import */ var _edita_correo_edita_correo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edita-correo/edita-correo.component */ "./src/app/administracion/manejador-correo/edita-correo/edita-correo.component.ts");
/* harmony import */ var _nuevo_correo_nuevo_correo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-correo/nuevo-correo.component */ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/administracion/manejador-correo/consulta/consulta.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/modules/layout/layout.module */ "./src/app/shared/modules/layout/layout.module.ts");
/* harmony import */ var _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ManejadorCorreoModule = /** @class */ (function () {
    function ManejadorCorreoModule() {
    }
    ManejadorCorreoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_manejador_correo_component__WEBPACK_IMPORTED_MODULE_4__["ManejadorCorreoComponent"], _edita_correo_edita_correo_component__WEBPACK_IMPORTED_MODULE_5__["EditaCorreoComponent"], _nuevo_correo_nuevo_correo_component__WEBPACK_IMPORTED_MODULE_6__["NuevoCorreoComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_7__["ConsultaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_12__["LanguageTranslationModule"],
                _manejador_correo_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManejadorCorreoRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
                _shared__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                _shared_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_10__["ArchivoModule"]
            ]
        })
    ], ManejadorCorreoModule);
    return ManejadorCorreoModule;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">  \r\n  <div class=\"col col-xl-12 col-lg-12\">\r\n    <div class=\"container\">  \r\n      <h4 class=\"top-buffer\">{{title}}</h4>\r\n      <div class=\"col-md-12\">\r\n        <form [formGroup]=\"correoForm\" (ngSubmit)=\"enviarInformacion()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">{{'asuntoCorreo' | translate}}</label>\r\n            <input formControlName=\"asuntoCorreo\" class=\"form-control\" type=\"text\">\r\n            <span class=\"invalidText\" *ngIf=\"f.asuntoCorreo.invalid && f.asuntoCorreo.touched\">\r\n              {{'fmErrText' | translate}}\r\n            </span>                 \r\n          </div>        \r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label >{{'copiaCorreo' | translate}}</label>\r\n                <input formControlName=\"copiaCorreo\" class=\"form-control\" type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'ocultaCorreo' | translate}}</label>\r\n                <input formControlName=\"ocultaCorreo\" class=\"form-control\" type=\"text\">\r\n              </div> \r\n            </div>                           \r\n          </div>  \r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'adjuntaCorreo' | translate}}</label>\r\n                <input formControlName=\"adjuntaCorreo\" (change)=\"cargaAdjunto($event)\" class=\"form-control\" type=\"file\">            \r\n              </div> \r\n            </div>\r\n            <div *ngIf=\"idCorreo\" class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">{{'archivoCorreo' | translate}}</label>\r\n                <app-archivo [urlBase]=\"archivos.datos\"></app-archivo>          \r\n              </div> \r\n            </div>            \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\">{{'cuerpoCorreo' | translate}}</label>\r\n            <!-- <ckeditor [editor]=\"Editor\" formControlName=\"textoCorreo\"  (change)=\"datosEditor($event)\" name=\"ckeditor\"></ckeditor><br>  -->\r\n            <ckeditor [config]=\"{allowedContent : true }\" formControlName=\"textoCorreo\" name=\"ckeditor\" (change)=\"datosEditor($event)\"></ckeditor><br>    \r\n            <button [hidden]=\"tipoAdmin == 0\" [disabled]=\"buttonDisabled\" type=\"submit\" class=\"btn btn-primary pull-right\">{{'fmSave' | translate}}</button>\r\n          </div>   \r\n        </form> \r\n      </div>\r\n    </div>       \r\n  </div>        \r\n</div>"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbWFuZWphZG9yLWNvcnJlby9udWV2by1jb3JyZW8vQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcc2hhcmVkXFxzdHlsZXNcXGZvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYWNpb24vbWFuZWphZG9yLWNvcnJlby9udWV2by1jb3JyZW8vbnVldm8tY29ycmVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NuevoCorreoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoCorreoComponent", function() { return NuevoCorreoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/catalogo.service */ "./src/app/services/catalogo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_correo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/correo.service */ "./src/app/administracion/manejador-correo/services/correo.service.ts");
/* harmony import */ var _models_archivo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/archivo */ "./src/app/models/archivo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NuevoCorreoComponent = /** @class */ (function () {
    function NuevoCorreoComponent(formBuilder, _usuarioService, _catalogoService, _correoService, router, route) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._catalogoService = _catalogoService;
        this._correoService = _correoService;
        this.router = router;
        this.route = route;
        this.breadcrum = [];
        this.estado = 0;
        this.buttonDisabled = true;
        this.estadoArchivo = false;
        this.archivos = new _models_archivo__WEBPACK_IMPORTED_MODULE_6__["Archivo"]();
        this.editorData = '<p>Hello, world!</p>';
        this.idCorreo = this.route.snapshot.paramMap.get('id');
        if (this.idCorreo)
            this.title = 'Editar correo';
        else
            this.title = 'Nuevo correo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
        this.institucion = this._usuarioService.getRol();
    }
    Object.defineProperty(NuevoCorreoComponent.prototype, "f", {
        get: function () { return this.correoForm.controls; },
        enumerable: true,
        configurable: true
    });
    NuevoCorreoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var identity = this._usuarioService.getIdentity();
        if (identity.administrador)
            this.tipoAdmin = identity.administrador.edicion;
        else
            this.tipoAdmin = 1;
        ;
        this.model = {
            editorData: this.institucion.institucion + '<p><strong>LIGALIGA</strong></p><p><strong>CURPCURP</strong></p><p><strong>USERUSER</strong></p><p><strong>PASSPASS</strong></p><br>'
        };
        this.correoForm = this.formBuilder.group({
            asuntoCorreo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            copiaCorreo: [''],
            ocultaCorreo: [''],
            adjuntaCorreo: [''],
            textoCorreo: [this.model.editorData]
        });
        if (this.idCorreo != null) {
            this._correoService.consultaCorreo(this.idCorreo, this.jwt).subscribe(function (response) {
                console.log(response);
                if (response && response['status']) {
                    _this.correos = response['correo'][0];
                    _this.directorio = _this.correos.correo_attachment;
                    _this.tipoDoc = _this.correos.correo_attachment.substr(8).split('.')[1];
                    _this.archivos.datos = { url: _this.directorio, tipo: _this.tipoDoc, icono: '' };
                    _this.correoForm.get('asuntoCorreo').setValue(_this.correos.correo_subject);
                    _this.correoForm.get('copiaCorreo').setValue(_this.correos.correo_cc);
                    _this.correoForm.get('ocultaCorreo').setValue(_this.correos.correo_bco);
                    _this.correoForm.get('textoCorreo').setValue(_this.correos.correo_body);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NuevoCorreoComponent.prototype.datosEditor = function (event) {
        this.data = event.editor.getData();
        console.log(this.data);
        this.estado = 1;
        this.buttonDisabled = false;
    };
    NuevoCorreoComponent.prototype.cargaAdjunto = function (evt) {
        this.archivo = evt.target.files[0];
        var ultimo = this.archivo.name.lastIndexOf('.');
        this.tipoDoc = this.archivo.name.substr(ultimo + 1);
        if (this.tipoDoc == 'docx' || this.tipoDoc == 'pdf' || this.tipoDoc == 'png' || this.tipoDoc == 'jpg') {
            this.estadoArchivo = true;
            alertify.success("Documento adjunto correcto");
        }
        else {
            this.estadoArchivo = false;
            alertify.error("Documento adjunto inválido");
        }
    };
    NuevoCorreoComponent.prototype.enviarInformacion = function () {
        var _this = this;
        if (this.correoForm.invalid) {
            Object.keys(this.correoForm.controls).forEach(function (controlKey) {
                _this.correoForm.controls[controlKey].markAsTouched();
            });
            return;
        }
        if (this.estado == 1 && this.estadoArchivo) {
            this._correoService.modificaCorreo(this.correoForm, this.jwt, this.idCorreo).subscribe(function (response) {
                if (response && response['status']) {
                    if (response['id_correo']) {
                        _this.idCorreo = response['id_correo'];
                    }
                    _this._correoService.enviarArchivo(_this.idCorreo, _this.jwt, _this.archivo).subscribe(function (respuesta) {
                        if (respuesta && respuesta['status']) {
                            alertify.success(respuesta['msg']);
                        }
                        else {
                            alertify.error(respuesta['msg']);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    _this.router.navigate(['admin/manejador-correo/consulta']);
                    alertify.success(response['msg']);
                }
                else {
                    alertify.error(response['msg']);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.buttonDisabled = true;
            if (this.estado = 0) {
                alertify.error("Debes editar el documento");
            }
            else if (!this.estadoArchivo) {
            }
        }
    };
    NuevoCorreoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo-correo',
            template: __webpack_require__(/*! ./nuevo-correo.component.html */ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.html"),
            styles: [__webpack_require__(/*! ./nuevo-correo.component.scss */ "./src/app/administracion/manejador-correo/nuevo-correo/nuevo-correo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_services_catalogo_service__WEBPACK_IMPORTED_MODULE_2__["CatalogoService"],
            _services_correo_service__WEBPACK_IMPORTED_MODULE_5__["CorreoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NuevoCorreoComponent);
    return NuevoCorreoComponent;
}());



/***/ }),

/***/ "./src/app/administracion/manejador-correo/services/correo.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/administracion/manejador-correo/services/correo.service.ts ***!
  \****************************************************************************/
/*! exports provided: CorreoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorreoService", function() { return CorreoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CorreoService = /** @class */ (function () {
    function CorreoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CorreoService.prototype.elimina = function (id, jwt) {
        var params = '?id_correo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'smtp/correo/elimina.php' + params);
    };
    CorreoService.prototype.consultaCorreo = function (id, jwt) {
        var params = '?id_correo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/smtp/correo/consulta.php' + params);
    };
    CorreoService.prototype.modificaCorreo = function (correo, jwt, id_correo) {
        var formData = new FormData();
        console.log(correo);
        formData.append('correo_from', '');
        formData.append('correo_to', '');
        formData.append('correo_cc', correo.get('copiaCorreo').value);
        formData.append('correo_bco', correo.get('ocultaCorreo').value);
        formData.append('correo_subject', correo.get('asuntoCorreo').value);
        formData.append('correo_body', correo.get('textoCorreo').value);
        formData.append('id_configuracion', '1');
        formData.append('id_correo_estatus', '1');
        formData.append('id_correo', id_correo);
        formData.append('estatus', '1');
        formData.append('jwt', jwt);
        var fd = new FormData();
        if (id_correo == null) { // INSERTA UN NUEVO REGISTRO
            return this._httpClient.post(this.url + 'smtp/correo/crea.php', formData);
        }
        else {
            return this._httpClient.post(this.url + 'smtp/correo/edita.php', formData);
        }
    };
    CorreoService.prototype.enviarArchivo = function (id_correo, jwt, file) {
        var formData = new FormData();
        formData.append('id_correo', id_correo);
        formData.append('fileToUpload', file);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/smtp/correo/carga_archivo.php', formData);
    };
    CorreoService.prototype.enviarCorreo = function (id_correo, jwt, grupo) {
        var formData = new FormData();
        formData.append('id_correo', id_correo);
        formData.append('id_grupo_correo', grupo.get('catGrupos').value);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + '/extras/correo/listaCorreos.php', formData);
    };
    CorreoService.prototype.consultaLista = function (id, jwt) {
        var params = '?id_correo_grupo=' + id;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'smtp/grupoCorreo/consulta_alumno.php' + params);
    };
    CorreoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CorreoService);
    return CorreoService;
}());



/***/ }),

/***/ "./src/app/models/archivo.ts":
/*!***********************************!*\
  !*** ./src/app/models/archivo.ts ***!
  \***********************************/
/*! exports provided: Archivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
var Archivo = /** @class */ (function () {
    function Archivo() {
        this.datos = { url: '', tipo: '', icono: '' };
    }
    return Archivo;
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


/***/ }),

/***/ "./src/app/services/catalogo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogoService = /** @class */ (function () {
    function CatalogoService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CatalogoService.prototype.consultaEstatusMateria = function () {
        return this._httpClient.get(this.url + 'catalogosLE/estatusMateria.php');
    };
    CatalogoService.prototype.consultaArea = function () {
        // var params = '?id_plan_estudio='+idPlan
        // params += '&id_plan_estudio='+idPlan;
        return this._httpClient.get(this.url + 'catalogosCE/consultaArea.php');
    };
    CatalogoService.prototype.consultaGrado = function (idPlan) {
        var params = '?id_plan_estudio=' + idPlan;
        return this._httpClient.get(this.url + 'admin/planEstudios/consultaOrdenJerarquico.php' + params);
    };
    CatalogoService.prototype.consultaCampus = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/campus.php' + params);
    };
    CatalogoService.prototype.consultaInstitucion = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?filtro=1';
        // params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/instituciones.php' + params);
    };
    CatalogoService.prototype.consultaTipoInst = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipo_instituciones.php' + params);
    };
    CatalogoService.prototype.consultaCarrera = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/carreras.php' + params);
    };
    CatalogoService.prototype.consultaCarreraAspirantes = function () {
        return this._httpClient.get(this.url + 'catalogos/carrerasAspirante.php');
    };
    CatalogoService.prototype.consultatipoPeriodo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoPeriodo.php' + params);
    };
    CatalogoService.prototype.consultaNivelEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/nivelestudios.php' + params);
    };
    CatalogoService.prototype.consultaEstatusAspirante = function () {
        return this._httpClient.get(this.url + 'catalogoSG/estatusAspirante.php');
    };
    CatalogoService.prototype.consultaEstatusCiclo = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/ciclo_estatus.php' + params);
    };
    CatalogoService.prototype.consultaCiclo = function () {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        // var params = '?jwt='+jwt
        return this._httpClient.get(this.url + 'catalogosCE/ciclo.php');
    };
    CatalogoService.prototype.consultaGrupo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogosCE/grupo.php' + params);
    };
    // consultaGruposPrimero(){
    //   return this._httpClient.get(this.url +'controlEscolar/ordenJerarquico/gruposPrimero.php');
    // }
    // // controlEscolar\ordenJerarquico\gruposPrimero.php
    CatalogoService.prototype.consultatipoAsignatura = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/tipoAsignatura.php' + params);
    };
    CatalogoService.prototype.consultaRol = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        params += '&filtro=1';
        return this._httpClient.get(this.url + 'catalogos/planEstudios.php' + params);
    };
    CatalogoService.prototype.consultatipoPlanEstudios = function (jwt) {
        /*if(token != null){
          console.log(token);
          user.gettoken = token;
        }*/
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/tipoPlanEstudios.php' + params);
    };
    CatalogoService.prototype.consultaAsignaturaTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/asignaturas.php' + params);
    };
    CatalogoService.prototype.consultaUsuario = function (jwt, limite) {
        var params = '?jwt=' + jwt;
        params += '&limite=' + limite;
        return this._httpClient.get(this.url + 'catalogos/usuario.php' + params);
    };
    CatalogoService.prototype.consultaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/correos.php' + params);
    };
    CatalogoService.prototype.consultaRolTabla = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/rol.php' + params);
    };
    CatalogoService.prototype.consultaListaCorreo = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'catalogos/grupoCorreo.php' + params);
    };
    CatalogoService.prototype.consultaPrivilegios = function (jwt, muestraEstatus) {
        var params = '?jwt=' + jwt;
        params += '&muestra_estatus=' + muestraEstatus;
        return this._httpClient.get(this.url + 'catalogos/privilegios.php' + params);
    };
    CatalogoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CatalogoService);
    return CatalogoService;
}());



/***/ })

}]);
//# sourceMappingURL=administracion-manejador-correo-manejador-correo-module.js.map