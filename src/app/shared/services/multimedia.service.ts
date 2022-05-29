import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  llamada:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
}
