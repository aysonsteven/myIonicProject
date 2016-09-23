import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { AdminhomePage } from '../adminhome/adminhome';
import { SqlStorage } from 'ionic-angular';
import { Storage } from 'ionic-angular';
import { Local } from '../../providers/local/local';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  userLogin:string;
  passLogin:string;

  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private alrtCtrl: AlertController) {
  }

  showReg(){
    let regPage = this.modalCtrl.create(HomePage);
    regPage.present();
  }

  gototabbed(){
    let regPage = this.modalCtrl.create(AdminhomePage);
    regPage.present();
  }

  login(){
  
    if((this.userLogin === "")||(this.passLogin === "") || (this.userLogin == null) || (this.passLogin == null)){
      let alert = this.alrtCtrl.create({
             title: 'Warning',
             subTitle: 'Please be sure to fill all the required fields.',
             buttons: ['OK']
             });
             alert.present();
    }else{
      console.log('ok good')
    }
  }

}