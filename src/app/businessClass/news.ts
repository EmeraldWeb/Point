import { Event } from './event';

export class News extends Event {
    header: string;
    content: string;
    readed: boolean;
}
