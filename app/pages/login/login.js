"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var home_1 = require('../home/home');
var ionic_angular_3 = require('ionic-angular');
var LoginPage = (function () {
    function LoginPage(navCtrl, modalCtrl, alrtCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alrtCtrl = alrtCtrl;
    }
    LoginPage.prototype.showReg = function () {
        var regPage = this.modalCtrl.create(home_1.HomePage);
        regPage.present();
    };
    LoginPage.prototype.login = function () {
        if ((this.userLogin == null) || (this.passLogin == null)) {
            var alert_1 = this.alrtCtrl.create({
                title: 'Reminder',
                subTitle: 'Please be sure to fill all the required fields.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            console.log('ok good');
        }
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login/login.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_2.ModalController, ionic_angular_3.AlertController])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
