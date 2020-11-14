import { Component, OnInit, Input } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
    @Input() index;
	@Input() quote;
	
	public faPlay;

    ngOnInit(): void {
		this.faPlay = faPlay;
    }
}
