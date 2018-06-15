import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../businessClass/transaction';
import { EventService } from '../event.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;

  hideTransaction(id): void {
    this.eventService.hideEvent(id);
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

}
