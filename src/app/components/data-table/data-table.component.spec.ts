import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableComponent } from './data-table.component';
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

const mockRouter = { navigate: jasmine.createSpy('navigate') };

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let dataService: MockDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: DataService, useClass: MockDataService },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as unknown as MockDataService;
    fixture.detectChanges();
  });

  it('should render data in the table', () => {
    expect(component.tableData.length).toBe(1);
    expect(component.tableData[0].name).toBe('Usha');
  });

  it('should navigate to the form component on edit', () => {
    component.onEdit(0);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/add-data']);
  });

  it('should delete data on delete button click', () => {
    component.onDelete(0);
    expect(dataService.currentData.length).toBe(0);
  });
});
