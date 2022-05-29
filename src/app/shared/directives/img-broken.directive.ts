import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // Se añade delante imagen para que solo afecte a dicho elemento
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  // Angular escucha las imagenes que tienen un error con el HostListener, y la funcion que le
  // añadimos responde con un mensaje que añadimos en la consola y poniendo una imagen que está en assets.
@HostListener('error') manejaError():void{
  const elNative = this.elHost.nativeElement
  console.log('Esta imagen no funciona ->', this.elHost)
  elNative.src = '../../../assets/images/ErrorImagen.PNG'
}
  constructor(private elHost: ElementRef ) { }

}
