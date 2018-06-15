import { Component, OnInit, Input } from '@angular/core';
import { News } from '../businessClass/news';
import { EventService } from '../event.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
  @Input() news: News;

  markReaded(id): void {
    this.eventService.markReaded(id);
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

}
