import { Component, HostBinding, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'red'
      })),
      transition('open => close', [
        animate('1s',
        style ({ transform: 'translateX(100%)' })
        )
      ]),
      transition('close => open', [
        animate('0.5s',
        style ({ transform: 'translateX(-100%)' }))
      ]),
      transition('* => open', [
        animate('0.5s',
        style ({ transform: 'translateX(-50%)' }))
      ]),
      transition('* => close', [
        animate('0.5s',
        style ({ transform: 'translateX(50%)' }))
      ])
    ])
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  
})
export class OpenCloseComponent  implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit() {}

}
