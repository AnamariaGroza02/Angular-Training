import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() iconType?: string;
  // @Output() click = new EventEmitter();
  // handleEvent(event){
  //   this.click.emit
  // }
}
