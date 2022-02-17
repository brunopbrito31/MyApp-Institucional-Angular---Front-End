import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar-top',
  templateUrl: './menu-bar-top.component.html',
  styleUrls: ['./menu-bar-top.component.css']
})
export class MenuBarTopComponent implements OnInit {

  // Titulo Personalizado da Aplicação
  @Input() titlePers = "";

  constructor() { }

  ngOnInit(): void {
  }

}
