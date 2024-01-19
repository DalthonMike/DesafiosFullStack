import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApenasNumerosDirective]'
})
export class ApenasNumerosDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const valorAtual = input.value;

    const valorApenasNumeros = valorAtual.replace(/[^0-9]/g, '');

    if (valorAtual !== valorApenasNumeros) {
      input.value = valorApenasNumeros;
    }
  }
}
