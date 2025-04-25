import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {
  tableData: any;
  constructor(private dataService: DataService, private router: Router){

  }

  ngOnInit(){
    this.dataService.data$.subscribe((data: any)=>{
      this.tableData = data;
      console.log(data)
    })
  }

  onEdit(index: number){
    this.dataService.setEditIndex(index);
    this.router.navigate(["/add-data"])
  }

  onDelete(index: number){
    this.dataService.delete(index);
  }

}
