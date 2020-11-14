import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {
	@Input() quotes;
	@Output() onQuoteClicked = new EventEmitter<any>();

	ngOnInit(): void {}
	
	public playQuote(quote) {
		this.onQuoteClicked.emit(quote);
	}
}
