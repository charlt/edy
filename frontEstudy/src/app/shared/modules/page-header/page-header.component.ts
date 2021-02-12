import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent  {
    @Input() heading: string;
    @Input() route: string;
    @Input() breadcum: [];


    @Input() icon: string;
    constructor(
        private _location: Location
    ) {
    }
    
    back(){
        this._location.back();
    }

}
