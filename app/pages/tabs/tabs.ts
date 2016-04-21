import {Page} from 'ionic-angular';
import {GigsPage} from '../gigs/gigs';
import {Profile} from '../profile/profile';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  gigsTab: any = GigsPage;
  profileTab: any = Profile;
}
