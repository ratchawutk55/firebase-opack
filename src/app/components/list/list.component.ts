import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  category: string;
  id: string;
  constructor(private activatedRoute: ActivatedRoute, public db: AngularFireDatabase, private router: Router) {

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.category = params.get('category');
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/category/' + this.category]);
  }
}
