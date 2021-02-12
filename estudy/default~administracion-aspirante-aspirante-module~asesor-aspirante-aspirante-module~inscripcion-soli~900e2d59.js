(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-aspirante-aspirante-module~asesor-aspirante-aspirante-module~inscripcion-soli~900e2d59"],{

/***/ "./src/app/components/form-generator/form-generator.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-generator/form-generator.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 mt-4\" *ngIf=\"bandera\">\r\n  <div class=\"mb-3\">\r\n    <h4 [innerHTML]=Formulario.titulo></h4>\r\n    <div [innerHTML]=Formulario.instruccion></div>\r\n    <p class=\"mt-3\"><b>Los campos con (*) son obligatorios.</b></p>\r\n  </div>\r\n  <form [formGroup]=\"generatorForm\" (submit)=\"guardarFormulario()\" class=\"mb-5 row\">\r\n    <div formArrayName=\"preguntas\" [ngClass]=\"[generatorForm.get('preguntas').controls.length > 5? 'col-6': 'col-12',\r\n      pregunta.controls.campo_formulario_id? '' : 'd-none']\"\r\n      *ngFor=\"let pregunta of generatorForm.get('preguntas').controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <div *ngIf=\"pregunta.controls.campo_formulario_id\">\r\n          <label> <span *ngIf=\"pregunta.controls.id\">{{ pregunta.controls.id.value }}. </span> \r\n            <span *ngIf=\"pregunta.controls.obligatorio.value == '1'\"> * </span>\r\n            {{pregunta.controls.pregunta.value}}\r\n          </label>\r\n\r\n          <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'text' || pregunta.controls.tipo.value == 'number'\" >\r\n            <input placeholder=\"{{pregunta.controls.descripcion.value}}\" formControlName=\"respuesta\" type=\"{{pregunta.controls.tipo.value}}\" id=\"p_{{pregunta.controls.campo_formulario_id.value}}\" class=\"form-control\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'radio'\">\r\n            <div *ngFor=\"let reactivo of pregunta.controls.reactivos.controls; let j = index\">\r\n              <input formControlName=\"respuesta\" [value]=\"reactivo.controls.texto.value\" class=\"ml-2\" type=\"radio\" id=\"r_{{reactivo.controls.id_reactivo.value}}\">\r\n              <span class=\"ml-2 form-check-label\" attr.for=\"r_{{reactivo.controls.id_reactivo.value}}\">{{reactivo.controls.texto.value}}</span>\r\n            </div>\r\n            <input *ngIf=\"pregunta.controls.otro\" formControlName=\"otro\" class=\"form-control mt-2\" type=\"text\" placeholder=\"Escribe tu respuesta\">\r\n          </div>\r\n\r\n          <div class=\"form-group ml-2\" *ngIf=\"pregunta.controls.tipo.value == 'checkbox'\">\r\n            <div [formArrayName]=\"'reactivos'\">\r\n              <div *ngFor=\"let reactivo of pregunta.controls.respuesta.controls.reactivos.controls; let k = index\" [formGroup]=\"reactivo\">\r\n                <input type=\"checkbox\" formControlName=\"checkbox\" id=\"{{reactivo.controls.id_reactivo.value}}\">\r\n                <span class=\"ml-2 form-check-label\" attr.for=\"{{reactivo.controls.id_reactivo.value}}\">{{reactivo.controls.texto.value}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'select'\">\r\n            <select class=\"form-control\" formControlName=\"respuesta\">\r\n              <option hidden value=\"\" disabled  selected>{{pregunta.controls.descripcion.value}}</option>\r\n              <option *ngFor=\"let opcion of pregunta.controls.reactivos.controls\" [value]=\"opcion.controls.texto.value\">{{opcion.controls.texto.value}}</option>\r\n            </select>\r\n            <input *ngIf=\"pregunta.controls.otro\" formControlName=\"otro\" class=\"form-control mt-2\" type=\"text\" placeholder=\"Escribe tu respuesta\">\r\n          </div>\r\n          \r\n          <div class=\"form-group\" *ngIf=\"pregunta.controls.tipo.value == 'textarea'\" >\r\n            <textarea placeholder=\"{{pregunta.controls.descripcion.value}}\" formControlName=\"respuesta\" id=\"t_{{pregunta.controls.campo_formulario_id.value}}\" rows=\"4\" class=\"form-control\"></textarea>\r\n          </div>\r\n\r\n          <span *ngIf=\"( ( pregunta.dirty || pregunta.touched ) && pregunta.invalid ) && pregunta.controls.obligatorio.value == 1\" class=\"text-danger\">\r\n            {{pregunta.controls.mensaje_error.value}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"col-12\">\r\n      <button type=\"button\" class=\"btn btn-light mt-3\" (click)=\"editarInformacion()\" *ngIf=\"contestado.contestado\">Editar</button>\r\n      <button type=\"submit\" class=\"btn btn-success pull-right mt-3\" [disabled]=\"generatorForm.invalid || contestado.contestado\">Guardar información</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/form-generator/form-generator.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-generator/form-generator.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLWdlbmVyYXRvci9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tZ2VuZXJhdG9yL2Zvcm0tZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6ICAjZGMzNTQ1OyBcclxufVxyXG4ubmctdmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47IFxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/form-generator/form-generator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-generator/form-generator.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGeneratorComponent", function() { return FormGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-generator.service */ "./src/app/components/form-generator/form-generator.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormGeneratorComponent = /** @class */ (function () {
    function FormGeneratorComponent(formBuilder, _formGeneratorService, _usuarioService) {
        this.formBuilder = formBuilder;
        this._formGeneratorService = _formGeneratorService;
        this._usuarioService = _usuarioService;
        this.bandera = false;
        this.Items = ['item', 'item', 'item', 'item', 'item', 'item', 'item'];
        this.editar = false;
        this.cargado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormGeneratorComponent.prototype.ngOnChanges = function () {
        this.jwt = this._usuarioService.getJWT();
        this.bandera = false;
        this.editar = false;
        this.consultaFormulario();
    };
    FormGeneratorComponent.prototype.consultaFormulario = function () {
        var _this = this;
        this._formGeneratorService.consultaFormulario(this.jwt, this.idFormulario, this.idAspirante).subscribe(function (response) {
            if (response && response['status']) {
                _this.Formulario = response['formulario'];
                _this.generatorForm = _this.formBuilder.group({
                    titulo: _this.Formulario.titulo,
                    instruccion: _this.Formulario.instruccion,
                    // preguntas: this.formBuilder.array([])
                    preguntas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](_this.Formulario[0].map(function (item) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}); }))
                });
                _this.addItem();
            }
            else {
                _this.bandera = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    FormGeneratorComponent.prototype.addItem = function () {
        var _this = this;
        this.Formulario[0].forEach(function (pregunta) {
            if (pregunta.campo_formulario_padre_id == null && pregunta.condicional == null) {
                _this.generateItem(pregunta);
            }
        });
        this.setIndex();
        this.bandera = true;
        this.cargado.emit(true);
    };
    FormGeneratorComponent.prototype.generateItem = function (pregunta) {
        var _this = this;
        var i = this.Formulario[0].map(function (e) { return e.campo_formulario_id; }).indexOf(pregunta.campo_formulario_id);
        this.datos = this.generatorForm.get('preguntas');
        this.datos.removeAt(i);
        this.datos.insert(i, this.createItem(pregunta));
        var tipoValidacion = "null";
        var Respuesta = "";
        var Deshabilitado = false;
        var Eliminar = true;
        if (pregunta.obligatorio == "1") {
            tipoValidacion = "required";
        }
        if (pregunta.respuesta.length > 0 && pregunta.tipo != 'checkbox') {
            Respuesta = pregunta.respuesta[0].respuesta;
            if (!this.editar) {
                Deshabilitado = true;
            }
        }
        else if (pregunta.respuesta.length > 0 && pregunta.tipo == 'checkbox') {
            Respuesta = pregunta.respuesta;
            if (!this.editar) {
                Deshabilitado = true;
            }
        }
        // if (this.idRol == 1) {
        //   Deshabilitado = true;
        // }          
        if (pregunta.tipo != 'radio' && pregunta.tipo != 'checkbox') {
            if (pregunta.tipo == 'text' && pregunta.regex) {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(pregunta.regex),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]
                ]));
                this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
            }
            else {
                this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]));
            }
            // if (pregunta.obligatorio) {
            //   this.generatorForm["controls"].preguntas["controls"][i].controls.respuesta.setValidators(Validators.required);
            //   this.generatorForm["controls"].preguntas["controls"][i].controls.respuesta.updateValueAndValidity();      
            // }
        }
        if (pregunta.reactivos) {
            this.generatorForm["controls"].preguntas["controls"][i].addControl('reactivos', this.formBuilder.array([]), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]));
            pregunta.reactivos.forEach(function (reactivo) {
                _this.datos.controls[i]["controls"].reactivos.push(_this.createReactive(reactivo, pregunta.campo_formulario_id));
            });
            if (pregunta.campo_formulario_padre_id != null && pregunta.condicional != null) {
                Eliminar = false;
            }
            if (pregunta.tipo == 'select') {
                if (Respuesta == "" || this.editar)
                    this.valueChanges(i, Eliminar);
                else if (Respuesta != "")
                    this.setValues(Respuesta, i);
            }
            if (pregunta.tipo == 'radio') {
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Respuesta, disabled: Deshabilitado }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]);
                this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', control);
                if (Respuesta == "" || this.editar) {
                    this.valueChanges(i, Eliminar);
                }
                else if (Respuesta != "") {
                    this.setValues(Respuesta, i);
                }
            }
            else if (pregunta.tipo == 'checkbox') {
                this.generatorForm["controls"].preguntas["controls"][i].addControl('respuesta', this.createArrayCheckbox(pregunta.reactivos, tipoValidacion, pregunta.campo_formulario_id, Respuesta, Deshabilitado));
            }
            // this.generatorForm["controls"].preguntas["controls"][i].addControl('respuestaCheckbox', this.formBuilder.group({
            //   valores: this.createArrayCheckbox()
            // }));
        }
    };
    FormGeneratorComponent.prototype.createItem = function (datos) {
        return this.formBuilder.group({
            campo_formulario_id: datos.campo_formulario_id,
            pregunta: datos.pregunta,
            descripcion: datos.descripcion,
            tipo: datos.tipo,
            obligatorio: datos.obligatorio,
            mensaje_error: datos.mensaje_error,
            campo_formulario_padre_id: datos.campo_formulario_padre_id,
            condicional: datos.condicional
        });
    };
    FormGeneratorComponent.prototype.createReactive = function (datos, campo_id) {
        return this.formBuilder.group({
            id_reactivo: datos.id_reactivo,
            texto: datos.texto,
            campo_formulario_id: campo_id
        });
    };
    FormGeneratorComponent.prototype.valueChanges = function (i, eliminar) {
        var _this = this;
        if (eliminar === void 0) { eliminar = true; }
        this.generatorForm["controls"].preguntas["controls"][i].get('respuesta').valueChanges.subscribe(function (value) {
            _this.setValues(value, i, eliminar);
            _this.setIndex();
        });
        if (this.editar) {
            var value = this.generatorForm["controls"].preguntas["controls"][i].get('respuesta').value;
            this.setValues(value, i, eliminar);
        }
    };
    FormGeneratorComponent.prototype.deleteItem = function (pregunta) {
        this.datos = this.generatorForm.get('preguntas');
        var i = this.Formulario[0].map(function (e) { return e.campo_formulario_id; }).indexOf(pregunta.campo_formulario_id);
        this.datos.removeAt(i);
        this.datos.insert(i, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}));
    };
    FormGeneratorComponent.prototype.setValues = function (respuesta, i, eliminar) {
        var _this = this;
        if (eliminar === void 0) { eliminar = false; }
        var reactivosValue = this.generatorForm["controls"].preguntas["controls"][i].get('reactivos').value.slice();
        if (respuesta.trim().toLowerCase() == 'otro' || respuesta.trim().toLowerCase() == 'otra') {
            this.generatorForm["controls"].preguntas["controls"][i]
                .addControl('otro', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        }
        else {
            if (this.generatorForm["controls"].preguntas["controls"][i].get('otro')) {
                this.generatorForm["controls"].preguntas["controls"][i].removeControl('otro');
            }
        }
        var selected = reactivosValue.find(function (res) { return res.texto == respuesta; });
        var reactiveChild = this.Formulario[0].filter(function (res) {
            return res.campo_formulario_padre_id == selected.campo_formulario_id && res.condicional == selected.id_reactivo;
        });
        var toEliminate;
        if (!eliminar) {
            toEliminate = this.generatorForm.get('preguntas').value.filter(function (res) {
                return res.campo_formulario_padre_id == selected.campo_formulario_id && res.condicional != selected.id_reactivo;
            });
        }
        else if (eliminar) {
            toEliminate = this.generatorForm.get('preguntas').value.filter(function (res) {
                return res.campo_formulario_padre_id != null && res.condicional != null && res.campo_formulario_padre_id == selected.campo_formulario_id;
            });
        }
        if (toEliminate && toEliminate.length > 0) {
            toEliminate.forEach(function (reactivo) {
                _this.deleteItem(reactivo);
            });
        }
        if (reactiveChild && reactiveChild.length > 0) {
            reactiveChild.forEach(function (reactivo) {
                _this.generateItem(reactivo);
            });
        }
    };
    FormGeneratorComponent.prototype.createArrayCheckbox = function (inputs, tipoValidacion, idPregunta, respuestas, disabled) {
        var _this = this;
        var checkboxGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](inputs.map(function (item) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id_reactivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.id_reactivo),
            texto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.texto),
            checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: getSelected(item.texto), disabled: disabled })
        }); }));
        function getSelected(item) {
            var dato = respuestas.find(function (res) { return res.respuesta == item; });
            if (dato) {
                return true;
            }
            return false;
        }
        var hiddenControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.mapItems(checkboxGroup.value), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][tipoValidacion]);
        checkboxGroup.valueChanges.subscribe(function (valor) {
            hiddenControl.setValue(_this.mapItems(valor, idPregunta));
        });
        return this.formBuilder.group({
            reactivos: checkboxGroup,
            seleccionados: hiddenControl
        });
    };
    FormGeneratorComponent.prototype.mapItems = function (items, idPregunta) {
        if (idPregunta === void 0) { idPregunta = 0; }
        var selectedItems = items.filter(function (item) { return item.checkbox; }).map(function (item) {
            return ({ id_reactivo: item.id_reactivo, texto: item.texto, campo_formulario_id: idPregunta });
        });
        return selectedItems.length ? selectedItems : null;
    };
    FormGeneratorComponent.prototype.guardarFormulario = function () {
        alertify.confirm('Mensaje de la plataforma', '¿Deseas guardar la información?', function () {
            var _this = this;
            this.generatorForm.setErrors({ 'invalid': true });
            var form = this.generatorForm.get('preguntas').value;
            var Formulario = [];
            form.forEach(function (val) {
                if (val.campo_formulario_id) {
                    if (val.otro) {
                        val.respuesta = val.otro;
                    }
                    Formulario.push(val);
                }
            });
            this._formGeneratorService.enviaFormulario(this.jwt, Formulario, this.idFormulario, this.editar, this.idAspirante).subscribe(function (response) {
                if (response && response['status']) {
                    _this.setId.emit(_this.idFormulario);
                    alertify.success(response['msg']).dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    FormGeneratorComponent.prototype.editarInformacion = function () {
        this.editar = true;
        this.contestado = 0;
        this.addItem();
    };
    FormGeneratorComponent.prototype.setIndex = function () {
        var _this = this;
        var index = 1;
        this.generatorForm.get('preguntas')['controls'].forEach(function (pregunta, i) {
            if (Object.entries(pregunta['controls']).length > 0) {
                _this.generatorForm.get('preguntas')['controls'][i].removeControl('id');
                _this.generatorForm.get('preguntas')['controls'][i].addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](index));
                index++;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormGeneratorComponent.prototype, "idRol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormGeneratorComponent.prototype, "idFormulario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormGeneratorComponent.prototype, "contestado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FormGeneratorComponent.prototype, "idAspirante", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormGeneratorComponent.prototype, "idCarrera", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormGeneratorComponent.prototype, "cargado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormGeneratorComponent.prototype, "setId", void 0);
    FormGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-generator',
            template: __webpack_require__(/*! ./form-generator.component.html */ "./src/app/components/form-generator/form-generator.component.html"),
            styles: [__webpack_require__(/*! ./form-generator.component.scss */ "./src/app/components/form-generator/form-generator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _form_generator_service__WEBPACK_IMPORTED_MODULE_2__["FormGeneratorService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], FormGeneratorComponent);
    return FormGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/components/form-generator/form-generator.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-generator/form-generator.service.ts ***!
  \*********************************************************************/
/*! exports provided: FormGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGeneratorService", function() { return FormGeneratorService; });
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




var FormGeneratorService = /** @class */ (function () {
    function FormGeneratorService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    FormGeneratorService.prototype.consultaFormulario = function (jwt, id_formulario, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id=' + id_formulario;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/formulario/consulta.php' + params);
    };
    FormGeneratorService.prototype.enviaFormulario = function (jwt, form, id_formulario, editar, id_aspirante) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        formData.append('formulario_id', id_formulario);
        formData.append('aspirante_id', id_aspirante);
        form.forEach(function (pregunta) {
            if (pregunta.tipo == "checkbox") {
                pregunta.respuesta.seleccionados.forEach(function (respuesta) {
                    formData.append('campo_formulario_id[]', respuesta.campo_formulario_id);
                    formData.append('respuesta[]', respuesta.texto);
                });
            }
            else {
                formData.append('campo_formulario_id[]', pregunta.campo_formulario_id);
                formData.append('respuesta[]', pregunta.respuesta);
            }
        });
        if (!editar) {
            return this._httpClient.post(this.url + 'seguimiento/aspirante/guardarFormulario.php', formData);
        }
        return this._httpClient.post(this.url + 'seguimiento/aspirante/editaFormulario.php', formData);
    };
    FormGeneratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FormGeneratorService);
    return FormGeneratorService;
}());



/***/ }),

/***/ "./src/app/inscripcion/cleaver/cleaver-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/inscripcion/cleaver/cleaver-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CleaverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleaverRoutingModule", function() { return CleaverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cleaver_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleaver.component */ "./src/app/inscripcion/cleaver/cleaver.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _cleaver_component__WEBPACK_IMPORTED_MODULE_2__["CleaverComponent"] }
];
var CleaverRoutingModule = /** @class */ (function () {
    function CleaverRoutingModule() {
    }
    CleaverRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CleaverRoutingModule);
    return CleaverRoutingModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/cleaver/cleaver.component.html":
/*!************************************************************!*\
  !*** ./src/app/inscripcion/cleaver/cleaver.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3 mb-3\" *ngIf=\"bandera && cleaverCompleto == '0'\">\r\n    <div class=\"col-12\">\r\n        <div>\r\n            <h4>Prueba de Cleaver</h4>\r\n            <p>\r\n                A continuación, te mostraremos un grupo de palabras. Deberás seleccionar una palabra que mejor te describa en tu forma habitual de ser en el día a día.<br><br> En este test no hay respuestas incorrectas o correctas, selecciona la palabra\r\n                que coincida más contigo. No te presiones y elije lo que más te caracterice.<br><br> Solo podrás seleccionar una palabra que <b>MÁS</b> te describa y una palabra que <b>MENOS</b> te describa del conjunto de palabras.\r\n            </p>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n            <form [formGroup]=\"reactivosForm\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th></th>\r\n                            <th>Más</th>\r\n                            <th>Menos</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <div formArrayName=\"reactivos\" style=\"display: table-row-group;\">\r\n                        <div [formGroupName]=\"i\" *ngFor=\"let reactivo of reactivosForm.get('reactivos').controls; let i = index\" style=\"display: table-row;\">\r\n                            <td>{{reactivo.controls.nombre_reactivo.value}}</td>\r\n                            <!-- <td><input formControlName=\"respuesta\" (click)=\"guardarRespuesta(2, i)\" type=\"radio\" value=\"2\"></td> -->\r\n                            <td>\r\n                                <div class=\"custom-control custom-radio\">\r\n                                    <input formControlName=\"respuesta\" (click)=\"seleccionaRespuesta(2, i)\" type=\"radio\" class=\"custom-control-input\" id=\"rm_{{i}}\" value=\"2\">\r\n                                    <label class=\"custom-control-label\" for=\"rm_{{i}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                <div class=\"custom-control custom-radio\">\r\n                                    <input formControlName=\"respuesta\" (click)=\"seleccionaRespuesta(1, i)\" type=\"radio\" class=\"custom-control-input\" id=\"rl_{{i}}\" value=\"1\">\r\n                                    <label class=\"custom-control-label\" for=\"rl_{{i}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                            <!-- <td><input formControlName=\"respuesta\" (click)=\"guardarRespuesta(1, i)\" type=\"radio\" value=\"1\"></td> -->\r\n                        </div>\r\n                    </div>\r\n\r\n                </table>\r\n                <div class=\"d-flex flex-row bd-highlight mb-3\">\r\n                    <div class=\"p-2 bd-highlight\">\r\n                        <button [disabled]=\"idRol == 1\" *ngIf=\"seccion > 0\" type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"changeSeccion(0, 0)\">\r\n              <i *ngIf=\"cargando\" class=\"fa fa-spin fa-spinner\"></i> Reiniciar prueba</button>\r\n                    </div>\r\n                    <div class=\"p-2 bd-highlight\">\r\n                        <div class=\"bd-highlight pl-5 pr-5 pt-2\">Página {{seccion + 1}} de {{Reactivos.length / 4}}</div>\r\n                    </div>\r\n                    <div class=\"p-2 bd-highlight\">\r\n                        <button [disabled]=\"error\" type=\"button\" class=\"btn btn-success pull-right\" (click)=\"changeSeccion(seccion + 1)\">\r\n              <i *ngIf=\"cargando\" class=\"fa fa-spin fa-spinner\"></i> {{botonName}}</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row mt-3\" *ngIf=\"cleaverCompleto == '1'\">\r\n    <div class=\"col-12\">\r\n        <div class=\"alert alert-success\"><i class=\"fa fa-check\"></i> Prueba de cleaver contestada correctamente</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/inscripcion/cleaver/cleaver.component.scss":
/*!************************************************************!*\
  !*** ./src/app/inscripcion/cleaver/cleaver.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXBjaW9uL2NsZWF2ZXIvY2xlYXZlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/inscripcion/cleaver/cleaver.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/inscripcion/cleaver/cleaver.component.ts ***!
  \**********************************************************/
/*! exports provided: CleaverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleaverComponent", function() { return CleaverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cleaver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cleaver.service */ "./src/app/inscripcion/services/cleaver.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CleaverComponent = /** @class */ (function () {
    function CleaverComponent(_usuarioService, _cleaverService, formBuilder) {
        this._usuarioService = _usuarioService;
        this._cleaverService = _cleaverService;
        this.formBuilder = formBuilder;
        this.seccion = 0;
        this.bandera = false;
        this.error = true;
        this.botonName = "Siguiente";
        this.cargando = false;
        this.disabled = false;
        this.finalizado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CleaverComponent.prototype.ngOnInit = function () {
        if (this.idRol == 1) {
            this.disabled = true;
        }
        this.jwt = this._usuarioService.getJWT();
        this.consulta();
    };
    CleaverComponent.prototype.consulta = function () {
        var _this = this;
        this._cleaverService.consulta(this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.Reactivos = response['reactivos'];
                _this.consultaContestadas();
            }
        }, function (error) {
            console.log(error);
        });
    };
    CleaverComponent.prototype.consultaContestadas = function () {
        var _this = this;
        this._cleaverService.preguntasContestadas(this.jwt, this.idAspirante).subscribe(function (response) {
            if (response) {
                _this.seccion = parseInt(response['sector']);
                console.log(_this.seccion);
                if (_this.seccion == 23) {
                    _this.botonName = "Finalizar";
                }
                if (_this.seccion < 24) {
                    var numSecciones = _this.Reactivos.length / 4;
                    _this.reactivosSeccion = new Array(numSecciones);
                    var index = 0;
                    for (var i = 0; i < _this.reactivosSeccion.length; i++) {
                        _this.reactivosSeccion[i] = new Array();
                    }
                    for (var i = 0; i < _this.reactivosSeccion.length; i++) {
                        for (var j = 0; j < 4; j++) {
                            _this.reactivosSeccion[i].push(_this.Reactivos[index]);
                            index++;
                        }
                    }
                    _this.reactivosForm = _this.formBuilder.group({
                        reactivos: _this.formBuilder.array([])
                    });
                    _this.addReactivos();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CleaverComponent.prototype.addReactivos = function () {
        var _this = this;
        this.reactivosSeccion[this.seccion].map(function (reactivo) {
            _this.reactivos = _this.reactivosForm.get('reactivos');
            _this.reactivos.push(_this.createReactivo(reactivo));
        });
        this.bandera = true;
    };
    CleaverComponent.prototype.createReactivo = function (datos) {
        return this.formBuilder.group({
            respuesta: [{ value: '', disabled: this.disabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            nombre_reactivo: datos.nombre_reactivo,
            cleaver_base_id: datos.cleaver_base_id
        });
    };
    CleaverComponent.prototype.seleccionaRespuesta = function (valor, index) {
        var _this = this;
        var id_cleaver = this.reactivosSeccion[this.seccion][index].cleaver_base_id;
        var leftFlag = false;
        var rightFlag = false;
        setTimeout(function () {
            _this.reactivosForm.controls.reactivos['controls'].forEach(function (reactivo) {
                if (reactivo.controls.cleaver_base_id.value != id_cleaver && reactivo.controls.respuesta.value == "2" && valor == 2) {
                    reactivo.controls.respuesta.setValue('');
                }
                else if (reactivo.controls.cleaver_base_id.value != id_cleaver && reactivo.controls.respuesta.value == "1" && valor == 1) {
                    reactivo.controls.respuesta.setValue('');
                }
                if (reactivo.controls.respuesta.value == "2")
                    leftFlag = true;
                if (reactivo.controls.respuesta.value == "1")
                    rightFlag = true;
            });
            if (leftFlag && rightFlag)
                _this.error = false;
            else
                _this.error = true;
        }, 1);
    };
    CleaverComponent.prototype.changeSeccion = function (index, tipo) {
        var _this = this;
        if (tipo === void 0) { tipo = 1; }
        if (tipo == 1) {
            this.error = true;
            this.cargando = true;
            var datos = this.reactivosForm.controls.reactivos.value.filter(function (res) { return res.respuesta == "2" || res.respuesta == "1"; });
            this._cleaverService.guardaRespuesta(this.jwt, datos).subscribe(function (response) {
                if (response && response['status']) {
                    if (index < _this.reactivosSeccion.length) {
                        _this.setSection(index);
                    }
                    else {
                        _this._cleaverService.finalizarFormulario(_this.jwt).subscribe(function (response) {
                            if (response && response['status']) {
                                _this.finalizado.emit("terminado");
                                _this.cargando = false;
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
        }
        else if (tipo == 0) {
            alertify.confirm('Reiniciar prueba de Cleaver', '¿Deseas realizar un nuevo intento?', function () {
                var _this = this;
                this._cleaverService.borraFormulario(this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.setSection(0);
                        alertify.success(response['msg']).dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }.bind(this), function () {
                alertify.error('Cancelado');
            });
        }
    };
    CleaverComponent.prototype.setSection = function (index) {
        var _this = this;
        this.bandera = false;
        this.seccion = index;
        if (this.seccion == 23) {
            this.botonName = "Finalizar";
        }
        else {
            this.botonName = "Siguiente";
        }
        var idx = 0;
        this.reactivosForm.controls.reactivos['controls'].forEach(function (reactivo) {
            reactivo.controls.respuesta.setValue('');
            reactivo.controls.nombre_reactivo.setValue(_this.reactivosSeccion[_this.seccion][idx]['nombre_reactivo']);
            reactivo.controls.cleaver_base_id.setValue(_this.reactivosSeccion[_this.seccion][idx]['cleaver_base_id']);
            idx++;
        });
        setTimeout(function () {
            _this.bandera = true;
            _this.cargando = false;
        }, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CleaverComponent.prototype, "finalizado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CleaverComponent.prototype, "cleaverCompleto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CleaverComponent.prototype, "idRol", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CleaverComponent.prototype, "idAspirante", void 0);
    CleaverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cleaver',
            template: __webpack_require__(/*! ./cleaver.component.html */ "./src/app/inscripcion/cleaver/cleaver.component.html"),
            styles: [__webpack_require__(/*! ./cleaver.component.scss */ "./src/app/inscripcion/cleaver/cleaver.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _services_cleaver_service__WEBPACK_IMPORTED_MODULE_1__["CleaverService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CleaverComponent);
    return CleaverComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/cleaver/cleaver.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/inscripcion/cleaver/cleaver.module.ts ***!
  \*******************************************************/
/*! exports provided: CleaverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleaverModule", function() { return CleaverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cleaver_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleaver-routing.module */ "./src/app/inscripcion/cleaver/cleaver-routing.module.ts");
/* harmony import */ var _cleaver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleaver.component */ "./src/app/inscripcion/cleaver/cleaver.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CleaverModule = /** @class */ (function () {
    function CleaverModule() {
    }
    CleaverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_cleaver_component__WEBPACK_IMPORTED_MODULE_3__["CleaverComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cleaver_routing_module__WEBPACK_IMPORTED_MODULE_2__["CleaverRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_cleaver_component__WEBPACK_IMPORTED_MODULE_3__["CleaverComponent"]]
        })
    ], CleaverModule);
    return CleaverModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/inscripcion.service.ts":
/*!****************************************************!*\
  !*** ./src/app/inscripcion/inscripcion.service.ts ***!
  \****************************************************/
/*! exports provided: InscripcionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionService", function() { return InscripcionService; });
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




var InscripcionService = /** @class */ (function () {
    function InscripcionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    InscripcionService.prototype.consultaAspirante = function (id_aspirante) {
        var params = '?id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/aspirante/consulta.php' + params);
    };
    InscripcionService.prototype.insertaRegistro = function (signupForm, color, tipo) {
        var formData = new FormData();
        formData.append('nombre', signupForm.get('nombre').value);
        formData.append('primer_apellido', signupForm.get('primer_apellido').value);
        formData.append('segundo_apellido', signupForm.get('segundo_apellido').value);
        formData.append('email', signupForm.get('email').value);
        formData.append('celular', signupForm.get('numero').value);
        //formData.append('clave_aspirante', signupForm.get('claveElector').value);
        formData.append('carrera_id', signupForm.get('carrera').value);
        formData.append('curp', signupForm.get('curp').value);
        formData.append('promocion', signupForm.get('codPromo').value);
        formData.append('color', color);
        if (tipo == 0) {
            return this._httpClient.post(this.url + 'seguimiento/aspirante/registro.php', formData);
        }
        else if (tipo == 1) {
            return this._httpClient.post(this.url + 'asesor/aspirante/registro.php', formData);
        }
    };
    InscripcionService.prototype.validaCodigo = function (codigo) {
        var params = '?clave_promocion=' + codigo;
        // params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/promocion/consultaClave.php' + params);
    };
    InscripcionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InscripcionService);
    return InscripcionService;
}());



/***/ }),

/***/ "./src/app/inscripcion/services/cleaver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/inscripcion/services/cleaver.service.ts ***!
  \*********************************************************/
/*! exports provided: CleaverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleaverService", function() { return CleaverService; });
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




var CleaverService = /** @class */ (function () {
    function CleaverService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    CleaverService.prototype.consulta = function (jwt) {
        var params = '?jwt=' + jwt;
        return this._httpClient.get(this.url + 'seguimiento/formularioCleaver/consulta.php' + params);
    };
    CleaverService.prototype.preguntasContestadas = function (jwt, id_aspirante) {
        var params = '?jwt=' + jwt;
        params += '&id_aspirante=' + id_aspirante;
        return this._httpClient.get(this.url + 'seguimiento/formularioCleaver/preguntasContestadas.php' + params);
    };
    CleaverService.prototype.guardaRespuesta = function (jwt, datos) {
        var formData = new FormData();
        datos.forEach(function (dato) {
            formData.append('respuesta_id[]', dato.respuesta);
            formData.append('cleaver_base[]', dato.cleaver_base_id);
        });
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'seguimiento/formularioCleaver/inserta.php', formData);
    };
    CleaverService.prototype.finalizarFormulario = function (jwt) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'seguimiento/formularioCleaver/finalizarFormulario.php', formData);
    };
    CleaverService.prototype.borraFormulario = function (jwt) {
        var formData = new FormData();
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'seguimiento/formularioCleaver/reintento.php', formData);
    };
    CleaverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CleaverService);
    return CleaverService;
}());



/***/ }),

/***/ "./src/app/inscripcion/solicitud/asesor/asesor.component.html":
/*!********************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/asesor/asesor.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 my-4\">\r\n  <h4>Selección del asesor</h4>\r\n  <p class=\"text-justify\">En {{universidad.nombre}} todos los estudiantes tendrán asignado un\r\n    Coordinador(a) (presencial o virtual), quien será responsable de acompañarte durante tu \r\n    trayecto formativo, apoyándote desde el proceso de inscripción hasta tu egreso. Algunas \r\n    actividades en las que te podrá brindar ayuda son, por ejemplo: aprender a usar la plataforma \r\n    de estudio, servir de vínculo adicional con la Universidad y sus maestros; la resolución de \r\n    dudas respecto a pagos, etc. En otras palabras, podrás encontrar en esta figura a un asesor \r\n    comprometido en conseguir tu éxito académico.\r\n  </p>\r\n  <br>\r\n  <form class=\"row\" [formGroup]=\"asesorForm\" (ngSubmit)=\"enviarInformacion()\">\r\n    <div class=\"col-12\">\r\n      <label class=\"control-label\">¿Conoces al asesor?</label>\r\n      <div class=\"form-check form-check-inline ml-2\">\r\n        <input class=\"form-check-input\" type=\"radio\" formControlName=\"asesor\" id=\"radio_asesor_1\" value=\"1\">\r\n        <label class=\"form-check-label\" for=\"radio_asesor_1\">Si</label>\r\n      </div>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" formControlName=\"asesor\" id=\"radio_asesor_2\" value=\"0\">\r\n        <label class=\"form-check-label\" for=\"radio_asesor_2\">No</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-2\" *ngIf=\"aF.busqueda || (infoAsesor && infoAsesor.asesor_id)\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label\">Ingresa el nombre del asesor</label>\r\n        <app-buscador-persona *ngIf=\"aF.busqueda\" [idRol]=\"5\" (consultaExitosa)=\"asesorSeleccionado($event)\"></app-buscador-persona>\r\n        <div class=\"col-12\" *ngIf=\"asesor\">\r\n          <div class=\"row\">\r\n            <div class=\"col-3 border rounded-left text-center p-3 bg-primary\">\r\n              <div class=\"container border rounded p-2 bg-light\">\r\n                <i class=\"fa fa-user fa-4x text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-9 border rounded-right p-3 bg-light\">\r\n              <a href=\"javascript:void(0)\" >\r\n                <h4>{{asesor.primer_apellido}} {{asesor.segundo_apellido}} {{asesor.nombre}}</h4>\r\n                <p *ngIf=\"asesor.clave_asesor\">Clave: {{asesor.clave_asesor}}</p>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <button type=\"submit\" class=\"btn btn-success pull-right mt-2\" \r\n        [disabled]=\"asesorForm.invalid || (!asesor && aF.busqueda) || infoAsesor\">Guardar información</button>\r\n    </div>\r\n    <br>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/inscripcion/solicitud/asesor/asesor.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/asesor/asesor.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vc29saWNpdHVkL2FzZXNvci9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxzaGFyZWRcXHN0eWxlc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsNEJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksc0JBQXNCLEVBQ3pCOztBQUNEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbnNjcmlwY2lvbi9zb2xpY2l0dWQvYXNlc29yL2FzZXNvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/inscripcion/solicitud/asesor/asesor.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/asesor/asesor.component.ts ***!
  \******************************************************************/
/*! exports provided: AsesorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorComponent", function() { return AsesorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_universidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/universidad */ "./src/app/services/universidad.ts");
/* harmony import */ var _services_solicitud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/solicitud.service */ "./src/app/inscripcion/services/solicitud.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsesorComponent = /** @class */ (function () {
    function AsesorComponent(formBuilder, _solicitudService) {
        this.formBuilder = formBuilder;
        this._solicitudService = _solicitudService;
        this.universidad = src_app_services_universidad__WEBPACK_IMPORTED_MODULE_2__["universidad"];
        this.asesor = null;
        this.registroExitoso = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AsesorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.infoAsesor);
        var info = this.infoAsesor;
        this.asesorForm = this.formBuilder.group({
            asesor: [{ value: '', disabled: info ? true : false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.asesorForm.get('asesor').valueChanges.subscribe(function (value) {
            value = parseInt(value);
            if (value)
                _this.asesorForm.addControl('busqueda', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
            else {
                if (_this.asesorForm.get('asesor'))
                    _this.asesorForm.removeControl('busqueda');
                if (_this.asesor != null)
                    _this.asesor = null;
            }
        });
        if (info) {
            var seleccion = void 0;
            info.asesor_id ? seleccion = '1' : seleccion = '0';
            this.asesorForm.get('asesor').setValue(seleccion, { emitEvent: false });
            this.asesor = this.infoAsesor;
        }
    };
    Object.defineProperty(AsesorComponent.prototype, "aF", {
        get: function () { return this.asesorForm.controls; },
        enumerable: true,
        configurable: true
    });
    AsesorComponent.prototype.asesorSeleccionado = function (e) {
        if (e.status) {
            this.asesor = e.persona;
        }
    };
    AsesorComponent.prototype.enviarInformacion = function () {
        var _this = this;
        this._solicitudService.guardaAsesorPersona(this.asesor).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.registroExitoso.emit();
                alertify.success(response['msg']).dismissOthers();
            }
            else {
                alertify.error(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AsesorComponent.prototype, "infoAsesor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AsesorComponent.prototype, "registroExitoso", void 0);
    AsesorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asesor',
            template: __webpack_require__(/*! ./asesor.component.html */ "./src/app/inscripcion/solicitud/asesor/asesor.component.html"),
            styles: [__webpack_require__(/*! ./asesor.component.scss */ "./src/app/inscripcion/solicitud/asesor/asesor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_solicitud_service__WEBPACK_IMPORTED_MODULE_3__["SolicitudService"]])
    ], AsesorComponent);
    return AsesorComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/solicitud/asesor/asesor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/asesor/asesor.module.ts ***!
  \***************************************************************/
/*! exports provided: AsesorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsesorModule", function() { return AsesorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _asesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asesor.component */ "./src/app/inscripcion/solicitud/asesor/asesor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/buscadorPersona/buscador-persona.module */ "./src/app/components/buscadorPersona/buscador-persona.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AsesorModule = /** @class */ (function () {
    function AsesorModule() {
    }
    AsesorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_asesor_component__WEBPACK_IMPORTED_MODULE_2__["AsesorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_buscadorPersona_buscador_persona_module__WEBPACK_IMPORTED_MODULE_4__["BuscadorPersonaModule"]
            ],
            exports: [_asesor_component__WEBPACK_IMPORTED_MODULE_2__["AsesorComponent"]]
        })
    ], AsesorModule);
    return AsesorModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/solicitud/solicitud-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/solicitud-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SolicitudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudRoutingModule", function() { return SolicitudRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/inscripcion/solicitud/solicitud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _solicitud_component__WEBPACK_IMPORTED_MODULE_2__["SolicitudComponent"] }
];
var SolicitudRoutingModule = /** @class */ (function () {
    function SolicitudRoutingModule() {
    }
    SolicitudRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudRoutingModule);
    return SolicitudRoutingModule;
}());



/***/ }),

/***/ "./src/app/inscripcion/solicitud/solicitud.component.html":
/*!****************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/solicitud.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bandera\"> \r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4>{{title}}</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-3\">\r\n          <div class=\"container m-0 p-0 text-center\">\r\n\r\n            <div class=\"border rounded-top pl-2 pr-2 pt-3 pb-3 click\" (click)=\"setDatos(0, 1, 0)\" \r\n            [ngClass]=\"selecciones[0]? 'font-weight-bold seleccionado' : '' \">\r\n              * Datos personales <i *ngIf=\"infoPersonalCompleta == '1'\" class=\"fa fa-check text-success\"></i>\r\n            </div>\r\n            <div *ngIf=\"seleccionAsesor == 1\" [ngClass]=\"selecciones[1]? 'font-weight-bold seleccionado' : '' \" \r\n              class=\"border border-top-0 rounded-bottom pl-2 pr-2 pt-3 pb-3 click\" (click)=\"setDatos(0, 3, 1)\">\r\n              Selección de asesor \r\n              <i *ngIf=\"infoAsesor\" class=\"fa fa-check text-success\"></i>\r\n            </div>\r\n\r\n            <div (click)=\"setDatos(formulario.formulario_id, 0, i)\"\r\n              class=\"border border-top-0 pl-2 pr-2 pt-3 pb-3 click\" \r\n              *ngFor=\"let formulario of Formularios; let i = index\"\r\n              [ngClass]=\" [selecciones[i + 2]? 'font-weight-bold seleccionado' : ''] \">\r\n              <span *ngIf=\"formulario.obligatorio == '1'\"> * </span>\r\n              {{formulario.titulo}} <i *ngIf=\"formulario.contestado\" class=\"fa fa-check text-success\"></i>\r\n            </div>\r\n\r\n            <!--div  [ngClass]=\"selecciones[Formularios.length + 1]? 'font-weight-bold seleccionado' : '' \" \r\n              class=\"border border-top-0 rounded-bottom pl-2 pr-2 pt-3 pb-3 click\" (click)=\"setDatos(0, 2, Formularios.length + 1)\">\r\n              Prueba de Cleaver <i *ngIf=\"infoCleaverCompleto == '1'\" class=\"fa fa-check text-success\"></i>\r\n            </div-->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <div class=\"container border rounded\">\r\n\r\n            <div *ngIf=\"!id && !tipoForm\" class=\"p-4\">\r\n              <div *ngIf=\"!solicitudCompleta\">\r\n                <h4><b>Información de inscripción</b></h4>\r\n                <p>Llena cada uno de los apartados con la información solicitada, <b>aquellos marcados con (*)\r\n                  son obligatorios.</b>\r\n                </p>\r\n              </div>\r\n              <div *ngIf=\"solicitudCompleta\" class=\"text-center\">\r\n                <h4><i class=\"fa fa-check\" style=\"color:green\"></i><b> Información de inscripción completa</b></h4>\r\n                <p >Has cubierto la información necesaria para continuar con tu proceso. A continuación ingresa al siguiente apartado: \r\n                  <a (click)=\"closeModal()\" class=\"btn btn-success mt-3\" [routerLink]=\"['/inscripcion/terminos']\">Apartado de Términos</a>                  \r\n                </p>\r\n              </div>            \r\n            </div>\r\n\r\n            <div *ngIf=\"id\">\r\n              <div class=\"row\" *ngIf=\"cargando\">\r\n                <div class=\"col text-center mt-5 mb-5\">\r\n                  <i class=\"fa fa-spinner fa-pulse fa-2x fa-fw mb-3\"></i>\r\n                  <h5>\"Cargando formulario, por favor espere.\"</h5>\r\n                </div>\r\n              </div>\r\n              <form-generator (setId)=\"changeForm($event)\" [hidden]=\"cargando\" (cargado)=\"formularioCargado($event)\" \r\n              [idFormulario]=\"id\" [contestado]=\"Formularios[indexForm]\" [idAspirante]=\"aspiranteId\" [idCarrera]=\"idCarrera\" [idRol]=\"rolId\"></form-generator>\r\n            </div>\r\n\r\n            <div *ngIf=\"!id && tipoForm\">\r\n              <div *ngIf=\"tipoForm == 1\" class=\"mt-4\">\r\n                <div class=\"col-12\">\r\n                  <div *ngIf=\"infoPersonalCompleta == '1'\" class=\"alert alert-success\">\r\n                    <i class=\"fa fa-check\"></i> Información actualizada correctamente\r\n                  </div>\r\n                </div>\r\n                <app-persona *ngIf=\"aspiranteId\" [idPersona]=\"aspiranteId\" (registroExitoso)=\"changeForm($event, 1)\"\r\n                  [idRol]=\"rolId\" [tipoForm]=\"0\"></app-persona>\r\n              </div>\r\n\r\n              <!--div class=\"m-1 p-1\" *ngIf=\"tipoForm == 2\">\r\n                <cleaver (finalizado)=\"changeForm($event, 2)\" [cleaverCompleto]=\"infoCleaverCompleto\" [idRol]=\"rolId\"\r\n                  [idAspirante]=\"aspiranteId\"></cleaver>\r\n              </div-->\r\n              <div class=\"mt-4 mb-5\" *ngIf=\"tipoForm == 3\">\r\n                <app-asesor (registroExitoso)=\"changeForm($event, 3)\" [infoAsesor]=\"infoAsesor\"></app-asesor>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title ml-2\"><b>Información de inscripción completa</b></h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body ml-3 mr-3\">\r\n    <p Class=\"text-center\">Has cubierto la información necesaria para continuar con tu proceso. A continuación ingresa al apartado Términos. \r\n      <a class=\" btn btn-success\" (click)=\"closeModal()\" [routerLink]=\"['/inscripcion/terminos']\">Apartado de términos</a>\r\n    </p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/inscripcion/solicitud/solicitud.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/solicitud.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".click:hover {\n  cursor: pointer; }\n\n.seleccionado {\n  background-color: #d1ecf1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcGNpb24vc29saWNpdHVkL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGluc2NyaXBjaW9uXFxzb2xpY2l0dWRcXHNvbGljaXR1ZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvaW5zY3JpcGNpb24vc29saWNpdHVkL3NvbGljaXR1ZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGljazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlbGVjY2lvbmFkb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/inscripcion/solicitud/solicitud.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/inscripcion/solicitud/solicitud.component.ts ***!
  \**************************************************************/
/*! exports provided: SolicitudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudComponent", function() { return SolicitudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_solicitud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solicitud.service */ "./src/app/inscripcion/services/solicitud.service.ts");
/* harmony import */ var _inscripcion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inscripcion.service */ "./src/app/inscripcion/inscripcion.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SolicitudComponent = /** @class */ (function () {
    function SolicitudComponent(_usuarioService, _inscripcionService, _solicitudService, _modalService, route) {
        this._usuarioService = _usuarioService;
        this._inscripcionService = _inscripcionService;
        this._solicitudService = _solicitudService;
        this._modalService = _modalService;
        this.route = route;
        this.id = 0;
        this.cargando = true;
        this.tipoForm = 0;
        this.breadcum = [];
        this.solicitudCompleta = false;
        this.selecciones = [false, false];
        this.bandera = false;
        this.title = "Información de inscripción";
        this.rolId = parseInt(this._usuarioService.getRol().rol_id);
        if (this.rolId == 4 || this.rolId == 2) {
            this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
            this._usuarioService.pushBreadcum(this.title, "/inscripcion/solicitud", 1);
        }
        else if (this.rolId == 1 || this.rolId == 5) {
            this.aspiranteId = parseInt(this.route.snapshot.paramMap.get('id'));
            this._usuarioService.pushBreadcum(this.title, "", 2);
        }
        else {
            this._usuarioService.pushBreadcum(this.title, "", 2);
        }
    }
    SolicitudComponent.prototype.ngOnInit = function () {
        // this.id_persona = this.route.snapshot.paramMap.get('id');    
        // if (this.rolId == 4 || this.rolId == 2){
        //   this.aspiranteId = parseInt(this._usuarioService.getIdentity().persona_id);
        //   this._usuarioService.pushBreadcum(this.title,"/learning/solicitud",1);
        // }else {
        //   this._usuarioService.pushBreadcum(this.title,"",2);
        // }
        this.jwt = this._usuarioService.getJWT();
        this.consulta();
    };
    SolicitudComponent.prototype.registroPersona = function () {
        var _this = this;
        this._solicitudService.actualizaInfoPersonal(this.aspiranteId).subscribe(function (response) {
            if (response && response['status'] == 1) {
                _this.infoPersonalCompleta = '1';
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudComponent.prototype.consulta = function () {
        var _this = this;
        this._solicitudService.consultaFormularios(this.jwt, this.aspiranteId).subscribe(function (response) {
            if (response && response['status']) {
                _this.Formularios = response['formulario'];
                console.log(_this.Formularios);
            }
            else {
                _this.Formularios = [];
            }
            _this.consultaAspirante();
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudComponent.prototype.consultaAspirante = function (id) {
        var _this = this;
        if (id === void 0) { id = 0; }
        this._inscripcionService.consultaAspirante(this.aspiranteId).subscribe(function (response) {
            if (response && response['status']) {
                _this.paso = response['aspirante'].paso;
                _this.infoPersonalCompleta = response['aspirante'].info_personal_completa;
                _this.infoCleaverCompleto = response['aspirante'].cleaver_completo;
                _this.claveAspirante = response['aspirante'].clave_aspirante;
                _this.idCarrera = response['aspirante'].carrera_id;
                _this.seleccionAsesor = response['aspirante'].seleccion_asesor;
                if (response['aspirante'].asesor_persona_id) {
                    var r = response['aspirante'];
                    _this.infoAsesor = {
                        asesor_persona_id: r.asesor_persona_id,
                        asesor_id: r.asesor_id,
                        nombre: r.nombre_tutor,
                        primer_apellido: r.primer_apellido_tutor,
                        segundo_apellido: r.segundo_apellido_tutor,
                        clave_asesor: r.clave_asesor
                    };
                }
                if (parseInt(response['aspirante'].paso) >= 1) {
                    _this.solicitudCompleta = true;
                }
                if (id == 1 && parseInt(_this.paso) == 1) {
                    _this.openModal();
                }
                if (!id) {
                    _this.Formularios.map(function (form) {
                        _this.selecciones.push(false);
                    });
                    _this.bandera = true;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    SolicitudComponent.prototype.setDatos = function (formulario_id, tipo, index) {
        if ((parseInt(formulario_id) != this.id) ||
            (tipo == 1 && this.indexForm != index) || (tipo == 2 && this.indexForm != index)
            || (tipo == 3 && this.indexForm != index)) {
            this.id = 0;
            for (var i = 0; i < this.selecciones.length; i++) {
                this.selecciones[i] = false;
            }
            this.indexForm = parseInt(index);
            this.cargando = true;
            this.id = parseInt(formulario_id);
            if (!tipo) {
                this.tipoForm = 0;
                this.selecciones[index + 2] = true;
            }
            else {
                this.id = 0;
                this.tipoForm = tipo;
                this.selecciones[index] = true;
            }
        }
    };
    SolicitudComponent.prototype.formularioCargado = function (evt) {
        this.cargando = false;
    };
    SolicitudComponent.prototype.changeForm = function (evt, tipo) {
        if (tipo === void 0) { tipo = 0; }
        if (tipo == 0) {
            this.Formularios[this.indexForm].contestado = 1;
            if (this.indexForm < this.Formularios.length - 1) {
                var nuevoIndex = this.indexForm + 1;
                this.setDatos(this.Formularios[nuevoIndex].formulario_id, 0, nuevoIndex);
            }
            else {
                this.setDatos(0, 2, this.Formularios.length + 1);
            }
        }
        else if (tipo == 1) {
            this.registroPersona();
            // this.setDatos(this.Formularios[0].formulario_id, 0, 0);
            if (this.seleccionAsesor) { //validamos si tiene disponible el formulario del asesor
                this.setDatos(0, 3, 1);
            }
            else {
                if (this.Formularios.length)
                    this.setDatos(this.Formularios[0].formulario_id, 0, 0);
            }
        }
        else if (tipo == 2) {
            this.infoCleaverCompleto = '1';
            this.setDatos(0, 1, 0);
        }
        else if (tipo == 3) {
            this.setDatos(this.Formularios[0].formulario_id, 0, 0);
        }
        this.consultaAspirante(1);
    };
    SolicitudComponent.prototype.openModal = function () {
        this._modalService.open(this.modal, { size: 'lg' });
    };
    SolicitudComponent.prototype.closeModal = function () {
        this._modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolicitudComponent.prototype, "aspiranteId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], SolicitudComponent.prototype, "modal", void 0);
    SolicitudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inscripcion-solicitud',
            template: __webpack_require__(/*! ./solicitud.component.html */ "./src/app/inscripcion/solicitud/solicitud.component.html"),
            styles: [__webpack_require__(/*! ./solicitud.component.scss */ "./src/app/inscripcion/solicitud/solicitud.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _inscripcion_service__WEBPACK_IMPORTED_MODULE_3__["InscripcionService"],
            _services_solicitud_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SolicitudComponent);
    return SolicitudComponent;
}());



/***/ }),

/***/ "./src/app/inscripcion/solicitud/solicitud.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/inscripcion/solicitud/solicitud.module.ts ***!
  \***********************************************************/
/*! exports provided: SolicitudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudModule", function() { return SolicitudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-routing.module */ "./src/app/inscripcion/solicitud/solicitud-routing.module.ts");
/* harmony import */ var _solicitud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud.component */ "./src/app/inscripcion/solicitud/solicitud.component.ts");
/* harmony import */ var src_app_components_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/form-generator/form-generator.component */ "./src/app/components/form-generator/form-generator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/persona/persona.module */ "./src/app/components/persona/persona.module.ts");
/* harmony import */ var _cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cleaver/cleaver.module */ "./src/app/inscripcion/cleaver/cleaver.module.ts");
/* harmony import */ var _asesor_asesor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asesor/asesor.module */ "./src/app/inscripcion/solicitud/asesor/asesor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SolicitudModule = /** @class */ (function () {
    function SolicitudModule() {
    }
    SolicitudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_solicitud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudComponent"], src_app_components_form_generator_form_generator_component__WEBPACK_IMPORTED_MODULE_4__["FormGeneratorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_2__["SolicitudRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_components_persona_persona_module__WEBPACK_IMPORTED_MODULE_6__["PersonaModule"],
                _cleaver_cleaver_module__WEBPACK_IMPORTED_MODULE_7__["CleaverModule"],
                _asesor_asesor_module__WEBPACK_IMPORTED_MODULE_8__["AsesorModule"]
            ],
            exports: [_solicitud_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudComponent"]]
        })
    ], SolicitudModule);
    return SolicitudModule;
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


/***/ })

}]);
//# sourceMappingURL=default~administracion-aspirante-aspirante-module~asesor-aspirante-aspirante-module~inscripcion-soli~900e2d59.js.map