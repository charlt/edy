import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  id_aviso;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id_aviso = this.route.snapshot.paramMap.get('id');
  }

  finalizado(evt) {
    //this.router.navigate(['admin/avisos/']);
  }

}
