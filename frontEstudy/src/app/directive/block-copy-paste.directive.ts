import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ExamenService } from '../learning/examen/examen.service';

declare var alertify: any;

@Directive({
  selector: '[appBlockCopyPaste]'
})
export class BlockCopyPasteDirective {

  @Input('appBlockCopyPaste') options: any; 
  @Output() success: any = new EventEmitter();
  
  constructor(
    private _examenService: ExamenService
  ) { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {       
    if (this.options['apply']) {        
      alertify.error('La opción de pegar está deshabilitada').dismissOthers();
      this._examenService.guardarEvent("control_v", this.options['id_mfa']).subscribe(
        response => {
          if (response && response['status']) this.success.emit(1);
        }
      );
      e.preventDefault();
    }
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    if (this.options['apply']) {        
      alertify.error('La opción de copiar está deshabilitada').dismissOthers();
      this._examenService.guardarEvent("control_c", this.options['id_mfa']).subscribe(
        response => {
          if (response && response['status']) this.success.emit(1);
        }
      );
      e.preventDefault();
    }
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    if (this.options['apply']) {        
      alertify.error('La opción de cortar está deshabilitada').dismissOthers();
      e.preventDefault();
    }
  }

  @HostListener('contextmenu', ['$event']) onRightClick(e) {
    if (this.options['apply']) {        
      alertify.error('No es posible usar el click derecho').dismissOthers();
      this._examenService.guardarEvent("click_derecho", this.options['id_mfa']).subscribe(
        response => {
          if (response && response['status']) this.success.emit(1);
        }
      );
      e.preventDefault();
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyUp (e: KeyboardEvent) {
    if (this.options['apply']) {        
      if (e.keyCode == 44 || e.keyCode == 123) {
        alertify.error('La captura de pantalla está deshabilitada').dismissOthers();
        this._examenService.guardarEvent("imp_pt", this.options['id_mfa']).subscribe(
          response => {
            if (response && response['status']) this.success.emit(1);
          }
        );
        e.preventDefault();
      }
    }
  }
  
}
