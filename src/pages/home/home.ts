import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServicesProvider } from '../../providers/services/services';
import { VacanciesPage } from '../../pages/vacancies/vacancies';
import { Company } from '../../app/classes/Company';
import { Vacancy } from '../../app/classes/Vacancy';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public companies: Company[];
  public vacancies: Vacancy[];
  private loader:any;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServicesProvider,
    public storage: Storage,
    public loadingCtrl:LoadingController) {
      this.companies = [];
      this.vacancies = [];

    }

  ionViewDidLoad() {
    this.presentLoader('Espere un momento, cargando información...');
    this.storage.ready().then(()=>{
      this.storage.get('token').then((token)=>{
        this.serviceProvider.getCompanies(token).subscribe(response =>{
          this.leaveLoader();
          this.companies = response;
          for ( let item of this.companies ){ 
               item.distance = Math.round(item.distance);
          }
 
        },err=>{
          this.leaveLoader();
          console.log(err);
        });

      })
    })

  }


  public getVacancies(company: Company): void{
    this.presentLoader('Espere un momento, cargando información...');
    this.storage.ready().then(()=>{
      this.storage.get('token').then((token)=>{
        this.serviceProvider.getVacancies(token,company.idCompany).subscribe(response =>{
          this.leaveLoader();
          this.vacancies = response;
          this.navCtrl.push(VacanciesPage,{'vacancies':this.vacancies});
        },err=>{
          this.leaveLoader();
          console.log(err);
        });

      })
    })
  }

  private presentLoader(msj): void {
    this.loader = this.loadingCtrl.create({
      content: msj
    });
    this.loader.present();
  }
  
  private leaveLoader(): void{
    this.loader.dismiss();
  }

}
