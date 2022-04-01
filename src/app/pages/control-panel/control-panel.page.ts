import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.page.html',
  styleUrls: ['./control-panel.page.scss'],
})
export class ControlPanelPage implements OnInit {

  data: any;

    constructor(private menu: MenuController, private router: Router) { }

    ngOnInit() {
        fetch('./assets/localData/student-accounts.json').then(res => res.json())
        .then(json => {
          this.data = json;
        });
    }

    openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
    }

    closeMenu() {
      this.menu.close();
    }

    dashboard() {
      this.router.navigate(['control-panel']);
    }

    studentList() {
      this.router.navigate(['student-list']);
    }

}
