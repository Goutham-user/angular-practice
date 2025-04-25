import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentData = "Parent data";
  messageFromChild: any;

  parentEvent(data: any){
    console.log(data)
    this.messageFromChild = data;
  }

}
