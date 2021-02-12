(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~calendario-calendario-module~docente-video-conferencia-video-conferencia-module~src-app-admi~0372a96c"],{

/***/ "./src/app/components/calendario/calendario-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/calendario/calendario-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CalendarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioRoutingModule", function() { return CalendarioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendario.component */ "./src/app/components/calendario/calendario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _calendario_component__WEBPACK_IMPORTED_MODULE_2__["CalendarioComponent"] }
];
var CalendarioRoutingModule = /** @class */ (function () {
    function CalendarioRoutingModule() {
    }
    CalendarioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalendarioRoutingModule);
    return CalendarioRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/calendario/calendario.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/calendario/calendario.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"loading\">\r\n  <div class=\"col-12\">\r\n    <div class=\"container border rounded py-4 px-5 text-center\">\r\n      <h4><i class=\"fa fa-spin fa-spinner fa-lg\"></i> Cargando calendario</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"!loading\" [ngClass]=\"tipoCalendario == 1? 'd-flex justify-content-center': ''\">\r\n  <!-- <div class=\"col-12 text-center\">\r\n    <h4>Calendario {{year}} - {{year + 1}}</h4>\r\n  </div> -->\r\n  <div class=\"col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3\" *ngFor=\"let Month of arrayMonths\">\r\n    <div class=\"container border rounded\">\r\n      <div class=\"card-header text-center bg-white\">\r\n        <b class=\"title\">{{Month.month.text | uppercase}}</b>\r\n      </div>\r\n        <table class=\"table borderless m-0 p-0\">\r\n          <thead class=\"bg-white\">\r\n            <tr class=\"text-center title\">\r\n              <th>D</th>\r\n              <th>L</th>\r\n              <th>M</th>\r\n              <th>X</th>\r\n              <th>J</th>\r\n              <th>V</th>\r\n              <th>S</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let week of Month.weeks; let i = index\">\r\n              <td *ngFor=\"let day of week; let j = index\" [class]=\"day.class\"\r\n              [ngStyle]=\"day.style\"  (click)=\"tipoCalendario == 0? openModal(modalEvents, Month.month, day): \r\n                tipoCalendario == 1? setDate(Month.month, day): false\"\r\n              [ngClass]=\"(day.class == 'prev-month' || day.class == 'next-month')? 'bg-light': 'border-white'\">\r\n                <p class=\"m-0 p-0\">{{day.value}}</p>\r\n              </td>\r\n            </tr>            \r\n          </tbody>\r\n        </table>\r\n    </div>    \r\n  </div>\r\n</div>\r\n\r\n<ng-template #modalEvents let-modal>\r\n  <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\"><h5>Eventos</h5></h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n  <div class=\"modal-body mx-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"list-group\" *ngIf=\"eventsDate.length > 0\">\r\n          <li class=\"list-group-item text-center\">\r\n            <h5><b>Eventos del día {{monthSelected.day.value}} de {{monthSelected.text}} del año {{monthSelected.year}}</b></h5>\r\n          </li>\r\n          <li class=\"list-group-item list-group-item-action flex-column align-items-start\"\r\n            *ngFor=\"let event of eventsDate; let i = index;\" >\r\n            <div class=\"d-flex w-100 justify-content-between\">\r\n              <h5 class=\"mb-1\">{{event.evento_nombre}}\r\n              </h5>\r\n              <small>{{event.fecha_inicio | date: 'dd/MM/yyyy'}} - {{event.fecha_fin | date: 'dd/MM/yyyy'}}\r\n                <span class=\"badge px-2 py-1\" [ngStyle]=\"{'background-color': event.color, 'color': event.color}\">\r\n                  {{monthSelected.day.value > 9? monthSelected.day.value : '0' + monthSelected.day.value }}\r\n                </span>\r\n              </small>\r\n            </div>\r\n            <p class=\"mb-1\">{{event.evento_desc}}</p>\r\n          </li>\r\n        </div>\r\n        <div class=\"list-group\" *ngIf=\"eventsDate.length == 0\">\r\n          <li class=\"list-group-item text-center\">\r\n            <h5><b>No se encontraron eventos disponibles</b></h5>\r\n          </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/calendario/calendario.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/calendario/calendario.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-right: 2px;\n  padding-left: 1px;\n  padding-bottom: 2px; }\n\n.title {\n  color: #333333; }\n\nth {\n  text-align: center;\n  padding: 3px 0px 3px 0px;\n  margin: 0;\n  font-size: 12px; }\n\ntd {\n  text-align: center;\n  padding: 5px 0px 5px 0px;\n  margin: 0;\n  font-size: 10px; }\n\n.borderless td, .borderless th {\n  border: none; }\n\n.border-white {\n  border: 1px solid white;\n  border-radius: 5px; }\n\n.prev-month, .next-month {\n  color: #cbd1d2; }\n\n.prev-month:hover, .next-month:hover {\n  background-color: #cbd1d2;\n  color: white; }\n\n.today {\n  color: white; }\n\n.day:hover {\n  cursor: pointer; }\n\n.today:hover {\n  background-color: #198138;\n  color: white;\n  cursor: pointer; }\n\n.day-active {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxlbmRhcmlvL0M6XFx4YW1wcDFcXGh0ZG9jc1xcZXN0dWR5X25ld1xcZnJvbnRFc3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhbGVuZGFyaW9cXGNhbGVuZGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUNuQjs7QUFFRDtFQUNJLGVBQXNCLEVBQ3pCOztBQUVEO0VBQ0MsbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixVQUFTO0VBQ1QsZ0JBQWUsRUFDZjs7QUFFRDtFQUNDLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFFeEIsVUFBUztFQUNULGdCQUFlLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDQyx3QkFBdUI7RUFDdkIsbUJBQWtCLEVBQ2xCOztBQUVEO0VBQ0MsZUFBYyxFQUNkOztBQUVEO0VBQ0MsMEJBQXlCO0VBQ3pCLGFBQVksRUFFWjs7QUFFRDtFQUVDLGFBQVksRUFDWjs7QUFFRDtFQUdDLGdCQUFlLEVBQ2Y7O0FBRUQ7RUFDQywwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGdCQUFlLEVBQ2Y7O0FBRUQ7RUFFQyxhQUFZLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbGVuZGFyaW8vY2FsZW5kYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDJweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDFweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxufVxyXG5cclxudGgge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudGQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcblx0Ly8gcGFkZGluZzogM3B4LCAwcHgsIDNweCwgMHB4OyBcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm9yZGVyLXdoaXRlIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0gXHJcblxyXG4ucHJldi1tb250aCwgLm5leHQtbW9udGgge1xyXG5cdGNvbG9yOiAjY2JkMWQyO1xyXG59XHJcblxyXG4ucHJldi1tb250aDpob3ZlciwgLm5leHQtbW9udGg6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNjYmQxZDI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdC8vIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi50b2RheSB7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzI5OWU0YztcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kYXk6aG92ZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjojMDBhZGRmO1xyXG5cdC8vIGNvbG9yOiB3aGl0ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2RheTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE5ODEzODtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGF5LWFjdGl2ZSB7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjojMDBhZGRmO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/calendario/calendario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/calendario/calendario.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioComponent", function() { return CalendarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _calendario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendario.service */ "./src/app/components/calendario/calendario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarioComponent = /** @class */ (function () {
    function CalendarioComponent(_calendarioService, _modalService) {
        this._calendarioService = _calendarioService;
        this._modalService = _modalService;
        this.tipoCalendario = 0; //Calendario para vista de fechas
        this.Fechas = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // @Input() notifier: Subject<any>;
        this.valueMonths = [
            { value: 0, text: "Enero" },
            { value: 1, text: "Febrero" },
            { value: 2, text: "Marzo" },
            { value: 3, text: "Abril" },
            { value: 4, text: "Mayo" },
            { value: 5, text: "Junio" },
            { value: 6, text: "Julio" },
            { value: 7, text: "Agosto" },
            { value: 8, text: "Septiembre" },
            { value: 9, text: "Octubre" },
            { value: 10, text: "Noviembre" },
            { value: 11, text: "Diciembre" },
        ];
        this.months = [];
        this.loading = false;
        this.eventsDate = [];
        this.arraySelected = [];
    }
    CalendarioComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.loading = true;
        if (this.tipoCalendario == 0) {
            this.arrayMonths = this.fechaInicio = this.fechaFin = this.Events = undefined;
            this.months = [];
            this._calendarioService.consultaFechas(this.idCiclo).subscribe(function (response) {
                if (response && response['status']) {
                    _this.Ciclo = response['datos'][0];
                    var inicio = _this.Ciclo['fecha_inicio'].split('-');
                    var fin = _this.Ciclo['fecha_fin'].split('-');
                    _this.fechaInicio = new Date(inicio[0], parseInt(inicio[1]) - 1, inicio[2]);
                    _this.fechaFin = new Date(fin[0], parseInt(fin[1]) - 1, fin[2], 23, 59, 59);
                    // let anioInicio = this.fechaInicio.getFullYear();
                    // let anioFin = this.fechaFin.getFullYear();
                    if (_this.fechaFin > _this.fechaInicio) {
                        var mesesDiferencia;
                        mesesDiferencia = (_this.fechaFin.getFullYear() - _this.fechaInicio.getFullYear()) * 12;
                        mesesDiferencia -= _this.fechaInicio.getMonth();
                        mesesDiferencia += _this.fechaFin.getMonth();
                        mesesDiferencia <= 0 ? 0 : mesesDiferencia;
                        var mes_1 = _this.fechaInicio.getMonth();
                        // let mesFin = this.fechaFin.getMonth();
                        var anio = _this.fechaInicio.getFullYear();
                        // let anioFin = this.fechaFin.getFullYear();
                        var obj = void 0;
                        for (var i = 0; i <= mesesDiferencia; i++) {
                            var valueMonths = JSON.parse(JSON.stringify(_this.valueMonths));
                            obj = valueMonths.find(function (m) { return m.value == mes_1; });
                            obj['year'] = anio;
                            _this.months.push(obj);
                            mes_1++;
                            if (mes_1 > 11) {
                                mes_1 = 0;
                                anio++;
                            }
                        }
                        _this._calendarioService.consultaEventos(_this.idCiclo).subscribe(function (response) {
                            if (response && response['status']) {
                                _this.Events = response['eventos'];
                            }
                            _this.setMonths();
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.arraySelected = [];
            this.months = this.Meses;
            var year_1 = new Date().getFullYear();
            this.months.forEach(function (m) {
                m.year = year_1;
            });
            this.setMonths();
        }
    };
    CalendarioComponent.prototype.setMonths = function () {
        var _this = this;
        this.arrayMonths = Array.from({ length: this.months.length }, function (x, i) { return ({ month: _this.months[i] }); });
        var lastDayMonth, prevLastDayMonth, firstDayIndex, lastDayIndex, nextDays, days;
        this.months.forEach(function (month, _index) {
            lastDayMonth = new Date(month.year, month.value + 1, 0).getDate();
            prevLastDayMonth = new Date(month.year, month.value, 0).getDate();
            firstDayIndex = new Date(month.year, month.value, 1).getDay();
            lastDayIndex = new Date(month.year, month.value + 1, 0).getDay();
            days = [];
            if (firstDayIndex > 0) {
                for (var i = firstDayIndex; i > 0; i--) {
                    days.push({ class: 'prev-month', value: prevLastDayMonth - i + 1 });
                }
            }
            for (var i = 1; i <= lastDayMonth; i++) {
                if (_this.tipoCalendario == 0) {
                    if (i === new Date().getDate() &&
                        month.value === new Date().getMonth()
                        && month.year === new Date().getFullYear()) {
                        days.push({ class: 'today', value: i, style: { 'background-color': '#299e4c' }, events: [] });
                    }
                    else {
                        var obj = { class: 'day', value: i, events: [] };
                        if ((month.value == _this.fechaInicio.getMonth() && i == _this.fechaInicio.getDate() &&
                            month.year == _this.fechaInicio.getFullYear()) ||
                            (month.value == _this.fechaFin.getMonth() && i == _this.fechaFin.getDate() &&
                                month.year == _this.fechaFin.getFullYear())) {
                            obj['class'] = "day day-active";
                            obj['style'] = { 'background-color': '#00addf' };
                            obj['events'].push({
                                color: '#00addf',
                                evento_nombre: _this.Ciclo['ciclo_desc'],
                                fecha_inicio: _this.Ciclo['fecha_inicio'],
                                fecha_fin: _this.Ciclo['fecha_fin']
                            });
                        }
                        // PARA PINTAR LOS DIAS ENTRE 2 FECHAS.
                        // if(this.fechaFin.getFullYear() == this.fechaInicio.getFullYear()) {
                        // this.anioInicio = this.fechaInicio.getFullYear();
                        // this.anioFin = this.ani;
                        //   if (
                        //     (i >= this.fechaInicio.getDate() && month.value == this.fechaInicio.getMonth()) ||
                        //     (month.value > this.fechaInicio.getMonth() && month.value < this.fechaFin.getMonth()) ||
                        //     (month.value == this.fechaFin.getMonth() && i <= this.fechaFin.getDate())
                        //   ) {
                        //     obj['class'] = "day day-active"
                        //   }
                        // }else if (this.fechaFin.getFullYear() > this.fechaInicio.getFullYear()) {
                        //   if (
                        //     ( i >= this.fechaInicio.getDate() && month.value == this.fechaInicio.getMonth() 
                        //       && month.year == this.fechaInicio.getFullYear()) ||
                        //     (month.value > this.fechaInicio.getMonth() && month.year == this.fechaInicio.getFullYear()) ||
                        //     (month.year > this.fechaInicio.getFullYear() && month.value < this.fechaFin.getMonth()) ||
                        //     (month.year > this.fechaInicio.getFullYear() && month.value == this.fechaFin.getMonth() &&
                        //     i <= this.fechaFin.getDate())
                        //   )
                        //   {
                        //     obj['class'] = "day day-active"
                        //   }
                        // }
                        days.push(obj);
                    }
                }
                else {
                    var obj = { class: 'day', value: i };
                    days.push(obj);
                }
            }
            days.length <= 35 ? nextDays = 13 - (lastDayIndex) : nextDays = 6 - (lastDayIndex);
            if (nextDays > 0) {
                for (var j = 1; j <= nextDays; j++) {
                    days.push({ class: 'next-month', value: j });
                }
            }
            var length = days.length / 7;
            var module = days.length % 7;
            var arrayLength = Array.from({ length: length }, function (x) { return 7; });
            if (module != 0) {
                arrayLength.push(module);
            }
            var indexArray = 0;
            var index = 0;
            _this.arrayMonths[_index]['weeks'] = Array.from({ length: arrayLength.length }, function (x) { return []; });
            for (var i = 0; i < arrayLength.length; i++) {
                for (var j = 0; j < arrayLength[indexArray]; j++) {
                    _this.arrayMonths[_index]['weeks'][i].push(days[index]);
                    index++;
                }
                indexArray++;
            }
        });
        if (this.Events) {
            var _inicio_1, _fin_1, _fechaInicio_1, _fechaFin_1;
            this.Events.forEach(function (event) {
                _inicio_1 = event['fecha_inicio'].split('-');
                _fin_1 = event['fecha_fin'].split('-');
                _fechaInicio_1 = new Date(_inicio_1[0], parseInt(_inicio_1[1]) - 1, _inicio_1[2]);
                _fechaFin_1 = new Date(_fin_1[0], parseInt(_fin_1[1]) - 1, _fin_1[2], 23, 59, 59);
                var mesInicio = _this.arrayMonths.find(function (m) { return m.month.value == _fechaInicio_1.getMonth()
                    && m.month.year == _fechaInicio_1.getFullYear(); });
                var mesFin = _this.arrayMonths.find(function (m) { return m.month.value == _fechaFin_1.getMonth()
                    && m.month.year == _fechaFin_1.getFullYear(); });
                if (mesInicio && mesFin && mesInicio == mesFin) {
                    mesInicio.weeks.forEach(function (week) {
                        week.forEach(function (day) {
                            if (day.value >= _fechaInicio_1.getDate() && day.value <= _fechaFin_1.getDate()) {
                                _this.setBackground(day, _fechaInicio_1, _fechaFin_1, event);
                            }
                        });
                    });
                }
                else if (mesInicio && mesFin && mesInicio != mesFin) {
                    var mes_2 = _fechaInicio_1.getMonth();
                    var mesF_1 = _fechaFin_1.getMonth();
                    var anio_1 = _fechaInicio_1.getFullYear();
                    var anioF_1 = _fechaFin_1.getFullYear();
                    var _mesInicio_1 = _this.arrayMonths.map(function (m) { return m.month; }).findIndex(function (_m) { return _m.value == mes_2 && _m.year == anio_1; });
                    var _mesFin_1 = _this.arrayMonths.map(function (m) { return m.month; }).findIndex(function (_m) { return _m.value == mesF_1 && _m.year == anioF_1; });
                    var _loop_1 = function (i) {
                        //i es igual al indice del mes en arrayMonths
                        _this.arrayMonths[i].weeks.forEach(function (week) {
                            week.forEach(function (day) {
                                if ((day.value >= _fechaInicio_1.getDate() && i == _mesInicio_1) ||
                                    (i > _mesInicio_1 && i < _mesFin_1) ||
                                    (i == _mesFin_1 && day.value <= _fechaFin_1.getDate())) {
                                    _this.setBackground(day, _fechaInicio_1, _fechaFin_1, event);
                                }
                            });
                        });
                    };
                    for (var i = _mesInicio_1; i <= _mesFin_1; i++) {
                        _loop_1(i);
                    }
                }
            });
        }
        setTimeout(function () {
            _this.loading = false;
        }, 1);
    };
    CalendarioComponent.prototype.setBackground = function (day, _fechaInicio, _fechaFin, event) {
        if (day.class != 'prev-month' && day.class != 'next-month') {
            day['events'].push({
                color: event.color,
                evento_nombre: event.evento_nombre,
                evento_desc: event.evento_desc,
                fecha_inicio: event.fecha_inicio,
                fecha_fin: event.fecha_fin
            });
            if (day['style']) {
                if (day['style']['background-color']) {
                    day['style'] = { 'background': "linear-gradient(to bottom, " + day['style']['background-color'] + " 50%, " + event['color'] + " 50%)", 'color': 'white' };
                }
                else if (day['style']['background']) {
                    var init = day['style']['background'].indexOf('(');
                    var fin = day['style']['background'].indexOf(')');
                    var array = day['style']['background'].substring(init + 1, fin).split(',');
                    var colors = array.splice(1);
                    var string_colors_1 = "";
                    var arrayColors_1 = [];
                    colors.forEach(function (color) {
                        var _color = color.split(' ')[1];
                        if (arrayColors_1.indexOf(_color) == -1)
                            arrayColors_1.push(_color);
                    });
                    var percent_1 = (100 / (arrayColors_1.length + 1));
                    arrayColors_1.forEach(function (color, i) {
                        string_colors_1 += color + " " + percent_1 * (i) + "%, ";
                        string_colors_1 += color + " " + percent_1 * (i + 1) + "%, ";
                    });
                    string_colors_1 += event['color'] + " " + percent_1 * (arrayColors_1.length) + "%, ";
                    string_colors_1 += event['color'] + " 100%";
                    day['style'] = { 'background': "linear-gradient(to bottom, " + string_colors_1 + ")", 'color': 'white' };
                }
            }
            else {
                day['style'] = { 'background-color': event['color'], 'color': 'white' };
            }
        }
    };
    CalendarioComponent.prototype.openModal = function (modal, month, day) {
        this.monthSelected = month;
        this.monthSelected['day'] = day;
        this.eventsDate = this.monthSelected['day']['events'];
        this._modalService.open(modal, { size: "lg" });
    };
    CalendarioComponent.prototype.setDate = function (month, day) {
        var date = JSON.stringify({
            "year": month.year,
            "month": month.value,
            "day": day.value
        });
        var duplicated = this.arraySelected.find(function (s) { return s === date; });
        if (!duplicated && (day.class == 'day' || day.class == 'day day-selected')) {
            this.arraySelected.push(date);
            day['class'] = "day day-selected";
            day['style'] = { 'background-color': '#d1ecf1' };
            this.Fechas.emit(this.arraySelected);
        }
        else if (duplicated && (day.class == 'day' || day.class == 'day day-selected')) {
            var index = this.arraySelected.findIndex(function (s) { return s === date; });
            this.arraySelected.splice(index, 1);
            day['class'] = "day";
            delete day['style'];
            this.Fechas.emit(this.arraySelected);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarioComponent.prototype, "idCiclo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarioComponent.prototype, "tipoCalendario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarioComponent.prototype, "Meses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarioComponent.prototype, "Fechas", void 0);
    CalendarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendario-component',
            template: __webpack_require__(/*! ./calendario.component.html */ "./src/app/components/calendario/calendario.component.html"),
            styles: [__webpack_require__(/*! ./calendario.component.scss */ "./src/app/components/calendario/calendario.component.scss")]
        }),
        __metadata("design:paramtypes", [_calendario_service__WEBPACK_IMPORTED_MODULE_2__["CalendarioService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CalendarioComponent);
    return CalendarioComponent;
}());



/***/ }),

/***/ "./src/app/components/calendario/calendario.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/calendario/calendario.module.ts ***!
  \************************************************************/
/*! exports provided: CalendarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioModule", function() { return CalendarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendario_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendario-routing.module */ "./src/app/components/calendario/calendario-routing.module.ts");
/* harmony import */ var _calendario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario.component */ "./src/app/components/calendario/calendario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AngularCalendarYearViewModule } from 'angular-calendar-year-view';
// import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';
var CalendarioModule = /** @class */ (function () {
    function CalendarioModule() {
    }
    CalendarioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_calendario_component__WEBPACK_IMPORTED_MODULE_3__["CalendarioComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calendario_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarioRoutingModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_calendario_component__WEBPACK_IMPORTED_MODULE_3__["CalendarioComponent"]]
        })
    ], CalendarioModule);
    return CalendarioModule;
}());



/***/ }),

/***/ "./src/app/components/calendario/calendario.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/calendario/calendario.service.ts ***!
  \*************************************************************/
/*! exports provided: CalendarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioService", function() { return CalendarioService; });
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



var CalendarioService = /** @class */ (function () {
    function CalendarioService(_httpClient) {
        this._httpClient = _httpClient;
        this.url = src_app_services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
    }
    CalendarioService.prototype.consultaFechas = function (id_ciclo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('id_ciclo', id_ciclo);
        return this._httpClient.get(this.url + 'controlEscolar/calendario/consulta.php', { params: params });
    };
    CalendarioService.prototype.guardaEvento = function (form, evento_id) {
        var formData = new FormData();
        if (evento_id)
            formData.append('evento_id', evento_id);
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var _a = form_1[_i], key = _a[0], value = _a[1];
            if (key != 'checkbox_fin')
                formData.append(key, value);
        }
        return this._httpClient.post(this.url + 'controlEscolar/calendario/creaEvento.php', formData);
    };
    CalendarioService.prototype.consultaEventos = function (id_ciclo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('id_ciclo', id_ciclo);
        return this._httpClient.get(this.url + 'controlEscolar/calendario/consultaEventos.php', { params: params });
    };
    CalendarioService.prototype.eliminaEvento = function (evento_id) {
        var formData = new FormData();
        formData.append('evento_id', evento_id);
        return this._httpClient.post(this.url + 'controlEscolar/calendario/eliminaEvento.php', formData);
    };
    CalendarioService.prototype.consultaCicloAlumno = function () {
        return this._httpClient.get(this.url + 'learning/alumno/consultaCiclosActivos.php');
    };
    CalendarioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CalendarioService);
    return CalendarioService;
}());



/***/ })

}]);
//# sourceMappingURL=default~calendario-calendario-module~docente-video-conferencia-video-conferencia-module~src-app-admi~0372a96c.js.map