import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServicesProvider } from '../../providers/services/services';
import { Candidate } from '../../app/classes/Candidate';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public candidate: Candidate;
  private loader:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServicesProvider,
    public storage: Storage,
    public loadingCtrl:LoadingController) {
      this.candidate = new Candidate();
  }

  ionViewDidLoad() {
    this.presentLoader('Espere un momento, cargando información...');
    this.storage.ready().then(()=>{
      this.storage.get('token').then((token)=>{

        this.serviceProvider.getUserData(token).subscribe(response =>{
          this.candidate = response;
          this.leaveLoader();
        },err=>{
          this.leaveLoader();
          console.log(err);
        });
      })
    })
  }

  private presentLoader(msj): void {
    this.loader = this.loadingCtrl.create({
      content: msj,
    });
    this.loader.present();
  }
  
  private leaveLoader(): void{
    this.loader.dismiss();
  }

}
