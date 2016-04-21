import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the GigDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/gig-details/gig-details.html',
})
export class GigDetailsPage {
  nav: NavController;

  constructor(nav: NavController) {
    this.nav = nav;
  }
}
