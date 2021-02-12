(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-abierta-abierta-module"],{

/***/ "./src/app/administracion/carga-actividades/services/abierta.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/abierta.service.ts ***!
  \******************************************************************************/
/*! exports provided: AbiertaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiertaService", function() { return AbiertaService; });
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




var AbiertaService = /** @class */ (function () {
    function AbiertaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    AbiertaService.prototype.consultaRespuesta = function (idPregunta, id_materia_fecha_actividad, jwt) {
        var params = '?id_pregunta=' + idPregunta;
        params += '&id_materia_fecha_actividad=' + id_materia_fecha_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaAbierta/consulta.php' + params);
    };
    AbiertaService.prototype.guardaRespuesta = function (idPregunta, respuesta, id_materia_fecha_actividad, jwt, idRespuesta) {
        var formData = new FormData();
        formData.append('pregunta_id', idPregunta);
        formData.append('respuesta', respuesta);
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        formData.append('jwt', jwt);
        if (!idRespuesta) {
            return this._httpClient.post(this.url + 'learning/respuestaAbierta/crea.php', formData);
        }
        else {
            formData.append('id_respuesta', idRespuesta);
            return this._httpClient.post(this.url + 'learning/respuestaAbierta/edita.php', formData);
        }
    };
    AbiertaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AbiertaService);
    return AbiertaService;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/abierta/abierta.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/abierta/abierta.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ckeditor \r\n    *ngIf=\"edicion && pregunta.importancia_actividad_id != 2\"\r\n    [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"   \r\n    [(ngModel)]=\"model\"\r\n    (blur)=\"guardarBorrador($event)\" \r\n    (ready)=\"editorCargado($event)\"></ckeditor>\r\n<textarea (blur)=\"guardarBorrador($event)\"  *ngIf=\"edicion && pregunta.importancia_actividad_id == 2\"\r\n    [(ngModel)]=\"model\" class=\"form-control\" name=\"\" id=\"\" rows=\"8\"></textarea>\r\n<div *ngIf=\"!edicion && respuesta\" class=\"row\">\r\n    <div class=\"col alert alert-info\">\r\n        <b>Respuesta:</b>\r\n        <p  [innerHtml]=\"model\"></p>\r\n    </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"edicion == 0 && !respuesta\">\r\n    <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/abierta/abierta.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/abierta/abierta.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL3ByZWd1bnRhcy9hYmllcnRhL2FiaWVydGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/abierta/abierta.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/abierta/abierta.component.ts ***!
  \**************************************************************************/
/*! exports provided: AbiertaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiertaComponent", function() { return AbiertaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var _models_documentEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/documentEditor */ "./src/app/models/documentEditor.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_abierta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/abierta.service */ "./src/app/administracion/carga-actividades/services/abierta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbiertaComponent = /** @class */ (function () {
    function AbiertaComponent(_usuarioService, _abiertaService) {
        this._usuarioService = _usuarioService;
        this._abiertaService = _abiertaService;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idRespuesta = null;
        this.simpleEditor = _models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__["simpleEditor"];
        this.documentEditor = _models_documentEditor__WEBPACK_IMPORTED_MODULE_2__["documentEditor"];
    }
    AbiertaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pregunta = this.Data.pregunta;
        this.edicion = this.Data.edicion;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.jwt = this._usuarioService.getJWT();
        this.getDatos();
        if (this.pregunta['importancia_actividad_id'] == 2) {
            setTimeout(function () {
                _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
            }, 1000);
        }
        else {
            this.model = {
                editorData: '<p>Hello, world!</p>'
            };
        }
    };
    AbiertaComponent.prototype.getDatos = function () {
        var _this = this;
        var datosRespuesta = this.pregunta.arreglo_reactivos;
        setTimeout(function () {
            if (datosRespuesta.respuesta) {
                _this.respuesta = datosRespuesta['respuesta'][0];
                _this.idRespuesta = _this.respuesta.respuesta_id;
                _this.model = _this.respuesta.respuesta;
            }
            if (!_this.edicion) {
                _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
            }
        }, 10);
        //   this._abiertaService.consultaRespuesta(this.pregunta.pregunta_id,this.idMateriaFechaActividad,this.jwt).subscribe(
        //     response =>{
        //       console.log(response);
        //       if(response && response['status']){
        //         this.respuesta = response['respuesta'][0];
        //         this.idRespuesta = this.respuesta.respuesta_id
        //         this.model = this.respuesta.respuesta;          
        //       }
        //       if (!this.edicion) {
        //         this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        //       }
        //     },error =>{
        //       console.log(error)
        //     }
        //   )
    };
    AbiertaComponent.prototype.guardarBorrador = function (event) {
        var _this = this;
        var dbRespuesta, bandera = 1;
        if (this.respuesta) {
            dbRespuesta = this.respuesta.respuesta;
            if (this.model === dbRespuesta) {
                bandera = 0;
            }
        }
        if (this.model.length > 0 && bandera == 1) {
            this._abiertaService.guardaRespuesta(this.pregunta.pregunta_id, this.model, this.idMateriaFechaActividad, this.jwt, this.idRespuesta).subscribe(function (response) {
                if (response && response['status']) {
                    if (response['idRespuesta'])
                        _this.idRespuesta = response['idRespuesta'];
                    alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                }
                else {
                    alertify.error('Error al guardar').dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AbiertaComponent.prototype.editorCargado = function (evt) {
        this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AbiertaComponent.prototype, "actividadCargada", void 0);
    AbiertaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'respuesta-abierta',
            template: __webpack_require__(/*! ./abierta.component.html */ "./src/app/materia/actividad/preguntas/abierta/abierta.component.html"),
            styles: [__webpack_require__(/*! ./abierta.component.scss */ "./src/app/materia/actividad/preguntas/abierta/abierta.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_administracion_carga_actividades_services_abierta_service__WEBPACK_IMPORTED_MODULE_4__["AbiertaService"]])
    ], AbiertaComponent);
    return AbiertaComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/abierta/abierta.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/abierta/abierta.module.ts ***!
  \***********************************************************************/
/*! exports provided: AbiertaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiertaModule", function() { return AbiertaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _abierta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abierta.component */ "./src/app/materia/actividad/preguntas/abierta/abierta.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AbiertaModule = /** @class */ (function () {
    function AbiertaModule() {
    }
    AbiertaModule_1 = AbiertaModule;
    var AbiertaModule_1;
    AbiertaModule.rootComponent = _abierta_component__WEBPACK_IMPORTED_MODULE_2__["AbiertaComponent"];
    AbiertaModule = AbiertaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [AbiertaModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            entryComponents: [
                AbiertaModule_1.rootComponent
            ]
        })
    ], AbiertaModule);
    return AbiertaModule;
}());



/***/ }),

/***/ "./src/app/models/documentEditor.ts":
/*!******************************************!*\
  !*** ./src/app/models/documentEditor.ts ***!
  \******************************************/
/*! exports provided: documentEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentEditor", function() { return documentEditor; });
var documentEditor = {
    // Define the toolbar: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_toolbar
    // The full preset from CDN which we used as a base provides more features than we need.
    // Also by default it comes with a 3-line toolbar. Here we put all buttons in a single row.
    toolbar: [
        { name: 'document', items: ['Print'] },
        { name: 'clipboard', items: ['Undo', 'Redo'] },
        { name: 'styles', items: ['Format', 'Font', 'FontSize'] },
        { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting'] },
        { name: 'colors', items: ['TextColor', 'BGColor'] },
        { name: 'align', items: ['AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'] },
        { name: 'links', items: ['Link', 'Unlink'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
        { name: 'insert', items: ['Image', 'Table'] },
        { name: 'tools', items: ['Maximize'] },
        { name: 'editing', items: ['Scayt'] }
    ],
    // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
    // One HTTP request less will result in a faster startup time.
    // For more information check http://docs.ckeditor.com/ckeditor4/docs/#!/api/CKEDITOR.config-cfg-customConfig
    customConfig: '',
    // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
    // For more information check:
    //  - About Advanced Content Filter: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_advanced_content_filter
    //  - About Disallowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_disallowed_content
    //  - About Allowed Content: http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_allowed_content_rules
    disallowedContent: 'img{width,height,float}',
    extraAllowedContent: 'img[width,height,align]',
    // Enabling extra plugins, available in the full-all preset: http://ckeditor.com/presets-all
    extraPlugins: 'tableresize,uploadimage,uploadfile,justify',
    /*********************** File management support ***********************/
    // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
    // solution with file upload/management capabilities, like for example CKFinder.
    // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_ckfinder_integration
    // Uncomment and correct these lines after you setup your local CKFinder instance.
    // filebrowserBrowseUrl: 'http://example.com/ckfinder/ckfinder.html',
    // filebrowserUploadUrl: 'http://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
    /*********************** File management support ***********************/
    // Make the editing area bigger than default.
    height: 800,
    // An array of stylesheets to style the WYSIWYG area.
    // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
    contentsCss: ['https://cdn.ckeditor.com/4.8.0/full-all/contents.css', 'mystyles.css'],
    // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
    bodyClass: 'document-editor',
    // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
    format_tags: 'p;h1;h2;h3;pre',
    // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
    removeDialogTabs: 'image:advanced;link:advanced',
    // Define the list of styles which should be available in the Styles dropdown list.
    // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
    // (and on your website so that it rendered in the same way).
    // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
    // that file, which means one HTTP request less (and a faster startup).
    // For more information see http://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles
    stylesSet: [
        /* Inline Styles */
        { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },
        { name: 'Cited Work', element: 'cite' },
        { name: 'Inline Quotation', element: 'q' },
        /* Object Styles */
        {
            name: 'Special Container',
            element: 'div',
            styles: {
                padding: '5px 10px',
                background: '#eee',
                border: '1px solid #ccc'
            }
        },
        {
            name: 'Compact table',
            element: 'table',
            attributes: {
                cellpadding: '5',
                cellspacing: '0',
                border: '1',
                bordercolor: '#ccc'
            },
            styles: {
                'border-collapse': 'collapse'
            }
        },
        { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
        { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }
    ]
};


/***/ }),

/***/ "./src/app/models/simpleEditor.ts":
/*!****************************************!*\
  !*** ./src/app/models/simpleEditor.ts ***!
  \****************************************/
/*! exports provided: simpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleEditor", function() { return simpleEditor; });
var simpleEditor = [
    //['Styles''Format''Font','FontSize'],
    //['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
    //['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    //['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor']
    ['Format', 'Font', 'FontSize'],
    ['Bold', 'Italic', 'Underline', 'StrikeThrough', '-', 'Outdent', 'Indent', '-', 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Table', 'Link', 'Smiley', 'TextColor', 'BGColor']
];


/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-abierta-abierta-module.js.map