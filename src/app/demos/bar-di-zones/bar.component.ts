import { Component, OnInit } from '@angular/core';
import { BarServices, BarServicesMock } from './bar.services';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    {provide: BarServices, useClass: BarServicesMock }
  ]
})
export class BarComponent implements OnInit {

  barBebida1: string;

  constructor(private barServices: BarServices){ }

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
  }

}
