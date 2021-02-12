(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~doce~a403f458"],{

/***/ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"paso == 0 && idRol != 3\" class=\"row\">\r\n  <div  class=\"col-12 zona-drag\" [ngClass]=\"preguntas.length > 5 ? 'overflow' : ''\">\r\n    <div class=\"d-flex flex-row\" [ngClass]=\"preguntas.length > 5 ? '' : 'justify-content-center'\"\r\n      cdkDropList\r\n      id=\"zona_preguntas\"\r\n      [cdkDropListData]=\"preguntas\"\r\n      [cdkDropListConnectedTo]=\"connectedTo\"\r\n      cdkDropListOrientation=\"horizontal\"\r\n      (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"card\" [ngClass]=\"i == 0 ? '' : 'ml-5'\" \r\n        *ngFor=\"let _pregunta of preguntas; let i = index\" cdkDrag>\r\n        <div class=\"card-header bg-secondary text-white\">\r\n          <div class=\"form-row\">\r\n            <b class=\"col-9\">{{_pregunta.actividad_nombre}}</b><div class=\"col-3 numero\"><b>{{_pregunta.calificacion}}</b></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">{{_pregunta.retroalimentacion}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div *ngIf=\"paso == 0 && idRol != 3\" class=\"row\" >\r\n    <div class=\"col-12 mt-4\">\r\n      <h5 class=\"ml-3\"><b>Instrucción y preguntas guía</b></h5>\r\n    </div>\r\n    <div class=\"col-12  justify-content-center\" >\r\n      <div class=\"row\">\r\n        <div class=\"ml-4 mb-3 contenedor\"  *ngFor=\"let _zona of zonas; let i = index\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-6\" \r\n              cdkDropList id=\"{{_zona.id}}\" [cdkDropListData]=\"_zona.data\" \r\n              [cdkDropListConnectedTo]=\"principal\" \r\n              (cdkDropListDropped)=\"drop($event, _zona.id)\">\r\n              <div *ngIf=\"_zona.data[0] == ''\">\r\n                <div class=\"recuadro zona-drop\">\r\n                  <div class=\"digito\">{{i+1}}</div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"_zona.data[0] != ''\">\r\n                <div class=\"card_zone card mb-4\" style=\"cursor: default; box-shadow: none;\">\r\n                  <div class=\"card-header bg-secondary text-white\">\r\n                    <div class=\"form-row\">\r\n                      <b class=\"col-9\">{{_zona.data[0].actividad_nombre}}</b><div class=\"col-3 numero\"><b>{{_zona.data[0].calificacion}}</b></div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-text\">{{_zona.data[0].retroalimentacion}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <textarea class=\"recuadro text-area\" id=\"texto_{{i}}_{{idMateriaFechaActividad}}\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col col-6 mb-4\">\r\n          <button class=\"btn btn-primary\" (click)=\"borrarSeleccion()\">\r\n            Borrar selecciones\r\n          </button>\r\n        </div>   \r\n        <div class=\"col col-6 mb-4\">\r\n          <button class=\"btn btn-success pull-right\" (click)=\"enviarPortafolio()\">\r\n            Enviar portafolio\r\n          </button>\r\n        </div>   \r\n      </div> \r\n    </div>\r\n    </div>\r\n\r\n  \r\n\r\n\r\n<!-- <div *ngIf=\"edicion == 0 && idRol != 3\">\r\n  <div class=\"alert alert-secondary\">\r\n    El portafolio de evidencias ha sido respondido.\r\n  </div>\r\n</div> -->\r\n\r\n<div *ngIf=\"paso == 1 || paso == 2\" class=\"row\" >\r\n  <div class=\"col-12 justify-content-center\">\r\n    <div class=\"row\">\r\n      <div class=\"ml-4 mb-3 contenedor\" *ngFor=\"let _respuesta of respuestasAlumno; let i = index\">\r\n        <div class=\"form-row\">\r\n          <div class=\"col-6\">\r\n            <div class=\"card_zone card mb-4\" style=\"cursor: default; box-shadow: none;\">\r\n              <div class=\"card-header bg-secondary text-white\">\r\n                <div class=\"form-row\">\r\n                  <b class=\"col-9\">{{_respuesta.actividad_nombre}}</b><div class=\"col-3 numero\"><b>{{_respuesta.calificacion}}</b></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <p class=\"card-text\">{{_respuesta.retroalimentacion}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <textarea class=\"recuadro text-area\" id=\"texto_{{i}}_{{idMateriaFechaActividad}}\" disabled>{{_respuesta.respuesta}}</textarea>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"idRol == 3\" class=\"col-12 d-flex justify-content-center\">\r\n          <label class=\"c_checkbox\">\r\n            <input type=\"checkbox\" [checked]=\"_respuesta.validado == 1\" (change)=\"validarRespuesta(i)\" [disabled]=\"fechaActividad.estatus_actividad_id == 7 || portafolio.adjunto != null\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"paso == 2 && idRol != 3 \">\r\n  <div>\r\n    <h5 class=\"ml-3\"><b>Instrucción y preguntas guía</b></h5>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <form class=\"col\" [formGroup]=\"cargaArchivo\" (ngSubmit)=\"enviaArchivo()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <div class=\"row justify-content-center mt-3\">\r\n            <i class=\"fa fa-file-text-o documento\" aria-hidden=\"true\"><div class=\"circulo row justify-content-center\"><i class=\"fa fa-arrow-up flecha\"></i></div></i>\r\n          </div>\r\n          <app-file-upload formControlName=\"archivo\"></app-file-upload>\r\n          <span class=\"invalidText\" *ngIf=\"hasError( 'required')\">\r\n              Se requiere un archivo (.doc, .docx, .pdf, .odt)\r\n          </span>\r\n          <span class=\"invalidText\" *ngIf=\"hasError( 'requiredFileType')\">\r\n              Tipo de archivo inválido (.doc, .docx, .pdf, .odt)\r\n          </span>\r\n        </div>   \r\n        <div class=\"col-md-6 mb-4 mt-3\">\r\n          <textarea formControlName=\"respuesta\" class=\"area-text\" name=\"\" id=\"\"></textarea>\r\n          <span class=\"invalidText\" *ngIf=\"f.respuesta.invalid && f.respuesta.touched\">\r\n              Escribe una respuesta\r\n          </span>\r\n        </div>\r\n      </div>  \r\n      <div class=\"row\">\r\n        <div class=\"col col-12 mb-4\">\r\n          <button class=\"btn btn-success pull-right col-2\" [disabled]=\"cargaArchivo.invalid\">\r\n            Enviar\r\n          </button>\r\n        </div>   \r\n      </div>     \r\n    </form> \r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"paso == 3\">\r\n  <div class=\"row\" >\r\n    <div class=\"col-6\">\r\n      <label>Documento adjunto:</label>\r\n      <div class=\"form-control d-flex justify-content-center\">\r\n        <app-archivo [urlBase]=\"portafolio.adjunto\"></app-archivo> \r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <label>Conclusión:</label>\r\n      <p>{{portafolio.descripcion}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: red;\n  text-align: left !important; }\n\n.card-estudy {\n  text-align: left;\n  padding: 20px; }\n\n.card-estudy:hover {\n  cursor: pointer;\n  box-shadow: 2.5px 2.5px 5px 0px rgba(0, 0, 0, 0.75); }\n\n.alert-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n.header-estudy {\n  color: #1e5799; }\n\n.icon-estudy {\n  color: #1e5799; }\n\n.btn-estudy {\n  background-color: #1e5799;\n  color: white; }\n\n::ng-deep .modal-xl .modal-dialog {\n  max-width: 80%;\n  width: 80%; }\n\n.fondo {\n  background: #f1f1f1;\n  min-height: 100vh;\n  min-width: 100%; }\n\n.form-group {\n  margin-bottom: 0px; }\n\n.invalidText {\n  color: #dc3545;\n  text-align: left !important; }\n\n.ng-invalid.ng-touched {\n  border-color: #dc3545; }\n\n.ng-valid.ng-touched {\n  border-color: green; }\n\nlabel {\n  margin-top: 4px;\n  font-weight: 700; }\n\n.zona-drag {\n  height: 14rem;\n  margin-bottom: 10px; }\n\n.overflow {\n  overflow-y: hidden;\n  overflow-x: auto; }\n\n.contenedor {\n  position: relative;\n  height: 260px;\n  border: 1px solid #dadada;\n  border-radius: 5px; }\n\n.recuadro {\n  width: 135px;\n  height: 12rem;\n  border-radius: 5px;\n  position: relative; }\n\n.zona-drop {\n  border: dashed #ccc 2px;\n  align-items: center;\n  text-align: center;\n  margin: 10px; }\n\n.zona-drop:hover {\n  background-color: #fafafa;\n  border: dashed #c0c0c0 2px; }\n\n.digito {\n  position: relative;\n  line-height: 185px;\n  align-self: center;\n  color: #acacac;\n  font-size: 30px;\n  cursor: default; }\n\n.text-area {\n  border: transparent;\n  margin-top: 10px;\n  margin-left: -2px;\n  background-color: #f1f1f1;\n  text-align: justify;\n  resize: none;\n  font-size: 11px;\n  overflow: auto;\n  padding: 8px; }\n\n.area-text {\n  text-align: justify;\n  resize: none;\n  font-size: 14px;\n  overflow: auto;\n  width: 100%;\n  height: 10rem;\n  border: 1px solid #dadada;\n  border-bottom: 3px solid #d1d1d1;\n  padding: 16px;\n  border-radius: 5px; }\n\n.text-area:focus, .area-text:focus {\n  outline: 0px !important;\n  -webkit-appearance: none; }\n\n.card {\n  min-width: 135px;\n  min-height: 12rem;\n  max-width: 135px;\n  max-height: 12rem;\n  cursor: move;\n  border: transparent;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background-color: #f1f1f1;\n  z-index: 100; }\n\n.card:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.card-header {\n  padding-left: 8px;\n  font-size: 14px; }\n\n.card-body {\n  font-size: 11px;\n  overflow: auto;\n  padding: 8px;\n  text-align: justify; }\n\n.card_zone {\n  margin: 10px; }\n\n.numero {\n  border-radius: 5px;\n  width: 35px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  background-color: #00c7c7;\n  color: white;\n  font-size: 9px;\n  position: absolute;\n  left: 95px;\n  top: 3%; }\n\n.card-body::-webkit-scrollbar, .text-area::-webkit-scrollbar, .area-text::-webkit-scrollbar {\n  width: 12px; }\n\n.card-body::-webkit-scrollbar-button, .text-area::-webkit-scrollbar-button,\n.area-text::-webkit-scrollbar {\n  height: 10px; }\n\n.card-body::-webkit-scrollbar-track, .text-area::-webkit-scrollbar-track {\n  background: #f1f1f1; }\n\n.area-text::-webkit-scrollbar-track {\n  background: transparent; }\n\n.card-body::-webkit-scrollbar-thumb, .text-area::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n  border: 3px solid #f1f1f1; }\n\n.area-text::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n  border: 3px solid white; }\n\n.card-body::-webkit-scrollbar-thumb:hover, .text-area::-webkit-scrollbar-thumb:hover,\n.area-text::-webkit-scrollbar-thumb:hover {\n  background: #818181; }\n\n.zona-drag::-webkit-scrollbar {\n  width: 30px;\n  height: 13px; }\n\n.zona-drag::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 7px; }\n\n.zona-drag::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 7px;\n  border: 1px solid #f1f1f1; }\n\n.zona-drag::-webkit-scrollbar-thumb:hover {\n  background: #646464; }\n\nh5 {\n  color: #162b6a; }\n\n.documento {\n  color: #acacac;\n  font-size: 70px;\n  margin-bottom: -23px; }\n\n.circulo {\n  position: relative;\n  height: 30px;\n  width: 30px;\n  background-color: #1e5799;\n  border-radius: 50%;\n  top: -30px;\n  left: 45px; }\n\n.flecha {\n  position: relative;\n  font-size: 20px;\n  top: 5px;\n  color: white; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 5px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.zona-drag:last-child {\n  border: none; }\n\n.zona-drag.cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.c_checkbox {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 30px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.c_checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: -12px;\n  left: 0;\n  height: 35px;\n  width: 35px;\n  background-color: #eee;\n  border-radius: 5px; }\n\n/* On mouse-over, add a grey background color */\n\n.c_checkbox:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.c_checkbox input:checked ~ .checkmark {\n  background-color: #00c7c7; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.c_checkbox input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.c_checkbox .checkmark:after {\n  left: 13.5px;\n  top: 4px;\n  width: 8px;\n  height: 25px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  border-radius: 2px;\n  transform: rotate(45deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcG9ydGFmb2xpby1ldmlkZW5jaWFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcG9ydGFmb2xpby1ldmlkZW5jaWFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXHNoYXJlZFxcc3R5bGVzXFxmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcG9ydGFmb2xpby1ldmlkZW5jaWFzL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXG1hdGVyaWFcXGFjdGl2aWRhZFxccG9ydGFmb2xpby1ldmlkZW5jaWFzXFxwb3J0YWZvbGlvLWV2aWRlbmNpYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxtQkFBa0IsRUFDbEI7O0FBR0Q7RUFDSSxXQUFVO0VBQ1YsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUdmLG9EQUFnRCxFQUNuRDs7QUFFRDtFQUNJLDBCQTFCa0I7RUEyQmxCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGVBL0JrQixFQWdDckI7O0FBRUQ7RUFDSSxlQW5Da0IsRUFvQ3JCOztBQUNEO0VBQ0ksMEJBdENrQjtFQXVDbEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksZUFBYztFQUNkLFdBQVUsRUFDYjs7QUFFRDtFQUNJLG9CQUE4QjtFQUM5QixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FDcEREO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUNEO0VBQ0ksZUFBYztFQUNkLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLHNCQUFz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OztBQUNEO0VBQ0UsdURBQXNELEVBQ3ZEOztBQUVEO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDbEI7O0FBRUQseUNBQXlDOztBQUN6QztFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsU0FBUSxFQUNUOztBQUVELDhCQUE4Qjs7QUFDOUI7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFDbkI7O0FBRUQsZ0RBQWdEOztBQUNoRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRCx5REFBeUQ7O0FBQ3pEO0VBQ0UsMEJBQXlCLEVBQzFCOztBQUVELDhEQUE4RDs7QUFDOUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRCxxQ0FBcUM7O0FBQ3JDO0VBQ0UsZUFBYyxFQUNmOztBQUVELG1DQUFtQzs7QUFDbkM7RUFDRSxhQUFZO0VBQ1osU0FBUTtFQUNSLFdBQVU7RUFDVixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFHbEIseUJBQXdCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcG9ydGFmb2xpby1ldmlkZW5jaWFzL3BvcnRhZm9saW8tZXZpZGVuY2lhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJHNjaG9vbC1jb2xvcjogIzFlNTc5OTtcclxuXHJcblxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5pbnZhbGlkVGV4dHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWVzdHVkeXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1lc3R1ZHk6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDIuNXB4IDIuNXB4IDUgICBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMi41cHggMi41cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpOyBcclxufVxyXG5cclxuLmFsZXJ0LWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXItZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG5cclxuLmljb24tZXN0dWR5e1xyXG4gICAgY29sb3I6ICRzY2hvb2wtY29sb3JcclxufVxyXG4uYnRuLWVzdHVkeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzY2hvb2wtY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwteGwgLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZm9uZG8geyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxufSIsIlxyXG4uZm9ybS1ncm91cHtcclxuIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW52YWxpZFRleHR7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyLWNvbG9yOiAgI2RjMzU0NTsgXHJcbn1cclxuLm5nLXZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuOyBcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZm9ybXMuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiAgLnpvbmEtZHJhZ3sgXHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLm92ZXJmbG93e1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbiAgLmNvbnRlbmVkb3J7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICAucmVjdWFkcm97XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuem9uYS1kcm9wIHtcclxuICAgIGJvcmRlcjogZGFzaGVkICNjY2MgMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDsgICBcclxuICB9XHJcbiAgLnpvbmEtZHJvcDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyOiBkYXNoZWQgI2MwYzBjMCAycHg7XHJcbiAgfVxyXG4gIC5kaWdpdG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTg1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2FjYWNhYztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgLnRleHQtYXJlYXtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHJlc2l6ZTogbm9uZTsgXHJcbiAgICBmb250LXNpemU6IDExcHg7IG92ZXJmbG93OiBhdXRvOyBwYWRkaW5nOiA4cHg7XHJcbiAgfSAgXHJcbiAgLmFyZWEtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICByZXNpemU6IG5vbmU7IFxyXG4gICAgZm9udC1zaXplOiAxNHB4OyBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2QxZDFkMTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWFyZWE6Zm9jdXMsIC5hcmVhLXRleHQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOjBweCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICAuY2FyZHtcclxuICAgIG1pbi13aWR0aDogMTM1cHg7IFxyXG4gICAgbWluLWhlaWdodDogMTJyZW07IFxyXG4gICAgbWF4LXdpZHRoOiAxMzVweDtcclxuICAgIG1heC1oZWlnaHQ6IDEycmVtO1xyXG4gICAgY3Vyc29yOiBtb3ZlOyBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbiAgLmNhcmQ6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDsgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgZm9udC1zaXplOiAxMXB4OyBvdmVyZmxvdzogYXV0bzsgcGFkZGluZzogOHB4OyB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICAuY2FyZF96b25le1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICAubnVtZXJve1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM3Yzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDk1cHg7XHJcbiAgICB0b3A6IDMlO1xyXG4gIH1cclxuICAuY2FyZC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciwgLnRleHQtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIsIC5hcmVhLXRleHQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci1idXR0b24sIC50ZXh0LWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiwgXHJcbiAgLmFyZWEtdGV4dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gIH0gIFxyXG4gIC5jYXJkLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLCAudGV4dC1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICB9XHJcbiAgLmFyZWEtdGV4dDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIH1cclxuICAuY2FyZC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiwgLnRleHQtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgIGJvcmRlci1yYWRpdXM6IDEwcHg7IGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7IFxyXG4gIH1cclxuICAuYXJlYS10ZXh0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4OyAgYm9yZGVyLXJhZGl1czogMTBweDsgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7IFxyXG4gIH1cclxuICAuY2FyZC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciwgLnRleHQtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsIFxyXG4gIC5hcmVhLXRleHQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzgxODE4MTsgXHJcbiAgfVxyXG5cclxuICAuem9uYS1kcmFnOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMTNweDtcclxuICB9XHJcbiAgLnpvbmEtZHJhZzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgfVxyXG4gIC56b25hLWRyYWc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7ICBib3JkZXItcmFkaXVzOiA3cHg7IGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7IFxyXG4gIH1cclxuICAuem9uYS1kcmFnOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICM2NDY0NjQ7IFxyXG4gIH1cclxuXHJcbiAgaDV7XHJcbiAgICBjb2xvcjogIzE2MmI2YTtcclxuICB9XHJcbiAgLmRvY3VtZW50b3tcclxuICAgIGNvbG9yOiAjYWNhY2FjOyBmb250LXNpemU6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjNweDtcclxuICB9XHJcbiAgLmNpcmN1bG97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTU3OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgbGVmdDogNDVweDtcclxuICB9XHJcbiAgLmZsZWNoYXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgLnpvbmEtZHJhZzpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgLnpvbmEtZHJhZy5jZGstZHJvcC1saXN0LWRyYWdnaW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC5jX2NoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbiAgLmNfY2hlY2tib3ggaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTEycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAuY19jaGVja2JveDpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICB9XHJcbiAgXHJcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgLmNfY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzdjNztcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgLmNfY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbiAgLmNfY2hlY2tib3ggLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBsZWZ0OiAxMy41cHg7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PortafolioEvidenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioEvidenciasComponent", function() { return PortafolioEvidenciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_materia_actividad_services_portafolio_evidencias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/materia/actividad/services/portafolio-evidencias.service */ "./src/app/materia/actividad/services/portafolio-evidencias.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/file-upload/file.upload.validators */ "./src/app/components/file-upload/file.upload.validators.ts");
/* harmony import */ var src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/materia/actividad/services/actividad.service */ "./src/app/materia/actividad/services/actividad.service.ts");
/* harmony import */ var src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/materia.service */ "./src/app/services/materia.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PortafolioEvidenciasComponent = /** @class */ (function () {
    function PortafolioEvidenciasComponent(formBuilder, _usuarioService, _actividadService, _portafolioService, _materiaService) {
        this.formBuilder = formBuilder;
        this._usuarioService = _usuarioService;
        this._actividadService = _actividadService;
        this._portafolioService = _portafolioService;
        this._materiaService = _materiaService;
        this.preguntas = [];
        this.zonas = [];
        this.principal = ["zona_preguntas"];
        this.connectedTo = [];
        this.textoPrueba = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.bandera = false;
        this.completo = false;
        this.actividades = [];
        this.respuestas = [];
        this.respuestasAlumno = [];
        this.RespuestasAlumno = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paso = 0;
    }
    PortafolioEvidenciasComponent.prototype.ngOnInit = function () {
        this.jwt = this._usuarioService.getJWT();
        this.idRol = parseInt(this._usuarioService.getRol().rol_id);
        this.cargaArchivo = this.formBuilder.group({
            archivo: ['', [Object(src_app_components_file_upload_file_upload_validators__WEBPACK_IMPORTED_MODULE_5__["requiredFileType"])(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            respuesta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.getPreguntas(0);
    };
    PortafolioEvidenciasComponent.prototype.getPreguntas = function (id) {
        var _this = this;
        this.preguntas = [];
        this._portafolioService.consultaActividades(this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            console.log(response);
            if (response && response['status']) {
                _this.preguntas = response['Actividades'];
                // for (let i = 0; i < this.preguntas.length; i++) {
                //    this.preguntas[i].id = i + 1;
                //    this.preguntas[i].texto = this.textoPrueba;
                // }
                if (!id) {
                    _this.zonas = [{ id: 'zona_1', data: [''] }, { id: 'zona_2', data: [''] }, { id: 'zona_3', data: [''] }];
                    _this.connectedTo = ['zona_1', 'zona_2', 'zona_3'];
                    // for (let i = 0; i < this.preguntas.length; i++) { 
                    //   this.zonas.push({id:'zona_' + (i+1), data: ['']})
                    // }
                    // for (let _zona of this.zonas) {
                    //   this.connectedTo.push(_zona.id)
                    // };
                }
                _this.getRespuestas();
            }
        }, function (error) {
            console.log(error);
        });
    };
    PortafolioEvidenciasComponent.prototype.getRespuestas = function () {
        var _this = this;
        this._portafolioService.consultaRespuestas(this.idActividad, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.portafolio = response['respuestas'];
                _this.idPortafolio = response['respuestas'].portafolio_id;
                _this.paso = response['respuestas'].paso;
                _this.respuestasAlumno = response['respuestas'].respuesta_ponderacion;
                var pregunta_1;
                _this.respuestasAlumno.forEach(function (respuesta) {
                    var preguntas = _this.preguntas.slice();
                    pregunta_1 = preguntas.find(function (res) { return res.actividad_id === respuesta.actividad_id; });
                    var calificacion;
                    if (pregunta_1) {
                        calificacion = pregunta_1.calificacion;
                        respuesta.calificacion = calificacion;
                    }
                });
                _this.zonas.forEach(function (zona) {
                    zona.data[0] = _this.respuestasAlumno[0].respuesta;
                });
                _this.RespuestasAlumno.emit(_this.respuestasAlumno);
                if (_this.fechaActividad.estatus_actividad_id == 7 && _this.idRol != 3) {
                    for (var i = 0; i < _this.respuestasAlumno.length; i++) {
                        if (_this.respuestasAlumno[i].data[0].validado == '0') {
                            _this.respuestasAlumno.splice(i, 1);
                        }
                    }
                }
            }
            _this._materiaService.actividadesCargadas.emit({ cargado: true, componente: 'portafolio' });
        }, function (error) {
            console.log(error);
        });
    };
    Object.defineProperty(PortafolioEvidenciasComponent.prototype, "f", {
        get: function () { return this.cargaArchivo.controls; },
        enumerable: true,
        configurable: true
    });
    PortafolioEvidenciasComponent.prototype.hasError = function (error) {
        var control = this.cargaArchivo.get('archivo');
        return control.dirty && control.hasError(error);
    };
    PortafolioEvidenciasComponent.prototype.drop = function (event, zone) {
        if (zone === void 0) { zone = "zona_preguntas"; }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            var contenedor = void 0;
            contenedor = this.zonas.find(function (zona) { return zona.id == zone; });
            if (contenedor.data[0] == '') {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, 0);
            }
        }
    };
    PortafolioEvidenciasComponent.prototype.borrarSeleccion = function () {
        this.getPreguntas(1);
        this.zonas.forEach(function (zona) {
            zona.data = [""];
        });
    };
    PortafolioEvidenciasComponent.prototype.enviarPortafolio = function () {
        alertify.confirm('Enviar portafolio', '¿Deseas enviar el portafolio de evidencias?', function () {
            var _this = this;
            this.actividades = [];
            this.respuestas = [];
            this.completo = true;
            for (var i = 0; i < this.zonas.length; i++) {
                var id = 'texto_' + i + '_' + this.idMateriaFechaActividad;
                var texto = document.getElementById(id).value;
                if (texto.length == 0) {
                    this.completo = false;
                }
            }
            for (var _i = 0, _a = this.zonas; _i < _a.length; _i++) {
                var zona = _a[_i];
                if (zona.data[0] === '') {
                    this.completo = false;
                }
            }
            // if (this.completo && !this.idPortafolio) {
            if (this.completo) {
                this._portafolioService.crearPortafolio(this.idActividad, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this.idPortafolio = response['idPortafolio'];
                        for (var i = 0; i < _this.zonas.length; i++) {
                            var id = 'texto_' + i + '_' + _this.idMateriaFechaActividad;
                            var texto = document.getElementById(id).value;
                            _this.actividades.push(_this.zonas[i].data[0].actividad_id);
                            _this.respuestas.push(texto);
                        }
                        _this.guardarPortafolio();
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            // else if (this.completo && this.idPortafolio) {
            //   console.log("Editar")
            // }
            else {
                alertify.error("Responde todas las preguntas").dismissOthers();
            }
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    PortafolioEvidenciasComponent.prototype.guardarPortafolio = function () {
        var _this = this;
        this._portafolioService.guardarPortafolio(this.idMateriaFechaActividad, this.actividades, this.idPortafolio, this.respuestas, this.jwt)
            .subscribe(function (response) {
            if (response && response['status']) {
                alertify.success(response['msg']).dismissOthers();
                _this._actividadService.actividadCompletada.emit();
                _this.paso = 1;
                _this.getRespuestas();
            }
        }, function (error) {
            console.log(error);
        });
    };
    PortafolioEvidenciasComponent.prototype.enviaArchivo = function () {
        alertify.confirm('Enviar archivo', '¿Estás seguro que deseas enviar el archivo?', function () {
            var _this = this;
            this._portafolioService.guardarInformacion(this.idPortafolio, this.cargaArchivo, this.jwt).subscribe(function (response) {
                if (response && response['status']) {
                    // alertify.success(response['msg']).dismissOthers();
                    _this._portafolioService.finalizarPortafolio(_this.idMateriaFechaActividad, _this.jwt).subscribe(function (response) {
                        if (response && response['status']) {
                            alertify.success("Portafolio finalizado correctamente").dismissOthers();
                            _this.getRespuestas();
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                console.log(error);
            });
        }.bind(this), function () {
            alertify.error('Cancelado');
        });
    };
    PortafolioEvidenciasComponent.prototype.validarRespuesta = function (id) {
        var buscaValidado = this.respuestasAlumno[id].validado;
        var actividadId = this.respuestasAlumno[id].actividad_id;
        var portafolioId = this.respuestasAlumno[id].portafolio_id;
        var validado;
        if (buscaValidado == '0') {
            validado = '1';
            this.respuestasAlumno[id].validado = '1';
        }
        else if (buscaValidado == '1') {
            validado = '0';
            this.respuestasAlumno[id].validado = '0';
        }
        this.RespuestasAlumno.emit(this.respuestasAlumno);
        this._portafolioService.validaRespuesta(actividadId, portafolioId, validado, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                //alertify.success("Respuesta validada").dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "RespuestasAlumno", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "edicion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "idMateriaFechaActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "idActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "estatusActividad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortafolioEvidenciasComponent.prototype, "fechaActividad", void 0);
    PortafolioEvidenciasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'portafolio-evidencias',
            template: __webpack_require__(/*! ./portafolio-evidencias.component.html */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.html"),
            styles: [__webpack_require__(/*! ./portafolio-evidencias.component.scss */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_materia_actividad_services_actividad_service__WEBPACK_IMPORTED_MODULE_6__["ActividadService"],
            src_app_materia_actividad_services_portafolio_evidencias_service__WEBPACK_IMPORTED_MODULE_2__["PortafolioEvidenciasService"],
            src_app_services_materia_service__WEBPACK_IMPORTED_MODULE_7__["MateriaService"]])
    ], PortafolioEvidenciasComponent);
    return PortafolioEvidenciasComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PortafolioEvidenciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioEvidenciasModule", function() { return PortafolioEvidenciasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _portafolio_evidencias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portafolio-evidencias.component */ "./src/app/materia/actividad/portafolio-evidencias/portafolio-evidencias.component.ts");
/* harmony import */ var _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/archivo/archivo.module */ "./src/app/components/archivo/archivo.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PortafolioEvidenciasModule = /** @class */ (function () {
    function PortafolioEvidenciasModule() {
    }
    PortafolioEvidenciasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_portafolio_evidencias_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioEvidenciasComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                src_app_components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"],
                _components_archivo_archivo_module__WEBPACK_IMPORTED_MODULE_6__["ArchivoModule"]
            ],
            exports: [
                _portafolio_evidencias_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioEvidenciasComponent"]
            ]
        })
    ], PortafolioEvidenciasModule);
    return PortafolioEvidenciasModule;
}());



/***/ }),

/***/ "./src/app/materia/actividad/services/portafolio-evidencias.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/materia/actividad/services/portafolio-evidencias.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PortafolioEvidenciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioEvidenciasService", function() { return PortafolioEvidenciasService; });
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




var PortafolioEvidenciasService = /** @class */ (function () {
    function PortafolioEvidenciasService(_http, _httpClient) {
        this._http = _http;
        this._httpClient = _httpClient;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    PortafolioEvidenciasService.prototype.consultaRespuestas = function (id_actividad, id_fecha, jwt) {
        var params = '?id_actividad=' + id_actividad;
        params += '&id_materia_fecha_actividad=' + id_fecha;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/portafolioEvidencias/consulta.php' + params);
    };
    PortafolioEvidenciasService.prototype.consultaActividades = function (idMateriaFechaActividad, jwt) {
        var params = '?id_materia_fecha_actividad=' + idMateriaFechaActividad;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/fechaActividad/consultaActividadesPortafolio.php' + params);
    };
    PortafolioEvidenciasService.prototype.crearPortafolio = function (id_actividad, id_materia, jwt) {
        var formData = new FormData();
        formData.append('id_actividad', id_actividad);
        formData.append('id_materia_fecha_actividad', id_materia);
        formData.append('descripcion', "");
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/portafolioEvidencias/crea.php', formData);
    };
    PortafolioEvidenciasService.prototype.guardarPortafolio = function (id_materia_fecha_actividad, actividades, id_portafolio, respuestas, jwt) {
        var formData = new FormData();
        formData.append('id_materia_fecha_actividad', id_materia_fecha_actividad);
        actividades.forEach(function (actividad) {
            formData.append('id_actividad[]', actividad);
        });
        respuestas.forEach(function (respuesta) {
            formData.append('respuesta[]', respuesta);
        });
        formData.append('id_portafolio', id_portafolio);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/portafolioEvidencias/agregaActividades.php', formData);
    };
    PortafolioEvidenciasService.prototype.guardarInformacion = function (id_portafolio, form, jwt) {
        var formData = new FormData();
        formData.append('id_portafolio', id_portafolio);
        formData.append('descripcion', form.get('respuesta').value);
        formData.append('archivo', form.get('archivo').value);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/portafolioEvidencias/edita.php', formData);
    };
    PortafolioEvidenciasService.prototype.validaRespuesta = function (id_actividad, id_portafolio, validado, jwt) {
        var params = '?id_portafolio=' + id_portafolio;
        params += '&id_actividad=' + id_actividad;
        params += '&validado=' + validado;
        params += '&jwt=' + jwt;
        return this._httpClient.get(this.url + '/learning/portafolioEvidencias/validarRespuesta.php' + params);
    };
    PortafolioEvidenciasService.prototype.finalizarPortafolio = function (id_materia_fecha, jwt) {
        var formData = new FormData();
        formData.append('materia_fecha_actividad_id', id_materia_fecha);
        formData.append('jwt', jwt);
        return this._httpClient.post(this.url + 'learning/fechaActividad/finalizarPortafolio.php', formData);
    };
    PortafolioEvidenciasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortafolioEvidenciasService);
    return PortafolioEvidenciasService;
}());



/***/ })

}]);
//# sourceMappingURL=default~actividad-main-main-module~actividad-portafolio-evidencias-portafolio-evidencias-module~doce~a403f458.js.map