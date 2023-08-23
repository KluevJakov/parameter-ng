import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from 'src/app/entity/category';
import { environment } from 'src/environments/environment';

const API_URL: string = environment.apiUrl;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  icats! : Category[];
  ecats! : Category[];

  creatingIncomeCategory!: Category;
  creatingExpendCategory!: Category;

  constructor(private http: HttpClient) {
    this.creatingIncomeCategory = new Category({});
    this.creatingExpendCategory = new Category({});
  }

  createIncomeCategory() {
    this.http.post<any>(API_URL + '/category/create', this.creatingIncomeCategory)
    .subscribe({
      error: this.handleError.bind(this),
      next: this.process.bind(this)
    });
  }

  createExpendCategory() {
    this.http.post<any>(API_URL + '/category/create', this.creatingExpendCategory)
    .subscribe({
      error: this.handleError.bind(this),
      next: this.process.bind(this)
    });
  }

  handleError(error: HttpErrorResponse) {
  }

  process() {
    
  }
}
