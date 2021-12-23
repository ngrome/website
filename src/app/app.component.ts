import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Video {
  title: string;
  url: string;
  author: string;
  eventDate: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Roma community website';

  videoList$: Observable<Video[]>;

  constructor(private afs: AngularFirestore) {

    this.videoList$ = afs.collection<Video>('videos',
      ref => {
        let query : firebase.default.firestore.CollectionReference | firebase.default.firestore.Query = ref;
        query = query.orderBy('eventDate', 'asc');
        return query;
      }).valueChanges();

  }

}
