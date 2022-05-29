import { ArtistModel } from "./artist.model";


export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    duracion:string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}

// {
//     "data": [{
//             "_id": 1,
//             "name": "Podcast Jordi",
//             "album": "Podcast con Gerard Piqué",
//             "url": "",
//             "autor": { 
//                 "name": "Jordi wild",
//                 "nickname": "Wild Project",
//                 "nationality": "ES"
//             }
//         }
//         ]
        
        
//     }