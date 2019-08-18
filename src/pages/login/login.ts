import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import { ServicesProvider } from '../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public formData: FormGroup;
  private loader:any;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public modalCtrl:ModalController,
    public serviceProvider: ServicesProvider,
    public storage: Storage,
    public loadingCtrl:LoadingController,
    public alertCtrl: AlertController) {

    this.formData = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
  }


  public login(): void{
    this.presentLoader('Espere un momento, iniciando sesión...');
    this.serviceProvider.login(this.formData)
    .subscribe((response)=>{
      this.leaveLoader();
      this.storage.set('token',response['token']);
      this.navCtrl.setRoot(DashboardPage);
    },err=>{
      console.log(err);
      this.leaveLoader();
      if(err.status == 401){
        this.showAlert();
      }
    });

  }

  private showAlert(): void {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: "Email o contraseña inválida.",
      buttons: ['OK']
    });
    alert.present();
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
