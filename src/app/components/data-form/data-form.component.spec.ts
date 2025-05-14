import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataFormComponent } from './data-form.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';

class MockDataService {
  private data = [{ name: 'Sahana MM', email: 'sahana@example.com' }];
  data$ = of(this.data);
  editIndex$ = of(null);
  currentData = this.data;

  add(item: any) {
    this.data.push(item);
  }

  update(item: any, index: number) {
    this.data[index] = item;
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }

  setEditIndex(index: number) {}
}

describe('DataFormComponent', () => {
  let component: DataFormComponent;
  let fixture: ComponentFixture<DataFormComponent>;
  let dataService: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataFormComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [{ provide: DataService, useClass: MockDataService }]
    }).compileComponents();

    fixture = TestBed.createComponent(DataFormComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as unknown as MockDataService;
    fixture.detectChanges();
  });

  it('should create the form with name and email controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.value).toEqual({ name: '', email: '' });
  });

  it('should add new data on submit if not in edit mode', () => {
    component.form.setValue({ name: 'Usha', email: 'usha@example.com' });
    component.onSubmit();
    expect(dataService.currentData.length).toBe(2);
    expect(dataService.currentData[1]).toEqual({ name: 'Usha Doe', email: 'usha@example.com' });
  });

  it('should update data on submit if in edit mode', () => {
    dataService.setEditIndex(0);
    component.form.setValue({ name: 'Updated Name', email: 'updated@example.com' });
    component.onSubmit();
    expect(dataService.currentData[0]).toEqual({ name: 'Updated Name', email: 'updated@example.com' });
  });
});
