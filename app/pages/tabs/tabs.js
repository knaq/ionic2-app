import {Page} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Profile} from '../profile/profile';
import {Page3} from '../page3/page3';
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
    this.tab1Root = Page1;
    this.tab2Root = Profile;
    this.tab3Root = Page3;
    this.tab4Root = TutorialPage;
    this.tab5Root = PortfolioDetailPage;
    this.tab6Root = SkillDetailPage;
  }
}
