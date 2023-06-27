import { Component } from '@angular/core';
import { Pensamento } from '../pensamentos';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) =>  {
      this.pensamento = pensamento
    })
  }

  constructor(private service: PensamentoService,
              private router: Router,
              private route: ActivatedRoute) {  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento() {
    this.router.navigate(['/listarPensamento'])
  }
}
