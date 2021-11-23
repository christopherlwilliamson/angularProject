import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {
  news: any;
  selected: any;

  constructor(private newsService: NewsService) {

   }

  ngOnInit() {
    this.selected = this.sources[0].id;
    this.getData(this.selected);
    };

    onSourceChange(){
      this.getData(this.selected);
    };

    getData(selected: any){
      this.newsService.getData(`top-headlines?sources=${selected}`).subscribe(data => {
        this.news = data;
      })
    };

  sources = [
    {
      "id": null,
      "name": "Daily Mail"
    },
    {
      "id": "reuters",
      "name": "Reuters"    },
    {
      "id": null,
      "name": "New York Times"    },
    {
      "id": "usa-today",
      "name": "USA Today"    },
  ];
};
