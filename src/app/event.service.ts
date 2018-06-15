import { Injectable } from '@angular/core';
import { Event } from './businessClass/event';
import { EVENTS } from './mock/events';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  getEvents(): Event[] {
    return EVENTS;
  }

  addEvent(newEvent): void {
    EVENTS.push(newEvent);
  }

  hideEvent(eventId): void {
    EVENTS.forEach((event) => {
      if (event.id === eventId) {
        event.hide = true;
      }
    });
  }

  markReaded(eventId): void {
    EVENTS.forEach((event) => {
      if (event.id === eventId) {
        event.readed = true;
      }
    });
  }

  constructor() { }
}
