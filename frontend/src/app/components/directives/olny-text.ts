import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appApenasLetrasDirective]'
})
export class ApenasLetrasDirective {

    constructor(private el: ElementRef) {}

    @HostListener('input', ['$event']) onInput(event: Event) {
        const input = this.el.nativeElement as HTMLInputElement;
        const valorAtual = input.value;

        // Substitua [^a-zA-Z ] para permitir letras e espaços
        const valorSemNumeros = valorAtual.replace(/[^a-zA-Z ]/g, '');

        if (valorAtual !== valorSemNumeros) {
            input.value = valorSemNumeros;
        }
    }
}
