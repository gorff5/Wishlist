import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { DATA } from './DATA';
import 'rxjs/Rx';

@Injectable()
export class WishlistService {
  currentItem: any;
  constructor() { }
  getData(): Observable<any[]> {
    return Observable.from(DATA);
  }
  getItem(id): Observable<any[]> {
    return Observable.from(DATA).filter(item => item.id === id);
  }
  saveOrUpdateItem(obj): void {
    if (obj.id != null) {
      this.updateItem(obj);
    } else {
      this.saveItem(obj);
    }
  }
  saveItem(obj): void {
   DATA.push({id: DATA.length + 1, name: obj.name, details: obj.details});
  }
  updateItem(obj): void {
   Observable.from(DATA).subscribe(item => {
     if(item.id === obj.id){
       item.name = obj.name;
       item.details = obj.details;
     }
   });
  }
}
