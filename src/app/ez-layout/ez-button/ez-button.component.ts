import { Component, OnInit, Input } from '@angular/core';
import { Num } from '../item';

@Component({
  selector: 'app-ez-button',
  templateUrl: './ez-button.component.html',
  styleUrls: ['./ez-button.component.css']
})
export class EzButtonComponent implements OnInit {
  @Input() caption: string;
  // @Input() icon: string;
  @Input() n: Num;

  constructor() {   }

  ngOnInit(): void {
    console.log(this.caption);
    // $('#btn-edit').splitbutton('disable');
    // console.log($);
  }

}
