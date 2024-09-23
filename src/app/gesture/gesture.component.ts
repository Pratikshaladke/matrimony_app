import { Input } from '@angular/core';
import { Component } from '@angular/core';

import {addIcons} from "ionicons";
import { shieldCheckmarkOutline, ribbonOutline, starOutline, closeOutline, checkmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.scss']
})
export class GestureComponent {
  constructor() {
    addIcons({ shieldCheckmarkOutline, ribbonOutline, starOutline, closeOutline, checkmarkOutline,   });
  }
}
