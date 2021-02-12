(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-zona-imagenes-zona-imagenes-module"],{

/***/ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-xl-12 col-lg-12\" [hidden]=\"edicion == 0 && !hayRespuesta\">\r\n\r\n    <div class=\"row container-cards\" *ngIf=\"reactivos\">\r\n      <div class=\"col\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 mt-3\" *ngFor=\"let reactivo of reactivos; let i = index\">\r\n            <div class=\"card card-estudy text-black p-2\" [style.borderColor]=\"reactivo.color\">\r\n              <div class=\"row\">\r\n              <div class=\"col-1 mt-3\">\r\n                  <h3>{{i + 1}}</h3>\r\n              </div>       \r\n              <div class=\"col\">     \r\n                <blockquote class=\" mb-0\">\r\n                  <small>{{reactivo.reactivo_desc}}</small>\r\n                </blockquote>\r\n              </div>            \r\n              </div>\r\n            </div> \r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>  \r\n    <hr *ngIf=\"reactivos\">\r\n    <div class=\"row justify-content-md-center\" [hidden]=\"edicion == 0 && !hayRespuesta\">\r\n      <canvas #myImage id=\"{{tipo}}\" [hidden]=\"hideImage\" (click)=\"edicion == 1? drawCircle(0, $event): true\"></canvas>\r\n    </div>\r\n    <br> \r\n    <div class=\"row\" *ngIf=\"edicion == 1 && reactivos\">\r\n      <div class=\"col\">\r\n        <button class=\"btn btn-danger\" type=\"button\" (click)=\"cleanCanvas()\">Borrar selección</button>  \r\n      </div>    \r\n      <!-- <div class=\"col\">\r\n        <button class=\"btn btn-success pull-right\" (click)=\"guardarSeleccion()\">Guardar selección</button>\r\n      </div> -->\r\n    </div> \r\n    <br>          \r\n  </div>\r\n  <div class=\"col\" *ngIf=\"!edicion && !intentosRestantes\">\r\n    <button class=\"btn btn-primary pull-right\" (click)=\"open(content)\">Ver respuestas</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"edicion == 0 && !hayRespuesta\">\r\n    <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n</div>  \r\n\r\n<div class=\"row\" *ngIf=\"!reactivos\">\r\n  <div class=\"col-12\">\r\n      <div class=\"alert alert-danger\">No se han cargado reactivos en la pregunta</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <ng-template #content>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Respuestas</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row justify-content-md-center\">\r\n          <canvas id=\"resultado\"></canvas>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cerrar</button>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n  cursor: crosshair; }\n\n.container-cards {\n  margin-bottom: 10px; }\n\n.card-zona {\n  border: 4px solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL3pvbmEtaW1hZ2VuZXMvQzpcXHhhbXBwMVxcaHRkb2NzXFxlc3R1ZHlfbmV3XFxmcm9udEVzdHVkeS9zcmNcXGFwcFxcbWF0ZXJpYVxcYWN0aXZpZGFkXFxwcmVndW50YXNcXHpvbmEtaW1hZ2VuZXNcXHpvbmEtaW1hZ2VuZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2FjdGl2aWRhZC9wcmVndW50YXMvem9uYS1pbWFnZW5lcy96b25hLWltYWdlbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbnZhc3tcclxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG59XHJcbi5jb250YWluZXItY2FyZHN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jYXJkLXpvbmF7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ZonaImagenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonaImagenesComponent", function() { return ZonaImagenesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_zona_imagenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/zona-imagenes.service */ "./src/app/administracion/carga-actividades/services/zona-imagenes.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ZonaImagenesComponent = /** @class */ (function () {
    function ZonaImagenesComponent(_usuarioService, _zonaImagenesService, modalService) {
        this._usuarioService = _usuarioService;
        this._zonaImagenesService = _zonaImagenesService;
        this.modalService = modalService;
        this.hideImage = true;
        this.arrayRespuestas = [];
        this.indexReactivos = 0;
        this.bandera = false;
        this.hayRespuesta = false;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Ejercicio 2. Zonas de imágenes";
        this._usuarioService.pushBreadcum(this.title, '', 2);
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets;
    }
    ZonaImagenesComponent.prototype.ngOnInit = function () {
        this.pregunta = this.Data.pregunta;
        this.edicion = this.Data.edicion;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.intentosRestantes = this.Data.intentosRestantes;
        this.indexReactivos = 0;
        this.jwt = this._usuarioService.getJWT();
        this.idPregunta = this.pregunta.pregunta_id;
        this.getDatos();
    };
    ZonaImagenesComponent.prototype.ngOnChanges = function () {
        this.indexReactivos = 0;
        this.getDatos();
    };
    ZonaImagenesComponent.prototype.getDatos = function () {
        var _this = this;
        var datosReactivos = this.pregunta.arreglo_reactivos;
        if (this.edicion == 1) {
            this.tipo = 'canvas';
        }
        else if (this.edicion == 0) {
            this.tipo = 'resultadoCanvas';
        }
        this.canvas = this.myImage.nativeElement;
        if (datosReactivos.reactivos) {
            window.scrollTo(0, 0);
            this.reactivos = datosReactivos.reactivos;
            this.contenidoPregunta = datosReactivos.contenidoPregunta;
            this.showImage(0);
            this.reactivos.forEach(function (reactivo) {
                if (reactivo.respuesta) {
                    _this.drawCircle(1, reactivo.respuesta);
                    _this.hayRespuesta = true;
                }
            });
        }
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 1);
        // this._zonaImagenesService.consultaZonaImagenes(this.idPregunta, this.jwt,this.idMateriaFechaActividad).subscribe(
        //   response =>{
        //     window.scrollTo(0,0)
        //     if(response && response['status']){
        //       this.reactivos = response['reactivos'];
        //       this.contenidoPregunta = response['contenidoPregunta'];  
        //       this.showImage(0);
        //       this.reactivos.forEach(reactivo => {
        //         if (reactivo.respuesta) {
        //           this.drawCircle(1, reactivo.respuesta);
        //           this.hayRespuesta = true;
        //         }
        //       });
        //     }
        //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        //   },error =>{
        //     console.log(<any>error)
        //   }); 
    };
    ZonaImagenesComponent.prototype.showImage = function (id) {
        var imgCanvas, ctx;
        if (id == 0) {
            imgCanvas = this.myImage.nativeElement;
            this.hideImage = false;
        }
        else if (id == 1) {
            imgCanvas = document.getElementById("resultado");
        }
        //SE USA PARA PINTAR LOS RECTÁNGULOS QUE FUERON SELECCIONADOS.
        // let ClientRect = this.myImage.nativeElement.getBoundingClientRect();
        // for (let i = 0; i < this.reactivos.length; i++) {
        //   this.x = Math.round(ClientRect.left) + parseInt(this.reactivos[i].posicion_x);
        //   this.y = Math.round(ClientRect.left) + parseInt(this.reactivos[i].posicion_y);     
        //   this.width = parseInt(this.reactivos[i].ancho);
        //   this.height = parseInt(this.reactivos[i].alto); 
        //   // ctx.restore(); 
        //   ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
        //   ctx.rect(this.x, this.y, this.width, this.height);
        //   ctx.stroke();
        //   // ctx.save();   
        //   // ctx.clip();  
        // } 
        ctx = imgCanvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.width, ctx.height);
        imgCanvas.width = this.contenidoPregunta.imagen_ancho;
        imgCanvas.height = this.contenidoPregunta.imagen_alto;
        imgCanvas.style.background = "url(" + this.url + this.contenidoPregunta.imagen + ")";
    };
    ZonaImagenesComponent.prototype.cleanCanvas = function () {
        var context = this.canvas.getContext('2d');
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.indexReactivos = 0;
        this.eliminaSeleccion();
    };
    ZonaImagenesComponent.prototype.drawCircle = function (id, evt) {
        var x, y, color;
        var ClientRect, ctx;
        if (id == 0 || id == 1) {
            ClientRect = this.canvas.getBoundingClientRect();
            ctx = this.canvas.getContext('2d');
        }
        else if (id == 2) {
            ClientRect = document.getElementById("resultado").getBoundingClientRect();
            var canvas = document.getElementById('resultado');
            ctx = canvas.getContext('2d');
        }
        if (this.indexReactivos < this.reactivos.length) {
            if (id == 0 && this.edicion == 1) {
                x = Math.round(evt.clientX - ClientRect.left);
                y = Math.round(evt.clientY - ClientRect.top);
                var respuesta = [];
                var reactivo = this.reactivos[this.indexReactivos];
                respuesta.push({ id_reactivo: reactivo.reactivo_id, posicion_x: x, posicion_y: y });
                this.guardarSeleccion(respuesta);
            }
            else if (id == 1) {
                x = evt.posicion_x;
                y = evt.posicion_y;
            }
            else if (id == 2) {
                x = parseInt(evt.posicion_x) + (parseInt(evt.ancho) / 2);
                y = parseInt(evt.posicion_y) + (parseInt(evt.alto) / 2);
            }
            this.bandera = true;
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.arc(x, y, 20, 0, 2 * Math.PI);
            if (id == 0 || id == 1 && this.edicion == 1) {
                ctx.fillStyle = this.reactivos[this.indexReactivos].color;
                color = 'black';
            }
            else if (id == 1 && this.edicion == 0) {
                color = 'white';
                var reactivo = this.reactivos.find(function (respuesta) { return respuesta.reactivo_id == evt.reactivo_id; });
                var xInicio = parseInt(reactivo.posicion_x);
                var xFinal = parseInt(reactivo.posicion_x) + parseInt(reactivo.ancho);
                var yInicio = parseInt(reactivo.posicion_y);
                var yFinal = parseInt(reactivo.posicion_y) + parseInt(reactivo.alto);
                if (((xInicio < xFinal && x > xInicio && x < xFinal) ||
                    (xInicio > xFinal && x < xInicio && x > xFinal)) &&
                    ((yInicio < yFinal && y > yInicio && y < yFinal) ||
                        (yInicio > yFinal && y < yInicio && y > yFinal))) {
                    ctx.fillStyle = 'mediumseagreen';
                }
                else {
                    // ctx.fillStyle = 'crimson';
                    ctx.fillStyle = 'lightgray';
                }
            }
            else if (id == 2) {
                ctx.fillStyle = this.reactivos[this.indexReactivos].color;
                color = 'black';
            }
            ctx.fill();
            ctx.stroke();
            var texto = (this.indexReactivos + 1).toString();
            var yTexto = parseInt(y) + 10;
            ctx.textAlign = "center";
            ctx.font = "22pt Arial";
            ctx.fillStyle = color;
            ctx.fillText(texto, x, yTexto);
            this.indexReactivos++;
            // if (!this.bandera) {
            //   alertify.error("Selecciona una zona válida.")
            // }
        }
        else {
            if (id == 0 && this.edicion == 1) {
                alertify.error("Límite de respuestas alcanzado").dismissOthers();
            }
        }
    };
    ZonaImagenesComponent.prototype.guardarSeleccion = function (respuesta) {
        this._zonaImagenesService.guardaRespuestas(respuesta[0], this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
            }
            else {
                alertify.error('Error al guardar').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
        // if (this.indexReactivos == this.reactivos.length) {
        //   alertify.confirm('¿Deseas guardar tus respuestas?',
        //   function(){
        //     alertify.success('Respuestas guardadas correctamente');
        //   }.bind(this),
        //   function(){
        //     alertify.error('Cancelado');
        //   });
        // }else{
        //   alertify.error("Selecciona todas las respuestas")
        // }
    };
    ZonaImagenesComponent.prototype.eliminaSeleccion = function () {
        this._zonaImagenesService.eliminaRespuestas(this.idPregunta, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    ZonaImagenesComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
        this.showImage(1);
        this.indexReactivos = 0;
        this.reactivos.forEach(function (reactivo) {
            _this.drawCircle(2, reactivo);
        });
    };
    ZonaImagenesComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myImage"),
        __metadata("design:type", Object)
    ], ZonaImagenesComponent.prototype, "myImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myResult'),
        __metadata("design:type", Object)
    ], ZonaImagenesComponent.prototype, "myResult", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZonaImagenesComponent.prototype, "actividadCargada", void 0);
    ZonaImagenesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'respuesta-zona-imagenes',
            template: __webpack_require__(/*! ./zona-imagenes.component.html */ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.html"),
            styles: [__webpack_require__(/*! ./zona-imagenes.component.scss */ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_carga_actividades_services_zona_imagenes_service__WEBPACK_IMPORTED_MODULE_3__["ZonaImagenesService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ZonaImagenesComponent);
    return ZonaImagenesComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ZonaImagenesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonaImagenesModule", function() { return ZonaImagenesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _zona_imagenes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zona-imagenes.component */ "./src/app/materia/actividad/preguntas/zona-imagenes/zona-imagenes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZonaImagenesModule = /** @class */ (function () {
    function ZonaImagenesModule() {
    }
    ZonaImagenesModule_1 = ZonaImagenesModule;
    var ZonaImagenesModule_1;
    ZonaImagenesModule.rootComponent = _zona_imagenes_component__WEBPACK_IMPORTED_MODULE_2__["ZonaImagenesComponent"];
    ZonaImagenesModule = ZonaImagenesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [ZonaImagenesModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            entryComponents: [
                ZonaImagenesModule_1.rootComponent
            ]
        })
    ], ZonaImagenesModule);
    return ZonaImagenesModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-zona-imagenes-zona-imagenes-module.js.map