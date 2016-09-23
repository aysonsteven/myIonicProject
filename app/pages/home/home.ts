import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SqlStorage } from 'ionic-angular';
import { Storage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Local } from '../../providers/local/local';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    memberName:string;

    firstName:string;
    lastName:string;
    userName:string;
    passWord:string;

  public myDB: Storage;
  public registerdMem: Array<Object>;

  public constructor(private navCtrl: NavController, private alrtCtrl: AlertController, private viewCtrl: ViewController) {
        this.myDB = new Storage(SqlStorage);
        this.myDB.query("CREATE TABLE IF NOT EXISTS tblMember (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, username TEXT, password TEXT)");
        this.registerdMem = [];
    }

    public showalert(){
        let alertt = this.alrtCtrl.create({
            title: 'this',
            message: 'that',
            buttons: ['ok']
        })

    }
 
    public onPageLoaded() {
        this.refresh();
    }
    dismisstoLogin(){
        this.viewCtrl.dismiss();
    }

    public delete(event, person){
        this.myDB.query("DELETE FROM tblMember WHERE id =" + person.id).then((data) => {
           if(data.res.rows.length > 0) {
                this.registerdMem = [];
                for(let i = 0; i < data.res.rows.length; i++) {
                    this.registerdMem.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                        "username": data.res.rows.item(i).username,
                        "password": data.res.rows.item(i).password,
                    });
                }
            }
        }, (error) => {
            console.log(error);
        });
    }

    public deleteAlert(event, person){
         let confirm = this.alrtCtrl.create({
      title: 'Confirm delete?',
      message: 'Are you sure you want to delete this user ' + person.firstname + ' ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.myDB.query("DELETE FROM tblMember WHERE id =" + person.id).then((data) => {
           if(data.res.rows.length > 0) {
                this.registerdMem = [];
                for(let i = 0; i < data.res.rows.length; i++) {
                    this.registerdMem.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                        "username": data.res.rows.item(i).username,
                        "password": data.res.rows.item(i).password,
                    });
                }
            }
        }, (error) => {
            console.log(error);
        })
          }
        }
      ]
    });
    confirm.present();
  }
    public add() {
        if((this.userName == null) || (this.passWord == null)  || (this.firstName == null) || (this.lastName == null)|| (this.userName == "") || (this.passWord == "")|| (this.firstName == "") || (this.lastName == "")) {
            let alert = this.alrtCtrl.create({
             title: 'Warning',
             subTitle: 'Please be sure that you have filled all the required fields.',
             buttons: ['OK']
             });
             alert.present();
        
        }else{
            let pword:string = null;
            let uname:string = null;
            let fname:string = null;
            let lname:string = null;

            fname = this.firstName;
            lname = this.lastName;
            pword = this.passWord;
            uname = this.userName;
            this.myDB.query("INSERT INTO tblMember (firstname, lastname, username, password) VALUES (?, ?, ?, ?)", [fname, lname, uname, pword]).then((data) => {
                this.firstName = null,
                this.lastName = null,
                this.userName = null,
                this.passWord = null
            this.registerdMem.push({
                "firstname": fname,
                "lastname": lname,
                "username": uname,
                "password": pword
            });
        }, (error) => {
            console.log(error);
        });
        }
        
    }

    itemClicked(event, person){
        console.log(person.firstname);
        this.memberName = person.id + " " + person.firstname
    }
 
    public refresh() {
        this.myDB.query("SELECT * FROM tblMember").then((data) => {
            if(data.res.rows.length > 0) {
                this.registerdMem = [];
                for(let i = 0; i < data.res.rows.length; i++) {
                    this.registerdMem.push({
                        "id": data.res.rows.item(i).id,
                        "firstname": data.res.rows.item(i).firstname,
                        "lastname": data.res.rows.item(i).lastname,
                        "username": data.res.rows.item(i).username,
                        "password": data.res.rows.item(i).password,
                    });
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
 
}