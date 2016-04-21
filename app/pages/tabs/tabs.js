import {Page} from 'ionic-angular';
import {GigsPage} from '../gigs/gigs';
import {GigDetailsPage} from '../gig-details/gig-details';
import {NewGigPage} from '../new-gig/new-gig';
import {Profile} from '../profile/profile';
import {TutorialPage} from '../tutorial/tutorial';
import {PortfolioDetailPage} from '../portfolio-detail/portfolio-detail'
import {SkillDetailPage} from '../skill-detail/skill-detail'

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page

    this.tab1Root = TutorialPage;
    this.tab2Root = Profile;
    this.tab3Root = GigsPage;
    this.tab4Root = GigDetailsPage;
    this.tab5Root = NewGigPage;
    this.tab6Root = PortfolioDetailPage;
    this.tab7Root = SkillDetailPage;
  }
}
