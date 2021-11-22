import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  news: any;
  categories = [
    'World',
    'India',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science'
  ]

  // Inject news service
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getCategoryData(this.categories[0])
  }

  onGetCategoryData(category: any){
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category: any){
    this.newsService.getData(`everything?q=${category.toLowerCase()}`).subscribe(data => {
      this.news = data;
    })
  }

}
