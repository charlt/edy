(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-opcion-multiple-opcion-multiple-module"],{

/***/ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-8 \" >\r\n            <img class=\"img-fluid\" *ngIf=\"urlImagen\"  [src]=\"url + urlImagen\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"edicion\">\r\n        <div class=\"col-12 styled-input-container styled-input--square\" *ngFor=\"let reactivo of reactivos; let i = index\">\r\n            <div *ngIf=\"!reactivo.contenido_reactivo\">\r\n                <div class=\"styled-input-single\"  (click)=\"seleccionaElemento(i)\">\r\n                    <input [checked]=\"reactivo.checked\" type=\"checkbox\" name=\"respuesta\">\r\n                    <label [ngClass]=\"[edicion? 'cursor': '', reactivo.checked? 'font-weight-bold': '']\" [innerHTML]=\"reactivo.html_reactivo\" ></label>\r\n                </div>   \r\n            </div>   \r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"edicion\">\r\n        <div class=\"col-md-6 \" *ngFor=\"let reactivo of reactivos; let i = index;\">\r\n            <div  class=\"row\" *ngIf=\"reactivo.contenido_reactivo\" >\r\n                    <div class=\"parent col \" (click)=\"seleccionaElemento(i)\">\r\n                        <div class=\"child\" [class.seleccionado]=\"reactivo.checked\" [style.background-image]=\"'url('+ url + reactivos[i].contenido_reactivo + ')'\">\r\n                            <a href=\"javascript:void(0)\"><i class=\"fa fa-circle fa-2x\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                <!--div class=\"col col-imagen m-4\"  >\r\n                    <div class=\"custom-control custom-checkbox scale\">\r\n                        <input [(ngModel)]=\"checked[i].check\" (change)=\"isChecked($event, i)\" type=\"checkbox\" name=\"respuesta\" id=\"{{reactivos[i].reactivo_id}}\" class=\"custom-control-input\">\r\n                        <label class=\"custom-control-label\" for=\"{{reactivos[i].reactivo_id}}\"></label>\r\n                    </div>   \r\n                </div-->\r\n            </div>                                                       \r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row\" *ngIf=\"!edicion\">\r\n        <div class=\"col-12\"> -->\r\n            <!-- <div *ngIf=\"resAlumno && !correcta && !resAlumno.contenido_reactivo\" class=\"alert alert-secondary\">\r\n                {{resAlumno.reactivo}}\r\n                <div class=\"alert border-white bg-white text-dark mt-3\">{{resAlumno.retroalimentacion}}</div>\r\n            </div> -->\r\n            <!-- <div *ngIf=\"respuesta && !respuesta.contenido_reactivo\" class=\"alert\" [ngClass]=\"correcta ? 'alert-success': 'alert-secondary'\">\r\n                {{respuesta.reactivo}}\r\n                <div class=\"alert border-white bg-white text-dark mt-3\" *ngIf=\"respuesta.retroalimentacion\">\r\n                    {{respuesta.retroalimentacion}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div *ngIf=\"!edicion\">\r\n        <div class=\"row\" *ngFor=\"let _respuesta of respuestas\">\r\n            <div *ngIf=\"_respuesta && _respuesta.contenido_reactivo\" class=\"col-md-6\">\r\n                <div class=\"parent_respuesta col\">\r\n                    <div class=\"child\" [ngClass]=\"_respuesta.correcta ? 'correcto': 'incorrecto'\" [style.background-image]=\"'url('+ url + _respuesta.contenido_reactivo + ')'\">\r\n                        <a><i class=\"fa fa-2x\" [ngClass]=\"_respuesta.correcta ? 'fa-check-circle': 'fa-times'\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"_respuesta.retroalimentacion\" class=\"alert ml-5\" [ngClass]=\"_respuesta.correcta ? 'alert-success': 'alert-secondary'\">\r\n                    {{_respuesta.retroalimentacion}}\r\n                </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"_respuesta && !_respuesta.contenido_reactivo\" class=\"alert col-md-12\" [ngClass]=\"_respuesta.correcta ? 'alert-success': 'alert-secondary'\">\r\n                <b *ngIf=\"_respuesta.correcta\">Mi respuesta: </b>\r\n                <b *ngIf=\"!_respuesta.correcta\">Mi respuesta:</b>\r\n                <p>{{_respuesta.reactivo}}</p>\r\n                <div class=\"alert border-white bg-white text-dark mt-3\" *ngIf=\"_respuesta.retroalimentacion\">\r\n                    {{_respuesta.retroalimentacion}}\r\n                </div>\r\n            </div> -->\r\n            <div *ngIf=\"_respuesta && !_respuesta.contenido_reactivo\" class=\"alert col-12\" role=\"alert\" [ngClass]=\"_respuesta.correcta ? 'border-success': 'border-secondary'\">\r\n                <b *ngIf=\"_respuesta.correcta\" class=\"alert-heading\">Mi respuesta <i class=\"fa fa-check text-success\"></i></b>\r\n                <b *ngIf=\"!_respuesta.correcta\" class=\"alert-heading\">Mi respuesta <i class=\"fa fa-times text-danger\"></i></b>\r\n                <hr [ngClass]=\"_respuesta.correcta ? 'border-success': 'border-secondary'\">\r\n                <blockquote class=\"blockquote mb-0\">\r\n                    <p [innerHTML]=\"_respuesta.html_reactivo\"></p>\r\n                    <footer class=\"blockquote-footer ml-4 mb-2\">{{_respuesta.retroalimentacion}}</footer>\r\n                </blockquote>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"resCorrecta && resCorrecta.length > 0\">\r\n            <div *ngFor=\"let correcta of resCorrecta\" class=\"row\">\r\n                <div *ngIf=\"!correcta.contenido_reactivo\" class=\"alert border-success col-12\" role=\"alert\">\r\n                    <b class=\"alert-heading\">Respuesta correcta: <i class=\"fa fa-check text-success\"></i></b>\r\n                    <hr class=\"border-success\">\r\n                    <blockquote class=\"blockquote mb-0\">\r\n                        <p [innerHTML]=\"correcta.html_reactivo\"></p>\r\n                        <footer class=\"blockquote-footer ml-4 mb-2\">{{correcta.retroalimentacion}}</footer>\r\n                    </blockquote>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!edicion && (!respuestas || !respuestas.length)\">\r\n        <div class=\"col-12\">\r\n            <div class=\"alert alert-secondary\">No se puede responder la pregunta.</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"reactivos.length == 0\">\r\n        <div class=\"col-12\">\r\n            <div class=\"alert alert-danger\">No se han cargado reactivos en la pregunta</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scale {\n  transform: scale(2, 2); }\n\n.custom-control {\n  display: block;\n  margin: auto; }\n\n.col-imagen {\n  height: 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  /* Center the image */\n  background-size: cover;\n  /* Resize the background image to cover the entire container */ }\n\n/* Global Styling */\n\nhtml, body {\n  margin: 0px;\n  padding: 0px; }\n\nnav {\n  background-color: #34495e;\n  height: 80px;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  z-index: 999; }\n\n#logo {\n  height: 80px;\n  margin-left: 20px; }\n\n.wrapper {\n  padding: 50px 50px;\n  max-width: 1200px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 80px; }\n\n.right {\n  float: right !important; }\n\n/* Image zoom on hover + Overlay colour */\n\n.parent {\n  margin: 20px;\n  height: 300px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n\n.parent_respuesta {\n  margin: 20px;\n  height: 300px; }\n\n.child.seleccionado {\n  border: 6px solid #1e5799; }\n\n.child.seleccionado a {\n    display: block; }\n\n.child.seleccionado a i {\n      color: #1e5799; }\n\n.child.correcto {\n  border: 6px solid #28a745; }\n\n.child.correcto a {\n    display: block; }\n\n.child.correcto a i {\n      color: #28a745; }\n\n.child.incorrecto {\n  border: 6px solid #959ea7; }\n\n.child.incorrecto a {\n    display: block; }\n\n.child.incorrecto a i {\n      color: #959ea7; }\n\n.child {\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  transition: all .5s; }\n\n/* Several different images */\n\n.bg-one {\n  background-image: url(https://media.timeout.com/images/101602611/image.jpg); }\n\n.bg-two {\n  background-image: url(http://s1.it.atcdn.net/wp-content/uploads/2015/08/2-London.jpg); }\n\n.bg-three {\n  background-image: url(https://media.timeout.com/images/101484105/image.jpg); }\n\n.bg-four {\n  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hollywood_Sign.jpg/1280px-Hollywood_Sign.jpg); }\n\n.bg-five {\n  background-image: url(http://www.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/1453920892/DUBAI-554088081-ABOVE0116.jpg?itok=dcoZnCrc); }\n\n.bg-six {\n  background-image: url(http://blog.whitepages.com/wp-content/uploads/2015/04/san-franc.jpg); }\n\na {\n  display: none;\n  font-size: 35px;\n  color: #ffffff !important;\n  font-family: sans-serif;\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 50px;\n  cursor: pointer;\n  /*text-decoration: none;*/ }\n\n.parent:hover .child, .parent:focus .child {\n  transform: scale(1.2); }\n\n.parent:hover .child:before, .parent:focus .child:before {\n  display: block; }\n\n.parent:hover a, .parent:focus a {\n  display: block; }\n\n.child:before {\n  content: \"\";\n  display: none;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n/* Media Queries */\n\n@media screen and (max-width: 960px) {\n  .parent {\n    width: 100%;\n    margin: 20px 0px; }\n  .wrapper {\n    padding: 20px 20px; } }\n\n.hello {\n  display: none; }\n\n/*estilo square*/\n\n.styled-input-single {\n  position: relative;\n  padding: 5px 5px 5px 35px;\n  margin: 5px;\n  text-align: left;\n  display: inline-block; }\n\n.styled-input-single .cursor {\n    cursor: pointer; }\n\n.styled-input-single label:before, .styled-input-single label:after {\n    content: '';\n    position: absolute;\n    top: 52%;\n    border-radius: 50%; }\n\n.styled-input-single label:before {\n    left: 0;\n    width: 20px;\n    height: 20px;\n    margin: -15px 0 0;\n    background: #f7f7f7;\n    box-shadow: 0 0 1px grey; }\n\n.styled-input-single label:after {\n    left: 3px;\n    width: 15px;\n    height: 15px;\n    margin: -12px 0 0;\n    opacity: 0;\n    background: #37b2b2;\n    transform: translate3d(-40px, 0, 0) scale(0.5);\n    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out; }\n\n.styled-input-single input[type=\"radio\"],\n  .styled-input-single input[type=\"checkbox\"] {\n    position: absolute;\n    top: 0;\n    left: -9999px;\n    visibility: hidden; }\n\n.styled-input-single input[type=\"radio\"]:checked + label:after,\n    .styled-input-single input[type=\"checkbox\"]:checked + label:after {\n      transform: translate3d(0, 0, 0);\n      opacity: 1; }\n\n.styled-input--square label:before, .styled-input--square label:after {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL29wY2lvbi1tdWx0aXBsZS9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxhY3RpdmlkYWRcXHByZWd1bnRhc1xcb3BjaW9uLW11bHRpcGxlXFxvcGNpb24tbXVsdGlwbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBcUIsRUFDeEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2QsYUFBWSxFQUVmOztBQUNEO0VBQ0ksY0FBYTtFQUNiLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFBRSxzQkFBc0I7RUFDbkQsdUJBQXNCO0VBQUUsK0RBQStELEVBQzFGOztBQUdELG9CQUFvQjs7QUFDcEI7RUFBWSxZQUFVO0VBQUUsYUFBWSxFQUFHOztBQUV2QztFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1IsZ0JBQWU7RUFDZixhQUFZO0VBQ1osT0FBTTtFQUNOLGFBQVksRUFDbkI7O0FBRUQ7RUFBTyxhQUFZO0VBQUUsa0JBQWlCLEVBQUc7O0FBRXpDO0VBQ0ksbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNkLGlCQUFnQixFQUN2Qjs7QUFFRDtFQUFRLHdCQUF1QixFQUFHOztBQUNsQywwQ0FBMEM7O0FBQzFDO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixnQkFBZSxFQUNsQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSwwQkFBeUIsRUFPMUI7O0FBUkQ7SUFNTSxlQUFjLEVBQ2pCOztBQVBIO01BSVUsZUFBYyxFQUNqQjs7QUFJUDtFQUNJLDBCQUF5QixFQU81Qjs7QUFSRDtJQU1RLGVBQWMsRUFDakI7O0FBUEw7TUFJWSxlQUFhLEVBQ2hCOztBQUlUO0VBQ0UsMEJBQXlCLEVBTzFCOztBQVJEO0lBTU0sZUFBYyxFQUNqQjs7QUFQSDtNQUlVLGVBQWMsRUFDakI7O0FBS1A7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLHlCQUF3QjtFQUN4Qiw2QkFBNEI7RUFDNUIsbUNBQWtDO0VBSWxDLG9CQUFtQixFQUN0Qjs7QUFFRCw4QkFBOEI7O0FBQzlCO0VBQVMsNEVBQTJFLEVBQUc7O0FBQ3ZGO0VBQVMsc0ZBQXFGLEVBQUc7O0FBQ2pHO0VBQVcsNEVBQTJFLEVBQUc7O0FBQ3pGO0VBQVUsOEhBQTZILEVBQUc7O0FBQzFJO0VBQVUsa0xBQWlMLEVBQUc7O0FBQzlMO0VBQVMsMkZBQTBGLEVBQUc7O0FBRXRHO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFVBQVM7RUFDVCxTQUFRO0VBQ1IsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsMEJBQTBCLEVBQzdCOztBQUVEO0VBS0ksc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsY0FBYTtFQUNiLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPLEVBRVY7O0FBRUQsbUJBQW1COztBQUNuQjtFQUNJO0lBQVMsWUFBVztJQUFFLGlCQUFnQixFQUFFO0VBQ3BDO0lBQVUsbUJBQWtCLEVBQUcsRUFBQTs7QUFHdkM7RUFBUSxjQUFhLEVBQUU7O0FBRXZCLGlCQUFpQjs7QUFDakI7RUFDSSxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxpQkFBZ0I7RUFFaEIsc0JBQXFCLEVBb0R0Qjs7QUExREg7SUFTTSxnQkFDRixFQUFDOztBQVZMO0lBaUJRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLG1CQUFrQixFQUNuQjs7QUFyQlA7SUF1QlEsUUFBTztJQUNQLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQix5QkFBd0IsRUFDekI7O0FBN0JQO0lBK0JRLFVBQVM7SUFDVCxZQUFXO0lBQ1gsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixXQUFVO0lBQ1Ysb0JBQW1CO0lBQ25CLCtDQUE4QztJQUM5QyxtRUFBa0UsRUFDbkU7O0FBdkNQOztJQTRDTSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLGNBQWE7SUFDYixtQkFBa0IsRUFVbkI7O0FBekRMOztNQXFEVSxnQ0FBK0I7TUFDL0IsV0FBVSxFQUNYOztBQUtQO0VBSU0saUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL29wY2lvbi1tdWx0aXBsZS9vcGNpb24tbXVsdGlwbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NhbGV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIsMik7XHJcbn1cclxuLmN1c3RvbS1jb250cm9se1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbi5jb2wtaW1hZ2Vue1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFJlc2l6ZSB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG5cclxuLyogR2xvYmFsIFN0eWxpbmcgKi9cclxuaHRtbCwgYm9keSB7bWFyZ2luOjBweDsgcGFkZGluZzogMHB4O31cclxuXHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0OTVlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuI2xvZ28ge2hlaWdodDogODBweDsgbWFyZ2luLWxlZnQ6IDIwcHg7fVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4ucmlnaHQge2Zsb2F0OiByaWdodCAhaW1wb3J0YW50O31cclxuLyogSW1hZ2Ugem9vbSBvbiBob3ZlciArIE92ZXJsYXkgY29sb3VyICovXHJcbi5wYXJlbnQge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnBhcmVudF9yZXNwdWVzdGEge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi5jaGlsZC5zZWxlY2Npb25hZG97XHJcbiAgYm9yZGVyOiA2cHggc29saWQgIzFlNTc5OTtcclxuICBhe1xyXG4gICAgICBpe1xyXG4gICAgICAgICAgY29sb3I6ICMxZTU3OTk7XHJcbiAgICAgIH1cclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbi5jaGlsZC5jb3JyZWN0b3tcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMyOGE3NDU7XHJcbiAgICBhe1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiMyOGE3NDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi5jaGlsZC5pbmNvcnJlY3Rve1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICM5NTllYTc7XHJcbiAgYXtcclxuICAgICAgaXtcclxuICAgICAgICAgIGNvbG9yOiAjOTU5ZWE3O1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmNoaWxkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLyogU2V2ZXJhbCBkaWZmZXJlbnQgaW1hZ2VzICovXHJcbi5iZy1vbmUge2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLnRpbWVvdXQuY29tL2ltYWdlcy8xMDE2MDI2MTEvaW1hZ2UuanBnKTt9XHJcbi5iZy10d28ge2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vczEuaXQuYXRjZG4ubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzA4LzItTG9uZG9uLmpwZyk7fVxyXG4uYmctdGhyZWUge2JhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLnRpbWVvdXQuY29tL2ltYWdlcy8xMDE0ODQxMDUvaW1hZ2UuanBnKTt9XHJcbi5iZy1mb3VyIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8wLzAwL0hvbGx5d29vZF9TaWduLmpwZy8xMjgwcHgtSG9sbHl3b29kX1NpZ24uanBnKTt9XHJcbi5iZy1maXZlIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL3d3dy50cmF2ZWxhbmRsZWlzdXJlLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3N0eWxlcy90bmxfcmVkZXNpZ25fYXJ0aWNsZV9sYW5kaW5nX3BhZ2UvcHVibGljLzE0NTM5MjA4OTIvRFVCQUktNTU0MDg4MDgxLUFCT1ZFMDExNi5qcGc/aXRvaz1kY29abkNyYyk7fVxyXG4uYmctc2l4IHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2Jsb2cud2hpdGVwYWdlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDQvc2FuLWZyYW5jLmpwZyk7fVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyp0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cclxufVxyXG5cclxuLnBhcmVudDpob3ZlciAuY2hpbGQsIC5wYXJlbnQ6Zm9jdXMgLmNoaWxkIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ucGFyZW50OmhvdmVyIC5jaGlsZDpiZWZvcmUsIC5wYXJlbnQ6Zm9jdXMgLmNoaWxkOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhcmVudDpob3ZlciBhLCAucGFyZW50OmZvY3VzIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jaGlsZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsNzMsOTQsMC43NSk7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5wYXJlbnQge3dpZHRoOiAxMDAlOyBtYXJnaW46IDIwcHggMHB4fVxyXG4gICAgICAgIC53cmFwcGVyIHtwYWRkaW5nOiAyMHB4IDIwcHg7fVxyXG59XHJcblxyXG4uaGVsbG8ge2Rpc3BsYXk6IG5vbmV9XHJcblxyXG4vKmVzdGlsbyBzcXVhcmUqL1xyXG4uc3R5bGVkLWlucHV0LXNpbmdsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAzNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICAgIC5jdXJzb3J7XHJcbiAgICAgIGN1cnNvcjpwb2ludGVyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxhYmVsIHtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZSxcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTIlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtMTVweCAwIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IGdyZXk7XHJcbiAgICAgIH1cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW46IC0xMnB4IDAgMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzN2IyYjI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDBweCwgMCwgMCkgc2NhbGUoMC41KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgXHJcbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAvLyAmOmJlZm9yZSB7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zdHlsZWQtaW5wdXQtLXNxdWFyZSB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlLFxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.ts ***!
  \******************************************************************************************/
/*! exports provided: OpcionMultipleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionMultipleComponent", function() { return OpcionMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/multiple.service */ "./src/app/administracion/carga-actividades/services/multiple.service.ts");
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





var OpcionMultipleComponent = /** @class */ (function () {
    function OpcionMultipleComponent(_usuarioService, _opcionMultipleService, _sanitizer) {
        this._usuarioService = _usuarioService;
        this._opcionMultipleService = _opcionMultipleService;
        this._sanitizer = _sanitizer;
        this.reactivos = new Array();
        this.opcionesSeleccionadas = 0;
        this.respuestas = [];
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlAssets;
    }
    OpcionMultipleComponent.prototype.ngOnInit = function () {
        this.pregunta = this.Data.pregunta;
        this.edicion = this.Data.edicion;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.intentosRestantes = this.Data.intentosRestantes;
        this.jwt = this._usuarioService.getJWT();
        this.getDatos();
    };
    OpcionMultipleComponent.prototype.ngOnChanges = function () {
        // this.jwt = this._usuarioService.getJWT();
        // this.getDatos();
    };
    OpcionMultipleComponent.prototype.getDatos = function () {
        var _this = this;
        var datosReactivos = this.pregunta.arreglo_reactivos;
        this.reactivos = [];
        this.respuestas = [];
        if (datosReactivos.reactivos) {
            this.reactivos = datosReactivos.reactivos;
            if (datosReactivos.seleccionMultiple == 1) {
                this.opcionesSeleccionadas = 1;
            }
            else {
                this.opcionesSeleccionadas = 0;
            }
            if (this.reactivos.length > 0) {
                for (var i = 0; i < this.reactivos.length; i++) {
                    this.reactivos[i].html_reactivo = this.htmlProperty(this.reactivos[i].reactivo);
                    if (this.reactivos[i].respuesta) {
                        if (this.reactivos[i].respuesta.ponderacion == '100') {
                            this.reactivos[i].correcta = true;
                        }
                        else {
                            this.reactivos[i].correcta = false;
                        }
                        this.respuestas.push(this.reactivos[i]);
                        this.reactivos[i].checked = true;
                    }
                }
            }
            if (this.intentosRestantes == 0) {
                var correcta = this.respuestas.find(function (r) { return r.correcta == false; });
                if (correcta && correcta.correcta == false) {
                    this.resCorrecta = this.reactivos.filter(function (r) { return r.ponderacion == '100'; });
                }
            }
        }
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 1);
        // this._opcionMultipleService.consultaRespuestas(this.pregunta.pregunta_id,this.idMateriaFechaActividad, this.intentosRestantes,this.pregunta.pregunta_shuffle).subscribe(
        //   response =>{    
        //     this.reactivos = [];
        //     this.respuestas = [];
        //       if(response && response['status']){
        //         this.reactivos = response['reactivos'];            
        //         if(response['seleccionMultiple'] == 1){
        //           this.opcionesSeleccionadas =1;
        //         }else{
        //           this.opcionesSeleccionadas =0;
        //         }
        //         this.urlImagen = response['url_imagen'];
        //         this.resCorrecta = [];            
        //         for (let i = 0; i < this.reactivos.length; i++) {
        //           this.reactivos[i].html_reactivo = this.htmlProperty(this.reactivos[i].reactivo);
        //           if(this.reactivos[i].respuesta){
        //             if(this.reactivos[i].respuesta.ponderacion == '100'){
        //               this.reactivos[i].correcta = true;
        //             }else{
        //               this.reactivos[i].correcta = false;
        //             }    
        //             this.respuestas.push(this.reactivos[i]);
        //             this.reactivos[i].checked = true;
        //           }
        //         }
        //         if (this.intentosRestantes == 0) {
        //           let correcta = this.respuestas.find(r => r.correcta == false)
        //           if (correcta && correcta.correcta == false) {              
        //             this.resCorrecta = this.reactivos.filter(r => r.ponderacion == '100')
        //           }  
        //         }
        //       }
        //       this.actividadCargada.emit(this.pregunta.datos_pregunta_id); 
        //   },error =>{
        //     console.log(<any>error)
        //   });    
    };
    OpcionMultipleComponent.prototype.seleccionaElemento = function (index) {
        var _this = this;
        if (this.edicion) {
            if (this.opcionesSeleccionadas == 1) {
                this.reactivos.forEach(function (reactivo) {
                    reactivo.checked = false;
                });
                this._opcionMultipleService.eliminaMultiple(this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
                    if (response && response['status']) {
                        _this._opcionMultipleService.guardaRespuesta(_this.reactivos[index].reactivo_id, _this.pregunta.pregunta_id, _this.idMateriaFechaActividad, _this.jwt).subscribe(function (response) {
                            if (response && response['status']) {
                                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                                _this.reactivos[index].checked = true;
                            }
                            else {
                                alertify.error('Error al guardar').dismissOthers();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error);
                });
                this.reactivos[index].checked = true;
            }
            else {
                if (this.reactivos[index].checked) {
                    this._opcionMultipleService.eliminaRespuesta(this.reactivos[index].reactivo_id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
                        if (response && response['status']) {
                            alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                            _this.reactivos[index].checked = false;
                        }
                        else {
                            alertify.error('Error al guardar').dismissOthers();
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
                else {
                    this._opcionMultipleService.guardaRespuesta(this.reactivos[index].reactivo_id, this.pregunta.pregunta_id, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
                        if (response && response['status']) {
                            alertify.success('<i class="fa fa-save"></i>').dismissOthers();
                            _this.reactivos[index].checked = true;
                        }
                        else {
                            alertify.error('Error al guardar').dismissOthers();
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
    };
    OpcionMultipleComponent.prototype.htmlProperty = function (html) {
        return this._sanitizer.bypassSecurityTrustHtml(html);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OpcionMultipleComponent.prototype, "actividadCargada", void 0);
    OpcionMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'respuesta-opcion-multiple',
            template: __webpack_require__(/*! ./opcion-multiple.component.html */ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.html"),
            styles: [__webpack_require__(/*! ./opcion-multiple.component.scss */ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            src_app_administracion_carga_actividades_services_multiple_service__WEBPACK_IMPORTED_MODULE_3__["MultipleService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], OpcionMultipleComponent);
    return OpcionMultipleComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.module.ts ***!
  \***************************************************************************************/
/*! exports provided: OpcionMultipleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionMultipleModule", function() { return OpcionMultipleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _opcion_multiple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opcion-multiple.component */ "./src/app/materia/actividad/preguntas/opcion-multiple/opcion-multiple.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpcionMultipleModule = /** @class */ (function () {
    function OpcionMultipleModule() {
    }
    OpcionMultipleModule_1 = OpcionMultipleModule;
    var OpcionMultipleModule_1;
    OpcionMultipleModule.rootComponent = _opcion_multiple_component__WEBPACK_IMPORTED_MODULE_2__["OpcionMultipleComponent"];
    OpcionMultipleModule = OpcionMultipleModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [OpcionMultipleModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            entryComponents: [
                OpcionMultipleModule_1.rootComponent
            ]
        })
    ], OpcionMultipleModule);
    return OpcionMultipleModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-opcion-multiple-opcion-multiple-module.js.map