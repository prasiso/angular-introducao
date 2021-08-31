import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { ProjectsService } from '../services/projects.service';
import { takeWhile } from 'rxjs/operators'
@Component({
  selector: 'app-meu-app',
  templateUrl: './meu-app.component.html',
  styleUrls: ['./meu-app.component.css'],
  providers: [
    AlunosService
  ],
})
export class MeuAppComponent implements OnInit, OnDestroy {
  nome = "Akira"
  alunos = [{ nome: '' }];
  isVisible = true;
  isAlive = true;
  searchText = '';
  //....
  projects: any = [];
  mySubscription: any = [];
  //...
  myValue = "";
  aluno = {
    dados: {
      nome: "Nao funciona Elvis",

    }
  }
  enderecoImagem = '../favicon.ico'

  myList = [1, 2, 3, 4, 5,]
  constructor(
    private alunosService: AlunosService,
    private projectsService: ProjectsService,
  ) {

    this.alunos = this.alunosService.getAlunos();

  }

  ngOnInit(): void {
    this.mySubscription = this.projectsService.projects.pipe(takeWhile(() => this.isAlive)).subscribe(
      projects => (this.projects = projects)
    )
    this.funcaoClique()
  }
  ngOnDestroy(): void {
    this.isAlive = false
  }
  funcaoClique() {
    alert('Oi')
  }
  getProjects() {
    this.projectsService.getProjects(this.searchText)
  }
}