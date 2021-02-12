(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-estrategica-estrategica-module"],{

/***/ "./src/app/administracion/carga-actividades/services/estrategica.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/administracion/carga-actividades/services/estrategica.service.ts ***!
  \**********************************************************************************/
/*! exports provided: EstrategicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstrategicaService", function() { return EstrategicaService; });
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




var EstrategicaService = /** @class */ (function () {
    function EstrategicaService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    EstrategicaService.prototype.consultaRespuesta = function (idPregunta, jwt, idMateriaFechaActividad) {
        var params = '?id_pregunta=' + idPregunta;
        params += '&id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + 'learning/respuestaEstrategica/consulta.php' + params);
    };
    EstrategicaService.prototype.guardaRespuesta = function (idPregunta, respuesta1, respuesta2, respuesta3, jwt, idMateriaFechaActividad, idRespuesta) {
        if (idRespuesta === void 0) { idRespuesta = null; }
        var formData = new FormData();
        formData.append('id_pregunta', idPregunta);
        formData.append('id_materia_fecha_actividad', idMateriaFechaActividad);
        formData.append('respuesta1', respuesta1);
        formData.append('respuesta2', respuesta2);
        formData.append('respuesta3', respuesta3);
        formData.append('jwt', jwt);
        if (!idRespuesta) {
            return this._httpClient.post(this.url + 'learning/respuestaEstrategica/crea.php', formData);
        }
        else {
            formData.append('id_respuesta', idRespuesta);
            return this._httpClient.post(this.url + 'learning/respuestaEstrategica/edita.php', formData);
        }
    };
    EstrategicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EstrategicaService);
    return EstrategicaService;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/estrategica/estrategica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <b [innerHTML]=\"Positivo\"></b>\r\n    <div  *ngIf=\"edicion\" class=\"form-group\" >\r\n      <input hidden [(ngModel)]=\"idPositivo\">\r\n      <ckeditor [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\" \r\n        \r\n        [(ngModel)]=\"respuestaP\" name=\"Positivo\" id=\"Positivo\"  (blur)=\"guardarBorrador(Positivo)\" ></ckeditor>\r\n    </div>\r\n    <div  *ngIf=\"!edicion && respuestaP\" class=\" alert alert-info\" [innerHTML]=\"respuestaP\" >\r\n    </div>\r\n    <div *ngIf=\"!edicion && !respuestaP\" class=\"aler alert-secondary\" >\r\n        <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"col-md-4\">\r\n    <b [innerHTML]=\"Negativo\"></b>\r\n    <div  *ngIf=\"edicion\" class=\"form-group\">\r\n      <input hidden [(ngModel)]=\"idNegativo\">\r\n      <ckeditor [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\" \r\n           \r\n        [(ngModel)]=\"respuestaN\" name=\"Negativo\" id=\"Negativo\"  (blur)=\"guardarBorrador(Negativo)\" ></ckeditor>\r\n    </div>\r\n    <div  *ngIf=\"!edicion && respuestaN\" class=\"alert alert-info\" [innerHTML]=\"respuestaN\" >\r\n    </div>\r\n    <div *ngIf=\"!edicion && !respuestaN\" class=\"aler alert-secondary\" >\r\n        <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <b [innerHTML]=\"Interesante\"></b>\r\n    <div *ngIf=\"edicion\" class=\"form-group\" >\r\n      <input hidden [(ngModel)]=\"idInteresante\">\r\n      <ckeditor [config]=\"{toolbar: simpleEditor, extraPlugins: 'justify'}\"   \r\n        (ready)=\"editorCargado($event)\"\r\n       [(ngModel)]=\"respuestaI\" name=\"Interesante\" id=\"Interesante\" (blur)=\"guardarBorrador(Interesante)\" ></ckeditor>\r\n    </div>\r\n    <div *ngIf=\"!edicion && respuestaI\" class=\"alert alert-info\" [innerHTML]=\"respuestaI\" >\r\n    </div>\r\n    <div *ngIf=\"!edicion && !respuestaI\" class=\"aler alert-secondary\" >\r\n      <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/estrategica/estrategica.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvYWN0aXZpZGFkL3ByZWd1bnRhcy9lc3RyYXRlZ2ljYS9lc3RyYXRlZ2ljYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/estrategica/estrategica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EstrategicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstrategicaComponent", function() { return EstrategicaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/simpleEditor */ "./src/app/models/simpleEditor.ts");
/* harmony import */ var _models_documentEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/documentEditor */ "./src/app/models/documentEditor.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_estrategica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/estrategica.service */ "./src/app/administracion/carga-actividades/services/estrategica.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstrategicaComponent = /** @class */ (function () {
    function EstrategicaComponent(_usuarioService, _estrategicaService) {
        this._usuarioService = _usuarioService;
        this._estrategicaService = _estrategicaService;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.idRespuesta = null;
        this.simpleEditor = _models_simpleEditor__WEBPACK_IMPORTED_MODULE_1__["simpleEditor"];
        this.documentEditor = _models_documentEditor__WEBPACK_IMPORTED_MODULE_2__["documentEditor"];
    }
    EstrategicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pregunta = this.Data.pregunta;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.edicion = this.Data.edicion;
        this.jwt = this._usuarioService.getJWT();
        if (this.pregunta.contenido_pregunta) {
            this.Positivo = this.pregunta.contenido_pregunta.pregunta1;
            this.Negativo = this.pregunta.contenido_pregunta.pregunta2;
            this.Interesante = this.pregunta.contenido_pregunta.pregunta3;
        }
        this.idPregunta = this.pregunta.pregunta_id;
        var datosPregunta = this.pregunta.arreglo_reactivos;
        setTimeout(function () {
            if (datosPregunta.respuesta) {
                _this.respuesta = datosPregunta.respuesta;
                _this.idRespuesta = _this.respuesta[0].respuesta_id;
                _this.respuestaP = _this.respuesta[0].respuesta1;
                _this.respuestaN = _this.respuesta[0].respuesta2;
                _this.respuestaI = _this.respuesta[0].respuesta3;
            }
            if (!_this.edicion) {
                _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
            }
        }, 10);
        // this._estrategicaService.consultaRespuesta(this.idPregunta,this.jwt,this.idMateriaFechaActividad).subscribe(
        //   response =>{
        //     console.log(response);
        //     if(response && response['status']){
        //       this.respuesta = response['respuesta'];
        //       this.idRespuesta = this.respuesta[0].respuesta_id;
        //       this.respuestaP=this.respuesta[0].respuesta1;
        //       this.respuestaN=this.respuesta[0].respuesta2;
        //       this.respuestaI=this.respuesta[0].respuesta3;
        //     }
        //     if (!this.edicion) {
        //       this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        //     }
        //   },error =>{
        //     console.log(error)
        //   }
        // )
    };
    EstrategicaComponent.prototype.guardarBorrador = function (texto) {
        var _this = this;
        this._estrategicaService.guardaRespuesta(this.idPregunta, this.respuestaP, this.respuestaN, this.respuestaI, this.jwt, this.idMateriaFechaActividad, this.idRespuesta).subscribe(function (response) {
            if (response && response['status']) {
                if (response['idRespuesta']) {
                    _this.idRespuesta = response['idRespuesta'];
                }
                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
            }
            else {
                alertify.error('Error al guardar').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    EstrategicaComponent.prototype.editorCargado = function (evt) {
        var _this = this;
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EstrategicaComponent.prototype, "actividadCargada", void 0);
    EstrategicaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'respuesta-estrategica',
            template: __webpack_require__(/*! ./estrategica.component.html */ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.html"),
            styles: [__webpack_require__(/*! ./estrategica.component.scss */ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_administracion_carga_actividades_services_estrategica_service__WEBPACK_IMPORTED_MODULE_4__["EstrategicaService"]])
    ], EstrategicaComponent);
    return EstrategicaComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/estrategica/estrategica.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/estrategica/estrategica.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EstrategicaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstrategicaModule", function() { return EstrategicaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _estrategica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estrategica.component */ "./src/app/materia/actividad/preguntas/estrategica/estrategica.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EstrategicaModule = /** @class */ (function () {
    function EstrategicaModule() {
    }
    EstrategicaModule_1 = EstrategicaModule;
    var EstrategicaModule_1;
    EstrategicaModule.rootComponent = _estrategica_component__WEBPACK_IMPORTED_MODULE_2__["EstrategicaComponent"];
    EstrategicaModule = EstrategicaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [EstrategicaModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            entryComponents: [
                EstrategicaModule_1.rootComponent
            ]
        })
    ], EstrategicaModule);
    return EstrategicaModule;
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
//# sourceMappingURL=src-app-materia-actividad-preguntas-estrategica-estrategica-module.js.map