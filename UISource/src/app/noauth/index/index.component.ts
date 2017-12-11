import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/@core/utils/auth.service';

@Component({
    selector: 'ngx-ayni-noauth-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

    blocks: any[];

    constructor(protected router: Router, protected authService: AuthService) {
        this.blocks = [
            {
                image: '/assets/images/team.png', title: 'Why ayniPlay?',
                description: `En muchas organizaciones surge un problema común el cual es la falta de motivación. Esto puede provenir
            tanto del lado de trabajadores como de clientes, por ejemplo, este problema visto desde el lado del
            cliente puede generar tendencias a pérdida de lealtad pudiendo llegar al punto de perder dicho cliente
            y visto desde el lado del trabajador reduce la productividad o desinterés por el trabajo hecho. A
            este problema común surgen dos formas de captar el interés y motivar a las personas con el fin que
            cumplan los objetivos establecidos y aun mejor, que den lo mejor de si; estas soluciones son la Gamificación
            y los Sistemas de Recompensa.` },
            {
                image: '/assets/images/camera1.jpg', title: 'Pain Squad',
                description: ` En el Hospital Sick Kids de Toronto en Canadá se creó una app para niños con cáncer
            con la finalidad que los doctores conozcan el nivel de dolor que sienten al recibir los tratamientos
            médicos. A esta app se le denominó Pain Squad y fue un caso de éxito pudiendo así tener información
            en tiempo real de cuál es el mejor tratamiento médico para los pacientes.` },
            {
                image: '/assets/images/camera3.jpg', title: 'Nike+',
                description: `Nike lanzó una app móvil la cual registra la actividad física del usuario, a su vez
            la app te propone objetivos a cumplir y cuando estos son logrados el usuario recibe trofeos,
            recompensas los cuales pueden ser compartidos en redes sociales` },
        ];

    }
    onSignIn() {
        this.authService.login();
    }
}
