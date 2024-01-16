import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
  
  @Input() pensamento: Pensamento = {
    id: 0, // colocamos o valor 0 pois os dados reais do `id` virão do componente "pai".
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito:false
}
@Input() listaFavoritos: Pensamento[] = [];

constructor(private service: PensamentoService) { }

ngOnInit(): void {
}

larguraPensamento(): string {
  if(this.pensamento.conteudo.length >= 256) {
    return 'pensamento-g'
  }
  return 'pensamento-p'
}
mudarIconeFavorito(): string{
 if(this.pensamento.favorito == false){
  return 'inativo'
 }
 return 'ativo'
}
atualizarFavoritos(){
  this.service.mudarfavorito(this.pensamento).subscribe(() => {
    this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
  });
}

}


