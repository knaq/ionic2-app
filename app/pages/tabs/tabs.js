import {Page} from 'ionic-angular';
import {GigsPage} from '../gigs/gigs';
import {GigDetailsPage} from '../gig-details/gig-details';
import {NewGigPage} from '../new-gig/new-gig';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab3Root = GigsPage;
    this.tab4Root = GigDetailsPage;
    this.tab5Root = NewGigPage;
  }
}
