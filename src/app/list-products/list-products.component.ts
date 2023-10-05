import { Component, OnInit } from '@angular/core';
import { Phone } from '../model/Phone';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../services/app.service';
import { Product } from '../model/Product';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products!: Product[];

    constructor(private productService: AppService) {}

    ngOnInit() {
       this.productService.getProductList().subscribe
        ((data) => (this.products = data));
      //   this.representatives = [
      //     { name: 'Amy Elsner', image: 'amyelsner.png' },
      //     { name: 'Anna Fali', image: 'annafali.png' },
      //     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      //     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      //     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      //     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      //     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      //     { name: 'Onyama Limba', image: 'onyamalimba.png' },
      //     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      //     { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
      // ];

      this.statuses = [
          { label: 'Unqualified', value: 'unqualified' },
          { label: 'Qualified', value: 'qualified' },
          { label: 'New', value: 'new' },
          { label: 'Negotiation', value: 'negotiation' },
          { label: 'Renewal', value: 'renewal' },
          { label: 'Proposal', value: 'proposal' }
      ];
    }


    statuses!: any[];

    loading: boolean = true;
    selectedProducts!: Product[] | null;
    activityValues: number[] = [0, 100];


    clear(table: Table) {
        table.clear();
    }
  
}
