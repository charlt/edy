import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {universidad} from 'src/app/services/universidad';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  
  universidad = universidad;

  constructor(
    private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
