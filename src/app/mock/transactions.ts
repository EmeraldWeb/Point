import { Transaction } from '../businessClass/transaction';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 3,
        date: new Date(2016, 12, 21),
        type: 'transaction',
        sum: 1000,
        currency: 'USD',
        from: 'Bank "Point"',
        description: 'Here comes the money',
        delta: true,
    },
    {
        id: 4,
        date: new Date(1990, 6, 11),
        type: 'transaction',
        sum: 100,
        currency: 'RUB',
        from: 'Bank "Sberbank"',
        description: 'Credit card payment',
        delta: false,
    },
    {
        id: 10,
        date: new Date(2007, 5, 16),
        type: 'transaction',
        sum: 500,
        currency: 'EUR',
        from: 'Vasiliy Ivanovich',
        description: 'All for you my friend',
        delta: true,
    },
];
