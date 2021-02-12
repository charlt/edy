import { Component, OnInit } from '@angular/core';
import { slideToTop } from '../../router.animations';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AdminExpedienteService } from '../admin-expediente/admin-expediente.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [slideToTop()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public title: string;

    alumnosSnExpediente;
    alumnosSnOferta;
    asignaturasPorCerrar;
    cicloPorCerrar;
    pendientesTicket;

    constructor(
        private _usuarioService: UsuarioService,
        private _adminExpedienteService: AdminExpedienteService
    ) {

        this.title = "Página de inicio";
        this._usuarioService.pushBreadcum(this.title, '/admin/home', 1);
        this._usuarioService.removeBreadcum(2);

        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        this.consultaAlerts();
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    consultaAlerts() {
        this._adminExpedienteService.alerts().subscribe(
            response => {
                if (response && response['status']) {
                    this.alumnosSnExpediente = response['alumnos_expedientes_incompletos'];
                    this.alumnosSnOferta = response['alumnos_sin_oferta'];
                    this.asignaturasPorCerrar = response['asignaturas_cerca_de_cerrar'];
                    this.cicloPorCerrar = response['ciclo_cerca_de_cerrar'];
                    this.pendientesTicket = response['pendientes_ticket'];
                    this.cicloPorCerrar.forEach(_ciclo => {
                        _ciclo.fecha_fin = new Date((_ciclo.fecha_fin) * 1000);
                    });
                    this.asignaturasPorCerrar.forEach(_asignatura => {
                        _asignatura.fecha_fin = new Date((_asignatura.fecha_fin) * 1000);
                    });
                }
            }, error => {
                console.log(<any>error)
            });
    }
}
