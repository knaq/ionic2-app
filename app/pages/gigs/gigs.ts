import {Page, NavController} from 'ionic-angular';
import {GigDetailsPage} from '../gig-details/gig-details';
import {NewGigPage} from '../new-gig/new-gig';

/*
  Generated class for the GigsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/gigs/gigs.html',
})
export class GigsPage {
  nav: NavController;
  
  constructor(nav: NavController) {
    this.nav = nav;
  }
  
  viewGig() {
    this.nav.push(GigDetailsPage);
  }
  
  createNewGig() {
    this.nav.push(NewGigPage);
  }
}
