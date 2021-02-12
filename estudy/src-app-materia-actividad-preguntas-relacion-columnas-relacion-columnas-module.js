(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-relacion-columnas-relacion-columnas-module"],{

/***/ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\" *ngIf=\"edicion == 1\">\r\n  <div class=\"col-12\">\r\n    <div *ngFor=\"let pregunta of preguntas; let i = index\">\r\n\r\n    <div class=\"row padding-answer-line-mapping\"  >\r\n        <div class=\"col answer-container box-left\" (click)=\"inicio(0,i,1)\" [style.borderColor]=\"pregunta.color_a\">\r\n            <p class=\"m-1 align-center\" [innerHTML]=\"pregunta.columna_a_desc\"></p>\r\n            <div class=\"round-pointer-right round-right-{{idPregunta}}\"  id=\"{{ 'pointer-'+idPregunta+'-l-' + i }}\" ></div>\r\n        </div>\r\n        <div class=\"col\">\r\n            \r\n        </div>\r\n        <div class=\"col answer-container\" (click)=\"inicio(0,i,2)\" [style.borderColor]=\"pregunta.color_b\">\r\n            <p class=\"m-1 align-center\" [innerHTML]=\"pregunta.columna_b_desc\"></p>\r\n            <div class=\"round-pointer-left\"  id=\"{{ 'pointer-'+idPregunta+'-r-' + i  }}\" ></div>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"edicion == 1 && preguntas\">\r\n    <div class=\"col\">\r\n        <button class=\"btn btn-danger btn-sm\" (click)=\"borrarSeleccion()\">Borrar selección</button>\r\n    </div>  \r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"edicion == 0 && respuestas.length > 0\">\r\n    <div class=\"col-12\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Pregunta</th>\r\n                        <th>Respuesta</th>\r\n                        <th>Resultado</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let respuesta of respuestas\">\r\n                        <td [innerHtml]=\"respuesta.pregunta\"></td>\r\n                        <td [innerHtml]=\"respuesta.respuesta\"></td>\r\n                        <td width=\"5%\" style=\"text-align: center;\">\r\n                            <i [ngClass]=\"respuesta.class? 'fa fa-check fa-2x': 'fa fa-times fa-2x'\" [ngStyle]=\"respuesta.style\" aria-hidden=\"true\">{{respuesta.icono}}</i>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"edicion == 0 && respuestas.length == 0\">\r\n    <div class=\"alert alert-secondary mt-3\">No se puede responder la pregunta.</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\" *ngIf=\"!edicion && !intentosRestantes\">\r\n        <button class=\"btn btn-primary pull-right\" (click)=\"open(content)\">Ver respuestas</button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!preguntas\">\r\n    <div class=\"col-12\">\r\n        <div class=\"alert alert-danger\">No se han cargado reactivos en la pregunta</div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <ng-template #content>\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Respuestas</h4>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table table-bordered table-striped\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Pregunta</th>\r\n                            <th>Respuesta correcta</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let correcta of correctas\">\r\n                            <td>{{correcta.pregunta}}</td>\r\n                            <td>{{correcta.respuesta}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cerrar</button>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  position: absolute;\n  z-index: 2; }\n\n.round label {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 28px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 28px; }\n\n.round input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round input[type=\"checkbox\"]:checked + label {\n  background-color: #06e6ee;\n  border-color: #06e6ee; }\n\n.round_2 {\n  position: relative;\n  z-index: 2; }\n\n.round_2 label {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 28px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 28px; }\n\n.round_2 input[type=\"checkbox\"] {\n  visibility: hidden; }\n\n.round_2 input[type=\"checkbox\"]:checked + label {\n  background-color: #06e6ee;\n  border-color: #06e6ee; }\n\n.mydiv {\n  position: relative; }\n\n.mydiv:after {\n  content: no-close-quote;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  margin-left: -2px;\n  margin-top: -1px; }\n\n.divDer {\n  width: 28px;\n  height: 28px; }\n\n.divIzq {\n  width: 28px;\n  height: 28px; }\n\n.line {\n  position: absolute;\n  width: 3px;\n  background-color: #c0bebe; }\n\n.line_back {\n  position: absolute;\n  width: 3px;\n  background-color: #ffffff00; }\n\n.padding-answer-line-mapping {\n  padding-bottom: 8px; }\n\n.answer-container {\n  width: 40px;\n  min-height: 40px;\n  height: auto;\n  background-color: #eef;\n  border: 3px solid #eef;\n  margin: 2px;\n  float: left;\n  text-align: center;\n  padding-top: 5px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column; }\n\n.answer-container:hover, .answer-container:focus, .answer-container:active {\n  border: 3px solid; }\n\n.round-pointer-right {\n  position: absolute;\n  background-color: #eef;\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  right: 0px;\n  top: 45%;\n  margin-right: -20px;\n  z-index: 1000; }\n\n.round-pointer-left {\n  position: absolute;\n  background-color: #eef;\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  left: 0px;\n  top: 45%;\n  margin-left: -20px;\n  z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL3JlbGFjaW9uLWNvbHVtbmFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXG1hdGVyaWFcXGFjdGl2aWRhZFxccHJlZ3VudGFzXFxyZWxhY2lvbi1jb2x1bW5hc1xccmVsYWNpb24tY29sdW1uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsV0FBVSxFQUNYOztBQUNEO0VBQ0UsdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osUUFBTztFQUNQLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGFBQVk7RUFDWixRQUFPO0VBQ1AsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsc0JBQXFCLEVBQ3RCOztBQUVEO0VBR0UsbUJBQWlCLEVBRWxCOztBQUNEO0VBQ0Usd0JBQXNCO0VBQ3RCLG1CQUFpQjtFQUNqQixTQUFPO0VBQ1AsVUFBUTtFQUVSLFdBQVM7RUFDVCxZQUFVO0VBQ1YsbUJBQWlCO0VBQ2pCLGtCQUFnQjtFQUNoQixpQkFBZSxFQUNoQjs7QUFDRDtFQUNFLFlBQVU7RUFDVixhQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxZQUFVO0VBQ1YsYUFBVyxFQUNaOztBQUNEO0VBQ0UsbUJBQWlCO0VBQ2pCLFdBQVM7RUFDVCwwQkFBb0MsRUFDckM7O0FBQ0Q7RUFDRSxtQkFBaUI7RUFDakIsV0FBUztFQUNULDRCQUEyQixFQUM1Qjs7QUFRRDtFQUNJLG9CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVU7RUFDVixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLHVCQUFxQjtFQUNyQix1QkFBcUI7RUFDckIsWUFBVTtFQUNWLFlBQVU7RUFDVixtQkFBaUI7RUFDakIsaUJBQWU7RUFDZixnQkFBYztFQUNkLG1CQUFpQjtFQUNqQixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXFCO0VBQ3JCLGdCQUFjO0VBQ2QsWUFBVTtFQUNWLGFBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBUztFQUNULFNBQU87RUFDUCxvQkFBa0I7RUFDbEIsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQix1QkFBcUI7RUFDckIsZ0JBQWM7RUFDZCxZQUFVO0VBQ1YsYUFBVztFQUNYLG1CQUFrQjtFQUNsQixVQUFRO0VBQ1IsU0FBTztFQUNQLG1CQUFpQjtFQUNqQixjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL3JlbGFjaW9uLWNvbHVtbmFzL3JlbGFjaW9uLWNvbHVtbmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5yb3VuZCBsYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmU2ZWU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwNmU2ZWU7XHJcbiAgfVxyXG5cclxuICAucm91bmRfMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH0gIFxyXG4gICAgXHJcbiAgLnJvdW5kXzIgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZF8yIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZF8yIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZTZlZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzA2ZTZlZTtcclxuICB9ICBcclxuXHJcbiAgLm15ZGl2e1xyXG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOjUwJTtcclxuICB9XHJcbiAgLm15ZGl2OmFmdGVye1xyXG4gICAgY29udGVudDpuby1jbG9zZS1xdW90ZTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIHdpZHRoOjRweDtcclxuICAgIGhlaWdodDo0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIG1hcmdpbi1sZWZ0Oi0ycHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xcHg7XHJcbiAgfVxyXG4gIC5kaXZEZXJ7XHJcbiAgICB3aWR0aDoyOHB4O1xyXG4gICAgaGVpZ2h0OjI4cHg7XHJcbiAgfVxyXG4gIC5kaXZJenF7XHJcbiAgICB3aWR0aDoyOHB4O1xyXG4gICAgaGVpZ2h0OjI4cHg7XHJcbiAgfVxyXG4gIC5saW5le1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDozcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTAsIDE5MCk7XHJcbiAgfSAgXHJcbiAgLmxpbmVfYmFja3tcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6M3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwOyAgICBcclxuICB9IFxyXG5cclxuXHJcblxyXG4gIC8vIC5jb250YWluZXItY3VzIHtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIH1cclxuICAucGFkZGluZy1hbnN3ZXItbGluZS1tYXBwaW5ne1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTo4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbnN3ZXItY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWY7XHJcbiAgICAgIGJvcmRlcjozcHggc29saWQgI2VlZjtcclxuICAgICAgbWFyZ2luOjJweDtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuYW5zd2VyLWNvbnRhaW5lcjpob3ZlciwgLmFuc3dlci1jb250YWluZXI6Zm9jdXMsIC5hbnN3ZXItY29udGFpbmVyOmFjdGl2ZSB7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIH1cclxuICBcclxuICAucm91bmQtcG9pbnRlci1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVmO1xyXG4gICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgd2lkdGg6MTBweDtcclxuICAgICAgaGVpZ2h0OjEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgcmlnaHQ6MHB4O1xyXG4gICAgICB0b3A6NDUlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6LTIwcHg7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZC1wb2ludGVyLWxlZnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6I2VlZjtcclxuICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOjEwcHg7XHJcbiAgICAgIGhlaWdodDoxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGxlZnQ6MHB4O1xyXG4gICAgICB0b3A6NDUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDotMjBweDtcclxuICAgICAgei1pbmRleDogMTAwMDtcclxuICB9ICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RelacionColumnasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacionColumnasComponent", function() { return RelacionColumnasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_relacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/relacion.service */ "./src/app/administracion/carga-actividades/services/relacion.service.ts");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelacionColumnasComponent = /** @class */ (function () {
    function RelacionColumnasComponent(_usuarioService, _relacionService, modalService, _sanitizer) {
        this._usuarioService = _usuarioService;
        this._relacionService = _relacionService;
        this.modalService = modalService;
        this._sanitizer = _sanitizer;
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnaIzq = -1;
        this.columnaDer = -1;
        this.columnaselected = 0;
        this.respuestas = [];
        this.correctas = [];
    }
    RelacionColumnasComponent.prototype.ngOnInit = function () {
        this.pregunta = this.Data.pregunta;
        this.edicion = this.Data.edicion;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.intentosRestantes = this.Data.intentosRestantes;
        this.getDatos();
    };
    RelacionColumnasComponent.prototype.ngOnChanges = function () {
        // this.getDatos();
    };
    RelacionColumnasComponent.prototype.getDatos = function () {
        var _this = this;
        var datosReactivos = this.pregunta.arreglo_reactivos;
        this.jwt = this._usuarioService.getJWT();
        this.idPregunta = this.pregunta.pregunta_id;
        window.scrollTo(0, 0);
        if (datosReactivos.reactivos) {
            this.preguntas = datosReactivos.reactivos;
            if (this.preguntas.length > 0 && this.successCharge)
                this.successCharge.subscribe(function () { _this.getRespuestas(); });
            // this.getRespuestas();
        }
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 1);
        // this._relacionService.consultaRelacionAleatoria(this.idPregunta, this.jwt, this.idMateriaFechaActividad).subscribe(
        //   response =>{      
        //     window.scrollTo(0,0);
        //     if(response && response['status']){
        //       this.preguntas = response['reactivos'];
        //     }
        //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        // },error =>{
        //   console.log(<any>error)
        // }); 
    };
    RelacionColumnasComponent.prototype.getRespuestas = function () {
        var _this = this;
        this.respuestas = [];
        var _loop_1 = function (i) {
            if (this_1.preguntas[i].respuesta) {
                if (this_1.edicion == 1) {
                    var pos_1 = this_1.preguntas.findIndex(function (pregunta) {
                        return pregunta.columna_b_id == _this.preguntas[i].respuesta.columna_b_id;
                    });
                    setTimeout(function () {
                        _this.inicio(1, i, 1);
                        _this.inicio(1, pos_1, 2);
                    }, 15);
                }
                else if (this_1.edicion == 0) {
                    var pregunta = this_1.preguntas[i];
                    var respuesta = this_1.preguntas.find(function (res) {
                        return res.columna_b_id == _this.preguntas[i].respuesta.columna_b_id;
                    });
                    var icono = void 0, resultado = void 0;
                    if (pregunta.columna_a_id == respuesta.columna_b_id) {
                        icono = true;
                        resultado = { 'color': 'green' };
                    }
                    else {
                        icono = false;
                        resultado = { 'color': '#704214' };
                    }
                    this_1.respuestas.push({ pregunta: this_1.htmlProperty(pregunta.columna_a_desc), respuesta: this_1.htmlProperty(respuesta.columna_b_desc),
                        class: icono, style: resultado });
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.preguntas.length; i++) {
            _loop_1(i);
        }
    };
    RelacionColumnasComponent.prototype.drawLine = function (columnaIzq, columnaDer) {
        var leftEl = "#pointer-" + this.idPregunta + "-l-" + columnaIzq;
        var rightEl = "#pointer-" + this.idPregunta + "-r-" + columnaDer;
        var width = $(rightEl).offset().left - $(leftEl).offset().left;
        var height = $(leftEl).offset().top - $(rightEl).offset().top;
        if (height == 0) {
            height = 4;
        }
        var line = $("<div style='position: absolute; width: " + Math.abs(width - 9) + "px; height: " + Math.abs(height) + "px;'><svg style='width: 100%; height: 100%;'><line x1='" + (height > 0 ? '0' : '100%') + "' y1='100%'  x2='" + (height > 0 ? '100%' : '0') + "' y2='0' style='stroke:" + this.color + ";stroke-width:4'/></svg></div>");
        $(rightEl).children().remove();
        $(leftEl).children().remove();
        $(rightEl).append(line);
        $(leftEl).append(line);
        var leftTop = $(leftEl).offset().top;
        var rightTop = $(rightEl).offset().top;
        if (leftTop < rightTop) {
            line.offset({ top: $(leftEl).offset().top + 5, left: $(leftEl).offset().left + 9 });
        }
        else if (rightTop < leftTop) {
            line.offset({ top: $(rightEl).offset().top + 5, left: $(leftEl).offset().left + 9 });
        }
        else if (leftTop == rightTop) {
            line.offset({ top: $(leftEl).offset().top - 11, left: $(leftEl).offset().left + 9 });
        }
    };
    RelacionColumnasComponent.prototype.inicio = function (id, index, posicion) {
        //posicion 1: izquierda, 2: derecha
        if (this.columnaIzq == -1 && this.columnaDer == -1) {
            // this.color = 'hsla('+ Math.random() * 360 +', 100%, 50%, 1)';
            this.color = Object(randomcolor__WEBPACK_IMPORTED_MODULE_3__["randomColor"])();
        }
        if (posicion == 1 && posicion != this.columnaselected && !this.preguntas[index].color_a) {
            this.preguntas[index].color_a = this.color;
            this.columnaIzq = index;
            this.columnaselected = posicion;
        }
        else if (posicion == 2 && posicion != this.columnaselected && !this.preguntas[index].color_b) {
            this.preguntas[index].color_b = this.color;
            this.columnaDer = index;
            this.columnaselected = posicion;
        }
        if (this.columnaIzq != -1 && this.columnaDer != -1) {
            this.drawLine(this.columnaIzq, this.columnaDer);
            if (id == 0) {
                var leftElement = this.preguntas[this.columnaIzq].columna_a_id;
                var rightElement = this.preguntas[this.columnaDer].columna_b_id;
                var id_rectivo = this.preguntas[this.columnaIzq].reactivo_id;
                var respuesta = [];
                respuesta.push({ id_a_columna: leftElement, id_b_columna: rightElement, id_rectivo: id_rectivo });
                this.guardarSeleccion(respuesta);
            }
            this.columnaIzq = -1;
            this.columnaDer = -1;
            this.columnaselected = 0;
        }
    };
    RelacionColumnasComponent.prototype.borrarSeleccion = function () {
        this.columnaIzq = -1;
        this.columnaDer = -1;
        this.columnaselected = 0;
        this.preguntas.forEach(function (pregunta) {
            pregunta.color_a = '';
            pregunta.color_b = '';
        });
        $('.round-right-' + this.idPregunta).each(function (index) {
            $(this).children().remove();
        });
        this._relacionService.eliminaRespuestas(this.idPregunta, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    RelacionColumnasComponent.prototype.guardarSeleccion = function (respuesta) {
        this._relacionService.guardarRelacionColumnas(respuesta[0], this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
            }
            else {
                alertify.error('Error al guardar').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
        // alertify.confirm('¿deseas guardar tus respuestas?',
        // function(){
        //   alertify.success('Respuestas guardadas');
        // }.bind(this),
        // function(){
        //   alertify.error('Cancel');
        // });
    };
    RelacionColumnasComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
        this.getCorrectas();
    };
    RelacionColumnasComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    RelacionColumnasComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    RelacionColumnasComponent.prototype.getCorrectas = function () {
        this.correctas = [];
        for (var i = 0; i < this.preguntas.length; i++) {
            for (var j = 0; j < this.preguntas.length; j++) {
                if (this.preguntas[i].columna_a_id == this.preguntas[j].columna_b_id) {
                    this.correctas.push({ pregunta: this.htmlProperty(this.preguntas[i].columna_a_desc), respuesta: this.htmlProperty(this.preguntas[j].columna_b_desc),
                        id: this.preguntas[i].reactivo_id });
                }
            }
        }
        // this.correctas = this.preguntas.slice();
        // // this.correctas = JSON.parse(JSON.stringify(this.preguntas));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RelacionColumnasComponent.prototype, "successCharge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RelacionColumnasComponent.prototype, "actividadCargada", void 0);
    RelacionColumnasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'relacion-columnas',
            template: __webpack_require__(/*! ./relacion-columnas.component.html */ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.html"),
            styles: [__webpack_require__(/*! ./relacion-columnas.component.scss */ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_carga_actividades_services_relacion_service__WEBPACK_IMPORTED_MODULE_2__["RelacionService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], RelacionColumnasComponent);
    return RelacionColumnasComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RelacionColumnasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelacionColumnasModule", function() { return RelacionColumnasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _relacion_columnas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relacion-columnas.component */ "./src/app/materia/actividad/preguntas/relacion-columnas/relacion-columnas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RelacionColumnasModule = /** @class */ (function () {
    function RelacionColumnasModule() {
    }
    RelacionColumnasModule_1 = RelacionColumnasModule;
    var RelacionColumnasModule_1;
    RelacionColumnasModule.rootComponent = _relacion_columnas_component__WEBPACK_IMPORTED_MODULE_2__["RelacionColumnasComponent"];
    RelacionColumnasModule = RelacionColumnasModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [RelacionColumnasModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            entryComponents: [
                RelacionColumnasModule_1.rootComponent
            ]
        })
    ], RelacionColumnasModule);
    return RelacionColumnasModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-relacion-columnas-relacion-columnas-module.js.map