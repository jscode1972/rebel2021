import { Component, OnInit, Input } from '@angular/core';
import { LayoutMenu, MENUS } from '../models/layout-menu';

@Component({
  selector: 'app-ez-layout',
  templateUrl: './ez-layout.component.html',
  styleUrls: ['./ez-layout.component.css']
})
export class EzLayoutComponent implements OnInit {
  // @Input()
  menus: LayoutMenu[];

  constructor() {
    this.menus = MENUS;
  }

  ngOnInit(): void {
  }

}
