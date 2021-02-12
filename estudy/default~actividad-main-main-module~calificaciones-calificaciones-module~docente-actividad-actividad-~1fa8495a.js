(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-main-main-module~calificaciones-calificaciones-module~docente-actividad-actividad-~1fa8495a"],{

/***/ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-autosize/fesm5/ngx-autosize.js ***!
  \*********************************************************/
/*! exports provided: AutosizeDirective, AutosizeModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizeDirective", function() { return AutosizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutosizeModule", function() { return AutosizeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ WindowRef.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function WindowRef_Factory() { return new WindowRef(); }, token: WindowRef, providedIn: "root" });
    return WindowRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAX_LOOKUP_RETRIES = 3;
var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(element, _window, _zone) {
        this.element = element;
        this._window = _window;
        this._zone = _zone;
        this.onlyGrow = false;
        this.useImportant = false;
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.retries = 0;
        this._destroyed = false;
        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
        }
        else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style.overflow = 'hidden';
            this._onTextAreaFound();
        }
    }
    Object.defineProperty(AutosizeDirective.prototype, "minRows", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minRows = value;
            if (this.textAreaEl) {
                this.textAreaEl.rows = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} textArea
     * @return {?}
     */
    AutosizeDirective.prototype.onInput = /**
     * @param {?} textArea
     * @return {?}
     */
    function (textArea) {
        this.adjust();
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed = true;
        if (this._windowResizeHandler) {
            this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
        }
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.adjust();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AutosizeDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.adjust(true);
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._findNestedTextArea = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');
        if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
            this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
        }
        if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
            }
            else {
                this.retries++;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._findNestedTextArea();
                }), 100);
            }
            return;
        }
        this.textAreaEl.style.overflow = 'hidden';
        this._onTextAreaFound();
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._onTextAreaFound = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._addWindowResizeHandler();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.adjust();
        }));
    };
    /**
     * @return {?}
     */
    AutosizeDirective.prototype._addWindowResizeHandler = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._windowResizeHandler = Debounce((/**
         * @return {?}
         */
        function () {
            _this._zone.run((/**
             * @return {?}
             */
            function () {
                _this.adjust();
            }));
        }), 200);
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._window.nativeWindow.addEventListener('resize', _this._windowResizeHandler, false);
        }));
    };
    /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    AutosizeDirective.prototype.adjust = /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    function (inputsChanged) {
        if (inputsChanged === void 0) { inputsChanged = false; }
        if (!this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
            /** @type {?} */
            var currentText = this.textAreaEl.value;
            if (inputsChanged === false &&
                currentText === this._oldContent &&
                this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
            }
            this._oldContent = currentText;
            this._oldWidth = this.textAreaEl.offsetWidth;
            /** @type {?} */
            var clone = this.textAreaEl.cloneNode(true);
            /** @type {?} */
            var parent_1 = this.textAreaEl.parentNode;
            clone.style.width = this.textAreaEl.offsetWidth + 'px';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.textContent = currentText;
            parent_1.appendChild(clone);
            clone.style.overflow = 'hidden';
            clone.style.height = 'auto';
            /** @type {?} */
            var height = clone.scrollHeight;
            // add into height top and bottom borders' width
            /** @type {?} */
            var computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);
            height += parseInt(computedStyle.getPropertyValue('border-top-width'));
            height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
            // add into height top and bottom paddings width
            height += parseInt(computedStyle.getPropertyValue('padding-top'));
            height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
            /** @type {?} */
            var oldHeight = this.textAreaEl.offsetHeight;
            /** @type {?} */
            var willGrow = height > oldHeight;
            if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                var lineHeight = this._getLineHeight();
                /** @type {?} */
                var rowsCount = height / lineHeight;
                if (this._minRows && this._minRows >= rowsCount) {
                    height = this._minRows * lineHeight;
                }
                else if (this.maxRows && this.maxRows <= rowsCount) {
                    // never shrink the textarea if onlyGrow is true
                    /** @type {?} */
                    var maxHeight = this.maxRows * lineHeight;
                    height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                    this.textAreaEl.style.overflow = 'auto';
                }
                else {
                    this.textAreaEl.style.overflow = 'hidden';
                }
                /** @type {?} */
                var heightStyle = height + 'px';
                /** @type {?} */
                var important = this.useImportant ? 'important' : '';
                this.textAreaEl.style.setProperty('height', heightStyle, important);
                this.resized.emit(height);
            }
            parent_1.removeChild(clone);
        }
    };
    /**
     * @private
     * @return {?}
     */
    AutosizeDirective.prototype._getLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);
        if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
            /** @type {?} */
            var styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);
            lineHeight = parseInt(styles.lineHeight, 10);
        }
        if (isNaN(lineHeight)) {
            /** @type {?} */
            var fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
            lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
        }
        return lineHeight;
    };
    AutosizeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[autosize]'
                },] }
    ];
    /** @nocollapse */
    AutosizeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: WindowRef },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    AutosizeDirective.propDecorators = {
        minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useImportant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event.target'],] }]
    };
    return AutosizeDirective;
}());
if (false) {}
/**
 * @param {?} func
 * @param {?} wait
 * @param {?=} immediate
 * @return {?}
 */
function Debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    /** @type {?} */
    var timeout;
    return (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var context = this;
        /** @type {?} */
        var args = arguments;
        /** @type {?} */
        var later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutosizeModule = /** @class */ (function () {
    function AutosizeModule() {
    }
    AutosizeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [AutosizeDirective],
                    imports: [],
                    providers: [
                        WindowRef
                    ],
                    exports: [AutosizeDirective]
                },] }
    ];
    return AutosizeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-autosize.js.map


/***/ }),

/***/ "./src/app/components/file-upload/file.upload.validators.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/file-upload/file.upload.validators.ts ***!
  \******************************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
/* harmony import */ var src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/archivos */ "./src/app/services/archivos.ts");

function requiredFileType(type) {
    return function (control) {
        var archivo = src_app_services_archivos__WEBPACK_IMPORTED_MODULE_0__["Archivo"];
        var tipoArchivos;
        if (type == 0) {
            type = archivo.length - 1;
            tipoArchivos = archivo[type].formatos;
        }
        else {
            tipoArchivos = archivo[type].formatos;
        }
        var file = control.value;
        if (file) {
            var archivo_1 = file.name.split('.');
            var longitud = archivo_1.length;
            var extension = file.name.split('.')[longitud - 1].toLowerCase();
            if (tipoArchivos.indexOf(extension.toLowerCase()) == -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/docente/retroalimentacion/retroalimentacion-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/retroalimentacion-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RetroalimentacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionRoutingModule", function() { return RetroalimentacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _retroalimentacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retroalimentacion.component */ "./src/app/docente/retroalimentacion/retroalimentacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _retroalimentacion_component__WEBPACK_IMPORTED_MODULE_2__["RetroalimentacionComponent"] },
];
var RetroalimentacionRoutingModule = /** @class */ (function () {
    function RetroalimentacionRoutingModule() {
    }
    RetroalimentacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RetroalimentacionRoutingModule);
    return RetroalimentacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/docente/retroalimentacion/retroalimentacion.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/retroalimentacion.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--h3 class=\" text-center\">Retroalimentacion de {{actividad.actividad_nombre}}</h3-->\r\n<div class=\"messaging\" >\r\n      <div class=\"inbox_msg\">\r\n        <div *ngIf=\"idRol==3\" class=\"mesgs\">\r\n          <h5 class=\"text-center p-3\" *ngIf=\"!mensaje || mensaje.length==0\">No hay Mensajes de retroalimentacion</h5>\r\n          <div class=\"msg_history\" *ngFor=\"let men of mensaje\">\r\n            <div class=\"incoming_msg\"  *ngIf=\"men.origen==2\">\r\n              <div class=\"incoming_msg_img\"> <img src=\"https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png\" alt=\"sunil\"> </div>\r\n              <div class=\"received_msg\">\r\n                <div class=\"received_withd_msg1\">\r\n                  <p *ngIf=\"men.texto != ''\">{{men.texto}}</p>\r\n                  <div class=\"archivo\" *ngIf=\"men.url_imagen && men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                  <div *ngIf=\"men.url_imagen && !men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                  <span class=\"time_date\"> {{men.fecha_creacion | date: 'dd/MM/yy (hh:mm:ss)'}} </span></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"outgoing_msg\" *ngIf=\"men.origen==3\">\r\n              <div class=\"sent_msg1\">\r\n                <p *ngIf=\"men.texto != ''\">{{men.texto}}</p>\r\n                <div class=\"archivo\" *ngIf=\"men.url_imagen && men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                <div *ngIf=\"men.url_imagen && !men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                <span class=\"time_date\"> {{men.fecha_creacion | date: 'dd/MM/yy (hh:mm:ss)'}} <i *ngIf=\"men.origen==3 && men.visto==1\" class=\"fa fa-check\" aria-hidden=\"true\"></i> </span> </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div *ngIf=\"idRol==3\" class=\"type_msg\">\r\n          <div class=\"input_msg_write row\">\r\n            <input class=\"write_msg\" id=\"mensaje\" name=\"mensaje\" [(ngModel)]=\"texto\" placeholder=\"Escribe un mensaje\" />\r\n            <button class=\"msg_send_btn\" type=\"button\" (click)=\"enviar(texto)\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div> -->\r\n        <div *ngIf=\"idRol==2\" class=\"mesgs\">\r\n            <h3 *ngIf=\"!mensaje || mensaje.length==0\">No hay Mensajes</h3>\r\n            <div class=\"msg_history\" *ngFor=\"let men of mensaje\">\r\n              <div class=\"incoming_msg\"  *ngIf=\"men.origen==2\">\r\n                <div class=\"incoming_msg_img\"> <img src=\"https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png\" alt=\"sunil\"> </div>\r\n                <div class=\"received_msg\">\r\n                  <div class=\"received_withd_msg\">\r\n                    <p *ngIf=\"men.texto != ''\">{{men.texto}}</p>\r\n                    <div class=\"archivo\" *ngIf=\"men.url_imagen && men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                    <div *ngIf=\"men.url_imagen && !men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                    <span class=\"time_date\"> {{men.fecha_creacion | date: 'dd/MM/yyyy (hh:mm:ss)'}} <i *ngIf=\"men.origen==2 && men.visto==1\" class=\"fa fa-check\" aria-hidden=\"true\"></i></span></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"outgoing_msg\" *ngIf=\"men.origen==3\">\r\n                <div class=\"sent_msg\">\r\n                  <p *ngIf=\"men.texto != ''\">{{men.texto}}</p>\r\n                  <div class=\"archivo\" *ngIf=\"men.url_imagen && men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                  <div  *ngIf=\"men.url_imagen && !men.fondo\" ><app-archivo  [urlBase]=\"men.url_imagen\"></app-archivo></div>\r\n                  <span class=\"time_date\"> {{men.fecha_creacion | date: 'dd/MM/yyyy (hh:mm:ss)'}}</span> </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div *ngIf=\"idRol==2\" class=\"type_msg\">\r\n            <div class=\"input_msg_write\">\r\n              <input class=\"write_msg\" id=\"mensaje\" name=\"mensaje\" [(ngModel)]=\"texto\" placeholder=\"Escribe un mensaje\" />\r\n              <button class=\"msg_send_btn\" type=\"button\" (click)=\"enviar(texto)\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\r\n            </div>\r\n          </div> -->\r\n      </div>\r\n      <div class=\"type_msg\">\r\n        <textarea class=\"write_msg\" autosize [minRows]=\"1\" [maxRows]=\"5\" [(ngModel)]=\"texto\" placeholder=\"Escribe un mensaje\"></textarea>\r\n        <button *ngIf=\"!cargando\" class=\"msg_send_btn text-center\" type=\"button\" (click)=\"enviar(texto)\" [disabled]=\"cargando\"><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\r\n        <button *ngIf=\"cargando\" class=\"msg_send_btn text-center\" type=\"button\" (click)=\"enviar(texto)\" [disabled]=\"cargando\"><i class=\"fa fa-spin fa-spinner\" aria-hidden=\"true\"></i></button>\r\n        <button class=\"archivo_btn text-center\" type=\"button\" (click)=\"abreArchivo()\"><i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i></button>\r\n      </div>\r\n      <form *ngIf=\"openFile\" [formGroup]=\"contForm\">\r\n        <app-file-upload formControlName=\"contenido\"></app-file-upload>\r\n      </form>\r\n      <div class=\"custom-control custom-checkbox\" [hidden]=\"!muestraCheckbox\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"visto\" [(ngModel)]=\"visto\" [checked]=\"visto\" (change)=\"cambiaVistoMensaje()\">\r\n        <label class=\"custom-control-label\" for=\"visto\">Marcar como visto</label>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/docente/retroalimentacion/retroalimentacion.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/retroalimentacion.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%; }\n\n.inbox_people {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 10%;\n  border-right: 1px solid #c4c4c4; }\n\n.inbox_msg {\n  border-top: 1px solid #c4c4c4;\n  border-left: 1px solid #c4c4c4;\n  border-right: 1px solid #c4c4c4;\n  border-bottom: 1px solid white;\n  clear: both;\n  overflow: hidden; }\n\n.top_spac {\n  margin: 20px 0 0; }\n\n.recent_heading {\n  float: left;\n  width: 40%; }\n\n.srch_bar {\n  display: inline-block;\n  text-align: right;\n  width: 100%; }\n\n.headind_srch {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4; }\n\n.recent_heading h4 {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto; }\n\n.srch_bar input {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none; }\n\n.srch_bar .input-group-addon button {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px; }\n\n.srch_bar .input-group-addon {\n  margin: 0 0 0 -27px; }\n\n.chat_ib h5 {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0; }\n\n.chat_ib h5 span {\n  font-size: 13px;\n  float: right; }\n\n.chat_ib p {\n  font-size: 14px;\n  color: #989898;\n  margin: auto; }\n\n.chat_img {\n  float: left;\n  width: 11%; }\n\n.chat_ib {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%; }\n\n.chat_people {\n  overflow: hidden;\n  clear: both; }\n\n.chat_list {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px; }\n\n.inbox_chat {\n  height: 550px;\n  overflow-y: scroll; }\n\n.active_chat {\n  background: #ebebeb; }\n\n.incoming_msg_img {\n  display: inline-block;\n  width: 6%; }\n\n.received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%; }\n\n.received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n  white-space: pre-wrap; }\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.received_withd_msg {\n  width: 57%; }\n\n.received_withd_msg1 p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0; }\n\n.received_withd_msg1 {\n  width: 57%; }\n\n.mesgs {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 100%;\n  max-height: calc(100vh - 210px);\n  overflow-y: auto; }\n\n.sent_msg p {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 70%;\n  white-space: pre-wrap; }\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.sent_msg {\n  float: right;\n  width: 46%; }\n\n.sent_msg1 p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #646464;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n.outgoing_msg {\n  overflow: hidden;\n  margin: 26px 0 26px; }\n\n.sent_msg1 {\n  float: right;\n  width: 46%; }\n\n.input_msg_write input {\n  background: #f3f3f3 none repeat scroll 0 0;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 96%; }\n\n.type_msg {\n  overflow: hidden; }\n\n.msg_send_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  height: 33px;\n  margin-left: .5%;\n  margin-bottom: 1%;\n  width: 33px;\n  position: absolute; }\n\n.archivo_btn {\n  background: #05728f none repeat scroll 0 0;\n  border: none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  height: 33px;\n  margin-left: 45px;\n  margin-bottom: 1%;\n  width: 33px;\n  position: absolute; }\n\n.messaging {\n  padding: 0 0 0 0; }\n\n.msg_history {\n  overflow-y: auto;\n  width: 100%; }\n\n.write_msg {\n  margin-top: .3%;\n  border-radius: 12px; }\n\nbutton:focus, button.form-control:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\ntextarea:focus, textarea.form-control:focus {\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none; }\n\ntextarea::-moz-placeholder {\n  border-left: 2%; }\n\ntextarea::placeholder {\n  border-left: 2%; }\n\ntextarea {\n  background-color: #f0f0f0 !important;\n  resize: none;\n  width: calc(100% - 80px); }\n\n.archivo {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #646464;\n  padding: 5px 10px 5px 12px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jZW50ZS9yZXRyb2FsaW1lbnRhY2lvbi9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxkb2NlbnRlXFxyZXRyb2FsaW1lbnRhY2lvblxccmV0cm9hbGltZW50YWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFBSyxnQkFBYyxFQUFHOztBQUN0QjtFQUNFLDJDQUEwQztFQUMxQyxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLFdBQVU7RUFBRSxnQ0FBOEIsRUFDM0M7O0FBQ0Q7RUFDRSw4QkFBNkI7RUFDN0IsK0JBQThCO0VBQzlCLGdDQUErQjtFQUMvQiwrQkFBOEI7RUFFOUIsWUFBVztFQUNYLGlCQUFnQixFQUNqQjs7QUFDRDtFQUFXLGlCQUFnQixFQUFHOztBQUc5QjtFQUFpQixZQUFXO0VBQUUsV0FBUyxFQUFHOztBQUMxQztFQUNFLHNCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsWUFBVyxFQUNaOztBQUNEO0VBQWUsNkJBQTJCO0VBQUUsaUJBQWU7RUFBRSxpQ0FBK0IsRUFBRzs7QUFFL0Y7RUFDRSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBQ0Q7RUFBaUIsMEJBQXdCO0VBQUUsd0JBQXNCO0VBQUUsV0FBUztFQUFFLHVCQUFxQjtFQUFFLGlCQUFlLEVBQUc7O0FBQ3ZIO0VBQ0Usb0RBQW1EO0VBQ25ELG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUNEO0VBQStCLG9CQUFtQixFQUFHOztBQUVyRDtFQUFhLGdCQUFjO0VBQUUsZUFBYTtFQUFFLGtCQUFnQixFQUFHOztBQUMvRDtFQUFrQixnQkFBYztFQUFFLGFBQVcsRUFBRzs7QUFDaEQ7RUFBWSxnQkFBYztFQUFFLGVBQWE7RUFBRSxhQUFXLEVBQUU7O0FBQ3hEO0VBQ0UsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFDRDtFQUNFLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsV0FBVSxFQUNYOztBQUVEO0VBQWMsaUJBQWU7RUFBRSxZQUFVLEVBQUc7O0FBQzVDO0VBQ0UsaUNBQWdDO0VBQ2hDLFVBQVM7RUFDVCx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFBYyxjQUFhO0VBQUUsbUJBQWtCLEVBQUc7O0FBRWxEO0VBQWMsb0JBQWtCLEVBQUc7O0FBRW5DO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVMsRUFDVjs7QUFDRDtFQUNFLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLFdBQVUsRUFDVjs7QUFDRDtFQUNDLDJDQUEwQztFQUMxQyxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsVUFBUztFQUNULDJCQUEwQjtFQUMxQixZQUFXO0VBQ1gsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlLEVBQ2hCOztBQUNEO0VBQXNCLFdBQVUsRUFBRzs7QUFHbkM7RUFDRSwyQ0FBMEM7RUFDMUMsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLFVBQVM7RUFDVCwyQkFBMEI7RUFDMUIsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFBYztFQUNkLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGdCQUFlLEVBQ2hCOztBQUNEO0VBQXVCLFdBQVUsRUFBRzs7QUFDcEM7RUFFRSxZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxnQ0FBK0I7RUFDL0IsaUJBQWdCLEVBRWpCOztBQUVBO0VBQ0MsMkNBQTBDO0VBQzFDLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFVBQVM7RUFBRSxZQUFVO0VBQ3JCLDJCQUEwQjtFQUMxQixXQUFTO0VBQ1Qsc0JBQXFCLEVBQ3RCOztBQUVEO0VBQWUsaUJBQWU7RUFBRSxvQkFBa0IsRUFBRzs7QUFDckQ7RUFDRSxhQUFZO0VBQ1osV0FBVSxFQUNYOztBQUVEO0VBQ0UsMkNBQTBDO0VBQzFDLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFVBQVM7RUFBRSxlQUFhO0VBQ3hCLDJCQUEwQjtFQUMxQixZQUFVLEVBQ1g7O0FBQ0Q7RUFBZSxpQkFBZTtFQUFFLG9CQUFrQixFQUFHOztBQUNyRDtFQUNFLGFBQVk7RUFDWixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwyQ0FBcUQ7RUFDckQsZUFBYztFQUNkLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDJDQUEwQztFQUMxQyxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSwyQ0FBMEM7RUFDMUMsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGdCQUFlO0VBRWYsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UseUJBQXVCO0VBQ3ZCLDRCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLHlCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLHlCQUF1QjtFQUN2Qiw0QkFBMkI7RUFDM0IsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQix5QkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFGRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UscUNBQTZDO0VBQzdDLGFBQVk7RUFDWix5QkFBd0IsRUFDekI7O0FBRUQ7RUFDRSwyQ0FBMEM7RUFDMUMsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsVUFBUztFQUFFLGVBQWE7RUFDeEIsMkJBQTBCO0VBQzFCLFlBQVUsRUFDWCIsImZpbGUiOiJzcmMvYXBwL2RvY2VudGUvcmV0cm9hbGltZW50YWNpb24vcmV0cm9hbGltZW50YWNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkaXZ7XHJcbi8vICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbi8vIH1cclxuaW1neyBtYXgtd2lkdGg6MTAwJTt9XHJcbi5pbmJveF9wZW9wbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMCU7IGJvcmRlci1yaWdodDoxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG4uaW5ib3hfbXNnIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M0YzRjNDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICBjbGVhcjogYm90aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi50b3Bfc3BhY3sgbWFyZ2luOiAyMHB4IDAgMDt9XHJcblxyXG5cclxuLnJlY2VudF9oZWFkaW5nIHtmbG9hdDogbGVmdDsgd2lkdGg6NDAlO31cclxuLnNyY2hfYmFyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhlYWRpbmRfc3JjaHsgcGFkZGluZzoxMHB4IDI5cHggMTBweCAyMHB4OyBvdmVyZmxvdzpoaWRkZW47IGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjNGM0YzQ7fVxyXG5cclxuLnJlY2VudF9oZWFkaW5nIGg0IHtcclxuICBjb2xvcjogIzA1NzI4ZjtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5zcmNoX2JhciBpbnB1dHsgYm9yZGVyOjFweCBzb2xpZCAjY2RjZGNkOyBib3JkZXItd2lkdGg6MCAwIDFweCAwOyB3aWR0aDo4MCU7IHBhZGRpbmc6MnB4IDAgNHB4IDZweDsgYmFja2dyb3VuZDpub25lO31cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24geyBtYXJnaW46IDAgMCAwIC0yN3B4O31cclxuXHJcbi5jaGF0X2liIGg1eyBmb250LXNpemU6MTVweDsgY29sb3I6IzQ2NDY0NjsgbWFyZ2luOjAgMCA4cHggMDt9XHJcbi5jaGF0X2liIGg1IHNwYW57IGZvbnQtc2l6ZToxM3B4OyBmbG9hdDpyaWdodDt9XHJcbi5jaGF0X2liIHB7IGZvbnQtc2l6ZToxNHB4OyBjb2xvcjojOTg5ODk4OyBtYXJnaW46YXV0b31cclxuLmNoYXRfaW1nIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTElO1xyXG59XHJcbi5jaGF0X2liIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG4gIHdpZHRoOiA4OCU7XHJcbn1cclxuXHJcbi5jaGF0X3Blb3BsZXsgb3ZlcmZsb3c6aGlkZGVuOyBjbGVhcjpib3RoO31cclxuLmNoYXRfbGlzdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xyXG59XHJcbi5pbmJveF9jaGF0IHsgaGVpZ2h0OiA1NTBweDsgb3ZlcmZsb3cteTogc2Nyb2xsO31cclxuXHJcbi5hY3RpdmVfY2hhdHsgYmFja2dyb3VuZDojZWJlYmViO31cclxuXHJcbi5pbmNvbWluZ19tc2dfaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG59XHJcbi5yZWNlaXZlZF9tc2cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDkyJTtcclxuIH1cclxuIC5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzY0NjQ2NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLnRpbWVfZGF0ZSB7XHJcbiAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogOHB4IDAgMDtcclxufVxyXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHsgd2lkdGg6IDU3JTt9XHJcblxyXG5cclxuLnJlY2VpdmVkX3dpdGhkX21zZzEgcCB7XHJcbiAgYmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aW1lX2RhdGUge1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuLnJlY2VpdmVkX3dpdGhkX21zZzEgeyB3aWR0aDogNTclO31cclxuLm1lc2dzIHtcclxuICAvLyBib3JkZXI6IHNvbGlkIGJsYWNrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8vIHBhZGRpbmc6IDAgMCAwIDBzO1xyXG59XHJcblxyXG4gLnNlbnRfbXNnIHAge1xyXG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDsgY29sb3I6I2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuICB3aWR0aDo3MCU7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjoyNnB4IDAgMjZweDt9XHJcbi5zZW50X21zZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0NiU7XHJcbn1cclxuXHJcbi5zZW50X21zZzEgcCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwOyBjb2xvcjojNjQ2NDY0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxyXG4uc2VudF9tc2cxIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDQ2JTtcclxufVxyXG5cclxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDk2JTtcclxufVxyXG5cclxuLnR5cGVfbXNnIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tc2dfc2VuZF9idG4ge1xyXG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC41JTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB3aWR0aDogMzNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5hcmNoaXZvX2J0biB7XHJcbiAgYmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMzNweDtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICB3aWR0aDogMzNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5tZXNzYWdpbmcgeyBcclxuICBwYWRkaW5nOiAwIDAgMCAwO1xyXG59XHJcbi5tc2dfaGlzdG9yeSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndyaXRlX21zZ3tcclxuICBtYXJnaW4tdG9wOiAuMyU7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYyFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5idXR0b246Zm9jdXMsIGJ1dHRvbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBib3JkZXItbGVmdDogMiU7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MCwgMjQwLCAyNDApIWltcG9ydGFudCA7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxufVxyXG5cclxuLmFyY2hpdm97XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwOyBjb2xvcjojNjQ2NDY0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/docente/retroalimentacion/retroalimentacion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/retroalimentacion.component.ts ***!
  \**************************************************************************/
/*! exports provided: RetroalimentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionComponent", function() { return RetroalimentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/retroalimentacion.service */ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts");
/* harmony import */ var src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/materia/actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RetroalimentacionComponent = /** @class */ (function () {
    function RetroalimentacionComponent(formBuilder, _usuarioService, _retroService, _actividadService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._retroService = _retroService;
        this._actividadService = _actividadService;
        this.muestraCheckbox = true;
        this.cambioCheck = 0;
        this.openFile = false;
    }
    Object.defineProperty(RetroalimentacionComponent.prototype, "f", {
        get: function () { return this.contForm.controls; },
        enumerable: true,
        configurable: true
    });
    RetroalimentacionComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        var identity = this._usuarioService.getIdentity();
        var rol = this._usuarioService.getRol();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].urlAssets;
        this.idPersona = identity.persona_id;
        this.idRol = rol.rol_id;
        this.contForm = this.formBuilder.group({
            contenido: ['', Object(_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(1)]
        });
        this.consultaMensajesRetro();
        /*this._actividadService.consulta(this.idActividad,this.jwt).subscribe(
          response =>{
              if(response && response['status']){
                this.actividad = response['actividad'][0];
              }
        });*/
    };
    RetroalimentacionComponent.prototype.abreArchivo = function () {
        if (this.openFile == false)
            this.openFile = true;
        else if (this.openFile == true)
            this.openFile = false;
    };
    RetroalimentacionComponent.prototype.consultaMensajesRetro = function () {
        var _this = this;
        var mensajesTemp = [];
        this._retroService.consulta(this.idMateria, this.idActividad).subscribe(function (response) {
            if (response && response['status']) {
                _this.mensaje = response['mensajes'];
                // mensajesEntrantes = this.mensaje
                _this.mensaje.forEach(function (_mensaje) {
                    _mensaje.fecha_creacion = new Date((_mensaje.fecha_creacion) * 1000);
                    var cadena = String(_mensaje.url_imagen);
                    var ext = cadena.split(".");
                    if (ext[1] == 'mp3' || ext[1] == 'm4a' || ext[1] == 'mp4' || ext[1] == 'wav' || ext[1] == 'wma')
                        _mensaje.fondo = false;
                    else
                        _mensaje.fondo = true;
                    if (_mensaje.visto == 0 && _mensaje.origen != _this.idRol) { //revisa cuantos no vistos hay 
                        mensajesTemp.push(_mensaje);
                    }
                });
                // mensajesEntrantes.forEach(_mensaje => {
                //   if(_mensaje.visto == 0 && _mensaje.origen != this.idRol){ //revisa cuantos no vistos hay 
                //     mensajesTemp.push(_mensaje)
                //   }
                // });
                if (mensajesTemp.length == 0) {
                    _this.cambioCheck = 0;
                }
                else {
                    _this.cambioCheck = mensajesTemp.length;
                }
            }
            var tamMensajes = _this.mensaje.length;
            if (_this.mensaje[tamMensajes - 1]['origen'] == _this.idRol) {
                _this.muestraCheckbox = false;
            }
            else {
                if (_this.mensaje[tamMensajes - 1]['visto'] == 1) {
                    _this.visto = 1;
                }
                else {
                    _this.visto = 0;
                }
            }
        });
    };
    RetroalimentacionComponent.prototype.enviar = function (texto) {
        var _this = this;
        this.cargando = true;
        var archivo = this.contForm.get('contenido').value;
        if (texto && texto != '' || archivo) {
            this._retroService.enviar(this.idMateriaFechaActividad, this.idPersona, this.texto, this.idRol, this.jwt, this.idRetro, this.contForm, this.idMateria, this.idActividad).subscribe(function (response) {
                if (response && response['status']) {
                    _this.texto = "";
                    _this.openFile = false;
                    _this.cargando = false;
                    _this.muestraCheckbox = false;
                    _this.cambioCheck = _this.cambioCheck++;
                    _this.visto = 0;
                    _this.consultaMensajesRetro();
                    _this.contForm.get('contenido').setValue('');
                    if (response['idRetro']) {
                        _this.idRetro = response['idRetro'];
                    }
                }
                else {
                    alertify.error('Error al enviar').dismissOthers();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    RetroalimentacionComponent.prototype.cambiaVistoMensaje = function () {
        var _this = this;
        if (this.visto)
            this.visto = 1;
        else if (!this.visto)
            this.visto = 0;
        this._retroService.cambiaVisto(this.idRol, this.idMateria, this.idActividad, this.visto, this.cambioCheck).subscribe(function (response) {
            if (response && response['status']) {
                _this.cambioCheck = _this.cambioCheck++;
                alertify.success(response['msg']);
            }
            if (_this.cambioCheck >= 1) {
                _this.cambioCheck = 0;
            }
            else if (_this.cambioCheck == 0) {
                _this.cambioCheck = 1;
            }
            // this.consultaMensajesRetro();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RetroalimentacionComponent.prototype, "idMateria", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RetroalimentacionComponent.prototype, "idActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RetroalimentacionComponent.prototype, "idMateriaFechaActividad", void 0);
    RetroalimentacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'retroalimentacion',
            template: __webpack_require__(/*! ./retroalimentacion.component.html */ "./src/app/docente/retroalimentacion/retroalimentacion.component.html"),
            styles: [__webpack_require__(/*! ./retroalimentacion.component.scss */ "./src/app/docente/retroalimentacion/retroalimentacion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _services_retroalimentacion_service__WEBPACK_IMPORTED_MODULE_2__["RetroalimentacionService"],
            src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_3__["ActividadService"]])
    ], RetroalimentacionComponent);
    return RetroalimentacionComponent;
}());



/***/ }),

/***/ "./src/app/docente/retroalimentacion/retroalimentacion.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/retroalimentacion.module.ts ***!
  \***********************************************************************/
/*! exports provided: RetroalimentacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionModule", function() { return RetroalimentacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _retroalimentacion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retroalimentacion-routing.module */ "./src/app/docente/retroalimentacion/retroalimentacion-routing.module.ts");
/* harmony import */ var _retroalimentacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retroalimentacion.component */ "./src/app/docente/retroalimentacion/retroalimentacion.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm5/ckeditor4-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { Autosize } from 'ng-autosize';



var RetroalimentacionModule = /** @class */ (function () {
    function RetroalimentacionModule() {
    }
    RetroalimentacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_3__["RetroalimentacionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _retroalimentacion_routing_module__WEBPACK_IMPORTED_MODULE_2__["RetroalimentacionRoutingModule"],
                ckeditor4_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_6__["AutosizeModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_8__["ArchivoModule"]
            ],
            exports: [_retroalimentacion_component__WEBPACK_IMPORTED_MODULE_3__["RetroalimentacionComponent"]]
        })
    ], RetroalimentacionModule);
    return RetroalimentacionModule;
}());



/***/ }),

/***/ "./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/docente/retroalimentacion/services/retroalimentacion.service.ts ***!
  \*********************************************************************************/
/*! exports provided: RetroalimentacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroalimentacionService", function() { return RetroalimentacionService; });
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




var RetroalimentacionService = /** @class */ (function () {
    function RetroalimentacionService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    RetroalimentacionService.prototype.consultaRetrosAlumno = function (tipo, id_materia, id_asignatura_grupo) {
        var params = '?nuevos=' + tipo;
        params += '&materia_id=' + id_materia;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesAlumno.php' + params);
    };
    RetroalimentacionService.prototype.consultaRetrosDocente = function (jwt, tipo, id_asignatura_grupo) {
        var params = '?jwt=' + jwt;
        params += '&nuevos=' + tipo;
        params += '&id_asignatura_grupo=' + id_asignatura_grupo;
        return this._httpClient.get(this.url + '/controlEscolar/retroalimentacion/retroalimentacionesDocente.php' + params);
    };
    RetroalimentacionService.prototype.cambiaVisto = function (rol, id_materia, id_actividad, visto, cambios) {
        var params = '?rol_id=' + rol;
        params += '&id_materia=' + id_materia;
        params += '&visto=' + visto; //1 visto 0 no visto
        params += '&id_actividad=' + id_actividad;
        params += '&numero_cambios=' + cambios;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/marcaVistoRetro.php' + params);
    };
    RetroalimentacionService.prototype.notificaciones = function (id_materia, id_actividad, jwt) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/notificaciones/retroalimentacionActividad.php' + params);
    };
    RetroalimentacionService.prototype.consulta = function (id_materia, id_actividad) {
        var params = '?id_materia=' + id_materia;
        params += '&id_actividad=' + id_actividad;
        return this._httpClient.get(this.url + '/learning/retroalimentacion/consulta.php' + params);
    };
    RetroalimentacionService.prototype.enviar = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt, retroalimentacion_id, contForm, id_materia, id_actividad) {
        if (retroalimentacion_id === void 0) { retroalimentacion_id = null; }
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('origen', origen);
        // formData.append('jwt', jwt);
        formData.append('id_materia', id_materia);
        formData.append('id_actividad', id_actividad);
        if (texto)
            formData.append('texto', texto);
        else
            formData.append('texto', '');
        if (contForm.get('contenido').value)
            formData.append('archivo', contForm.get('contenido').value);
        if (!retroalimentacion_id) {
            return this._httpClient.post(this.url + 'learning/retroalimentacion/crea.php', formData);
        }
    };
    RetroalimentacionService.prototype.correccionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/corregirActividad.php', formData);
    };
    RetroalimentacionService.prototype.invalidacionActividad = function (materia_fecha_actividad_id, persona_id, texto, origen, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', materia_fecha_actividad_id);
        formData.append('persona_id', persona_id);
        formData.append('texto', texto);
        formData.append('origen', origen);
        return this._httpClient.post(this.url + 'learning/fechaActividad/invalidaActividad.php', formData);
    };
    RetroalimentacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RetroalimentacionService);
    return RetroalimentacionService;
}());



/***/ })

}]);
//# sourceMappingURL=default~actividad-main-main-module~calificaciones-calificaciones-module~docente-actividad-actividad-~1fa8495a.js.map