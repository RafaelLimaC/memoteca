import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Teste',
      autoria: 'Eu',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Sim, eu mesmo',
      autoria: 'Ele',
      modelo: 'modelo3'
    }
  ]
}
