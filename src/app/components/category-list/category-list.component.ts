import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  id: string;
  items: Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute, public db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.db.database.ref('categories')
      .child(this.id)
      .child('items')
      .once('value', function (snap) {
        //console.log('snap', snap.val());
      }).then(v => {
        this.items = v.val();
        
      });
  }

}
