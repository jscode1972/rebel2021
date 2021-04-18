import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ez-calendar',
  templateUrl: './ez-calendar.component.html',
  styleUrls: ['./ez-calendar.component.css']
})
export class EzCalendarComponent implements OnInit {
  d1: number;
  d2: number;

  constructor() {
    // 如果站台常常編譯失敗, 開啟本檔存擋, 重新編譯
  }

  ngOnInit(): void {
    console.log(window.$);
    this.bind();
  }

  bind(): void {
    console.log(window.$);
    window.$('#cc').calendar({
      onSelect: function(date){
        alert(date.getFullYear()+":"+(date.getMonth()+1)+":"+date.getDate());
      }
    });
  }

  moveTo1(): void {
    let d = new Date();
    d.setDate(-30);
    window.$('#cc').calendar({
      year: 2021,
      month: 5,
      current: new Date(2021, 4, 1)
    });
  }

  moveTo2(): void {
    window.$('#cc').calendar('moveTo', new Date(2012, 6, 27));
  }
}
