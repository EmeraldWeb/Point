import { Event } from './event';

export class Transaction extends Event {
    sum: number;
    currency: string;
    from: string;
    description: string;
    delta: boolean;
}
