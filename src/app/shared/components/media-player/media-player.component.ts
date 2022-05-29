import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  infoMedia : TrackModel ={
    cover:'https://podcasts.podinstall.com/assets/img/rs/original/17058f48e137ed024a886864bbaa5af9ea8d5b72-d78f2392.jpg',
    album:'Podcasts',
    name:'Jordi Wild',
    duracion:'2min',
    url:'http://localhost/track.mp3',
    _id: 1
  }
  
  listObservers$: Array<Subscription>=[]
  constructor(private multimedaService:MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimedaService.llamada.subscribe(

      (response: TrackModel) => {
        console.log('Recibiendo canción',response)
      })
    
      this.listObservers$=[observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe)
    console.log('ngondestroy');
    
  }

}
