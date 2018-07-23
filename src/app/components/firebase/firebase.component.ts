import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface ICategories {
  name: string;
}
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';

  itemValue = '';
  items: Observable<any[]>;
  categories: Observable<any[]>;
  category: ICategories;
  obj: Observable<any[]>;

  cat: number;
  list: string[];
  constructor(public db: AngularFireDatabase) {
    this.category = {
      name: ''
    };
    this.items = db.list('items').valueChanges();
    this.categories = db.list('categories').valueChanges();
    this.cat = 0;
    this.db.list('items/categories')
      .query
      .on('value', function (snap) {
        console.log(snap.val());
      });

  }

  onLoad() {
    this.db.database.ref('categories')
      .child('cate1')
      .child('items')
      .once('value', function (snap) {
        console.log('snap',snap.val())
      }).then(v => {
        this.obj = v.val();
        console.log('obj',this.obj)
      });
    // this.db.list('items').query.orderByChild('categories').on('value', function (snap) {
    //   console.log(snap.val())
    // });

  }
  onAddCat() {
    this.db.list('/categories').push(this.category);
    this.category.name = '';
  }
  onSubmit() {
    this.db.list('/items').push({
      content: this.itemValue,
      categories: [1, 2]
    });
    this.itemValue = '';
  }
  onCickCat(item) {
    console.log(item)
  }

}
