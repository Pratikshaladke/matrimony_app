import { Component } from '@angular/core';
import {addIcons} from "ionicons";
import { shieldCheckmarkOutline, ribbonOutline, starOutline, closeOutline, checkmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  constructor() {
    addIcons({ shieldCheckmarkOutline, ribbonOutline, starOutline, closeOutline, checkmarkOutline,   });
  }
}
