export var privilegiosDocente = [
    { i:"1", label : "_cargarContenido", icon: 'fa-book', type: 'button', function: 'vistaContenido',class: 'btn-outline-primary'},
    { i:"2", label : "_vistaEstudiante", icon: 'fa-desktop', type: 'button', function: 'vistaAlumno' ,class: 'btn-outline-primary'},
    { i:"3", label : "_horario", icon: 'fa-calendar',  type: 'router', url: '/docente/horario/', id: 'asignaturaGrupo' ,class: 'btn-outline-primary'},
    { i:"4", label : "_videoconferencias", icon: 'fa-users', type: 'router', url: '/docente/video-conferencia/', id: '', tooltip: 'Activa tu clase online aquí' ,class: 'btn-outline-primary'},
    { i:"5", label : "_avisos", icon: 'fa-telegram', type: 'router', url: '/docente/avisos/', id: 'asignaturaGrupo',class: 'btn-outline-primary' },
    { i:"6", label : "_objetivosPonderaciones", icon: 'fa-pie-chart', type: 'router', url: '/docente/objetivos-actividad/', id: 'asignaturaGrupo',class: 'btn-outline-primary' },
    { i:"7", label : "_calcularPromedio", icon: 'fa-calculator', type: 'button', function: 'calculoCalificacion' ,class: 'btn-outline-success'},
    { i:"8", label : "Acta de calificaciones", icon: 'fa-cubes', type: 'router', url: '/docente/reportes/', id: 'asignaturaGrupo',class: 'btn-outline-primary' },
    //{ label : "_seguimientoDigital", icon: 'fa-graduation-cap', type: 'button' },
    //{ label : "docenciaLinea", icon: 'fa-bar-chart', type: 'href', url: 'https://enlace.edu.mx/academictasks/interactivos/interfazdocente/'},
];