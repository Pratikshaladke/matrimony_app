import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mouseDown: boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;
  slider: any;


  
  // After view is initialized, get the slider element
  ngAfterViewInit() {
    this.slider = document.querySelector('.profile-queue');
  }

  startDragging(event: MouseEvent): void {
    this.mouseDown = true;
    this.startX = event.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  }

  stopDragging(event: MouseEvent): void {
    this.mouseDown = false;
  }

  move(event: MouseEvent): void {
    event.preventDefault();
    if (!this.mouseDown) return;

    const x = event.pageX - this.slider.offsetLeft;
    const scroll = x - this.startX;
    this.slider.scrollLeft = this.scrollLeft - scroll;
  }

  
}
  
