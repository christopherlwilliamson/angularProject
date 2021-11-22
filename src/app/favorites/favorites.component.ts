import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  articles: any;
  constructor() { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites(){
    const val = localStorage.getItem('items');

    if (val != null){
      this.articles = JSON.parse(val);
    }
  }

  onUnfavorite(article: any){
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.articles));
  }

}
