import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-app',
  templateUrl: './meu-app.component.html',
  styleUrls: ['./meu-app.component.css']
})
export class MeuAppComponent implements OnInit {
  nome = "Akira"
  isVisible = true;
  myValue = "";
  aluno = {
    dados: {
      nome: "Nao funciona Elvis",

    }
  }
  myList = [1, 2, 3, 4, 5,]
  constructor() { }

  ngOnInit(): void {
  }

}
