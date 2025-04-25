import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false, 
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() messageToParent = new EventEmitter<string>();

  sendMessage(){
    this.messageToParent.emit("Child Data")
  }

}
