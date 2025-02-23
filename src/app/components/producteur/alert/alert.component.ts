import {Component, OnInit} from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface AlertModel {
  title?: string;
  message: string;
}

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel, OnInit {
  title: string;
  message: string;
  constructor() {
    super();
  }

  ngOnInit() {

  }

  reload(){
    window.location.reload();
  }

}
