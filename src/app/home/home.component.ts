import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { subscribeOn } from 'rxjs';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  news: any;
  newsSubscription: any;

  length: any;
  pageSize = 8;
  page = 1;
  pageEvent: PageEvent = new PageEvent;

  constructor(
    private newsService: NewsService, 
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.newsSubscription = this.newsService
    // Paginator does not work
    .getData(`top-headlines?country=us&pageSize=${this.pageSize}&page=${ this.pageEvent.pageIndex + 1}`
    )
    .subscribe(data => {
      this.news = data;
      this.length =  {data:['totalResults']}
    });
  }

  onPageChange(event: any) {
    console.log(event);
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

  onFavorite(article: any) 
  {
   console.log(article); 

   let items = [];
   const val = localStorage.getItem('items');

   if(val != null){
     items = JSON.parse(val);
   }
   items.push(article);
   localStorage.setItem('items', JSON.stringify(items));
   this.snackBar.open('Favorite Added', 'ok', {
   duration: 3000
  });
}
}
