(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docente-video-conferencia-video-conferencia-module"],{

/***/ "./src/app/docente/carga-videos/carga-videos-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CargaVideosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaVideosRoutingModule", function() { return CargaVideosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carga_videos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga-videos.component */ "./src/app/docente/carga-videos/carga-videos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _carga_videos_component__WEBPACK_IMPORTED_MODULE_2__["CargaVideosComponent"] }
];
var CargaVideosRoutingModule = /** @class */ (function () {
    function CargaVideosRoutingModule() {
    }
    CargaVideosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CargaVideosRoutingModule);
    return CargaVideosRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/carga-videos/carga-videos.component.html":
/*!******************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 text-center\">\r\n    <h4>Guardar en </h4><img src=\"assets/dropbox/icono.jpg\" width=\"80px\">\r\n    <p class=\"mt-2\"><b>Videoconferencia: </b><br>{{videoconferencia.nombre}}</p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <form *ngIf=\"videosForm && !urlDropbox\" [formGroup]=\"videosForm\" (ngSubmit)=\"enviaArchivo()\">\r\n      <!-- <div class=\"form-group\">\r\n        <label>Nombre del archivo</label>\r\n        <input class=\"form-control\" type=\"text\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Fecha</label>\r\n        <input class=\"form-control\" type=\"date\">\r\n      </div> -->\r\n      <!-- <div class=\"group mt-3\">\r\n        <input class=\"text_1\" formControlName=\"nombre_archivo\" type=\"text\">\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label class=\"_label\">Nombre del archivo</label>\r\n      </div> -->\r\n      <div class=\"group\">\r\n        <input class=\"text_1\" formControlName=\"fecha\" type=\"date\">\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label  class=\"_label\">Fecha</label>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"_label-file ml-1\">Video</label><br>\r\n        <input type=\"file\" (change)=\"onFileChange($event)\"/>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"videosForm.invalid || cargando\">\r\n        <span *ngIf=\"!cargando\">Guardar video</span>\r\n        <span *ngIf=\"cargando\"><i class=\"fa fa-spinner fa-pulse\"></i> Guardando video</span>\r\n      </button>\r\n    </form>\r\n    <div class=\"text-center\" *ngIf=\"urlDropbox\">\r\n      <!-- <p class=\"text-dark\">Liga del video:</p> -->\r\n      <a [href]=\"urlDropbox\" target=\"_blank\" class=\"btn btn-primary btn-block\">Ver video</a>\r\n      <button class=\"btn btn-light btn-block mt-2\" (click)=\"setForm()\">Reemplazar video</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- \r\n<div class=\"row centrado\">\r\n  <div class=\"col-md-4\">\r\n    <form action=\"upload.php\" method=\"post\" enctype=\"multipart/form-data\">\r\n      <div class=\"group\">\r\n        <input class=\"text_1\" type=\"text\" name=\"nombre\" required>\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label>Nombre completo</label>\r\n      </div>\r\n      <div class=\"group\">\r\n        <input class=\"text_1\" type=\"text\" name=\"materia\" required>\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label>Materia</label>\r\n      </div>\r\n      <div class=\"group\">\r\n        <input class=\"text_1\" type=\"text\" name=\"grupo\" required>\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label>Grupo</label>\r\n      </div>\r\n      <div class=\"group\">\r\n        <input class=\"text_1\" type=\"date\" name=\"fecha\" required>\r\n        <span class=\"highlight\"></span>\r\n        <span class=\"bar\"></span>\r\n        <label>Fecha</label>\r\n      </div>\r\n\r\n      <div style=\"text-align: left; padding: 15px 0px;\">\r\n        <input type=\"file\" name=\"file\" id=\"file\"/>\r\n      </div>\r\n      <div style=\"text-align: left;\">\r\n        <input type=\"submit\" name=\"btnenviar\" id=\"btnenviar\"/>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n  <a href=\"https://www.dropbox.com/sh/b39ua0ot4zbg3fy/AABQmEupd3XeUNsqdeNIMjlBa?dl=0\" target=\"_blank\">\r\n    <img src=\"img/ver.png\" width=\"100px\">\r\n  </a>\r\n  </div> \r\n</div> -->"

/***/ }),

/***/ "./src/app/docente/carga-videos/carga-videos.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centrado {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n\n/* form starting stylings ------------------------------- */\n\n.group {\n  position: relative;\n  margin-bottom: 15px; }\n\n.text_1 {\n  font-size: 12px;\n  padding: 17px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #000;\n  background: transparent; }\n\n.text_1:focus {\n  outline: none; }\n\n/* LABEL ======================================= */\n\n._label {\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all; }\n\n/* active state */\n\n.text_1 ~ label, .text_1:valid ~ label {\n  top: -7px;\n  font-size: 16px;\n  color: #2c8cb3; }\n\n._label-file {\n  top: -7px;\n  font-size: 16px;\n  color: #2c8cb3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9jYXJnYS12aWRlb3MvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcZG9jZW50ZVxcY2FyZ2EtdmlkZW9zXFxjYXJnYS12aWRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDckI7O0FBRUQsNERBQTREOztBQUM1RDtFQUNBLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDbEI7O0FBRUQ7RUFDQSxnQkFBZTtFQUNmLDRCQUEyQjtFQUMzQixlQUFjO0VBQ2QsWUFBVztFQUNYLGFBQVk7RUFDWiw4QkFBNkI7RUFDN0Isd0JBQXVCLEVBQ3RCOztBQUVEO0VBQ0EsY0FBYSxFQUNaOztBQUVELG1EQUFtRDs7QUFDbkQ7RUFJSSxtQkFBa0I7RUFDbEIscUJBQW9CO0VBQ3BCLFVBQVM7RUFDVCxVQUFTO0VBQ1QsMEJBQXlCO0VBQ3pCLCtCQUE4QjtFQUM5QixrQ0FBaUMsRUFDcEM7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUVJLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZG9jZW50ZS9jYXJnYS12aWRlb3MvY2FyZ2EtdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRyYWRve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogZm9ybSBzdGFydGluZyBzdHlsaW5ncyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5ncm91cCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnRleHRfMSB7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxucGFkZGluZzogMTdweCAxMHB4IDEwcHggNXB4O1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDEwMCU7XHJcbmJvcmRlcjogbm9uZTtcclxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGV4dF8xOmZvY3VzIHtcclxub3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5fbGFiZWwge1xyXG4gICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICAvLyBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4vKiBhY3RpdmUgc3RhdGUgKi9cclxuLnRleHRfMSB+IGxhYmVsLCAudGV4dF8xOnZhbGlkIH4gbGFiZWwge1xyXG4vLyAudGV4dF8xOmZvY3VzIH4gbGFiZWwsIC50ZXh0XzE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICB0b3A6IC03cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzJjOGNiMztcclxufVxyXG5cclxuLl9sYWJlbC1maWxlIHtcclxuICAgIHRvcDogLTdweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMmM4Y2IzO1xyXG59XHJcblxyXG4vLyAucGVybWFsaW5rX3NlY3Rpb24ge1xyXG4vLyAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwOyAvKiBDU1MzICovICAgIFxyXG4vLyAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7IC8qIE1vemlsbGEsIHNpbmNlIDE5OTkgKi9cclxuLy8gICAgIHdoaXRlLXNwYWNlOiAtcHJlLXdyYXA7IC8qIE9wZXJhIDQtNiAqLyAgICBcclxuLy8gICAgIHdoaXRlLXNwYWNlOiAtby1wcmUtd3JhcDsgLyogT3BlcmEgNyAqLyAgICBcclxuLy8gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogSW50ZXJuZXQgRXhwbG9yZXIgNS41KyAqL1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/docente/carga-videos/carga-videos.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos.component.ts ***!
  \****************************************************************/
/*! exports provided: CargaVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaVideosComponent", function() { return CargaVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _carga_videos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga-videos.service */ "./src/app/docente/carga-videos/carga-videos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CargaVideosComponent = /** @class */ (function () {
    function CargaVideosComponent(_cargaVideosService) {
        this._cargaVideosService = _cargaVideosService;
        this.reemplazarVideo = false;
        this.cargando = false;
    }
    CargaVideosComponent.prototype.ngOnInit = function () {
        if (this.datos) {
            this.videoconferencia = this.datos.videoconferencia;
            this.index = this.datos.index;
            if (this.videoconferencia.url_descarga != null && this.videoconferencia.url_descarga != '') {
                this.urlDropbox = this.videoconferencia.url_descarga;
            }
            else {
                this.setForm();
            }
        }
    };
    CargaVideosComponent.prototype.setForm = function () {
        this.urlDropbox = null;
        var idAsignaturaGrupo = sessionStorage.getItem('idAsignaturaGrupo');
        this.videosForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // nombre_archivo: new FormControl(this.videoconferencia.nombre, Validators.required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            asignatura_grupo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](idAsignaturaGrupo),
            id_videoconferencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.videoconferencia.videoconferencia_id),
            archivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    CargaVideosComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.videosForm.patchValue({
                archivo: file
            });
        }
    };
    CargaVideosComponent.prototype.enviaArchivo = function () {
        var _this = this;
        var self = this;
        this.reemplazarVideo = false;
        this.cargando = true;
        var form = this.videosForm.value;
        this._cargaVideosService.guardaDropbox(form, this.reemplazarVideo).subscribe(function (response) {
            if (response && response['status'] == 2) {
                alertify.confirm('Reemplazar video', response['msg'], function () {
                    self.reemplazarVideo = true;
                    this._cargaVideosService.guardaDropbox(form, self.reemplazarVideo).subscribe(function (response) {
                        if (response && response['status']) {
                            self.urlDropbox = response['url'];
                            self.cargando = false;
                            self._cargaVideosService.nuevaUrl.emit({
                                index: self.index,
                                id_videoconferencia: self.videoconferencia.videoconferencia_id,
                                url_descarga: self.urlDropbox
                            });
                            alertify.success(response['msg']).dismissOthers();
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }.bind(_this), function () {
                    self.cargando = false;
                    alertify.error('Cancelado');
                }).set('labels', { ok: 'Sí', cancel: 'No' });
            }
            else if (response && response['status'] == 1) {
                _this.urlDropbox = response['url'];
                _this.cargando = false;
                self._cargaVideosService.nuevaUrl.emit({
                    index: self.index,
                    id_videoconferencia: self.videoconferencia.videoconferencia_id,
                    url_descarga: self.urlDropbox
                });
                alertify.success(response['msg']).dismissOthers();
            }
            else if (response['status'] == 0) {
                _this.cargando = false;
                alertify.error('Se ha producido un error.').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CargaVideosComponent.prototype, "datos", void 0);
    CargaVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carga-videos',
            template: __webpack_require__(/*! ./carga-videos.component.html */ "./src/app/docente/carga-videos/carga-videos.component.html"),
            styles: [__webpack_require__(/*! ./carga-videos.component.scss */ "./src/app/docente/carga-videos/carga-videos.component.scss")]
        }),
        __metadata("design:paramtypes", [_carga_videos_service__WEBPACK_IMPORTED_MODULE_2__["CargaVideosService"]])
    ], CargaVideosComponent);
    return CargaVideosComponent;
}());



/***/ }),

/***/ "./src/app/docente/carga-videos/carga-videos.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos.module.ts ***!
  \*************************************************************/
/*! exports provided: CargaVideosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaVideosModule", function() { return CargaVideosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carga_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carga-videos-routing.module */ "./src/app/docente/carga-videos/carga-videos-routing.module.ts");
/* harmony import */ var _carga_videos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carga-videos.component */ "./src/app/docente/carga-videos/carga-videos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CargaVideosModule = /** @class */ (function () {
    function CargaVideosModule() {
    }
    CargaVideosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_carga_videos_component__WEBPACK_IMPORTED_MODULE_3__["CargaVideosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _carga_videos_routing_module__WEBPACK_IMPORTED_MODULE_2__["CargaVideosRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            exports: [_carga_videos_component__WEBPACK_IMPORTED_MODULE_3__["CargaVideosComponent"]]
        })
    ], CargaVideosModule);
    return CargaVideosModule;
}());



/***/ }),

/***/ "./src/app/docente/carga-videos/carga-videos.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/docente/carga-videos/carga-videos.service.ts ***!
  \**************************************************************/
/*! exports provided: CargaVideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaVideosService", function() { return CargaVideosService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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



var CargaVideosService = /** @class */ (function () {
    function CargaVideosService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
        this.nuevaUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CargaVideosService.prototype.consultaVideo = function (id_videoconferencia) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('id_videoconferencia', id_videoconferencia);
        return this._httpClient.get(this.url + 'extras/dropbox/consulta.php', { params: params });
    };
    CargaVideosService.prototype.guardaDropbox = function (form, reemplazar_video) {
        var formData = new FormData();
        // formData.append('nombre', form.nombre_archivo);
        formData.append('asignatura_grupo_id', form.asignatura_grupo);
        formData.append('videoconferencia_id', form.id_videoconferencia);
        formData.append('fecha', form.fecha);
        formData.append('reemplazar_video', reemplazar_video);
        formData.append('file', form.archivo);
        return this._httpClient.post(this.url + 'extras/dropbox/upload.php', formData);
    };
    CargaVideosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CargaVideosService);
    return CargaVideosService;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/asistencia/asistencia.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/asistencia/asistencia.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 mt-3\">\r\n    <h4>{{videoconferencia}}</h4>\r\n    <br>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <tr>\r\n        <th>Nombre del alumno</th>\r\n        <th>Clave del alumno</th>\r\n        <th>Correo electrónico</th>\r\n        <th>Fecha de acceso</th>\r\n      </tr>\r\n      <tr *ngFor=\"let item of Personas; let i = index\">\r\n        <td>{{item.primer_apellido}} {{item.segundo_apellido}} {{item.nombre}}</td>\r\n        <td>{{item.clave_alumno}}</td>\r\n        <td>{{item.email}}</td>\r\n        <td>{{item.fecha_acceso | date: 'dd/MM/yyyy hh:mm a'}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"!Personas\">\r\n        <td colspan=\"3\" class=\"text-center\">No se encontraron alumnos</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/docente/video-conferencia/asistencia/asistencia.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/asistencia/asistencia.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvdmlkZW8tY29uZmVyZW5jaWEvYXNpc3RlbmNpYS9hc2lzdGVuY2lhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/docente/video-conferencia/asistencia/asistencia.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/asistencia/asistencia.component.ts ***!
  \******************************************************************************/
/*! exports provided: AsistenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaComponent", function() { return AsistenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
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




var AsistenciaComponent = /** @class */ (function () {
    function AsistenciaComponent(_conferenciaService, _usuarioService, route) {
        this._conferenciaService = _conferenciaService;
        this._usuarioService = _usuarioService;
        this.route = route;
        this.title = 'Asistencia a videoconferencia';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    AsistenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.idVideoconferencia = parseInt(this.route.snapshot.paramMap.get('id'));
        this._conferenciaService.consultaConferencia(this.jwt, this.idVideoconferencia).subscribe(function (response) {
            if (response && response['status']) {
                _this.videoconferencia = response['videoconferencia']['nombre'];
                _this._conferenciaService.consultaAsistencia(_this.jwt, _this.idVideoconferencia).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.Personas = response['personas'];
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    AsistenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asistencia',
            template: __webpack_require__(/*! ./asistencia.component.html */ "./src/app/docente/video-conferencia/asistencia/asistencia.component.html"),
            styles: [__webpack_require__(/*! ./asistencia.component.scss */ "./src/app/docente/video-conferencia/asistencia/asistencia.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_1__["VideoConferenciaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AsistenciaComponent);
    return AsistenciaComponent;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/consulta/consulta.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/consulta/consulta.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <a [routerLink]=\"['../nuevo']\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i> Nueva videoconferencia</a>\r\n  </div>\r\n  <div class=\"col-md-12 mt-3\">\r\n    <table class=\"table table-striped table-bordered\">\r\n      <tr>\r\n        <th>Titulo de videoconferencia</th>\r\n        <th>Inicio</th>\r\n        <th>Fin</th>\r\n        <th>Situación</th>\r\n        <th>Ver asistencia</th>\r\n        <th>Cargar video</th>\r\n        <th>Edita</th>\r\n        <th>Elimina</th>\r\n      </tr>\r\n      <tr  *ngFor=\"let item of Videoconferencias; let i = index\">\r\n        <td>{{item.nombre}}</td>\r\n        <td>{{item.fecha_inicio | date: 'dd/MM/yyyy hh:mm a'}}</td>\r\n        <td>{{item.fecha_fin | date: 'dd/MM/yyyy hh:mm a'}}</td>\r\n        <td [ngClass]=\"item.activo ? 'alert-success': 'alert-warning'\" class=\"text-center\">\r\n          <span *ngIf=\"!item.activo\">\r\n            <span *ngIf=\"item.estatus == 2 && item.estatus_registro == 1\">Comienza <br> {{item.fecha_inicio | date: 'dd/MM/yy hh:mm a'}}</span>\r\n            <span *ngIf=\"item.estatus == 3 && item.estatus_registro == 1\"><i class=\"fa fa-check\"></i><br> Finalizada</span>\r\n            <span *ngIf=\"item.estatus_registro == 2\"><i class=\"fa fa-check\"></i><br> Finalizada por el profesor</span>\r\n          </span>\r\n          <span *ngIf=\"item.activo\">\r\n              Ingresar <br>\r\n              <button class=\"btn btn-success\" (click)=\"consultarConferencia(item.videoconferencia_id)\"><i class=\"fa fa-users\"></i></button>\r\n          </span>\r\n        </td>\r\n        <td class=\"text-center\"><a [routerLink]=\"['../asistencia/'+item.videoconferencia_id]\" class=\"btn btn-warning\"><i class=\"fa fa-users\"></i></a></td>\r\n        <td class=\"text-center\"><button (click)=\"open(content, item, i)\" class=\"btn btn-primary\"><i class=\"fa fa-video-camera\"></i></button></td>\r\n        <td class=\"text-center\"><a [routerLink]=\"['../editar/'+item.videoconferencia_id]\" class=\"btn btn-info\"><i class=\"fa fa-pencil\"></i></a></td>\r\n        <td class=\"text-center\"><button (click)=\"eliminar(item.videoconferencia_id,i)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button></td>\r\n      </tr>\r\n      <tr *ngIf=\"!Videoconferencias\">\r\n        <td colspan=\"6\" class=\"text-center\">No se encontraron videoconferencias</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Cargar video</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body p-3\">\r\n    <div class=\"container border rounded p-4\">\r\n      <app-carga-videos [datos]=\"seleccionada\"></app-carga-videos>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Salir</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/docente/video-conferencia/consulta/consulta.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/consulta/consulta.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvdmlkZW8tY29uZmVyZW5jaWEvY29uc3VsdGEvY29uc3VsdGEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/docente/video-conferencia/consulta/consulta.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/consulta/consulta.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaComponent", function() { return ConsultaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _carga_videos_carga_videos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../carga-videos/carga-videos.service */ "./src/app/docente/carga-videos/carga-videos.service.ts");
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
    function ConsultaComponent(_conferenciaService, _usuarioService, _fechaService, _modalService, _cargaVideosService) {
        this._conferenciaService = _conferenciaService;
        this._usuarioService = _usuarioService;
        this._fechaService = _fechaService;
        this._modalService = _modalService;
        this._cargaVideosService = _cargaVideosService;
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jwt = this._usuarioService.getJWT();
        this.idPersona = this._usuarioService.getIdentity().persona_id;
        this._cargaVideosService.nuevaUrl.subscribe(function (response) {
            if (_this.Videoconferencias) {
                _this.Videoconferencias[response['index']]['url_descarga'] = response['url_descarga'];
            }
        });
        this._conferenciaService.salaCerrada.subscribe(function (response) {
            var videoconferencias = _this.Videoconferencias.map(function (v) { return v.videoconferencia_id; });
            var index = videoconferencias.indexOf(response.videoconferencia_id);
            _this.Videoconferencias[index]['estatus_registro'] = 2;
            _this.Videoconferencias[index]['activo'] = false;
        });
        // console.log(localStorage.getItem('selectedAsignaturaGrupo'))
        this.idAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_grupo_id;
        this.consulta();
    };
    ConsultaComponent.prototype.consulta = function () {
        var _this = this;
        this._conferenciaService.consultaVideoconferencias(this.jwt, this.idAsignaturaGrupo).subscribe(function (response) {
            if (response && response['status']) {
                _this.Videoconferencias = response['videoconferencias'];
                // console.log(this.Videoconferencias);
                _this.Videoconferencias.forEach(function (videoconferencia) {
                    var arregloFecha = this._fechaService.validaVigencia(videoconferencia.fecha_inicio, videoconferencia.fecha_fin, 2);
                    videoconferencia.fecha_inicio = new Date(videoconferencia.fecha_inicio * 1000);
                    videoconferencia.fecha_fin = new Date(videoconferencia.fecha_fin * 1000);
                    videoconferencia.activo = arregloFecha[0];
                    videoconferencia.estatus = arregloFecha[1];
                    if (videoconferencia.estatus_registro == 2)
                        videoconferencia.activo = false;
                }.bind(_this));
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConsultaComponent.prototype.eliminar = function (id_videoconferencia, index) {
        alertify.confirm('', '¿Deseas eliminar la videoconferencia?', function () {
            var _this = this;
            this._conferenciaService.elimina(this.jwt, id_videoconferencia, this.idAsignaturaGrupo).subscribe(function (response) {
                if (response && response['estatus']) {
                    // console.log(response);
                    _this.Videoconferencias.splice(index, 1);
                    alertify.success(response['msg']).dismissOthers();
                    // console.log(this.Videoconferencias);          
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado').dismissOthers();
        }).set('labels', { ok: 'Sí', cancel: 'No' });
    };
    ConsultaComponent.prototype.consultarConferencia = function (id_videoconferencia) {
        this._conferenciaService.mostrarUsuarioConferencia.emit();
    };
    ConsultaComponent.prototype.open = function (content, videoconferencia, i) {
        this.seleccionada = { videoconferencia: videoconferencia, index: i };
        this._modalService.open(content);
    };
    ConsultaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consulta',
            template: __webpack_require__(/*! ./consulta.component.html */ "./src/app/docente/video-conferencia/consulta/consulta.component.html"),
            styles: [__webpack_require__(/*! ./consulta.component.scss */ "./src/app/docente/video-conferencia/consulta/consulta.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_1__["VideoConferenciaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_3__["FechaService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _carga_videos_carga_videos_service__WEBPACK_IMPORTED_MODULE_5__["CargaVideosService"]])
    ], ConsultaComponent);
    return ConsultaComponent;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/form/form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/docente/video-conferencia/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [ngStyle]=\"{'height': dateChecked? 'auto': '600px'}\">  \r\n  <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12\">\r\n    <form [formGroup]=\"videoForm\" (ngSubmit)=\"enviarInformacion()\" *ngIf=\"bandera\">\r\n      <div class=\"form-group\" *ngFor=\"let item of Items\">\r\n        <label *ngIf=\"!item.hidden\" class=\"control-label\">{{item.label}}</label>\r\n        <input *ngIf=\"item.type != 'textarea'\" [formControlName]=\"item.control\" class=\"form-control\" [type]=\"item.type\">\r\n        <textarea *ngIf=\"item.type == 'textarea' && !item.hidden\" [formControlName]=\"item.control\" class=\"form-control\" rows=\"5\" maxlength=\"255\"></textarea>\r\n        <span class=\"invalidText\" *ngIf=\"vF[item.control].touched && vF[item.control].invalid\">\r\n          {{'fmErrText' | translate}}\r\n        </span>                 \r\n      </div>\r\n      <div class=\"form-check mt-2\">\r\n        <input [checked]=\"checked\" type=\"checkbox\" class=\"form-check-input\" id=\"url_meet\" (click)=\"setUrl($event)\">\r\n        <label class=\"form-check-label\" for=\"url_meet\">Agregar url para videoconferencia</label>\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"vF.url\">\r\n        <!-- <label class=\"control-label\">Url de la videoconferencia</label> -->\r\n        <input formControlName=\"url\" class=\"form-control\" type=\"text\">             \r\n      </div>\r\n      <div class=\"form-check mt-2\" *ngIf=\"!idVideoconferencia\">\r\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"add_date\" (click)=\"setDateChecked($event)\">\r\n        <label class=\"form-check-label\" for=\"add_date\">Agregar más fechas</label>\r\n      </div>\r\n      <div class=\"row mt-2\" *ngIf=\"vF.arregloFechas && !idVideoconferencia\">\r\n        <div class=\"col-12\">\r\n          <label class=\"control-label\">Selecciona los meses <small>(agregar o quitar un mes borrará las selecciones de días hechas)</small></label>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"container border rounded py-2\">\r\n          <ul class=\"list-inline\">\r\n            <li class=\"list-inline-item border px-4 py-2 mx-0 mb-2\" *ngFor=\"let month of arrayMonths; let i = index;\"\r\n              [ngClass]=\"[i == 0? 'rounded-left': i < arrayMonths.length - 1? '': 'rounded-right',\r\n                month.checked? 'seleccionado': '']\"\r\n              (click)=\"setMonth(i)\"\r\n            >{{month.text}}</li>\r\n         </ul>\r\n         <app-calendario-component *ngIf=\"selectedMonths\" (Fechas)=\"getDates($event)\" [tipoCalendario]=\"1\" [Meses]=\"selectedMonths\"></app-calendario-component>\r\n        </div>\r\n        </div>       \r\n      </div>  \r\n      <div class=\"row mt-3\">\r\n        <div *ngIf=\"!vF.arregloFechas\" class=\"col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12\">\r\n          <label class=\"control-label\">Fecha inicio</label>\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"AAAA-MM-DD\"\r\n                       name=\"dp\" formControlName=\"fechaInicio\" [footerTemplate]=\"footerTemplate_1\" ngbDatepicker #d_1=\"ngbDatepicker\"\r\n                       [placement]=\"'bottom'\">\r\n                <div class=\"input-group-append\">\r\n                  <button #buttonEl class=\"btn btn-outline-primary calendar\" (click)=\"d_1.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                </div>\r\n          </div>\r\n          <ng-template #footerTemplate_1>\r\n            <hr class=\"my-0\">\r\n            <button class=\"btn btn-primary btn-sm m-2 float-left\" (click)=\"setData(1, today); d_1.close()\">Hoy</button>\r\n            <button class=\"btn btn-secondary btn-sm m-2 float-right\" (click)=\"d_1.close()\">Cerrar</button>\r\n          </ng-template>\r\n        </div>\r\n        <div [ngClass]=\"vF.fechaInicio? 'col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12': 'col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'\">\r\n          <div class=\"form-row alert alert-info\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\"> \r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Hora inicio</label>\r\n                <select class=\"form-control\" formControlName=\"horaInicio\">\r\n                  <option value=\"\" selected disabled hidden>Hora</option>\r\n                  <option [value]=\"i+6\" *ngFor=\"let hora of [].constructor(15); let i= index;\">\r\n                    <span *ngIf=\"i+6 < 12\"><p class=\"m-0 p-0\" *ngIf=\"i+6 < 10\">0</p>{{i+6}} A.M</span>\r\n                    <span *ngIf=\"i+6 == 12\">{{i+6}} P.M</span>\r\n                    <span *ngIf=\"i+6 > 12\">0{{i-6}} P.M</span>\r\n                  </option>\r\n                </select>\r\n              </div>\r\n    \r\n              <!-- <ngb-timepicker formControlName=\"horaInicio\" [meridian]=\"meridian\"></ngb-timepicker> -->\r\n            </div>\r\n    \r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\"> \r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Minutos inicio</label>\r\n                <select class=\"form-control\" formControlName=\"minutosInicio\">\r\n                  <option value=\"\" selected disabled hidden>Minutos</option>\r\n                  <option [value]=\"i * 5\" *ngFor=\"let hora of [].constructor(12); let i= index;\">\r\n                    {{i*5}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div  [ngClass]=\"!vF.arregloFechas? 'col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12': 'col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'\">\r\n          <div class=\"form-row alert alert-info\">\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\"> \r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Duración (Horas)</label>\r\n                <select  formControlName=\"horas\" class=\"form-control\" >\r\n                  <option value=\"\" disabled selected hidden>Selecciona una opción</option>\r\n                  <option [value]=\"i\" *ngFor=\"let hora of [].constructor(11); let i = index;\">{{i}}  \r\n                    <span *ngIf=\"i == 1\">hora</span>\r\n                    <span *ngIf=\"i != 1\">horas</span>\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12\"> \r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Duración (Minutos)</label>\r\n                <select formControlName=\"minutos\" class=\"form-control\">\r\n                  <option value=\"\" disabled selected hidden>Selecciona una opción</option>\r\n                  <option [value]=\"minuto\" *ngFor=\"let minuto of minutos; let i = index;\">{{minuto}} minutos</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n  \r\n        <!-- <div class=\"col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12\">\r\n          <div class=\"form-group pull-right\">\r\n          <label class=\"control-label\">Duración (hrs) </label> \r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" type=\"number\" placeholder=\"Duración de la clase\" formControlName=\"duracion\" >\r\n              </div>\r\n            </div>\r\n        </div> -->\r\n      </div>\r\n        <!--div class=\"col-12 mt-3\">\r\n          <label class=\"control-label\">Duración</label>\r\n        </div-->\r\n\r\n      <!-- <div class=\"form-row mt-3\">\r\n        <div class=\"form-group col-4\">\r\n          <label class=\"control-label\">Fecha inicio </label>\r\n          <input formControlName=\"fechaInicio\" type=\"date\" class=\"form-control\">\r\n          <span class=\"invalidText\" *ngIf=\"vF.fechaInicio.touched && vF.fechaInicio.invalid\">\r\n            {{'fmErrDate' | translate}}\r\n          </span>  \r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label class=\"control-label\">Hora inicio\r\n            <div class=\"_tooltip\"><i class=\"fa fa-info-circle fa-lg text-info\"></i>\r\n              <span class=\"tooltiptext p-2\">Ejemplo: 11:30 a.m.</span>\r\n            </div>\r\n          </label>\r\n          <input type=\"time\" class=\"form-control\">\r\n          <span class=\"invalidText\" *ngIf=\"vF.fechaInicio.touched && vF.fechaInicio.invalid\">\r\n            {{'fmErrTime' | translate}}\r\n          </span> \r\n        </div>\r\n        <div class=\"form-group col-4\">\r\n          <label class=\"control-label\">Fecha fin </label>\r\n          <input formControlName=\"fechaFin\" type=\"date\" class=\"form-control\">\r\n          <span class=\"invalidText\" *ngIf=\"vF.fechaFin.touched && vF.fechaFin.invalid\">\r\n            {{'fmErrDate' | translate}}\r\n          </span>    \r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label class=\"control-label\">Hora fin</label>\r\n          <input type=\"time\" class=\"form-control\">\r\n          <span class=\"invalidText\" *ngIf=\"vF.fechaInicio.touched && vF.fechaInicio.invalid\">\r\n            {{'fmErrTime' | translate}}\r\n          </span> \r\n        </div>\r\n      </div> -->\r\n          <!-- <div class=\"form-group mt-3\">\r\n        <label class=\"control-label\">Fecha inicio \r\n          <div class=\"_tooltip\"><i class=\"fa fa-info-circle fa-lg text-info\"></i>\r\n            <span class=\"tooltiptext p-2\">Ejemplo: 27/02/2020 11:30 a.m.</span>\r\n          </div>\r\n        </label>\r\n        <input formControlName=\"fechaInicio\" class=\"form-control\" type=\"datetime-local\">\r\n        <span class=\"invalidText\" *ngIf=\"vF.fechaInicio.touched && vF.fechaInicio.invalid\">\r\n          {{'fmErrDateTime' | translate}}\r\n        </span>                 \r\n      </div>      \r\n      <div class=\"form-group mt-3\">\r\n        <label class=\"control-label\">Fecha fin \r\n          <div class=\"_tooltip\"><i class=\"fa fa-info-circle fa-lg text-info\"></i>\r\n            <span class=\"tooltiptext p-2\">Ejemplo: 27/02/2020 12:30 p.m.</span>\r\n          </div>\r\n        </label>\r\n        <input formControlName=\"fechaFin\" class=\"form-control\" type=\"datetime-local\">\r\n        <span class=\"invalidText\" *ngIf=\"vF.fechaFin.touched && vF.fechaFin.invalid\">\r\n          {{'fmErrDateTime' | translate}}\r\n        </span>           \r\n      </div> -->\r\n      <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">\r\n        {{error}}\r\n      </div>      \r\n      <div class=\"form-group mt-3\">  \r\n        <button type=\"submit\" class=\"btn btn-success pull-right\" [disabled]=\"videoForm.invalid || bloqueoBoton == true\">{{'fmSave' | translate}}</button>\r\n      </div>  \r\n    </form>\r\n\r\n  </div>      \r\n</div>"

/***/ }),

/***/ "./src/app/docente/video-conferencia/form/form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/docente/video-conferencia/form/form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n._tooltip {\n  position: relative;\n  display: inline-block; }\n\n._tooltip .tooltiptext {\n  visibility: hidden;\n  width: 260px;\n  background-color: #17a2b8;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 2px 0;\n  /* Position the tooltip */\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -50px; }\n\n._tooltip:hover .tooltiptext {\n  visibility: visible; }\n\nli {\n  cursor: pointer; }\n\n.seleccionado {\n  background-color: #d1ecf1;\n  border-color: #bee5eb !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS92aWRlby1jb25mZXJlbmNpYS9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jZW50ZS92aWRlby1jb25mZXJlbmNpYS9mb3JtL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGRvY2VudGVcXHZpZGVvLWNvbmZlcmVuY2lhXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCLEVBQ25COztBQ2ZEO0VBQ0ksbUJBQWtCO0VBQ2xCLHNCQUFxQixFQUV0Qjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGVBQWM7RUFFZCwwQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixVQUFTO0VBQ1QsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsaUNBQWdDLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZG9jZW50ZS92aWRlby1jb25mZXJlbmNpYS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tZ3JvdXB7XHJcbiBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlci1jb2xvcjogICNkYzM1NDU7IFxyXG59XHJcbi5uZy12YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjsgXHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9mb3Jtcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuLl90b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5fdG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMnB4IDA7XHJcbiAgXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIH1cclxuICBcclxuICAuX3Rvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICBsaXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWxlY2Npb25hZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYiAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/docente/video-conferencia/form/form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/docente/video-conferencia/form/form.component.ts ***!
  \******************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/video-conferencia.service */ "./src/app/docente/video-conferencia/services/video-conferencia.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fecha.service */ "./src/app/services/fecha.service.ts");
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
    function FormComponent(formBuilder, _conferenciaService, _usuarioService, router, route, calendar, config, _fechaService) {
        this.formBuilder = formBuilder;
        this._conferenciaService = _conferenciaService;
        this._usuarioService = _usuarioService;
        this.router = router;
        this.route = route;
        this.calendar = calendar;
        this._fechaService = _fechaService;
        this.disabled = false;
        this.Data = [];
        this.Items = [];
        this.bandera = false;
        this.error = null;
        this.today = this.calendar.getToday();
        this.meridian = true;
        this.minutos = [0, 15, 30, 45];
        this.bloqueoBoton = false;
        this.checked = false;
        this.dateChecked = false;
        this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'];
        this.arrayMonths = [];
        config.spinners = false;
    }
    Object.defineProperty(FormComponent.prototype, "vF", {
        get: function () { return this.videoForm.controls; },
        enumerable: true,
        configurable: true
    });
    ;
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getUsersZoom();
        this.idVideoconferencia = this.route.snapshot.paramMap.get('id');
        this.jwt = this._usuarioService.getJWT();
        this.idPersona = this._usuarioService.getIdentity().persona_id;
        var asignatura = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura;
        var docente = this._usuarioService.getIdentity();
        this.Titulo = asignatura + " - " + docente.primer_apellido + " " + docente.segundo_apellido + " " + docente.nombre;
        this.idAsignaturaGrupo = JSON.parse(localStorage.getItem('selectedAsignaturaGrupo')).asignatura_grupo_id;
        if (this.idVideoconferencia) {
            this._conferenciaService.consultaConferencia(this.jwt, this.idVideoconferencia).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Videoconferencia = response['videoconferencia'];
                }
                _this.inicia();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.inicia();
        }
    };
    FormComponent.prototype.inicia = function () {
        var _this = this;
        this._conferenciaService.consulta(this.jwt, this.idPersona).subscribe(function (response) {
            if (response && response['status']) {
                _this.usuario = response['usuario'];
                _this.idUsuarioZoom = _this.usuario['usuario_zoom_id'];
                _this.disabled = true;
            }
            _this.Data = [
                // { label: 'API Key', control: 'apiKey', type: 'text', disabled: this.disabled, value: '' },
                // { label: 'API Secret', control: 'apiSecret', type: 'text', disabled: this.disabled, value: '' },
                // { label: 'ID personal de la reunión', control: 'idMeeting', type: 'number', disabled: this.disabled, value: '' },
                { label: 'Titulo de la videoconferencia', control: 'titulo', type: 'text', disabled: false, value: _this.Videoconferencia ? _this.Videoconferencia.nombre : _this.Titulo, required: true, hidden: false },
                // { label: 'Url de la videoconferencia', control: 'url', type: 'text', disabled: false, value: this.Videoconferencia? this.Videoconferencia.url_meet : '', required: false, hidden: false },
                { label: 'Descripción de la videoconferencia', control: 'descripcion', type: 'textarea', disabled: false, value: '', required: false, hidden: true }
            ];
            _this.createForm();
        }, function (error) {
            console.log(error);
        });
    };
    FormComponent.prototype.createForm = function () {
        var _this = this;
        var fechaInicio = '';
        var horaInicio = '';
        var horaFin = '';
        var minutosFin = '';
        var minutosInicio = '';
        var hours = '';
        var minutes = '';
        if (this.Videoconferencia) {
            var Inicio = new Date(this.Videoconferencia.fecha_inicio * 1000);
            var Fin = new Date(this.Videoconferencia.fecha_fin * 1000);
            // let Fin = new Date(this.Videoconferencia.fecha_fin*1000);
            fechaInicio = { year: Inicio.getFullYear(), month: Inicio.getMonth() + 1, day: Inicio.getDate() };
            // fechaInicio= {year: Inicio.getFullYear(), month: Inicio.getMonth()+1, day: Inicio.getDate()};
            // horaInicio = {hour: Inicio.getHours(), minute: Inicio.getMinutes(), second: Inicio.getSeconds()};
            horaInicio = Inicio.getHours();
            minutosInicio = Inicio.getMinutes();
            horaFin = Fin.getHours();
            minutosFin = Fin.getMinutes();
            var horas = parseInt(horaInicio);
            var minutos = parseInt(minutosInicio);
            var fin_horas = parseInt(horaFin);
            var fin_minutos = parseInt(minutosFin);
            var horas_Segundos = (fin_horas * 3600) - (horas * 3600);
            var minutos_Segundos = (fin_minutos * 60) - (minutos * 60);
            var segundos = minutos_Segundos + horas_Segundos;
            hours = Math.floor(segundos / 3600);
            minutes = Math.floor((segundos % 3600) / 60);
        }
        // let fechaInicio = this.Videoconferencia? this.Videoconferencia.fecha_inicio.replace(" ", "T") : '';
        // let fechaFin = this.Videoconferencia? this.Videoconferencia.fecha_fin.replace(" ", "T") : '';
        this.videoForm = this.formBuilder.group({
            fechaInicio: [{ value: fechaInicio, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            horaInicio: [{ value: horaInicio, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            minutosInicio: [{ value: minutosInicio, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            horas: [{ value: hours, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            minutos: [{ value: minutes, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zonaHoraria: new Date().getTimezoneOffset() / 60
        });
        this.Data.forEach(function (item) {
            if (!item.disabled) {
                _this.Items.push(item);
                var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: item.value, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"][item['required']]);
                _this.videoForm.addControl(item.control, control);
            }
        });
        if (this.Videoconferencia && this.Videoconferencia['url_meet'] != null && this.Videoconferencia['url_meet'] != undefined
            && this.Videoconferencia['url_meet'] != "") {
            this.setUrl(true, 1);
        }
        this.bandera = true;
    };
    FormComponent.prototype.enviarInformacion = function () {
        // if (!this.usuario) {
        //   this._conferenciaService.creaUsuario(this.jwt, this.videoForm.value).subscribe(response => {   
        //     if (response && response['status']) {
        //       this.idUsuarioZoom = response['idUsuarioZoom'];
        //       this.creaConferencia();
        //     }      
        //   }, error => {
        //     console.log(<any>error);
        //   });
        // }else {
        this.creaConferencia();
        // }
    };
    FormComponent.prototype.creaConferencia = function () {
        var _this = this;
        this.bloqueoBoton = true;
        var form = this.videoForm.value;
        // let duracion = `${form.horas}` 
        var horas = parseInt(form.horaInicio);
        var minutos = parseInt(form.minutosInicio);
        var fin_horas = parseInt(form.horas);
        var fin_minutos = parseInt(form.minutos);
        var horas_Segundos = (horas * 3600) + (fin_horas * 3600);
        var minutos_Segundos = (minutos * 60) + (fin_minutos * 60);
        var segundos = minutos_Segundos + horas_Segundos;
        var hours = Math.floor(segundos / 3600);
        var minutes = Math.floor((segundos % 3600) / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // let result = `${hours} : ${minutes}`;    
        // let horaF = parseInt(form.horaInicio) + parseInt(form.duracion );
        if (hours >= 24) {
            alertify.error('La duración de la videoconferencia no debe pasar del día seleccionado');
        }
        // this.arrayDates.forEach(d => {
        //   // form.arregloFechas.push(d)
        // });
        else {
            var duracion = hours - parseInt(form.horaInicio);
            if (duracion > 8 || (duracion == 8 && minutes > 0)) {
                alertify.error('La videoconferencia no debe durar más de 8 horas');
            }
            else {
                var fechas = void 0, tipoFecha = void 0;
                if (this.dateChecked) {
                    this.arrayDates.forEach(function (date) {
                        var datos = _this.formatDate(form, hours, minutes, 1, date);
                        var fInicio = _this._fechaService.formatoFecha(datos['fechaFin'], datos['horaInicio'], 0);
                        var fFin = _this._fechaService.formatoFecha(datos['fechaFin'], datos['horaFin'], 0);
                        form.arregloFechas.push({ inicio: fInicio, fin: fFin });
                    });
                    fechas = form.arregloFechas;
                    tipoFecha = 1;
                }
                else {
                    var datos = this.formatDate(form, hours, minutes, 0);
                    var fInicio = this._fechaService.formatoFecha(form.fechaInicio, datos['horaInicio'], 0);
                    var fFin = this._fechaService.formatoFecha(datos['fechaFin'], datos['horaFin'], 0);
                    fechas = { inicio: fInicio, fin: fFin };
                    tipoFecha = 0;
                }
                var edicion = 0;
                if (this.Videoconferencia) {
                    edicion = 1;
                }
                this._conferenciaService.creaConferencia(this.jwt, this.videoForm.value, edicion, this.idAsignaturaGrupo, this.idVideoconferencia, fechas, tipoFecha).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.bloqueoBoton = false;
                        alertify.success(response['msg']).dismissOthers();
                        _this.router.navigate(['/docente/video-conferencia/']);
                        _this._conferenciaService.mostrarUsuarioConferencia.emit();
                    }
                    else {
                        _this.bloqueoBoton = false;
                        alertify.error(response['msg']).dismissOthers();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }
        // let fechaInicio = new Date(fInicio).getTime();
        // let fechaFin = new Date(fFin).getTime();
        //if (fechaFin - fechaInicio <= 14400000 && fechaInicio < fechaFin) {
        //this.error = null;
        /*}else if (fechaFin - fechaInicio > 14400000) {
          this.videoForm.setErrors({invalid: true});
          this.error = 'La videoconferencia no puede durar más de 4 horas';
        }else if (fechaInicio > fechaFin) {
          this.videoForm.setErrors({invalid: true});
          this.error = 'La fecha de inicio debe ser menor a la fecha de fin';
        }*/
        // }
    };
    FormComponent.prototype.formatDate = function (form, hours, minutes, type, date) {
        if (date === void 0) { date = null; }
        var fechaFin = {
            "year": type == 0 ? form.fechaInicio.year : date.year,
            "month": type == 0 ? form.fechaInicio.month : date.month + 1,
            "day": type == 0 ? form.fechaInicio.day : date.day
        };
        var horaInicio = {
            "hour": parseInt(form.horaInicio),
            "minute": parseInt(form.minutosInicio)
        };
        var horaFin = {
            "hour": hours,
            "minute": parseInt(minutes)
        };
        return { fechaFin: fechaFin, horaInicio: horaInicio, horaFin: horaFin };
    };
    FormComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    FormComponent.prototype.setData = function (id, data) {
        if (id == 1) {
            this.videoForm.get('fechaInicio').setValue(data);
        }
        else {
            this.videoForm.get('fechaFin').setValue(data);
        }
    };
    // getUsersZoom() {
    //   this._conferenciaService.getUsersZoom().subscribe(response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(<any>error);
    //   });
    // }
    FormComponent.prototype.setUrl = function (event, id) {
        if (id === void 0) { id = 0; }
        if (id == 0)
            this.checked = event.target.checked;
        else if (id == 1)
            this.checked = event;
        if (this.checked) {
            this.videoForm.addControl('url', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](id == 0 ? '' : this.Videoconferencia['url_meet']));
        }
        else {
            this.videoForm.removeControl('url');
        }
    };
    FormComponent.prototype.setDateChecked = function (event) {
        var _this = this;
        this.dateChecked = event.target.checked;
        if (this.dateChecked) {
            this.videoForm.addControl('arregloFechas', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.videoForm.removeControl('fechaInicio');
        }
        else {
            this.videoForm.addControl('fechaInicio', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.videoForm.removeControl('arregloFechas');
            this.selectedMonths = null;
            this.arrayDates = null;
        }
        if (this.arrayMonths.length == 0) {
            this.months.forEach(function (m, i) {
                _this.arrayMonths.push({ value: i, text: m, checked: false });
            });
        }
        else {
            this.arrayMonths.forEach(function (m) {
                m.checked = false;
            });
        }
        if (this.dateChecked)
            this.setMonth(new Date().getMonth());
    };
    FormComponent.prototype.setMonth = function (index) {
        this.arrayMonths[index]['checked'] = !this.arrayMonths[index]['checked'];
        this.arrayDates = null;
        this.videoForm.get('arregloFechas').setValue([]);
        this.selectedMonths = this.arrayMonths.filter(function (m) { return m.checked == true; }).map(function (e) {
            return { value: e.value, text: e.text };
        });
        if (this.selectedMonths.length == 0)
            this.selectedMonths = null;
    };
    FormComponent.prototype.getDates = function (evt) {
        var _this = this;
        this.arrayDates = [];
        evt.forEach(function (e) { _this.arrayDates.push(JSON.parse(e)); });
        if (this.arrayDates.length > 0) {
            this.videoForm.get('arregloFechas').setErrors(null);
        }
        else {
            this.videoForm.get('arregloFechas').setErrors({ 'incorrect': true });
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/docente/video-conferencia/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/docente/video-conferencia/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_video_conferencia_service__WEBPACK_IMPORTED_MODULE_2__["VideoConferenciaService"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerConfig"],
            src_app_services_fecha_service__WEBPACK_IMPORTED_MODULE_6__["FechaService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/video-conferencia-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/video-conferencia-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: VideoConferenciaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenciaRoutingModule", function() { return VideoConferenciaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/docente/video-conferencia/consulta/consulta.component.ts");
/* harmony import */ var _video_conferencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-conferencia.component */ "./src/app/docente/video-conferencia/video-conferencia.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/docente/video-conferencia/form/form.component.ts");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/docente/video-conferencia/asistencia/asistencia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '',
        component: _video_conferencia_component__WEBPACK_IMPORTED_MODULE_3__["VideoConferenciaComponent"],
        children: [
            { path: '', redirectTo: 'consulta', pathMatch: 'full' },
            { path: 'consulta', component: _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_2__["ConsultaComponent"] },
            { path: 'nuevo', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'editar/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
            { path: 'asistencia/:id', component: _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_5__["AsistenciaComponent"] }
        ]
    }
];
var VideoConferenciaRoutingModule = /** @class */ (function () {
    function VideoConferenciaRoutingModule() {
    }
    VideoConferenciaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VideoConferenciaRoutingModule);
    return VideoConferenciaRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/video-conferencia.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/video-conferencia.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/docente/video-conferencia/video-conferencia.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/video-conferencia.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS92aWRlby1jb25mZXJlbmNpYS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kb2NlbnRlL3ZpZGVvLWNvbmZlcmVuY2lhL3ZpZGVvLWNvbmZlcmVuY2lhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kc2Nob29sLWNvbG9yOiAjMWU1Nzk5O1xyXG5cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmludmFsaWRUZXh0e1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtZXN0dWR5e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMi41cHggMi41cHggNSAgIHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAyLjVweCAyLjVweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7IFxyXG59XHJcblxyXG4uYWxlcnQtZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcblxyXG4uaWNvbi1lc3R1ZHl7XHJcbiAgICBjb2xvcjogJHNjaG9vbC1jb2xvclxyXG59XHJcbi5idG4tZXN0dWR5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNjaG9vbC1jb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tb2RhbC14bCAubW9kYWwtZGlhbG9nIHsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5mb25kbyB7IFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/docente/video-conferencia/video-conferencia.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/docente/video-conferencia/video-conferencia.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoConferenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenciaComponent", function() { return VideoConferenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoConferenciaComponent = /** @class */ (function () {
    function VideoConferenciaComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.title = 'Conferencia en vivo';
        this._usuarioService.pushBreadcum(this.title, "", 2);
    }
    VideoConferenciaComponent.prototype.ngOnInit = function () {
    };
    VideoConferenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-conferencia',
            template: __webpack_require__(/*! ./video-conferencia.component.html */ "./src/app/docente/video-conferencia/video-conferencia.component.html"),
            styles: [__webpack_require__(/*! ./video-conferencia.component.scss */ "./src/app/docente/video-conferencia/video-conferencia.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], VideoConferenciaComponent);
    return VideoConferenciaComponent;
}());



/***/ }),

/***/ "./src/app/docente/video-conferencia/video-conferencia.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/docente/video-conferencia/video-conferencia.module.ts ***!
  \***********************************************************************/
/*! exports provided: VideoConferenciaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoConferenciaModule", function() { return VideoConferenciaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _video_conferencia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-conferencia-routing.module */ "./src/app/docente/video-conferencia/video-conferencia-routing.module.ts");
/* harmony import */ var _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta/consulta.component */ "./src/app/docente/video-conferencia/consulta/consulta.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "./src/app/docente/video-conferencia/form/form.component.ts");
/* harmony import */ var _video_conferencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-conferencia.component */ "./src/app/docente/video-conferencia/video-conferencia.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/docente/video-conferencia/asistencia/asistencia.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _carga_videos_carga_videos_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carga-videos/carga-videos.module */ "./src/app/docente/carga-videos/carga-videos.module.ts");
/* harmony import */ var src_app_components_calendario_calendario_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/calendario/calendario.module */ "./src/app/components/calendario/calendario.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var VideoConferenciaModule = /** @class */ (function () {
    function VideoConferenciaModule() {
    }
    VideoConferenciaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_video_conferencia_component__WEBPACK_IMPORTED_MODULE_5__["VideoConferenciaComponent"], _consulta_consulta_component__WEBPACK_IMPORTED_MODULE_3__["ConsultaComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_8__["AsistenciaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _video_conferencia_routing_module__WEBPACK_IMPORTED_MODULE_2__["VideoConferenciaRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _carga_videos_carga_videos_module__WEBPACK_IMPORTED_MODULE_10__["CargaVideosModule"],
                src_app_components_calendario_calendario_module__WEBPACK_IMPORTED_MODULE_11__["CalendarioModule"]
            ]
        })
    ], VideoConferenciaModule);
    return VideoConferenciaModule;
}());



/***/ })

}]);
//# sourceMappingURL=docente-video-conferencia-video-conferencia-module.js.map