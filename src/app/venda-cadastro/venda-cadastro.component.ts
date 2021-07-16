import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { VendasService } from '../vendas/vendas.service';
import { Venda } from './shared/venda';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.sass']
})
export class VendaCadastroComponent implements OnInit {
  @Output() vendaSalva = new EventEmitter;

  formVenda: any;
  submitted = false
  
  clientes: Array<any> = []
  produtos: Array<any> = []

  item: any = {}
  itens: any = []
  total: number = 0.0
  totalItem: number =  0.0

  constructor(private vendasService: VendasService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listar();
    this.formVenda = this.createForm()
  }

  listar(){
    this.vendasService.listarProdutos().subscribe(resposta => this.produtos = resposta);
    this.vendasService.listarClientes().subscribe(resposta => this.clientes = resposta);
  }


  incluirItem(){
    this.itens.push(this.item);
    this.item = {}
    this.calcularTotal();
  }

  calcularTotal(){
    const totalItens = this.itens.map((i: any) => (i.produto.valor * i.quantidade)).reduce((total: any, valor: any) => total + valor,0)
    this.total = totalItens +  this.formVenda.value.frete
  }

  createForm(){
    return this.formBuilder.group({
      cliente: ['', Validators.compose([Validators.required])], 
      frete: [null, Validators.compose([Validators.required])]
    })
  }

  get registerFormControl() {
    console.log(this.formVenda.controls)
    return this.formVenda.controls;
  }

  formatReq(){
    const req: any = {}
    req.cliente = this.formVenda.value.cliente
    req.itens = this.itens
    req.frete = this.formVenda.value.frete
    return req
  }

  onSubmit(){
    this.submitted = true;
    // if(this.formVenda.invalid){
    //   return{
    // }

    this.vendasService.adicionarVenda(this.formatReq()).subscribe(resposta => {
      this.formVenda.reset(new Venda())
      this.itens = []
      // this.show = true;
      // this.vendaSalva.emit()
    })
  }
}
