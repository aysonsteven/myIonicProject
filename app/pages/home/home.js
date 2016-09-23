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
var ionic_angular_3 = require('ionic-angular');
var ionic_angular_4 = require('ionic-angular');
var ionic_angular_5 = require('ionic-angular');
var HomePage = (function () {
    function HomePage(navCtrl, alrtCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.alrtCtrl = alrtCtrl;
        this.viewCtrl = viewCtrl;
        this.myDB = new ionic_angular_3.Storage(ionic_angular_2.SqlStorage);
        this.myDB.query("CREATE TABLE IF NOT EXISTS tblMember (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, username TEXT, password TEXT)");
        this.registerdMem = [];
    }
    HomePage.prototype.onPageLoaded = function () {
        this.refresh();
    };
    HomePage.prototype.dismisstoLogin = function () {
        this.viewCtrl.dismiss();
    };
    HomePage.prototype.delete = function () {
        var _this = this;
        this.myDB.query("DELETE FROM tblMember").then(function (data) {
            if (data.res.rows.length > 0) {
                _this.registerdMem = [];
                for (var i = 0; i < data.res.rows.length; i++) {
                    _this.registerdMem.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                        "username": data.res.rows.item(i).username,
                        "password": data.res.rows.item(i).password,
                    });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.add = function () {
        var _this = this;
        if ((this.userName == null) || this.passWord == null) {
            var alert_1 = this.alrtCtrl.create({
                title: 'Reminder',
                subTitle: 'Please be sure that you have filled all the required fields.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var pword = null;
            var uname = null;
            var fname = null;
            var lname = null;
            fname = this.firstName;
            lname = this.lastName;
            pword = this.passWord;
            uname = this.userName;
            this.myDB.query("INSERT INTO tblMember (firstname, lastname, username, password) VALUES (?, ?, ?, ?)", [fname, lname, uname, pword]).then(function (data) {
                _this.registerdMem.push({
                    "firstname": _this.firstName,
                    "lastname": _this.lastName,
                    "username": _this.userName,
                    "password": _this.passWord
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    HomePage.prototype.itemClicked = function () {
        console.log('ok');
    };
    HomePage.prototype.refresh = function () {
        var _this = this;
        this.myDB.query("SELECT * FROM tblMember").then(function (data) {
            if (data.res.rows.length > 0) {
                _this.registerdMem = [];
                for (var i = 0; i < data.res.rows.length; i++) {
                    _this.registerdMem.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                        "username": data.res.rows.item(i).username,
                        "password": data.res.rows.item(i).password,
                    });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_4.AlertController, ionic_angular_5.ViewController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
