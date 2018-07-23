import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { IPreviewProduct } from '../../interfaces/preview-product.interface';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  preview: IPreviewProduct;
  category: string;
  id: string;
  constructor(private activatedRoute: ActivatedRoute, public db: AngularFireDatabase, private router: Router) {
    this.preview = {
      customer: {
        fullName: 'ยายทองม้วน นามปาน',
        group: 'ประชาคมประชาชาติ',
        tel: '0930373831',
        line: '-',
        facebook: '-',
        instagram: '-',
        province: 'พิษณุโลก',
        zipCode: 65000,
        district: 'เมือง',
        subDistrict: 'ท่าโพธิ์'
      },
      product: {
        name: '',
        detail: '',
        image: '',
        targetGroup: [],
        distribution: []
      },
      typeOfPackging: {
        paper: 0,
        plastic: 0,
      },
      createIdeas: {
        packagingDesignConcept: 0,
        moodAndTone: 0,
        color: 'red'
      }
    };
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.category = params.get('category');
    });
  }

  ngOnInit() {
    console.log(this.preview);
  }

  back() {
    this.router.navigate(['/category/' + this.category]);
  }

}
