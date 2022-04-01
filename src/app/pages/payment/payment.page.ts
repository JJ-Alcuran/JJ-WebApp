import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  data:any;
  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
      fetch('./assets/localData/student-payments.json').then(res => res.json())
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

    payment() {
              this.router.navigate(['payment']);
            }

}
