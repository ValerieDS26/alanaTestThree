import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vacancy } from '../../app/classes/Vacancy';

/**
 * Generated class for the VacanciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacancies',
  templateUrl: 'vacancies.html',
})
export class VacanciesPage {

  vacancies: Vacancy[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vacancies = [];
  }

  ionViewDidLoad() {
    this.vacancies=this.navParams.get('vacancies');
  }

  ionViewWillEnter(){
    document.querySelector(".tabbar")['style'].display = 'none';
  }

  ionViewWillLeave(){
    document.querySelector(".tabbar")['style'].display = 'flex';
  }

}
