import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchName: string, searchAmount: number | null): any[] {
    if (!items)
      return [];
    if (!searchName && !searchAmount)
      return items;

    return items.filter(item => {
      const matchesName = !searchName || item.customerName.toLowerCase().includes(searchName.toLowerCase());
      const matchesAmount = searchAmount === null || item.amount === searchAmount;
      return matchesName && matchesAmount;
    });
  }

}
