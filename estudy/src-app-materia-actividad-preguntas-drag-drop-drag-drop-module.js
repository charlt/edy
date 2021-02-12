(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-materia-actividad-preguntas-drag-drop-drag-drop-module"],{

/***/ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col\">\r\n<div [hidden]=\"edicion == 0 && !hayRespuesta\" *ngIf=\"edicion == 1\" class=\"row d-flex justify-content-center\">\r\n\r\n  <div class=\"col\" [hidden]=\"orientacion == 1\">\r\n    <div *ngIf=\"orientacion == 0 && reactivos\" cdkDropList class=\"list-h\"    \r\n    cdkDropListOrientation=\"horizontal\" \r\n    (cdkDropListDropped)=\"drop($event)\"\r\n    >\r\n      <div class=\"example-box\" *ngFor=\"let reactivo of reactivos\" cdkDrag>\r\n        <p> {{reactivo.reactivo_desc}}</p></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-6\" [hidden]=\"orientacion==0\">\r\n    <div *ngIf=\"orientacion == 1 && reactivos\" cdkDropList class=\"list-v\"    \r\n    cdkDropListOrientation=\"vertical\" \r\n    (cdkDropListDropped)=\"drop($event)\"\r\n    >\r\n      <div class=\"example-box \"   *ngFor=\"let reactivo of reactivos\" cdkDrag>\r\n        <p> {{reactivo.reactivo_desc}} </p></div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div [hidden]=\"edicion == 1\" *ngIf=\"edicion == 0 && orientacion == 0\" class=\"row\">\r\n        <div class=\"col \">\r\n          <div class=\"list-h\">\r\n            <div class=\"example-box-1\"  [class.alert-success]=\"reactivo.correcta == true\" [class.alert-danger]=\"reactivo.correcta == false\"  *ngFor=\"let reactivo of reactivos\" >\r\n              <p> {{reactivo.reactivo_desc}}               \r\n                </p></div>\r\n          </div>\r\n        </div>\r\n</div>\r\n\r\n<div [hidden]=\"edicion == 1\" *ngIf=\"edicion == 0 && orientacion == 1\" class=\"row\">\r\n    <div class=\"col  d-flex justify-content-center\">\r\n      <div class=\"list-v\">\r\n        \r\n        <div class=\"example-box-1\" [class.alert-success]=\"reactivo.correcta == true\" [class.alert-danger]=\"reactivo.correcta == false\" *ngFor=\"let reactivo of reactivos\" >\r\n          <p> {{reactivo.reactivo_desc}}  </p></div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-3\">\r\n  <div class=\"col\" *ngIf=\"!edicion && !intentosRestantes\">\r\n    <button class=\"btn btn-primary pull-right\" (click)=\"open(content)\">Ver respuestas</button>\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!reactivos\">\r\n  <div class=\"col-12\">\r\n      <div class=\"alert alert-danger\">No se han cargado reactivos en la pregunta</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-xl\">\r\n        <ng-template #content>\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Respuestas</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"row justify-content-md-center\">\r\n                <div [hidden]=\"edicion == 1\" *ngIf=\"edicion == 0 && orientacion == 0\" class=\"row\">\r\n                  <div class=\"col \">\r\n                    <div class=\"list-h\">\r\n                      <div class=\"example-box-1\" *ngFor=\"let reacCorrecto of reactivosCorrectos\" >\r\n                        <p> {{reacCorrecto.reactivo_desc}}               \r\n                          </p></div>\r\n                    </div>\r\n                  </div>\r\n          </div>\r\n          \r\n          <div [hidden]=\"edicion == 1\" *ngIf=\"edicion == 0 && orientacion == 1\" class=\"row\">\r\n              <div class=\"col  d-flex justify-content-center\">\r\n                <div class=\"list-v\">\r\n                  \r\n                  <div class=\"example-box-1\" *ngFor=\"let reacCorrecto of reactivosCorrectos\" >\r\n                    <p> {{reacCorrecto.reactivo_desc}}  </p></div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Cerrar</button>\r\n            </div>\r\n          </ng-template>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.list {\r\n    // width: 1000px;\r\n    max-width: 100%;\r\n    // border: solid 1px #ccc;\r\n    min-height: 50px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    // background: white;\r\n    border-radius: 6px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .list_2 {\r\n    border: solid 1px #ccc;\r\n    min-height: 50px;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    display: block;\r\n  }\r\n\r\n  .box_drag {\r\n    // border: dashed 2px rgb(226, 226, 226);\r\n    min-height: 50px;\r\n    border-radius: 6px;\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    display: flex;\r\n\t\tvertical-align:middle;\r\n\t\tline-height:normal;    \r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: move;\r\n    background: rgb(23, 175, 175);\r\n    font-size: 16px;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .box_drop {\r\n    width: 100%;\r\n    min-height: 50px;\r\n    text-align: center;\r\n\t\tvertical-align:middle;\r\n\t\tline-height:normal;\r\n    border: dashed 2px rgb(226, 226, 226);\r\n    border-radius: 6px;\r\n    color: rgb(255, 255, 255);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: move;\r\n    background: rgb(23, 175, 175);\r\n    font-size: 16px;\r\n    box-sizing: border-box;\r\n    z-index: 2;\r\n  }\r\n\r\n  .box_background {\r\n    width: 100%;\r\n    min-height: 50px;\r\n    border: dashed 2px rgb(226, 226, 226);\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .cdk-drag-preview {\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .cdk-drag-placeholder {\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .cdk-drag-animating {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n  .box:last-child {\r\n    border: none;\r\n  }\r\n  \r\n  .list.cdk-drop-list-dragging .box_drag:not(.cdk-drag-placeholder) \r\n  {\r\n    transition: transform 250ms cubic-bezier(0, 0, 1, 1);\r\n  }\r\n\r\n  .list_2.cdk-drop-list-dragging .box_drop:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 1, 1);\r\n  }\r\n\r\n  .list_2.cdk-drop-list-dragging .box_background:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 1, 1);\r\n  }*/\n.list-h {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden; }\n.list-v {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden; }\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0; }\n.example-box-1 {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0; }\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.cdk-drag-placeholder {\n  opacity: 0; }\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n.example-box:last-child {\n  border: none; }\n.example-h.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYS9hY3RpdmlkYWQvcHJlZ3VudGFzL2RyYWctZHJvcC9DOlxceGFtcHAxXFxodGRvY3NcXGVzdHVkeV9uZXdcXGZyb250RXN0dWR5L3NyY1xcYXBwXFxtYXRlcmlhXFxhY3RpdmlkYWRcXHByZWd1bnRhc1xcZHJhZy1kcm9wXFxkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1HSztBQUVIO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxhQUFZO0VBQ2QsZ0JBQWU7RUFDZix1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNmO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUU3QiwyQkFBMEI7RUFDMUIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osZ0JBQWU7RUFDZixhQUFZO0VBQ1osY0FBYSxFQUNkO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUU3QiwyQkFBMEI7RUFDMUIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLGFBQVk7RUFDWixjQUFhLEVBQ2Q7QUFFRDtFQUNFLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsc0hBRThDLEVBQy9DO0FBRUQ7RUFDRSxXQUFVLEVBQ1g7QUFFRDtFQUNFLHVEQUFzRCxFQUN2RDtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSx1REFBc0QsRUFDdkQiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhL2FjdGl2aWRhZC9wcmVndW50YXMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi5saXN0IHtcclxuICAgIC8vIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAubGlzdF8yIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYm94X2RyYWcge1xyXG4gICAgLy8gYm9yZGVyOiBkYXNoZWQgMnB4IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuXHRcdGxpbmUtaGVpZ2h0Om5vcm1hbDsgICAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzLCAxNzUsIDE3NSk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLmJveF9kcm9wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuXHRcdGxpbmUtaGVpZ2h0Om5vcm1hbDtcclxuICAgIGJvcmRlcjogZGFzaGVkIDJweCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMywgMTc1LCAxNzUpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAuYm94X2JhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiBkYXNoZWQgMnB4IHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJveF9kcmFnOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIFxyXG4gIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAubGlzdF8yLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJveF9kcm9wOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMSk7XHJcbiAgfVxyXG5cclxuICAubGlzdF8yLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmJveF9iYWNrZ3JvdW5kOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMSk7XHJcbiAgfSovXHJcblxyXG4gIC5saXN0LWgge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5saXN0LXZ7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuXHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtYm94LTEge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG5cclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWguY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.ts ***!
  \******************************************************************************/
/*! exports provided: DragDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_administracion_carga_actividades_services_arrastable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/administracion/carga-actividades/services/arrastable.service */ "./src/app/administracion/carga-actividades/services/arrastable.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DragDropComponent = /** @class */ (function () {
    function DragDropComponent(_usuarioService, _dragDropService, formBuilder, modalService) {
        this._usuarioService = _usuarioService;
        this._dragDropService = _dragDropService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.contestado = 0;
        this.hayRespuesta = false;
        this.sucessEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.actividadCargada = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DragDropComponent.prototype.ngOnInit = function () {
        this.setData();
        this.jwt = this._usuarioService.getJWT();
        this.idPregunta = this.pregunta.pregunta_id;
        if (this.pregunta.contenido_pregunta) {
            this.orientacion = this.pregunta.contenido_pregunta.orientacion;
        }
        this.getDatos();
    };
    DragDropComponent.prototype.ngOnChanges = function () {
        this.setData();
        this.jwt = this._usuarioService.getJWT();
        this.idPregunta = this.pregunta.pregunta_id;
        if (this.pregunta.contenido_pregunta) {
            this.orientacion = this.pregunta.contenido_pregunta.orientacion;
        }
        this.getDatos();
    };
    DragDropComponent.prototype.setData = function () {
        this.pregunta = this.Data.pregunta;
        this.edicion = this.Data.edicion;
        this.idMateriaFechaActividad = this.Data.idMateriaFechaActividad;
        this.intentosRestantes = this.Data.intentosRestantes;
    };
    DragDropComponent.prototype.getDatos = function () {
        var _this = this;
        var datosReactivos = this.pregunta.arreglo_reactivos;
        if (datosReactivos.respuestas) {
            this.reactivos = datosReactivos.respuestas;
        }
        setTimeout(function () {
            _this.actividadCargada.emit(_this.pregunta.datos_pregunta_id);
        }, 1);
        // this._dragDropService.consultaDragDrop(this.idPregunta, this.jwt,this.idMateriaFechaActividad).subscribe(
        //   response =>{
        //     if(response && response['status']){
        //         this.reactivos = response['respuestas'];
        //     }else{
        //       // console.log(response['msg'])
        //     }
        //     this.actividadCargada.emit(this.pregunta.datos_pregunta_id);
        //   },error =>{
        //     console.log(<any>error)
        //   });   
    };
    DragDropComponent.prototype.drop = function (event) {
        var id_respuesta = this.reactivos[event.previousIndex].respuesta_id;
        var nuevoOrden = event.currentIndex + 1;
        this.reactivos[event.previousIndex].seleccionado = true;
        this.reactivos[event.currentIndex].seleccionado = true;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.reactivos, event.previousIndex, event.currentIndex);
        this._dragDropService.modificaOrden(id_respuesta, nuevoOrden, this.idPregunta, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
            }
            else {
                alertify.error('Error al guardar').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    DragDropComponent.prototype.enviarRespuesta = function () {
        // this.reactivos.forEach(   function(element, index) {
        //   console.log(element.reactivo_id);
        //   });
        var _this = this;
        this._dragDropService.modificaRespuestas(this.reactivos, this.idPregunta, this.idMateriaFechaActividad, this.jwt).subscribe(function (response) {
            if (response && response['status']) {
                _this.reactivos.forEach(function (reactivo) {
                    reactivo.seleccionado = false;
                });
                _this.contestado = 1;
                _this.edicion = 1;
                alertify.success('<i class="fa fa-save"></i>').dismissOthers();
            }
            else {
                alertify.error('Error al guardar').dismissOthers();
            }
        }, function (error) {
            console.log(error);
        });
    };
    DragDropComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg', windowClass: 'modal-xl' });
        this._dragDropService.consultaRespuestas(this.idPregunta, this.jwt, this.idMateriaFechaActividad).subscribe(function (response) {
            if (response && response['status']) {
                _this.reactivosCorrectos = response['reactivos'];
                _this.reactivosCorrectos.sort(function (a, b) {
                    return parseFloat(a.orden) - parseFloat(b.orden);
                });
            }
            else {
                console.log(response['msg']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    DragDropComponent.prototype.close = function () {
        this.modalService.dismissAll();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DragDropComponent.prototype, "sucessEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DragDropComponent.prototype, "actividadCargada", void 0);
    DragDropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'drag-drop',
            template: __webpack_require__(/*! ./drag-drop.component.html */ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__(/*! ./drag-drop.component.scss */ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_administracion_carga_actividades_services_arrastable_service__WEBPACK_IMPORTED_MODULE_4__["ArrastableService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/materia/actividad/preguntas/drag-drop/drag-drop.module.ts ***!
  \***************************************************************************/
/*! exports provided: DragDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _drag_drop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop.component */ "./src/app/materia/actividad/preguntas/drag-drop/drag-drop.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule_1 = DragDropModule;
    var DragDropModule_1;
    DragDropModule.rootComponent = _drag_drop_component__WEBPACK_IMPORTED_MODULE_2__["DragDropComponent"];
    DragDropModule = DragDropModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [DragDropModule_1.rootComponent],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]
            ],
            entryComponents: [
                DragDropModule_1.rootComponent
            ]
        })
    ], DragDropModule);
    return DragDropModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-materia-actividad-preguntas-drag-drop-drag-drop-module.js.map