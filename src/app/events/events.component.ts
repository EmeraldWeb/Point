import { Component, OnInit } from '@angular/core';
import { Event } from '../businessClass/event';
import { EventService } from '../event.service';
import { SortDate } from '../sort-date';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;
  newEvent = new Event();
  filters: object;

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

  sortDate(): void {
    this.events = SortDate(this.events);
  }

  sortDateReverse(): void {
    this.events = SortDate(this.events).reverse();
  }

  sortAll(): void {
    this.events = this.eventService.getEvents();
  }

  sortNews(): void {
    const eventsArray = this.eventService.getEvents();
    this.events = eventsArray.filter(event => event.type === 'news');
  }

  sortTransactions(): void {
    const eventsArray = this.eventService.getEvents();
    this.events = eventsArray.filter(event => event.type === 'transaction');
  }

  submitNewEvent(): void {
    this.newEvent.date = new Date();
    if (!this.newEvent.id) {
      this.newEvent.id = Math.floor(Math.random() * 100);
    }
    if (!(this.newEvent.type === 'news' || this.newEvent.type === 'transaction')) {
      this.newEvent.type = 'other';
    }

    this.eventService.addEvent(this.newEvent);
    this.newEvent = new Event();
    this.sortAll();
  }

  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.sortDate = this.sortDate.bind(this);
    this.sortDateReverse = this.sortDateReverse.bind(this);
    this.sortAll = this.sortAll.bind(this);
    this.sortNews = this.sortNews.bind(this);
    this.sortTransactions = this.sortTransactions.bind(this);

    this.filters = [
      {type: 'Newest', func: this.sortDate},
      {type: 'Oldest', func: this.sortDateReverse},
      {type: 'All', func: this.sortAll},
      {type: 'News', func: this.sortNews},
      {type: 'Transactions', func: this.sortTransactions},
    ];

    this.getEvents();
  }
}
