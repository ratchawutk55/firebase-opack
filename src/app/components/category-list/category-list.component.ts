import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
export interface Item {
  id: number;
  name: string;
  price: number;
  url: string;
}
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  id: string;
  items: Item[];
  loading: boolean;
  constructor(private activatedRoute: ActivatedRoute, public db: AngularFireDatabase) {
    this.items = [];
    // this.dao = new Observable<any[]>();
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.db.database.ref('categories')
      .child(this.id)
      .child('items')
      .once('value').then(v => {
        const data = v.val();
        const keys = Object.keys(v.val());
        keys.forEach(key => {
          data[key].url = 'category/' + this.id + '/' + data[key].id;
          this.items.push(data[key]);
          this.loading = false;
        });
      });
  }
}
