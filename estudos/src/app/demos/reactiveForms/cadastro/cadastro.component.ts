import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormControlName } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/@angular/forms';

import { Usuario } from 'estudos/src/app/demos/reactiveForms/cadastro/models/usuario';
import { NgBrazilValidators } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/ng-brazil';
import { utilsBr } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/js-brasil';
import { CustomValidators } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/ng2-validation';
import { ValidationMessages, GenericValidator, DisplayMessage } from 'estudos/src/app/demos/reactiveForms/cadastro/generic-form-validation';
import { fromEvent, Observable, merge } from 'arg/src/app/demos/reactiveForms/cadastro/node_modules/arg/src/app/demos/reactiveForms/cadastro/node_modules/rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;
  
  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  mudancasNaoSalvas: boolean;

  constructor(private fb: FormBuilder) {
    
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres', // essa chave 'minlength' é definida com base no Validator;
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
      this.mudancasNaoSalvas = true;
    });
  }

  adicionarUsuario() {

    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);

      this.mudancasNaoSalvas = false;
    }
    else {
      this.formResult = "Não submeteu!";
    }
  }

}
