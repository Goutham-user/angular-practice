import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: false,
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.scss'
})
export class ApiDataComponent implements OnInit {
  apidata: any;

  constructor(private apiService : ApiService){}

  ngOnInit(){
    this.apiService.getPosts().subscribe(((data: any)=>{
      this.apidata = data;
    }))
  }

}
