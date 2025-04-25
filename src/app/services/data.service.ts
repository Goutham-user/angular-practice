import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<any[]>([]);
  data$ = this.data.asObservable();

  private editIndex = new BehaviorSubject<number | null>(null);
  editIndex$ = this.editIndex.asObservable();

  constructor() { }

  get currentData(): any[] {
    return this.data.value;
  }

  add(person: any){
    this.data.next([...this.currentData, person])
  }

  setEditIndex(index: number){
    this.editIndex.next(index)
  }

  delete(index: number){
    const updated = [...this.currentData];
    updated.splice(index, 1);
    this.data.next(updated);
  }

  update(data: any, index: number){
    const updated = [...this.currentData];
    updated[index] = data;
    this.data.next(updated);
  }
}
