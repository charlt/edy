import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expediente-aspirante',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  title: string;
  jwt: string;
  @Input() idAspirante: number;
  @Input() idRol: number;
  
  constructor(
    private _usuarioService: UsuarioService,
    private router : Router,
    private route: ActivatedRoute
  ) { 
    
    if (this.route.snapshot.paramMap.get('id')) {
      this.idAspirante = parseInt(this.route.snapshot.paramMap.get('id'));
    }    
    this.title = "Adjuntar documentos"
    this._usuarioService.pushBreadcum(this.title,"",2);
  }

  ngOnInit() {     
    if (!this.idRol) this.idRol = 4; 
  }

}
