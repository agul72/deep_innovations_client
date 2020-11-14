import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterTextPipe implements PipeTransform {
	transform(items: any[], subText: string): any {
		if (!items) return null;
		if (!subText) return items;

		return items.filter(item => {
			return item.title.toLowerCase().includes(subText.toLowerCase());
		});
	}
}
