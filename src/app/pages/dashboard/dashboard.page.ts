import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
      fetch('./assets/localData/student-accounts.json').then(res => res.json())
      .then(json => {
        this.data = json;
      });
  }

}
