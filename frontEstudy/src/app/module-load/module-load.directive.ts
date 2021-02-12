import { Directive, OnInit, OnDestroy, Input, NgModuleRef, Injector, Inject, NgModuleFactory, NgModuleFactoryLoader, Type , ViewContainerRef, Output, EventEmitter} from '@angular/core';
import {LAZY_DYNAMIC_MODULES, LAZY_DYNAMIC_MODULES_MAP} from './modules-map';
type ModuleWithRoot = Type<any> & {rootComponent: Type<any>};

@Directive({
  selector: '[appModuleLoad]'
})
export class ModuleLoadDirective implements OnInit, OnDestroy {
  @Input('appModuleLoad') moduleName: keyof LAZY_DYNAMIC_MODULES;
  @Input() data: any;
  @Input() successCharge: any;

  @Output() actividadCargada = new EventEmitter<any>();
  @Output() cargandoArchivo = new EventEmitter<any>();

  private ngModuleRef: NgModuleRef<any>;
  private componentRef: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private ngModuleFactoryLoader: NgModuleFactoryLoader,
    @Inject(LAZY_DYNAMIC_MODULES_MAP) private modulesMap
  ) {}

  ngOnInit() {              
    this.ngModuleFactoryLoader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.ngModuleRef = moduleFactory.create(this.injector);
        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;                    
        const factory = this.ngModuleRef.componentFactoryResolver.resolveComponentFactory(
          rootComponent
        );        
        
        this.componentRef = this.viewContainerRef.createComponent(factory);        
        this.componentRef.instance.Data = this.data; 
        this.componentRef.instance.actividadCargada.subscribe(value => this.actividadCargada.emit(value));
        if(this.componentRef.instance.cargandoArchivo){
          this.componentRef.instance.cargandoArchivo.subscribe(value => this.cargandoArchivo.emit(value));
        }
        this.componentRef.instance.successCharge = this.successCharge;

      });

  }

  ngOnDestroy() {
    this.ngModuleRef && this.ngModuleRef.destroy();
  }
}