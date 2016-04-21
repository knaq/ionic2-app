import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the NewGigPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-gig/new-gig.html',
})
export class NewGigPage {
  nav: NavController;
  
  constructor(nav: NavController) {
    this.nav = nav;
  }
  
  postJob() {
    this.nav.pop();
  }
}
