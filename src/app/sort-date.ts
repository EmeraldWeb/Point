import { Event } from './businessClass/event';

export function SortDate(array: Event[]): Event[] {
    const factor = 1.247;
    let gapFactor = array.length / factor;

    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < array.length; i++, j++) {
            if (array[i].date.getTime() <= array[j].date.getTime()) {
                [ array[i], array[j] ] = [ array[j], array[i] ];
            }
        }
        gapFactor = gapFactor / factor;
    }

    return array;
}
