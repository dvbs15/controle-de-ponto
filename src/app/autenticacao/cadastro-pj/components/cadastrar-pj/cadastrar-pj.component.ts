import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroPj } from '../../models/cadastro-pj.model';
import { CpfValidator } from '../../../../shared/validators/cpf.validator';
import { CnpjValidator } from '../../../../shared/validators/cnpj.validator';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3) ]],
      email: ['', [Validators.required, Validators.email ]],
      senha: ['', [Validators.required, Validators.minLength(6) ]],
      cpf: ['', [Validators.required, CpfValidator ]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5) ]],
      cnpj: ['', [Validators.required, CnpjValidator ]]
    });
  }

  cadastrarPj() {
    if (this.form.invalid) {
      return;
    }

    const cadastroPj: CadastroPj = this.form.value;
    alert(JSON.stringify(cadastroPj));
  }
}
