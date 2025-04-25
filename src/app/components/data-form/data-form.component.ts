import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss'
})
export class DataFormComponent implements OnInit {
  form: FormGroup;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder, private dataService: DataService){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email]
    })
  }

  ngOnInit(){
    this.dataService.editIndex$.subscribe((index)=>{
      this.editIndex = index;
      if(index !== null){
        const data = this.dataService.currentData[index];
        this.form.setValue({ name: data.name, email: data.email})
      }
      else{
        this.form.reset();
      }
    })
  }


  onSubmit(){
    if(this.form.invalid) return;

    
    if(this.editIndex === null){
      this.dataService.add(this.form.value);
    }
    else{
      this.dataService.update(this.form.value, this.editIndex)
    }
    // console.log(this.form.value);
    this.form.reset();
  }

}
