import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-pers',
  templateUrl: './accordion-pers.component.html',
  styleUrls: ['./accordion-pers.component.css']
})
export class AccordionPersComponent implements OnInit {
  @Input() tipoAcordion = 0;
  
  items = [
    {titulo:'DdD',conteudo: 'Dor de Dono, aqui valorizamos quem veste a camisa e vai pra cima!'}, 
    {titulo:'Escuta Ativa',conteudo: 'Aqui o processo de comunicação se inicia na compreenssão do que é dito pelo próximo'},
    {titulo:'Inovação',conteudo: 'Não se trata de recriar a roda, mas Aprimorar...'}, 
    {titulo:'Superação',conteudo: 'Super + Ação'}
  ];
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
