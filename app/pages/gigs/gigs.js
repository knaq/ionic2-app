import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the GigsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/gigs/gigs.html',
})
export class GigsPage {
  static get parameters() {
    return [[NavController]];
  }
  
  constructor(nav) {
    this.nav = nav;
  }
}
