BASE DE DATOS
-Modificar las bases con el prefijo [nombre_institucion]_estudy, hacer un replace en el código de la base de datos
-crear un usuario especifico para esa base y asociarlos
-Instalar [nombre_institucion]_estudydg,[nombre_institucion]_estudyce,[nombre_institucion]_estudyle, [nombre_institucion]_estudysg, [nombre_institucion]_estudypl en ese orden

BACK
-cambiar los archivos de config/conf.php y conf/global.php con sus URLS correspondientes

FRONT
-instalar librerias de npm (npm install)
-reemplazar lineas del readme
-Agregar logo e imagenes de la universidad en carpeta frontEstudy\src\app\src\assets
-cambiar el frontEstudy\src\app\services\universidad.ts con la información de la universidad
-cambiar el frontEstudy\src\app\services\global.prod.ts  con la información del apiService
-ejecutar  ambiente para productivo ng build --prod
-subir cambios

DEVOPS
-clonar el código de git en el servidor (con el usuario correspondiente y permisos 755 a todas las carpetas)
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
-si git detecta los permisios ejecutar git config core.filemode false

# Cambios extras en node_modules #
## ALERTIFY
node_modules/alertifyjs/build/alertify.js línea 69 y 70
node_modules/alertifyjs/build/alertify.min.js 
cambiar ok: 'Si',cancel: 'No', 
## CKEDITOR
node_modules\ckeditor4-angular\fesm2015\ckeditor4-angular.js linea 112
frontEstudy\node_modules\ckeditor4-angular\fesm5\ckeditor4-angular.js linea 111
para activar todas las funcionalidades de CKeditor cambiar a
<!-- this.editorUrl = 'https://cdn.ckeditor.com/4.14.1.0/full-all/ckeditor.js'; -->
this.editorUrl = 'assets/ckeditor/ckeditor.js';
node_modules\@angular-devkit\build-optimizer\src\transforms\scrub-file.js linea  241
// Workaround for missing metadata.
    if(!decorateArray.elements[1]) {
        return false;
    }

# SB Admin rewritten in Angular7 and Bootstrap 4

Simple Dashboard Admin App built using Angular 7 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v7.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular7 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

## [Demo](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-7/master/dist/)

## [SB Admin Material version](https://github.com/start-javascript/sb-admin-material)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`sb-admin-bs4-angular7` provides the following features:

*   Developed using boostrap-v4.0.0
*   angular-v7.0.2
*   angular/cli-v7.0.4
*   [ng-bootstrap-v4.0.0](https://github.com/ng-bootstrap/)
*   [ngx-translate-v11.0.0](https://github.com/ngx-translate)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Official Angular i18n support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v8.9.0 and npm >=4**.

In order to start the project use:

```bash
$ git clone https://github.com/start-angular/SB-Admin-BS4-Angular-6.git
$ cd SB-Admin-BS4-Angular-6
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
