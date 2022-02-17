import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-pers',
  templateUrl: './carrousel-pers.component.html',
  styleUrls: ['./carrousel-pers.component.css']
})
export class CarrouselPersComponent implements OnInit {
  // Vetor de imagens
  images = [
    "https://th.bing.com/th/id/R.92974889332c53e84630f877479b71c9?rik=5CfzrZt2rqs51Q&riu=http%3a%2f%2fwww.animais.info%2fImagens%2ffundos-de-coelhos.jpg&ehk=xd7RlbFbzQZvKT6dtfl9vsDb9hX84s3XTkdxDog2llE%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.a179eebe00e8a9d53497404ac55910e0?rik=twr2NyAB6RV5oQ&riu=http%3a%2f%2fs1.1zoom.me%2fbig3%2f550%2f339224-alexfas01.jpg&ehk=7Uhcc2OfflGP7ejFUtZB0vf9kCteOdhisaVH3Ws6Cws%3d&risl=&pid=ImgRaw&r=0"
  ];

  indiceCar = 0;
  // Imagem Atual
  imgSel = this.images[this.images.length - 1];
  // Container da div da imagem - Classe Selecionada
  classSel = "container-imagem";

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.trocarImage();
    },6000)
  }

  trocarImage(){
    this.trocarClasse();
    if(this.indiceCar == this.images.length){
      this.indiceCar = 0;
    }
    this.imgSel = this.images[this.indiceCar];
    this.indiceCar++;
    
  }

  trocarClasse(){
    this.classSel = "container-imagem active";
    setTimeout(()=>{this.classSel = "container-imagem"},1500)
  }

}
