(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~administracion-asignatura-asignatura-module~administracion-institucion-institucion-module~ad~10311aa6"],{

/***/ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js ***!
  \***********************************************************/
/*! exports provided: NgxFileDropComponent, NgxFileDropModule, NgxFileDropEntry, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFileDropComponent", function() { return NgxFileDropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFileDropModule", function() { return NgxFileDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFileDropEntry", function() { return NgxFileDropEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxFileDropContentTemplateDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * fileEntry is an instance of {\@link FileSystemFileEntry} or {\@link FileSystemDirectoryEntry}.
 * Which one is it can be checked using {\@link FileSystemEntry.isFile} or {\@link FileSystemEntry.isDirectory}
 * properties of the given {\@link FileSystemEntry}.
 */
var  /**
 * fileEntry is an instance of {\@link FileSystemFileEntry} or {\@link FileSystemDirectoryEntry}.
 * Which one is it can be checked using {\@link FileSystemEntry.isFile} or {\@link FileSystemEntry.isDirectory}
 * properties of the given {\@link FileSystemEntry}.
 */
NgxFileDropEntry = /** @class */ (function () {
    function NgxFileDropEntry(relativePath, fileEntry) {
        this.relativePath = relativePath;
        this.fileEntry = fileEntry;
    }
    return NgxFileDropEntry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFileDropContentTemplateDirective = /** @class */ (function () {
    function NgxFileDropContentTemplateDirective(template) {
        this.template = template;
    }
    NgxFileDropContentTemplateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ngx-file-drop-content-tmp]' },] }
    ];
    /** @nocollapse */
    NgxFileDropContentTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    return NgxFileDropContentTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFileDropComponent = /** @class */ (function () {
    function NgxFileDropComponent(zone, renderer) {
        var _this = this;
        this.zone = zone;
        this.renderer = renderer;
        this.accept = '*';
        this.directory = false;
        this.multiple = true;
        this.dropZoneLabel = '';
        this.dropZoneClassName = 'ngx-file-drop__drop-zone';
        this.contentClassName = 'ngx-file-drop__content';
        this.showBrowseBtn = false;
        this.browseBtnClassName = 'btn btn-primary btn-xs ngx-file-drop__browse-btn';
        this.browseBtnLabel = 'Browse files';
        this.onFileDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFileOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFileLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDraggingOverDropZone = false;
        this.globalDraggingInProgress = false;
        this.files = [];
        this.numOfActiveReadEntries = 0;
        this.helperFormEl = null;
        this.fileInputPlaceholderEl = null;
        this.dropEventTimerSubscription = null;
        this._disabled = false;
        this.openFileSelector = (/**
         * @param {?=} event
         * @return {?}
         */
        function (event) {
            if (_this.fileSelector && _this.fileSelector.nativeElement) {
                ((/** @type {?} */ (_this.fileSelector.nativeElement))).click();
            }
        });
        this.globalDragStartListener = this.renderer.listen('document', 'dragstart', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.globalDraggingInProgress = true;
        }));
        this.globalDragEndListener = this.renderer.listen('document', 'dragend', (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            _this.globalDraggingInProgress = false;
        }));
    }
    Object.defineProperty(NgxFileDropComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && "" + value !== 'false');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxFileDropComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
            this.dropEventTimerSubscription = null;
        }
        this.globalDragStartListener();
        this.globalDragEndListener();
        this.files = [];
        this.helperFormEl = null;
        this.fileInputPlaceholderEl = null;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFileDropComponent.prototype.onDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (!this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = true;
                this.onFileOver.emit(event);
            }
            this.preventAndStop(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFileDropComponent.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (this.isDraggingOverDropZone) {
                this.isDraggingOverDropZone = false;
                this.onFileLeave.emit(event);
            }
            this.preventAndStop(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxFileDropComponent.prototype.dropFiles = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            this.isDraggingOverDropZone = false;
            if (event.dataTransfer) {
                event.dataTransfer.dropEffect = 'copy';
                /** @type {?} */
                var items = void 0;
                if (event.dataTransfer.items) {
                    items = event.dataTransfer.items;
                }
                else {
                    items = event.dataTransfer.files;
                }
                this.preventAndStop(event);
                this.checkFiles(items);
            }
        }
    };
    /**
     * Processes the change event of the file input and adds the given files.
     * @param Event event
     */
    /**
     * Processes the change event of the file input and adds the given files.
     * @param {?} event
     * @return {?}
     */
    NgxFileDropComponent.prototype.uploadFiles = /**
     * Processes the change event of the file input and adds the given files.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isDropzoneDisabled()) {
            if (event.target) {
                /** @type {?} */
                var items = ((/** @type {?} */ (event.target))).files || ((/** @type {?} */ ([])));
                this.checkFiles(items);
                this.resetFileInput();
            }
        }
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    NgxFileDropComponent.prototype.checkFiles = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        var _loop_1 = function (i) {
            /** @type {?} */
            var item = items[i];
            /** @type {?} */
            var entry = null;
            if (this_1.canGetAsEntry(item)) {
                entry = item.webkitGetAsEntry();
            }
            if (!entry) {
                if (item) {
                    /** @type {?} */
                    var fakeFileEntry = {
                        name: ((/** @type {?} */ (item))).name,
                        isDirectory: false,
                        isFile: true,
                        file: (/**
                         * @param {?} callback
                         * @return {?}
                         */
                        function (callback) {
                            callback((/** @type {?} */ (item)));
                        }),
                    };
                    /** @type {?} */
                    var toUpload = new NgxFileDropEntry(fakeFileEntry.name, fakeFileEntry);
                    this_1.addToQueue(toUpload);
                }
            }
            else {
                if (entry.isFile) {
                    /** @type {?} */
                    var toUpload = new NgxFileDropEntry(entry.name, entry);
                    this_1.addToQueue(toUpload);
                }
                else if (entry.isDirectory) {
                    this_1.traverseFileTree(entry, entry.name);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < items.length; i++) {
            _loop_1(i);
        }
        if (this.dropEventTimerSubscription) {
            this.dropEventTimerSubscription.unsubscribe();
        }
        this.dropEventTimerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(200, 200)
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.files.length > 0 && _this.numOfActiveReadEntries === 0) {
                /** @type {?} */
                var files = _this.files;
                _this.files = [];
                _this.onFileDrop.emit(files);
            }
        }));
    };
    /**
     * @private
     * @param {?} item
     * @param {?} path
     * @return {?}
     */
    NgxFileDropComponent.prototype.traverseFileTree = /**
     * @private
     * @param {?} item
     * @param {?} path
     * @return {?}
     */
    function (item, path) {
        var _this = this;
        if (item.isFile) {
            /** @type {?} */
            var toUpload = new NgxFileDropEntry(path, item);
            this.files.push(toUpload);
        }
        else {
            path = path + '/';
            /** @type {?} */
            var dirReader_1 = ((/** @type {?} */ (item))).createReader();
            /** @type {?} */
            var entries_1 = [];
            /** @type {?} */
            var readEntries_1 = (/**
             * @return {?}
             */
            function () {
                _this.numOfActiveReadEntries++;
                dirReader_1.readEntries((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (!result.length) {
                        // add empty folders
                        if (entries_1.length === 0) {
                            /** @type {?} */
                            var toUpload_1 = new NgxFileDropEntry(path, item);
                            _this.zone.run((/**
                             * @return {?}
                             */
                            function () {
                                _this.addToQueue(toUpload_1);
                            }));
                        }
                        else {
                            var _loop_2 = function (i) {
                                _this.zone.run((/**
                                 * @return {?}
                                 */
                                function () {
                                    _this.traverseFileTree(entries_1[i], path + entries_1[i].name);
                                }));
                            };
                            for (var i = 0; i < entries_1.length; i++) {
                                _loop_2(i);
                            }
                        }
                    }
                    else {
                        // continue with the reading
                        entries_1 = entries_1.concat(result);
                        readEntries_1();
                    }
                    _this.numOfActiveReadEntries--;
                }));
            });
            readEntries_1();
        }
    };
    /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     */
    /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     * @private
     * @return {?}
     */
    NgxFileDropComponent.prototype.resetFileInput = /**
     * Clears any added files from the file input element so the same file can subsequently be added multiple times.
     * @private
     * @return {?}
     */
    function () {
        if (this.fileSelector && this.fileSelector.nativeElement) {
            /** @type {?} */
            var fileInputEl = (/** @type {?} */ (this.fileSelector.nativeElement));
            /** @type {?} */
            var fileInputContainerEl = fileInputEl.parentElement;
            /** @type {?} */
            var helperFormEl = this.getHelperFormElement();
            /** @type {?} */
            var fileInputPlaceholderEl = this.getFileInputPlaceholderElement();
            // Just a quick check so we do not mess up the DOM (will never happen though).
            if (fileInputContainerEl !== helperFormEl) {
                // Insert the form input placeholder in the DOM before the form input element.
                this.renderer.insertBefore(fileInputContainerEl, fileInputPlaceholderEl, fileInputEl);
                // Add the form input as child of the temporary form element, removing the form input from the DOM.
                this.renderer.appendChild(helperFormEl, fileInputEl);
                // Reset the form, thus clearing the input element of any files.
                helperFormEl.reset();
                // Add the file input back to the DOM in place of the file input placeholder element.
                this.renderer.insertBefore(fileInputContainerEl, fileInputEl, fileInputPlaceholderEl);
                // Remove the input placeholder from the DOM
                this.renderer.removeChild(fileInputContainerEl, fileInputPlaceholderEl);
            }
        }
    };
    /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     */
    /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     * @private
     * @return {?}
     */
    NgxFileDropComponent.prototype.getHelperFormElement = /**
     * Get a cached HTML form element as a helper element to clear the file input element.
     * @private
     * @return {?}
     */
    function () {
        if (!this.helperFormEl) {
            this.helperFormEl = (/** @type {?} */ (this.renderer.createElement('form')));
        }
        return this.helperFormEl;
    };
    /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     */
    /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     * @private
     * @return {?}
     */
    NgxFileDropComponent.prototype.getFileInputPlaceholderElement = /**
     * Get a cached HTML div element to be used as placeholder for the file input element when clearing said element.
     * @private
     * @return {?}
     */
    function () {
        if (!this.fileInputPlaceholderEl) {
            this.fileInputPlaceholderEl = (/** @type {?} */ (this.renderer.createElement('div')));
        }
        return this.fileInputPlaceholderEl;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgxFileDropComponent.prototype.canGetAsEntry = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return !!item.webkitGetAsEntry;
    };
    /**
     * @private
     * @return {?}
     */
    NgxFileDropComponent.prototype.isDropzoneDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.globalDraggingInProgress || this.disabled);
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgxFileDropComponent.prototype.addToQueue = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.files.push(item);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgxFileDropComponent.prototype.preventAndStop = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    NgxFileDropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'ngx-file-drop',
                    template: "<div [className]=\"dropZoneClassName\"\r\n     [class.ngx-file-drop__drop-zone--over]=\"isDraggingOverDropZone\"\r\n     (drop)=\"dropFiles($event)\"\r\n     (dragover)=\"onDragOver($event)\"\r\n     (dragleave)=\"onDragLeave($event)\">\r\n  <div [className]=\"contentClassName\">\r\n    <input \r\n      type=\"file\" \r\n      #fileSelector \r\n      [accept]=\"accept\" \r\n      [attr.directory]=\"directory || undefined\" \r\n      [attr.webkitdirectory]=\"directory || undefined\"\r\n      [attr.mozdirectory]=\"directory || undefined\"\r\n      [attr.msdirectory]=\"directory || undefined\"\r\n      [attr.odirectory]=\"directory || undefined\"\r\n      [multiple]=\"multiple\"\r\n      (change)=\"uploadFiles($event)\" \r\n      class=\"ngx-file-drop__file-input\" \r\n    />\r\n\r\n    <ng-template #defaultContentTemplate>\r\n      <div *ngIf=\"dropZoneLabel\" class=\"ngx-file-drop__drop-zone-label\">{{dropZoneLabel}}</div>\r\n      <div *ngIf=\"showBrowseBtn\">\r\n        <input type=\"button\" [className]=\"browseBtnClassName\" value=\"{{browseBtnLabel}}\" (click)=\"openFileSelector($event)\" />\r\n      </div>\r\n    </ng-template>\r\n\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"contentTemplate || defaultContentTemplate\"\r\n      [ngTemplateOutletContext]=\"{ openFileSelector: openFileSelector }\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
                    styles: [".ngx-file-drop__drop-zone{height:100px;margin:auto;border:2px dotted #0782d0;border-radius:30px}.ngx-file-drop__drop-zone--over{background-color:rgba(147,147,147,.5)}.ngx-file-drop__content{display:flex;align-items:center;justify-content:center;height:100px;color:#0782d0}.ngx-file-drop__drop-zone-label{text-align:center}.ngx-file-drop__file-input{display:none}"]
                }] }
    ];
    /** @nocollapse */
    NgxFileDropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    NgxFileDropComponent.propDecorators = {
        accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        directory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropZoneLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropZoneClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        contentClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showBrowseBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        browseBtnClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        browseBtnLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onFileOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onFileLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgxFileDropContentTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: false },] }],
        fileSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['fileSelector', { static: true },] }]
    };
    return NgxFileDropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxFileDropModule = /** @class */ (function () {
    function NgxFileDropModule() {
    }
    NgxFileDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [
                        NgxFileDropComponent,
                        NgxFileDropContentTemplateDirective,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        NgxFileDropComponent,
                        NgxFileDropContentTemplateDirective,
                    ],
                    providers: [],
                    bootstrap: [
                        NgxFileDropComponent
                    ],
                },] }
    ];
    return NgxFileDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-file-drop.js.map

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
//# sourceMappingURL=default~administracion-asignatura-asignatura-module~administracion-institucion-institucion-module~ad~10311aa6.js.map