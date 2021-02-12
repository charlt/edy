import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pagos';
  constructor(private router: Router) {
    let url = document.location.href;
    console.log(url);
    
    let id = url.split('?id=');
    if (id[1]) {
      let autorizacion = id[1].split('#')[0];
      let redirect = `/completado-op/${autorizacion}`;
      this.router.navigate([redirect]);
    }
  }
}
