(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~admi~73467125"],{

/***/ "./src/app/components/archivo/archivo.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/archivo/archivo.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" >\r\n  <div class=\"col archivo\">  \r\n    <a  *ngIf=\"tipoVista == 1 && !(ext == 'png' || ext == 'jpg' || ext =='jpeg' || ext == 'gif' || ext== 'avi' || ext == 'jfif' || ext== 'mp4'|| ext== 'm4v' || ext== 'mov' || ext== 'mpg' || ext== 'mpeg' || ext== 'swf' ||\r\n                 ext == 'mp3' || ext == 'm4a' || ext == 'wav' || ext == 'wma')\" class=\"btn btn-link\" href=\"{{urlArchivo}}\"  target=\"_blank\" style=\"white-space: unset;\">\r\n      <i class=\"fa {{archivo.icono}}\"></i>  \r\n      <span *ngIf=\" nombre\"> Descargar {{nombre}}</span>\r\n      <span *ngIf=\" !nombre\">{{archivo.tipo}} </span>\r\n    </a>\r\n    <button *ngIf=\" tipoVista == 1 && (ext == 'png' || ext == 'jpg' || ext=='jpeg' || ext== 'gif' || ext == 'jfif')\" type=\"button\" class=\"btn btn-link\" (click)=\"open(content)\"><i class=\"fa {{archivo.icono}}\"></i>{{archivo.tipo}}</button>\r\n    <button *ngIf=\" tipoVista == 1 && ( ext == 'avi' || ext == 'mp4' || ext== 'm4v' || ext== 'mov' || ext== 'mpg' || ext== 'mpeg' || ext== 'swf' )\" type=\"button\" class=\"btn btn-link\" (click)=\"open(contentVideo)\"><i class=\"fa {{archivo.icono}}\"></i>{{archivo.tipo}}</button>\r\n    <audio *ngIf=\"ext == 'mp3' || ext == 'm4a' || ext == 'wav' || ext == 'wma'\" width=\"100%\" height=\"100%\" [src]=\"urlArchivo\" preload=\"auto\" controls></audio>\r\n    <!-- <button *ngIf=\"ext == 'mp3' || ext == 'm4a' || ext == 'wav' || ext == 'wma'\" type=\"button\"><i class=\"fa {{archivo.icono}}\"></i>{{archivo.tipo}}</button> -->\r\n    <img *ngIf=\"tipoVista == 2 && (ext == 'png' || ext == 'jpg' || ext=='jpeg' || ext== 'gif' || ext == 'jfif')\" width=\"100%\" [src]=\"urlArchivo\" alt=\"\" aria-controls=\"\"><br>\r\n    <video *ngIf=\"tipoVista == 2 && ( ext == 'avi' || ext == 'mp4' || ext== 'm4v' || ext== 'mov' || ext== 'mpg' || ext== 'mpeg' || ext== 'swf' )\" width=\"100%\" [src]=\"urlArchivo\" alt=\"\" controls></video><br>\r\n    <iframe *ngIf=\"tipoVista == 2 && ext == 'pdf'\" [src]=\"urlArchivo\" type=\"application/pdf\"></iframe>\r\n  </div>\r\n\r\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"img\">\r\n        <img width=\"175%\" [src]=\"urlArchivo\" alt=\"\"aria-controls=\"\" id=\"imagenModal\">\r\n        <button class=\"btn btn-primary pantallaC\" style=\"vertical-align: top;\"><i class=\"fa fa-arrows-alt\" aria-hidden=\"true\" (click)=\"pantallaCompleta()\"></i></button>\r\n      </div>\r\n  </ng-template>\r\n  <ng-template #contentVideo let-c=\"close\" let-d=\"dismiss\">\r\n    <video width=\"100%\" [src]=\"urlArchivo\" alt=\"\" controls autoplay></video>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/archivo/archivo.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/archivo/archivo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "audio:focus, audio.form-control:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\niframe {\n  margin-top: -50px;\n  width: 100%;\n  height: 600px; }\n\n.archivo {\n  overflow: hidden;\n  height: 600 px; }\n\n.img {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.pantallaC {\n  margin-top: -91%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcmNoaXZvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFyY2hpdm9cXGFyY2hpdm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBdUI7RUFDdkIsNEJBQTJCO0VBQzNCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksaUJBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FyY2hpdm8vYXJjaGl2by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImF1ZGlvOmZvY3VzLCBhdWRpby5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlmcmFtZXtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5hcmNoaXZve1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA2MDAgcHg7XHJcbn1cclxuLmltZ3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnBhbnRhbGxhQ3tcclxuICAgIG1hcmdpbi10b3A6IC05MSU7XHJcbn1cclxuLy8gZGl2e1xyXG4vLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/archivo/archivo.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/archivo/archivo.component.ts ***!
  \*********************************************************/
/*! exports provided: ArchivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoComponent", function() { return ArchivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchivoComponent = /** @class */ (function () {
    function ArchivoComponent(modalService, sanitizer) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.tipoArchivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_3__["Archivo"];
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlAssets;
    }
    ArchivoComponent.prototype.ngOnInit = function () {
        if (!this.tipoVista)
            this.tipoVista = 1;
    };
    ArchivoComponent.prototype.ngOnChanges = function () {
        // console.log('entro!')
        // console.log(this.urlBase)
        this.existe = this.urlBase ? true : false;
        this.ext = this.getExtension(this.urlBase);
        switch (this.ext) {
            case 'docx':
            case 'doc':
            case 'odt':
                this.icono = 'fa-file-word-o';
                this.descripcion = 'Descargar documento Word';
                break;
            case 'pdf':
                this.icono = 'fa-file-pdf-o';
                this.descripcion = 'Descargar documento PDF';
                break;
            case 'xls':
            case 'xlsx':
            case 'xlsm':
            case 'csv':
            case 'ods':
                this.icono = 'fa-file-excel-o';
                this.descripcion = 'Descargar hoja de calculo';
                break;
            case 'pptx':
            case 'ppSx':
            case 'pptm':
            case 'ppt':
            case 'pps':
            case 'potx':
            case 'ppam':
                this.icono = 'fa-file-powerpoint-o';
                this.descripcion = 'Descargar presentación';
                break;
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'jfif':
                this.icono = 'fa-file-image-o';
                this.descripcion = 'Ver imagen';
                break;
            case 'mp3':
            case 'm4a':
            case 'wav':
            case 'wma':
                this.icono = 'fa-file-audio-o';
                this.descripcion = 'Escuchar audio';
                break;
            case 'avi':
            case 'mp4':
            case 'm4v':
            case 'mov':
            case 'mpg':
            case 'mpeg':
            case 'swf':
                this.icono = 'fa-file-video-o';
                this.descripcion = 'Ver video';
                break;
            case 'zip':
            case 'rar':
                this.icono = 'fa-file-archive-o';
                this.descripcion = 'Descargar archivo comprimido';
                break;
            case 'dwg':
            case 'dwf':
            case 'dxf':
                this.icono = 'fa-file-archive-o';
                this.descripcion = 'Descargar archivo AutoCad';
                break;
            default:
                this.icono = 'fa-file-archive-o';
                this.descripcion = 'Descarga archivo';
                break;
        }
        this.transform();
    };
    ArchivoComponent.prototype.transform = function () {
        if (this.icono == 'fa-file-pdf-o' && this.tipoVista == 2) {
            this.archivo = { url: this.urlArchivo, tipo: this.descripcion, icono: this.icono };
            this.urlArchivo = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.urlBase);
        }
        else {
            this.urlArchivo = this.url + this.urlBase;
            this.archivo = { url: this.urlArchivo, tipo: this.descripcion, icono: this.icono };
        }
    };
    ArchivoComponent.prototype.pantallaCompleta = function () {
        window.open(this.urlArchivo, "_blank");
        //  var imagen = document.getElementById("imagenModal");
        //  var altura = screen.height;
        //  var ancho = screen.width;
    };
    ArchivoComponent.prototype.getExtension = function (url) {
        var arrayImagen = url.split('.');
        var ext = arrayImagen[arrayImagen.length - 1];
        // console.log('extension'+ ext)
        return ext;
    };
    ArchivoComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ArchivoComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArchivoComponent.prototype, "urlBase", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArchivoComponent.prototype, "nombre", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ArchivoComponent.prototype, "tipoVista", void 0);
    ArchivoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archivo',
            template: __webpack_require__(/*! ./archivo.component.html */ "./src/app/components/archivo/archivo.component.html"),
            styles: [__webpack_require__(/*! ./archivo.component.scss */ "./src/app/components/archivo/archivo.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], ArchivoComponent);
    return ArchivoComponent;
}());



/***/ }),

/***/ "./src/app/components/archivo/archivo.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/archivo/archivo.module.ts ***!
  \******************************************************/
/*! exports provided: ArchivoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoModule", function() { return ArchivoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _archivo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archivo.component */ "./src/app/components/archivo/archivo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArchivoModule = /** @class */ (function () {
    function ArchivoModule() {
    }
    ArchivoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_archivo_component__WEBPACK_IMPORTED_MODULE_2__["ArchivoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _archivo_component__WEBPACK_IMPORTED_MODULE_2__["ArchivoComponent"]
            ]
        })
    ], ArchivoModule);
    return ArchivoModule;
}());



/***/ }),

/***/ "./src/app/services/archivos.ts":
/*!**************************************!*\
  !*** ./src/app/services/archivos.ts ***!
  \**************************************/
/*! exports provided: Archivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
/* variable sincronizada con la base de de estudydg.cat_formatos */
var Archivo = [
    { id: 1, nombre: "Imagen", formatos: "jpg,jpeg,png,gif" },
    { id: 2, nombre: "Documento", formatos: "txt,doc,docx,pdf,odt" },
    { id: 3, nombre: "Presentación ", formatos: "pptx,ppsx,pptm,ppt,pps,potx,ppam" },
    { id: 4, nombre: "Hoja de cálculo ", formatos: "xlsx,xlsm,xlsb,xltx,xls,csv" },
    { id: 5, nombre: "Audio", formatos: "mp3,m4a,mp4,wav,wma" },
    { id: 6, nombre: "Video", formatos: "avi,mp4,m4v,mov,mpg,mpeg,swf" },
    { id: 100, nombre: "Archivo", formatos: "txt,doc,docx,odt,ppt,pdf,pps,jpg,jpeg,png,gif,jfif,pptx,pptm,ppt,potx,ppam,xlsx,xlsm,xlsb,xltx,XLR,mp3,m4a,mp4,wav,wma,avi,mp4, m4v, mov,mpg,mpeg,swf,wmv,zip,rar" },
];


/***/ })

}]);
//# sourceMappingURL=default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~admi~73467125.js.map