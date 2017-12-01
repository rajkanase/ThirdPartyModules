import { Component, OnInit,NgZone} from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService, AppGlobals } from 'angular2-google-login';
// import { NgZone } from 'angular2-google-login/node_modules/@angular/core/src/zone/ng_zone';


@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css'],
  providers: [AuthService]  
})
export class SocialLoginComponent implements OnInit{


  imageURL: string;
  email: string;
  name: string;
  token: string;
  phone: string;
  gender: any;
  check = true;
  showModal: boolean;

  constructor(
    private auth: AuthService,
    private zone:NgZone
  ){ }
  
  ngOnInit() {

    AppGlobals.GOOGLE_CLIENT_ID = '267478569756-btbr39utjiaq2fhru17hgghreqo6g7ra.apps.googleusercontent.com';
    this.getData();
        setTimeout(() => { this.googleAuthenticate(); }, 50);
  }


  googleAuthenticate() {
    this.auth.authenticateUser((result) => {
      this.zone.run(() => {
        console.log('login success');
        // console.log(this.getData());
        this.getData();
      });
    });
  }

  getData() {
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
     this.phone = localStorage.getItem('phone');
  }


  logout(){
    this.auth.userLogout(()=>{
      console.log("User Logout");
    });
  }
 
  
  
}
