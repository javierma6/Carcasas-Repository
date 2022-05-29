import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/podcasts.json'
@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: Array<TrackModel> =[]
  optionSort:{property:string|null, order:string} ={property:null, order: 'ascendente'}
  constructor() { }

  ngOnInit(): void {
    const {data} : any = (dataRaw as any).default
    this.tracks=data;
  }

cambiarOrden(propiedad:string):void{
const {order} = this.optionSort
 this.optionSort={
  property:propiedad,
   order: order==='ascendente'? 'descendente' : 'ascendente'
 }
}

}
